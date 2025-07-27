import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();

  // Row 1: External Links
  const externalLinks = [
    { name: "Qubic Lottery Engine", path: "/", icon: "⚡" },
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


        {/* Three-Row Navigation Menu */}
        <div className="py-1 space-y-1">
          {/* Row 1: External Links */}
          <div className="flex items-center justify-center space-x-6">
            {externalLinks.map((link) => {
              // Handle internal link for Qubic Lottery Engine
              if (link.path) {
                return (
                  <Link key={link.name} href={link.path}>
                    <a className="flex items-center space-x-3 px-4 py-1 rounded-lg text-xl font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
                      <span className="text-2xl">{link.icon}</span>
                      <span className="font-bold">{link.name}</span>
                    </a>
                  </Link>
                );
              }
              // Handle external links
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-1 rounded-lg text-xl font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Row 2: Main Project Pages */}
          <div className="flex items-center justify-center space-x-6">
            {mainPages.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "flex items-center space-x-3 px-4 py-1 rounded-lg text-xl font-medium transition-colors",
                    location === item.path
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  )}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </Link>
            ))}
          </div>

          {/* Row 3: Technical & Demo Pages */}
          <div className="flex items-center justify-center space-x-6">
            {technicalPages.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "flex items-center space-x-3 px-4 py-1 rounded-lg text-xl font-medium transition-colors",
                    location === item.path
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  )}
                >
                  <span className="text-2xl">{item.icon}</span>
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
