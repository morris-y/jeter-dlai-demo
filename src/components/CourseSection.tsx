import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: 'Machine Learning Specialization',
    image: 'checkerboard',
    description: 'Learn the fundamentals of machine learning and how to use these techniques to build real-world AI applications.',
    details: {
      instructor: 'Andrew Ng',
      duration: '3 months',
      level: 'Beginner to Intermediate',
      syllabus: [
        'Supervised Machine Learning',
        'Advanced Learning Algorithms',
        'Unsupervised Learning'
      ]
    }
  },
  {
    id: 2,
    title: 'Deep Learning Specialization',
    image: 'checkerboard',
    description: 'Become a deep learning expert. Master deep neural networks, CNNs, RNNs, and learn to build models in PyTorch and TensorFlow.',
    details: {
      instructor: 'Andrew Ng',
      duration: '5 months',
      level: 'Intermediate',
      syllabus: [
        'Neural Networks and Deep Learning',
        'Convolutional Neural Networks',
        'Sequence Models'
      ]
    }
  },
  {
    id: 3,
    title: 'AI For Everyone',
    image: 'checkerboard',
    description: 'Learn key concepts and terminology in AI without the technical background. Designed for everyone, including non-technical professionals.',
    details: {
      instructor: 'Andrew Ng',
      duration: '4 weeks',
      level: 'Beginner',
      syllabus: [
        'What is AI?',
        'Building AI Projects',
        'AI in Your Company'
      ]
    }
  },
  {
    id: 4,
    title: 'ChatGPT Prompt Engineering',
    image: 'checkerboard',
    description: 'Master prompt engineering to get the most out of AI models like ChatGPT for various applications and use cases.',
    details: {
      instructor: 'Andrew Ng & Isa Fulford',
      duration: '2 weeks',
      level: 'All Levels',
      syllabus: [
        'Prompt Engineering Fundamentals',
        'Iterative Prompt Development',
        'Advanced Techniques'
      ]
    }
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
    title: 'LLM-Powered Autonomous Agents',
    description: 'Learn to build and deploy autonomous agents that can perform complex tasks by leveraging large language models.',
    badge: 'NEW SHORT COURSE'
  }
];

const CourseCard = ({ title, image, description, details, index }: { 
  title: string; 
  image: string; 
  description: string; 
  details: {
    instructor: string;
    duration: string;
    level: string;
    syllabus: string[];
  };
  index: number 
}) => {
  const [showDetails, setShowDetails] = useState(false);

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
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        <div className="mt-3 flex items-center">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-dlai-secondary text-dlai-primary rounded-full">
            Popular
          </span>
          <span className="ml-2 text-sm text-gray-500">4.8 (10.2k reviews)</span>
        </div>
        
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="mt-3 text-sm text-dlai-primary hover:underline flex items-center"
        >
          {showDetails ? 'Hide details' : 'View details'}
          {showDetails ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
        </button>
        
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider">Instructor</h4>
                <p className="text-sm font-medium">{details.instructor}</p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider">Duration</h4>
                <p className="text-sm font-medium">{details.duration}</p>
              </div>
              <div>
                <h4 className="text-xs text-gray-500 uppercase tracking-wider">Level</h4>
                <p className="text-sm font-medium">{details.level}</p>
              </div>
            </div>
            
            <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Syllabus</h4>
            <ul className="text-sm space-y-1">
              {details.syllabus.map((item, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-dlai-primary mr-2"></div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="mt-4 pt-3 flex justify-between items-center">
              <span className="text-lg font-bold text-dlai-primary">Free</span>
              <Button className="bg-dlai-primary hover:bg-dlai-primary/90">Enroll Now</Button>
            </div>
          </div>
        )}
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
                description={course.description}
                details={course.details}
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
      
      {/* Short Courses Section */}
      <section className="py-20 bg-white">
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
