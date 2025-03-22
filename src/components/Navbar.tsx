
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
  navigationMenuTriggerStyle,
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
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6',
        scrolled ? 'bg-white bg-opacity-80 backdrop-blur shadow-sm' : 'bg-transparent'
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
                  <>
                    <NavigationMenuTrigger className="bg-transparent">{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-48">
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              to="#"
                            >
                              <div className="text-sm font-medium">Option 1</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              to="#"
                            >
                              <div className="text-sm font-medium">Option 2</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link
                    to={item.url}
                    className="text-gray-700 hover:text-dlai-primary transition-colors duration-200 px-4 py-2"
                  >
                    {item.label}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/learning-journey"
            className="px-4 py-2 rounded-md text-dlai-primary hover:bg-dlai-secondary transition-colors duration-200"
          >
            My Learning
          </Link>
          <Link
            to="/courses"
            className="px-4 py-2 rounded-md text-gray-700 hover:text-dlai-primary transition-colors duration-200"
          >
            Explore Courses
          </Link>
          <Link to="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
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
          </Link>
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
            <Link
              key={index}
              to={item.url}
              className="block py-3 text-gray-700 hover:text-dlai-primary transition-colors duration-200 border-b border-gray-100 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col space-y-3">
            <Link
              to="/learning-journey"
              className="px-4 py-2 rounded-md bg-dlai-secondary text-dlai-primary text-center transition-colors duration-200"
            >
              My Learning
            </Link>
            <Link
              to="/courses"
              className="px-4 py-2 rounded-md border border-gray-300 text-center transition-colors duration-200"
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
