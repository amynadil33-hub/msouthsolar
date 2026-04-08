import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { IMAGES } from '@/lib/images';
import { supabase } from '@/lib/supabase';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, MessageCircle, Send, Upload, FileText,
  Building2, Hotel, Home, Landmark, CheckCircle2, ArrowRight, Download,
  Loader2, AlertTriangle, X
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', island: '', propertyType: '',
    monthlyBill: '', batteryBackup: '', preferredContact: '', message: '',
  });
  const [billFile, setBillFile] = useState<File | null>(null);
  const [roofFile, setRoofFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [leadId, setLeadId] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const uploadFile = async (file: File, folder: string): Promise<string | null> => {
    try {
      const ext = file.name.split('.').pop();
      const fileName = `${folder}/${Date.now()}_${Math.random().toString(36).substring(7)}.${ext}`;
      const { data, error: uploadError } = await supabase.storage
        .from('lead-uploads')
        .upload(fileName, file, { cacheControl: '3600', upsert: false });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        return null;
      }

      const { data: urlData } = supabase.storage
        .from('lead-uploads')
        .getPublicUrl(data.path);

      return urlData.publicUrl;
    } catch (err) {
      console.error('File upload failed:', err);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Upload files if present
      let billFileUrl: string | null = null;
      let roofFileUrl: string | null = null;

      if (billFile) {
        billFileUrl = await uploadFile(billFile, 'bills');
      }
      if (roofFile) {
        roofFileUrl = await uploadFile(roofFile, 'roofs');
      }

      // Insert lead directly via Supabase client
      const { data, error: insertError } = await supabase
        .from('leads')
        .insert({
          name: formData.name.trim(),
          phone: formData.phone.trim() || null,
          email: formData.email.trim() || null,
          island: formData.island.trim() || null,
          property_type: formData.propertyType || null,
          monthly_bill: formData.monthlyBill.trim() || null,
          battery_backup: formData.batteryBackup || null,
          preferred_contact: formData.preferredContact || null,
          message: formData.message.trim() || null,
          bill_file_url: billFileUrl,
          roof_file_url: roofFileUrl,
          source: 'contact_form',
          status: 'new',
        })
        .select()
        .single();

      if (insertError) {
        console.error('Insert error:', insertError);
        throw new Error(insertError.message || 'Failed to save your enquiry.');
      }

      setLeadId(data?.id || null);
      setSubmitted(true);
    } catch (err: any) {
      console.error('Submit error:', err);
      setError(err.message || 'Failed to submit. Please try again or contact us on WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-lg text-center">
            <div className="w-20 h-20 bg-[#00A896]/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in-50 duration-500">
              <CheckCircle2 className="w-10 h-10 text-[#00A896]" />
            </div>
            <h1 className="text-3xl font-bold text-[#0A2540]">Thank you for your enquiry</h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We have received your details{leadId ? ` (ref: ${leadId.slice(0, 8)})` : ''} and will be in touch within 24 hours. If you need immediate assistance, please contact us on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link to="/" className="px-6 py-3 bg-[#0A2540] text-white font-semibold rounded-xl hover:bg-[#0A2540]/90 transition-colors">
                Back to Home
              </Link>
              <a
                href="https://wa.me/9607780000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20BD5A] transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHero
        image={IMAGES.sunset}
        label="Contact Us"
        title="Let's discuss your solar project"
        description="Whether you need a site survey, solar proposal, or just want to understand your options — we are here to help."
      />

      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-2">Send us your details</h2>
              <p className="text-gray-600 mb-8">Fill in the form below and our team will get back to you within 24 hours.</p>

              {/* Error Banner */}
              {error && (
                <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl animate-in slide-in-from-top-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-red-800 font-medium">Submission failed</p>
                    <p className="text-sm text-red-600 mt-0.5">{error}</p>
                  </div>
                  <button onClick={() => setError(null)} className="text-red-400 hover:text-red-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] transition-colors"
                      placeholder="Your full name"
                      disabled={submitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] transition-colors"
                      placeholder="+960 xxx xxxx"
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] transition-colors"
                      placeholder="you@example.com"
                      disabled={submitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Island / Location *</label>
                    <input
                      type="text" name="island" required value={formData.island} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] transition-colors"
                      placeholder="e.g. Malé, Hulhumalé, Addu City"
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Property Type *</label>
                    <select
                      name="propertyType" required value={formData.propertyType} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] transition-colors bg-white"
                      disabled={submitting}
                    >
                      <option value="">Select property type</option>
                      <option value="home">Home / Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="guesthouse">Guest House</option>
                      <option value="resort">Resort</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="industrial">Industrial Facility</option>
                      <option value="government">Government / Institutional</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Monthly Electricity Bill (MVR)</label>
                    <input
                      type="text" name="monthlyBill" value={formData.monthlyBill} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] transition-colors"
                      placeholder="Approximate monthly amount"
                      disabled={submitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Battery Backup Needed?</label>
                    <select
                      name="batteryBackup" value={formData.batteryBackup} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] transition-colors bg-white"
                      disabled={submitting}
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="unsure">Not sure — advise me</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Contact Method</label>
                    <select
                      name="preferredContact" value={formData.preferredContact} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] transition-colors bg-white"
                      disabled={submitting}
                    >
                      <option value="">Select</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                </div>

                {/* File Uploads */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Upload Electricity Bill</label>
                    <label className={`flex items-center gap-3 px-4 py-3 border border-dashed rounded-xl cursor-pointer transition-colors ${billFile ? 'border-[#00A896] bg-[#00A896]/5' : 'border-gray-300 hover:border-[#00A896]'}`}>
                      <Upload className={`w-5 h-5 ${billFile ? 'text-[#00A896]' : 'text-gray-400'}`} />
                      <span className={`text-sm truncate ${billFile ? 'text-[#00A896] font-medium' : 'text-gray-500'}`}>
                        {billFile ? billFile.name : 'Choose file (PDF, JPG, PNG)'}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="hidden"
                        disabled={submitting}
                        onChange={(e) => setBillFile(e.target.files?.[0] || null)}
                      />
                    </label>
                    {billFile && (
                      <button type="button" onClick={() => setBillFile(null)} className="text-xs text-gray-400 hover:text-red-500 mt-1">
                        Remove file
                      </button>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Upload Roof Photo</label>
                    <label className={`flex items-center gap-3 px-4 py-3 border border-dashed rounded-xl cursor-pointer transition-colors ${roofFile ? 'border-[#00A896] bg-[#00A896]/5' : 'border-gray-300 hover:border-[#00A896]'}`}>
                      <Upload className={`w-5 h-5 ${roofFile ? 'text-[#00A896]' : 'text-gray-400'}`} />
                      <span className={`text-sm truncate ${roofFile ? 'text-[#00A896] font-medium' : 'text-gray-500'}`}>
                        {roofFile ? roofFile.name : 'Choose file (JPG, PNG)'}
                      </span>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        className="hidden"
                        disabled={submitting}
                        onChange={(e) => setRoofFile(e.target.files?.[0] || null)}
                      />
                    </label>
                    {roofFile && (
                      <button type="button" onClick={() => setRoofFile(null)} className="text-xs text-gray-400 hover:text-red-500 mt-1">
                        Remove file
                      </button>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Message</label>
                  <textarea
                    name="message" rows={4} value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] transition-colors resize-none"
                    placeholder="Tell us about your project, goals, or any specific questions..."
                    disabled={submitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00A896] hover:bg-[#008F80] disabled:bg-[#00A896]/60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#00A896]/25 hover:shadow-[#00A896]/40"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-[#0A2540] mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:+9607780000" className="flex items-center gap-3 text-gray-700 hover:text-[#00A896] transition-colors">
                    <Phone className="w-5 h-5 text-[#00A896]" />
                    <span className="text-sm">+960 791 2865</span>
                  </a>
                  <a href="mailto:info@msouthsolar.mv" className="flex items-center gap-3 text-gray-700 hover:text-[#00A896] transition-colors">
                    <Mail className="w-5 h-5 text-[#00A896]" />
                    <span className="text-sm">info@msouthsolar.mv</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-[#00A896]" />
                    <span className="text-sm">G.Fanas, Malé, Republic of Maldives</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/9607912865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full mt-6 px-4 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>

              {/* Quick Request Cards */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#0A2540]">Quick Requests</h3>
                {[
                  { icon: FileText, title: 'Request a Site Survey', desc: 'Our engineers will visit your property to assess suitability.' },
                  { icon: Download, title: 'Request Company Profile', desc: 'Download our company profile and capability statement.' },
                  { icon: Hotel, title: 'Resort Energy Assessment', desc: 'Comprehensive energy review for hospitality properties.' },
                  { icon: Building2, title: 'Commercial Feasibility Study', desc: 'Detailed feasibility analysis for commercial and industrial sites.' },
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const formEl = document.querySelector('form');
                      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                      setFormData(prev => ({ ...prev, message: `I would like to: ${item.title}` }));
                    }}
                    className="w-full flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#00A896]/30 hover:shadow-md transition-all text-left group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#00A896]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00A896] transition-colors">
                      <item.icon className="w-5 h-5 text-[#00A896] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2540] text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
