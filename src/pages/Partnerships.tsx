import React from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/images';
import { Sun, Globe, Building2, Zap, CheckCircle2, ArrowRight, Shield, Users, Factory } from 'lucide-react';

const Partnerships: React.FC = () => {
  return (
    <PageLayout>
      <PageHero
        image={IMAGES.resort}
        label="Strategic Partners"
        title="Partnerships that strengthen every project"
        description="M South Solar is supported by strategic partnerships that bring deep solar expertise and international infrastructure capability to the Maldives market."
      />

      {/* Intro */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              Delivering reliable solar energy systems in the Maldives requires more than local presence. It requires technical depth, supply chain strength, and proven engineering capability. Our partnerships are designed to bring exactly that — without overclaiming or overpromising.
            </p>
          </div>

          {/* Rahimafrooz */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[#00A896] mb-3">Strategic Technical Partner</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540]">Rahimafrooz Renewable Energy Ltd.</h2>
                <p className="text-sm text-gray-500 mt-1 mb-6">Bangladesh</p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Rahimafrooz Renewable Energy Ltd. is one of the pioneering solar companies in Bangladesh, with more than 25 years of experience in the renewable energy sector. The company's work has contributed to lighting up millions of homes, with over 1.7 million solar home systems installed across Bangladesh over 25 years as part of the broader solar movement.
                  </p>
                  <p>
                    Rahimafrooz's capabilities span rooftop solar, building-integrated photovoltaics (BIPV), solar pumps, mini-grids, manufacturing, engineering, supply chain management, and last-mile delivery. This breadth of experience makes Rahimafrooz a strong technical and industry partner for M South Solar's work in the Maldives.
                  </p>
                  <p>
                    As a strategic technical partner, Rahimafrooz brings deep solar engineering knowledge, equipment sourcing capability, and system design experience that strengthens every project we undertake.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { num: '25+', label: 'Years in Renewable Energy' },
                    { num: '1.7M+', label: 'Solar Home Systems Installed' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <div className="text-2xl font-bold text-[#00A896]">{stat.num}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#0A2540] rounded-2xl p-8 text-white">
                  <h4 className="font-bold text-lg mb-4">Capability Areas</h4>
                  <div className="space-y-3">
                    {[
                      'Rooftop solar systems',
                      'Building-integrated photovoltaics (BIPV)',
                      'Solar water pumping systems',
                      'Mini-grid design and deployment',
                      'Solar manufacturing and engineering',
                      'Supply chain and last-mile delivery',
                      'Solar home system programs',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A896] flex-shrink-0" />
                        <span className="text-white/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#00A896]/5 rounded-2xl p-6 border border-[#00A896]/20">
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    "Rahimafrooz's renewable energy work has been lighting up millions of homes across Bangladesh. Their deep experience in solar engineering, manufacturing, and deployment strengthens our ability to deliver reliable systems in the Maldives."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MM / Mohan Mutha */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-4">
                <div className="bg-[#0A2540] rounded-2xl p-8 text-white">
                  <h4 className="font-bold text-lg mb-4">Project Categories</h4>
                  <div className="space-y-3">
                    {[
                      'Marine infrastructure',
                      'Roads and bridges',
                      'Resort construction',
                      'Commercial and residential building',
                      'Water supply and sewerage',
                      'Renewable energy projects',
                      'Dredging and reclamation',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00A896] flex-shrink-0" />
                        <span className="text-white/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#0A2540] mb-3">Maldives Project Experience</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-[#00A896] flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">Solar project in the Maldives — 21.6 kW plant using Waaree 540 Wp modules, Growatt 20 kW inverter, and aluminium long-rail structure</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="w-4 h-4 text-[#00A896] flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-600">Design and construction of water supply and sewerage facilities for six islands in the Republic of Maldives</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[#00A896] mb-3">Infrastructure & Project Partner</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540]">MM / Mohan Mutha Exports</h2>
                <p className="text-sm text-gray-500 mt-1 mb-6">India — Chennai Headquarters</p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded in 1957 and headquartered in Chennai, MM / Mohan Mutha Exports has over six decades of expertise in infrastructure, construction, and project delivery. The company maintains presence across India, Singapore, UAE, Tanzania, and the Maldives, with 50+ awards and accreditations and 70+ products and services.
                  </p>
                  <p>
                    MM's project portfolio includes marine infrastructure, roads and bridges, resort construction, commercial and residential building, water supply and sewerage, renewable energy, and dredging and reclamation. This breadth of infrastructure capability, combined with direct Maldives project experience, makes MM a valuable project and infrastructure partner.
                  </p>
                  <p>
                    As a project partner, MM brings execution strength, supply chain capability, and on-the-ground Maldives experience that supports M South Solar's ability to deliver complex solar installations across the country.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { num: '1957', label: 'Founded' },
                    { num: '50+', label: 'Awards' },
                    { num: '70+', label: 'Products & Services' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <div className="text-2xl font-bold text-[#00A896]">{stat.num}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Approach"
            title="How our partnerships strengthen your project"
            description="Each partnership brings specific strengths that directly benefit the quality, reliability, and long-term performance of your solar installation."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Technical Depth', desc: 'Access to solar engineering expertise, equipment knowledge, and system design experience built over decades of renewable energy work.' },
              { icon: Factory, title: 'Supply Chain Strength', desc: 'Reliable access to quality solar panels, inverters, batteries, and mounting systems through established international supply networks.' },
              { icon: Users, title: 'Execution Capability', desc: 'Combined local knowledge and international project management experience to deliver installations on time and to specification.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 text-center hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-[#00A896]/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-[#00A896]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
};

export default Partnerships;
