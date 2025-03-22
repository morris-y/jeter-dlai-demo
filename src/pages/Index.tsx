import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CourseSection from '@/components/CourseSection';
import Footer from '@/components/Footer';
import CollaborationPartners from '@/components/CollaborationPartners';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CourseSection />
        <CollaborationPartners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
