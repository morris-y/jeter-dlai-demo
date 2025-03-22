
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: 'Machine Learning Specialization',
    image: 'checkerboard',
  },
  {
    id: 2,
    title: 'Deep Learning Specialization',
    image: 'checkerboard',
  },
  {
    id: 3,
    title: 'AI For Everyone',
    image: 'checkerboard',
  },
  {
    id: 4,
    title: 'ChatGPT Prompt Engineering',
    image: 'checkerboard',
  },
];

const shortCourses = [
  {
    id: 1,
    title: 'Event-Driven Agentic Document Workflows',
    description: 'Build an event-driven agentic workflow to process documents and AI forms using RAG and human-in-the-loop feedback.',
    badge: 'NEW SHORT COURSE'
  },
  {
    id: 2,
    title: 'Event-Driven Agentic Document Workflows',
    description: 'Build an event-driven agentic workflow to process documents and AI forms using RAG and human-in-the-loop feedback.',
    badge: 'NEW SHORT COURSE'
  }
];

const CourseCard = ({ title, image, index }: { title: string; image: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="hover-lift rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100"
    >
      <div className="image-container aspect-video">
        <div className="checkerboard-pattern w-full h-full relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer">
              <Play className="w-5 h-5 text-dlai-primary ml-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-medium text-lg text-gray-900">{title}</h3>
        <div className="mt-3 flex items-center">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-dlai-secondary text-dlai-primary rounded-full">
            Popular
          </span>
          <span className="ml-2 text-sm text-gray-500">4.8 (10.2k reviews)</span>
        </div>
        <Link to="/course-details" className="mt-3 inline-block">
          <button className="text-sm text-dlai-primary hover:underline flex items-center">
            View details
            <ChevronRight size={16} className="ml-1" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

const CourseSection = () => {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Embark on Your AI Career Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer structured learning plans with renowned courses for various AI career paths.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                title={course.title}
                image={course.image}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/courses">
              <Button variant="outline" className="px-6 py-3 font-medium">
                Explore All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Collaboration Partners Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-2">Collaboration Partners</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <img src="/lovable-uploads/143eb32f-2879-43c8-8ffd-82df51fee6e7.png" alt="Google Cloud" className="h-8" />
            <img src="/lovable-uploads/fa564236-7f33-489b-9f12-30bbea618d06.png" alt="Microsoft" className="h-8" />
            <img src="/lovable-uploads/8a0a3783-9b7d-4d7c-9943-01053ed91a9d.png" alt="Stanford" className="h-8" />
            <img src="/lovable-uploads/2ad5c8c7-3f4e-4a6e-aaac-dfc2f5406083.png" alt="Cohere" className="h-8" />
            <img src="/lovable-uploads/1d239570-a6c9-4809-b4af-146ec5f736fc.png" alt="Lamini" className="h-8" />
            <img src="/lovable-uploads/7b2d94ea-b23a-401d-aaf1-7122bfb6d8f9.png" alt="AWS" className="h-8" />
          </div>
        </div>
      </section>
      
      {/* Short Courses Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-3">New & Featured Courses</h2>
            <p className="text-gray-600 max-w-3xl">
              Get started today with these newly released courses from world-class AI experts.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shortCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="bg-white rounded-xl overflow-hidden border border-gray-200"
              >
                <div className="p-6">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{course.badge}</div>
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <Link to="/course-details">
                      <button className="text-dlai-primary hover:underline flex items-center text-sm font-medium">
                        Learn More
                        <ChevronRight size={16} className="ml-1" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseSection;
