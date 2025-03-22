import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star, Play, ChevronRight } from 'lucide-react';

const NewCourses = () => {
  const featuredCourses = [
    {
      id: 1,
      title: 'Machine Learning Specialization',
      image: 'checkerboard',
      badge: 'New',
      rating: 4.8,
      reviews: 1234,
      provider: 'DeepLearning.AI'
    },
    {
      id: 2,
      title: 'Deep Learning Specialization',
      image: 'checkerboard',
      badge: 'Popular',
      rating: 4.9,
      reviews: 2345,
      provider: 'DeepLearning.AI'
    },
    {
      id: 3,
      title: 'AI For Everyone',
      image: 'checkerboard',
      badge: 'Popular',
      rating: 4.7,
      reviews: 3456,
      provider: 'DeepLearning.AI'
    },
    {
      id: 4,
      title: 'ChatGPT Prompt Engineering',
      image: 'checkerboard',
      badge: 'New',
      rating: 4.6,
      reviews: 4567,
      provider: 'DeepLearning.AI'
    }
  ];

  const shortCourses = [
    {
      id: 1,
      title: 'Event-Driven Agentic Document Workflows',
      image: 'checkerboard',
      description: 'Build an event-driven agentic workflow to process documents and AI forms using RAG and human-in-the-loop feedback.',
      badge: 'New Short Course'
    },
    {
      id: 2,
      title: 'Event-Driven Agentic Document Workflows',
      image: 'checkerboard',
      description: 'Build an event-driven agentic workflow to process documents and AI forms using RAG and human-in-the-loop feedback.',
      badge: 'New Short Course'
    }
  ];

  const batchArticles = [
    {
      id: 1,
      title: 'GPT-4.5 Goes Big, Claude 3.7 Souvenir, Altman: Give Agents Autonomy, More!',
      date: 'Apr 20, 2023',
      image: 'checkerboard'
    },
    {
      id: 2,
      title: 'Meta Beats Midjourney, Stable Diffusion 3, Claude 3.5 Reasoning v Vectors',
      date: 'Apr 15, 2023',
      image: 'checkerboard'
    },
    {
      id: 3,
      title: 'Scale 3 Scales Up, Mobile Apps Generated To Code, Apple Considering DLAI',
      date: 'Apr 10, 2023',
      image: 'checkerboard'
    },
    {
      id: 4,
      title: 'Scale 3 Scales Up, Mobile Apps Generated To Code, Apple Considering DLAI',
      date: 'Apr 5, 2023',
      image: 'checkerboard'
    }
  ];

  const freeResources = [
    {
      id: 1,
      title: 'How to Build Your Career in AI',
      description: 'A practical guide to landing your first AI role, whether you are a student or career changer.',
      image: 'checkerboard'
    },
    {
      id: 2,
      title: 'Machine Learning Yearning',
      description: 'A practical guide to machine learning techniques, focusing on strategy and how to build systems.',
      image: 'checkerboard'
    },
    {
      id: 3,
      title: 'A Complete Guide to Natural Language Processing',
      description: 'Understand how machines interpret human language - a must read guide to know about NLP.',
      image: 'checkerboard'
    },
    {
      id: 4,
      title: 'A Complete Guide to Natural Language Processing',
      description: 'Understand how machines interpret human language - a must read guide to know about NLP.',
      image: 'checkerboard'
    }
  ];

  const CourseCard = ({ title, image, badge, rating, reviews, provider, index }: any) => {
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
            {badge && (
              <div className="absolute top-2 left-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-dlai-primary text-white rounded-full">
                  {badge}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-medium text-lg text-gray-900">{title}</h3>
          <div className="mt-3 flex items-center">
            {provider && (
              <span className="text-sm text-gray-600 mr-2">{provider}</span>
            )}
            <div className="flex items-center">
              <span className="text-sm font-medium mr-1">{rating}</span>
              <div className="flex">
                {[1,2,3,4,5].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="ml-2 text-sm text-gray-500">({reviews} reviews)</span>
          </div>
          <button className="mt-3 text-sm text-dlai-primary hover:underline flex items-center">
            View details
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        {/* Career Journey Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold mb-3">Embark on Your AI Career Journey</h2>
              <p className="text-gray-600 max-w-3xl">
                We offer structured learning plans with renowned courses for various AI career paths.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCourses.map((course, index) => (
                <CourseCard 
                  key={course.id}
                  title={course.title}
                  image={course.image}
                  badge={course.badge}
                  rating={course.rating}
                  reviews={course.reviews}
                  provider={course.provider}
                  index={index}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors font-medium">
                Explore all AI career paths
              </button>
            </div>
          </div>
        </section>
        
        {/* New & Featured Courses */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCourses.map((course, index) => (
                <CourseCard 
                  key={course.id}
                  title={course.title}
                  image={course.image}
                  badge={course.badge}
                  rating={course.rating}
                  reviews={course.reviews}
                  provider={course.provider}
                  index={index}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors font-medium">
                Explore All Courses
              </button>
            </div>
          </div>
        </section>
        
        {/* Collaboration Partners */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-center mb-12"
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
        
        {/* Short Courses */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
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
                      <button className="text-dlai-primary hover:underline flex items-center text-sm font-medium">
                        Learn More
                        <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* The Batch Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-serif font-bold mb-2">THE BATCH</h2>
              <p className="text-xl text-gray-600">What matters in AI right now</p>
              <p className="text-sm text-gray-500">The biggest weekly AI newsletter</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {batchArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="bg-white"
                >
                  <div className="aspect-video bg-gray-100 mb-3 rounded-lg overflow-hidden">
                    <div className="checkerboard-pattern w-full h-full"></div>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h3 className="text-lg font-medium mb-2">{article.title}</h3>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors font-medium">
                Read More
              </button>
            </div>
          </div>
        </section>
        
        {/* Free Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-3">Free Resources</h2>
              <p className="text-gray-600">
                Get started with AI for free with these essential resources
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {freeResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200"
                >
                  <div className="aspect-video bg-gray-100">
                    <div className="checkerboard-pattern w-full h-full"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-medium text-lg mb-2">{resource.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                    <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm hover:bg-gray-200 transition-colors">
                      Download
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-4">
                Stay up to date on the latest news, courses, and AI events
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dlai-primary focus:border-transparent transition-all duration-200"
                />
                <button className="px-6 py-3 bg-dlai-primary text-white rounded-md hover:bg-opacity-90 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewCourses;
