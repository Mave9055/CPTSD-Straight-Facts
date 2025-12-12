import { APP_TITLE } from "@/const";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Lightbulb } from 'lucide-react';

export default function Book() {
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
            <a href="/find-therapist" className="text-foreground hover:text-primary transition-colors">Find Therapist</a>
            <a href="/book" className="text-foreground hover:text-primary transition-colors font-semibold">Book</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/book-cover.png"
                alt="FROM THE STORM TO THE FIRE 2025 - A Memoir of Resilience and Healing by Daniel Bret Lingar"
                className="w-full max-w-sm rounded-lg shadow-2xl hover:shadow-3xl transition-shadow"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Book Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-5xl font-bold mb-2 text-primary">FROM THE STORM TO THE FIRE</h2>
              <p className="text-2xl text-muted-foreground mb-4">2025</p>
              <p className="text-xl font-semibold text-foreground mb-2">A Memoir of Resilience and Healing</p>
              <p className="text-lg text-muted-foreground">By Daniel Bret Lingar</p>
            </div>

            {/* Promotional Blurb */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-foreground">
                  In <span className="font-semibold">FROM THE STORM TO THE FIRE</span>, Daniel Bret Lingar shares his powerful journey from the depths of trauma and Complex Post-Traumatic Stress Disorder (CPTSD) to a place of profound healing and resilience. This raw, honest memoir explores the struggles of living with untreated trauma, the turning points that sparked change, and the transformative path to recovery.
                </p>
              </CardContent>
            </Card>

            {/* Key Themes */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Key Themes</p>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">Overcoming trauma and CPTSD through evidence-based treatment</span>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">The importance of seeking professional mental health support</span>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">Finding hope, resilience, and meaning in the healing journey</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="w-full text-lg font-semibold"
              >
                Coming Soon
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-3">
                Available for pre-order and purchase in 2025
              </p>
            </div>
          </div>
        </div>

        {/* About the Author */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              About the Author
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground leading-relaxed">
              Daniel Bret Lingar is a trauma survivor, mental health advocate, and author dedicated to raising awareness about Complex Post-Traumatic Stress Disorder (CPTSD). Through his personal journey of healing and recovery, he has become passionate about helping others understand trauma, seek professional support, and discover their own path to resilience.
            </p>
            <p className="text-foreground leading-relaxed">
              His memoir, <span className="font-semibold">FROM THE STORM TO THE FIRE</span>, combines personal narrative with insights into trauma treatment, offering hope and practical wisdom to readers navigating their own healing journeys.
            </p>
          </CardContent>
        </Card>

        {/* Why Read This Book */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">For Trauma Survivors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Find validation, hope, and practical insights for your own healing journey. Learn how one person transformed their life through treatment and resilience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">For Loved Ones</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Gain deeper understanding of what trauma survivors experience and how you can support them with compassion and informed perspective.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">For Professionals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover a firsthand account of the therapeutic journey, offering valuable insights into client experiences and the transformative power of evidence-based treatment.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 mb-12">
          <CardHeader>
            <CardTitle>What Readers Are Saying</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <p className="text-foreground italic mb-2">
                "A powerful and honest account of trauma and recovery that will resonate with anyone who has struggled with CPTSD. Daniel's journey is truly inspiring."
              </p>
              <p className="text-sm text-muted-foreground">— Mental Health Advocate</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="text-foreground italic mb-2">
                "This memoir is a beacon of hope for those who feel lost in their trauma. It demonstrates that healing is possible with the right support and determination."
              </p>
              <p className="text-sm text-muted-foreground">— Trauma Survivor</p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Banner */}
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="pt-8 pb-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Begin Your Healing Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of readers discovering hope and resilience through this powerful memoir.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="font-semibold"
            >
              Coming Soon - Pre-Order Updates
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground text-sm py-8 mt-12">
        <div className="container text-center">
          <p>© 2025 CPTSD: Straight Facts & FROM THE STORM TO THE FIRE. All rights reserved.</p>
          <p className="mt-2">If you are in crisis, please contact 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.</p>
        </div>
      </footer>
    </div>
  );
}
