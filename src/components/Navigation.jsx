
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const phoneNumber = "(203) 514-1452";
  const telLink = "tel:2035141452";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#1a4d2e] shadow-md border-b border-[#2d6a45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Terravian
              </span>
              <span className="text-sm font-light text-green-200 tracking-wider">
                Landscaping LLC
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-[#4ade80]"
                    : "text-white hover:text-[#4ade80]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={telLink}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4ade80] hover:bg-[#3ecf72] text-[#1a4d2e] font-bold transition-all duration-300 shadow-lg hover:shadow-[#4ade80]/20 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>{phoneNumber}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-[#4ade80] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1a4d2e] border-t border-[#2d6a45] overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-[#4ade80]"
                      : "text-white hover:text-[#4ade80]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={telLink}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-[#4ade80] text-[#1a4d2e] font-bold mt-4"
              >
                <Phone className="w-5 h-5" />
                Call Now: {phoneNumber}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
