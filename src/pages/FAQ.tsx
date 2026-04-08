import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/images';
import { ChevronDown, Search } from 'lucide-react';

const faqs = [
  {
    category: 'General',
    questions: [
      { q: 'What is M South Solar?', a: 'M South Solar is the dedicated solar energy brand associated with Blue Builders International. We specialise in rooftop solar, hybrid solar-battery systems, and long-term energy service for homes, guest houses, resorts, commercial facilities, and government projects across the Maldives.' },
      { q: 'Where does M South Solar operate?', a: 'We operate across the Maldives, including Malé, Hulhumalé, Addu City, and outer islands. Our team has experience working across atolls and understands the logistics of island-based solar installations.' },
      { q: 'Who are your strategic partners?', a: 'We work with Rahimafrooz Renewable Energy Ltd. (Bangladesh) as a strategic technical partner with 25+ years of solar experience, and MM / Mohan Mutha Exports (India) as an infrastructure and project partner with 6+ decades of experience and direct Maldives project history.' },
    ],
  },
  {
    category: 'Solar Systems',
    questions: [
      { q: 'What size solar system does my home need?', a: 'The government household program supports 3 kW and 5 kW systems. Larger villas may need 8–12 kW. Final sizing depends on your electricity consumption, air-conditioning load, roof area, and goals. We recommend a professional site survey and load analysis to determine the right size.' },
      { q: 'Can solar work for a resort in the Maldives?', a: 'Yes. Resort islands already account for roughly half of installed solar capacity in the Maldives. Systems range from 300 kW to over 1 MW. Solar-diesel hybrid systems can significantly reduce fuel costs while improving sustainability credentials.' },
      { q: 'What is a hybrid solar-battery system?', a: 'A hybrid system combines rooftop solar panels with battery storage and, in many cases, existing diesel generators. Solar generates electricity during the day, batteries store excess energy for evening use, and diesel generators provide backup when needed. This reduces fuel consumption and improves energy reliability.' },
      { q: 'What is net metering?', a: 'Net metering allows you to feed excess solar energy back to the electricity grid and receive credit on your electricity bill. This means your solar system can offset costs even when you are not using all the energy it generates during peak sunlight hours.' },
    ],
  },
  {
    category: 'Installation',
    questions: [
      { q: 'How long does a solar installation take?', a: 'Timeline varies by system size and complexity. A residential system (3–5 kW) can typically be installed in 2–5 days. Larger commercial or resort systems may take several weeks. The full project timeline — from consultation to commissioning — depends on site survey, design, equipment procurement, and scheduling.' },
      { q: 'Will solar panels damage my roof?', a: 'No, when installed correctly. We conduct a thorough roof structure assessment before installation and use appropriate mounting systems designed for your roof type. Our mounting solutions are designed to maintain roof integrity and prevent water ingress.' },
      { q: 'What happens during a site survey?', a: 'Our engineers visit your property to assess roof condition, orientation, structural suitability, shading, and available area. We also review your electricity consumption and load profile. This information is used to design a system that is properly sized and optimally configured for your property.' },
    ],
  },
  {
    category: 'Costs & Savings',
    questions: [
      { q: 'How much does a solar system cost?', a: 'Cost depends on system size, equipment selection, site conditions, and installation complexity. We provide detailed proposals after a site survey and load analysis. Contact us for a no-obligation assessment and quote.' },
      { q: 'How much can I save on electricity?', a: 'Savings depend on your current electricity consumption, system size, and net metering arrangement. Many homeowners can offset a significant portion of their monthly electricity bill. For resorts and commercial properties, the fuel savings from reduced diesel consumption can be substantial.' },
      { q: 'Is financing available for solar systems?', a: 'Financing options vary. Government programs like the household solar initiative may offer support. We can discuss available options during the consultation process and help you understand the investment and payback timeline.' },
    ],
  },
  {
    category: 'Maintenance & Warranty',
    questions: [
      { q: 'What warranties are provided?', a: 'All solar panels, inverters, and batteries are covered by manufacturer warranties. Our installation work is backed by a workmanship warranty covering structural mounting, electrical connections, and system integration. Specific warranty durations depend on the equipment selected for your project.' },
      { q: 'Do solar panels need maintenance?', a: 'Yes, regular maintenance helps ensure optimal performance. In the Maldives, salt spray, dust, and tropical weather can affect panel efficiency. We offer annual maintenance contracts that include cleaning, inspection, performance monitoring, and responsive service support.' },
      { q: 'What happens if something goes wrong?', a: 'We provide responsive service support for troubleshooting, repairs, and system adjustments. Our monitoring systems can detect performance issues early, and our maintenance team is available to address problems promptly.' },
    ],
  },
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const toggle = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const filteredFaqs = faqs.map((cat) => ({
    ...cat,
    questions: cat.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.questions.length > 0);

  return (
    <PageLayout>
      <PageHero
        image={IMAGES.batteryRoom}
        label="FAQ"
        title="Frequently asked questions"
        description="Answers to common questions about solar energy, system sizing, installation, and maintenance in the Maldives."
      />

      <section className="py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896] transition-colors"
            />
          </div>

          {/* FAQ Sections */}
          <div className="space-y-10">
            {filteredFaqs.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-xl font-bold text-[#0A2540] mb-4">{cat.category}</h2>
                <div className="space-y-2">
                  {cat.questions.map((item, i) => {
                    const key = `${cat.category}-${i}`;
                    const isOpen = openItems.has(key);
                    return (
                      <div key={key} className="border border-gray-100 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-[#0A2540] pr-4">{item.q}</span>
                          <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No matching questions found. Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Still have questions?"
        description="Get in touch with our team. We are happy to answer any questions about solar energy for your property in the Maldives."
      />
    </PageLayout>
  );
};

export default FAQ;
