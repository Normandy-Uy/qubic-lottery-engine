import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Globe, Target, Users, Lightbulb, Shield } from "lucide-react";

export function MissionVision() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <Badge className="bg-blue-100 text-blue-800 border-blue-300 mb-4">
          🤝 Charitable Mission
        </Badge>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Lottery Engine for Global Good
        </h2>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto">
          In alignment with the ethical principles of the Qubic Foundation and its founder 
          Sergey Ivancheglo (ComefromBehind), this lottery engine is designed primarily for 
          government charity initiatives to support those in need.
        </p>
      </div>

      {/* Mission Statement */}
      <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Heart className="h-8 w-8 text-red-500" />
            Mission Statement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed text-slate-700">
            To create a transparent, secure, and fair lottery engine that serves as a powerful tool 
            for government charitable organizations worldwide, enabling them to raise funds efficiently 
            while maintaining the highest standards of integrity and accountability.
          </p>
          <div className="bg-white/70 p-4 rounded-lg border">
            <p className="font-medium text-slate-800 mb-2">Core Purpose:</p>
            <p className="text-slate-700">
              Every lottery draw conducted through our engine contributes to poverty alleviation, 
              education, healthcare, and social welfare programs, transforming recreational gaming 
              into meaningful social impact.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Vision Statement */}
      <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Globe className="h-8 w-8 text-green-500" />
            Vision Statement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed text-slate-700">
            To establish the world's most trusted blockchain-based lottery infrastructure, 
            empowering governments and charitable organizations to create sustainable funding 
            mechanisms that bridge the gap between entertainment and social responsibility.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/70 p-4 rounded-lg border">
              <h4 className="font-semibold text-green-800 mb-2">Global Impact</h4>
              <p className="text-sm text-slate-700">
                Reaching underserved communities worldwide through transparent, 
                corruption-resistant charitable funding mechanisms.
              </p>
            </div>
            <div className="bg-white/70 p-4 rounded-lg border">
              <h4 className="font-semibold text-green-800 mb-2">Technological Excellence</h4>
              <p className="text-sm text-slate-700">
                Setting new standards for blockchain lottery security, 
                fairness, and operational transparency.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Goals */}
      <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Target className="h-8 w-8 text-purple-500" />
            Strategic Goals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Poverty Eradication</h4>
                  <p className="text-sm text-slate-600">
                    Generate sustainable funding streams for poverty alleviation programs, 
                    providing basic necessities, education, and economic opportunities to 
                    the world's most vulnerable populations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Educational Advancement</h4>
                  <p className="text-sm text-slate-600">
                    Fund educational infrastructure, scholarships, and digital literacy 
                    programs to break cycles of poverty through knowledge and skill development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Healthcare Access</h4>
                  <p className="text-sm text-slate-600">
                    Support universal healthcare initiatives, medical research, 
                    and healthcare infrastructure development in underserved regions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Transparency & Trust</h4>
                  <p className="text-sm text-slate-600">
                    Eliminate corruption in charitable fundraising through immutable 
                    blockchain records, ensuring every contribution reaches its intended beneficiaries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="h-6 w-6 text-indigo-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Global Accessibility</h4>
                  <p className="text-sm text-slate-600">
                    Provide equal access to charitable funding opportunities regardless 
                    of geographic location, economic status, or technological literacy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Sustainable Development</h4>
                  <p className="text-sm text-slate-600">
                    Align with UN Sustainable Development Goals, creating long-term 
                    solutions for environmental protection and social justice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Founder's Philosophy */}
      <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
        <CardHeader>
          <CardTitle className="text-2xl text-amber-800">
            Aligned with Qubic Foundation Ethics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white/70 p-4 rounded-lg border">
            <p className="text-slate-700 leading-relaxed">
              <strong>Sergey Ivancheglo (ComefromBehind)</strong>, founder of the Qubic Foundation, 
              envisioned technology as a force for global equity and social progress. This lottery 
              engine embodies his philosophical commitment to using advanced blockchain technology 
              not for profit maximization, but for the betterment of humanity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/70 p-4 rounded-lg border">
              <div className="text-2xl font-bold text-amber-600 mb-2">Integrity</div>
              <p className="text-sm text-slate-600">
                Uncompromising commitment to transparency and ethical operations
              </p>
            </div>
            <div className="bg-white/70 p-4 rounded-lg border">
              <div className="text-2xl font-bold text-amber-600 mb-2">Innovation</div>
              <p className="text-sm text-slate-600">
                Leveraging cutting-edge technology for social impact
              </p>
            </div>
            <div className="bg-white/70 p-4 rounded-lg border">
              <div className="text-2xl font-bold text-amber-600 mb-2">Inclusivity</div>
              <p className="text-sm text-slate-600">
                Ensuring benefits reach the most marginalized communities
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4">
            Join the Movement for Global Good
          </h3>
          <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
            This lottery engine represents more than technology—it's a pathway to systematic 
            poverty reduction and social justice through blockchain innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Support the Mission
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}