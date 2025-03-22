
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, Play, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CourseDetails = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
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
            
            {/* Right Column - Course Details */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <img src="/lovable-uploads/a3bb4404-edae-4a97-abb8-e9720603bafb.png" alt="DeepLearning.AI" className="h-5" />
                      <img src="/lovable-uploads/fa564236-7f33-489b-9f12-30bbea618d06.png" alt="IBM" className="h-5" />
                    </div>
                    <h1 className="text-2xl font-bold mb-2">Course Title</h1>
                    <p className="text-gray-700 mb-3">
                      Description Description Description Description Description Description Description
                    </p>
                    
                    <div className="flex items-center text-sm">
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
                      <span className="bg-white border border-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Prompt Engineering</span>
                      <span className="bg-white border border-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Generative Models</span>
                    </div>

                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-dlai-primary h-2 rounded-full" style={{width: "0%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <button className="px-6 py-2 bg-dlai-primary text-white rounded-md hover:bg-opacity-90 transition-colors">
                    Enroll
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 mb-6">
                <Accordion type="single" collapsible className="border-0">
                  <AccordionItem value="how-this-course-helps" className="border-b">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="font-medium">How this course help my learning jouenry</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-700">
                        Description Description Description Description Description Description Description
                        Description Description Description Description Description Description Description
                        Description Description Description Description Description Description Description
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="prerequisites" className="border-b">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="font-medium">Prerequisites Knowledge</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-700 mb-4">
                        Description Description Description Description Description Description Description
                        Description Description Description Description Description Description Description
                      </p>
                      
                      <h3 className="font-medium mb-4">Need to take the prerequisites course?</h3>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="w-full h-32 bg-gray-100 rounded-lg mb-3"></div>
                          <h4 className="font-medium mb-1">Calculus I</h4>
                          <p className="text-sm text-gray-600 mb-2">Description Description Description</p>
                          
                          <div className="flex items-center space-x-1 mb-1">
                            <img src="/lovable-uploads/a3bb4404-edae-4a97-abb8-e9720603bafb.png" alt="DeepLearning.AI" className="h-4" />
                          </div>
                          
                          <div className="flex items-center text-xs mb-3">
                            <div className="flex items-center mr-1">
                              <span className="font-medium mr-1">4.7</span>
                              <div className="flex">
                                {[1,2,3,4,5].map((_, i) => (
                                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <span className="text-gray-600">(789)</span>
                            <span className="mx-1 text-gray-400">•</span>
                            <span className="text-gray-600">9,999+</span>
                          </div>
                          
                          <button className="w-full py-1.5 border border-gray-300 rounded-md text-gray-700 text-xs font-medium hover:bg-gray-50 transition-colors">
                            Add to My Journey
                          </button>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="w-full h-32 bg-gray-100 rounded-lg mb-3"></div>
                          <h4 className="font-medium mb-1">College Calculus</h4>
                          <p className="text-sm text-gray-600 mb-2">Description Description Description</p>
                          
                          <div className="flex items-center space-x-1 mb-1">
                            <img src="/lovable-uploads/f6cc4192-5634-44e1-a7f3-9a6186475ffb.png" alt="OpenAI" className="h-4" />
                          </div>
                          
                          <div className="flex items-center text-xs mb-3">
                            <div className="flex items-center mr-1">
                              <span className="font-medium mr-1">4.7</span>
                              <div className="flex">
                                {[1,2,3,4,5].map((_, i) => (
                                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <span className="text-gray-600">(789)</span>
                            <span className="mx-1 text-gray-400">•</span>
                            <span className="text-gray-600">9,999+</span>
                          </div>
                          
                          <button className="w-full py-1.5 border border-gray-300 rounded-md text-gray-700 text-xs font-medium hover:bg-gray-50 transition-colors">
                            Add to My Journey
                          </button>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="w-full h-32 bg-gray-100 rounded-lg mb-3"></div>
                          <h4 className="font-medium mb-1">Calculus for Beginner</h4>
                          <p className="text-sm text-gray-600 mb-2">Description Description Description</p>
                          
                          <div className="flex items-center space-x-1 mb-1">
                            <img src="/lovable-uploads/143eb32f-2879-43c8-8ffd-82df51fee6e7.png" alt="Google" className="h-4" />
                          </div>
                          
                          <div className="flex items-center text-xs mb-3">
                            <div className="flex items-center mr-1">
                              <span className="font-medium mr-1">4.7</span>
                              <div className="flex">
                                {[1,2,3,4,5].map((_, i) => (
                                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <span className="text-gray-600">(789)</span>
                            <span className="mx-1 text-gray-400">•</span>
                            <span className="text-gray-600">9,999+</span>
                          </div>
                          
                          <button className="w-full py-1.5 border border-gray-300 rounded-md text-gray-700 text-xs font-medium hover:bg-gray-50 transition-colors">
                            Add to My Journey
                          </button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="syllabus" className="border-b">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="font-medium">Syllabus</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      {/* Syllabus content */}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetails;
