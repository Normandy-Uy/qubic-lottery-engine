import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/navigation";
import Home from "@/pages/home";
import WhitePaper from "@/pages/whitepaper";
import Overview from "@/pages/overview";
import Mechanics from "@/pages/mechanics";
import About from "@/pages/about";
import Timeline from "@/pages/timeline";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/whitepaper" component={WhitePaper} />
      <Route path="/overview" component={Overview} />
      <Route path="/mechanics" component={Mechanics} />
      <Route path="/about" component={About} />
      <Route path="/timeline" component={Timeline} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-white">
          <Navigation />
          <Router />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
