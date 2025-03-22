import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

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
    { label: 'Explore Courses', url: '/courses' },
    { label: 'AI Newsletter', url: '#', hasDropdown: true },
    { label: 'AI Dev 25', url: '#' },
    { label: 'Community', url: '#', hasDropdown: true },
    { label: 'Company', url: '#', hasDropdown: true },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 bg-white shadow-sm',
        scrolled ? 'shadow-md' : ''
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/a3bb4404-edae-4a97-abb8-e9720603bafb.png" 
            alt="DeepLearning.AI Logo" 
            className="h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-4">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.hasDropdown ? (
                  <NavigationMenuTrigger className="text-base font-medium text-gray-700 hover:text-dlai-primary transition-colors">
                    {item.label}
                  </NavigationMenuTrigger>
                ) : (
                  <Link
                    to={item.url}
                    className="text-base font-medium text-gray-700 hover:text-dlai-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/learning-journey"
            className="px-4 py-2 bg-dlai-primary/5 text-dlai-primary border border-dlai-primary/20 rounded-md text-base font-medium hover:bg-dlai-primary/10 transition-colors"
          >
            My Learning
          </Link>
          <Link
            to="#"
            className="w-10 h-10 overflow-hidden rounded-full bg-dlai-primary/10 flex items-center justify-center hover:bg-dlai-primary/20 transition-colors border border-transparent hover:border-dlai-primary/20"
          >
            <span className="text-xl font-medium text-dlai-primary">J</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-dlai-primary"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 shadow-lg py-4 px-6 animate-slideDown">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className="block py-3 text-base font-medium text-gray-700 hover:text-dlai-primary transition-colors border-b border-gray-100 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col space-y-3">
            <Link
              to="/learning-journey"
              className="px-4 py-2 bg-dlai-primary/5 text-dlai-primary border border-dlai-primary/20 rounded-md text-base font-medium hover:bg-dlai-primary/10 transition-colors text-center"
            >
              My Learning
            </Link>
            <Link
              to="/courses"
              className="px-4 py-2 rounded-md border border-gray-300 text-base font-medium hover:bg-gray-50 transition-colors text-center"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
