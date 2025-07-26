import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/proposal", label: "Project Proposal", icon: "📋" },
    { href: "/", label: "Live Demo", icon: "🎮" },
    { href: "/whitepaper", label: "White Paper", icon: "📄" },
    { href: "/overview", label: "Project Overview", icon: "🎯" },
    { href: "/mechanics", label: "Mechanics", icon: "⚙️" },
    { href: "/about", label: "About", icon: "👥" },
    { href: "/timeline", label: "Timeline", icon: "📅" },
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">Q</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Qubic Foundation</span>
                <div className="text-xs text-slate-400">Grant Proposal Demo</div>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      location === item.href
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                    )}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-slate-300">
              <span className="text-green-400 font-mono">15.5M TPS</span>
              <span className="text-slate-500 mx-2">•</span>
              <span>Fastest Blockchain</span>
            </div>
            <a
              href="https://github.com/qubic-li/client"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
