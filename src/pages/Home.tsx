import Hero from '../components/Hero';
import RenewableStats from '../components/RenewableStats';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <RenewableStats />
      <Features />
      <AboutUs />
      <Services />
      <Portfolio />
      <Testimonials />
    </>
  );
}