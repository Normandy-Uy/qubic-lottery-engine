import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Mechanics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
            ⚙️ System Mechanics
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Fortress-Class Security Architecture
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Detailed explanation of how our fortress-class lottery engine prevents exploitation while maintaining fairness and efficiency through advanced blockchain mechanics, franchisee management, and Qubic Random Number Smart Contract integration.
          </p>
        </div>

        {/* Core Mechanics Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>🎯</span>
                <span>Game Rules</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Number Selection</h4>
                <p className="text-slate-600 text-sm mb-3">
                  Players choose 5 unique numbers from 1 to 50 for each lottery ticket.
                </p>
                <div className="grid grid-cols-10 gap-1">
                  {[7, 15, 22, 37, 43].map((num) => (
                    <div key={num} className="bg-blue-600 text-white text-xs font-bold rounded p-1 text-center">
                      {num}
                    </div>
                  ))}
                  {Array.from({length: 5}).map((_, i) => (
                    <div key={i} className="bg-slate-200 text-xs rounded p-1 text-center">-</div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Betting Limits</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Maximum 5 bets per wallet per draw</li>
                  <li>• Each bet costs 10,000 QUBIC</li>
                  <li>• All numbers must be unique within each bet</li>
                  <li>• No duplicate bets allowed</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Draw Schedule</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Draws occur every 24 hours</li>
                  <li>• Winning numbers generated at specific ticks</li>
                  <li>• Results available immediately after draw</li>
                  <li>• Prizes distributed automatically</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>🏆</span>
                <span>Prize Structure</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gold-50 rounded-lg border border-gold-200">
                  <div>
                    <div className="font-semibold text-gold-800">Jackpot (5 matches)</div>
                    <div className="text-sm text-gold-600">50% of prize pool</div>
                  </div>
                  <div className="text-2xl">🥇</div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-silver-50 rounded-lg border border-gray-200">
                  <div>
                    <div className="font-semibold text-gray-800">Second Prize (4 matches)</div>
                    <div className="text-sm text-gray-600">30% of prize pool</div>
                  </div>
                  <div className="text-2xl">🥈</div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-bronze-50 rounded-lg border border-orange-200">
                  <div>
                    <div className="font-semibold text-orange-800">Third Prize (3 matches)</div>
                    <div className="text-sm text-orange-600">15% of prize pool</div>
                  </div>
                  <div className="text-2xl">🥉</div>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div>
                    <div className="font-semibold text-slate-800">Development Fund</div>
                    <div className="text-sm text-slate-600">3% of prize pool</div>
                  </div>
                  <div className="text-xl">🔧</div>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div>
                    <div className="font-semibold text-blue-800">Qubic Ecosystem</div>
                    <div className="text-sm text-blue-600">2% of prize pool</div>
                  </div>
                  <div className="text-xl">🌐</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Anti-Exploit Mechanisms */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">🛡️ Anti-Exploit Mechanisms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                    Wallet-Based Limitations
                  </h4>
                  <p className="text-slate-600 mb-3">
                    Each wallet address is limited to exactly 5 bets per draw cycle, enforced at the smart contract level.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-600 mb-2">Example wallet progress:</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Bets placed:</span>
                        <span className="font-mono">3/5</span>
                      </div>
                      <Progress value={60} className="h-2" />
                      <div className="text-xs text-slate-500">2 bets remaining for this draw</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                    Batch Transaction Processing
                  </h4>
                  <p className="text-slate-600 mb-3">
                    Multiple bets can be submitted in a single transaction, reducing costs while maintaining security.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-600 mb-2">Batch submission example:</div>
                    <div className="space-y-1 text-xs font-mono">
                      <div>Bet 1: [7, 15, 22, 37, 43]</div>
                      <div>Bet 2: [3, 18, 29, 41, 46]</div>
                      <div>Bet 3: [9, 24, 31, 39, 50]</div>
                      <div className="text-green-600 font-semibold">→ Single Transaction Hash: 0xabc123...</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                    Quorum Validation
                  </h4>
                  <p className="text-slate-600 mb-3">
                    All lottery operations require validation from 451+ of Qubic's 676 Computors for consensus.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-600 mb-2">Consensus requirements:</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Required validators:</span>
                        <span className="font-mono text-green-600">451+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Computors:</span>
                        <span className="font-mono">676</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Consensus threshold:</span>
                        <span className="font-mono text-blue-600">⅔ majority</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
                    Randomness Generation
                  </h4>
                  <p className="text-slate-600 mb-3">
                    Winning numbers generated using verifiable randomness from multiple entropy sources.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-600 mb-2">Entropy sources:</div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Block hash entropy</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Hardware RNG</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Verifiable Delay Functions</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Multi-party computation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Implementation */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">🔧 Technical Implementation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-blue-600">Smart Contract Layer</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium mb-1">Language</div>
                    <div className="text-slate-600">Native C++ with QPI</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium mb-1">Execution</div>
                    <div className="text-slate-600">Bare-metal performance</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium mb-1">Memory Model</div>
                    <div className="text-slate-600">Static allocation</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium mb-1">Gas Model</div>
                    <div className="text-slate-600">Energy-based (QU)</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-green-600">Consensus Layer</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium mb-1">Consensus Algorithm</div>
                    <div className="text-slate-600">Useful Proof of Work</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium mb-1">Validation Time</div>
                    <div className="text-slate-600">&lt; 3ms average</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium mb-1">Finality</div>
                    <div className="text-slate-600">Instant (single block)</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium mb-1">Throughput</div>
                    <div className="text-slate-600">15.5M TPS capability</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-purple-600">Application Layer</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium mb-1">Frontend</div>
                    <div className="text-slate-600">React + TypeScript</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium mb-1">State Management</div>
                    <div className="text-slate-600">TanStack Query</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium mb-1">Real-time Updates</div>
                    <div className="text-slate-600">WebSocket + RPC</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium mb-1">Wallet Integration</div>
                    <div className="text-slate-600">Qubic native wallets</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Flow */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">👤 User Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div className="flex-1">
                  <h4 className="font-semibold">Connect Wallet</h4>
                  <p className="text-slate-600 text-sm">User connects their Qubic wallet to access the lottery system</p>
                </div>
                <div className="text-slate-400">→</div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div className="flex-1">
                  <h4 className="font-semibold">Select Numbers</h4>
                  <p className="text-slate-600 text-sm">Choose 5 unique numbers from 1-50 for each lottery ticket</p>
                </div>
                <div className="text-slate-400">→</div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div className="flex-1">
                  <h4 className="font-semibold">Add to Batch</h4>
                  <p className="text-slate-600 text-sm">Add bet to pending batch (up to 5 bets per wallet)</p>
                </div>
                <div className="text-slate-400">→</div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div className="flex-1">
                  <h4 className="font-semibold">Submit Batch</h4>
                  <p className="text-slate-600 text-sm">Submit all bets in a single transaction for optimal efficiency</p>
                </div>
                <div className="text-slate-400">→</div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div className="flex-1">
                  <h4 className="font-semibold">Await Results</h4>
                  <p className="text-slate-600 text-sm">Wait for the next draw and automatic prize distribution</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">📊 Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">&lt;1ms</div>
                <div className="text-sm text-slate-600">Contract Execution</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">&lt;3ms</div>
                <div className="text-sm text-slate-600">Consensus Time</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">0 fees</div>
                <div className="text-sm text-slate-600">Transaction Cost</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
                <div className="text-sm text-slate-600">Uptime SLA</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
