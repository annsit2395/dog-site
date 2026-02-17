"use client";

import Link from 'next/link';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Locale } from '@/i18n-config';

export default function Navbar({ dictionary, lang }: { dictionary: any, lang: Locale }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 p-4 text-white shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${lang}`} className="text-2xl font-bold flex items-center gap-2">
          🐾 <span>Dog Lovers</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-6 text-lg">
            <Link href={`/${lang}`} className="hover:text-green-200 transition">
              {dictionary.nav.home}
            </Link>
            <Link href={`/${lang}/breeds`} className="hover:text-green-200 transition">
              {dictionary.nav.breeds}
            </Link>
            <Link href={`/${lang}/care`} className="hover:text-green-200 transition">
              {dictionary.nav.care}
            </Link>
          </div>
          <div className="border-l border-green-500 pl-6">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="scale-90 origin-right">
            <LanguageSwitcher />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-green-700 shadow-lg py-4 flex flex-col items-center space-y-4 border-t border-green-500 animate-in slide-in-from-top-2 duration-200">
          <Link
            href={`/${lang}`}
            className="text-lg hover:text-green-200 transition w-full text-center py-2"
            onClick={() => setIsOpen(false)}
          >
            {dictionary.nav.home}
          </Link>
          <Link
            href={`/${lang}/breeds`}
            className="text-lg hover:text-green-200 transition w-full text-center py-2"
            onClick={() => setIsOpen(false)}
          >
            {dictionary.nav.breeds}
          </Link>
          <Link
            href={`/${lang}/care`}
            className="text-lg hover:text-green-200 transition w-full text-center py-2"
            onClick={() => setIsOpen(false)}
          >
            {dictionary.nav.care}
          </Link>
        </div>
      )}
    </nav>
  );
}
