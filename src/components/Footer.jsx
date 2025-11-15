
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">Terravian</span>
              <span className="text-sm font-light text-[#4ade80]">Landscaping LLC</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional property maintenance services for residential and commercial clients across Connecticut. Reliable, insured, and dedicated to excellence.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-[#4ade80] w-fit pb-1">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-[#4ade80] mt-1 flex-shrink-0" />
                <a href="tel:2035141452" className="hover:text-[#4ade80] transition-colors">(203) 514-1452</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-[#4ade80] mt-1 flex-shrink-0" />
                <a href="mailto:terravianlandscaping@gmail.com" className="hover:text-[#4ade80] transition-colors">terravianlandscaping@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#4ade80] mt-1 flex-shrink-0" />
                <span>Meriden, CT 06450</span>
              </li>
            </ul>
          </div>

          {/* Service Areas & Hours */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-[#4ade80] w-fit pb-1">Info</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <div>
                <strong className="text-white block mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#4ade80]" /> Hours
                </strong>
                <p>Snow Plowing: 24/7 Emergency Service</p>
                <p>Landscaping: Mon-Sun 7AM - 7PM</p>
              </div>
              <div>
                <strong className="text-white block mb-1">Service Areas</strong>
                <p>Meriden, Wallingford, Cheshire, Middletown, Durham, North Haven & surrounding areas.</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-[#4ade80] w-fit pb-1">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/#services' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-[#4ade80] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Terravian Landscaping LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
