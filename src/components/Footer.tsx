import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Building2 className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">LuxuryHomes</span>
            </Link>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect property in Barcelona
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/properties" className="text-gray-400 hover:text-white">Properties</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                123 Diagonal Avenue, Barcelona
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +34 123 456 789
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@luxuryhomes.com
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new properties
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} LuxuryHomes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}