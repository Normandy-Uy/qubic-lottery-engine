import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Overview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            🎯 Project Overview
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Grant Proposal: Anti-Exploit Lottery Engine
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive overview of our innovative lottery engine smart contract demonstrating advanced anti-exploit mechanisms, Qubic Random Number Smart Contract integration, and technical innovation on the Qubic blockchain platform.
          </p>
        </div>

        {/* Problem-Solution-Impact Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Problem Statement */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <div className="w-16 h-16 bg-red-500 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <CardTitle className="text-red-800">Problem Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 mb-4">
                Traditional blockchain lottery engines suffer from exploit vulnerabilities, high transaction costs, 
                and poor user experience due to multiple separate transactions.
              </p>
              <ul className="text-sm text-red-600 space-y-2">
                <li>• Multi-account betting exploits</li>
                <li>• High gas costs for multiple bets</li>
                <li>• Network congestion issues</li>
                <li>• Poor UX with separate transactions</li>
                <li>• Scalability limitations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <CardTitle className="text-green-800">Our Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 mb-4">
                A revolutionary lottery engine with built-in anti-exploit mechanisms, Qubic Random Number Smart Contract integration, 
                batch transaction optimization, and seamless user experience on the world's fastest blockchain.
              </p>
              <ul className="text-sm text-green-600 space-y-2">
                <li>• Wallet-based bet limitations</li>
                <li>• Batch transaction processing</li>
                <li>• Feeless transactions</li>
                <li>• Instant finality</li>
                <li>• Native C++ smart contracts</li>
                <li>• On-chain data storage (no external database)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <CardTitle className="text-blue-800">Expected Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 mb-4">
                This project will demonstrate Qubic's technical superiority while creating a template for fair, 
                efficient, and user-friendly decentralized applications.
              </p>
              <ul className="text-sm text-blue-600 space-y-2">
                <li>• Showcase Qubic's unique capabilities</li>
                <li>• Attract developers to ecosystem</li>
                <li>• Set new standards for dApp UX</li>
                <li>• Drive adoption and awareness</li>
                <li>• Generate media attention</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Technical Innovation Highlights */}
        <Card className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Technical Innovation Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-600 flex items-center">
                  <span className="mr-2">🚀</span>
                  Blockchain Infrastructure
                </h4>
                <div className="space-y-3 text-slate-600">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>15.5M TPS performance (CertiK verified)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Native C++ smart contract execution</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>676 Computor quorum consensus</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Instant finality with zero fees</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-600 flex items-center">
                  <span className="mr-2">⚙️</span>
                  Smart Contract Features
                </h4>
                <div className="space-y-3 text-slate-600">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Built-in anti-exploit mechanisms</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Batch transaction optimization</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>QPI-based development framework</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Bare-metal performance execution</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grant Request Details */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Grant Request Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Funding Requested</h4>
                <div className="text-4xl font-bold text-blue-600 mb-2">50M QUBIC</div>
                <div className="text-slate-600">≈ $110,000 USD</div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Development Timeline</h4>
                <div className="text-4xl font-bold text-green-600 mb-2">12 weeks</div>
                <div className="text-slate-600">Full development & deployment</div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Team Experience</h4>
                <div className="text-4xl font-bold text-purple-600 mb-2">5+ years</div>
                <div className="text-slate-600">Blockchain development</div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Fund Allocation</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Smart Contract Development:</span>
                  <span className="font-medium">20M QUBIC (40%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Frontend Development:</span>
                  <span className="font-medium">15M QUBIC (30%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Security Audits:</span>
                  <span className="font-medium">7.5M QUBIC (15%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Documentation & Marketing:</span>
                  <span className="font-medium">5M QUBIC (10%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Deployment & Testing:</span>
                  <span className="font-medium">2.5M QUBIC (5%)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Development Roadmap */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Development Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Weeks 1-3: Architecture & Design</h4>
                  <p className="text-slate-600 text-sm">Smart contract architecture, QPI integration, security model design</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Weeks 4-7: Core Development</h4>
                  <p className="text-slate-600 text-sm">C++ smart contract implementation, anti-exploit logic, batch processing</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Weeks 8-10: Frontend & Integration</h4>
                  <p className="text-slate-600 text-sm">User interface development, wallet integration, real-time updates</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Weeks 11-12: Testing & Deployment</h4>
                  <p className="text-slate-600 text-sm">Security audits, stress testing, mainnet deployment, documentation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team & Credentials */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Team & Credentials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Core Team</h4>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">Lead Smart Contract Developer</div>
                    <div className="text-sm text-slate-600">5+ years C++ blockchain development, former Ethereum core contributor</div>
                  </div>
                  <div>
                    <div className="font-medium">Frontend Architect</div>
                    <div className="text-sm text-slate-600">React/TypeScript expert, 3+ years DeFi interface development</div>
                  </div>
                  <div>
                    <div className="font-medium">Security Specialist</div>
                    <div className="text-sm text-slate-600">Certified blockchain auditor, 50+ smart contract audits completed</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Previous Achievements</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Developed lottery system handling $10M+ volume</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Implemented anti-MEV mechanisms for DEX protocols</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Led security audits for 20+ DeFi projects</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Published research on blockchain scalability</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Revolutionize Blockchain Lotteries?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              This project represents a unique opportunity to showcase Qubic's technical capabilities while solving 
              real-world problems in the decentralized application space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                📄 Download Full Proposal
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                🎮 Try Live Demo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                📧 Contact Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
