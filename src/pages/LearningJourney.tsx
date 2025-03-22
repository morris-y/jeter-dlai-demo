import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Play, Star, MoreVertical, FileText, BookOpen, CheckCircle, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const LearningJourney = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const [completionRate, setCompletionRate] = useState(25.5);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showDetailsCourse, setShowDetailsCourse] = useState<number | null>(null);
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    'course1-how': true,
    'course1-prerequisites': true,
    'course1-recommended': true,
    'course1-syllabus': true,
    'course2-how': true,
    'course2-prerequisites': true,
    'course2-recommended': true,
    'course2-syllabus': true,
  });
  const { toast } = useToast();

  const handleComplete = () => {
    setCompletionRate(100);
    toast({
      title: "Congratulations!",
      description: "You've completed all courses in your learning journey!",
    });
  };

  const toggleEnroll = () => {
    setIsEnrolled(!isEnrolled);
    toast({
      title: isEnrolled ? "Unenrolled" : "Enrolled!",
      description: isEnrolled ? "You've been unenrolled from this course." : "You've been enrolled in this course.",
    });
  };

  const toggleCourseDetails = (courseId: number) => {
    if (showDetailsCourse === courseId) {
      setShowDetailsCourse(null);
    } else {
      setShowDetailsCourse(courseId);
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - User Info */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 bg-dlai-primary/10 rounded-full mb-3 flex items-center justify-center">
                    <span className="text-4xl font-medium text-dlai-primary">J</span>
                  </div>
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
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format&q=80" 
                    alt="Avatar Andrew" 
                    className="w-10 h-10 rounded-full object-cover"
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
                    <Card className="border-0 shadow-none">
                      <CardContent className="p-0">
                        <h3 className="text-gray-600 mb-1">Current Goal</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col space-y-2">
                            <p className="text-sm font-medium">AI is the new electricity.</p>
                            <p className="text-sm font-medium text-dlai-primary">You are the spark.</p>
                          </div>
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
                      </CardContent>
                    </Card>
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
                            <BookOpen className="mr-3 flex-shrink-0" size={24} />
                            <div className="text-left">
                              <h3 className="font-medium">Core Foundations (2 Courses)</h3>
                              <p className="text-sm text-gray-600 mt-1">
                                Before diving into ML, a strong grasp of Python, math, and data handling is essential. Many ML beginners struggle due to weak math or coding fundamentals.
                              </p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          <div className="pt-4">
                            <div className="text-sm text-gray-600 mb-2">Total 2hr 41m</div>
                            
                            {/* Course Card 1 */}
                            <div className="mb-4">
                              <div className="bg-gray-50 p-4 rounded-lg relative">
                                <div className="flex gap-6 items-center">
                                  <div className="flex-shrink-0">
                                    <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
                                  </div>
                                  <div className="flex-grow">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <div className="flex items-center space-x-2">
                                          <img src="/lovable-uploads/a3bb4404-edae-4a97-abb8-e9720603bafb.png" alt="DeepLearning.AI" className="h-5" />
                                          <img src="/lovable-uploads/fa564236-7f33-489b-9f12-30bbea618d06.png" alt="IBM" className="h-5" />
                                        </div>
                                        <h4 className="font-medium mt-1">Course Title</h4>
                                        <p className="text-sm text-gray-600 break-words">DescriptionDescriptionDescriptionDescriptionDescriptionDescription</p>
                                      </div>
                                      <button className="text-gray-500 hover:text-gray-700">
                                        <MoreVertical size={18} />
                                      </button>
                                    </div>
                                    
                                    <div className="flex items-center text-sm mt-2">
                                      <div className="flex items-center">
                                        <span className="font-medium mr-1">4.7</span>
                                        <div className="flex">
                                          {[1,2,3,4,5].map((_, i) => (
                                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                          ))}
                                        </div>
                                      </div>
                                      <span className="text-gray-600 ml-1">(789)</span>
                                    </div>
                                    <div className="text-sm text-gray-600 mt-1">9,999+ learners</div>
                                    
                                    <div className="flex items-center space-x-2 mt-2">
                                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Prompt Engineering</span>
                                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Generative Models</span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="mt-4 flex items-center justify-between">
                                  <div className="w-32 flex items-center space-x-2">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                                      <div className="bg-dlai-primary h-2 rounded-full" style={{width: "0%"}}></div>
                                    </div>
                                    <span className="text-sm text-gray-600">0%</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    {isEnrolled ? (
                                      <button 
                                        onClick={toggleEnroll}
                                        className="px-3 py-1.5 bg-gray-500 text-white text-sm rounded-md hover:bg-gray-600 transition-colors">
                                        Continue
                                      </button>
                                    ) : (
                                      <button 
                                        onClick={toggleEnroll}
                                        className="px-3 py-1.5 bg-dlai-primary text-white text-sm rounded-md hover:bg-dlai-primary/90 transition-colors">
                                        Enroll
                                      </button>
                                    )}
                                    <button 
                                      onClick={() => toggleCourseDetails(1)}
                                      className="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors flex items-center"
                                    >
                                      View Details
                                      {showDetailsCourse === 1 ? <ChevronUp size={14} className="ml-1" /> : <ChevronDown size={14} className="ml-1" />}
                                    </button>
                                  </div>
                                </div>
                                
                                {showDetailsCourse === 1 && (
                                  <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="space-y-4">
                                      <div>
                                        <div 
                                          className="flex items-center cursor-pointer" 
                                          onClick={() => toggleSection('course1-how')}
                                        >
                                          <h4 className="font-medium">How this course help my learning journey</h4>
                                          <button className="ml-2 text-gray-500 flex items-center">
                                            {expandedSections['course1-how'] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                          </button>
                                        </div>
                                        {expandedSections['course1-how'] && (
                                          <p className="text-sm text-gray-600 whitespace-normal break-words mt-3">
                                            This course will help you understand the fundamentals of machine learning, including supervised learning, unsupervised learning, and best practices. By studying these concepts, you'll be able to comprehend how machine learning algorithms work and apply this knowledge to real-world projects. The course will also introduce how to implement machine learning algorithms using Python and how to evaluate model performance.
                                          </p>
                                        )}
                                      </div>
                                      <div>
                                        <div 
                                          className="flex items-center cursor-pointer"
                                          onClick={() => toggleSection('course1-prerequisites')}
                                        >
                                          <h4 className="font-medium">Prerequisites Knowledge</h4>
                                          <button className="ml-2 text-gray-500 flex items-center">
                                            {expandedSections['course1-prerequisites'] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                          </button>
                                        </div>
                                        {expandedSections['course1-prerequisites'] && (
                                          <>
                                            <p className="text-sm text-gray-600 whitespace-normal break-words mt-3">
                                              Before starting this course, you should have a basic understanding of Python programming and mathematical concepts, especially linear algebra and calculus. If you're not familiar with these concepts, we recommend taking some foundational courses first. Additionally, understanding basic statistical concepts will help you grasp the course content better.
                                            </p>
                                            <a href="#" className="text-sm font-medium mt-3 inline-block text-red-600 underline hover:text-red-700">
                                              Need to take the prerequisites course?
                                            </a>
                                          </>
                                        )}
                                      </div>
                                      <div>
                                        <div 
                                          className="flex items-center cursor-pointer"
                                          onClick={() => toggleSection('course1-recommended')}
                                        >
                                          <h4 className="font-medium">Recommended Prerequisite Options</h4>
                                          <button className="ml-2 text-gray-500 flex items-center">
                                            {expandedSections['course1-recommended'] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                          </button>
                                        </div>
                                        {expandedSections['course1-recommended'] && (
                                          <div className="grid grid-cols-3 gap-4 mt-3">
                                            <div className="border rounded-lg overflow-hidden">
                                              <div className="aspect-video bg-gray-100"></div>
                                              <div className="p-4">
                                                <h5 className="font-medium">Calculus I</h5>
                                                <p className="text-sm text-gray-600 mb-2">Basic calculus course covering derivatives, integrals, and applications</p>
                                                <div className="flex items-center text-sm mb-1">
                                                  <span>DeepLearning.AI</span>
                                                </div>
                                                <div className="flex items-center text-sm mb-2">
                                                  <div className="flex items-center">
                                                    <span className="mr-1">4.7</span>
                                                    <div className="flex">
                                                      {[1,2,3,4,5].map((_, i) => (
                                                        <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                                                      ))}
                                                    </div>
                                                  </div>
                                                  <span className="text-gray-600 ml-1">(789)</span>
                                                </div>
                                                <div className="text-sm text-gray-600 mb-2">9,999+ learners</div>
                                                <button className="w-full py-2 border border-gray-300 rounded-md text-dlai-primary text-sm font-medium hover:bg-gray-50 transition-colors">
                                                  Add to My Journey
                                                </button>
                                              </div>
                                            </div>
                                            <div className="border rounded-lg overflow-hidden">
                                              <div className="aspect-video bg-gray-100"></div>
                                              <div className="p-4">
                                                <h5 className="font-medium">College Calculus</h5>
                                                <p className="text-sm text-gray-600 mb-2">Advanced calculus concepts, including multivariable calculus</p>
                                                <div className="flex items-center text-sm mb-1">
                                                  <span>OpenAI</span>
                                                </div>
                                                <div className="flex items-center text-sm mb-2">
                                                  <div className="flex items-center">
                                                    <span className="mr-1">4.7</span>
                                                    <div className="flex">
                                                      {[1,2,3,4,5].map((_, i) => (
                                                        <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                                                      ))}
                                                    </div>
                                                  </div>
                                                  <span className="text-gray-600 ml-1">(789)</span>
                                                </div>
                                                <div className="text-sm text-gray-600 mb-2">9,999+ learners</div>
                                                <button className="w-full py-2 border border-gray-300 rounded-md text-dlai-primary text-sm font-medium hover:bg-gray-50 transition-colors">
                                                  Add to My Journey
                                                </button>
                                              </div>
                                            </div>
                                            <div className="border rounded-lg overflow-hidden">
                                              <div className="aspect-video bg-gray-100"></div>
                                              <div className="p-4">
                                                <h5 className="font-medium">Calculus for Beginner</h5>
                                                <p className="text-sm text-gray-600 mb-2">Zero-foundation calculus introduction with easy-to-understand explanations</p>
                                                <div className="flex items-center text-sm mb-1">
                                                  <span>Google</span>
                                                </div>
                                                <div className="flex items-center text-sm mb-2">
                                                  <div className="flex items-center">
                                                    <span className="mr-1">4.7</span>
                                                    <div className="flex">
                                                      {[1,2,3,4,5].map((_, i) => (
                                                        <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                                                      ))}
                                                    </div>
                                                  </div>
                                                  <span className="text-gray-600 ml-1">(789)</span>
                                                </div>
                                                <div className="text-sm text-gray-600 mb-2">9,999+ learners</div>
                                                <button className="w-full py-2 border border-gray-300 rounded-md text-dlai-primary text-sm font-medium hover:bg-gray-50 transition-colors">
                                                  Add to My Journey
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div>
                                        <div 
                                          className="flex items-center cursor-pointer"
                                          onClick={() => toggleSection('course1-syllabus')}
                                        >
                                          <h4 className="font-medium">Syllabus</h4>
                                          <button className="ml-2 text-gray-500 flex items-center">
                                            {expandedSections['course1-syllabus'] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                          </button>
                                        </div>
                                        {expandedSections['course1-syllabus'] && (
                                          <p className="text-sm text-gray-600 mt-3">
                                            The course syllabus will be displayed here
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Course Card 2 */}
                            <div>
                              <div className="bg-gray-50 p-4 rounded-lg relative">
                                <div className="flex gap-6 items-center">
                                  <div className="flex-shrink-0">
                                    <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
                                  </div>
                                  <div className="flex-grow">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <div className="flex items-center space-x-2">
                                          <img src="/lovable-uploads/a3bb4404-edae-4a97-abb8-e9720603bafb.png" alt="DeepLearning.AI" className="h-5" />
                                          <img src="/lovable-uploads/fa564236-7f33-489b-9f12-30bbea618d06.png" alt="IBM" className="h-5" />
                                        </div>
                                        <h4 className="font-medium mt-1">Course Title</h4>
                                        <p className="text-sm text-gray-600 break-words">DescriptionDescriptionDescriptionDescriptionDescriptionDescription</p>
                                      </div>
                                      <button className="text-gray-500 hover:text-gray-700">
                                        <MoreVertical size={18} />
                                      </button>
                                    </div>
                                    
                                    <div className="flex items-center text-sm mt-2">
                                      <div className="flex items-center">
                                        <span className="font-medium mr-1">4.7</span>
                                        <div className="flex">
                                          {[1,2,3,4,5].map((_, i) => (
                                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                          ))}
                                        </div>
                                      </div>
                                      <span className="text-gray-600 ml-1">(789)</span>
                                    </div>
                                    <div className="text-sm text-gray-600 mt-1">9,999+ learners</div>
                                    
                                    <div className="flex items-center space-x-2 mt-2">
                                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Prompt Engineering</span>
                                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Generative Models</span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="mt-4 flex items-center justify-between">
                                  <div className="w-32 flex items-center space-x-2">
                                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                                      <div className="bg-dlai-primary h-2 rounded-full" style={{width: "0%"}}></div>
                                    </div>
                                    <span className="text-sm text-gray-600">0%</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    {isEnrolled ? (
                                      <button 
                                        onClick={toggleEnroll}
                                        className="px-3 py-1.5 bg-gray-500 text-white text-sm rounded-md hover:bg-gray-600 transition-colors">
                                        Continue
                                      </button>
                                    ) : (
                                      <button 
                                        onClick={toggleEnroll}
                                        className="px-3 py-1.5 bg-dlai-primary text-white text-sm rounded-md hover:bg-dlai-primary/90 transition-colors">
                                        Enroll
                                      </button>
                                    )}
                                    <button 
                                      onClick={() => toggleCourseDetails(2)}
                                      className="px-3 py-1.5 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors flex items-center"
                                    >
                                      View Details
                                      {showDetailsCourse === 2 ? <ChevronUp size={14} className="ml-1" /> : <ChevronDown size={14} className="ml-1" />}
                                    </button>
                                  </div>
                                </div>
                                
                                {showDetailsCourse === 2 && (
                                  <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="space-y-4">
                                      <div>
                                        <div 
                                          className="flex items-center cursor-pointer" 
                                          onClick={() => toggleSection('course2-how')}
                                        >
                                          <h4 className="font-medium">How this course help my learning journey</h4>
                                          <button className="ml-2 text-gray-500 flex items-center">
                                            {expandedSections['course2-how'] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                          </button>
                                        </div>
                                        {expandedSections['course2-how'] && (
                                          <p className="text-sm text-gray-600 whitespace-normal break-words mt-3">
                                            This course will help you gain a deeper understanding of deep learning fundamentals, including neural networks, convolutional neural networks, and recurrent neural networks. By studying these topics, you'll be able to understand how deep learning algorithms work and apply this knowledge to real-world projects. The course will also introduce how to implement deep learning algorithms using TensorFlow and PyTorch.
                                          </p>
                                        )}
                                      </div>
                                      <div>
                                        <div 
                                          className="flex items-center cursor-pointer"
                                          onClick={() => toggleSection('course2-prerequisites')}
                                        >
                                          <h4 className="font-medium">Prerequisites Knowledge</h4>
                                          <button className="ml-2 text-gray-500 flex items-center">
                                            {expandedSections['course2-prerequisites'] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                          </button>
                                        </div>
                                        {expandedSections['course2-prerequisites'] && (
                                          <>
                                            <p className="text-sm text-gray-600 whitespace-normal break-words mt-3">
                                              Before starting this course, you should have a basic understanding of machine learning, including supervised learning and unsupervised learning. Additionally, you should be familiar with Python programming and fundamental mathematical concepts such as linear algebra, probability, and statistics. If you're not familiar with these concepts, we recommend taking a foundational machine learning course first.
                                            </p>
                                            <a href="#" className="text-sm font-medium mt-3 inline-block text-red-600 underline hover:text-red-700">
                                              Need to take the prerequisites course?
                                            </a>
                                          </>
                                        )}
                                      </div>
                                      <div>
                                        <div 
                                          className="flex items-center cursor-pointer"
                                          onClick={() => toggleSection('course2-recommended')}
                                        >
                                          <h4 className="font-medium">Recommended Prerequisite Options</h4>
                                          <button className="ml-2 text-gray-500 flex items-center">
                                            {expandedSections['course2-recommended'] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                          </button>
                                        </div>
                                        {expandedSections['course2-recommended'] && (
                                          <div className="grid grid-cols-3 gap-4 mt-3">
                                            <div className="border rounded-lg overflow-hidden">
                                              <div className="aspect-video bg-gray-100"></div>
                                              <div className="p-4">
                                                <h5 className="font-medium">Calculus I</h5>
                                                <p className="text-sm text-gray-600 mb-2">Basic calculus course covering derivatives, integrals, and applications</p>
                                                <div className="flex items-center text-sm mb-1">
                                                  <span>DeepLearning.AI</span>
                                                </div>
                                                <div className="flex items-center text-sm mb-2">
                                                  <div className="flex items-center">
                                                    <span className="mr-1">4.7</span>
                                                    <div className="flex">
                                                      {[1,2,3,4,5].map((_, i) => (
                                                        <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                                                      ))}
                                                    </div>
                                                  </div>
                                                  <span className="text-gray-600 ml-1">(789)</span>
                                                </div>
                                                <div className="text-sm text-gray-600 mb-2">9,999+ learners</div>
                                                <button className="w-full py-2 border border-gray-300 rounded-md text-dlai-primary text-sm font-medium hover:bg-gray-50 transition-colors">
                                                  Add to My Journey
                                                </button>
                                              </div>
                                            </div>
                                            <div className="border rounded-lg overflow-hidden">
                                              <div className="aspect-video bg-gray-100"></div>
                                              <div className="p-4">
                                                <h5 className="font-medium">College Calculus</h5>
                                                <p className="text-sm text-gray-600 mb-2">Advanced calculus concepts, including multivariable calculus</p>
                                                <div className="flex items-center text-sm mb-1">
                                                  <span>OpenAI</span>
                                                </div>
                                                <div className="flex items-center text-sm mb-2">
                                                  <div className="flex items-center">
                                                    <span className="mr-1">4.7</span>
                                                    <div className="flex">
                                                      {[1,2,3,4,5].map((_, i) => (
                                                        <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                                                      ))}
                                                    </div>
                                                  </div>
                                                  <span className="text-gray-600 ml-1">(789)</span>
                                                </div>
                                                <div className="text-sm text-gray-600 mb-2">9,999+ learners</div>
                                                <button className="w-full py-2 border border-gray-300 rounded-md text-dlai-primary text-sm font-medium hover:bg-gray-50 transition-colors">
                                                  Add to My Journey
                                                </button>
                                              </div>
                                            </div>
                                            <div className="border rounded-lg overflow-hidden">
                                              <div className="aspect-video bg-gray-100"></div>
                                              <div className="p-4">
                                                <h5 className="font-medium">Calculus for Beginner</h5>
                                                <p className="text-sm text-gray-600 mb-2">Zero-foundation calculus introduction with easy-to-understand explanations</p>
                                                <div className="flex items-center text-sm mb-1">
                                                  <span>Google</span>
                                                </div>
                                                <div className="flex items-center text-sm mb-2">
                                                  <div className="flex items-center">
                                                    <span className="mr-1">4.7</span>
                                                    <div className="flex">
                                                      {[1,2,3,4,5].map((_, i) => (
                                                        <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                                                      ))}
                                                    </div>
                                                  </div>
                                                  <span className="text-gray-600 ml-1">(789)</span>
                                                </div>
                                                <div className="text-sm text-gray-600 mb-2">9,999+ learners</div>
                                                <button className="w-full py-2 border border-gray-300 rounded-md text-dlai-primary text-sm font-medium hover:bg-gray-50 transition-colors">
                                                  Add to My Journey
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div>
                                        <div 
                                          className="flex items-center cursor-pointer"
                                          onClick={() => toggleSection('course2-syllabus')}
                                        >
                                          <h4 className="font-medium">Syllabus</h4>
                                          <button className="ml-2 text-gray-500 flex items-center">
                                            {expandedSections['course2-syllabus'] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                          </button>
                                        </div>
                                        {expandedSections['course2-syllabus'] && (
                                          <p className="text-sm text-gray-600 mt-3">
                                            The course syllabus will be displayed here
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="machine-learning" className="border rounded-lg">
                        <AccordionTrigger className="py-4 px-4 hover:no-underline">
                          <div className="flex items-start">
                            <span className="mr-3"><BookOpen size={24} /></span>
                            <div className="text-left">
                              <h3 className="font-medium">Core Machine Learning (3 Courses)</h3>
                              <p className="text-sm text-gray-600 mt-1">
                                Master fundamental ML algorithms including supervised learning, unsupervised learning, and best practices.
                              </p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          {/* Course content here */}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* Prerequisite Options Panel */}
                    <div className="mt-8 border rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-4">Recommended Prerequisite Options</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          { id: 1, title: "Calculus I", provider: "DeepLearning.AI", rating: 4.7, reviews: 789 },
                          { id: 2, title: "College Calculus", provider: "OpenAI", rating: 4.7, reviews: 789 },
                          { id: 3, title: "Calculus for Beginner", provider: "Google", rating: 4.7, reviews: 789 }
                        ].map((course) => (
                          <div key={course.id} className="border rounded-lg overflow-hidden">
                            <div className="aspect-video bg-gray-100"></div>
                            <div className="p-4">
                              <h4 className="font-medium">{course.title}</h4>
                              <p className="text-sm text-gray-600 mb-2">Description Description Description Description</p>
                              <div className="flex items-center text-sm mb-3">
                                <span className="flex items-center">
                                  <span className="mr-1">{course.provider}</span>
                                </span>
                              </div>
                              <div className="flex items-center text-sm mb-3">
                                <span className="flex items-center">
                                  <span className="mr-1">{course.rating}</span>
                                  <div className="flex">
                                    {[1,2,3,4,5].map((_, i) => (
                                      <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                  </div>
                                </span>
                                <span className="text-gray-600 ml-1">({course.reviews})</span>
                                <span className="ml-2">{course.provider === "Google" ? "9,999+" : "9,999+"} learners</span>
                              </div>
                              <button className="w-full py-2 border border-gray-300 rounded-md text-dlai-primary text-sm font-medium hover:bg-gray-50 transition-colors">
                                Add to My Journey
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Debug button to simulate course completion - hidden in normal view */}
          <div className="fixed bottom-4 right-4 opacity-30 hover:opacity-100 transition-opacity">
            <Link to="/courses">
              <button 
                onClick={handleComplete}
                className="bg-gray-200 text-gray-600 px-3 py-1 text-xs rounded-md hover:bg-gray-300"
              >
                Let's say you finished the course
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearningJourney;
