import { APP_TITLE } from "@/const";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';

interface TimelinePhase {
  phase: string;
  duration: string;
  title: string;
  description: string;
  milestones: string[];
  challenges: string[];
  tips: string[];
}

const timelinePhases: TimelinePhase[] = [
  {
    phase: 'Phase 1',
    duration: 'Weeks 1-4',
    title: 'Awareness & Acceptance',
    description: 'The beginning of your healing journey. You\'re recognizing symptoms and deciding to seek help.',
    milestones: [
      'Acknowledging that you\'ve experienced trauma',
      'Reaching out to a mental health professional',
      'Beginning to understand CPTSD symptoms',
      'Starting to build a support network',
    ],
    challenges: [
      'Denial or minimization of trauma',
      'Shame and fear about seeking help',
      'Uncertainty about treatment options',
      'Initial emotional overwhelm',
    ],
    tips: [
      'Be gentle with yourself—seeking help is courageous',
      'Find a trauma-informed therapist you trust',
      'Start a support group or connect with others',
      'Practice basic grounding techniques',
    ],
  },
  {
    phase: 'Phase 2',
    duration: 'Weeks 5-12',
    title: 'Stabilization & Skill-Building',
    description: 'Learning tools to manage symptoms and build emotional regulation. Foundation for deeper work.',
    milestones: [
      'Developing emotional regulation skills',
      'Creating a safety plan',
      'Establishing healthy routines',
      'Building distress tolerance',
      'Reducing avoidance behaviors',
    ],
    challenges: [
      'Frustration with slow progress',
      'Difficulty applying new skills consistently',
      'Emotional dysregulation during learning',
      'Setbacks and temporary regression',
    ],
    tips: [
      'Practice skills daily, even when not in crisis',
      'Keep a journal to track progress',
      'Be patient—skill-building takes time',
      'Celebrate small wins',
    ],
  },
  {
    phase: 'Phase 3',
    duration: 'Weeks 13-24',
    title: 'Trauma Processing',
    description: 'Directly addressing traumatic memories with your therapist. Requires stabilization first.',
    milestones: [
      'Processing traumatic memories safely',
      'Reducing flashbacks and intrusive thoughts',
      'Challenging trauma-related beliefs',
      'Decreasing emotional intensity of memories',
      'Developing new narratives about trauma',
    ],
    challenges: [
      'Emotional intensity during processing',
      'Temporary increase in symptoms',
      'Difficulty staying present during sessions',
      'Grief about what was lost',
    ],
    tips: [
      'Work with a trained trauma therapist',
      'Go at your own pace—there\'s no rush',
      'Use grounding techniques between sessions',
      'Maintain self-care practices',
    ],
  },
  {
    phase: 'Phase 4',
    duration: 'Weeks 25-36',
    title: 'Integration & Consolidation',
    description: 'Integrating insights and consolidating gains. Building resilience and moving forward.',
    milestones: [
      'Significant reduction in PTSD symptoms',
      'Improved emotional regulation',
      'Restored relationships or new connections',
      'Increased sense of safety and control',
      'Developing post-traumatic growth',
    ],
    challenges: [
      'Fear of relapse or setbacks',
      'Grief about time lost to trauma',
      'Identity reconstruction',
      'Building new life direction',
    ],
    tips: [
      'Continue practicing coping skills',
      'Explore meaning-making and purpose',
      'Strengthen relationships',
      'Consider giving back or helping others',
    ],
  },
  {
    phase: 'Phase 5',
    duration: 'Month 9+',
    title: 'Maintenance & Growth',
    description: 'Maintaining gains and continuing personal growth. Building a resilient, meaningful life.',
    milestones: [
      'Sustained symptom reduction',
      'Improved quality of life',
      'Healthy relationships',
      'Sense of purpose and meaning',
      'Post-traumatic growth and resilience',
    ],
    challenges: [
      'Occasional setbacks or triggers',
      'Maintaining motivation for self-care',
      'Managing life stressors',
      'Preventing relapse',
    ],
    tips: [
      'Continue regular therapy or check-ins',
      'Maintain healthy routines',
      'Stay connected to support network',
      'Practice ongoing self-compassion',
    ],
  },
];

export default function RecoveryTimeline() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">{APP_TITLE}</h1>
          <nav className="flex gap-6 text-sm items-center">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/facts" className="text-foreground hover:text-primary transition-colors">100 Facts</a>
            <a href="/faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="/glossary" className="text-foreground hover:text-primary transition-colors">Glossary</a>
            <a href="/tools" className="text-foreground hover:text-primary transition-colors">Tools</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recovery Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              What to expect on your CPTSD recovery journey. Remember: recovery is not linear, and everyone's timeline is unique.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            {/* Important Note */}
            <Card className="mb-8 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <AlertCircle className="w-5 h-5" />
                  Important Note
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-900 text-sm">
                <p>This timeline is a general guide based on typical recovery patterns. Your recovery may be faster, slower, or follow a different path—and that's completely normal. Healing is not linear. Setbacks don't mean failure. Work with your therapist to understand your unique recovery journey.</p>
              </CardContent>
            </Card>

            {/* Timeline */}
            <div className="space-y-8">
              {timelinePhases.map((phase, index) => (
                <div key={phase.phase} className="relative">
                  {/* Timeline connector */}
                  {index < timelinePhases.length - 1 && (
                    <div className="absolute left-6 top-24 w-1 h-12 bg-gradient-to-b from-primary to-transparent"></div>
                  )}

                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl">{phase.title}</CardTitle>
                          <CardDescription className="text-base mt-1">
                            {phase.phase} • {phase.duration}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6 pt-6">
                      <p className="text-foreground leading-relaxed">{phase.description}</p>

                      {/* Milestones */}
                      <div>
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-green-700">
                          <CheckCircle2 className="w-5 h-5" />
                          Typical Milestones
                        </h4>
                        <ul className="space-y-2">
                          {phase.milestones.map((milestone, i) => (
                            <li key={i} className="flex gap-3 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{milestone}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-orange-700">
                          <AlertCircle className="w-5 h-5" />
                          Common Challenges
                        </h4>
                        <ul className="space-y-2">
                          {phase.challenges.map((challenge, i) => (
                            <li key={i} className="flex gap-3 text-sm">
                              <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-bold text-sm mb-3 flex items-center gap-2 text-blue-900">
                          <Lightbulb className="w-4 h-4" />
                          Tips for This Phase
                        </h4>
                        <ul className="space-y-2">
                          {phase.tips.map((tip, i) => (
                            <li key={i} className="text-sm text-blue-900">• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Recovery Principles */}
            <Card className="mt-12 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle>Key Principles of Recovery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Recovery is Possible</h4>
                    <p className="text-sm text-muted-foreground">With appropriate treatment and support, most people with CPTSD achieve significant symptom reduction and improved quality of life.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Recovery is Not Linear</h4>
                    <p className="text-sm text-muted-foreground">You may experience setbacks, triggers, or difficult days. This is normal and doesn't mean you're failing or going backward.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Your Timeline is Unique</h4>
                    <p className="text-sm text-muted-foreground">Recovery speed varies based on trauma severity, support systems, treatment engagement, and individual factors. There's no "right" timeline.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Post-Traumatic Growth is Real</h4>
                    <p className="text-sm text-muted-foreground">Many people report positive changes including increased empathy, deeper relationships, greater resilience, and a stronger sense of purpose.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-12">
        <div className="container py-8">
          <p className="text-sm text-muted-foreground">
            © 2025 CPTSD Educational Resource. This timeline is for educational purposes. Work with your mental health professional to understand your unique recovery journey.
          </p>
        </div>
      </footer>
    </div>
  );
}
