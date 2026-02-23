"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Career Opportunities", href: "/opportunities" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0 group hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="GEOFINDA Tech Hub"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="hidden sm:inline font-bold text-lg text-gradient-blue">
            Career Portal
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/apply"
            className="hidden sm:inline-block px-6 py-2 bg-gradient-to-r from-primary-blue to-primary-green text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-900" />
            ) : (
              <Menu className="w-5 h-5 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-gray-200 lg:hidden animate-fade-in-up">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2 mt-2 bg-gradient-to-r from-primary-blue to-primary-green text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
