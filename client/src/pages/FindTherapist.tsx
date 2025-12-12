import { useState, useMemo } from 'react';
import { Search, MapPin, Award, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { APP_TITLE } from "@/const";
import { ThemeToggle } from "@/components/ThemeToggle";

interface Therapist {
  id: string;
  name: string;
  credentials: string;
  specialty: string[];
  location: string;
  state: string;
  insurance: string[];
  telehealth: boolean;
  experience: string;
  certifications: string[];
  phone?: string;
  website?: string;
  email?: string;
}

const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell, PhD',
    credentials: 'Licensed Clinical Psychologist',
    specialty: ['CPTSD', 'EMDR', 'Trauma-Focused CBT'],
    location: 'New York, NY',
    state: 'NY',
    insurance: ['Aetna', 'Blue Cross', 'United Healthcare', 'Cigna'],
    telehealth: true,
    experience: '15+ years',
    certifications: ['EMDR Certified', 'Trauma-Informed Care Specialist'],
    phone: '(212) 555-0101',
    website: 'www.drsarahmitchell.com',
    email: 'sarah@drsarahmitchell.com',
  },
  {
    id: '2',
    name: 'James Chen, LCSW',
    credentials: 'Licensed Clinical Social Worker',
    specialty: ['CPTSD', 'Somatic Experiencing', 'Attachment Issues'],
    location: 'Los Angeles, CA',
    state: 'CA',
    insurance: ['Aetna', 'Cigna', 'Kaiser', 'United Healthcare'],
    telehealth: true,
    experience: '12+ years',
    certifications: ['Somatic Experiencing Practitioner', 'Trauma-Informed Care'],
    phone: '(213) 555-0102',
    website: 'www.jameschen-therapy.com',
    email: 'james@jameschen-therapy.com',
  },
  {
    id: '3',
    name: 'Dr. Maria Rodriguez, PsyD',
    credentials: 'Licensed Psychologist',
    specialty: ['CPTSD', 'CPT', 'Dissociation'],
    location: 'Houston, TX',
    state: 'TX',
    insurance: ['Blue Cross', 'Humana', 'United Healthcare', 'Aetna'],
    telehealth: false,
    experience: '18+ years',
    certifications: ['CPT Certified', 'Dissociation Specialist'],
    phone: '(713) 555-0103',
    website: 'www.mariarrodriguez-psyd.com',
    email: 'maria@mariarrodriguez-psyd.com',
  },
  {
    id: '4',
    name: 'Dr. Michael Thompson, PhD',
    credentials: 'Licensed Clinical Psychologist',
    specialty: ['CPTSD', 'EMDR', 'Anxiety Disorders'],
    location: 'Chicago, IL',
    state: 'IL',
    insurance: ['Aetna', 'Blue Cross', 'Cigna', 'United Healthcare'],
    telehealth: true,
    experience: '20+ years',
    certifications: ['EMDR Certified', 'Trauma-Informed Care Specialist'],
    phone: '(312) 555-0104',
    website: 'www.drthompsontherapy.com',
    email: 'michael@drthompsontherapy.com',
  },
  {
    id: '5',
    name: 'Dr. Jennifer Lee, LMFT',
    credentials: 'Licensed Marriage and Family Therapist',
    specialty: ['CPTSD', 'Family Therapy', 'Relational Trauma'],
    location: 'Seattle, WA',
    state: 'WA',
    insurance: ['Aetna', 'Kaiser', 'United Healthcare', 'Cigna'],
    telehealth: true,
    experience: '14+ years',
    certifications: ['Trauma-Informed Care Specialist', 'Family Systems Specialist'],
    phone: '(206) 555-0105',
    website: 'www.jenniferleetherapy.com',
    email: 'jennifer@jenniferleetherapy.com',
  },
  {
    id: '6',
    name: 'Dr. David Patel, PhD',
    credentials: 'Licensed Clinical Psychologist',
    specialty: ['CPTSD', 'Prolonged Exposure', 'Depression'],
    location: 'Boston, MA',
    state: 'MA',
    insurance: ['Blue Cross', 'Aetna', 'United Healthcare', 'Harvard Pilgrim'],
    telehealth: true,
    experience: '16+ years',
    certifications: ['PE Certified', 'Trauma-Informed Care Specialist'],
    phone: '(617) 555-0106',
    website: 'www.davidpateltherapy.com',
    email: 'david@davidpateltherapy.com',
  },
  {
    id: '7',
    name: 'Dr. Amanda Foster, LCSW',
    credentials: 'Licensed Clinical Social Worker',
    specialty: ['CPTSD', 'STAIR Therapy', 'Dissociation'],
    location: 'Denver, CO',
    state: 'CO',
    insurance: ['Aetna', 'Cigna', 'United Healthcare', 'Rocky Mountain Health'],
    telehealth: true,
    experience: '13+ years',
    certifications: ['STAIR Certified', 'Dissociation Specialist'],
    phone: '(303) 555-0107',
    website: 'www.amandafostertherapy.com',
    email: 'amanda@amandafostertherapy.com',
  },
  {
    id: '8',
    name: 'Dr. Robert Williams, PhD',
    credentials: 'Licensed Clinical Psychologist',
    specialty: ['CPTSD', 'Trauma-Focused CBT', 'Anxiety'],
    location: 'Miami, FL',
    state: 'FL',
    insurance: ['Aetna', 'Blue Cross', 'United Healthcare', 'Cigna'],
    telehealth: false,
    experience: '17+ years',
    certifications: ['TF-CBT Certified', 'Trauma-Informed Care Specialist'],
    phone: '(305) 555-0108',
    website: 'www.robertwilliamstherapy.com',
    email: 'robert@robertwilliamstherapy.com',
  },
];

const STATES = ['All States', 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

const SPECIALTIES = [
  'CPTSD',
  'EMDR',
  'Trauma-Focused CBT',
  'CPT',
  'Prolonged Exposure',
  'STAIR Therapy',
  'Somatic Experiencing',
  'Dissociation',
  'Attachment Issues',
  'Family Therapy',
];

const INSURANCE_PROVIDERS = [
  'Aetna',
  'Blue Cross',
  'Cigna',
  'United Healthcare',
  'Kaiser',
  'Humana',
  'Harvard Pilgrim',
  'Rocky Mountain Health',
];

export default function FindTherapist() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedInsurance, setSelectedInsurance] = useState<string[]>([]);
  const [telehealth, setTelehealth] = useState<boolean | null>(null);

  const filteredTherapists = useMemo(() => {
    return therapists.filter(therapist => {
      const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        therapist.specialty.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesState = selectedState === 'All States' || therapist.state === selectedState;
      
      const matchesSpecialty = selectedSpecialties.length === 0 ||
        selectedSpecialties.some(spec => therapist.specialty.includes(spec));
      
      const matchesInsurance = selectedInsurance.length === 0 ||
        selectedInsurance.some(ins => therapist.insurance.includes(ins));
      
      const matchesTelehealth = telehealth === null || therapist.telehealth === telehealth;

      return matchesSearch && matchesState && matchesSpecialty && matchesInsurance && matchesTelehealth;
    });
  }, [searchTerm, selectedState, selectedSpecialties, selectedInsurance, telehealth]);

  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev =>
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  const toggleInsurance = (insurance: string) => {
    setSelectedInsurance(prev =>
      prev.includes(insurance)
        ? prev.filter(i => i !== insurance)
        : [...prev, insurance]
    );
  };

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
            <a href="/find-therapist" className="text-foreground hover:text-primary transition-colors font-semibold">Find Therapist</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Find a Trauma-Informed Therapist</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Use the filters below to find qualified mental health professionals specializing in CPTSD and trauma treatment. This directory is for informational purposes—always verify credentials and insurance acceptance directly with providers.
          </p>

          {/* Search and Filters */}
          <div className="space-y-6 mb-8">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by therapist name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* State Filter */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                >
                  {STATES.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* Telehealth Filter */}
              <div>
                <label className="block text-sm font-semibold mb-2">Telehealth</label>
                <div className="flex gap-2">
                  <Button
                    variant={telehealth === null ? "outline" : "ghost"}
                    onClick={() => setTelehealth(null)}
                    className="flex-1"
                  >
                    All
                  </Button>
                  <Button
                    variant={telehealth === true ? "default" : "outline"}
                    onClick={() => setTelehealth(true)}
                    className="flex-1"
                  >
                    Yes
                  </Button>
                  <Button
                    variant={telehealth === false ? "default" : "outline"}
                    onClick={() => setTelehealth(false)}
                    className="flex-1"
                  >
                    No
                  </Button>
                </div>
              </div>
            </div>

            {/* Specialty Filter */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                <Award className="inline w-4 h-4 mr-2" />
                Specialties
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {SPECIALTIES.map(specialty => (
                  <Button
                    key={specialty}
                    variant={selectedSpecialties.includes(specialty) ? "default" : "outline"}
                    onClick={() => toggleSpecialty(specialty)}
                    className="text-xs"
                  >
                    {specialty}
                  </Button>
                ))}
              </div>
            </div>

            {/* Insurance Filter */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                <Shield className="inline w-4 h-4 mr-2" />
                Insurance
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {INSURANCE_PROVIDERS.map(insurance => (
                  <Button
                    key={insurance}
                    variant={selectedInsurance.includes(insurance) ? "default" : "outline"}
                    onClick={() => toggleInsurance(insurance)}
                    className="text-xs"
                  >
                    {insurance}
                  </Button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedSpecialties.length > 0 || selectedInsurance.length > 0 || selectedState !== 'All States' || telehealth !== null || searchTerm) && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedState('All States');
                  setSelectedSpecialties([]);
                  setSelectedInsurance([]);
                  setTelehealth(null);
                }}
              >
                Clear All Filters
              </Button>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredTherapists.length} of {therapists.length} therapists
            </p>
          </div>

          {/* Therapist Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTherapists.length > 0 ? (
              filteredTherapists.map(therapist => (
                <Card key={therapist.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{therapist.name}</CardTitle>
                    <CardDescription>{therapist.credentials}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Experience */}
                    <div>
                      <p className="text-sm font-semibold text-foreground">Experience</p>
                      <p className="text-sm text-muted-foreground">{therapist.experience}</p>
                    </div>

                    {/* Location */}
                    <div>
                      <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Location
                      </p>
                      <p className="text-sm text-muted-foreground">{therapist.location}</p>
                    </div>

                    {/* Telehealth */}
                    <div>
                      <p className="text-sm font-semibold text-foreground">Telehealth</p>
                      <p className="text-sm text-muted-foreground">{therapist.telehealth ? 'Available' : 'In-person only'}</p>
                    </div>

                    {/* Specialties */}
                    <div>
                      <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Specialties
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {therapist.specialty.map(spec => (
                          <span key={spec} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Certifications
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {therapist.certifications.map(cert => (
                          <span key={cert} className="text-xs bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 px-2 py-1 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Insurance */}
                    <div>
                      <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Insurance
                      </p>
                      <p className="text-sm text-muted-foreground">{therapist.insurance.join(', ')}</p>
                    </div>

                    {/* Contact */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-semibold text-foreground mb-3">Contact</p>
                      <div className="space-y-2">
                        {therapist.phone && (
                          <a href={`tel:${therapist.phone}`} className="text-sm text-primary hover:underline block">
                            📞 {therapist.phone}
                          </a>
                        )}
                        {therapist.email && (
                          <a href={`mailto:${therapist.email}`} className="text-sm text-primary hover:underline block">
                            ✉️ {therapist.email}
                          </a>
                        )}
                        {therapist.website && (
                          <a href={therapist.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline block">
                            🌐 Visit Website
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-muted-foreground">No therapists found matching your criteria. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>

        {/* Important Disclaimer */}
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 mt-12">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">Important Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-blue-800 dark:text-blue-200 space-y-3">
            <p>
              This directory is provided for informational purposes only and does not constitute a professional recommendation or endorsement. Always verify the following before scheduling an appointment:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Current licensure and credentials with your state's licensing board</li>
              <li>Insurance acceptance and coverage details with your insurance provider</li>
              <li>Availability and scheduling information</li>
              <li>Specialization in trauma-informed care and CPTSD treatment</li>
              <li>Your comfort and rapport with the therapist (consider scheduling a consultation)</li>
            </ul>
            <p>
              If you are in crisis, please contact the 988 Suicide & Crisis Lifeline (call or text 988) or go to your nearest emergency room.
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground text-sm py-8 mt-12">
        <div className="container text-center">
          <p>© 2025 CPTSD: Straight Facts. All information is for educational purposes only.</p>
          <p className="mt-2">If you are in crisis, please contact 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.</p>
        </div>
      </footer>
    </div>
  );
}
