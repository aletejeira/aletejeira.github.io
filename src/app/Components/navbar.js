'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b-2 shadow-lg" 
         style={{
           background: 'linear-gradient(180deg, #E5E7EB 0%, #D1D5DB 25%, #9CA3AF 50%, #D1D5DB 75%, #E5E7EB 100%)',
           borderImage: 'linear-gradient(90deg, #6B7280, #F3F4F6, #6B7280) 1',
           boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(0, 0, 0, 0.2)'
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold transition-colors"
              style={{
                color: '#1F2937',
                textShadow: '0 1px 0 rgba(255, 255, 255, 0.8), 0 -1px 0 rgba(0, 0, 0, 0.3)'
              }}
            >
              Alejandro Tejeira
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  style={{
                    color: '#374151',
                    textShadow: '0 1px 0 rgba(255, 255, 255, 0.7)',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(180deg, #F9FAFB 0%, #E5E7EB 50%, #D1D5DB 100%)';
                    e.target.style.boxShadow = 'inset 0 1px 2px rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(255, 255, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-inset"
              style={{
                color: '#374151',
                background: 'linear-gradient(180deg, #F3F4F6 0%, #D1D5DB 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
                focusRingColor: '#9CA3AF'
              }}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-sm border-b-2" 
             style={{
               background: 'linear-gradient(180deg, #E5E7EB 0%, #D1D5DB 25%, #9CA3AF 50%, #D1D5DB 75%, #E5E7EB 100%)',
               borderImage: 'linear-gradient(90deg, #6B7280, #F3F4F6, #6B7280) 1',
               boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(0, 0, 0, 0.2)'
             }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              style={{
                color: '#374151',
                textShadow: '0 1px 0 rgba(255, 255, 255, 0.7)'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
