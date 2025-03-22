
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      </div>
    </section>
  );
};

export default CourseSection;
