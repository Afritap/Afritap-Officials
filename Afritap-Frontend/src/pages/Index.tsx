
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
// import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import AIBusiness from '@/components/AIBusiness';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <Stats />
        <AIBusiness />
        {/* <Testimonials /> */}
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
