import React from 'react';
import Hero from '../components/home/Hero';
import MarketTicker from '../components/home/MarketTicker';
import Calculators from '../components/home/Calculators';
import Testimonials from '../components/home/Testimonials';
import InvestmentEducation from '../components/home/InvestmentEducation';
import InvestmentTips from '../components/home/InvestmentTips';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <MarketTicker />
      <Calculators />
      <InvestmentEducation />
      <InvestmentTips />
      <Testimonials />
    </div>
  );
};

export default Home;