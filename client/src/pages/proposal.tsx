import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Users, Code, Rocket, Target, Calendar, DollarSign } from "lucide-react";

export default function Proposal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            📋 Grant Proposal
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Qubic Fortress-Class Charitable Lottery Engine
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive project proposal for blockchain-powered charitable fundraising platform
          </p>
        </div>

        {/* 1. Introductory Chapter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-blue-600" />
              1. Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">
              The Qubic Fortress-Class Charitable Lottery Engine represents a revolutionary approach to transparent, 
              corruption-resistant fundraising for government charity initiatives. Built on Qubic's unprecedented 15.5M TPS blockchain, 
              this system eliminates traditional charity funding bottlenecks while demonstrating to the world why Qubic is the 
              ideal platform for high-volume lottery operations requiring instant transaction processing and real-time revenue distribution.
            </p>
            <p className="text-slate-700">
              Aligned with Sergey Ivancheglo's philosophy of channeling technology toward meaningful human advancement, 
              our solution transforms charitable fundraising through fortress-class security mechanisms, automated revenue 
              distribution, and provably fair lottery operations targeting poverty alleviation, education, and healthcare funding.
            </p>
          </CardContent>
        </Card>

        {/* 2. Business Need */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-red-600" />
              2. Business Need
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Current Challenges</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Corruption in traditional charity funding channels</li>
                  <li>• Lack of transparency in fund allocation</li>
                  <li>• High administrative overhead costs</li>
                  <li>• Limited scalability of current systems</li>
                  <li>• Difficulty tracking charitable impact</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Our Solution</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Blockchain-based transparent fund tracking</li>
                  <li>• Automated revenue distribution (91% charity)</li>
                  <li>• Fortress-class security preventing exploitation</li>
                  <li>• Government partnership framework</li>
                  <li>• Real-time impact reporting</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. Business Model */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              3. Business Model
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">5%</div>
                <div className="text-sm text-slate-600">Qubic Foundation</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">4%</div>
                <div className="text-sm text-slate-600">Developer</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">91%</div>
                <div className="text-sm text-slate-600">Charitable Causes</div>
              </div>
            </div>
            <p className="text-slate-700">
              Revenue streams include ticket sales (10,000 QUBIC per ticket), franchisee partnerships with government 
              organizations, and optional premium analytics services. Franchisees bear minimum jackpot financial risk, 
              ensuring sustainable operations while maximizing charitable impact.
            </p>
          </CardContent>
        </Card>

        {/* 4. Functional Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-purple-600" />
              4. Functional Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Core Features</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• 5/50 number selection lottery format</li>
                  <li>• Fortress-class wallet bet limitations (5 per draw)</li>
                  <li>• Qubic Random Number Smart Contract integration</li>
                  <li>• Real-time jackpot display with multi-currency conversion</li>
                  <li>• Single and batch bet submission</li>
                  <li>• Automated revenue distribution</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Administrative Features</h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Franchisee management interface</li>
                  <li>• Break-even analysis tools</li>
                  <li>• Government partnership onboarding</li>
                  <li>• Impact reporting dashboard</li>
                  <li>• Financial risk management system</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. Components to be Developed */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-orange-600" />
              5. Components to be Developed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Blockchain Layer</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• C++ Smart Contract with QPI integration</li>
                    <li>• Revenue distribution smart contract</li>
                    <li>• Random number generation contract</li>
                    <li>• Multi-wallet management system</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Application Layer</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• React frontend with TypeScript</li>
                    <li>• Node.js API with Express framework</li>
                    <li>• PostgreSQL data persistence</li>
                    <li>• Real-time WebSocket connections</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 6. Technical Architecture */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-600" />
              6. Technical Architecture
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">
              Three-tier architecture leveraging Qubic's revolutionary 15.5M TPS capabilities: Blockchain serves as the primary database 
              storing all bet data, draw results, and revenue distributions with instant finality. This project specifically showcases 
              Qubic's unmatched speed to the world, proving that lottery operations requiring thousands of simultaneous bets, 
              real-time draws, and instant payouts are only possible on Qubic's high-performance infrastructure.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">Key Technologies</h4>
              <div className="text-sm text-slate-700">
                <strong>Blockchain:</strong> Qubic Native, C++ Smart Contracts, QPI<br/>
                <strong>Frontend:</strong> React 18, TypeScript, Tailwind CSS, Shadcn/ui<br/>
                <strong>Backend:</strong> Node.js, Express, Drizzle ORM, WebSocket<br/>
                <strong>Database:</strong> Blockchain-primary, PostgreSQL for caching
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 7. User Journey/Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-600" />
              7. User Journey & Examples
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-slate-900">Player Journey</h4>
                <p className="text-sm text-slate-700">
                  Connect wallet → Select 5 numbers from 1-50 → Submit bet (10,000 QUBIC) → 
                  Automatic on-chain validation → Await draw results → Receive winnings automatically
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-slate-900">Government Franchisee Journey</h4>
                <p className="text-sm text-slate-700">
                  Partnership application → Setup charity wallet → Configure minimum jackpot → 
                  Launch lottery → Monitor participation → Receive 91% revenue share → Fund charitable programs
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-slate-900">Example Impact</h4>
                <p className="text-sm text-slate-700">
                  Philippine Ministry of Social Welfare launches education lottery → 10,000 players participate → 
                  100M QUBIC raised → 91M QUBIC (91%) goes to education programs → 
                  Transparent tracking shows 500 schools funded
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 8. Detailed Scope and Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              8. Detailed Scope & Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <strong>Phase 1 (Jan 2025):</strong> Architecture & smart contract development - COMPLETED
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <div>
                    <strong>Phase 2 (Feb 2025):</strong> Testnet deployment, security auditing, exploit testing
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Rocket className="h-5 w-5 text-purple-500" />
                  <div>
                    <strong>Phase 3 (Mar 2025):</strong> Mainnet deployment, government partnerships
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <Target className="h-5 w-5 text-orange-500" />
                  <div>
                    <strong>Phase 4-5 (Apr-Dec 2025):</strong> Global expansion, advanced features
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 9. Milestones and Deliverables */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              9. Milestones & Deliverables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Q1 2025 Deliverables</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Complete smart contract code</li>
                    <li>• Security audit report</li>
                    <li>• Testnet deployment</li>
                    <li>• Franchisee interface prototype</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900">Q2-Q4 2025 Deliverables</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Mainnet production deployment</li>
                    <li>• 5+ government partnerships</li>
                    <li>• $1M+ charitable funds raised</li>
                    <li>• Mobile application release</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 10. Payment Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-blue-600" />
              10. Payment Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">Revenue Sharing Model</h4>
              <p className="text-sm text-slate-700 mb-3">
                Sustainable funding through automated blockchain revenue distribution:
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-600">5%</div>
                  <div className="text-xs text-slate-600">Qubic Foundation Development Fund</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-600">4%</div>
                  <div className="text-xs text-slate-600">VPX Team Development</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-600">91%</div>
                  <div className="text-xs text-slate-600">Charitable Causes</div>
                </div>
              </div>
            </div>
            <p className="text-slate-700 text-sm">
              No upfront costs to Qubic Foundation. Revenue generated through ticket sales with automatic 
              smart contract distribution. Initial development investment recovered through 4% developer allocation 
              over platform lifetime.
            </p>
          </CardContent>
        </Card>

        {/* 11. Team Composition */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              11. Team Composition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">N</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Norlito</h4>
                    <p className="text-sm text-slate-600">Lead Blockchain Developer - Smart contract architecture</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Shalom</h4>
                    <p className="text-sm text-slate-600">Systems Architect - Revenue distribution systems</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">E</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Elijohn</h4>
                    <p className="text-sm text-slate-600">Frontend Developer - User experience design</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">J</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Jeson Sepulvida</h4>
                    <p className="text-sm text-slate-600">Project Coordinator - Government partnerships</p>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="my-4" />
            <p className="text-sm text-slate-700">
              The VPX Team brings proven expertise in blockchain development and regional e-commerce platforms, 
              currently developing Alibaba-like solutions for Vietnam, Philippines, and Southeast Asia markets.
            </p>
          </CardContent>
        </Card>

        {/* Word Count */}
        <div className="text-center">
          <Badge className="bg-slate-100 text-slate-600 border-slate-300">
            📊 Proposal Length: ~2,350 words
          </Badge>
        </div>
      </div>
    </div>
  );
}