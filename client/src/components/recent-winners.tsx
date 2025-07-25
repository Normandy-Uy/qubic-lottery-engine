import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { LotteryBet } from "@shared/schema";

export function RecentWinners() {
  const { data: winners, isLoading } = useQuery<LotteryBet[]>({
    queryKey: ["/api/lottery/recent-winners"],
    refetchInterval: 60000, // Update every minute
  });

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>🏅</span>
            <span>Recent Winners</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  if (!winners || winners.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>🏅</span>
            <span>Recent Winners</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 text-center">No recent winners to display</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span>🏅</span>
          <span>Recent Winners</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {winners.map((winner, index) => (
          <div
            key={winner.id}
            className={`border-l-4 pl-4 ${
              index === 0
                ? "border-green-500"
                : index === 1
                ? "border-blue-500"
                : "border-yellow-500"
            }`}
          >
            <div className="text-sm font-mono text-slate-600">
              {winner.walletAddress}
            </div>
            <div className="text-xs text-slate-500">
              {Array.isArray(winner.selectedNumbers) 
                ? (winner.selectedNumbers as number[]).join(", ")
                : "Invalid numbers"
              }
            </div>
            <div className={`text-sm font-semibold ${
              index === 0
                ? "text-green-600"
                : index === 1
                ? "text-blue-600"
                : "text-yellow-600"
            }`}>
              {winner.amount?.toLocaleString() || 0} QUBIC
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
