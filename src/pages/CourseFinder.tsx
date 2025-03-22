
import React, { useState } from 'react';
import { X, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

type Step = 'goal' | 'career' | 'coding' | 'math' | 'preview';

const CourseFinder = () => {
  const [step, setStep] = useState<Step>('goal');
  const [goal, setGoal] = useState<string>('');
  const [career, setCareer] = useState<string>('');
  const [codingLevel, setCodingLevel] = useState<string>('');
  const [mathLevel, setMathLevel] = useState<string>('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 'goal') setStep('career');
    else if (step === 'career') setStep('coding');
    else if (step === 'coding') setStep('math');
    else if (step === 'math') setStep('preview');
    else if (step === 'preview') navigate('/learning-journey');
  };

  const handleBack = () => {
    if (step === 'career') setStep('goal');
    else if (step === 'coding') setStep('career');
    else if (step === 'math') setStep('coding');
    else if (step === 'preview') setStep('math');
    else navigate('/');
  };

  const renderStepIndicator = () => {
    const steps = ['goal', 'career', 'coding', 'math'];
    const currentIndex = steps.indexOf(step);
    
    return (
      <div className="flex justify-center space-x-2 mb-8">
        {steps.map((s, i) => (
          <div 
            key={s} 
            className={`h-1 w-20 rounded-full ${i <= currentIndex ? 'bg-dlai-primary' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg w-full max-w-5xl p-6 relative"
        >
          <button 
            onClick={() => navigate('/')}
            className="absolute top-4 left-4 text-gray-500 hover:text-gray-800"
          >
            <X size={24} />
          </button>
          
          {renderStepIndicator()}
          
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Find what course right for you
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Answering three questions help us recommend the best courses for you.
          </p>
          
          {step === 'goal' && (
            <div className="space-y-6">
              <h2 className="text-xl font-medium">What do you want to achieve?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Switch careers', 'Learn a skill for my job', 'Build a project', 'Learn for fun', 'Not sure yet'].map((option) => (
                  <div 
                    key={option}
                    onClick={() => setGoal(option)}
                    className={`p-5 border rounded-lg cursor-pointer transition-all ${
                      goal === option ? 'border-dlai-primary bg-dlai-primary/5' : 'border-gray-200 hover:border-dlai-primary/50'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg mr-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-dlai-secondary rounded-full flex items-center justify-center">
                          <Play size={14} className="text-dlai-primary ml-0.5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{option}</h3>
                        <p className="text-sm text-gray-500">Select this if you want to {option.toLowerCase()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {step === 'career' && (
            <div className="space-y-6">
              <h2 className="text-xl font-medium">What kind of career do you want to pivot to?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Machine Learning Engineer',
                    description: 'Build and deploy ML models for real-world applications'
                  },
                  {
                    title: 'Deep Learning Engineer',
                    description: 'Focus on neural networks and advanced AI systems'
                  },
                  {
                    title: 'Data Scientist',
                    description: 'Analyze data to extract insights and build models'
                  },
                  {
                    title: 'AI Product Manager',
                    description: 'Lead AI product development and strategy'
                  },
                  {
                    title: 'AI Research Scientist',
                    description: 'Advance the field of AI through research'
                  },
                  {
                    title: 'AI Consultant',
                    description: 'Help organizations implement AI solutions'
                  }
                ].map((option) => (
                  <div 
                    key={option.title}
                    onClick={() => setCareer(option.title)}
                    className={`p-5 border rounded-lg cursor-pointer transition-all ${
                      career === option.title ? 'border-dlai-primary bg-dlai-primary/5' : 'border-gray-200 hover:border-dlai-primary/50'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg mr-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-dlai-secondary rounded-full flex items-center justify-center">
                          <Play size={14} className="text-dlai-primary ml-0.5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{option.title}</h3>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {step === 'coding' && (
            <div className="space-y-6">
              <h2 className="text-xl font-medium">How much coding experience do you have?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    level: 'Beginner',
                    description: 'Little to no coding experience, learning the basics'
                  },
                  {
                    level: 'Intermediate',
                    description: 'Comfortable writing code and know the fundamental concepts'
                  },
                  {
                    level: 'Advanced',
                    description: 'Skilled in advanced concepts, productive in multiple languages'
                  },
                  {
                    level: 'Not sure yet',
                    description: 'No worries, we will give you a short quiz to evaluate your current level'
                  }
                ].map((option) => (
                  <div 
                    key={option.level}
                    onClick={() => setCodingLevel(option.level)}
                    className={`p-5 border rounded-lg cursor-pointer transition-all ${
                      codingLevel === option.level ? 'border-dlai-primary bg-dlai-primary/5' : 'border-gray-200 hover:border-dlai-primary/50'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg mr-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-dlai-secondary rounded-full flex items-center justify-center">
                          <Play size={14} className="text-dlai-primary ml-0.5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{option.level}</h3>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {step === 'math' && (
            <div className="space-y-6">
              <h2 className="text-xl font-medium">How much math experience do you have?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    level: 'Beginner',
                    description: 'Little to no experience with math beyond basic arithmetic'
                  },
                  {
                    level: 'Intermediate',
                    description: 'Comfortable with concepts in problem solving and understand mathematical algebra and statistics'
                  },
                  {
                    level: 'Advanced',
                    description: 'Strong mathematical skills, including advanced calculus, linear algebra, and statistics'
                  },
                  {
                    level: 'Not sure yet',
                    description: 'No worries, we will give you a short quiz to evaluate your current math level'
                  }
                ].map((option) => (
                  <div 
                    key={option.level}
                    onClick={() => setMathLevel(option.level)}
                    className={`p-5 border rounded-lg cursor-pointer transition-all ${
                      mathLevel === option.level ? 'border-dlai-primary bg-dlai-primary/5' : 'border-gray-200 hover:border-dlai-primary/50'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg mr-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-dlai-secondary rounded-full flex items-center justify-center">
                          <Play size={14} className="text-dlai-primary ml-0.5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{option.level}</h3>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {step === 'preview' && (
            <div className="space-y-6">
              <h2 className="text-xl font-medium mb-4">Preview of your learning journey</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Pivot to Entry-Level ML Engineer</h3>
                <p className="text-gray-600 mb-4">(Expected: 4–7 Months)</p>
                
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-green-500 text-white rounded-full p-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium">Core Foundations (1-2 Months • 2 Courses)</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Before diving into ML, a strong grasp of Python, math, and data handling 
                          is essential. Many ML beginners struggle due to weak math or coding fundamentals.
                        </p>
                        <ul className="mt-3 text-sm space-y-1">
                          <li>• Python for Data Science, AI & Development (IBM x DeepLearning.AI)</li>
                          <li>• Mathematics for Machine Learning and Data Science (DeepLearning.AI)</li>
                        </ul>
                      </div>
                      <div className="w-32 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-10 h-10 bg-dlai-secondary rounded-full flex items-center justify-center">
                          <Play size={16} className="text-dlai-primary ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-green-500 text-white rounded-full p-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium">Core Machine Learning (2-3 Months • 2 Courses)</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          This stage teaches the fundamental ML algorithms used in real-world.
                          Many junior engineers struggle with understanding how to apply models.
                        </p>
                        <ul className="mt-3 text-sm space-y-1">
                          <li>• Machine Learning Specialization (Andrew Ng - DeepLearning.AI)</li>
                          <li>• Structuring Machine Learning Projects (DeepLearning.AI)</li>
                        </ul>
                      </div>
                      <div className="w-32 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-10 h-10 bg-dlai-secondary rounded-full flex items-center justify-center">
                          <Play size={16} className="text-dlai-primary ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium">More about ML Engineer</h3>
                <p className="text-gray-600 mb-4">Build and deploy machine learning models for real-world applications.</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Key Responsibility</h4>
                    <ul className="mt-1 text-sm space-y-1">
                      <li>• Develop & Deploy ML Models – Train, optimize, and integrate models into production systems.</li>
                      <li>• Data Preparation – Collect, clean, and preprocess data for training.</li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                      <h4 className="font-medium text-sm">Median Annual Salary</h4>
                      <p className="text-lg font-bold">$189,456</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Available Jobs</h4>
                      <p className="text-lg font-bold">63,198</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Current Learners</h4>
                      <p className="text-lg font-bold">139,000+</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Alumni's Success Story</h4>
                    <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                      <div className="relative">
                        <div className="checkerboard-pattern w-full h-32"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center shadow-md">
                            <Play className="w-5 h-5 text-dlai-primary ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Daily Life of a ML Engineer</h4>
                    <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                      <div className="relative">
                        <div className="checkerboard-pattern w-full h-32"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center shadow-md">
                            <Play className="w-5 h-5 text-dlai-primary ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={handleBack}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button 
              onClick={handleNext}
              className="px-6 py-2 bg-dlai-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              {step === 'preview' ? 'Create Journey' : 'Next'}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center">
            <div className="flex-shrink-0 mr-4">
              <img 
                src="/lovable-uploads/6b5c5c66-a11b-484a-bd3e-d4c062eb1d06.png" 
                alt="Avatar Andrew" 
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div>
              <p className="text-sm font-medium">Still unsure if the courses fit?</p>
              <p className="text-sm text-gray-600">Chat with Avatar Andrew to tailor your learning plan.</p>
            </div>
            <button className="ml-auto px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">
              Start to Chat
            </button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseFinder;
