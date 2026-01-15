import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { ForPatients } from './components/ForPatients';
import { ForCompanions } from './components/ForCompanions';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <div className="py-12">
        <About />
      </div>
      <div className="py-12">
        <Services />
      </div>
      <div className="py-12">
        <HowItWorks />
      </div>
      <div className="py-12">
        <ForPatients />
      </div>
      <div className="py-12">
        <ForCompanions />
      </div>
      <div className="py-12">
        <FAQ />
      </div>
      <div className="py-12">
        <Contact />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
}