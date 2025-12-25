import Navigation from "@/components/Navigation";


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Flame, MapPin, Lightbulb, Users } from 'lucide-react';

export default function Book() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
<Navigation />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-700/20 py-16 md:py-24 border-b border-border">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Book Cover */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg blur-2xl opacity-30"></div>
                  <img
                    src="/book-cover.png"
                    alt="From the Storm to the Fire 2025"
                    className="relative w-full max-w-sm rounded-lg shadow-2xl hover:shadow-3xl transition-shadow"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  From the Storm<br />to the Fire
                </h2>
                <p className="text-xl text-muted-foreground mb-2">A Memoir of Resilience and Healing</p>
                <p className="text-lg font-semibold text-orange-600 mb-6">By Daniel Bret Lingar</p>

                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  A raw, unflinching journey through the heart of Complex Post-Traumatic Stress Disorder (C-PTSD), addiction, and the long shadows cast by a childhood steeped in chaos. This is not a story of triumph neatly packaged with a bow, nor is it a tale of unrelenting despair. It is a map through the wreckage of a life shaped by early adversity—and a testament that healing is possible.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold">
                    Coming Soon - Pre-Order
                  </Button>
                  <Button size="lg" variant="outline">
                    Read Excerpt
                  </Button>
                </div>

                <div className="flex gap-8 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">230 Pages</p>
                    <p>Complete memoir</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">20 Chapters</p>
                    <p>6 Parts + Appendix</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">2025</p>
                    <p>Publication year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opening Statement */}
        <section className="py-16 md:py-20 border-b border-border bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-2xl font-semibold text-foreground mb-6 leading-relaxed italic border-l-4 border-orange-600 pl-6">
                "This is not a story of triumph neatly packaged with a bow, nor is it a tale of unrelenting despair. It is a raw, unflinching journey through the heart of Complex Post-Traumatic Stress Disorder (C-PTSD), addiction, and the long shadows cast by a childhood steeped in chaos."
              </blockquote>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From 30 days in a NICU incubator (the "Glass Box Blueprint") to witnessing domestic violence, from 20 years of relational trauma to the devastating loss of a brother, from the spiral of addiction to the slow reckoning of understanding C-PTSD—this memoir maps the wreckage and charts a path toward resilience.
              </p>
            </div>
          </div>
        </section>

        {/* What This Book Explores */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container">
            <h3 className="text-3xl font-bold mb-12">What This Book Explores</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border-border bg-card hover:bg-card/80 transition-colors">
                <Flame className="w-12 h-12 text-orange-600 mb-4" />
                <h4 className="text-xl font-semibold mb-3">The Foundations of Trauma</h4>
                <p className="text-muted-foreground leading-relaxed">
                  From 30 days in a NICU incubator (the "Glass Box Blueprint") to witnessing domestic violence at ages 5-7, discover how early trauma shapes a nervous system and creates survival strategies that both save and destroy.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card hover:bg-card/80 transition-colors">
                <Heart className="w-12 h-12 text-red-600 mb-4" />
                <h4 className="text-xl font-semibold mb-3">Entanglement & Escalation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Walk through 20 years of relational trauma, the devastating loss of a brother, and the spiral of addiction. Understand how trauma bonds form and why we're drawn to familiar patterns of pain.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card hover:bg-card/80 transition-colors">
                <MapPin className="w-12 h-12 text-amber-600 mb-4" />
                <h4 className="text-xl font-semibold mb-3">Decoding & Rising</h4>
                <p className="text-muted-foreground leading-relaxed">
                  From the inferno of isolation to the slow reckoning of understanding C-PTSD, explore the path toward resilience, healing, and the possibility of rising from the ashes.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Themes */}
        <section className="py-16 md:py-20 border-b border-border bg-muted/30">
          <div className="container">
            <h3 className="text-3xl font-bold mb-12">Key Themes & Topics</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Complex PTSD (C-PTSD)</h4>
                    <p className="text-sm text-muted-foreground">Understanding the 60 characteristics of C-PTSD and how they manifest in daily life</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Trauma & the Nervous System</h4>
                    <p className="text-sm text-muted-foreground">How early adversity wires the brain for survival and hypervigilance</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Addiction as Coping</h4>
                    <p className="text-sm text-muted-foreground">The role of substance use in managing unbearable emotional pain and trauma</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Relational Trauma</h4>
                    <p className="text-sm text-muted-foreground">How trauma bonds form and why healing requires understanding attachment patterns</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Grief & Loss</h4>
                    <p className="text-sm text-muted-foreground">Processing compounded grief from multiple losses and how it shapes identity</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Shame & Self-Concept</h4>
                    <p className="text-sm text-muted-foreground">The deep work of challenging beliefs about being "broken" or unworthy</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Resilience & Recovery</h4>
                    <p className="text-sm text-muted-foreground">The spiral of healing—revisiting wounds with new wisdom and building a life worth living</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Connection & Healing</h4>
                    <p className="text-sm text-muted-foreground">Learning what healthy relationships look like and building trust after betrayal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Structure */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container">
            <h3 className="text-3xl font-bold mb-12">Book Structure: 6 Parts, 20 Chapters</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-orange-600 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-orange-600/20 flex items-center justify-center text-sm font-bold">I</span>
                  The Foundations
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Chapter 1: The Storm Outside</li>
                  <li>• Chapter 2: The Fire Ignites</li>
                  <li>• Chapter 3: Pain Takes Root</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-orange-600 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-orange-600/20 flex items-center justify-center text-sm font-bold">II</span>
                  Entanglement & Escalation
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Chapter 4: Twenty Years of Static</li>
                  <li>• Chapter 5: The Collapse</li>
                  <li>• Chapter 6: The Breaking Point (Garrett's Loss)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-red-600 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center text-sm font-bold">III</span>
                  Inferno & Isolation
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Chapter 7: Adrift in North Dakota</li>
                  <li>• Chapter 8: Anatomy of a Spiral (Trinity, Tina, Kristina)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-red-600 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center text-sm font-bold">IV</span>
                  Decoding the Fire
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Chapter 9: Shifting the Blame</li>
                  <li>• Chapter 10: The Glass Box Blueprint</li>
                  <li>• Chapter 11: Echoes and Amplifiers</li>
                  <li>• Chapter 12: The Anatomy of Trauma (60 Reflections)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-amber-600 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-sm font-bold">V</span>
                  Reckoning & Rising
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Chapter 13: Conversations at Midnight</li>
                  <li>• Chapter 14: Letters of Healing</li>
                  <li>• Chapter 15: The Ember Still Burns</li>
                  <li>• Chapter 16: From Wreckage to Rising Flame</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-amber-600 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center text-sm font-bold">VI</span>
                  Forging the Flame
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Chapter 17: My Body Kept the Score</li>
                  <li>• Chapter 18: Finding the Map in the Madness</li>
                  <li>• Chapter 19: The Complex Dance of Connection</li>
                  <li>• Chapter 20: The Ongoing Path: Resilience and Healing</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Plus Appendix:</span> Clinical Assessment Findings, Research Notes on Dark Triad & VLBW/NICU Impacts, Legal Timeline, and Key Points Summary
              </p>
            </div>
          </div>
        </section>

        {/* About the Author */}
        <section className="py-16 md:py-20 border-b border-border bg-muted/30">
          <div className="container">
            <h3 className="text-3xl font-bold mb-8">About the Author</h3>
            <div className="max-w-3xl">
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                <span className="font-semibold">Daniel Bret Lingar</span> is a trauma survivor, writer, and advocate for Complex PTSD awareness. His journey through early adversity, relational trauma, addiction, and recovery has shaped his mission to help others understand that healing is possible—even when the path seems impossible.
              </p>

              <p className="text-lg text-foreground mb-8 leading-relaxed">
                This memoir is his attempt to map the wreckage of a life shaped by trauma, to give voice to the silent struggles of those living with C-PTSD, and to offer hope to survivors who see their own fire in these pages. Daniel is a father of four (Maverick, Shayla, Teaguen, and Adalee) and continues his journey of healing and resilience every day.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 border-border bg-card">
                  <BookOpen className="w-8 h-8 text-orange-600 mb-3" />
                  <h4 className="font-semibold mb-2 text-foreground">Why This Book Matters</h4>
                  <p className="text-sm text-muted-foreground">
                    This is not just a memoir—it's a map for survivors. It connects personal experience with clinical understanding of C-PTSD.
                  </p>
                </Card>

                <Card className="p-6 border-border bg-card">
                  <Heart className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-semibold mb-2 text-foreground">For Whom This Book</h4>
                  <p className="text-sm text-muted-foreground">
                    Survivors of C-PTSD, those wrestling with addiction, anyone who's felt broken by their past, and those seeking understanding.
                  </p>
                </Card>

                <Card className="p-6 border-border bg-card">
                  <Users className="w-8 h-8 text-amber-600 mb-3" />
                  <h4 className="font-semibold mb-2 text-foreground">For Professionals</h4>
                  <p className="text-sm text-muted-foreground">
                    A firsthand account of the therapeutic journey, offering valuable insights into client experiences and healing.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Readers Will Connect */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container">
            <h3 className="text-3xl font-bold mb-12">Why Readers Will Connect</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-border bg-card hover:bg-card/80 transition-colors">
                <p className="text-lg text-foreground mb-4 italic leading-relaxed">
                  "A raw, honest exploration of how trauma shapes us and how healing is possible—even when the journey feels impossible."
                </p>
                <p className="font-semibold text-foreground mb-1">For Trauma Survivors</p>
                <p className="text-sm text-muted-foreground">
                  This book validates your experience and shows you're not alone in the struggle.
                </p>
              </Card>

              <Card className="p-8 border-border bg-card hover:bg-card/80 transition-colors">
                <p className="text-lg text-foreground mb-4 italic leading-relaxed">
                  "A bridge between personal narrative and clinical understanding—connecting the dots between what happened and why we react the way we do."
                </p>
                <p className="font-semibold text-foreground mb-1">For Therapists & Clinicians</p>
                <p className="text-sm text-muted-foreground">
                  A powerful resource for understanding C-PTSD through lived experience.
                </p>
              </Card>

              <Card className="p-8 border-border bg-card hover:bg-card/80 transition-colors">
                <p className="text-lg text-foreground mb-4 italic leading-relaxed">
                  "A testament to resilience—that even in the ashes, the possibility of rising persists."
                </p>
                <p className="font-semibold text-foreground mb-1">For Those Seeking Hope</p>
                <p className="text-sm text-muted-foreground">
                  A reminder that healing is not linear, but it is possible.
                </p>
              </Card>

              <Card className="p-8 border-border bg-card hover:bg-card/80 transition-colors">
                <p className="text-lg text-foreground mb-4 italic leading-relaxed">
                  "A map through the storm and fire—showing how understanding our past can light a path forward."
                </p>
                <p className="font-semibold text-foreground mb-1">For Loved Ones</p>
                <p className="text-sm text-muted-foreground">
                  Gain insight into the complexity of trauma and how to support recovery.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-orange-700/10 border-b border-border">
          <div className="container text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin the Journey?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              From the Storm to the Fire is coming in 2025. Be among the first to know when it's available for pre-order and purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold">
                Notify Me When Available
              </Button>
              <Button size="lg" variant="outline">
                Join Mailing List
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Get updates on the book launch, exclusive excerpts, and resources for your healing journey.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border text-center text-sm text-muted-foreground">
          <div className="container">
            <p className="mb-4 font-semibold text-foreground">
              From the Storm to the Fire: A Memoir of Resilience and Healing
            </p>
            <p className="mb-4">
              © 2025 Daniel Bret Lingar. All rights reserved.
            </p>
            <p className="text-xs">
              This memoir is a work of non-fiction based on the author's lived experience. Names and identifying details have been changed to protect privacy.
            </p>
            <p className="text-xs mt-4">
              If you are in crisis, please contact 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
