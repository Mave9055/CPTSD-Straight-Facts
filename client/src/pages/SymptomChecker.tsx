import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { APP_TITLE } from "@/const";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react';

interface Symptom {
  id: string;
  name: string;
  category: string;
  description: string;
}

const symptoms: Symptom[] = [
  // Re-experiencing
  { id: 're1', name: 'Flashbacks', category: 'Re-experiencing', description: 'Sudden, vivid memories of trauma feeling like it\'s happening now' },
  { id: 're2', name: 'Nightmares', category: 'Re-experiencing', description: 'Disturbing dreams related to traumatic events' },
  { id: 're3', name: 'Intrusive Thoughts', category: 'Re-experiencing', description: 'Unwanted thoughts about trauma that pop into your mind' },
  { id: 're4', name: 'Emotional Flashbacks', category: 'Re-experiencing', description: 'Sudden intense emotions triggered by reminders of trauma' },

  // Avoidance
  { id: 'av1', name: 'Avoiding Reminders', category: 'Avoidance', description: 'Staying away from places, people, or activities that remind you of trauma' },
  { id: 'av2', name: 'Emotional Numbing', category: 'Avoidance', description: 'Feeling emotionally disconnected or unable to feel emotions' },
  { id: 'av3', name: 'Social Withdrawal', category: 'Avoidance', description: 'Isolating yourself from friends and family' },
  { id: 'av4', name: 'Avoiding Conversations', category: 'Avoidance', description: 'Not wanting to talk about the trauma or related topics' },

  // Hyperarousal
  { id: 'ha1', name: 'Hypervigilance', category: 'Hyperarousal', description: 'Constantly scanning for danger or threats' },
  { id: 'ha2', name: 'Exaggerated Startle Response', category: 'Hyperarousal', description: 'Being easily startled by sudden sounds or movements' },
  { id: 'ha3', name: 'Sleep Disturbances', category: 'Hyperarousal', description: 'Difficulty falling or staying asleep' },
  { id: 'ha4', name: 'Irritability or Anger', category: 'Hyperarousal', description: 'Quick to anger or feeling irritable' },

  // Affective Dysregulation (CPTSD-specific)
  { id: 'ad1', name: 'Emotional Swings', category: 'Affective Dysregulation', description: 'Rapid shifts between different emotional states' },
  { id: 'ad2', name: 'Intense Emotional Reactions', category: 'Affective Dysregulation', description: 'Extreme emotional responses to minor triggers' },
  { id: 'ad3', name: 'Difficulty Calming Down', category: 'Affective Dysregulation', description: 'Struggling to regulate or calm your emotions once upset' },
  { id: 'ad4', name: 'Persistent Emptiness', category: 'Affective Dysregulation', description: 'Feeling empty, numb, or devoid of meaning' },

  // Negative Self-Concept (CPTSD-specific)
  { id: 'nsc1', name: 'Shame', category: 'Negative Self-Concept', description: 'Feeling fundamentally flawed or unworthy' },
  { id: 'nsc2', name: 'Guilt', category: 'Negative Self-Concept', description: 'Blaming yourself for the trauma or its consequences' },
  { id: 'nsc3', name: 'Low Self-Worth', category: 'Negative Self-Concept', description: 'Believing you\'re less valuable than others' },
  { id: 'nsc4', name: 'Feeling Damaged', category: 'Negative Self-Concept', description: 'Believing you\'re permanently broken or irreparably harmed' },

  // Relationship Disturbances (CPTSD-specific)
  { id: 'rd1', name: 'Difficulty Trusting', category: 'Relationship Disturbances', description: 'Struggling to trust others, even those close to you' },
  { id: 'rd2', name: 'Relationship Conflict', category: 'Relationship Disturbances', description: 'Frequent arguments or difficulties in relationships' },
  { id: 'rd3', name: 'Fear of Abandonment', category: 'Relationship Disturbances', description: 'Intense fear that others will leave or reject you' },
  { id: 'rd4', name: 'Difficulty with Intimacy', category: 'Relationship Disturbances', description: 'Struggling with emotional or physical closeness' },

  // Other symptoms
  { id: 'oth1', name: 'Dissociation', category: 'Other Symptoms', description: 'Feeling disconnected from your body or surroundings' },
  { id: 'oth2', name: 'Chronic Pain', category: 'Other Symptoms', description: 'Physical pain without clear medical cause' },
  { id: 'oth3', name: 'Substance Use', category: 'Other Symptoms', description: 'Using alcohol or drugs to cope with symptoms' },
  { id: 'oth4', name: 'Self-Harm Urges', category: 'Other Symptoms', description: 'Urges to hurt yourself as a coping mechanism' },
];

export default function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const categories = Array.from(new Set(symptoms.map(s => s.category)));

  const getResult = () => {
    const count = selectedSymptoms.length;
    if (count === 0) {
      return {
        level: 'No symptoms selected',
        color: 'bg-green-50 border-green-200',
        textColor: 'text-green-900',
        message: 'If you\'re not experiencing these symptoms, that\'s great! Continue practicing self-care and reach out if symptoms develop.',
      };
    } else if (count <= 5) {
      return {
        level: 'Mild Symptoms',
        color: 'bg-yellow-50 border-yellow-200',
        textColor: 'text-yellow-900',
        message: 'You may be experiencing some trauma-related symptoms. Consider speaking with a mental health professional for support.',
      };
    } else if (count <= 12) {
      return {
        level: 'Moderate Symptoms',
        color: 'bg-orange-50 border-orange-200',
        textColor: 'text-orange-900',
        message: 'You appear to be experiencing multiple trauma-related symptoms. Professional support is recommended to address these symptoms.',
      };
    } else {
      return {
        level: 'Significant Symptoms',
        color: 'bg-red-50 border-red-200',
        textColor: 'text-red-900',
        message: 'You\'re experiencing multiple trauma symptoms that warrant professional evaluation. Please reach out to a trauma-informed therapist or call 988 (Suicide & Crisis Lifeline) for immediate support.',
      };
    }
  };

  const result = getResult();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">{APP_TITLE}</h1>
          <nav className="flex gap-6 text-sm items-center">
            <a href="/#/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/#/facts" className="text-foreground hover:text-primary transition-colors">100 Facts</a>
            <a href="/#/faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="/#/glossary" className="text-foreground hover:text-primary transition-colors">Glossary</a>
            <a href="/#/tools" className="text-foreground hover:text-primary transition-colors">Tools</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Symptom Checker</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              This tool helps you identify trauma-related symptoms. It is <strong>not a diagnosis</strong> and should not replace professional evaluation.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex gap-3">
                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-semibold mb-1">Important Disclaimer</p>
                  <p>This symptom checker is for educational purposes only. It cannot diagnose CPTSD or any mental health condition. If you're experiencing these symptoms, please consult with a qualified mental health professional for proper assessment and treatment.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {categories.map(category => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="text-xl">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {symptoms
                        .filter(s => s.category === category)
                        .map(symptom => (
                          <div key={symptom.id} className="flex items-start gap-3">
                            <Checkbox
                              id={symptom.id}
                              checked={selectedSymptoms.includes(symptom.id)}
                              onCheckedChange={() => toggleSymptom(symptom.id)}
                              className="mt-1"
                            />
                            <label htmlFor={symptom.id} className="flex-1 cursor-pointer">
                              <div className="font-semibold text-foreground">{symptom.name}</div>
                              <div className="text-sm text-muted-foreground">{symptom.description}</div>
                            </label>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Results */}
            {showResults && (
              <Card className={`mt-8 border-2 ${result.color}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6" />
                    {result.level}
                  </CardTitle>
                  <CardDescription className={result.textColor}>
                    You selected {selectedSymptoms.length} symptom{selectedSymptoms.length !== 1 ? 's' : ''}
                  </CardDescription>
                </CardHeader>
                <CardContent className={result.textColor}>
                  <p className="mb-4">{result.message}</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Next Steps:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Consult with a trauma-informed therapist</li>
                      <li>Learn about evidence-based treatments (TF-CBT, EMDR, CPT)</li>
                      <li>Build a support network of trusted people</li>
                      <li>Practice self-care and grounding techniques</li>
                      <li>If in crisis, call 988 (Suicide & Crisis Lifeline)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Buttons */}
            <div className="flex gap-4 mt-8 justify-center">
              <Button
                onClick={() => setShowResults(!showResults)}
                size="lg"
                className="px-8"
              >
                {showResults ? 'Hide Results' : 'Show Results'}
              </Button>
              <Button
                onClick={() => {
                  setSelectedSymptoms([]);
                  setShowResults(false);
                }}
                variant="outline"
                size="lg"
                className="px-8"
              >
                Clear All
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-12">
        <div className="container py-8">
          <p className="text-sm text-muted-foreground">
            © 2025 CPTSD Educational Resource. This tool is for educational purposes only and is not a substitute for professional medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
