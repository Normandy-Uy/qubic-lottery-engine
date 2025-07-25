import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface JackpotData {
  qubic: number;
  usd: number;
  btc: number;
  eth: number;
  sol: number;
}

export function JackpotDisplay() {
  const { data: jackpot, isLoading } = useQuery<JackpotData>({
    queryKey: ["/api/lottery/jackpot"],
    refetchInterval: 30000, // Update every 30 seconds
  });

  if (isLoading) {
    return (
      <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>🏆</span>
            <span>Current Jackpot</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Skeleton className="h-8 w-48 bg-blue-500/30" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32 bg-blue-500/30" />
            <Skeleton className="h-4 w-32 bg-blue-500/30" />
            <Skeleton className="h-4 w-32 bg-blue-500/30" />
            <Skeleton className="h-4 w-32 bg-blue-500/30" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!jackpot) {
    return (
      <Card className="bg-gradient-to-br from-red-600 to-red-700 text-white">
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-red-200">Failed to load jackpot data</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>🏆</span>
          <span>Current Jackpot</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-3xl font-bold font-mono">
            {jackpot.qubic.toLocaleString()}
          </div>
          <div className="text-blue-200 text-sm">QUBIC</div>
        </div>
        
        <div className="border-t border-blue-400/30 pt-3 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-blue-200">USDT:</span>
            <span className="font-mono">${jackpot.usd.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-200">BTC:</span>
            <span className="font-mono">₿{jackpot.btc.toFixed(4)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-200">ETH:</span>
            <span className="font-mono">Ξ{jackpot.eth.toFixed(3)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-200">SOL:</span>
            <span className="font-mono">◎{jackpot.sol.toFixed(1)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
