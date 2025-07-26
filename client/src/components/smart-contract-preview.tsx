import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SmartContractPreview() {
  const contractCode = `#include "qpi.h"
#include "qubic_random.h"

struct BetInput {
    id walletId;
    uint8 numbers[5];
    uint64 amount;
    uint64 drawTick;
};

struct BetOutput {
    bit success;
    uint8 betCount;
    uint64 totalCost;
    id transactionHash;
};

struct DrawResult {
    uint8 winningNumbers[5];
    uint64 drawTick;
    uint64 randomSeed;
};

// Anti-exploit: Track bets per wallet per draw
private:
    uint8 walletBetCounts[MAX_WALLETS][MAX_DRAWS];
    uint64 currentDrawTick;
    DrawResult previousDraws[100];

public:
    REGISTER_USER_FUNCTION(placeBet, 1);
    REGISTER_USER_FUNCTION(conductDraw, 2);
    
    BetOutput placeBet(BetInput input) {
        BetOutput output;
        uint32 walletIndex = getWalletIndex(input.walletId);
        
        // Enforce 5-bet limit per wallet per draw
        uint8 currentBets = walletBetCounts[walletIndex][input.drawTick];
        if (currentBets >= 5) {
            output.success = false;
            return output;
        }
        
        // Validate bet amount (10,000 QUBIC)
        if (input.amount != 10000) {
            output.success = false;
            return output;
        }
        
        // Validate number selection (1-50, unique)
        if (!validateNumbers(input.numbers)) {
            output.success = false;
            return output;
        }
        
        // Process bet and increment counter
        storeBet(input);
        walletBetCounts[walletIndex][input.drawTick]++;
        
        output.success = true;
        output.betCount = currentBets + 1;
        output.transactionHash = generateTxHash();
        
        return output;
    }
    
    DrawResult conductDraw(uint64 drawTick) {
        DrawResult result;
        result.drawTick = drawTick;
        
        // Generate winning numbers using Qubic Random Number Smart Contract
        uint64 seed = getCurrentTick() + drawTick;
        RandomSeed randomSeed = qubicRandom::generateSeed(seed);
        result.randomSeed = seed;
        
        // Generate 5 unique numbers (1-50)
        for (int i = 0; i < 5; i++) {
            result.winningNumbers[i] = qubicRandom::getNumber(
                randomSeed, 1, 50, i
            );
        }
        
        // Store draw result for audit trail
        previousDraws[drawTick % 100] = result;
        
        return result;
    }`;

  const features = [
    {
      title: "Qubic Random Number Contract",
      description: "Integrates with Qubic's native Random Number Smart Contract for provably fair number generation.",
      icon: "🎲",
      color: "purple",
    },
    {
      title: "Wallet-Based Limits",
      description: "Smart contract tracks individual wallet bet counts to enforce the 5-bet maximum per draw cycle.",
      icon: "✅",
      color: "green",
    },
    {
      title: "Native C++ Execution",
      description: "Direct execution on Qubic's bare-metal infrastructure for maximum performance and security.",
      icon: "⚡",
      color: "blue",
    },
    {
      title: "Single & Batch Betting",
      description: "Support for both individual bet submission and batch processing for up to 5 bets per transaction.",
      icon: "📦",
      color: "yellow",
    },
    {
      title: "Quorum Validation",
      description: "All bets validated by 451+ computors ensuring fairness and preventing manipulation.",
      icon: "🛡️",
      color: "purple",
    },
  ];

  const performanceMetrics = [
    { label: "Contract Execution", value: "<1ms", color: "text-green-600" },
    { label: "Validation Time", value: "<3ms", color: "text-green-600" },
    { label: "Transaction Fees", value: "Feeless", color: "text-blue-600" },
    { label: "Energy Cost", value: "Minimal QU", color: "text-yellow-600" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          C++ Smart Contract Implementation
        </h2>
        <p className="text-slate-600 text-lg">
          Anti-exploit logic implemented at the smart contract level
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Code Window */}
        <Card className="overflow-hidden">
          <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-sm text-slate-400 font-mono">lottery_contract.cpp</div>
          </div>
          <div className="bg-slate-900 p-6 font-mono text-sm overflow-x-auto max-h-96 overflow-y-auto">
            <pre className="text-slate-300">
              <code dangerouslySetInnerHTML={{ __html: contractCode
                .replace(/#include/g, '<span class="text-blue-400">#include</span>')
                .replace(/struct/g, '<span class="text-purple-400">struct</span>')
                .replace(/private:/g, '<span class="text-purple-400">private:</span>')
                .replace(/public:/g, '<span class="text-purple-400">public:</span>')
                .replace(/if/g, '<span class="text-purple-400">if</span>')
                .replace(/return/g, '<span class="text-purple-400">return</span>')
                .replace(/false/g, '<span class="text-purple-400">false</span>')
                .replace(/true/g, '<span class="text-purple-400">true</span>')
                .replace(/uint8/g, '<span class="text-blue-400">uint8</span>')
                .replace(/uint64/g, '<span class="text-blue-400">uint64</span>')
                .replace(/bit/g, '<span class="text-blue-400">bit</span>')
                .replace(/id/g, '<span class="text-blue-400">id</span>')
                .replace(/BetInput/g, '<span class="text-yellow-400">BetInput</span>')
                .replace(/BetOutput/g, '<span class="text-yellow-400">BetOutput</span>')
                .replace(/REGISTER_USER_FUNCTION/g, '<span class="text-yellow-400">REGISTER_USER_FUNCTION</span>')
                .replace(/placeBet/g, '<span class="text-cyan-400">placeBet</span>')
                .replace(/getWalletIndex/g, '<span class="text-cyan-400">getWalletIndex</span>')
                .replace(/\/\/ .*/g, '<span class="text-green-400">$&</span>')
                .replace(/5/g, '<span class="text-yellow-400">5</span>')
                .replace(/10000/g, '<span class="text-yellow-400">10000</span>')
                .replace(/1/g, '<span class="text-yellow-400">1</span>')
              }} />
            </pre>
          </div>
        </Card>

        {/* Features and Metrics */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Implementation Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-xl">{feature.icon}</div>
                  <div>
                    <div className="font-semibold text-slate-900">{feature.title}</div>
                    <div className="text-sm text-slate-600">{feature.description}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-slate-600">{metric.label}:</span>
                  <span className={`font-mono font-semibold ${metric.color}`}>
                    {metric.value}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
