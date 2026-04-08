import React from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/images';
import { Sun, Target, Eye, Heart, Shield, Users, Zap, Globe, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <PageLayout>
      <PageHero
        image={IMAGES.engineers}
        label="About Us"
        title="The Maldives' dedicated solar energy brand"
        description="M South Solar was created to bring focused, specialist solar capability to the Maldives — for homes, hospitality, industry, and public infrastructure."
      />

      {/* Intro */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Our Story"
                title="A solar brand built for island conditions"
                align="left"
              />
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  M South Solar is the dedicated solar energy brand associated with Blue Builders International, a Maldives-based multi-service company with over 15 years of experience and more than 100 completed projects across the country.
                </p>
                <p>
                  We recognised that the Maldives solar market needs more than general contractors offering solar as a side service. It needs a focused brand with the technical depth, partner network, and island-specific knowledge to deliver systems that perform reliably in tropical marine conditions — year after year.
                </p>
                <p>
                  M South Solar was created to fill that gap: a specialist solar company that understands rooftop structures, hybrid energy systems, battery integration, net metering, and the logistical realities of working across atolls.
                </p>
                <p>
                  Backed by strategic partnerships with Rahimafrooz Renewable Energy Ltd. (Bangladesh) and MM / Mohan Mutha Exports (India), we bring together local execution strength, regional solar expertise, and international infrastructure capability.
                </p>
              </div>
            </div>
            <div>
              <img src={IMAGES.villa} alt="Solar villa in Maldives" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Why a Dedicated Solar Brand */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Approach"
            title="Why a dedicated solar brand"
            description="The Maldives renewable energy market is growing rapidly. We believe it deserves a brand that is fully committed to solar — not one that treats it as an afterthought."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Focused Expertise', desc: 'Solar is not a side service for us. It is our entire focus — from system design and structural engineering to installation, commissioning, and long-term maintenance.' },
              { icon: Shield, title: 'Technical Credibility', desc: 'Our partnerships with Rahimafrooz and MM bring decades of solar engineering, manufacturing, and infrastructure experience to every project.' },
              { icon: Globe, title: 'Maldives-Specific Knowledge', desc: 'We understand island logistics, marine climate conditions, rooftop structures, and the energy realities of atoll communities.' },
              { icon: Users, title: 'Multi-Sector Capability', desc: 'From a 3 kW home system to a megawatt-scale resort installation, we serve residential, hospitality, commercial, industrial, and government clients.' },
              { icon: Zap, title: 'End-to-End Delivery', desc: 'We manage the entire project lifecycle — consultation, survey, design, procurement, installation, commissioning, and after-sales service.' },
              { icon: Heart, title: 'Long-Term Partnership', desc: 'We are not here for a single installation. We build long-term relationships through maintenance contracts, monitoring, and responsive service.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#00A896]/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#00A896]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                label: 'Our Mission',
                title: 'Mission',
                desc: 'To deliver reliable, high-quality solar energy systems for Maldives homes, hospitality properties, commercial facilities, and public infrastructure — reducing diesel dependence and building long-term energy resilience across island communities.',
              },
              {
                icon: Eye,
                label: 'Our Vision',
                title: 'Vision',
                desc: 'To be the most trusted solar energy partner in the Maldives — known for technical excellence, island-specific expertise, and the long-term performance of every system we install.',
              },
              {
                icon: Heart,
                label: 'Our Values',
                title: 'Values',
                desc: 'Technical integrity. Transparent communication. Long-term commitment. Island-first thinking. We believe in doing the work properly, explaining it clearly, and standing behind it for years to come.',
              },
            ].map((item, i) => (
              <div key={i} className="relative bg-gradient-to-br from-[#0A2540] to-[#1E3A5F] rounded-2xl p-10 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#00A896]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-12 h-12 bg-[#00A896]/20 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-[#00A896]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00A896]">{item.label}</span>
                  <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed mt-4">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Builders Connection */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src={IMAGES.commercial} alt="Commercial project" className="rounded-2xl shadow-2xl w-full" />
            </div>
            <div>
              <SectionHeading
                label="Our Foundation"
                title="Associated with Blue Builders International"
                align="left"
              />
              <p className="text-gray-700 leading-relaxed mb-6">
                Blue Builders International is a Maldives-based multi-service company offering construction, infrastructure, and project management services. With over 15 years of experience, 100+ completed projects, and 1,000+ satisfied clients, Blue Builders brings proven execution capability and deep local knowledge.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                M South Solar was established as the dedicated solar brand within this ecosystem — bringing the same standards of project management, quality, and client service to the renewable energy sector.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: '100+', label: 'Projects Completed' },
                  { num: '15+', label: 'Years Experience' },
                  { num: '1,000+', label: 'Satisfied Clients' },
                  { num: '20+', label: 'Team Members' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                    <div className="text-2xl font-bold text-[#00A896]">{stat.num}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
};

export default About;
