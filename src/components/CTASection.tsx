import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, Send, Loader2, CheckCircle2, X } from 'lucide-react';
import { IMAGES } from '@/lib/images';
import { supabase } from '@/lib/supabase';

interface CTASectionProps {
  title?: string;
  description?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to explore solar for your property?",
  description = "Whether you own a home, manage a guest house, operate a resort, or oversee a commercial facility — our team is ready to assess your site and design a system that works for your energy needs and island conditions."
}) => {
  const [showForm, setShowForm] = useState(false);
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickEmail, setQuickEmail] = useState('');
  const [quickSubmitting, setQuickSubmitting] = useState(false);
  const [quickSubmitted, setQuickSubmitted] = useState(false);
  const [quickError, setQuickError] = useState<string | null>(null);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuickSubmitting(true);
    setQuickError(null);

    try {
      const { error } = await supabase
        .from('leads')
        .insert({
          name: quickName.trim(),
          phone: quickPhone.trim() || null,
          email: quickEmail.trim() || null,
          source: 'cta_quick_form',
          status: 'new',
        });

      if (error) throw new Error(error.message);
      setQuickSubmitted(true);
    } catch (err: any) {
      setQuickError('Something went wrong. Please try the contact page or WhatsApp us.');
    } finally {
      setQuickSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.sunset} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0A2540]/85" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {title}
        </h2>
        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>

        {/* Quick Lead Form */}
        {showForm && !quickSubmitted && (
          <form onSubmit={handleQuickSubmit} className="mt-8 max-w-lg mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-left">Quick enquiry</h3>
              <button type="button" onClick={() => setShowForm(false)} className="text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            {quickError && (
              <p className="text-red-300 text-sm mb-3 text-left">{quickError}</p>
            )}
            <div className="space-y-3">
              <input
                type="text" required value={quickName} onChange={(e) => setQuickName(e.target.value)}
                placeholder="Your name *" disabled={quickSubmitting}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00A896] transition-colors disabled:opacity-50"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="tel" value={quickPhone} onChange={(e) => setQuickPhone(e.target.value)}
                  placeholder="Phone" disabled={quickSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00A896] transition-colors disabled:opacity-50"
                />
                <input
                  type="email" value={quickEmail} onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="Email" disabled={quickSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00A896] transition-colors disabled:opacity-50"
                />
              </div>
              <button
                type="submit" disabled={quickSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#00A896] hover:bg-[#008F80] disabled:bg-[#00A896]/60 text-white font-semibold rounded-xl transition-all"
              >
                {quickSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Enquiry</>}
              </button>
            </div>
          </form>
        )}

        {quickSubmitted && (
          <div className="mt-8 max-w-lg mx-auto bg-[#00A896]/20 backdrop-blur-md border border-[#00A896]/30 rounded-2xl p-6 animate-in zoom-in-95">
            <CheckCircle2 className="w-10 h-10 text-[#00A896] mx-auto mb-3" />
            <p className="text-white font-semibold">Thank you! We will be in touch within 24 hours.</p>
            <p className="text-white/60 text-sm mt-1">For immediate help, WhatsApp us below.</p>
          </div>
        )}

        {!showForm && !quickSubmitted && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00A896] hover:bg-[#008F80] text-white font-semibold rounded-xl transition-all shadow-xl shadow-[#00A896]/25 hover:shadow-[#00A896]/40"
            >
              Request a Site Survey
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
            >
              Get a Solar Proposal
            </Link>
            <a
              href="https://wa.me/9607780000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
