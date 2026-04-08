import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';

const MobileCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 safe-area-bottom">
      <div className="flex items-center gap-2">
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#00A896] text-white text-sm font-semibold rounded-xl"
        >
          Get a Quote
        </Link>
        <a
          href="tel:+9607780000"
          className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl"
        >
          <Phone className="w-5 h-5 text-[#0A2540]" />
        </a>
        <a
          href="https://wa.me/9607780000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-xl"
        >
          <MessageCircle className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
