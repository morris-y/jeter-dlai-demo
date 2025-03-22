import React, { useState } from 'react';
import { X, Play, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

type Step = 'goal' | 'career' | 'skills' | 'preview';

const CourseFinder = () => {
  const [step, setStep] = useState<Step>('goal');
  const [goal, setGoal] = useState<string>('');
  const [career, setCareer] = useState<string>('');
  const [codingLevel, setCodingLevel] = useState<string>('');
  const [mathLevel, setMathLevel] = useState<string>('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 'goal') setStep('career');
    else if (step === 'career') setStep('skills');
    else if (step === 'skills') setStep('preview');
    else if (step === 'preview') navigate('/learning-journey');
  };

  const handleBack = () => {
    if (step === 'career') setStep('goal');
    else if (step === 'skills') setStep('career');
    else if (step === 'preview') setStep('skills');
    else navigate('/');
  };

  const renderStepIndicator = () => {
    const steps = ['goal', 'career', 'skills', 'preview'];
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
          className="bg-white rounded-xl shadow-lg w-full max-w-7xl p-8 relative"
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
            <div className="flex gap-8">
              <div className="flex-1 space-y-6">
              <h2 className="text-xl font-medium">What do you want to achieve?</h2>
                <div className="grid grid-cols-2 gap-4">
                {['Switch careers', 'Learn a skill for my job', 'Build a project', 'Learn for fun', 'Not sure yet'].map((option) => (
                  <div 
                    key={option}
                    onClick={() => setGoal(option)}
                    className={`p-5 border rounded-lg cursor-pointer transition-all ${
                      goal === option ? 'border-dlai-primary bg-dlai-primary/5' : 'border-gray-200 hover:border-dlai-primary/50'
                    }`}
                  >
                        <h3 className="font-medium mb-1">{option}</h3>
                        <p className="text-sm text-gray-500">Select this if you want to {option.toLowerCase()}</p>
                      </div>
                  ))}
                </div>
              </div>
              <div className="w-[480px] bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video w-full relative bg-gray-200">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play size={32} className="text-dlai-primary ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-dlai-primary font-medium mb-2">✨ Illustration</div>
                  <h3 className="text-lg font-medium mb-2">Find your learning path with personalized recommendations.</h3>
                </div>
              </div>
            </div>
          )}
          
          {step === 'career' && (
            <div className="flex gap-8">
              <div className="flex-1 space-y-6">
              <h2 className="text-xl font-medium">What kind of career do you want to pivot to?</h2>
                <div className="grid grid-cols-2 gap-4">
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
                        <h3 className="font-medium mb-1">{option.title}</h3>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                  ))}
                </div>
              </div>
              <div className="w-[480px] bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video w-full relative bg-gray-200">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play size={32} className="text-dlai-primary ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-dlai-primary font-medium mb-2">✨ Illustration</div>
                  <h3 className="text-lg font-medium mb-2">Choose your dream career in AI and technology.</h3>
                </div>
              </div>
            </div>
          )}
          
          {step === 'skills' && (
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Left Column - Course Path */}
              <div className="w-full md:w-[640px] space-y-6">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">How much coding experience do you have?</h3>
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
                          <h4 className="font-medium mb-2">{option.level}</h4>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
          
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">How much math experience do you have?</h3>
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
                          <h4 className="font-medium mb-2">{option.level}</h4>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                      ))}
                    </div>
                        </div>
                      </div>
                      </div>
              
              <div className="w-[480px] bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video w-full relative bg-gray-200">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play size={32} className="text-dlai-primary ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-dlai-primary font-medium">✨</span>
                    <span className="text-sm text-dlai-primary font-medium">Personalized</span>
                  </div>
                  <h3 className="text-lg font-medium mt-2">Understand users' coding and math levels to tailor the most suitable courses.</h3>
                </div>
              </div>
            </div>
          )}
          
          {step === 'preview' && (
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column */}
              <div className="flex-1">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Preview of your learning journey</h2>
                  <p className="text-gray-600">Answering three questions help us recommend the best courses for you.</p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Pivot to Entry-Level ML Engineer</h3>
                      <p className="text-gray-600">(Expected: 4-7 Months)</p>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 rounded-lg">
                      <div className="text-sm text-gray-600">My expected weekly commitment</div>
                      <div className="text-lg font-medium">10 hours</div>
                    </div>
                  </div>

                  {/* Course Timeline */}
                  <div className="space-y-8">
                    <div className="relative">
                      <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-100"></div>
                      <div className="relative flex items-start">
                        <div className="min-w-8 h-8 bg-dlai-secondary rounded-full flex items-center justify-center mr-4 z-10">
                          <Play size={14} className="text-dlai-primary ml-0.5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">Core Foundations</h4>
                            <span className="text-sm text-gray-500">1-2 Months • 2 Courses</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">Before diving into ML, a strong grasp of Python, math, and data handling is essential. Many ML beginners struggle due to weak math or coding fundamentals.</p>
                          <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center">
                              <img src="/lovable-uploads/143eb32f-2879-43c8-8ffd-82df51fee6e7.png" alt="IBM" className="h-6 mr-3" />
                              <div>
                                <div className="text-sm font-medium">Python for Data Science, AI & Development</div>
                                <div className="text-xs text-gray-500">IBM x DeepLearning.AI</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <img src="/lovable-uploads/143eb32f-2879-43c8-8ffd-82df51fee6e7.png" alt="DeepLearning.AI" className="h-6 mr-3" />
                              <div>
                                <div className="text-sm font-medium">Mathematics for Machine Learning and Data Science</div>
                                <div className="text-xs text-gray-500">DeepLearning.AI</div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center text-sm text-gray-500">
                            <div className="flex items-center">
                              <Play size={14} className="mr-1" />
                              Get Two Professional Course Certificates
                      </div>
                            <div className="ml-4">(928,000+ Learners)</div>
                      </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="relative flex items-start">
                        <div className="min-w-8 h-8 bg-dlai-secondary rounded-full flex items-center justify-center mr-4 z-10">
                          <Play size={14} className="text-dlai-primary ml-0.5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">Core Machine Learning</h4>
                            <span className="text-sm text-gray-500">2-3 Months • 2 Courses</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">This stage teaches the fundamental ML algorithms used in real-world. Many junior engineers struggle with understanding how to apply models.</p>
                          <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center">
                              <img src="/lovable-uploads/143eb32f-2879-43c8-8ffd-82df51fee6e7.png" alt="DeepLearning.AI" className="h-6 mr-3" />
                              <div>
                                <div className="text-sm font-medium">Machine Learning Specialization</div>
                                <div className="text-xs text-gray-500">Andrew Ng - DeepLearning.AI</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <img src="/lovable-uploads/143eb32f-2879-43c8-8ffd-82df51fee6e7.png" alt="DeepLearning.AI" className="h-6 mr-3" />
                              <div>
                                <div className="text-sm font-medium">Structuring Machine Learning Projects</div>
                                <div className="text-xs text-gray-500">DeepLearning.AI</div>
                      </div>
                    </div>
                  </div>
                          <div className="mt-4 flex items-center text-sm text-gray-500">
                            <div className="flex items-center">
                              <Play size={14} className="mr-1" />
                              Get Two Professional Course Certificates
                      </div>
                            <div className="ml-4">(108,000+ Learners)</div>
                      </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="w-full md:w-[520px]">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-4">More about ML Engineer</h3>
                  <p className="text-gray-600 mb-6">Build and deploy machine learning models for real-world applications.</p>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Key Responsibility</h4>
                      <button className="text-gray-400 hover:text-gray-600">
                        <HelpCircle size={16} />
                      </button>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Develop & Deploy ML Models – Train, optimize, and integrate models into production systems.</li>
                      <li>• Data Preparation – Collect, clean, and preprocess data for training.</li>
                    </ul>
                    <button className="text-sm text-dlai-primary mt-2">Read more</button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
                    <div>
                      <div className="flex items-center mb-1">
                        <h4 className="text-sm text-gray-500">Median Salary</h4>
                        <button className="ml-1 text-gray-400 hover:text-gray-600">
                          <HelpCircle size={14} />
                        </button>
                      </div>
                      <p className="font-medium">$189,456</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <h4 className="text-sm text-gray-500">Available Jobs</h4>
                        <button className="ml-1 text-gray-400 hover:text-gray-600">
                          <HelpCircle size={14} />
                        </button>
                      </div>
                      <p className="font-medium">63,198</p>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 mb-1">Current Learners</h4>
                      <p className="font-medium">139,000+</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Future Specializations</h4>
                      <button className="text-gray-400 hover:text-gray-600">
                        <HelpCircle size={16} />
                      </button>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Deep Learning & Neural Networks: Specializing in CNNs, RNNs, and Transformers for applications in vision, speech, and NLP.</li>
                      <li>• Natural Language Processing & LLMs: Working with large language models like GPT.</li>
                    </ul>
                    <button className="text-sm text-dlai-primary mt-2">Read more</button>
                </div>
                
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-center mb-2">Alumni's Success Story</h5>
                      <div className="aspect-video bg-gray-50 rounded-lg relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <Play size={24} className="text-dlai-primary ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-center mb-2">Daily Life of a ML Engineer</h5>
                      <div className="aspect-video bg-gray-50 rounded-lg relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <Play size={24} className="text-dlai-primary ml-1" />
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
