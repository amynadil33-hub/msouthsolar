import React from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/images';
import { Link } from 'react-router-dom';
import {
  Sun, Fuel, TrendingUp, Home, Hotel, Building2, Landmark, Zap, Battery,
  BarChart3, Globe, ArrowRight, CheckCircle2, AlertCircle, Lightbulb
} from 'lucide-react';

const SolarMaldives: React.FC = () => {
  return (
    <PageLayout>
      <PageHero
        image={IMAGES.heroAerial}
        label="Solar in the Maldives"
        title="Why solar energy matters for the Maldives"
        description="The Maldives is accelerating its renewable energy transition. Understanding the market, the opportunity, and the right system size is the first step."
      />

      {/* Why Solar Matters */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="The Context"
                title="Why solar matters in the Maldives"
                align="left"
              />
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Maldives relies heavily on imported diesel fuel for electricity generation. Across nearly 200 inhabited islands, diesel generators remain the primary power source — creating high energy costs, supply chain vulnerability, and significant carbon emissions.
                </p>
                <p>
                  At the same time, the Maldives receives abundant solar radiation year-round, making it one of the most naturally suitable locations for solar energy in the world. Rooftop solar, hybrid solar-battery systems, and island-scale solar installations can significantly reduce diesel dependence while lowering electricity costs for homes, businesses, and public facilities.
                </p>
                <p>
                  Government policy is now actively supporting this transition. The Maldives is targeting 33% of total electricity demand from renewable energy by 2028, and programs are underway to install solar on household rooftops, hybridise outer-island power systems, and expand commercial and industrial solar capacity.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: Fuel, title: 'Diesel Dependence', desc: 'Most islands rely on imported diesel for electricity, creating high costs and supply chain risks.' },
                { icon: Sun, title: 'Abundant Solar Resource', desc: 'Year-round tropical sunlight makes the Maldives ideal for solar energy generation.' },
                { icon: TrendingUp, title: 'Rising Energy Demand', desc: 'Air-conditioning adoption and growing infrastructure are driving electricity consumption upward.' },
                { icon: Globe, title: 'Climate Commitment', desc: 'The Maldives has strong international climate commitments that solar energy directly supports.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex-shrink-0 w-11 h-11 bg-[#00A896]/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#00A896]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2540]">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="py-20 lg:py-24 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Market Data"
            title="The Maldives solar landscape in numbers"
            description="Key figures from the national energy roadmap and government investment programs."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { stat: '33%', desc: 'Renewable energy target for total electricity demand by 2028' },
              { stat: '~68.5 MW', desc: 'Solar PV installed across the Maldives as of July 2024' },
              { stat: '31 MW', desc: 'Solar PV installed on resort islands alone' },
              { stat: '200 MW', desc: 'Solar PV planned across 187 inhabited islands with battery storage' },
              { stat: '2,400 GWh', desc: 'Projected electricity consumption by 2028' },
              { stat: '25 MW', desc: 'Rooftop PV foreseen on Gulhifalhu and Thilafushi by end of 2028' },
              { stat: '6 MW', desc: 'Rooftop PV through net metering for 1,000+ consumers via ASSURE' },
              { stat: '125 MW', desc: 'Additional solar foreseen in resort and industrial islands by end of 2028' },
              { stat: '3 & 5 kW', desc: 'Standard household solar PV system sizes supported by government program' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold text-[#00A896]">{item.stat}</div>
                <p className="text-sm text-white/60 leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/30 mt-8 text-center">
            Sources: Maldives Energy Roadmap, Government Household Solar Investment Material, Public Policy Documents.
          </p>
        </div>
      </section>

      {/* Opportunity by Sector */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Sector Opportunities"
            title="Different properties, different opportunities"
            description="Every property type in the Maldives presents a unique solar opportunity — from household net metering to megawatt-scale resort installations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Home, title: 'Homes & Households', img: IMAGES.villa,
                desc: 'The government household program supports 3 kW and 5 kW rooftop systems. Net metering allows homeowners to offset electricity costs. Many residential buildings originally designed for fans have adopted air-conditioning, making solar-plus-efficiency solutions increasingly relevant.',
              },
              {
                icon: Hotel, title: 'Guest Houses & Resorts', img: IMAGES.guestHouse,
                desc: 'Resort islands already account for roughly half of installed solar capacity in the Maldives. Solar-diesel hybrid systems can significantly reduce fuel costs. From phased guest house installations to near-megawatt resort systems, hospitality properties represent a major opportunity.',
              },
              {
                icon: Building2, title: 'Commercial & Industrial', img: IMAGES.commercial,
                desc: '25 MW of rooftop PV is foreseen on future commercial and industrial developments in Gulhifalhu and Thilafushi alone. Warehouses, offices, fish processing facilities, and commercial buildings with large flat roofs are ideal candidates for solar.',
              },
              {
                icon: Landmark, title: 'Government & Public Infrastructure', img: IMAGES.government,
                desc: 'The planned installation of 200 MW of solar PV across 187 inhabited islands includes schools, hospitals, and government buildings. POISED/ASSURE-style hybridisation programs are expanding solar-diesel hybrid systems on outer islands.',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <item.icon className="w-5 h-5 text-[#00A896]" />
                    <h3 className="text-xl font-bold text-[#0A2540]">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicative System Ranges */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="System Sizing"
            title="Indicative system ranges"
            description="These are commercial positioning ranges to help you understand the typical scale of solar systems for different property types. Final sizing depends on energy use, roof area, equipment selection, and site conditions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Home, title: 'Homes', range: '3–5 kW', desc: 'Standard household packages aligned with government program' },
              { icon: Home, title: 'Larger Villas', range: '8–12 kW', desc: 'Premium villa systems for higher AC and appliance loads' },
              { icon: Hotel, title: 'Guest Houses', range: '15–100 kW', desc: 'Boutique hospitality properties with varying occupancy' },
              { icon: Hotel, title: 'Resorts', range: '300 kW – 1 MW+', desc: 'Large-scale resort installations with hybrid integration' },
              { icon: Building2, title: 'Commercial & Industrial', range: '100 kW – 2 MW+', desc: 'Warehouses, offices, factories, and commercial facilities' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#00A896]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#00A896]" />
                </div>
                <h3 className="font-bold text-[#0A2540]">{item.title}</h3>
                <div className="text-2xl font-bold text-[#00A896] mt-2">{item.range}</div>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Note:</strong> These are indicative commercial positioning ranges. Final system sizing depends on actual energy consumption, peak demand, air-conditioning load, roof area, orientation, shading, and equipment specifications. A professional site survey and load analysis is always recommended before finalising system design.
            </p>
          </div>
        </div>
      </section>

      {/* Policy & Programs */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Policy Landscape"
            title="Government programs and investment momentum"
            description="Multiple government programs and international financing mechanisms are accelerating solar adoption across the Maldives."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Household Solar Program', desc: 'Government-supported installation of 3 kW and 5 kW solar PV systems on household rooftops, making solar accessible to Maldivian families.' },
              { title: 'Net Metering', desc: 'Rooftop solar growth is being pushed through net metering, allowing homes and businesses to feed excess energy back to the grid and reduce monthly electricity bills.' },
              { title: 'ASSURE Program', desc: 'ASSURE will finance 6 MW of rooftop PV through net metering for at least 1,000 domestic and commercial consumers.' },
              { title: 'Island Hybridisation', desc: 'POISED/ASSURE-style programs are expanding solar-diesel hybrid systems across outer islands, combining solar PV with battery storage and energy management.' },
              { title: 'Commercial & Industrial Scale', desc: '25 MW of rooftop PV is foreseen on future commercial and industrial developments in Gulhifalhu and Thilafushi by end of 2028.' },
              { title: '200 MW Island Program', desc: 'Installation of 200 MW of solar PV systems, battery energy storage, and energy management systems across 187 inhabited islands.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-[#0A2540]/5 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5 text-[#0A2540]" />
                </div>
                <h3 className="font-bold text-[#0A2540]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to understand what solar can do for your property?"
        description="Request a site survey or solar proposal. Our team will assess your energy use, roof area, and conditions to recommend the right system."
      />
    </PageLayout>
  );
};

export default SolarMaldives;
