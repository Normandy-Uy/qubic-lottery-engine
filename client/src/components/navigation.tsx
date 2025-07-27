import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();

  // Row 1: External Links
  const externalLinks = [
    { name: "Qubic Foundation", url: "https://qubic.org", icon: "🏛️" },
    { name: "View on GitHub", url: "https://github.com/qubic", icon: "💻" },
  ];

  // Row 2: Main Project Pages
  const mainPages = [
    { name: "Project Overview", path: "/overview", icon: "🎯" },
    { name: "Project Proposal", path: "/proposal", icon: "📋" },
    { name: "White Paper", path: "/whitepaper", icon: "📄" },
    { name: "Mechanics", path: "/mechanics", icon: "⚙️" },
  ];

  // Row 3: Technical & Demo Pages
  const technicalPages = [
    { name: "Smart Contract", path: "/smart-contract", icon: "📜" },
    { name: "Timeline", path: "/timeline", icon: "📅" },
    { name: "Live Demo", path: "/", icon: "🎮" },
    { name: "About", path: "/about", icon: "👥" },
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo */}
        <div className="flex items-center justify-center h-16 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">Q</span>
            </div>
            <div>
              <span className="text-xl font-bold text-white">Qubic Lottery Engine</span>
              <div className="text-xs text-slate-400">Fortress-Class Charitable Fundraising</div>
            </div>
          </div>
        </div>

        {/* Three-Row Navigation Menu */}
        <div className="py-3 space-y-2">
          {/* Row 1: External Links */}
          <div className="flex items-center justify-center space-x-8">
            {externalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Row 2: Main Project Pages */}
          <div className="flex items-center justify-center space-x-4">
            {mainPages.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    location === item.path
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  )}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </Link>
            ))}
          </div>

          {/* Row 3: Technical & Demo Pages */}
          <div className="flex items-center justify-center space-x-4">
            {technicalPages.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    location === item.path
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  )}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
