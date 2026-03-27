import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturesChess from './components/FeaturesChess';
import FeaturesGrid from './components/FeaturesGrid';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTAFooter from './components/CTAFooter';
import ImageBreak from './components/ImageBreak';
import MouseGlow from './components/MouseGlow';

export default function App() {
  return (
    <div className="bg-white overflow-visible">
      <MouseGlow />
      <Navbar />
      <Hero />
      <div className="gradient-divider" />
      <HowItWorks />
      <div className="gradient-divider" />
      <FeaturesChess />
      <ImageBreak 
        src="/images/retail-store.jpg" 
        alt="Retail business" 
      />
      <div className="gradient-divider" />
      <FeaturesGrid />
      <div className="gradient-divider" />
      <Stats />
      <ImageBreak 
        src="/images/coffee-shop.jpg" 
        alt="Local business" 
      />
      <div className="gradient-divider" />
      <Testimonials />
      <div className="gradient-divider" />
      <ImageBreak 
        src="/images/business-team.jpg" 
        alt="Partnership" 
      />
      <CTAFooter />
    </div>
  );
}
