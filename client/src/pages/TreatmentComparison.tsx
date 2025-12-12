import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { APP_TITLE } from '@/const';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface Treatment {
  id: string;
  name: string;
  fullName: string;
  description: string;
  duration: string;
  effectiveness: string;
  howItWorks: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  research: string;
}

const treatments: Treatment[] = [
  {
    id: 'tfcbt',
    name: 'TF-CBT',
    fullName: 'Trauma-Focused Cognitive Behavioral Therapy',
    description: 'Combines cognitive-behavioral techniques with direct processing of trauma memories.',
    duration: '12-16 sessions (typically 1-2 per week)',
    effectiveness: 'Highly effective; 60-80% of people show significant improvement',
    howItWorks: 'Involves psychoeducation, coping skills training, trauma narrative creation, and cognitive processing of trauma-related thoughts.',
    pros: [
      'Extensive research support (gold standard)',
      'Structured and time-limited',
      'Teaches practical coping skills',
      'Addresses both thoughts and emotions',
      'Effective for children and adults',
    ],
    cons: [
      'Requires detailed discussion of trauma',
      'Can be emotionally intense',
      'May not suit those with severe dissociation',
      'Requires skilled therapist',
    ],
    bestFor: 'People who benefit from structured, cognitive approaches and are ready to process trauma directly',
    research: 'Supported by extensive randomized controlled trials and meta-analyses',
  },
  {
    id: 'emdr',
    name: 'EMDR',
    fullName: 'Eye Movement Desensitization and Reprocessing',
    description: 'Uses bilateral stimulation (eye movements, tapping, or sounds) to help process traumatic memories.',
    duration: '8-12 sessions (typically 1-2 per week)',
    effectiveness: 'Highly effective; 70-90% of single-trauma PTSD patients show improvement',
    howItWorks: 'Involves recalling trauma while engaging in bilateral stimulation, which appears to help the brain process traumatic memories naturally.',
    pros: [
      'Doesn\'t require detailed verbal processing of trauma',
      'Rapid symptom reduction possible',
      'Less talking about trauma details',
      'Effective for various trauma types',
      'Well-researched and validated',
    ],
    cons: [
      'Mechanism not fully understood',
      'Requires trained EMDR therapist',
      'Can be intense initially',
      'May not work for everyone',
      'Less effective for complex trauma alone',
    ],
    bestFor: 'People who prefer not to discuss trauma details extensively or who respond well to somatic approaches',
    research: 'Approved by VA/DoD and supported by numerous studies; particularly effective for PTSD',
  },
  {
    id: 'cpt',
    name: 'CPT',
    fullName: 'Cognitive Processing Therapy',
    description: 'Focuses on processing trauma through examining and challenging trauma-related thoughts.',
    duration: '12 sessions (typically 1 per week)',
    effectiveness: 'Highly effective; 60-75% show significant improvement',
    howItWorks: 'Involves identifying stuck points (problematic thoughts about trauma), challenging them, and developing more balanced thinking patterns.',
    pros: [
      'Highly structured protocol',
      'Focuses on thought patterns',
      'Shorter duration than some approaches',
      'Effective for various trauma types',
      'Can be adapted for groups',
    ],
    cons: [
      'Requires cognitive engagement',
      'May not suit those with severe cognitive impairment',
      'Less effective if avoidance is severe',
      'Requires skilled therapist',
    ],
    bestFor: 'People who benefit from cognitive approaches and want to challenge trauma-related beliefs',
    research: 'Strong evidence base; developed specifically for trauma and widely studied',
  },
  {
    id: 'pe',
    name: 'PE',
    fullName: 'Prolonged Exposure Therapy',
    description: 'Involves gradually confronting trauma-related memories, thoughts, and situations in a safe environment.',
    duration: '8-15 sessions (typically 1-2 per week)',
    effectiveness: 'Highly effective; 60-80% show significant improvement',
    howItWorks: 'Combines imaginal exposure (recalling trauma) with in vivo exposure (confronting avoided situations), helping the brain learn that trauma reminders are not dangerous.',
    pros: [
      'Strong research evidence',
      'Addresses avoidance directly',
      'Practical and structured',
      'Effective for various trauma types',
      'Teaches habituation to trauma cues',
    ],
    cons: [
      'Can be emotionally intense',
      'Requires confronting avoided situations',
      'May not suit those with severe dissociation',
      'Requires commitment and homework',
    ],
    bestFor: 'People ready to confront avoided situations and who respond to exposure-based approaches',
    research: 'Gold standard for PTSD; extensive research support from VA/DoD',
  },
  {
    id: 'stair',
    name: 'STAIR',
    fullName: 'Structured Trauma-Informed Affect Regulation (STAIR) Therapy',
    description: 'Phase-based approach that prioritizes stabilization and emotional regulation before trauma processing.',
    duration: 'Phase 1: 8-16 sessions; Phase 2: 8-16 sessions',
    effectiveness: 'Effective for complex trauma; 50-70% show significant improvement',
    howItWorks: 'Phase 1 focuses on stabilization and emotion regulation skills. Phase 2 involves trauma narrative and processing. Phase 3 focuses on integration and future planning.',
    pros: [
      'Addresses stabilization first',
      'Effective for complex/severe trauma',
      'Teaches emotion regulation skills',
      'Flexible and adaptable',
      'Good for those with severe dysregulation',
    ],
    cons: [
      'Longer overall duration',
      'Requires two phases',
      'Less research than some approaches',
      'Requires skilled therapist',
    ],
    bestFor: 'People with complex trauma, severe emotional dysregulation, or those not ready for direct trauma processing',
    research: 'Emerging evidence base; specifically designed for complex trauma',
  },
  {
    id: 'somatic',
    name: 'Somatic Experiencing',
    fullName: 'Somatic Experiencing (SE)',
    description: 'Body-based approach that focuses on releasing trauma stored in the nervous system.',
    duration: 'Variable; typically 8-20 sessions',
    effectiveness: 'Moderate to good; 50-70% show improvement',
    howItWorks: 'Focuses on bodily sensations and the nervous system\'s stress response, helping complete the interrupted survival response and return to equilibrium.',
    pros: [
      'Focuses on body-based healing',
      'Gentle and less verbally intense',
      'Effective for those with dissociation',
      'Addresses nervous system dysregulation',
      'Can be combined with other therapies',
    ],
    cons: [
      'Less research than other approaches',
      'Requires specialized training',
      'May be slower than other methods',
      'Effectiveness varies widely',
    ],
    bestFor: 'People who prefer body-based approaches or have significant dissociation',
    research: 'Growing evidence base; less extensively studied than CBT or EMDR',
  },
];

export default function TreatmentComparison() {
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleTreatment = (id: string) => {
    setSelectedTreatments(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const getSelectedTreatments = () => {
    return treatments.filter(t => selectedTreatments.includes(t.id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">{APP_TITLE}</h1>
          <nav className="flex gap-6 text-sm">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/facts" className="text-foreground hover:text-primary transition-colors">100 Facts</a>
            <a href="/faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="/glossary" className="text-foreground hover:text-primary transition-colors">Glossary</a>
            <a href="/tools" className="text-foreground hover:text-primary transition-colors font-semibold">Tools</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Evidence-Based Treatments Comparison</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Compare different therapeutic approaches for CPTSD. Select treatments below to see side-by-side comparisons.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container max-w-6xl">
            {/* Treatment Selection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Select Treatments to Compare</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {treatments.map(treatment => (
                  <button
                    key={treatment.id}
                    onClick={() => toggleTreatment(treatment.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedTreatments.includes(treatment.id)
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="font-bold text-foreground">{treatment.name}</div>
                    <div className="text-sm text-muted-foreground">{treatment.fullName}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            {selectedTreatments.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Quick Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left font-bold">Aspect</th>
                        {getSelectedTreatments().map(t => (
                          <th key={t.id} className="border border-border p-3 text-left font-bold">{t.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-semibold">Duration</td>
                        {getSelectedTreatments().map(t => (
                          <td key={t.id} className="border border-border p-3 text-sm">{t.duration}</td>
                        ))}
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3 font-semibold">Effectiveness</td>
                        {getSelectedTreatments().map(t => (
                          <td key={t.id} className="border border-border p-3 text-sm">{t.effectiveness}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-semibold">Best For</td>
                        {getSelectedTreatments().map(t => (
                          <td key={t.id} className="border border-border p-3 text-sm">{t.bestFor}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Detailed Comparison */}
            <div className="space-y-6">
              {getSelectedTreatments().map(treatment => (
                <Card key={treatment.id} className="overflow-hidden">
                  <CardHeader className="bg-primary/5 cursor-pointer" onClick={() => setExpandedId(expandedId === treatment.id ? null : treatment.id)}>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl">{treatment.fullName}</CardTitle>
                        <CardDescription className="mt-2">{treatment.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {expandedId === treatment.id && (
                    <CardContent className="space-y-6 pt-6">
                      <div>
                        <h4 className="font-bold text-lg mb-2">How It Works</h4>
                        <p className="text-muted-foreground">{treatment.howItWorks}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-green-700">
                            <CheckCircle2 className="w-5 h-5" />
                            Advantages
                          </h4>
                          <ul className="space-y-2">
                            {treatment.pros.map((pro, i) => (
                              <li key={i} className="flex gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-orange-700">
                            <AlertCircle className="w-5 h-5" />
                            Considerations
                          </h4>
                          <ul className="space-y-2">
                            {treatment.cons.map((con, i) => (
                              <li key={i} className="flex gap-2 text-sm">
                                <XCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-900">
                          <strong>Research Support:</strong> {treatment.research}
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {selectedTreatments.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-muted-foreground text-lg">Select treatments above to see detailed comparisons</p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-12">
        <div className="container py-8">
          <p className="text-sm text-muted-foreground">
            © 2025 CPTSD Educational Resource. This comparison is for educational purposes. Consult with a mental health professional to determine the best treatment for your specific situation.
          </p>
        </div>
      </footer>
    </div>
  );
}
