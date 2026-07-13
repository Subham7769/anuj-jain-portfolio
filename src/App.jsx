import { Navbar } from './components/ui/Navbar';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { Results } from './components/sections/Results';
import { About } from './components/sections/About';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { Skills } from './components/sections/Skills';
import { Testimonials } from './components/sections/Testimonials';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

// Section order follows spec §4: proof (trust bar, results) leads,
// narrative (about) builds credibility, testimonials land directly
// before the closing CTA.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Results />
        <About />
        <ExperienceTimeline />
        <Skills />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
