'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Header() {
  const { i18n } = useTranslation(); // use i18n from next-i18next
  const router = useRouter();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang); // Change language dynamically
    router.push('/'); // Optional: Redirect to home after language change
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo with Gradient */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
          GlobalCrest
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            <Link
              href="/"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              About
            </Link>
            <Link
              href="/products"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/certificates"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Certificates
            </Link>
          </div>

          {/* Language Selector */}
          <select
            onChange={handleLanguageChange}
            value={i18n.language}
            className="ml-4 border border-slate-200 rounded-lg py-1.5 px-3 text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          >
            <option value="en">🇺🇸 English</option>
            <option value="fr">🇫🇷 Français</option>
            {/* Add more languages here */}
          </select>
        </nav>
      </div>
    </header>
  );
}
