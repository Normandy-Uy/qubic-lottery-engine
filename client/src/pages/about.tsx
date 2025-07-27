import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Code, Lightbulb, Target, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            👥 Meet the Team
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            About the VPX Team
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The innovative developers behind the Fortress-Class Charitable Lottery Engine, 
            dedicated to creating blockchain solutions for global social impact.
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

        {/* Team Introduction */}
        <Card className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">VPX Development Team</h2>
              <p className="text-lg text-blue-100 mb-4 max-w-4xl mx-auto">
                A passionate group of blockchain developers and social impact advocates, united by 
                the vision of using Qubic's revolutionary technology to create transparent, 
                corruption-resistant funding mechanisms for charitable causes worldwide.
              </p>
              <p className="text-base text-blue-200 mb-6 max-w-4xl mx-auto">
                The VPX Team is also actively developing an Alibaba-like e-commerce platform 
                serving Vietnam, Philippines, and Southeast Asia sourcing markets, bringing 
                innovative blockchain solutions to regional commerce and supply chain management. 
                Both projects leverage Qubic's 15.5M TPS capability to demonstrate the platform's 
                unmatched speed for real-world applications.
              </p>
              <div className="flex justify-center items-center gap-2">
                <Users className="h-6 w-6" />
                <span className="font-semibold">Building for Humanity & Commerce</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-blue-900">Norlito Sepulvida</CardTitle>
              <p className="text-sm text-slate-600">Founder & Lead Blockchain Developer</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 text-center">
                Founder of VPX (The Alibaba of Southeast Asia), inventor of Starshades™ Nose Therapy Glasses 
                (Starshades.ct.ws), Founder of Universal Chess Ratings (uniches.replit.app), and President 
                of Assessment and Research Center of the Philippines (Arcphils.replit.app). Architect of the 
                fortress-class security system and Qubic smart contract integration.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-green-900">Shalom Sepulvida</CardTitle>
              <p className="text-sm text-slate-600">Systems Architect</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 text-center">
                Designer of the franchisee management system and revenue distribution architecture. 
                Expert in scalable blockchain applications.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-purple-900">Elijohn Sepulvida</CardTitle>
              <p className="text-sm text-slate-600">Frontend Developer</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 text-center">
                Creator of the intuitive user interface and lottery simulation experience. 
                Focuses on accessibility and user experience design.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-orange-900">Jeson Sepulvida</CardTitle>
              <p className="text-sm text-slate-600">Project Coordinator</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 text-center">
                Oversees project development and ensures alignment with charitable mission objectives. 
                Coordinates technical implementation with social impact goals and regional e-commerce initiatives.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Technical Excellence</h3>
                <p className="text-sm text-slate-600">
                  Building fortress-class blockchain systems that demonstrate the highest 
                  standards of security and reliability.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Global Impact</h3>
                <p className="text-sm text-slate-600">
                  Creating transparent funding mechanisms that directly address poverty, 
                  education, and healthcare challenges worldwide.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Ethical Technology</h3>
                <p className="text-sm text-slate-600">
                  Following Sergey Ivancheglo's philosophy of channeling technology 
                  toward meaningful human advancement.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Our Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Blockchain & Backend</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Qubic Blockchain Platform</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">C++ Smart Contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Node.js & Express.js API</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">PostgreSQL Database</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Qubic Random Number Contract</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Frontend & UI</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">React 18 with TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Shadcn/ui Component Library</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Tailwind CSS Styling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">TanStack Query</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Vite Build System</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gradient-to-r from-slate-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Building the Future of Charitable Technology & Regional Commerce
            </h3>
            <p className="text-slate-600 mb-4 max-w-2xl mx-auto">
              The VPX Team is committed to demonstrating how blockchain technology can serve 
              humanity's greatest needs. Our fortress-class lottery engine represents the next 
              evolution in transparent, corruption-resistant charitable fundraising.
            </p>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Alongside our charitable mission, we are developing innovative e-commerce solutions 
              for Vietnam, Philippines, and Southeast Asia, creating an Alibaba-like platform 
              that leverages blockchain technology for transparent sourcing and supply chain management.
            </p>
            <div className="flex justify-center gap-4">
              <Badge className="bg-purple-100 text-purple-800 border-purple-300">
                🚀 Powered by Qubic Blockchain
              </Badge>
              <Badge className="bg-green-100 text-green-800 border-green-300">
                🌏 Southeast Asia Focus
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}