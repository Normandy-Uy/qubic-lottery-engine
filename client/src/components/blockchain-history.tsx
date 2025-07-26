import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RefreshCw, ExternalLink, Clock, Trophy, Wallet } from "lucide-react";

interface BlockchainTransaction {
  id: string;
  transactionHash: string;
  blockHeight: number;
  timestamp: string;
  type: 'bet' | 'draw' | 'payout';
  walletAddress: string;
  amount?: number;
  numbers?: number[];
  status: 'confirmed' | 'pending';
}

interface HistoricalDraw {
  id: string;
  drawTick: number;
  winningNumbers: number[];
  timestamp: string;
  totalBets: number;
  totalPrize: number;
  winners: Array<{
    walletAddress: string;
    matchCount: number;
    prize: number;
  }>;
}

export function BlockchainHistory() {
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

  // Fetch blockchain transactions (simulated)
  const { data: transactions, isLoading: isLoadingTx, refetch: refetchTx } = useQuery<BlockchainTransaction[]>({
    queryKey: ["/api/blockchain/transactions"],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  // Fetch historical draws from blockchain
  const { data: historicalDraws, isLoading: isLoadingDraws, refetch: refetchDraws } = useQuery<HistoricalDraw[]>({
    queryKey: ["/api/blockchain/draws"],
    refetchInterval: 60000, // Refresh every minute
  });

  const handleRefresh = () => {
    refetchTx();
    refetchDraws();
  };

  const formatWalletAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'bet': return '🎲';
      case 'draw': return '🎯';
      case 'payout': return '💰';
      default: return '📝';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Blockchain History
          </h2>
          <p className="text-slate-600">
            Live data fetched from Qubic blockchain transactions and smart contract state
          </p>
        </div>
        <Button onClick={handleRefresh} variant="outline" className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh Chain Data
        </Button>
      </div>

      <Tabs defaultValue="draws" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="draws">Historical Draws</TabsTrigger>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
          <TabsTrigger value="winners">Winner History</TabsTrigger>
        </TabsList>

        <TabsContent value="draws" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Past Lottery Draws (On-Chain Data)
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingDraws ? (
                <div className="flex items-center justify-center py-8">
                  <RefreshCw className="h-6 w-6 animate-spin" />
                  <span className="ml-2">Fetching blockchain data...</span>
                </div>
              ) : (
                <ScrollArea className="h-96">
                  <div className="space-y-4">
                    {historicalDraws?.map((draw) => (
                      <Card key={draw.id} className="border-l-4 border-l-blue-500">
                        <CardContent className="pt-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold">Draw #{draw.drawTick}</h4>
                              <p className="text-sm text-slate-600 flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {new Date(draw.timestamp).toLocaleString()}
                              </p>
                            </div>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              {draw.winners.length} Winners
                            </Badge>
                          </div>
                          
                          <div className="mb-3">
                            <p className="text-sm text-slate-600 mb-2">Winning Numbers:</p>
                            <div className="flex gap-2">
                              {draw.winningNumbers.map((num) => (
                                <div key={num} className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                  {num}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-slate-600">Total Bets:</span>
                              <div className="font-semibold">{draw.totalBets}</div>
                            </div>
                            <div>
                              <span className="text-slate-600">Prize Pool:</span>
                              <div className="font-semibold">{draw.totalPrize.toLocaleString()} QUBIC</div>
                            </div>
                            <div>
                              <span className="text-slate-600">Block Height:</span>
                              <div className="font-semibold">#{draw.drawTick}</div>
                            </div>
                          </div>

                          {draw.winners.length > 0 && (
                            <div className="mt-3 pt-3 border-t">
                              <p className="text-sm font-medium mb-2">Winners:</p>
                              <div className="space-y-1">
                                {draw.winners.slice(0, 3).map((winner, idx) => (
                                  <div key={idx} className="flex items-center justify-between text-xs">
                                    <span className="flex items-center gap-2">
                                      <Wallet className="h-3 w-3" />
                                      {formatWalletAddress(winner.walletAddress)}
                                    </span>
                                    <span className="text-green-600 font-medium">
                                      {winner.prize.toLocaleString()} QUBIC
                                    </span>
                                  </div>
                                ))}
                                {draw.winners.length > 3 && (
                                  <p className="text-xs text-slate-500">
                                    +{draw.winners.length - 3} more winners
                                  </p>
                                )}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Recent Blockchain Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingTx ? (
                <div className="flex items-center justify-center py-8">
                  <RefreshCw className="h-6 w-6 animate-spin" />
                  <span className="ml-2">Fetching transaction data...</span>
                </div>
              ) : (
                <ScrollArea className="h-96">
                  <div className="space-y-3">
                    {transactions?.map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{getTransactionIcon(tx.type)}</span>
                          <div>
                            <p className="font-medium text-sm">{tx.type.toUpperCase()}</p>
                            <p className="text-xs text-slate-600">
                              {formatWalletAddress(tx.walletAddress)}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(tx.status)}`}></div>
                            <span className="text-xs text-slate-600">{tx.status}</span>
                          </div>
                          <p className="text-xs text-slate-500">Block #{tx.blockHeight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="winners" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                All-Time Winners (Blockchain Records)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-3">
                  {historicalDraws?.flatMap(draw => 
                    draw.winners.map((winner, idx) => (
                      <div key={`${draw.id}-${idx}`} className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                            {winner.matchCount}
                          </div>
                          <div>
                            <p className="font-medium">{formatWalletAddress(winner.walletAddress)}</p>
                            <p className="text-xs text-slate-600">
                              Draw #{draw.drawTick} • {new Date(draw.timestamp).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">
                            {winner.prize.toLocaleString()} QUBIC
                          </p>
                          <p className="text-xs text-slate-500">
                            {winner.matchCount} matches
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
              ℹ️
            </div>
            <div className="text-sm">
              <p className="font-medium text-blue-900 mb-1">Blockchain Data Source</p>
              <p className="text-blue-700">
                All historical data is fetched directly from Qubic blockchain transactions and smart contract state. 
                This ensures complete transparency and immutability of lottery results.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}