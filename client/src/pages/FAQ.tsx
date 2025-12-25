import Navigation from "@/components/Navigation";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';



interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  // General Questions
  {
    id: 'q1',
    category: 'General Questions',
    question: 'What is the difference between PTSD and CPTSD?',
    answer: 'PTSD typically develops from a single traumatic event (such as a car accident, assault, or natural disaster), while CPTSD develops from prolonged, repeated trauma, often involving interpersonal harm (such as childhood abuse, domestic violence, or torture). CPTSD includes additional symptoms related to disturbances in self-organization, such as difficulty regulating emotions, negative self-concept, and relationship problems.'
  },
  {
    id: 'q2',
    category: 'General Questions',
    question: 'Is CPTSD officially recognized as a diagnosis?',
    answer: 'Yes, CPTSD is officially recognized in the ICD-11 (International Classification of Diseases, 11th Revision) by the World Health Organization, which was adopted in 2019. However, the DSM-5 (used in the United States) does not yet have a separate diagnosis for CPTSD, though it is recognized in clinical practice and research.'
  },
  {
    id: 'q3',
    category: 'General Questions',
    question: 'How common is CPTSD?',
    answer: 'The global prevalence of CPTSD is estimated at 6.2% in the general population, and 12.4% in trauma-exposed samples. In the United States, approximately 3.8% of adults meet criteria for CPTSD. Prevalence is significantly higher in specific populations, such as domestic violence survivors (40%) and clinical populations (44.7%).'
  },
  {
    id: 'q4',
    category: 'General Questions',
    question: 'Can children develop CPTSD?',
    answer: 'Yes, children can develop CPTSD, particularly those who experience prolonged trauma such as childhood abuse, neglect, or exposure to domestic violence. Early trauma exposure is a significant risk factor for CPTSD in adulthood.'
  },
  // Symptoms & Diagnosis
  {
    id: 'q5',
    category: 'Symptoms & Diagnosis',
    question: 'What are the main symptoms of CPTSD?',
    answer: 'CPTSD includes core PTSD symptoms (re-experiencing, avoidance, hyperarousal) plus additional symptoms related to disturbances in self-organization: affective dysregulation (difficulty controlling emotions), negative self-concept (shame, guilt, feeling damaged), and disturbances in relationships (difficulty trusting, isolation, avoidance of relationships).'
  },
  {
    id: 'q6',
    category: 'Symptoms & Diagnosis',
    question: 'Why is shame such a prominent symptom in CPTSD?',
    answer: 'Shame is often the most painful emotion in CPTSD because it develops from prolonged interpersonal trauma, particularly when the trauma involves betrayal by trusted caregivers. This creates a deep sense of being fundamentally damaged or different from others, which is central to the negative self-concept in CPTSD.'
  },
  {
    id: 'q7',
    category: 'Symptoms & Diagnosis',
    question: 'Is dissociation common in CPTSD?',
    answer: 'Yes, dissociation (feeling disconnected from your body or reality) is more common in CPTSD than in PTSD alone. This includes depersonalization (feeling detached from your body) and derealization (feeling the world is unreal). Dissociation is a protective mechanism the mind develops in response to prolonged trauma.'
  },
  {
    id: 'q8',
    category: 'Symptoms & Diagnosis',
    question: 'Can CPTSD cause suicidal thoughts?',
    answer: 'Yes, suicidal ideation is significantly higher in CPTSD compared to PTSD. If you are having suicidal thoughts, please reach out to a mental health professional or crisis service immediately. In the US, you can call the 988 Suicide & Crisis Lifeline.'
  },
  // Causes & Risk Factors
  {
    id: 'q9',
    category: 'Causes & Risk Factors',
    question: 'What types of trauma lead to CPTSD?',
    answer: 'CPTSD typically develops from prolonged, repeated trauma involving interpersonal harm, such as childhood abuse, domestic violence, torture, human trafficking, institutional abuse, or long-term captivity. Cumulative trauma burden (the total amount of trauma exposure) is a key predictor of CPTSD development.'
  },
  {
    id: 'q10',
    category: 'Causes & Risk Factors',
    question: 'Can occupational trauma lead to CPTSD?',
    answer: 'Yes, repeated occupational trauma can contribute to CPTSD. This includes first responders (police, firefighters, paramedics) who experience repeated exposure to traumatic events, as well as healthcare workers exposed to chronic medical trauma.'
  },
  {
    id: 'q11',
    category: 'Causes & Risk Factors',
    question: 'Is CPTSD hereditary?',
    answer: 'CPTSD itself is not directly hereditary, but intergenerational trauma may increase vulnerability. Children of parents with CPTSD may be at higher risk due to parenting challenges and exposure to trauma-related symptoms, though this is not a direct genetic inheritance.'
  },
  // Comorbidity & Related Conditions
  {
    id: 'q12',
    category: 'Comorbidity & Related Conditions',
    question: 'What conditions commonly co-occur with CPTSD?',
    answer: 'Depression, anxiety disorders, substance use disorder, sleep disorders, dissociative disorders, and chronic pain are highly comorbid with CPTSD. Additionally, CPTSD shares significant symptom overlap with Borderline Personality Disorder (BPD), though they are distinct conditions.'
  },
  {
    id: 'q13',
    category: 'Comorbidity & Related Conditions',
    question: 'Can CPTSD cause physical health problems?',
    answer: 'Yes, CPTSD can be associated with various physical health issues, including chronic pain, autoimmune disorders, cardiovascular disease risk, metabolic syndrome, and immune system dysfunction. Chronic stress and inflammation markers are elevated in individuals with CPTSD.'
  },
  {
    id: 'q14',
    category: 'Comorbidity & Related Conditions',
    question: 'Is CPTSD related to Borderline Personality Disorder (BPD)?',
    answer: 'CPTSD and BPD share significant symptom overlap, particularly in emotional dysregulation and relationship difficulties. However, they are distinct conditions. Many individuals with a history of early relational trauma may receive a BPD diagnosis when CPTSD would be more appropriate.'
  },
  // Treatment & Recovery
  {
    id: 'q15',
    category: 'Treatment & Recovery',
    question: 'Is CPTSD curable?',
    answer: 'While CPTSD cannot be "cured" in the traditional sense, recovery is absolutely possible with appropriate treatment and support. Many individuals with CPTSD achieve significant symptom reduction and move from a state of survival to thriving. Recovery is an ongoing process, not a destination.'
  },
  {
    id: 'q16',
    category: 'Treatment & Recovery',
    question: 'What are the most effective treatments for CPTSD?',
    answer: 'The most effective treatments are trauma-focused therapies, including Cognitive Processing Therapy (CPT), Prolonged Exposure (PE), and Eye Movement Desensitization and Reprocessing (EMDR). These treatments typically take 3-4 months and have strong evidence for treating CPTSD. Phase-based treatment approaches (such as STAIR) may also be beneficial.'
  },
  {
    id: 'q17',
    category: 'Treatment & Recovery',
    question: 'What is phase-based treatment?',
    answer: 'Phase-based treatment approaches CPTSD in stages. The first phase focuses on stabilization and skill-building (learning to manage emotions and improve relationships). The second phase involves directly processing the trauma memory. This approach may be beneficial for individuals with severe symptoms or multiple comorbidities.'
  },
  {
    id: 'q18',
    category: 'Treatment & Recovery',
    question: 'Can medication help with CPTSD?',
    answer: 'Yes, medication can help manage CPTSD symptoms, though it is not a cure. SSRIs (Selective Serotonin Reuptake Inhibitors) are commonly prescribed to help with depression and anxiety. Medication is often most effective when combined with psychotherapy.'
  },
  {
    id: 'q19',
    category: 'Treatment & Recovery',
    question: 'How long does CPTSD treatment typically take?',
    answer: 'Trauma-focused treatment typically ranges from 3-4 months. However, individual recovery timelines vary based on the severity of symptoms, number of comorbidities, and personal resilience factors. Recovery from CPTSD is not linear; setbacks are normal and expected.'
  },
  {
    id: 'q20',
    category: 'Treatment & Recovery',
    question: 'What is trauma-informed care?',
    answer: 'Trauma-informed care is an approach that recognizes the widespread impact of trauma and understands potential paths for recovery. It emphasizes safety, trustworthiness, peer support, collaboration, empowerment, and cultural sensitivity. Trauma-informed approaches improve treatment engagement and outcomes.'
  },
  // Daily Life & Functioning
  {
    id: 'q21',
    category: 'Daily Life & Functioning',
    question: 'How does CPTSD affect work and employment?',
    answer: 'CPTSD significantly impairs occupational functioning and employment stability. Symptoms such as difficulty concentrating, emotional dysregulation, and hypervigilance can make it challenging to maintain consistent employment. Many individuals with untreated CPTSD experience financial instability.'
  },
  {
    id: 'q22',
    category: 'Daily Life & Functioning',
    question: 'Can CPTSD affect parenting?',
    answer: 'Yes, CPTSD can compromise parenting capacity. Symptoms such as emotional dysregulation, hypervigilance, and difficulty with relationships can affect how individuals interact with their children. However, with treatment and support, parents with CPTSD can develop healthier parenting patterns.'
  },
  {
    id: 'q23',
    category: 'Daily Life & Functioning',
    question: 'Does CPTSD affect relationships?',
    answer: 'Yes, CPTSD significantly affects relationships. Difficulty trusting others, emotional dysregulation, and avoidance of relationships are core symptoms. However, with treatment and effort, individuals with CPTSD can build and maintain healthy relationships.'
  },
  {
    id: 'q24',
    category: 'Daily Life & Functioning',
    question: 'Is it possible to have a fulfilling life with CPTSD?',
    answer: 'Absolutely. With appropriate treatment, support, and self-compassion, individuals with CPTSD can move from survival to thriving. Many people with CPTSD develop increased empathy and compassion, find meaning in their experiences, and contribute meaningfully to their communities.'
  },
  // Recovery & Resilience
  {
    id: 'q25',
    category: 'Recovery & Resilience',
    question: 'What factors predict better outcomes in CPTSD recovery?',
    answer: 'Resilience factors that predict better outcomes include strong social support, effective coping skills, sense of purpose, self-compassion, and willingness to engage in treatment. Trauma-informed care approaches and peer support also significantly improve outcomes.'
  },
  {
    id: 'q26',
    category: 'Recovery & Resilience',
    question: 'What is post-traumatic growth?',
    answer: 'Post-traumatic growth refers to positive psychological change experienced as a result of struggling with challenging life circumstances. Individuals with CPTSD may experience increased empathy, stronger relationships, greater appreciation for life, personal strength, and spiritual growth through their recovery journey.'
  },
  {
    id: 'q27',
    category: 'Recovery & Resilience',
    question: 'How important is peer support in CPTSD recovery?',
    answer: 'Peer support is extremely valuable in CPTSD recovery. Support groups and peer connections provide validation, reduce isolation, offer practical coping strategies, and create a sense of community. Many individuals find peer support as important as professional treatment.'
  },
  {
    id: 'q28',
    category: 'Recovery & Resilience',
    question: 'Can mindfulness and yoga help with CPTSD?',
    answer: 'Trauma-informed yoga and mindfulness practices may support CPTSD recovery by promoting body awareness, emotional regulation, and relaxation. However, these should complement, not replace, evidence-based trauma-focused therapy.'
  },
  {
    id: 'q29',
    category: 'Recovery & Resilience',
    question: 'What is self-compassion and why is it important in CPTSD recovery?',
    answer: 'Self-compassion involves treating yourself with the same kindness and understanding you would offer a good friend. It is crucial in CPTSD recovery because trauma often creates harsh self-judgment and shame. Developing self-compassion helps counteract negative self-concept and supports healing.'
  },
  {
    id: 'q30',
    category: 'Recovery & Resilience',
    question: 'Is relapse common in CPTSD recovery?',
    answer: 'Setbacks are normal and expected in CPTSD recovery. Recovery is not linear. Relapse prevention is an important component of treatment, and having a plan for managing difficult periods can help individuals navigate challenges while maintaining progress.'
  },
];

function FAQAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = Array.from(new Set(faqItems.map(item => item.category)));

  return (
    <div className="space-y-8">
      {categories.map(category => (
        <div key={category}>
          <h3 className="text-2xl font-bold mb-4 text-primary">{category}</h3>
          <div className="space-y-3">
            {faqItems
              .filter(item => item.category === category)
              .map(item => (
                <div
                  key={item.id}
                  className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-card-foreground pr-4">{item.question}</span>
                    <ChevronDown
                      className={`flex-shrink-0 w-5 h-5 text-primary transition-transform ${
                        expandedId === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedId === item.id && (
                    <div className="px-6 py-4 bg-muted/30 border-t border-border text-card-foreground text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
<Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Find answers to common questions about Complex Post-Traumatic Stress Disorder (CPTSD), including symptoms, treatment, and recovery.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            <FAQAccordion />
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-12 md:py-16 bg-muted border-t border-border">
          <div className="container">
            <h3 className="text-3xl font-bold mb-8">Need More Support?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-semibold mb-3">Crisis Resources</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  If you are in crisis or having suicidal thoughts, please reach out for help immediately.
                </p>
                <p className="text-sm font-semibold">988 Suicide & Crisis Lifeline (US)</p>
                <p className="text-sm text-muted-foreground">Call or text 988</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-semibold mb-3">Professional Help</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Consider reaching out to a trauma-informed mental health professional for personalized support.
                </p>
                <p className="text-sm font-semibold">Find a Therapist</p>
                <p className="text-sm text-muted-foreground">Psychology Today, SAMHSA, or CPTSD Foundation</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-12">
        <div className="container py-8">
          <p className="text-sm text-muted-foreground">
            © 2025 CPTSD Educational Resource. This FAQ provides educational information only and should not replace professional medical or mental health advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
