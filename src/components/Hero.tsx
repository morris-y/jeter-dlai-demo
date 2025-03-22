
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const checkboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!checkboardRef.current) return;
      
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      // Subtle parallax effect
      checkboardRef.current.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Checkerboard Background */}
      <div 
        ref={checkboardRef}
        className="absolute inset-0 checkerboard-pattern opacity-70 -z-10"
        style={{ transform: 'scale(1.1)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image/Visual Area - Now on the left side */}
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-xl relative group"
            >
              <div className="checkerboard-pattern w-full h-96 md:h-[500px] rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-dlai-primary/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
            </motion.div>
          </div>
          
          {/* Text Content - Now on the right side */}
          <div className="md:w-1/2 md:pl-12 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                AI is the new electricity.
                <br />
                <span className="relative">
                  You are the spark.
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-dlai-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 max-w-xl"
            >
              Join over 7 million people learning how to use and build AI.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3 pt-4"
            >
              <p className="text-gray-600 text-lg">
                Let our AI tailor your new AI learning journey for you.
              </p>
              
              <Link to="/course-finder">
                <button className="px-10 py-4 rounded-md bg-dlai-primary text-white font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg text-lg mt-4">
                  Find what's right for you
                </button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8"
            >
              <p className="text-gray-600 mb-4">
                Get the latest AI news, courses, events, and insights from Andrew Ng and other AI leaders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dlai-primary focus:border-transparent transition-all duration-200"
                />
                <button className="px-6 py-3 bg-dlai-primary text-white rounded-md hover:bg-opacity-90 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
