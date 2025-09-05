import React from 'react';
import { services } from '../data/services';
import HeroSection from '../components/home/HeroSection';
import PremiumBanner from '../components/home/PremiumBanner';
import AcademicFields from '../components/home/AcademicFields';
import Stats from '../components/home/Stats';
import FeaturedServices from '../components/home/FeaturedServices';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  const featuredServices = services.filter(service => service.featured);
  const premiumService = services.find(s => s.id === 'member-premium');

  return (
    <div className="bg-white">
      <HeroSection />
      {premiumService && <PremiumBanner service={premiumService} />}
      <AcademicFields />
      <Stats />
      <FeaturedServices services={featuredServices.slice(0, 4)} />
      <HowItWorks />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default HomePage;
