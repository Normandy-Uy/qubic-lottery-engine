import { JackpotDisplay } from "@/components/jackpot-display";
import { LotterySimulator } from "@/components/lottery-simulator";
import { SmartContractPreview } from "@/components/smart-contract-preview";
import { RecentWinners } from "@/components/recent-winners";
import { BlockchainHistory } from "@/components/blockchain-history";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-500/20 text-green-100 border-green-400 mb-6">
              🚀 Grant Proposal Submission
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Anti-Exploit Lottery Engine
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                on Qubic
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Demonstrating innovative smart contract security through a 5/50 lottery engine with 
              wallet-based bet limitations, Qubic Random Number Smart Contract integration, and single/batch transaction optimization on the world's fastest blockchain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                🎮 Try Live Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                📄 View Technical Specs
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">15.5M</div>
              <div className="text-sm text-blue-200">TPS Performance</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
              <div className="text-sm text-blue-200">Bet Limit per Wallet</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">676</div>
              <div className="text-sm text-blue-200">Computor Quorum</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">C++</div>
              <div className="text-sm text-blue-200">Native Execution</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2.5B</div>
              <div className="text-slate-600">QUBIC Jackpot</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$5,505</div>
              <div className="text-slate-600">USD Equivalent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">676</div>
              <div className="text-slate-600">Computors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15.5M</div>
              <div className="text-slate-600">TPS Capability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LotterySimulator />
        </div>
      </section>

      {/* Sidebar Components */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <JackpotDisplay />
            <RecentWinners />
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-900">
                  🎯 Project Highlights
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Revolutionary anti-exploit mechanics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Batch transaction optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Professional grant proposal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Real-time demo functionality</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Contract Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SmartContractPreview />
        </div>
      </section>

      {/* Blockchain History */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlockchainHistory />
        </div>
      </section>
    </div>
  );
}
