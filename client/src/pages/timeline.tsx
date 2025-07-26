import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Clock, Rocket } from "lucide-react";

export default function Timeline() {
  const milestones = [
    {
      phase: "Phase 1",
      title: "Foundation & Architecture",
      status: "completed",
      date: "January 2025",
      description: "Complete fortress-class lottery engine architecture with franchisee management system",
      tasks: [
        "✓ Core smart contract development",
        "✓ Revenue distribution system (5% Qubic Foundation, 4% Developer, 91% Franchisee)",
        "✓ Fortress-class security implementation",
        "✓ Franchisee interface with guaranteed minimum jackpots",
        "✓ Qubic Random Number Smart Contract integration"
      ]
    },
    {
      phase: "Phase 2",
      title: "Testing & Security Audit",
      status: "current",
      date: "February 2025",
      description: "Comprehensive testing on Qubic testnet and security auditing",
      tasks: [
        "⏳ Deploy smart contracts to Qubic testnet",
        "⏳ Comprehensive exploit testing with 5-bet wallet limitations",
        "⏳ Revenue distribution testing with multiple franchisees",
        "⏳ Minimum jackpot stress testing during low participation",
        "⏳ Third-party security audit of fortress-class mechanisms"
      ]
    },
    {
      phase: "Phase 3",
      title: "Mainnet Deployment",
      status: "upcoming",
      date: "March 2025",
      description: "Production deployment to Qubic mainnet with government charity partnerships",
      tasks: [
        "○ Deploy audited smart contracts to Qubic mainnet",
        "○ Establish partnerships with government charity organizations",
        "○ Configure franchisee onboarding system",
        "○ Launch pilot lottery with Ministry of Social Welfare",
        "○ Monitor real-world revenue distribution and minimum jackpot coverage"
      ]
    },
    {
      phase: "Phase 4",
      title: "Global Expansion",
      status: "upcoming",
      date: "April - June 2025",
      description: "Scale to multiple countries and expand charitable impact worldwide",
      tasks: [
        "○ Onboard 5 government charity organizations",
        "○ Implement multi-language support",
        "○ Advanced analytics dashboard for franchisees",
        "○ Cross-border charitable fund distribution",
        "○ Impact reporting and transparency metrics"
      ]
    },
    {
      phase: "Phase 5",
      title: "Advanced Features",
      status: "upcoming",
      date: "July - December 2025",
      description: "Enhanced functionality and ecosystem expansion",
      tasks: [
        "○ Multi-lottery support for different charitable causes",
        "○ AI-powered participation forecasting for minimum jackpot optimization",
        "○ Integration with other Qubic ecosystem applications",
        "○ Mobile application for broader accessibility",
        "○ Automated charitable impact verification system"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case "current":
        return <Clock className="h-6 w-6 text-blue-500" />;
      default:
        return <Circle className="h-6 w-6 text-slate-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-300";
      case "current":
        return "bg-blue-100 text-blue-800 border-blue-300";
      default:
        return "bg-slate-100 text-slate-600 border-slate-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
            📅 Project Roadmap
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Development Timeline
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive roadmap from initial development to global deployment of the 
            Fortress-Class Charitable Lottery Engine on Qubic blockchain.
          </p>
        </div>

        {/* Project Overview */}
        <Card className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Project Duration</h2>
                <p className="text-blue-100">January 2025 - December 2025</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">12</div>
                <p className="text-blue-100">Months</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5</div>
                <p className="text-blue-100">Phases</p>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-8 w-8" />
                <span className="font-semibold">Mission: Global Impact</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < milestones.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-slate-200"></div>
              )}
              
              <Card className={`ml-16 ${milestone.status === 'current' ? 'ring-2 ring-blue-400' : ''}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="absolute -left-10 bg-white rounded-full p-1 border-2 border-slate-200">
                      {getStatusIcon(milestone.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={getStatusColor(milestone.status)}>
                          {milestone.phase}
                        </Badge>
                        <span className="text-sm text-slate-500">{milestone.date}</span>
                      </div>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      <p className="text-slate-600 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {milestone.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center gap-2">
                        <span className="text-sm text-slate-700">{task}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Key Deliverables */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                Fortress-Class Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Exploit-resistant wallet limitations</li>
                <li>• Multi-computor validation</li>
                <li>• Hardware-based randomness</li>
                <li>• Comprehensive security audits</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                Revenue Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• 5% Qubic Foundation</li>
                <li>• 4% Developer allocation</li>
                <li>• 91% Franchisee share</li>
                <li>• Guaranteed minimum jackpots</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                Global Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Government partnerships</li>
                <li>• Transparent charity funding</li>
                <li>• Poverty alleviation programs</li>
                <li>• Educational initiatives</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Risk Mitigation */}
        <Card className="mt-12 bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle className="text-amber-800">Risk Mitigation Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-amber-800 mb-3">Technical Risks</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Comprehensive testnet validation before mainnet</li>
                  <li>• Independent security audits by blockchain experts</li>
                  <li>• Gradual rollout with pilot government partnerships</li>
                  <li>• Continuous monitoring and rapid response protocols</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-3">Financial Risks</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Clear documentation of franchisee financial responsibilities</li>
                  <li>• Break-even analysis tools for minimum jackpot planning</li>
                  <li>• Multiple revenue scenarios testing</li>
                  <li>• Transparent risk disclosure to all stakeholders</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Metrics */}
        <Card className="mt-12 bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Success Metrics by End of 2025
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-sm text-slate-600">Government Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$1M+</div>
                <div className="text-sm text-slate-600">Charity Funds Raised</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
                <div className="text-sm text-slate-600">Active Players</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">Zero</div>
                <div className="text-sm text-slate-600">Security Incidents</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}