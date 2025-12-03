import { Streamdown } from 'streamdown';
import { APP_TITLE } from "@/const";

export default function Home() {
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Complex PTSD: Straight Facts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              An educational overview of Complex Post-Traumatic Stress Disorder (CPTSD)—covering when it develops, why it occurs, how to treat it, and what you can do now.
            </p>
          </div>
        </section>

        {/* When Section */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container">
            <h3 className="text-3xl font-bold mb-6">When: The Origin of CPTSD</h3>
            <div className="prose prose-invert max-w-none">
              <Streamdown>
{`**Definition:** Complex Post-Traumatic Stress Disorder (CPTSD) is a condition that develops following prolonged, repeated, or cumulative trauma, often involving interpersonal harm from which there was little or no chance of escape.

**Contrast with PTSD:**

- **PTSD:** Typically results from a single, time-limited traumatic event (e.g., a car accident, a natural disaster, a single assault).
- **CPTSD:** Results from chronic, long-term trauma (e.g., prolonged child abuse, domestic violence, torture, long-term captivity, repeated exposure to trauma in a professional role).
`}
              </Streamdown>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container">
            <h3 className="text-3xl font-bold mb-6">Why: The Core Symptoms</h3>
            <div className="prose prose-invert max-w-none mb-6">
              <Streamdown>
{`CPTSD includes the core symptoms of PTSD (re-experiencing, avoidance, hyperarousal) plus three additional clusters of symptoms related to disturbances in self-organization.
`}
              </Streamdown>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Symptom Cluster</th>
                    <th className="text-left py-3 px-4 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Affective Dysregulation</td>
                    <td className="py-3 px-4">Difficulty controlling emotions; extreme emotional reactions; persistent feelings of emptiness, despair, or worthlessness.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Negative Self-Concept</td>
                    <td className="py-3 px-4">Deep-seated feelings of shame, guilt, or failure; feeling permanently damaged or different from others.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Disturbances in Relationships</td>
                    <td className="py-3 px-4">Difficulty maintaining relationships; avoidance of relationships; feeling isolated; distrust of others.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How Section */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container">
            <h3 className="text-3xl font-bold mb-6">How: The Path to Healing</h3>
            <div className="prose prose-invert max-w-none">
              <Streamdown>
{`The goal of treatment is to move from a state of survival to a state of thriving.

**Trauma-Focused Therapies:** The most effective treatments for PTSD are also effective for CPTSD. These typically involve directly processing the trauma memory. Examples include:

- Cognitive Processing Therapy (CPT)
- Prolonged Exposure (PE)
- Eye Movement Desensitization and Reprocessing (EMDR)

**Phase-Based Treatment (e.g., STAIR):** Some approaches suggest a phased approach, starting with stabilization and skill-building (managing emotions, improving relationships) before moving to trauma processing.

**Duration:** These treatments generally take 3-4 months. Once PTSD has been treated, some other concerns (such as depression or relationship health) may still need to be addressed.
`}
              </Streamdown>
            </div>
          </div>
        </section>

        {/* Now Section */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container">
            <h3 className="text-3xl font-bold mb-6">Now: Immediate Action & Education</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Immediate Steps</h4>
                <div className="prose prose-invert max-w-none">
                  <Streamdown>
{`1. **Safety First:** Ensure physical and emotional safety. This is the foundation of all healing.
2. **Seek Professional Help:** Consult a trauma-informed mental health professional.
3. **Psychoeducation:** Understand that your symptoms are a normal reaction to abnormal circumstances.
`}
                  </Streamdown>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Educational Resources</h4>
                <div className="prose prose-invert max-w-none">
                  <Streamdown>
{`**Books:**
- *The Body Keeps the Score* by Bessel van der Kolk
- *Complex PTSD: From Surviving to Thriving* by Pete Walker

**Organizations:**
- National Center for PTSD (PTSD.VA.gov)
- CPTSD Foundation
`}
                  </Streamdown>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h3 className="text-3xl font-bold mb-6">References</h3>
            <div className="prose prose-invert max-w-none text-sm">
              <Streamdown>
{`[1] World Health Organization. *International Classification of Diseases 11th Revision (ICD-11)*.

[2] My Cleveland Clinic. *CPTSD (Complex PTSD): What It Is, Symptoms & Treatment*.

[3] Healthline. *Can You Have PTSD Without Knowing It?*

[4] PubMed Central. *Complex posttraumatic stress disorder*.

[5] PTSD: National Center for PTSD. *Complex PTSD*.

All information presented on this page is for educational purposes only and should not replace professional medical or mental health advice. If you or someone you know is struggling with trauma, please consult a qualified healthcare provider.
`}
              </Streamdown>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-12">
        <div className="container py-8">
          <p className="text-sm text-muted-foreground">
            © 2025 CPTSD Educational Resource. This site provides factual information about Complex PTSD for educational purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}
