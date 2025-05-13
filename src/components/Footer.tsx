
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-shopkart-primary text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Shop Kart */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shop<span className="text-shopkart-secondary">Kart</span></h3>
            <p className="text-sm text-gray-300 mb-4">
              Your one-stop shop for all your shopping needs. We provide quality products at the best prices.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-shopkart-secondary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-shopkart-secondary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-shopkart-secondary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-shopkart-secondary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-shopkart-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-300 hover:text-shopkart-secondary transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-gray-300 hover:text-shopkart-secondary transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/deals" className="text-sm text-gray-300 hover:text-shopkart-secondary transition-colors">Deals & Offers</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-shopkart-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-shopkart-secondary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-gray-300 hover:text-shopkart-secondary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-gray-300 hover:text-shopkart-secondary transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-gray-300 hover:text-shopkart-secondary transition-colors">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-300 hover:text-shopkart-secondary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-300 hover:text-shopkart-secondary transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin size={18} className="shrink-0 mt-1" />
                <span>123 Shopping Avenue, Retail District, New York, 10001, USA</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail size={18} />
                <span>support@shopkart.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Clock size={18} />
                <span>Monday-Friday: 9am-6pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-white/20 pt-8 pb-4">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">Stay updated with our latest offers and products</p>
            <form className="flex w-full max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-md text-shopkart-text bg-white focus:outline-none focus:ring-2 focus:ring-shopkart-secondary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-shopkart-secondary text-white rounded-r-md hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ShopKart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
