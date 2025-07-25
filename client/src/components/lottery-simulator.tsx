import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { apiRequest } from "@/lib/queryClient";
import { cn } from "@/lib/utils";
import { ShieldAlert, Plus, Send, RotateCcw } from "lucide-react";

interface WalletBetInfo {
  betCount: number;
  maxBets: number;
  remaining: number;
}

interface BetData {
  selectedNumbers: number[];
  amount: number;
}

const MOCK_WALLET_ADDRESS = "DEMO...WALLET";

export function LotterySimulator() {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [pendingBets, setPendingBets] = useState<BetData[]>([]);
  const queryClient = useQueryClient();

  // Get wallet bet count
  const { data: walletInfo, isLoading: isLoadingWallet } = useQuery<WalletBetInfo>({
    queryKey: ["/api/lottery/wallet-bets", MOCK_WALLET_ADDRESS],
  });

  // Place single bet mutation
  const placeBetMutation = useMutation({
    mutationFn: async (betData: BetData) => {
      const response = await apiRequest("POST", "/api/lottery/place-bet", {
        walletAddress: MOCK_WALLET_ADDRESS,
        selectedNumbers: betData.selectedNumbers,
        amount: betData.amount,
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/lottery/wallet-bets"] });
      setSelectedNumbers([]);
    },
  });

  // Batch bets mutation
  const batchBetsMutation = useMutation({
    mutationFn: async (bets: BetData[]) => {
      const response = await apiRequest("POST", "/api/lottery/batch-bets", {
        walletAddress: MOCK_WALLET_ADDRESS,
        bets,
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/lottery/wallet-bets"] });
      setPendingBets([]);
      setSelectedNumbers([]);
    },
  });

  const handleNumberClick = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
    } else if (selectedNumbers.length < 5) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  const handleAddBet = () => {
    if (selectedNumbers.length === 5) {
      const newBet: BetData = {
        selectedNumbers: [...selectedNumbers].sort((a, b) => a - b),
        amount: 10000,
      };
      setPendingBets([...pendingBets, newBet]);
      setSelectedNumbers([]);
    }
  };

  const handleSendAllBets = () => {
    if (pendingBets.length > 0) {
      batchBetsMutation.mutate(pendingBets);
    }
  };

  const handlePlayAgain = () => {
    setSelectedNumbers([]);
    setPendingBets([]);
  };

  const canAddMoreBets = walletInfo ? (walletInfo.betCount + pendingBets.length) < walletInfo.maxBets : false;
  const currentBetCount = walletInfo ? walletInfo.betCount + pendingBets.length : 0;
  const maxBets = walletInfo?.maxBets || 5;
  const progressPercentage = (currentBetCount / maxBets) * 100;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Interactive Lottery Demonstration
        </h2>
        <p className="text-slate-600 text-lg">
          Experience our anti-exploit lottery system with wallet-based bet limitations
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Lottery Interface */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Pick 5 Numbers (1-50)</CardTitle>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {currentBetCount} of {maxBets} bets used
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Anti-exploit warning */}
              <Alert className="border-amber-200 bg-amber-50">
                <ShieldAlert className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  <strong>Anti-Exploit Protection Active:</strong> Maximum 5 bets per wallet per draw to ensure fair play
                </AlertDescription>
              </Alert>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Betting Progress</span>
                  <span className="text-slate-900 font-medium">{currentBetCount}/{maxBets}</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
              </div>

              {/* Number Selection Grid */}
              <div>
                <h4 className="font-semibold mb-4">Select Numbers (Cost: 10,000 QUBIC per play)</h4>
                <div className="grid grid-cols-10 gap-2">
                  {Array.from({ length: 50 }, (_, i) => i + 1).map((number) => (
                    <Button
                      key={number}
                      variant={selectedNumbers.includes(number) ? "default" : "outline"}
                      size="sm"
                      className={cn(
                        "aspect-square p-0 text-sm font-semibold",
                        selectedNumbers.includes(number)
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "hover:bg-blue-50 hover:border-blue-300"
                      )}
                      onClick={() => handleNumberClick(number)}
                      disabled={
                        !selectedNumbers.includes(number) && 
                        selectedNumbers.length >= 5
                      }
                    >
                      {number}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Selected Numbers Display */}
              {selectedNumbers.length > 0 && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-semibold text-slate-900">Current Selection:</h5>
                    <span className="text-sm text-slate-600">{selectedNumbers.length}/5 selected</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedNumbers.sort((a, b) => a - b).map((number) => (
                      <Badge key={number} className="bg-blue-600 text-white">
                        {number}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Pending Bets Display */}
              {pendingBets.length > 0 && (
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-3">Pending Bets ({pendingBets.length}):</h5>
                  <div className="space-y-2">
                    {pendingBets.map((bet, index) => (
                      <div key={index} className="flex items-center justify-between bg-white rounded p-2">
                        <div className="flex gap-1">
                          {bet.selectedNumbers.map((num) => (
                            <Badge key={num} variant="outline" className="text-xs">
                              {num}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-sm text-slate-600">{bet.amount.toLocaleString()} QUBIC</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4 border-t">
                <Button
                  onClick={handleAddBet}
                  disabled={
                    selectedNumbers.length !== 5 || 
                    !canAddMoreBets ||
                    placeBetMutation.isPending
                  }
                  className="flex-1"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Bet
                </Button>
                
                <Button
                  onClick={handleSendAllBets}
                  disabled={
                    pendingBets.length === 0 || 
                    batchBetsMutation.isPending
                  }
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send All Bets ({pendingBets.length})
                </Button>
                
                <Button
                  onClick={handlePlayAgain}
                  variant="outline"
                  disabled={placeBetMutation.isPending || batchBetsMutation.isPending}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Play Again
                </Button>
              </div>

              {/* Cost Summary */}
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-slate-600">
                      Selected: {selectedNumbers.length > 0 ? "10,000 QUBIC" : "0 QUBIC"}
                    </p>
                    <p className="text-sm text-slate-600">
                      Pending: {(pendingBets.length * 10000).toLocaleString()} QUBIC
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-slate-900">
                      Total: {((pendingBets.length + (selectedNumbers.length === 5 ? 1 : 0)) * 10000).toLocaleString()} QUBIC
                    </p>
                    <p className="text-sm text-slate-500">
                      ≈ ${((pendingBets.length + (selectedNumbers.length === 5 ? 1 : 0)) * 10000 * 0.000002202).toFixed(3)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Transaction Status */}
              {(placeBetMutation.isPending || batchBetsMutation.isPending) && (
                <Alert>
                  <AlertDescription>
                    Processing transaction... Please wait.
                  </AlertDescription>
                </Alert>
              )}

              {batchBetsMutation.isSuccess && (
                <Alert className="border-green-200 bg-green-50">
                  <AlertDescription className="text-green-800">
                    ✅ All bets successfully submitted! Transaction hash: {batchBetsMutation.data?.transactionHash}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar with stats and info */}
        <div className="space-y-6">
          {/* Anti-Exploit Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ShieldAlert className="h-5 w-5 text-green-600" />
                <span>Anti-Exploit Protection</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>5-bet limit per wallet address</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Batch transaction optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Smart contract enforcement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Quorum-based validation</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Network Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Live Network Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Current Tick:</span>
                <span className="font-mono">13,847,291</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Active Bets:</span>
                <span className="font-mono">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Total Prize Pool:</span>
                <span className="font-mono text-green-600">8.2M QUBIC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Next Draw:</span>
                <span className="font-mono text-amber-600">2h 15m</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
