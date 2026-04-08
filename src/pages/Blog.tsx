import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { IMAGES } from '@/lib/images';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const categories = ['All', 'Maldives Solar', 'Residential', 'Resorts', 'Commercial & Industrial', 'Maintenance', 'Sustainability'];

const articles = [
  {
    slug: 'why-solar-makes-sense-maldives',
    img: IMAGES.heroAerial,
    category: 'Maldives Solar',
    title: 'Why Solar Makes Sense for the Maldives Right Now',
    excerpt: 'The Maldives is targeting 33% renewable energy by 2028. Government programs, net metering, and island hybridisation are creating unprecedented momentum. Here is what that means for homeowners, businesses, and resort operators.',
    date: 'March 2026',
    readTime: '8 min read',
  },
  {
    slug: 'how-much-solar-home-guesthouse-resort',
    img: IMAGES.guestHouse,
    category: 'Residential',
    title: 'How Much Solar Does a Maldivian Home, Guest House, or Resort Need?',
    excerpt: 'From 3 kW household systems to near-megawatt resort installations — a practical guide to understanding solar system sizing in the Maldives, and why one size does not fit all.',
    date: 'February 2026',
    readTime: '10 min read',
  },
  {
    slug: 'resorts-cut-diesel-hybrid-solar',
    img: IMAGES.resort,
    category: 'Resorts',
    title: 'How Resorts Can Cut Diesel Use with Hybrid Solar and Battery Systems',
    excerpt: 'Solar-diesel hybrid systems are transforming resort energy economics in the Maldives. Here is how hospitality properties can reduce fuel costs, improve sustainability credentials, and future-proof their energy supply.',
    date: 'January 2026',
    readTime: '9 min read',
  },
];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <PageLayout>
      <PageHero
        image={IMAGES.engineers}
        label="Blog & Insights"
        title="Solar energy insights for the Maldives"
        description="Practical guidance on solar systems, sizing, maintenance, and the Maldives renewable energy landscape."
      />

      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-[#00A896] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#00A896]">{post.category}</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#00A896] transition-colors leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-[#00A896] text-sm font-semibold group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No articles in this category yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
