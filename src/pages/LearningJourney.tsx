
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, ChevronUp, Play, Star, MoreVertical } from 'lucide-react';

const LearningJourney = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [completionRate, setCompletionRate] = useState(25.5);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex border-b mb-8">
            <button 
              onClick={() => setActiveTab('learning')}
              className={`px-6 py-3 font-medium text-lg ${activeTab === 'learning' ? 'border-b-2 border-dlai-primary text-gray-900' : 'text-gray-500'}`}
            >
              My Learning
            </button>
            <button 
              onClick={() => setActiveTab('explore')}
              className={`px-6 py-3 font-medium text-lg ${activeTab === 'explore' ? 'border-b-2 border-dlai-primary text-gray-900' : 'text-gray-500'}`}
            >
              Explore Courses
            </button>
            <button 
              onClick={() => setActiveTab('account')}
              className={`px-6 py-3 font-medium text-lg ${activeTab === 'account' ? 'border-b-2 border-dlai-primary text-gray-900' : 'text-gray-500'}`}
            >
              Account
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - User Info */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mb-3"></div>
                  <h3 className="text-xl font-medium">Jeter</h3>
                  <p className="text-gray-600 text-sm">jeter.weng.contact@gmail.com</p>
                  <div className="text-sm text-gray-600 mt-2">10 Enrolled • 5 Completed</div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                        🔥
                      </div>
                      <span>999 Days</span>
                    </div>
                    <div className="text-gray-600">99 Left</div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Complete any lesson on Short Courses to reach a streak.</p>
                  
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="text-xs text-center text-gray-600">{day}</div>
                    ))}
                    {Array(7).fill(0).map((_, i) => (
                      <div key={i} className="aspect-square rounded-full bg-gray-100"></div>
                    ))}
                  </div>
                  
                  <button className="w-full py-2 border border-gray-300 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                    View more
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <img 
                    src="/lovable-uploads/6b5c5c66-a11b-484a-bd3e-d4c062eb1d06.png" 
                    alt="Avatar Andrew" 
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">Chat with Avatar AI Andrew</h3>
                    <p className="text-sm text-gray-600">I'm here to help if you have any questions about your learning plan or course choices.</p>
                  </div>
                </div>
                <button className="w-full py-2 border border-gray-300 rounded-md text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
                  Start to Chat
                </button>
              </div>
            </div>
            
            {/* Right Column - Learning Journey */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 mb-6">
                <div className="flex border-b">
                  <button 
                    className="flex-1 py-3 border-b-2 border-gray-500 font-medium"
                  >
                    My Learning Journey
                  </button>
                  <button className="flex-1 py-3 text-gray-500">Completed</button>
                  <button className="flex-1 py-3 text-gray-500">Saved</button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-700">✦</span>
                      <h2 className="text-xl font-medium">Learning Goal</h2>
                    </div>
                    <button className="text-gray-600 hover:text-dlai-primary text-sm">
                      Edit Goal
                    </button>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-gray-600 mb-1">Current Goal</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-medium">Advancing to Entry-Level Machine Learning (ML) Engineer</p>
                      <button className="text-gray-600 hover:text-dlai-primary text-sm border border-gray-300 rounded-md px-3 py-1">
                        More about this career role
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6 mt-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-gray-600 text-sm mb-1">Course Finish Rate</h4>
                        <p className="text-2xl font-medium">{completionRate} %</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-gray-600 text-sm mb-1">Expected Finish Date</h4>
                        <p className="text-2xl font-medium">September 03, '25</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-gray-600 text-sm mb-1">Certificates Earned</h4>
                        <p className="text-2xl font-medium">0/6</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-700">✦</span>
                        <h2 className="text-xl font-medium">Learning Plan</h2>
                      </div>
                      <button className="text-gray-600 hover:text-dlai-primary text-sm">
                        Edit Plan
                      </button>
                    </div>
                    
                    <Accordion type="single" collapsible className="border-0">
                      <AccordionItem value="foundations" className="border rounded-lg mb-4">
                        <AccordionTrigger className="py-4 px-4 hover:no-underline">
                          <div className="flex items-start">
                            <span className="mr-3">📚</span>
                            <div className="text-left">
                              <h3 className="font-medium">Core Foundations (2 Courses)</h3>
                              <p className="text-sm text-gray-600 mt-1">
                                Before diving into ML, a strong grasp of Python, math, and data handling is essential. Many ML beginners struggle due to weak math or coding fundamentals.
                              </p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-0">
                          <div className="border-t border-gray-200 pt-4 space-y-6">
                            <div>
                              <div className="text-sm text-gray-600 mb-2">Total 2hr 41m</div>
                              
                              <div className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                                <div className="flex-shrink-0">
                                  <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
                                </div>
                                <div className="flex-grow">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="flex items-center space-x-2">
                                        <img src="/lovable-uploads/a3bb4404-edae-4a97-abb8-e9720603bafb.png" alt="DeepLearning.AI" className="h-5" />
                                        <img src="/lovable-uploads/fa564236-7f33-489b-9f12-30bbea618d06.png" alt="IBM" className="h-5" />
                                      </div>
                                      <h4 className="font-medium mt-1">Course Title</h4>
                                      <p className="text-sm text-gray-600">Description Description Description Description Description Description</p>
                                    </div>
                                    <div>
                                      <button className="text-gray-500 hover:text-gray-700">
                                        <MoreVertical size={18} />
                                      </button>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center text-sm mt-2">
                                    <div className="flex items-center mr-2">
                                      <span className="font-medium mr-1">4.7</span>
                                      <div className="flex">
                                        {[1,2,3,4,5].map((_, i) => (
                                          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                        ))}
                                      </div>
                                    </div>
                                    <span className="text-gray-600">(789)</span>
                                    <span className="mx-2 text-gray-400">•</span>
                                    <span className="text-gray-600">9,999+ learners</span>
                                  </div>
                                  
                                  <div className="flex items-center space-x-2 mt-2">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Prompt Engineering</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Generative Models</span>
                                  </div>
                                  
                                  <div className="mt-3">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                      <div className="bg-dlai-primary h-2 rounded-full" style={{width: "50%"}}></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex justify-end space-x-3">
                              <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors">
                                Continue
                              </button>
                              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center">
                                View Details
                                <ChevronDown size={16} className="ml-1" />
                              </button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="machine-learning" className="border rounded-lg">
                        <AccordionTrigger className="py-4 px-4 hover:no-underline">
                          <div className="flex items-start">
                            <span className="mr-3">📚</span>
                            <div className="text-left">
                              <h3 className="font-medium">Core Machine Learning (3 Courses)</h3>
                              <p className="text-sm text-gray-600 mt-1">
                                Before diving into ML, a strong grasp of Python, math, and data handling is essential. Many ML beginners struggle due to weak math or coding fundamentals.
                              </p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          {/* Course content here */}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearningJourney;
