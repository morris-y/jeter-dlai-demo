
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Explore Courses', url: '#' },
    { label: 'AI Newsletter', url: '#', hasDropdown: true },
    { label: 'AI Dev 25', url: '#' },
    { label: 'Community', url: '#', hasDropdown: true },
    { label: 'Company', url: '#', hasDropdown: true },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6',
        scrolled ? 'bg-white bg-opacity-80 backdrop-blur shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/a3bb4404-edae-4a97-abb8-e9720603bafb.png" 
            alt="DeepLearning.AI Logo" 
            className="h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href={item.url}
                className="text-gray-700 hover:text-dlai-primary transition-colors duration-200 flex items-center"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </a>
              {item.hasDropdown && (
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-10">
                  <div className="bg-white rounded-md shadow-lg overflow-hidden py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Option 1
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Option 2
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="px-4 py-2 rounded-md text-dlai-primary hover:bg-dlai-secondary transition-colors duration-200"
          >
            My Learning
          </a>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 shadow-lg py-4 px-6 animate-slideDown">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="block py-3 text-gray-700 hover:text-dlai-primary transition-colors duration-200 border-b border-gray-100 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col space-y-3">
            <a
              href="#"
              className="px-4 py-2 rounded-md bg-dlai-secondary text-dlai-primary text-center transition-colors duration-200"
            >
              My Learning
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
