import { ThemeToggle } from "@/components/ThemeToggle";
import { APP_TITLE } from "@/const";

// Use the hardcoded base path for GitHub Pages deployment
// This must match the 'base' setting in vite.config.ts
const BASE_PATH = '/CPTSD-Straight-Facts/';

// Helper function to generate proper links with base path
export const getNavLink = (path: string) => {
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Construct the full hash-based URL with base path
  return `${BASE_PATH}#/${cleanPath}`;
};

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  return (
    <header className={`sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border ${className}`}>
      <div className="container py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">{APP_TITLE}</h1>
        <nav className="flex gap-6 text-sm items-center">
          <a href={getNavLink("")} className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href={getNavLink("facts")} className="text-foreground hover:text-primary transition-colors">100 Facts</a>
          <a href={getNavLink("faq")} className="text-foreground hover:text-primary transition-colors">FAQ</a>
          <a href={getNavLink("glossary")} className="text-foreground hover:text-primary transition-colors">Glossary</a>
          <a href={getNavLink("tools")} className="text-foreground hover:text-primary transition-colors">Tools</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
