'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/app/lib';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Textiles', 'Agricultural', 'Machinery'];

  const filtered =
    filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-slate-50 to-indigo-50">
        {/* Hero Banner */}
        <section className="relative h-64 px-6 bg-gradient-to-br from-indigo-800 to-teal-600 flex items-center justify-center">
          <div className="max-w-7xl w-full mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Explore Our Products
            </h1>
          </div>
        </section>

        {/* Category Filter */}
        <nav className="px-6">
          <div className="max-w-7xl mx-auto py-6 flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === cat
                    ? 'bg-teal-500 text-white'
                    : 'bg-white text-indigo-700 shadow'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>

        {/* Products Grid */}
        <section className="px-6 py-6">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filtered.map(prod => (
              <Link
                key={prod.id}
                href={`/products/${prod.id}`}
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <Image
                  src={prod.image}
                  alt={prod.name}
                  width={600}
                  height={400}
                  className="object-cover h-56 w-full"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    {prod.name}
                  </h2>
                  <p className="text-slate-600 mb-4">
                    {prod.description}
                  </p>
                  <span className="text-teal-500 font-semibold">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 py-20 bg-indigo-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              What Our Clients Say
            </h2>
            <div className="space-y-8">
              {[
                { text: 'GlobalCrest provided fast delivery and outstanding quality!', author: 'M. Johnson, USA' },
                { text: 'Their machinery parts have never disappointed us.', author: 'L. Wang, China' }
              ].map((t, i) => (
                <blockquote key={i} className="bg-white p-6 rounded-xl shadow">
                  <p className="italic text-slate-700 mb-4">“{t.text}”</p>
                  <footer className="text-sm font-semibold text-slate-900">— {t.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-6 py-16 text-center bg-gradient-to-br from-teal-500 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for Premium Export Services?
            </h3>
            <p className="mb-6 text-lg">
              Contact us today and get a custom quote within 2 hours.
            </p>
            <Link
              href="/#products"
              className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
