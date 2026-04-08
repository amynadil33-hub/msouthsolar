import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#0A2540] text-white">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Stay informed on solar in the Maldives</h3>
              <p className="text-white/60 text-sm mt-1">Market updates, project insights, and energy-saving guidance.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 md:w-72 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00A896] transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#00A896] hover:bg-[#008F80] text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#00A896] flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold">M South Solar</span>
                <span className="block text-[10px] uppercase tracking-[0.12em] text-white/50">Maldives</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              The dedicated solar energy brand associated with Blue Builders International. Delivering rooftop solar, hybrid systems, and long-term energy service across the Maldives.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@msouthsolar.mv" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#00A896] transition-colors">
                <Mail className="w-4 h-4" /> info@msouthsolar.mv
              </a>
              <a href="tel:+9607780000" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#00A896] transition-colors">
                <Phone className="w-4 h-4" /> +960 791 2865
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 flex-shrink-0" /> Malé, Republic of Maldives
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About M South Solar', path: '/about' },
                { label: 'Our Services', path: '/services' },
                { label: 'Strategic Partners', path: '/partnerships' },
                { label: 'Sustainability', path: '/sustainability' },
                { label: 'Blog & Insights', path: '/blog' },
                { label: 'Contact Us', path: '/contact' },
                { label: 'FAQ', path: '/faq' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40 mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                'Rooftop Solar Systems',
                'Hybrid Solar + Battery',
                'Solar for Homes & Villas',
                'Solar for Resorts',
                'Commercial & Industrial Solar',
                'Government Projects',
                'Maintenance & AMC',
                'Net Metering Support',
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solar in Maldives */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40 mb-5">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: 'Solar in the Maldives', path: '/solar-maldives' },
                { label: 'Why Solar Now', path: '/solar-maldives' },
                { label: 'System Sizing Guide', path: '/solar-maldives' },
                { label: 'Net Metering Explained', path: '/blog' },
                { label: 'Resort Solar Guide', path: '/blog' },
                { label: 'Request Site Survey', path: '/contact' },
                { label: 'Download Company Profile', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} M South Solar. All rights reserved. A solar energy brand associated with Blue Builders International.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/faq" className="text-xs text-white/40 hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link to="/faq" className="text-xs text-white/40 hover:text-white/60 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
