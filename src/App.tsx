import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturesChess from './components/FeaturesChess';
import FeaturesGrid from './components/FeaturesGrid';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTAFooter from './components/CTAFooter';

export default function App() {
  return (
    <div className="bg-black overflow-visible">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturesChess />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
      <CTAFooter />
    </div>
  );
}
