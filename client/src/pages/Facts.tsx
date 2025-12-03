import { Streamdown } from 'streamdown';
import { APP_TITLE } from "@/const";

export default function Facts() {
  const facts = [
    // Definition & Diagnosis (1-10)
    "CPTSD is a mental health condition that develops following prolonged, repeated, or cumulative trauma, often involving interpersonal harm.",
    "CPTSD was officially recognized in the ICD-11 (International Classification of Diseases, 11th Revision) by the World Health Organization in 2019.",
    "CPTSD is distinct from PTSD, which typically results from a single traumatic event.",
    "The global pooled prevalence of CPTSD is estimated at 6.2% in the general population.",
    "CPTSD prevalence is higher in trauma-exposed samples, reaching 12.4% globally.",
    "In the United States, approximately 3.8% of adults meet criteria for CPTSD.",
    "CPTSD prevalence is highest in clinical populations at 44.7%.",
    "Among domestic violence and sexual abuse survivors, CPTSD prevalence reaches 40%.",
    "CPTSD affects both children and adults, though it is more common in those with early trauma exposure.",
    "The DSM-5 does not yet have a separate diagnosis for CPTSD, though it is recognized in the ICD-11.",
    
    // Causes & Risk Factors (11-25)
    "CPTSD typically results from prolonged child abuse, domestic violence, torture, or long-term captivity.",
    "Repeated interpersonal trauma is the primary cause of CPTSD, distinguishing it from single-event PTSD.",
    "Childhood trauma is the most common precursor to CPTSD in adulthood.",
    "Individuals with CPTSD report earlier age of trauma onset compared to those with PTSD alone.",
    "Multiple trauma exposures significantly increase the risk of developing CPTSD.",
    "Trauma occurring during critical developmental periods (childhood) increases CPTSD risk.",
    "Lack of escape or perceived inability to escape from trauma increases CPTSD likelihood.",
    "Interpersonal betrayal by trusted caregivers is a significant risk factor for CPTSD.",
    "Cumulative trauma burden—the total amount of trauma exposure—predicts CPTSD development.",
    "Individuals with CPTSD often experience trauma from multiple sources (e.g., family, community, institutional).",
    "Prolonged institutional abuse (e.g., in orphanages, religious institutions) is a documented cause of CPTSD.",
    "Human trafficking and modern slavery are significant causes of CPTSD in vulnerable populations.",
    "Chronic medical trauma (repeated painful procedures, hospitalization) can contribute to CPTSD.",
    "Occupational trauma (e.g., repeated exposure in first responders) can lead to CPTSD.",
    "Intergenerational trauma may increase vulnerability to CPTSD in subsequent generations.",
    
    // Core Symptoms (26-50)\n    "CPTSD includes all core PTSD symptoms: re-experiencing, avoidance, and hyperarousal.",
    "Beyond PTSD symptoms, CPTSD includes disturbances in self-organization (DSO).",
    "Affective dysregulation—difficulty controlling emotions—is a hallmark of CPTSD.",
    "Individuals with CPTSD experience extreme emotional reactions to minor triggers.",
    "Persistent feelings of emptiness and despair are common in CPTSD.",
    "Negative self-concept is a core feature of CPTSD, including feelings of shame and guilt.",
    "Many with CPTSD feel permanently damaged or fundamentally different from others.",
    "Disturbances in relationships are a defining feature of CPTSD.",
    "Difficulty trusting others is extremely common in CPTSD due to interpersonal trauma.",
    "Individuals with CPTSD often isolate themselves from relationships.",
    "Flashbacks and intrusive memories are common in CPTSD, similar to PTSD.",
    "Nightmares related to trauma are frequent in CPTSD.",
    "Hypervigilance—constant scanning for danger—is prevalent in CPTSD.",
    "Sleep disturbances are nearly universal in CPTSD.",
    "Dissociation (feeling disconnected from body or reality) is more common in CPTSD than PTSD.",
    "Depersonalization and derealization are frequent dissociative symptoms in CPTSD.",
    "Suicidal ideation is significantly higher in CPTSD compared to PTSD.",
    "Self-harm behaviors are more prevalent in CPTSD than in PTSD alone.",
    "Substance abuse is a common coping mechanism in CPTSD.",
    "Eating disorders are frequently comorbid with CPTSD.",
    "Chronic pain is often associated with CPTSD.",
    "Somatic symptoms (body-based complaints) are common in CPTSD.",
    "Difficulty with emotional regulation can lead to explosive anger or complete emotional shutdown.",
    "Individuals with CPTSD may experience prolonged grief reactions.",
    "Shame is often described as the most painful emotion in CPTSD.",
    
    // Comorbidity & Related Conditions (51-65)
    "Depression is highly comorbid with CPTSD, affecting the majority of individuals.",
    "Anxiety disorders frequently co-occur with CPTSD.",
    "Borderline Personality Disorder (BPD) shares significant symptom overlap with CPTSD.",
    "Attachment disorders are common in individuals who experienced early relational trauma.",
    "Chronic pain syndromes are frequently associated with CPTSD.",
    "Autoimmune disorders may be more prevalent in individuals with CPTSD.",
    "Substance Use Disorder is highly comorbid with CPTSD.",
    "Sleep disorders are nearly universal in CPTSD.",
    "Dissociative disorders are more common in CPTSD than in PTSD.",
    "Attention-Deficit/Hyperactivity Disorder (ADHD) symptoms may be exacerbated by CPTSD.",
    "Obsessive-Compulsive Disorder (OCD) can co-occur with CPTSD.",
    "Cardiovascular disease risk may be elevated in CPTSD due to chronic stress.",
    "Metabolic syndrome is more prevalent in individuals with CPTSD.",
    "Immune system dysfunction is documented in CPTSD.",
    "Chronic inflammation markers are elevated in individuals with CPTSD.",
    
    // Impact on Daily Life (66-75)
    "CPTSD significantly impairs occupational functioning and employment stability.",
    "Educational attainment is often lower in individuals with untreated CPTSD.",
    "Social relationships are severely affected by CPTSD symptoms.",
    "Parenting capacity may be compromised in individuals with active CPTSD.",
    "Financial instability is more common in individuals with CPTSD.",
    "Housing instability and homelessness are overrepresented in CPTSD populations.",
    "Quality of life is substantially reduced in CPTSD compared to the general population.",
    "Individuals with CPTSD have higher healthcare utilization rates.",
    "Medical costs associated with CPTSD are substantial due to comorbid conditions.",
    "CPTSD can lead to social withdrawal and isolation, worsening symptoms.",
    
    // Treatment & Recovery (76-90)
    "Trauma-focused cognitive behavioral therapy (TF-CBT) is evidence-based for CPTSD.",
    "Cognitive Processing Therapy (CPT) has strong evidence for treating CPTSD.",
    "Prolonged Exposure (PE) therapy is effective for CPTSD.",
    "Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based treatment for CPTSD.",
    "Phase-based treatment approaches (e.g., STAIR) may be beneficial for CPTSD.",
    "Stabilization and skill-building are often necessary before trauma processing in CPTSD.",
    "Psychopharmacology (medication) can help manage CPTSD symptoms, though it is not a cure.",
    "SSRIs (Selective Serotonin Reuptake Inhibitors) are commonly prescribed for CPTSD.",
    "Trauma-informed yoga and mindfulness may support CPTSD recovery.",
    "Group therapy can be beneficial for CPTSD, providing community and validation.",
    "Peer support groups are valuable resources for individuals with CPTSD.",
    "Treatment duration for CPTSD typically ranges from 3-4 months for trauma-focused therapy.",
    "Recovery from CPTSD is possible with appropriate treatment and support.",
    "Long-term outcomes show that active treatment yields large symptom reductions lasting at least 12 months.",
    "Relapse prevention is an important component of CPTSD treatment.",
    
    // Long-Term Outcomes & Resilience (91-100)
    "With treatment, many individuals with CPTSD achieve significant symptom reduction.",
    "Resilience factors (social support, coping skills, sense of purpose) predict better CPTSD outcomes.",
    "Trauma-informed care approaches improve treatment engagement and outcomes in CPTSD.",
    "Self-compassion and acceptance are important components of CPTSD recovery.",
    "Building healthy relationships is a key aspect of CPTSD healing.",
    "Meaning-making and post-traumatic growth are possible outcomes of CPTSD recovery.",
    "Individuals with CPTSD can develop increased empathy and compassion through recovery.",
    "Advocacy and helping others can be part of the CPTSD recovery journey.",
    "CPTSD recovery is not linear; setbacks are normal and expected.",
    "With proper support, education, and treatment, individuals with CPTSD can move from survival to thriving.",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
       {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">{APP_TITLE}</h1>
          <nav className="flex gap-6 text-sm">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/facts" className="text-foreground hover:text-primary transition-colors">100 Facts</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">100 Facts About CPTSD</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive collection of evidence-based facts about Complex Post-Traumatic Stress Disorder, covering definition, causes, symptoms, treatment, and recovery.
            </p>
          </div>
        </section>

        {/* Facts Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-sm text-card-foreground leading-relaxed">
                      {fact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 md:py-16 bg-muted border-t border-border">
          <div className="container">
            <h3 className="text-3xl font-bold mb-8">Fact Categories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-semibold mb-2">Definition & Diagnosis (1-10)</h4>
                <p className="text-sm text-muted-foreground">Learn what CPTSD is, how it differs from PTSD, and prevalence statistics.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-semibold mb-2">Causes & Risk Factors (11-25)</h4>
                <p className="text-sm text-muted-foreground">Understand the types of trauma and circumstances that lead to CPTSD.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-semibold mb-2">Core Symptoms (26-50)</h4>
                <p className="text-sm text-muted-foreground">Explore the emotional, behavioral, and physical symptoms of CPTSD.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-semibold mb-2">Comorbidity (51-65)</h4>
                <p className="text-sm text-muted-foreground">Discover conditions that frequently co-occur with CPTSD.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-semibold mb-2">Daily Life Impact (66-75)</h4>
                <p className="text-sm text-muted-foreground">Learn how CPTSD affects work, relationships, and quality of life.</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h4 className="text-xl font-semibold mb-2">Treatment & Recovery (76-100)</h4>
                <p className="text-sm text-muted-foreground">Understand evidence-based treatments and paths to healing.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-12">
        <div className="container py-8">
          <p className="text-sm text-muted-foreground">
            © 2025 CPTSD Educational Resource. All facts are based on peer-reviewed research and official sources. This site provides factual information for educational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}
