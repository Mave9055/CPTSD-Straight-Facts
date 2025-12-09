import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { APP_TITLE } from "@/const";

interface GlossaryTerm {
  letter: string;
  term: string;
  definition: string;
}

const glossaryTerms: GlossaryTerm[] = [
  // A
  { letter: 'A', term: 'Affective Dysregulation', definition: 'The difficulty in controlling emotional responses. In CPTSD, individuals may experience extreme emotional reactions to minor triggers, including sudden anger, sadness, or anxiety.' },
  { letter: 'A', term: 'Avoidance', definition: 'A coping mechanism where individuals actively avoid reminders of trauma, such as certain places, people, activities, or conversations.' },
  { letter: 'A', term: 'Attachment', definition: 'The emotional bond formed between a child and their primary caregiver. Secure attachment provides a foundation for healthy emotional development.' },
  { letter: 'A', term: 'Attachment Disorder', definition: 'A condition resulting from inadequate emotional bonding during early childhood, often due to neglect, abuse, or frequent changes in caregivers.' },
  // B
  { letter: 'B', term: 'Betrayal Trauma', definition: 'Trauma inflicted by someone in a position of trust or authority, such as a parent, teacher, or intimate partner.' },
  { letter: 'B', term: 'Borderline Personality Disorder (BPD)', definition: 'A mental health condition characterized by unstable relationships, intense fear of abandonment, unstable self-image, and emotional dysregulation.' },
  { letter: 'B', term: 'Brainspotting', definition: 'A psychotherapy technique that uses eye position to access and process traumatic memories.' },
  // C
  { letter: 'C', term: 'Cognitive Processing Therapy (CPT)', definition: 'An evidence-based trauma therapy that helps individuals process traumatic memories by examining and challenging unhelpful thoughts related to the trauma.' },
  { letter: 'C', term: 'Complex PTSD (CPTSD)', definition: 'A mental health condition that develops following prolonged, repeated, or cumulative trauma, often involving interpersonal harm.' },
  { letter: 'C', term: 'Cumulative Trauma', definition: 'The combined impact of multiple traumatic events experienced over time.' },
  // D
  { letter: 'D', term: 'Depersonalization', definition: 'A dissociative symptom where individuals feel detached from their body or physical sensations.' },
  { letter: 'D', term: 'Derealization', definition: 'A dissociative symptom where the external world feels unreal, dreamlike, or visually distorted.' },
  { letter: 'D', term: 'Dissociation', definition: 'A psychological response to trauma where the mind disconnects from thoughts, feelings, memories, or sense of identity as a protective mechanism.' },
  { letter: 'D', term: 'Dissociative Identity Disorder (DID)', definition: 'A severe dissociative disorder characterized by the presence of two or more distinct personality states or identities.' },
  // E
  { letter: 'E', term: 'Emotional Flashback', definition: 'A sudden, intense emotional state triggered by a reminder of trauma, without necessarily involving visual or sensory flashbacks.' },
  { letter: 'E', term: 'Emancipatory Trauma Therapy', definition: 'A therapeutic approach that emphasizes the client\'s agency, resilience, and capacity for healing.' },
  { letter: 'E', term: 'EMDR (Eye Movement Desensitization and Reprocessing)', definition: 'An evidence-based psychotherapy that uses bilateral stimulation to help process traumatic memories.' },
  { letter: 'E', term: 'Exposure Therapy', definition: 'A trauma therapy technique where individuals gradually confront trauma-related memories, thoughts, or situations in a safe, controlled environment.' },
  // F
  { letter: 'F', term: 'Flashback', definition: 'An intrusive memory of trauma that feels as if the traumatic event is happening in the present moment.' },
  { letter: 'F', term: 'Freeze Response', definition: 'One of the body\'s automatic responses to threat, characterized by immobility or "playing dead."' },
  // G
  { letter: 'G', term: 'Grounding Techniques', definition: 'Coping strategies used to bring awareness back to the present moment when experiencing dissociation, flashbacks, or anxiety.' },
  // H
  { letter: 'H', term: 'Hyperarousal', definition: 'A state of heightened physiological arousal where the nervous system remains in a state of alert.' },
  { letter: 'H', term: 'Hypervigilance', definition: 'A symptom of PTSD and CPTSD characterized by constant scanning for danger or threats.' },
  // I
  { letter: 'I', term: 'Intergenerational Trauma', definition: 'Trauma that is transmitted from one generation to the next, often through parenting patterns, family dynamics, or genetic predisposition.' },
  { letter: 'I', term: 'Intrusive Thoughts', definition: 'Unwanted, involuntary thoughts related to trauma that repeatedly enter consciousness.' },
  // J
  { letter: 'J', term: 'Journaling', definition: 'A therapeutic technique where individuals write about their thoughts, feelings, and experiences related to trauma.' },
  // K
  { letter: 'K', term: 'Kindness-Based Therapy', definition: 'A therapeutic approach that emphasizes self-compassion, acceptance, and kindness toward oneself.' },
  // L
  { letter: 'L', term: 'Limbic System', definition: 'The part of the brain responsible for processing emotions and memories, including the amygdala, hippocampus, and hypothalamus.' },
  // M
  { letter: 'M', term: 'Mindfulness', definition: 'A practice of present-moment awareness without judgment that can help individuals with CPTSD develop emotional regulation skills.' },
  { letter: 'M', term: 'Moral Injury', definition: 'Psychological harm resulting from actions, inactions, or witnessing of actions that violate one\'s moral code.' },
  // N
  { letter: 'N', term: 'Negative Self-Concept', definition: 'A core symptom of CPTSD characterized by persistent negative beliefs about oneself, including feelings of shame, guilt, and worthlessness.' },
  { letter: 'N', term: 'Neurobiology of Trauma', definition: 'The study of how trauma affects brain structure and function.' },
  // O
  { letter: 'O', term: 'Occupational Trauma', definition: 'Repeated trauma exposure in a professional context, such as in first responders, healthcare workers, or military personnel.' },
  // P
  { letter: 'P', term: 'Phase-Based Treatment', definition: 'A structured approach to trauma therapy that occurs in phases: stabilization and skill-building, trauma processing, and integration.' },
  { letter: 'P', term: 'Post-Traumatic Growth', definition: 'Positive psychological change experienced as a result of struggling with challenging life circumstances.' },
  { letter: 'P', term: 'Prefrontal Cortex', definition: 'The part of the brain responsible for rational thinking, decision-making, and impulse control.' },
  { letter: 'P', term: 'Prolonged Exposure (PE) Therapy', definition: 'An evidence-based trauma therapy where individuals gradually confront trauma-related memories and situations.' },
  { letter: 'P', term: 'PTSD (Post-Traumatic Stress Disorder)', definition: 'A mental health condition that develops following a single traumatic event.' },
  // R
  { letter: 'R', term: 'Resilience', definition: 'The capacity to recover from adversity and adapt to challenging circumstances.' },
  { letter: 'R', term: 'Re-experiencing', definition: 'A core symptom of PTSD and CPTSD where individuals involuntarily relive traumatic memories through flashbacks, nightmares, or intrusive thoughts.' },
  // S
  { letter: 'S', term: 'Self-Compassion', definition: 'The practice of treating oneself with kindness and understanding, particularly during times of difficulty or failure.' },
  { letter: 'S', term: 'Shame', definition: 'An intense emotional state characterized by feeling fundamentally flawed, worthless, or unlovable.' },
  { letter: 'S', term: 'Somatic Experiencing', definition: 'A body-based psychotherapy approach that focuses on releasing trauma stored in the nervous system.' },
  { letter: 'S', term: 'Somatic Symptoms', definition: 'Physical symptoms without a clear medical cause, often resulting from trauma.' },
  { letter: 'S', term: 'STAIR Therapy', definition: 'A phase-based trauma therapy that focuses on stabilization, affect regulation, and trauma processing.' },
  { letter: 'S', term: 'Startle Response', definition: 'An automatic reaction to sudden, unexpected stimuli.' },
  { letter: 'S', term: 'Stress Response Cycle', definition: 'The body\'s natural process of responding to a threat and returning to baseline.' },
  // T
  { letter: 'T', term: 'Trauma', definition: 'An overwhelming experience that exceeds an individual\'s capacity to cope, resulting in lasting psychological effects.' },
  { letter: 'T', term: 'Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)', definition: 'An evidence-based psychotherapy that combines cognitive-behavioral techniques with trauma processing.' },
  { letter: 'T', term: 'Trauma-Informed Care', definition: 'An approach to healthcare and social services that recognizes the widespread impact of trauma and understands potential paths for recovery.' },
  { letter: 'T', term: 'Trauma Memory', definition: 'Memories of traumatic events that are often fragmented, sensory-based, and difficult to verbalize.' },
  { letter: 'T', term: 'Trigger', definition: 'A reminder of trauma that activates trauma-related symptoms.' },
  // U
  { letter: 'U', term: 'Unresolved Trauma', definition: 'Trauma that has not been adequately processed through therapy or other healing modalities.' },
  // V
  { letter: 'V', term: 'Vagal Tone', definition: 'The function of the vagus nerve, which is central to the parasympathetic nervous system.' },
  { letter: 'V', term: 'Ventral Vagal System', definition: 'The part of the vagus nerve associated with the parasympathetic nervous system and social engagement.' },
  // W
  { letter: 'W', term: 'Window of Tolerance', definition: 'The zone of arousal in which an individual can function optimally.' },
  // X
  { letter: 'X', term: 'X-Trauma (Complex Trauma)', definition: 'Another term for Complex PTSD, emphasizing the complexity and multiplicity of trauma exposure.' },
  // Y
  { letter: 'Y', term: 'Yoga (Trauma-Informed)', definition: 'A mind-body practice adapted for trauma survivors that emphasizes safety, choice, and body awareness.' },
  // Z
  { letter: 'Z', term: 'Zero-Sum Thinking', definition: 'A cognitive distortion common in CPTSD where individuals see situations as all-or-nothing, with no middle ground.' },
];

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = useMemo(() => {
    if (!searchTerm.trim()) return glossaryTerms;
    
    const lowerSearch = searchTerm.toLowerCase();
    return glossaryTerms.filter(
      item => 
        item.term.toLowerCase().includes(lowerSearch) ||
        item.definition.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm]);

  const groupedTerms = useMemo(() => {
    const groups: { [key: string]: GlossaryTerm[] } = {};
    filteredTerms.forEach(term => {
      if (!groups[term.letter]) {
        groups[term.letter] = [];
      }
      groups[term.letter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  const letters = Object.keys(groupedTerms).sort();

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
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">CPTSD Glossary</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              A comprehensive guide to key terms and concepts related to Complex Post-Traumatic Stress Disorder.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </section>

        {/* Glossary Content */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            {letters.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No terms found matching your search.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {letters.map(letter => (
                  <div key={letter}>
                    <h3 className="text-3xl font-bold mb-4 text-primary">{letter}</h3>
                    <div className="space-y-6">
                      {groupedTerms[letter].map((item, idx) => (
                        <div key={idx} className="border-l-4 border-primary pl-4 py-2">
                          <h4 className="text-xl font-semibold text-card-foreground mb-2">{item.term}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.definition}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Info Box */}
        <section className="py-12 md:py-16 bg-muted border-t border-border">
          <div className="container">
            <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4">About This Glossary</h3>
              <p className="text-sm text-muted-foreground mb-4">
                This glossary provides definitions of key terms related to Complex Post-Traumatic Stress Disorder (CPTSD), trauma therapy, and mental health. These definitions are intended for educational purposes and should not replace professional medical or mental health advice.
              </p>
              <p className="text-sm text-muted-foreground">
                For more information about any of these terms, consider consulting with a mental health professional or exploring resources from organizations such as the CPTSD Foundation, the National Center for PTSD, or the International Society for the Study of Trauma and Dissociation (ISSTD).
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-12">
        <div className="container py-8">
          <p className="text-sm text-muted-foreground">
            © 2025 CPTSD Educational Resource. This glossary provides educational information only and should not replace professional medical or mental health advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
