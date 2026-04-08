import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/images';
import { ArrowLeft, Clock, Tag, Share2 } from 'lucide-react';

interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  date: string;
  readTime: string;
  img: string;
  content: string;
}

const articles: Article[] = [
  {
    slug: 'why-solar-makes-sense-maldives',
    title: 'Why Solar Makes Sense for the Maldives Right Now',
    metaTitle: 'Why Solar Makes Sense for the Maldives Right Now | M South Solar',
    metaDescription: 'The Maldives is targeting 33% renewable energy by 2028. Learn why solar energy is the smartest investment for Maldivian homes, businesses, and resorts.',
    category: 'Maldives Solar',
    date: 'March 15, 2026',
    readTime: '8 min read',
    img: IMAGES.heroAerial,
    content: `
## The Maldives Renewable Energy Direction

The Maldives is at a turning point in its energy story. The government has set a target of generating 33% of total electricity demand from renewable energy by 2028 — a significant commitment for a nation of nearly 200 inhabited islands that has historically depended almost entirely on imported diesel fuel for power generation.

This is not aspirational language. It is backed by concrete programs, international financing, and measurable targets. As of July 2024, the country had approximately 68.5 MW of solar PV installed, with resort islands alone accounting for 31 MW. But the pipeline is far larger: 200 MW of solar PV systems, battery energy storage, and energy management systems are planned across 187 inhabited islands.

## The Household Rooftop Opportunity

For Maldivian households, the opportunity is immediate and practical. The government's household solar program specifically supports installation of 3 kW and 5 kW solar PV systems on residential rooftops. Combined with net metering — which allows homeowners to feed excess solar energy back to the grid and offset their electricity bills — this makes rooftop solar one of the most accessible energy investments available to families.

Many residential buildings in the Maldives were originally designed for fans and have since adopted air-conditioning. This shift has significantly increased household electricity consumption, making solar-plus-efficiency solutions increasingly relevant. A well-sized rooftop system can offset a meaningful portion of this increased demand.

## Island-Wide Solar and Storage Momentum

Beyond individual rooftops, the Maldives is pursuing island-scale solar transformation. POISED and ASSURE-style hybridisation programs are expanding solar-diesel hybrid systems across outer islands. The ASSURE program alone will finance 6 MW of rooftop PV through net metering for at least 1,000 domestic and commercial consumers.

For outer islands, where diesel fuel must be shipped in and stored, the economics of solar-plus-battery systems are particularly compelling. Hybrid systems reduce fuel consumption, lower operating costs, and improve energy security — all critical factors for remote island communities.

## The Resort Opportunity

Resort islands already represent a major share of installed solar capacity in the Maldives. An additional 125 MW of solar is foreseen in resort and industrial islands by the end of 2028. For hospitality operators, solar is no longer a nice-to-have sustainability feature — it is becoming a core part of energy strategy.

Solar-diesel hybrid systems can significantly reduce fuel costs for resorts. From phased installations on back-of-house and service area roofs to comprehensive near-megawatt systems, the range of resort solar solutions is broad and growing.

## Commercial and Industrial Scale

The commercial and industrial sector also presents significant opportunity. 25 MW of rooftop PV is foreseen on future commercial and industrial developments in Gulhifalhu and Thilafushi alone by end of 2028. Warehouses, fish processing facilities, offices, and commercial buildings with large flat roofs are ideal candidates for solar.

## Why This Matters Now

Electricity consumption in the Maldives is projected to reach approximately 2,400 GWh by 2028. With rising demand, rising fuel costs, and growing climate commitments, the case for solar has never been stronger. Whether you are a homeowner looking to reduce your monthly bill, a resort operator seeking to cut diesel costs, or a business owner planning a new facility — solar energy deserves serious consideration.

The technology is proven. The policy support is in place. The financing mechanisms are expanding. The question is no longer whether solar makes sense in the Maldives — it is how quickly you can get started.
    `,
  },
  {
    slug: 'how-much-solar-home-guesthouse-resort',
    title: 'How Much Solar Does a Maldivian Home, Guest House, or Resort Need?',
    metaTitle: 'Solar System Sizing Guide for Maldives Homes, Guest Houses & Resorts | M South Solar',
    metaDescription: 'A practical guide to solar system sizing in the Maldives. Learn how much solar power homes, villas, guest houses, and resorts typically need.',
    category: 'Residential',
    date: 'February 20, 2026',
    readTime: '10 min read',
    img: IMAGES.guestHouse,
    content: `
## One Size Does Not Fit All

One of the most common questions we hear is: "How much solar do I need?" The honest answer is that it depends — on your property type, energy consumption, air-conditioning load, roof area, and how you want to use the system. But we can provide practical guidance on typical system ranges for different property types in the Maldives.

## Homes: 3–5 kW Standard Packages

The Maldives government's household solar program supports 3 kW and 5 kW rooftop systems. For a typical Maldivian home, a 3 kW system is a good starting point — it can offset a meaningful portion of daily electricity consumption, especially during peak sunlight hours.

A 5 kW system provides more capacity and is better suited for homes with higher air-conditioning use, multiple appliances, or larger families. With net metering, excess energy generated during the day feeds back to the grid, reducing your monthly electricity bill.

It is worth noting that many homes in the Maldives were originally designed for fans and have since adopted air-conditioning. This significantly increases electricity consumption. If your home runs multiple AC units, a 5 kW system — or even larger — may be more appropriate.

## Larger Villas: 8–12 kW

Premium villas with multiple bedrooms, extensive air-conditioning, water pumps, and higher overall energy consumption typically need larger systems. An 8–12 kW system can provide substantial solar coverage for these properties.

The key factors that push villa systems above the standard 3–5 kW range include: number of AC units, pool pumps, water heating, laundry equipment, and overall floor area. A professional load analysis is essential to size these systems correctly.

## Guest Houses: 15–100 kW

Guest houses in the Maldives vary enormously — from small 5-room properties to larger 30+ room establishments. Energy consumption depends heavily on occupancy rates, number of AC units, kitchen and laundry facilities, and water heating systems.

A small guest house might need 15–30 kW. A larger property with full kitchen, laundry, and high occupancy could need 50–100 kW. The economics are often compelling: guest houses typically have high electricity costs due to air-conditioning and hot water, and solar can offset a significant portion of these costs.

## Resorts: 300 kW to 1 MW+

Resort solar systems are in a different category entirely. A mid-size resort might need 300–500 kW, while larger properties can require systems approaching or exceeding 1 MW. Resort islands already account for roughly half of installed solar capacity in the Maldives, and for good reason — the fuel savings and sustainability benefits are substantial.

Resort solar installations typically focus on back-of-house buildings, service areas, staff accommodation roofs, and villa roofs where structurally suitable. Solar-diesel hybrid systems are particularly relevant, allowing resorts to reduce diesel consumption while maintaining reliable power supply.

The sustainability angle is increasingly important too. Guests, tour operators, and certification bodies are all paying more attention to environmental performance. A visible solar installation is a tangible demonstration of commitment.

## Commercial and Industrial: 100 kW to 2 MW+

Warehouses, offices, fish processing facilities, and commercial buildings with large flat roofs are ideal for solar. Systems in this range can significantly reduce operating costs, especially for energy-intensive operations.

The planned commercial and industrial developments in Gulhifalhu and Thilafushi represent a major opportunity, with 25 MW of rooftop PV foreseen by end of 2028.

## What Determines Final System Size?

These ranges are indicative. Final system sizing always depends on:

- **Actual energy consumption** — your electricity bills tell the real story
- **Peak demand** — when you use the most power and how much
- **Air-conditioning load** — often the single biggest factor in the Maldives
- **Roof area and orientation** — how much usable space you have
- **Shading** — trees, adjacent buildings, water tanks, and other obstructions
- **Equipment specifications** — panel efficiency, inverter capacity, and battery sizing
- **Budget and goals** — whether you want to offset 30%, 50%, or 80%+ of your consumption

A professional site survey and load analysis is always recommended before finalising system design. We provide this as a standard part of our process.
    `,
  },
  {
    slug: 'resorts-cut-diesel-hybrid-solar',
    title: 'How Resorts Can Cut Diesel Use with Hybrid Solar and Battery Systems',
    metaTitle: 'How Maldives Resorts Can Cut Diesel with Hybrid Solar Systems | M South Solar',
    metaDescription: 'Learn how solar-diesel hybrid systems help Maldives resorts reduce fuel costs, improve sustainability, and future-proof their energy supply.',
    category: 'Resorts',
    date: 'January 10, 2026',
    readTime: '9 min read',
    img: IMAGES.resort,
    content: `
## The Diesel Challenge for Maldives Resorts

Running a resort in the Maldives means running diesel generators — often around the clock. Fuel must be shipped to the island, stored safely, and burned continuously to power air-conditioning, kitchens, laundry, water treatment, lighting, and guest amenities. The cost is significant, the logistics are complex, and the environmental impact is substantial.

For many resort operators, diesel fuel represents one of the largest operating expenses. And with growing pressure from guests, tour operators, and sustainability certification bodies, the environmental cost of diesel dependence is becoming a business risk as well as an ethical concern.

## How Solar-Diesel Hybrid Systems Work

A solar-diesel hybrid system combines rooftop solar panels with the existing diesel generator infrastructure. During daylight hours, solar panels generate electricity that directly offsets diesel consumption. When solar production exceeds immediate demand, excess energy can charge batteries for use during evening hours or cloudy periods.

The diesel generators remain in place as backup and for periods when solar and battery capacity is insufficient. This is not about eliminating diesel overnight — it is about systematically reducing dependence on it.

The result is lower fuel consumption, lower emissions, and lower operating costs — without compromising power reliability.

## Where to Install Solar on a Resort

Resort solar installations typically focus on several key areas:

**Back-of-house buildings** — kitchens, laundry facilities, staff dining, and maintenance workshops often have large, flat roofs that are ideal for solar panels. These buildings also tend to have high energy consumption.

**Service area roofs** — water treatment plants, desalination units, and utility buildings offer additional roof space and typically operate during peak solar hours.

**Staff accommodation** — staff housing blocks often have suitable roof area and consistent energy demand from air-conditioning and lighting.

**Villa roofs** — where structurally suitable, guest villa roofs can accommodate solar panels. This requires careful assessment of roof condition, load-bearing capacity, and aesthetic considerations.

**Ground-mounted arrays** — some resorts have available land area for ground-mounted solar, particularly on larger islands or in designated utility zones.

## The Sustainability Value for Hospitality Brands

Resort islands already account for roughly half of the installed solar capacity in the Maldives, with 31 MW installed as of mid-2024. An additional 125 MW is foreseen in resort and industrial islands by the end of 2028.

Leading resorts in the Maldives have already demonstrated what is possible. Public project examples show solar-diesel hybrid rooftop systems ranging from approximately 300 kWp to nearly 1,000 kWp on individual resort properties. These installations demonstrate that large-scale resort solar is technically proven and commercially viable in Maldives conditions.

For hospitality brands, the benefits extend beyond cost savings:

- **Guest expectations** — increasingly, guests choose properties with visible environmental commitments
- **Tour operator requirements** — major tour operators are incorporating sustainability criteria into their partner selection
- **Certification and reporting** — solar installations provide measurable data for sustainability certifications and ESG reporting
- **Brand differentiation** — a genuine solar installation tells a more compelling sustainability story than marketing language alone

## Battery Integration for Maximum Impact

Adding battery storage to a resort solar system significantly increases its value. Batteries allow solar energy generated during the day to be stored and used during evening hours — when resort energy demand is often highest due to dining, entertainment, and air-conditioning.

Battery-integrated systems also provide:

- **Peak shaving** — reducing demand on diesel generators during high-consumption periods
- **Backup power** — maintaining critical systems during generator maintenance or fuel supply disruptions
- **Grid stability** — smoothing the transition between solar and diesel power sources
- **Future readiness** — as battery technology improves and costs decline, early adopters are well-positioned to expand

## Getting Started

The first step for any resort considering solar is a comprehensive energy assessment. This includes:

1. Reviewing historical energy consumption and diesel fuel records
2. Surveying available roof area and structural suitability
3. Analysing load profiles — when energy is used and how much
4. Modelling solar production potential based on location and orientation
5. Designing a phased implementation plan that balances investment with impact
6. Calculating projected fuel savings and payback period

M South Solar works with resort operators to conduct these assessments and develop practical, phased solar strategies. Whether you are exploring a first installation or expanding an existing system, we can help you understand the opportunity and plan the right approach.

The transition from diesel dependence to solar-hybrid energy is not just good for the environment. It is good business — and for Maldives resorts, the time to act is now.
    `,
  },
];

const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <PageLayout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-[#0A2540]">Article not found</h1>
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#00A896] font-semibold mt-4">
            <ArrowLeft className="w-5 h-5" /> Back to blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed my-4 pl-4">
            {currentList.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) {
        flushList();
        return;
      }
      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(<h2 key={i} className="text-2xl font-bold text-[#0A2540] mt-10 mb-4">{trimmed.replace('## ', '')}</h2>);
      } else if (trimmed.startsWith('- ')) {
        currentList.push(trimmed.replace(/^- \*\*(.*?)\*\*/, '<strong>$1</strong>').replace('- ', ''));
      } else if (trimmed.startsWith('**')) {
        flushList();
        const text = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        elements.push(<p key={i} className="text-gray-700 leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: text }} />);
      } else {
        flushList();
        const text = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        elements.push(<p key={i} className="text-gray-700 leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: text }} />);
      }
    });
    flushList();
    return elements;
  };

  return (
    <PageLayout>
      {/* Article Hero */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[560px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={article.img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#00A896]">{article.category}</span>
            <span className="text-xs text-white/40">|</span>
            <span className="flex items-center gap-1 text-xs text-white/50">
              <Clock className="w-3 h-3" /> {article.readTime}
            </span>
            <span className="text-xs text-white/40">|</span>
            <span className="text-xs text-white/50">{article.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">{article.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#00A896] font-semibold mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
          <article className="prose prose-lg max-w-none">
            {renderContent(article.content)}
          </article>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">{article.category}</span>
              </div>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: article.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard');
                  }
                }}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#00A896] transition-colors"
              >
                <Share2 className="w-4 h-4" /> Share this article
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in solar for your property?"
        description="Get in touch for a site survey, solar proposal, or to discuss your energy needs with our team."
      />
    </PageLayout>
  );
};

export default BlogArticle;
