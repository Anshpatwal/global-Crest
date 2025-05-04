'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

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

          <select
            onChange={(e) => router.push(`/${e.target.value}`)}
            className="ml-4 border border-slate-200 rounded-lg py-1.5 px-3 text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          >
            <option value="en">🇺🇸 English</option>
            <option value="es">🇪🇸 Español</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="ar">🇦🇪 عربي</option>
            <option value="zh">🇨🇳 中文 (Chinese)</option>
            <option value="hi">🇮🇳 हिंदी (Hindi)</option>
            <option value="bn">🇧🇩 বাংলা (Bengali)</option>
            <option value="pt">🇵🇹 Português</option>
            <option value="ru">🇷🇺 Русский (Russian)</option>
            <option value="ja">🇯🇵 日本語 (Japanese)</option>
            <option value="de">🇩🇪 Deutsch (German)</option>
            <option value="it">🇮🇹 Italiano</option>
            <option value="tr">🇹🇷 Türkçe</option>
            <option value="ko">🇰🇷 한국어 (Korean)</option>
            <option value="vi">🇻🇳 Tiếng Việt</option>
            <option value="id">🇮🇩 Bahasa Indonesia</option>
            <option value="fa">🇮🇷 فارسی (Farsi)</option>
            <option value="ur">🇵🇰 اردو (Urdu)</option>
            <option value="ms">🇲🇾 Bahasa Melayu</option>
            <option value="th">🇹🇭 ภาษาไทย</option>
            <option value="sw">🇰🇪 Kiswahili</option>
            <option value="pl">🇵🇱 Polski</option>
            <option value="uk">🇺🇦 Українська</option>
            <option value="ro">🇷🇴 Română</option>
            <option value="nl">🇳🇱 Nederlands</option>
          </select>



        </nav>
      </div>
    </header>
  );
}