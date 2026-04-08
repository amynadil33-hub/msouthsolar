import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      const tipTimer = setTimeout(() => setShowTooltip(true), 5000);
      return () => clearTimeout(tipTimer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {showTooltip && (
        <div className="bg-white rounded-xl shadow-2xl p-4 max-w-[220px] animate-in slide-in-from-right-4 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <X className="w-3 h-3 text-gray-600" />
          </button>
          <p className="text-sm font-medium text-[#0A2540]">Need help with solar?</p>
          <p className="text-xs text-gray-500 mt-1">Chat with our team on WhatsApp for quick answers.</p>
        </div>
      )}
      <a
        href="https://wa.me/9607780000?text=Hi%2C%20I%27m%20interested%20in%20solar%20solutions%20for%20my%20property%20in%20the%20Maldives."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all hover:scale-110 animate-in zoom-in-50"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
