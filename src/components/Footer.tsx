import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Brightway Investor</span>
            </div>
            <p className="text-gray-400 text-sm">
              Where Intelligence Meets Investments. Your trusted partner in navigating the Indian stock market.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Stock Market Education</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Free Webinars</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Portfolio Consultation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Market Analysis</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Mentorship</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Brightway Investor. All rights reserved.</p>
          <p className="text-xs mt-2">
            <Link to="/disclaimer" className="hover:text-white transition-colors">
              Investment Disclaimer
            </Link>
            {' | '}
            Not SEBI Registered - Educational Services Only
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;