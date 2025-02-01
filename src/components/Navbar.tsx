import { useState } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sun className="h-8 w-8 text-green-400" />
            <span className="ml-2 text-xl font-semibold text-white">Mentary</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-white hover:text-green-400">Home</a>
              <a href="/services" className="text-white hover:text-green-400">Services</a>
              <a href="/work" className="text-white hover:text-green-400">Our Work</a>
              <a href="/team" className="text-white hover:text-green-400">Our Team</a>
              <a href="/contact" className="text-white hover:text-green-400">Contact</a>
              <button className="bg-green-400 text-slate-900 px-4 py-2 rounded-md hover:bg-green-500 transition-colors">
                Get Quote →
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-white hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="/services"
                className="block px-3 py-2 text-white hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="/work"
                className="block px-3 py-2 text-white hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                Our Work
              </a>
              <a
                href="/team"
                className="block px-3 py-2 text-white hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                Our Team
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-white hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <button className="w-full text-left px-3 py-2 bg-green-400 text-slate-900 rounded-md hover:bg-green-500 transition-colors">
                Get Quote →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}