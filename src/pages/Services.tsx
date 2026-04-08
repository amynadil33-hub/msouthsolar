import React from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/images';
import { Link } from 'react-router-dom';
import {
  Sun, Battery, Wrench, Home, Hotel, Building2, Landmark, Zap, Search,
  FileText, Hammer, Cable, ClipboardCheck, MonitorCheck, Shield, ArrowRight,
  CheckCircle2, Gauge, Settings, Ruler, Wind, Droplets
} from 'lucide-react';

const Services: React.FC = () => {
  return (
    <PageLayout>
      <PageHero
        image={IMAGES.commercial}
        label="Our Services"
        title="End-to-end solar energy services for the Maldives"
        description="From site assessment to long-term maintenance, we deliver complete solar solutions tailored to island conditions."
      />

      {/* Core Services Grid */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Core Services"
            title="What we deliver"
            description="Every service is designed for the unique climate, logistics, and energy realities of the Maldives."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Sun,
                title: 'Rooftop Solar Systems',
                desc: 'Grid-tied and off-grid rooftop solar installations for homes, guest houses, resorts, commercial buildings, and public facilities. We handle everything from panel selection and layout design to electrical integration and commissioning.',
                features: ['Monocrystalline and polycrystalline panel options', 'String and micro-inverter configurations', 'Optimised panel layout for maximum yield', 'Grid-tied and off-grid system architectures'],
              },
              {
                icon: Battery,
                title: 'Hybrid Solar + Battery Systems',
                desc: 'Integrated solar-battery systems that combine rooftop solar with lithium or lead-acid battery storage. Ideal for properties that need backup power, peak shaving, or reduced diesel dependency — especially on outer islands.',
                features: ['Lithium-ion and advanced lead-acid options', 'Solar-diesel hybrid integration', 'Peak shaving and load management', 'Backup power for critical loads'],
              },
              {
                icon: Home,
                title: 'Solar for Homes & Villas',
                desc: 'Standard 3–5 kW packages for Maldivian households and 8–12 kW systems for larger villas. Net metering support, battery backup options, and systems designed for air-conditioning loads and tropical conditions.',
                features: ['3–5 kW standard household packages', '8–12 kW premium villa systems', 'Net metering application support', 'AC load optimisation'],
              },
              {
                icon: Hotel,
                title: 'Solar for Guest Houses & Resorts',
                desc: 'From 15 kW guest house systems to near-megawatt resort installations. We work with hospitality properties to reduce diesel costs, improve sustainability credentials, and integrate solar into back-of-house, service areas, and villa roofs.',
                features: ['15–100 kW guest house systems', '300 kW to 1 MW+ resort systems', 'Solar-diesel hybrid for island resorts', 'ESG and sustainability reporting support'],
              },
              {
                icon: Building2,
                title: 'Commercial & Industrial Solar',
                desc: 'Large-scale rooftop solar for warehouses, offices, factories, fish processing facilities, and commercial developments. Systems from 100 kW to 2 MW+ designed for high energy consumption and flat-roof commercial buildings.',
                features: ['100 kW to 2 MW+ system capacity', 'Flat-roof and metal-roof mounting', 'High-consumption load profiles', 'Commercial net metering support'],
              },
              {
                icon: Landmark,
                title: 'Government & Institutional Projects',
                desc: 'Solar installations for schools, hospitals, government offices, and public infrastructure on inhabited islands. We support institutional procurement processes and deliver systems that meet public-sector quality and compliance requirements.',
                features: ['Institutional procurement support', 'Public building roof assessments', 'Island-wide energy planning input', 'Compliance and documentation'],
              },
              {
                icon: Search,
                title: 'Feasibility & Load Analysis',
                desc: 'Comprehensive site assessments including roof surveys, structural evaluation, shading analysis, energy consumption review, and load profiling. We provide clear, data-driven recommendations before any commitment.',
                features: ['Roof condition and orientation survey', 'Shading and obstruction analysis', 'Energy consumption profiling', 'Financial feasibility assessment'],
              },
              {
                icon: Wrench,
                title: 'Monitoring, AMC & After-Sales',
                desc: 'Annual maintenance contracts, remote performance monitoring, scheduled cleaning, and responsive service support. We protect your investment with proactive care designed for tropical marine conditions.',
                features: ['Remote performance monitoring', 'Scheduled preventive maintenance', 'Panel cleaning and inspection', 'Responsive service and repairs'],
              },
            ].map((svc, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#00A896]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00A896] transition-colors">
                    <svc.icon className="w-7 h-7 text-[#00A896] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0A2540]">{svc.title}</h3>
                    <p className="text-gray-600 leading-relaxed mt-3">{svc.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {svc.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#00A896] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structural & Mounting */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Structure & Mounting"
                title="Structural design and mounting solutions"
                description="The mounting system is the foundation of every solar installation. We take it seriously."
                align="left"
              />
              <p className="text-gray-700 leading-relaxed mb-6">
                In the Maldives, rooftop structures face unique challenges: high humidity, salt-laden air, strong tropical winds, and varying roof types across villas, guest houses, resort service buildings, warehouses, and institutional facilities. A poorly designed mounting system can lead to structural damage, water ingress, and reduced system life.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our structural and mounting service covers every aspect — from initial roof assessment to custom mounting design and weather-appropriate material selection.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Ruler, title: 'Rooftop Structure Assessment', desc: 'Load-bearing capacity evaluation, roof condition inspection, and structural suitability analysis.' },
                  { icon: Settings, title: 'Custom Mounting Design', desc: 'Tailored mounting frameworks for flat roofs, pitched roofs, metal roofs, and concrete structures.' },
                  { icon: Wind, title: 'Weather & Site Considerations', desc: 'Wind load calculations, corrosion-resistant materials, and tropical climate-appropriate fastening systems.' },
                  { icon: Droplets, title: 'Waterproofing Integration', desc: 'Mounting solutions that maintain roof integrity and prevent water ingress at penetration points.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0A2540]/5 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#0A2540]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2540]">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={IMAGES.batteryRoom} alt="Engineering environment" className="rounded-2xl shadow-2xl w-full" />
              <div className="mt-6 bg-white rounded-xl p-6 border border-gray-100">
                <h4 className="font-bold text-[#0A2540] mb-3">Property types we serve</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['Villas & homes', 'Guest houses', 'Resort service blocks', 'Back-of-house roofs', 'Warehouses', 'Institutional roofs', 'Commercial buildings', 'Industrial facilities'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical Integration */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Technical Excellence"
            title="Electrical integration and commissioning"
            description="Every system is professionally integrated, tested, and commissioned to ensure safe, reliable, and compliant operation."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cable, title: 'Electrical Design', desc: 'Single-line diagrams, cable sizing, protection coordination, and earthing design.' },
              { icon: Zap, title: 'Inverter Integration', desc: 'String inverter and micro-inverter installation, configuration, and grid synchronisation.' },
              { icon: Gauge, title: 'Testing & Commissioning', desc: 'Insulation resistance, earth continuity, polarity checks, and performance verification.' },
              { icon: MonitorCheck, title: 'Monitoring Setup', desc: 'Remote monitoring platform configuration for real-time performance tracking.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 hover:shadow-lg transition-all border border-gray-100">
                <div className="w-12 h-12 bg-[#00A896]/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#00A896]" />
                </div>
                <h3 className="font-bold text-[#0A2540]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to discuss your solar project?"
        description="Whether it is a home, guest house, resort, or commercial facility — our team is ready to assess your site and design a system that works."
      />
    </PageLayout>
  );
};

export default Services;
