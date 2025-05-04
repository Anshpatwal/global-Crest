'use client'
import Link from 'next/link';
import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/60 to-teal-600/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About GlobalCrest Exports
          </h1>
          <p className="mt-4 text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto">
            Trusted export partner delivering quality commodities worldwide for over 25 years.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
            alt="Our History"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Journey
            </h2>
            <p className="text-slate-600 mb-4">
              Founded in 1998, GlobalCrest Exports began as a small trading firm in Ahmedabad. Over the years, we&apos;ve grown into a recognized export house, serving clients across 50+ countries.
            </p>
            <p className="text-slate-600">
              Our commitment to quality, timely delivery, and end-to-end service has made us a preferred partner for textile, agricultural, and industrial commodity sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To provide reliable, high-quality export solutions that connect suppliers and buyers globally, driven by integrity and innovation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To be the world’s leading export house renowned for excellence in service, sustainability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {['CEO', 'Operations Head', 'Sales Manager', 'Quality Lead'].map((role, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <Image
                    src={`https://i.pravatar.cc/150?img=${10 + idx}`}
                    alt={role}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h4 className="text-lg font-semibold text-slate-900">{role.split(' ')[0]}</h4>
                <p className="text-indigo-500 text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gradient-to-br from-indigo-800 to-teal-600 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Partner with Us?
        </h3>
        <p className="mb-6 text-indigo-200">
          Contact our team today to discuss your export requirements and get a customized solution.
        </p>
        <Link
          href="/#products"
          className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Request a Quote
        </Link>
      </section>

      {/* Footer (you can import Footer if available) */}
      <Footer/>
    </div>
  );
}
