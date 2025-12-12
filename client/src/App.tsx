import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Facts from "./pages/Facts";
import FAQ from "./pages/FAQ";
import Glossary from "./pages/Glossary";
import SymptomChecker from "./pages/SymptomChecker";
import TreatmentComparison from "./pages/TreatmentComparison";
import RecoveryTimeline from "./pages/RecoveryTimeline";
import AssessmentQuiz from "./pages/AssessmentQuiz";
import FindTherapist from "./pages/FindTherapist";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/facts"} component={Facts} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/glossary"} component={Glossary} />
      <Route path={"/tools"} component={SymptomChecker} />
      <Route path="/symptom-checker" component={SymptomChecker} />
      <Route path="/treatment-comparison" component={TreatmentComparison} />
      <Route path="/recovery-timeline" component={RecoveryTimeline} />
      <Route path="/assessment-quiz" component={AssessmentQuiz} />
      <Route path={"/find-therapist"} component={FindTherapist} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
