import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { APP_TITLE } from "@/const";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AlertCircle, CheckCircle2, BarChart3 } from 'lucide-react';

interface Question {
  id: number;
  category: string;
  question: string;
  description: string;
  options: {
    value: number;
    label: string;
    description: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    category: 'Trauma History',
    question: 'Have you experienced prolonged or repeated trauma?',
    description: 'This includes childhood abuse, domestic violence, torture, or long-term captivity.',
    options: [
      { value: 0, label: 'No', description: 'No prolonged trauma' },
      { value: 1, label: 'Possibly', description: 'Uncertain or single incident' },
      { value: 2, label: 'Yes, some', description: 'Some prolonged trauma' },
      { value: 3, label: 'Yes, significant', description: 'Significant prolonged trauma' },
    ],
  },
  {
    id: 2,
    category: 'Flashbacks & Intrusive Memories',
    question: 'How often do you experience flashbacks or intrusive memories of trauma?',
    description: 'Flashbacks feel like the trauma is happening again in the present moment.',
    options: [
      { value: 0, label: 'Never', description: 'No flashbacks' },
      { value: 1, label: 'Rarely', description: 'Occasional flashbacks' },
      { value: 2, label: 'Sometimes', description: 'Frequent flashbacks' },
      { value: 3, label: 'Often', description: 'Very frequent flashbacks' },
    ],
  },
  {
    id: 3,
    category: 'Emotional Regulation',
    question: 'How difficult is it for you to control your emotions?',
    description: 'This includes difficulty managing anger, sadness, anxiety, or other emotions.',
    options: [
      { value: 0, label: 'Not difficult', description: 'Good emotional control' },
      { value: 1, label: 'Somewhat difficult', description: 'Occasional difficulty' },
      { value: 2, label: 'Very difficult', description: 'Frequent difficulty' },
      { value: 3, label: 'Extremely difficult', description: 'Severe difficulty' },
    ],
  },
  {
    id: 4,
    category: 'Self-Concept',
    question: 'How do you view yourself?',
    description: 'This includes feelings about your worth, capability, and fundamental nature.',
    options: [
      { value: 0, label: 'Positively', description: 'Generally positive self-view' },
      { value: 1, label: 'Mostly positive', description: 'Mostly positive with some doubts' },
      { value: 2, label: 'Mixed', description: 'Significant self-doubt' },
      { value: 3, label: 'Negatively', description: 'Predominantly negative self-view' },
    ],
  },
  {
    id: 5,
    category: 'Relationships',
    question: 'How much difficulty do you have with trust and relationships?',
    description: 'This includes difficulty trusting others, maintaining relationships, or feeling safe with people.',
    options: [
      { value: 0, label: 'No difficulty', description: 'Healthy relationships' },
      { value: 1, label: 'Mild difficulty', description: 'Some trust issues' },
      { value: 2, label: 'Moderate difficulty', description: 'Significant relationship challenges' },
      { value: 3, label: 'Severe difficulty', description: 'Severe relationship problems' },
    ],
  },
  {
    id: 6,
    category: 'Avoidance',
    question: 'How much do you avoid reminders of trauma?',
    description: 'This includes avoiding places, people, activities, or conversations related to trauma.',
    options: [
      { value: 0, label: 'Not at all', description: 'No avoidance' },
      { value: 1, label: 'Somewhat', description: 'Occasional avoidance' },
      { value: 2, label: 'Significantly', description: 'Frequent avoidance' },
      { value: 3, label: 'Extensively', description: 'Extensive avoidance' },
    ],
  },
  {
    id: 7,
    category: 'Hypervigilance',
    question: 'How often do you feel on alert or scanning for danger?',
    description: 'This includes feeling constantly on guard or easily startled.',
    options: [
      { value: 0, label: 'Never', description: 'No hypervigilance' },
      { value: 1, label: 'Occasionally', description: 'Sometimes alert' },
      { value: 2, label: 'Frequently', description: 'Often on alert' },
      { value: 3, label: 'Constantly', description: 'Always scanning for danger' },
    ],
  },
  {
    id: 8,
    category: 'Sleep & Physical Health',
    question: 'How much do trauma-related nightmares or sleep problems affect you?',
    description: 'This includes nightmares, insomnia, or other sleep disturbances.',
    options: [
      { value: 0, label: 'Not at all', description: 'Good sleep' },
      { value: 1, label: 'Mildly', description: 'Occasional sleep issues' },
      { value: 2, label: 'Significantly', description: 'Frequent sleep problems' },
      { value: 3, label: 'Severely', description: 'Severe sleep disturbance' },
    ],
  },
  {
    id: 9,
    category: 'Dissociation',
    question: 'How often do you feel disconnected from your body or reality?',
    description: 'This includes feeling numb, detached, or like things aren\'t real.',
    options: [
      { value: 0, label: 'Never', description: 'No dissociation' },
      { value: 1, label: 'Occasionally', description: 'Occasional dissociation' },
      { value: 2, label: 'Frequently', description: 'Frequent dissociation' },
      { value: 3, label: 'Constantly', description: 'Persistent dissociation' },
    ],
  },
  {
    id: 10,
    category: 'Functioning & Quality of Life',
    question: 'How much do trauma symptoms impact your daily functioning?',
    description: 'This includes work, school, relationships, self-care, and overall quality of life.',
    options: [
      { value: 0, label: 'Minimal impact', description: 'Functioning well' },
      { value: 1, label: 'Mild impact', description: 'Some impact on functioning' },
      { value: 2, label: 'Moderate impact', description: 'Significant impact' },
      { value: 3, label: 'Severe impact', description: 'Severely impaired functioning' },
    ],
  },
];

interface Result {
  score: number;
  maxScore: number;
  percentage: number;
  level: string;
  color: string;
  message: string;
  recommendations: string[];
}

export default function AssessmentQuiz() {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateResults = (): Result => {
    const score = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const maxScore = questions.length * 3;
    const percentage = (score / maxScore) * 100;

    if (percentage === 0) {
      return {
        score,
        maxScore,
        percentage,
        level: 'No Symptoms Reported',
        color: 'bg-green-50 border-green-200',
        message: 'You reported no trauma-related symptoms. Continue practicing self-care and reach out if symptoms develop.',
        recommendations: [
          'Maintain healthy coping strategies',
          'Stay connected to support systems',
          'Practice stress management',
        ],
      };
    } else if (percentage <= 25) {
      return {
        score,
        maxScore,
        percentage,
        level: 'Mild Symptoms',
        color: 'bg-yellow-50 border-yellow-200',
        message: 'You may be experiencing some trauma-related symptoms. Consider speaking with a mental health professional.',
        recommendations: [
          'Consult with a therapist for evaluation',
          'Learn grounding and coping techniques',
          'Build a support network',
          'Practice self-compassion',
        ],
      };
    } else if (percentage <= 50) {
      return {
        score,
        maxScore,
        percentage,
        level: 'Moderate Symptoms',
        color: 'bg-orange-50 border-orange-200',
        message: 'You appear to be experiencing multiple trauma-related symptoms. Professional support is recommended.',
        recommendations: [
          'Seek evaluation from a trauma-informed therapist',
          'Consider evidence-based treatment (TF-CBT, EMDR, CPT)',
          'Develop a comprehensive treatment plan',
          'Build emotional regulation skills',
          'Connect with support groups',
        ],
      };
    } else {
      return {
        score,
        maxScore,
        percentage,
        level: 'Significant Symptoms',
        color: 'bg-red-50 border-red-200',
        message: 'You\'re experiencing significant trauma symptoms that warrant professional evaluation and treatment.',
        recommendations: [
          'Seek immediate evaluation from a trauma specialist',
          'Consider intensive or phase-based treatment',
          'If in crisis, call 988 (Suicide & Crisis Lifeline)',
          'Develop a safety plan with your therapist',
          'Consider medication evaluation with a psychiatrist',
          'Build a strong support system',
        ],
      };
    }
  };

  const result = calculateResults();
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === questions.length;

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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Personal Assessment Quiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              This self-assessment helps you understand your trauma symptoms. It is <strong>not a diagnosis</strong> and should not replace professional evaluation.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl">
            {/* Disclaimer */}
            <Card className="mb-8 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <AlertCircle className="w-5 h-5" />
                  Important Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-900 text-sm">
                <p>This assessment is for educational purposes only. It cannot diagnose CPTSD or any mental health condition. Your responses are private and not saved. If you\'re experiencing trauma symptoms, please consult with a qualified mental health professional for proper assessment and treatment.</p>
              </CardContent>
            </Card>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">Progress</span>
                <span className="text-sm text-muted-foreground">{answeredCount} of {questions.length} answered</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(answeredCount / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-6 mb-8">
              {questions.map((question, index) => (
                <Card key={question.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{question.question}</CardTitle>
                        <CardDescription className="mt-2">{question.description}</CardDescription>
                      </div>
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded">
                        {question.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {question.options.map(option => (
                        <button
                          key={option.value}
                          onClick={() => handleAnswer(question.id, option.value)}
                          className={`p-3 rounded-lg border-2 transition-all text-left ${
                            answers[question.id] === option.value
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-semibold text-foreground">{option.label}</div>
                          <div className="text-xs text-muted-foreground mt-1">{option.description}</div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Results */}
            {showResults && isComplete && (
              <Card className={`border-2 mb-8 ${result.color}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-6 h-6" />
                    Your Assessment Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Score */}
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">{result.percentage.toFixed(0)}%</div>
                    <div className="text-lg font-semibold">{result.level}</div>
                    <div className="text-sm text-muted-foreground mt-1">Score: {result.score} out of {result.maxScore}</div>
                  </div>

                  {/* Message */}
                  <div className="bg-white/50 rounded-lg p-4">
                    <p className="text-foreground">{result.message}</p>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Recommended Next Steps
                    </h4>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, i) => (
                        <li key={i} className="flex gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources */}
                  <div className="bg-white/50 rounded-lg p-4 border border-border">
                    <p className="font-semibold mb-2">Crisis Resources</p>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988 (available 24/7)</li>
                      <li>• <strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                      <li>• <strong>International Association for Trauma Professionals:</strong> Find a trauma therapist</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              {isComplete && (
                <Button
                  onClick={() => setShowResults(!showResults)}
                  size="lg"
                  className="px-8"
                >
                  {showResults ? 'Hide Results' : 'Show Results'}
                </Button>
              )}
              <Button
                onClick={() => {
                  setAnswers({});
                  setShowResults(false);
                }}
                variant="outline"
                size="lg"
                className="px-8"
              >
                Start Over
              </Button>
            </div>

            {!isComplete && (
              <div className="text-center mt-8 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Please answer all questions to see your results ({answeredCount} of {questions.length} answered)
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-12">
        <div className="container py-8">
          <p className="text-sm text-muted-foreground">
            © 2025 CPTSD Educational Resource. This assessment is for educational purposes only and is not a substitute for professional medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
