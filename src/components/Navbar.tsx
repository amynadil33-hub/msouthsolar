import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, ChevronDown, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Partnerships', path: '/partnerships' },
  { label: 'Solar in the Maldives', path: '/solar-maldives' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${scrolled ? 'bg-[#0A2540]' : 'bg-white/20 backdrop-blur-sm'}`}>
              <Sun className={`w-5 h-5 ${scrolled ? 'text-[#00A896]' : 'text-white'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold leading-tight tracking-tight transition-colors ${scrolled ? 'text-[#0A2540]' : 'text-white'}`}>
                M South Solar
              </span>
              <span className={`text-[10px] uppercase tracking-[0.12em] leading-tight transition-colors ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
                Maldives
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'text-[#00A896] bg-[#00A896]/10'
                      : 'text-white bg-white/20'
                    : scrolled
                    ? 'text-gray-600 hover:text-[#0A2540] hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/9607780000"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                scrolled ? 'text-gray-600 hover:text-[#0A2540]' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-[#00A896] hover:bg-[#008F80] text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-[#00A896]/25 hover:shadow-[#00A896]/40"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-[#0A2540] hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === link.path
                  ? 'text-[#00A896] bg-[#00A896]/10'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 space-y-2">
            <a
              href="https://wa.me/9607912865"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-[#0A2540] bg-gray-100 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="block text-center w-full px-4 py-3 text-sm font-semibold text-white bg-[#00A896] rounded-lg"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
