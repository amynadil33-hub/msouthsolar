import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '@/lib/images';
import PageLayout from './PageLayout';
import SectionHeading from './SectionHeading';
import CTASection from './CTASection';
import {
  ArrowRight, Sun, Battery, Wrench, Building2, Home, Hotel, Landmark,
  ClipboardCheck, Search, FileText, Hammer, Zap, ShieldCheck, BarChart3,
  Globe, Leaf, TrendingUp, MessageCircle, Phone, ChevronRight, CheckCircle2,
  Settings, Gauge, Cable, MonitorCheck
} from 'lucide-react';

/* ─── Animated Counter ─── */
const Counter: React.FC<{ end: number; suffix?: string; label: string }> = ({ end, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-[#00A896]">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-500 mt-2">{label}</div>
    </div>
  );
};

/* ─── Home Page ─── */
const AppLayout: React.FC = () => {
  return (
    <PageLayout>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.heroAerial} alt="Maldives aerial view with solar installations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 via-[#0A2540]/70 to-[#0A2540]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-[#00A896] uppercase tracking-[0.1em] mb-6 border border-white/10">
              <Sun className="w-3.5 h-3.5" />
              Solar Energy for the Maldives
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Built for island conditions.{' '}
              <span className="text-[#00A896]">Designed for long-term savings.</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl">
              M South Solar delivers rooftop solar, hybrid solar, battery-integrated systems, and long-term service for Maldives homes, hospitality properties, commercial facilities, and institutional clients.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00A896] hover:bg-[#008F80] text-white font-semibold rounded-xl transition-all shadow-xl shadow-[#00A896]/25 hover:shadow-[#00A896]/40 text-base"
              >
                Request a Site Survey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all text-base"
              >
                Get a Solar Proposal
              </Link>
              <a
                href="https://wa.me/9607780000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-all text-base"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ═══ TRUST & PARTNER STRIP ═══ */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Ecosystem"
            title="Backed by experience. Built for the Maldives."
            description="M South Solar brings together local execution strength, regional solar expertise, and international infrastructure capability."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'M South Solar',
                role: 'Specialist Solar Brand',
                desc: 'The dedicated solar energy brand for the Maldives — focused exclusively on rooftop solar, hybrid systems, battery storage, and long-term energy service for island conditions.',
                color: 'bg-[#00A896]',
              },
              {
                name: 'Blue Builders International',
                role: 'Associated Company',
                desc: 'A Maldives-based multi-service company with 15+ years of experience, 100+ projects completed, and 1,000+ satisfied clients across construction and infrastructure.',
                color: 'bg-[#0A2540]',
              },
              {
                name: 'Rahimafrooz Renewable Energy',
                role: 'Strategic Technical Partner',
                desc: 'One of the pioneering solar companies in Bangladesh with 25+ years of renewable energy experience. Rooftop solar, mini-grids, manufacturing, and engineering capability.',
                color: 'bg-[#1E3A5F]',
              },
              {
                name: 'MM / Mohan Mutha Exports',
                role: 'Infrastructure & Project Partner',
                desc: 'Founded in 1957, headquartered in Chennai with presence across India, Singapore, UAE, Tanzania, and the Maldives. 6+ decades of infrastructure expertise with Maldives project experience.',
                color: 'bg-[#2D5016]',
              },
            ].map((partner, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className={`w-12 h-12 ${partner.color} rounded-xl flex items-center justify-center mb-5`}>
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#00A896] transition-colors">{partner.name}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#00A896] mt-1 block">{partner.role}</span>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MARKET SEGMENT CARDS ═══ */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Who We Serve"
            title="Solar solutions for every property type"
            description="From individual homes to large-scale resort and industrial installations, we design and deliver systems tailored to Maldives conditions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: 'Homes & Villas', desc: '3–12 kW rooftop systems for households and premium villas. Net metering, battery backup, and long-term savings.', img: IMAGES.villa, range: '3–12 kW' },
              { icon: Hotel, title: 'Guest Houses & Resorts', desc: '15 kW to 1 MW+ systems for hospitality properties. Reduce diesel costs, improve sustainability credentials.', img: IMAGES.resort, range: '15 kW – 1 MW+' },
              { icon: Building2, title: 'Commercial & Industrial', desc: '100 kW to 2 MW+ systems for warehouses, offices, factories, and commercial facilities across the Maldives.', img: IMAGES.commercial, range: '100 kW – 2 MW+' },
              { icon: Landmark, title: 'Government Projects', desc: 'Institutional solar for schools, hospitals, government buildings, and public infrastructure on inhabited islands.', img: IMAGES.government, range: 'Custom' },
            ].map((seg, i) => (
              <Link
                key={i}
                to="/services"
                className="group relative rounded-2xl overflow-hidden h-[420px] flex flex-col justify-end shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img src={seg.img} alt={seg.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/50 to-transparent" />
                <div className="relative p-6 lg:p-8">
                  <span className="inline-block px-3 py-1 bg-[#00A896]/20 text-[#00A896] text-xs font-semibold rounded-full mb-3">{seg.range}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{seg.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{seg.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#00A896] text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY M SOUTH SOLAR ═══ */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Why Choose Us"
                title="Why M South Solar"
                description="We combine Maldives-specific knowledge with partner-backed technical capability to deliver solar systems that perform in island conditions."
                align="left"
              />
              <div className="space-y-5">
                {[
                  { icon: Globe, title: 'Maldives-focused solar solutions', desc: 'Every system is designed for the unique climate, logistics, and energy realities of island life.' },
                  { icon: Settings, title: 'Full-scope delivery', desc: 'Design, structural assessment, installation, commissioning, and ongoing maintenance — all under one roof.' },
                  { icon: ShieldCheck, title: 'Partner-backed technical capability', desc: 'Strategic partnerships with Rahimafrooz and MM bring deep solar engineering and infrastructure experience.' },
                  { icon: Battery, title: 'Hybrid solar and battery options', desc: 'Integrated battery storage for backup power, peak shaving, and reduced diesel dependency.' },
                  { icon: Gauge, title: 'Long-term service and monitoring', desc: 'Preventive maintenance, performance monitoring, and responsive service to protect your investment.' },
                  { icon: TrendingUp, title: 'Island logistics expertise', desc: 'We understand the realities of working across atolls — from equipment shipping to remote-island installations.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 bg-[#00A896]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00A896] transition-colors">
                      <item.icon className="w-5 h-5 text-[#00A896] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A2540]">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={IMAGES.engineers} alt="Solar engineers on rooftop" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[240px]">
                <div className="text-3xl font-bold text-[#00A896]">15+</div>
                <div className="text-sm text-gray-600 mt-1">Years of project experience through Blue Builders International</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MALDIVES MARKET CONTEXT ═══ */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.futuristicIsland} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0A2540]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Market Opportunity"
            title="Solar in the Maldives: Why Now"
            description="The Maldives is accelerating its transition to renewable energy. Government programs, net metering, and rising energy costs are creating unprecedented opportunity."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Counter end={33} suffix="%" label="Renewable energy target by 2028" />
            <Counter end={68} suffix=" MW" label="Solar PV installed as of 2024" />
            <Counter end={200} suffix=" MW" label="Solar PV planned across 187 islands" />
            <Counter end={2400} suffix=" GWh" label="Projected electricity demand by 2028" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Household Solar Program', desc: 'The government is supporting installation of 3 kW and 5 kW solar PV systems on household rooftops, with net metering enabling homeowners to offset electricity costs.' },
              { title: 'Resort Island Opportunity', desc: 'Resort islands already account for roughly half of installed solar capacity. An additional 125 MW is foreseen in resort and industrial islands by end of 2028.' },
              { title: 'Outer-Island Hybridization', desc: 'POISED/ASSURE-style programs are expanding solar-diesel hybrid systems across outer islands, with 6 MW of rooftop PV through net metering for 1,000+ consumers.' },
              { title: 'Net Metering Growth', desc: 'Rooftop solar growth is being pushed through net metering, allowing homes and businesses to feed excess energy back to the grid and reduce monthly bills.' },
              { title: 'Commercial & Industrial Scale', desc: '25 MW of rooftop PV is foreseen on future commercial and industrial developments in Gulhifalhu and Thilafushi by end of 2028.' },
              { title: 'Rising Energy Demand', desc: 'Many buildings originally designed for fans have adopted air-conditioning, driving up energy consumption. Solar-plus-efficiency solutions are increasingly relevant.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/solar-maldives" className="inline-flex items-center gap-2 text-[#00A896] font-semibold hover:gap-3 transition-all">
              Explore the full Maldives solar landscape <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="End-to-end solar services"
            description="From initial consultation to long-term maintenance, we manage every stage of your solar project."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Solar EPC & Turnkey Execution', desc: 'Complete engineering, procurement, and construction for rooftop and hybrid solar systems.' },
              { icon: Search, title: 'Site Assessment & Feasibility', desc: 'Roof surveys, load analysis, shading studies, and energy consumption reviews.' },
              { icon: FileText, title: 'System Design & Engineering', desc: 'Custom system design including panel layout, inverter sizing, and electrical integration.' },
              { icon: Hammer, title: 'Structural & Mounting Solutions', desc: 'Roof structure assessment, mounting design, and weather-appropriate installation frameworks.' },
              { icon: Battery, title: 'Hybrid Solar + Battery', desc: 'Integrated battery storage for energy independence, backup power, and peak demand management.' },
              { icon: Cable, title: 'Net Metering Support', desc: 'Application support, grid connection, and metering setup for feed-in tariff benefits.' },
              { icon: ClipboardCheck, title: 'Installation & Commissioning', desc: 'Professional installation, testing, and system commissioning with safety compliance.' },
              { icon: Wrench, title: 'Annual Maintenance & Service', desc: 'Preventive maintenance, cleaning, performance monitoring, and responsive service support.' },
            ].map((svc, i) => (
              <Link
                key={i}
                to="/services"
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#00A896]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#00A896]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#00A896] transition-colors">
                  <svc.icon className="w-6 h-6 text-[#00A896] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[#0A2540] group-hover:text-[#00A896] transition-colors">{svc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INSTALLATION PROCESS ═══ */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Process"
            title="From consultation to clean energy"
            description="A structured, transparent process designed for island conditions and tailored to your property."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your energy needs, property type, budget, and goals to understand the right approach.' },
              { step: '02', title: 'Site Survey', desc: 'Our engineers visit your property to assess roof condition, orientation, shading, and structural suitability.' },
              { step: '03', title: 'Feasibility & Load Review', desc: 'We analyze your electricity consumption, peak demand, and load profile to size the system accurately.' },
              { step: '04', title: 'Engineering & Proposal', desc: 'We deliver a detailed proposal including system design, equipment specifications, timeline, and investment summary.' },
              { step: '05', title: 'Installation & Commissioning', desc: 'Professional installation, electrical integration, safety testing, and system commissioning on your schedule.' },
              { step: '06', title: 'Monitoring & Maintenance', desc: 'Ongoing performance monitoring, preventive maintenance, cleaning schedules, and responsive service support.' },
            ].map((item, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all group">
                <span className="text-5xl font-bold text-[#00A896]/10 group-hover:text-[#00A896]/20 transition-colors absolute top-6 right-6">{item.step}</span>
                <div className="w-10 h-10 bg-[#00A896] rounded-lg flex items-center justify-center text-white font-bold text-sm mb-5">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#0A2540]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SUSTAINABILITY STRIP ═══ */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src={IMAGES.futuristicIsland} alt="Sustainable island vision" className="rounded-2xl shadow-2xl w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                label="Sustainability"
                title="Toward the carbon-conscious island"
                description="Solar energy is not just about savings. It is about building resilient, cleaner, and more self-sufficient island communities."
                align="left"
              />
              <div className="space-y-4">
                {[
                  'Lower diesel dependence for homes, businesses, and public facilities',
                  'Reduced carbon emissions aligned with national climate commitments',
                  'Greater energy security and resilience for island communities',
                  'Stronger ESG and sustainability credentials for resorts and businesses',
                  'Lower long-term operating costs across property types',
                  'Cleaner growth for the next generation of Maldivian infrastructure',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00A896] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2 mt-8 text-[#00A896] font-semibold hover:gap-3 transition-all"
              >
                Learn about our sustainability vision <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WARRANTY & MAINTENANCE ═══ */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Peace of Mind"
            title="Warranty, maintenance, and long-term support"
            description="We stand behind every installation with comprehensive warranty coverage, preventive maintenance, and responsive service."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: 'Equipment Warranties', desc: 'All solar panels, inverters, and batteries are covered by manufacturer warranties. Specific durations depend on the equipment selected for your project.' },
              { icon: Wrench, title: 'Workmanship Warranty', desc: 'Our installation work is backed by a workmanship warranty covering structural mounting, electrical connections, and system integration.' },
              { icon: ClipboardCheck, title: 'Preventive Maintenance', desc: 'Scheduled maintenance visits to inspect, clean, and optimize your system for peak performance in island conditions.' },
              { icon: MonitorCheck, title: 'Monitoring Support', desc: 'Remote performance monitoring to track energy production, detect issues early, and ensure your system delivers as designed.' },
              { icon: Settings, title: 'Cleaning & Inspection', desc: 'Regular panel cleaning and visual inspection to address salt spray, dust accumulation, and weather-related wear.' },
              { icon: Phone, title: 'Service Response', desc: 'Responsive service support for troubleshooting, repairs, and system adjustments when you need them.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#0A2540]/5 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#0A2540]" />
                </div>
                <h3 className="font-bold text-[#0A2540]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOG PREVIEW ═══ */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Insights"
            title="Latest from the blog"
            description="Practical insights on solar energy, system sizing, maintenance, and the Maldives renewable energy landscape."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { slug: 'why-solar-makes-sense-maldives', img: IMAGES.heroAerial, cat: 'Maldives Solar', title: 'Why Solar Makes Sense for the Maldives Right Now', excerpt: 'The Maldives is targeting 33% renewable energy by 2028. Here is what that means for homeowners, businesses, and resort operators.' },
              { slug: 'how-much-solar-home-guesthouse-resort', img: IMAGES.guestHouse, cat: 'System Sizing', title: 'How Much Solar Does a Maldivian Home, Guest House, or Resort Need?', excerpt: 'From 3 kW household systems to near-megawatt resort installations — a practical guide to sizing solar in the Maldives.' },
              { slug: 'resorts-cut-diesel-hybrid-solar', img: IMAGES.resort, cat: 'Resorts', title: 'How Resorts Can Cut Diesel Use with Hybrid Solar and Battery Systems', excerpt: 'Solar-diesel hybrid systems are transforming resort energy economics. Here is how hospitality properties can reduce fuel costs and improve sustainability.' },
            ].map((post, i) => (
              <Link
                key={i}
                to={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#00A896]">{post.cat}</span>
                  <h3 className="text-lg font-bold text-[#0A2540] mt-2 group-hover:text-[#00A896] transition-colors leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-[#00A896] text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0A2540] text-[#0A2540] font-semibold rounded-xl hover:bg-[#0A2540] hover:text-white transition-all">
              View all articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <CTASection />
    </PageLayout>
  );
};

export default AppLayout;
