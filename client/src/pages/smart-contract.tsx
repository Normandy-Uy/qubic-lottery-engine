import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SmartContractPreview } from "@/components/smart-contract-preview";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function SmartContract() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            🔧 Smart Contract
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            C++ Smart Contract Implementation
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Fortress-class security architecture implemented at the smart contract level using 
            Qubic's native C++ development framework. Features anti-exploit logic, atomic operations, 
            and hardware-based random number generation showcasing Qubic's 15.5M TPS capabilities.
          </p>
          
          {/* PDF Download Button */}
          <div className="mt-8">
            <Button 
              onClick={() => window.print()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto print:hidden"
            >
              <Download className="h-5 w-5" />
              Download as PDF
            </Button>
          </div>
        </div>

        {/* Smart Contract Details */}
        <Card className="mb-12 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Qubic Native Development</h2>
              <p className="text-lg text-green-100 mb-4 max-w-4xl mx-auto">
                Built using Qubic's native C++ smart contract framework with QPI (Qubic Programming Interface), 
                delivering bare-metal performance and fortress-class security for charitable lottery operations.
              </p>
              <p className="text-base text-green-200 mb-6 max-w-4xl mx-auto">
                This implementation demonstrates Qubic's revolutionary approach to blockchain development, 
                combining the performance of traditional systems with the transparency and security of 
                decentralized networks at 15.5 million transactions per second.
              </p>
              <div className="flex justify-center items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="font-semibold">Native C++ Performance</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Smart Contract Preview Component */}
        <SmartContractPreview />

        {/* Technical Architecture */}
        <Card className="mb-12 mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Technical Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-green-600">Core Features</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium mb-1">Language</div>
                    <div className="text-slate-600">Native C++ with QPI integration</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium mb-1">Performance</div>
                    <div className="text-slate-600">Bare-metal execution speed</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium mb-1">Security</div>
                    <div className="text-slate-600">Fortress-class exploit resistance</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium mb-1">Randomness</div>
                    <div className="text-slate-600">Hardware-based entropy</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-blue-600">Anti-Exploit Mechanisms</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium mb-1">Wallet Limiting</div>
                    <div className="text-slate-600">Maximum 5 bets per wallet per draw</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium mb-1">Atomic Operations</div>
                    <div className="text-slate-600">All-or-nothing transaction safety</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium mb-1">Bounds Checking</div>
                    <div className="text-slate-600">Comprehensive input validation</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium mb-1">Draw Locks</div>
                    <div className="text-slate-600">Execution state protection</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-purple-600">Advanced Features</h4>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium mb-1">Transaction Tracking</div>
                    <div className="text-slate-600">Hash-based bet verification</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium mb-1">History Storage</div>
                    <div className="text-slate-600">Last 100 draws in circular buffer</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium mb-1">Revenue Distribution</div>
                    <div className="text-slate-600">Automated 91% to franchisees</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium mb-1">Batch Processing</div>
                    <div className="text-slate-600">Efficient multi-bet transactions</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Qubic Advantages */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Why Qubic for Smart Contracts?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-slate-900">Traditional Blockchain Limitations</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <div>
                      <div className="font-medium">Interpreted Languages</div>
                      <div className="text-sm text-slate-600">Solidity/JavaScript with runtime overhead</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <div>
                      <div className="font-medium">High Gas Fees</div>
                      <div className="text-sm text-slate-600">$20-100+ per transaction during congestion</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <div>
                      <div className="font-medium">Limited Throughput</div>
                      <div className="text-sm text-slate-600">15 TPS maximum on Ethereum</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-slate-900">Qubic's Revolutionary Approach</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-medium">Native C++ Execution</div>
                      <div className="text-sm text-slate-600">Direct compilation to machine code</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-medium">Zero Transaction Fees</div>
                      <div className="text-sm text-slate-600">Energy-based model eliminates costs</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-medium">15.5M TPS Capability</div>
                      <div className="text-sm text-slate-600">1,000,000x faster than Ethereum</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Development Process */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Development & Testing Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔨</span>
                </div>
                <h4 className="font-semibold mb-2">Development</h4>
                <p className="text-sm text-slate-600">
                  C++ smart contract development using QPI framework with comprehensive security patterns
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧪</span>
                </div>
                <h4 className="font-semibold mb-2">Testing</h4>
                <p className="text-sm text-slate-600">
                  Comprehensive exploit testing on Qubic testnet with fortress-class security validation
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h4 className="font-semibold mb-2">Auditing</h4>
                <p className="text-sm text-slate-600">
                  Third-party security audits and GLI certification for regulatory compliance
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold mb-2">Deployment</h4>
                <p className="text-sm text-slate-600">
                  Production deployment to Qubic mainnet with government charity partnerships
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}