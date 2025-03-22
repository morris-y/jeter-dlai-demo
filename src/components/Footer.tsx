
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">DeepLearning.AI</h3>
            <p className="text-gray-600 mb-4">
              Making world-class AI education accessible to developers, data scientists, and business professionals.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-dlai-primary transition-colors">AI For Everyone</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dlai-primary transition-colors">Machine Learning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dlai-primary transition-colors">Deep Learning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dlai-primary transition-colors">AI Product Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-dlai-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dlai-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dlai-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dlai-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-dlai-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dlai-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dlai-primary transition-colors">YouTube</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dlai-primary transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DeepLearning.AI. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-dlai-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-dlai-primary transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-dlai-primary transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
