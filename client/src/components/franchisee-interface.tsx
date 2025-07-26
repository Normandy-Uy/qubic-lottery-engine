import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Settings, DollarSign, BarChart3, Calendar, Users, Shield } from "lucide-react";

export function FranchiseeInterface() {
  const [minimumJackpot, setMinimumJackpot] = useState("500000");
  const [charityPercentage, setCharityPercentage] = useState("60");
  const [drawFrequency, setDrawFrequency] = useState("24");

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Badge className="bg-purple-100 text-purple-800 border-purple-300 mb-4">
          🏛️ Franchisee Management Interface
        </Badge>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Government Charity Administration
        </h2>
        <p className="text-slate-600">
          Comprehensive management interface for government charity organizations and licensed lottery operators
        </p>
      </div>

      <Tabs defaultValue="config" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="config">Configuration</TabsTrigger>
          <TabsTrigger value="jackpot">Minimum Jackpot</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="charity">Charity Impact</TabsTrigger>
        </TabsList>

        <TabsContent value="config" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Lottery Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="franchise-name">Franchisee Organization</Label>
                  <Input 
                    id="franchise-name" 
                    value="Ministry of Social Welfare - Demo"
                    readOnly
                    className="bg-slate-50"
                  />
                </div>
                
                <div>
                  <Label htmlFor="charity-wallet">Charity Wallet Address</Label>
                  <Input 
                    id="charity-wallet" 
                    value="QUBIC_CHARITY_DEMO123456789ABCDEF"
                    readOnly
                    className="bg-slate-50 text-xs"
                  />
                </div>

                <div>
                  <Label htmlFor="charity-percentage">Charity Allocation (%)</Label>
                  <Input 
                    id="charity-percentage" 
                    type="number"
                    min="0"
                    max="100"
                    value={charityPercentage}
                    onChange={(e) => setCharityPercentage(e.target.value)}
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Percentage of total revenue allocated to charitable causes
                  </p>
                </div>

                <div>
                  <Label htmlFor="draw-frequency">Draw Frequency (hours)</Label>
                  <Input 
                    id="draw-frequency" 
                    type="number"
                    min="1"
                    max="168"
                    value={drawFrequency}
                    onChange={(e) => setDrawFrequency(e.target.value)}
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Time between lottery draws
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Fortress-Class Security</h4>
                  <div className="space-y-2 text-sm text-green-700">
                    <div className="flex items-center justify-between">
                      <span>Wallet Bet Limiting:</span>
                      <Badge variant="outline" className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Random Number Contract:</span>
                      <Badge variant="outline" className="bg-green-100 text-green-800">Integrated</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Anti-Exploit Mechanisms:</span>
                      <Badge variant="outline" className="bg-green-100 text-green-800">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Blockchain Verification:</span>
                      <Badge variant="outline" className="bg-green-100 text-green-800">676 Computors</Badge>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Operational Status</h4>
                  <div className="space-y-2 text-sm text-blue-700">
                    <div className="flex items-center justify-between">
                      <span>Lottery Status:</span>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Next Draw:</span>
                      <span className="font-medium">2h 15m</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Total Bets Today:</span>
                      <span className="font-medium">1,247</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="jackpot" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Guaranteed Minimum Jackpot Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Purpose</h4>
                <p className="text-sm text-amber-700">
                  When starting a new lottery or during low-participation periods, the guaranteed minimum jackpot 
                  ensures player engagement and maintains charitable fund availability. The franchisee covers any 
                  shortfall between actual ticket sales and the minimum guaranteed amount.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="min-jackpot">Minimum Guaranteed Jackpot (QUBIC)</Label>
                    <Input 
                      id="min-jackpot" 
                      type="number"
                      min="0"
                      value={minimumJackpot}
                      onChange={(e) => setMinimumJackpot(e.target.value)}
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      Guaranteed minimum prize pool for each draw
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Current Configuration</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Minimum Jackpot:</span>
                        <span className="font-medium">{parseInt(minimumJackpot).toLocaleString()} QUBIC</span>
                      </div>
                      <div className="flex justify-between">
                        <span>USD Equivalent:</span>
                        <span className="font-medium">${(parseInt(minimumJackpot) * 0.0022).toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Charity Portion ({charityPercentage}%):</span>
                        <span className="font-medium text-green-600">
                          {(parseInt(minimumJackpot) * parseInt(charityPercentage) / 100).toLocaleString()} QUBIC
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3">Implementation Logic</h4>
                    <div className="bg-slate-900 text-slate-300 p-3 rounded text-xs font-mono overflow-x-auto">
                      <pre>{`if (currentPool < minimumJackpot) {
  shortfall = minimumJackpot - currentPool;
  transferFromFranchisee(shortfall);
  currentPool = minimumJackpot;
}`}</pre>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Benefits</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Ensures attractive prizes during launch</li>
                      <li>• Maintains player engagement</li>
                      <li>• Guarantees charitable fund availability</li>
                      <li>• Builds trust in lottery system</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Update Minimum Jackpot
                </Button>
                <Button variant="outline">
                  View Transaction History
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue (30 days)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.4M QUBIC</div>
                <p className="text-xs text-slate-500">+15% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Charity Funds Raised</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">7.44M QUBIC</div>
                <p className="text-xs text-slate-500">60% of total revenue</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Players</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15,623</div>
                <p className="text-xs text-slate-500">+8% this week</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Average Daily Participation</span>
                    <span className="text-sm text-slate-500">1,247 bets/day</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Jackpot Coverage Ratio</span>
                    <span className="text-sm text-slate-500">156% self-funded</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Player Retention Rate</span>
                    <span className="text-sm text-slate-500">67% monthly</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="charity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Charitable Impact Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Fund Distribution (Last 30 Days)</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <div className="font-medium">Education Programs</div>
                        <div className="text-sm text-slate-600">35% allocation</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600">2.6M QUBIC</div>
                        <div className="text-xs text-slate-500">$5,720</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <div className="font-medium">Healthcare Initiatives</div>
                        <div className="text-sm text-slate-600">30% allocation</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">2.23M QUBIC</div>
                        <div className="text-xs text-slate-500">$4,906</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div>
                        <div className="font-medium">Poverty Alleviation</div>
                        <div className="text-sm text-slate-600">25% allocation</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-purple-600">1.86M QUBIC</div>
                        <div className="text-xs text-slate-500">$4,092</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div>
                        <div className="font-medium">Infrastructure</div>
                        <div className="text-sm text-slate-600">10% allocation</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-orange-600">744K QUBIC</div>
                        <div className="text-xs text-slate-500">$1,637</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Impact Metrics</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between p-2 border-b">
                      <span>Students Supported:</span>
                      <span className="font-medium">1,247</span>
                    </div>
                    <div className="flex justify-between p-2 border-b">
                      <span>Medical Treatments Funded:</span>
                      <span className="font-medium">892</span>
                    </div>
                    <div className="flex justify-between p-2 border-b">
                      <span>Families Assisted:</span>
                      <span className="font-medium">634</span>
                    </div>
                    <div className="flex justify-between p-2 border-b">
                      <span>Community Projects:</span>
                      <span className="font-medium">23</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                    <h5 className="font-semibold text-slate-800 mb-2">Social Impact Score</h5>
                    <div className="text-3xl font-bold text-green-600">94.2%</div>
                    <p className="text-xs text-slate-600">Transparency & effectiveness rating</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Fortress-Class Security for Maximum Trust</h3>
          <p className="text-purple-100 mb-4">
            Your lottery engine is protected by advanced anti-exploit mechanisms and blockchain-verified transparency, 
            ensuring every QUBIC raised reaches its intended charitable purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Download Impact Report
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}