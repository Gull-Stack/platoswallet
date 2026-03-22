import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturesChess from './components/FeaturesChess';
import FeaturesGrid from './components/FeaturesGrid';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTAFooter from './components/CTAFooter';
import ImageBreak from './components/ImageBreak';

export default function App() {
  return (
    <div className="bg-black overflow-visible">
      <Navbar />
      <Hero />
      <ImageBreak 
        src="/images/retail-store.jpg" 
        alt="Retail store interior" 
      />
      <HowItWorks />
      <ImageBreak 
        src="/images/coffee-shop.jpg" 
        alt="Modern coffee shop" 
      />
      <FeaturesChess />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
      <ImageBreak 
        src="/images/analytics.jpg" 
        alt="Business analytics and growth" 
      />
      <CTAFooter />
    </div>
  );
}
