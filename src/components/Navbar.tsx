import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Building2 className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">LuxuryHomes</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className={`${isActive('/properties') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Properties
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}
            >
              Contact
            </Link>
            <Link 
              to="/list-property" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              List Your Property
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/list-property" 
              className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              List Your Property
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}