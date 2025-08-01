import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { apiRequest } from "@/lib/queryClient";
import { cn } from "@/lib/utils";
import { ShieldAlert, Plus, Send, RotateCcw, Wallet, HelpCircle, CheckCircle, ExternalLink } from "lucide-react";

interface WalletBetInfo {
  betCount: number;
  maxBets: number;
  remaining: number;
}

interface BetData {
  selectedNumbers: number[];
  amount: number;
}

export function LotterySimulator() {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [pendingBets, setPendingBets] = useState<BetData[]>([]);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [isWalletValid, setIsWalletValid] = useState<boolean>(false);
  const [walletError, setWalletError] = useState<string>("");
  const queryClient = useQueryClient();

  // Validate Qubic wallet address (56 uppercase letters)
  const validateWalletAddress = (address: string) => {
    const qubicWalletRegex = /^[A-Z]{56}$/;
    return qubicWalletRegex.test(address);
  };

  // Handle wallet address input
  const handleWalletChange = (value: string) => {
    const upperCaseValue = value.toUpperCase();
    setWalletAddress(upperCaseValue);
    
    if (upperCaseValue.length === 0) {
      setIsWalletValid(false);
      setWalletError("");
    } else if (upperCaseValue.length !== 56) {
      setIsWalletValid(false);
      setWalletError("Qubic wallet address must be exactly 56 characters");
    } else if (!validateWalletAddress(upperCaseValue)) {
      setIsWalletValid(false);
      setWalletError("Invalid format. Only uppercase letters A-Z allowed");
    } else {
      setIsWalletValid(true);
      setWalletError("");
    }
  };

  // Get wallet bet count (only when wallet is valid)
  const { data: walletInfo, isLoading: isLoadingWallet } = useQuery<WalletBetInfo>({
    queryKey: ["/api/lottery/wallet-bets", walletAddress],
    enabled: isWalletValid,
  });

  // Place single bet mutation
  const placeBetMutation = useMutation({
    mutationFn: async (betData: BetData) => {
      const response = await apiRequest("POST", "/api/lottery/place-bet", {
        walletAddress,
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
        walletAddress,
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

  const handleSendSingleBet = () => {
    if (selectedNumbers.length === 5) {
      const betData: BetData = {
        selectedNumbers: [...selectedNumbers].sort((a, b) => a - b),
        amount: 10000,
      };
      placeBetMutation.mutate(betData);
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
          Interactive Lottery Engine Demonstration
        </h2>
        <p className="text-slate-600 text-lg">
          Experience our anti-exploit lottery engine with Qubic Random Number Smart Contract and wallet-based bet limitations
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Lottery Interface */}
        <div className="lg:col-span-2 space-y-6">
          {/* Wallet Address Input */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-blue-600" />
                <CardTitle>Qubic Wallet Address</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-slate-400" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>Enter your 56-character Qubic wallet address (Receive-ID). This address will be used to track your bet limit and receive winnings.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="wallet-address">Enter your Qubic Wallet Address (Receive-ID)</Label>
                <div className="relative">
                  <Input
                    id="wallet-address"
                    type="text"
                    placeholder="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                    value={walletAddress}
                    onChange={(e) => handleWalletChange(e.target.value)}
                    maxLength={56}
                    className={cn(
                      "font-mono text-sm",
                      isWalletValid && "border-green-300 bg-green-50",
                      walletError && "border-red-300 bg-red-50"
                    )}
                  />
                  {isWalletValid && (
                    <CheckCircle className="absolute right-3 top-3 h-4 w-4 text-green-600" />
                  )}
                </div>
                {walletError && (
                  <p className="text-sm text-red-600">{walletError}</p>
                )}
                {walletAddress.length > 0 && (
                  <p className="text-xs text-slate-500">
                    {walletAddress.length}/56 characters
                  </p>
                )}
              </div>
              
              {/* Wallet Creation Links */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Don't have a Qubic wallet?</h4>
                <div className="space-y-2 text-sm">
                  <a
                    href="https://www.qubics.live/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Create wallet at Qubics.live
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=org.qubic.wallet&hl=en-US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Download Android App
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/qubic-wallet/id6502265811"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Download iOS App
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Number Selection Card */}
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
                  <strong>Fortress-Class Protection Active:</strong> Maximum 5 bets per wallet per draw to ensure fair play
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
                          : "hover:bg-blue-50 hover:border-blue-300",
                        !isWalletValid && "opacity-50"
                      )}
                      onClick={() => handleNumberClick(number)}
                      disabled={
                        !isWalletValid ||
                        (!selectedNumbers.includes(number) && selectedNumbers.length >= 5)
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

              {/* Wallet Required Alert */}
              {!isWalletValid && (
                <Alert className="border-red-200 bg-red-50">
                  <Wallet className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>Wallet Required:</strong> Please enter a valid Qubic wallet address above to place bets
                  </AlertDescription>
                </Alert>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t">
                <Button
                  onClick={handleSendSingleBet}
                  disabled={
                    !isWalletValid ||
                    selectedNumbers.length !== 5 || 
                    !canAddMoreBets ||
                    placeBetMutation.isPending
                  }
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Single Bet
                </Button>
                
                <Button
                  onClick={handleAddBet}
                  disabled={
                    !isWalletValid ||
                    selectedNumbers.length !== 5 || 
                    !canAddMoreBets ||
                    placeBetMutation.isPending
                  }
                  variant="outline"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Batch
                </Button>
                
                <Button
                  onClick={handleSendAllBets}
                  disabled={
                    !isWalletValid ||
                    pendingBets.length === 0 || 
                    batchBetsMutation.isPending
                  }
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Batch ({pendingBets.length})
                </Button>
                
                <Button
                  onClick={handlePlayAgain}
                  variant="outline"
                  disabled={placeBetMutation.isPending || batchBetsMutation.isPending}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
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
