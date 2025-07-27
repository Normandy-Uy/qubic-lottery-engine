import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Users, Code, Rocket, Target, Calendar, DollarSign, Circle, Download } from "lucide-react";

export default function Proposal() {
  const handleDownloadPDF = () => {
    window.print();
  };

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
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-6">
            Comprehensive project proposal for blockchain-powered charitable fundraising platform
          </p>
          
          {/* Download PDF Button */}
          <div className="print:hidden">
            <Button 
              onClick={handleDownloadPDF}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download as PDF
            </Button>
          </div>
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
                  <li>• Automated revenue distribution (91% franchisee)</li>
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
                <div className="text-sm text-slate-600">Charitable Causes / Franchisee Share</div>
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

        {/* 8. Detailed Scope, Timeline & Deliverables */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              8. Detailed Scope, Timeline & Deliverables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Timeline Overview */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Development Phases</h4>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <div>
                      <div><strong>Phase 1 - Foundation & Architecture (Jan 1 - Mar 1, 2026):</strong></div>
                      <div className="text-sm text-slate-700 mt-1">Complete fortress-class lottery engine architecture with franchisee management system</div>
                      <div className="text-xs text-slate-600 mt-1">✓ Core smart contract development, revenue distribution system, fortress-class security, franchisee interface</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <Calendar className="h-5 w-5 text-blue-500 mt-1" />
                    <div>
                      <div><strong>Phase 2 - Testing & Security Audit (Mar 1 - Jun 1, 2026):</strong></div>
                      <div className="text-sm text-slate-700 mt-1">Comprehensive testing on Qubic testnet and security auditing</div>
                      <div className="text-xs text-slate-600 mt-1">Testnet deployment, exploit testing, third-party security audit</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <Rocket className="h-5 w-5 text-purple-500 mt-1" />
                    <div>
                      <div><strong>Phase 3 - Mainnet Deployment (Jun 1 - Sep 1, 2026):</strong></div>
                      <div className="text-sm text-slate-700 mt-1">Production deployment to Qubic mainnet with government charity partnerships</div>
                      <div className="text-xs text-slate-600 mt-1">Deploy audited contracts, government partnerships, franchisee onboarding, pilot lottery launch</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <Target className="h-5 w-5 text-orange-500 mt-1" />
                    <div>
                      <div><strong>Phase 4 - Global Expansion (Sep 1 - Dec 30, 2026):</strong></div>
                      <div className="text-sm text-slate-700 mt-1">Scale to multiple countries and expand charitable impact worldwide</div>
                      <div className="text-xs text-slate-600 mt-1">5+ government partnerships, multi-language support, analytics dashboard, impact reporting, GLI certification</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <Circle className="h-5 w-5 text-slate-400 mt-1" />
                    <div>
                      <div><strong>Phase 5 - Advanced Features (Jul-Dec 2026):</strong></div>
                      <div className="text-sm text-slate-700 mt-1">Enhanced functionality and ecosystem expansion</div>
                      <div className="text-xs text-slate-600 mt-1">Multi-lottery support, AI forecasting, mobile app, automated impact verification</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Detailed Deliverables */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Quarterly Deliverables & Milestones</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h5 className="font-semibold text-slate-900">Q1 2026 Deliverables (Jan-Mar)</h5>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Complete fortress-class smart contract code</li>
                        <li>• Comprehensive security audit report</li>
                        <li>• Qubic testnet deployment with full functionality</li>
                        <li>• Franchisee management interface prototype</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-slate-900">Q2 2026 Deliverables (Mar-Jun)</h5>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• Mainnet production deployment (audited)</li>
                        <li>• First government charity partnership launch</li>
                        <li>• Minimum jackpot system operational</li>
                        <li>• Real-time revenue distribution system</li>
                        <li>• Impact tracking and transparency dashboard</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-slate-900">Q3-Q4 2026 Deliverables (Jun-Dec)</h5>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• 5+ government partnerships operational</li>
                        <li>• $1M+ charitable funds raised and distributed</li>
                        <li>• Multi-language platform support</li>
                        <li>• Mobile application release</li>
                        <li>• Advanced analytics and AI forecasting features</li>
                        <li>• GLI (Gaming Laboratories International) certification</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-semibold text-slate-900">Security & Compliance</h5>
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• <strong>Security Audit:</strong> Third-party fortress-class security audit (Mar-Jun 2026)</li>
                        <li>• <strong>GLI Certification:</strong> Gaming Laboratories International compliance (Sep-Dec 2026)</li>
                        <li>• <strong>Regulatory Compliance:</strong> Government charity organization approvals</li>
                        <li>• <strong>Ongoing Monitoring:</strong> Continuous security monitoring and updates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 9. Payment Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-blue-600" />
              9. Payment Terms
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

        {/* 10. Team Composition */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              10. Team Composition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">VPX Development Team</h4>
              <p className="text-sm text-slate-700 mb-4">
                The VPX Team is actively developing both the Qubic Fortress-Class Charitable Lottery Engine and an 
                Alibaba-like e-commerce platform serving Vietnam, Philippines, and Southeast Asia sourcing markets. 
                Both projects leverage Qubic's 15.5M TPS capability to demonstrate the platform's unmatched speed 
                for real-world applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-slate-900 mb-3">Founder & Lead Developer</h5>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h6 className="font-semibold text-blue-900 mb-2">Norlito Sepulvida</h6>
                  <p className="text-sm text-slate-700 mb-2"><strong>Role:</strong> Founder & Lead Blockchain Developer</p>
                  <p className="text-sm text-slate-700">
                    Founder of VPX (The Alibaba of Southeast Asia), inventor of Starshades™ Nose Therapy Glasses 
                    (Starshades.ct.ws), Founder of Universal Chess Ratings (uniches.replit.app), and President 
                    of Assessment and Research Center of the Philippines (Arcphils.replit.app). Architect of the 
                    fortress-class security system and Qubic smart contract integration.
                  </p>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-slate-900 mb-3">Core Development Team</h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h6 className="font-semibold text-green-900">Shalom Sepulvida</h6>
                    <p className="text-xs text-slate-600 mb-1">Systems Architect</p>
                    <p className="text-sm text-slate-700">
                      Designer of the franchisee management system and revenue distribution architecture. 
                      Expert in scalable blockchain applications.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h6 className="font-semibold text-purple-900">Elijohn Sepulvida</h6>
                    <p className="text-xs text-slate-600 mb-1">Frontend Developer</p>
                    <p className="text-sm text-slate-700">
                      Creator of the intuitive user interface and lottery simulation experience. 
                      Focuses on accessibility and user experience design.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h6 className="font-semibold text-orange-900">Jeson Sepulvida</h6>
                    <p className="text-xs text-slate-600 mb-1">Project Coordinator</p>
                    <p className="text-sm text-slate-700">
                      Oversees project development and ensures alignment with charitable mission objectives. 
                      Coordinates technical implementation with social impact goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-slate-900 mb-2">Technical Expertise</h5>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Native C++ smart contract development for Qubic</li>
                  <li>• React 18/TypeScript frontend applications</li>
                  <li>• Fortress-class blockchain security architecture</li>
                  <li>• Government compliance and audit systems</li>
                  <li>• E-commerce platform development (Southeast Asia)</li>
                  <li>• Charitable fundraising system design</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-slate-900 mb-2">Project Experience</h5>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• VPX E-commerce Platform (Alibaba of SE Asia)</li>
                  <li>• Starshades™ Nose Therapy Glasses</li>
                  <li>• Universal Chess Ratings System</li>
                  <li>• Assessment and Research Center Philippines</li>
                  <li>• Qubic blockchain integration projects</li>
                  <li>• Social impact technology initiatives</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h5 className="font-medium text-slate-900 mb-2">Mission Alignment</h5>
              <p className="text-sm text-slate-700">
                The VPX team combines extensive blockchain development experience with deep understanding 
                of charitable fundraising requirements and Southeast Asian market dynamics. Our founders have 
                successfully developed multiple technology platforms and understand the unique challenges of 
                creating transparent, secure systems for both social impact initiatives and commercial applications, 
                positioning us uniquely to deliver the fortress-class lottery engine for global charitable funding.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Grants & Incubation Requirements Compliance */}
        <Card className="mb-8 border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Grants & Incubation Requirements Compliance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Structure Requirements */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Structure Requirements ✓</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Under 2500 words (current: ~2,350)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Introductory chapter included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Business need clearly defined</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Business model with revenue splits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Functional features detailed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Components to be developed (high level)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Technical architecture (high level)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>User journey/examples provided</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Detailed scope and timeline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Milestones and deliverables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Payment terms specified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Team composition outlined</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables Requirements */}
            <Separator />
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Deliverables Compliance (SAFe Principles) ✓</h4>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>User-Value Prototypes:</strong> All milestones deliver working prototypes that demonstrate user value and can be deployed in production environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>Production Deployment:</strong> Each deliverable will be deployed in PROD or PROD-like environments for live demonstration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>Demoable Features:</strong> All deliverables can be demonstrated live, showing actual functionality rather than mockups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>QA Process:</strong> All deliverables will undergo minimum 1-week QA process by Ecosystem Services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span><strong>Smart Contract Audit:</strong> External security audit requested for smart contract components</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Terms Compliance */}
            <Separator />
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Payment Terms Compliance ✓</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                  <div className="text-2xl font-bold text-red-600 mb-1">0%</div>
                  <div className="text-sm text-slate-600">Upfront Payment</div>
                  <div className="text-xs text-slate-500 mt-1">No upfront payment required</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">≤20%</div>
                  <div className="text-sm text-slate-600">First Payment</div>
                  <div className="text-xs text-slate-500 mt-1">Maximum 20% of total amount</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">≥30%</div>
                  <div className="text-sm text-slate-600">Final Payment</div>
                  <div className="text-xs text-slate-500 mt-1">Minimum 30% of total amount</div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>Payment Structure:</strong> All payments denominated in USD and made in Qus (Qubic units). 
                  Currency conversion performed at moment of payment. Payments triggered upon milestone delivery and successful QA completion.
                </p>
              </div>
            </div>

            {/* Revenue Model vs Payment Terms */}
            <Separator />
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Sustainable Revenue Model</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-slate-700 mb-2">
                  <strong>Long-term Sustainability:</strong> Beyond initial development grant, the platform operates through 
                  automated revenue sharing from lottery ticket sales:
                </p>
                <div className="text-sm text-slate-600">
                  • <strong>4% Developer Share:</strong> Continuous revenue stream from platform operations<br/>
                  • <strong>91% Franchisee Share:</strong> Enables government charity organizations to fund programs<br/>
                  • <strong>5% Foundation Share:</strong> Supports Qubic ecosystem development<br/>
                  • <strong>Self-Sustaining:</strong> No ongoing maintenance costs to Qubic Foundation
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Word Count */}
        <div className="text-center">
          <Badge className="bg-slate-100 text-slate-600 border-slate-300">
            📊 Proposal Length: Under 2,500 words (Grants&Incubation Compliant)
          </Badge>
        </div>
      </div>
    </div>
  );
}