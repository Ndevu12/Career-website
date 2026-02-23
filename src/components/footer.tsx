import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="GEOFINDA Tech Hub"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <span className="font-black text-lg text-gradient-blue">
                  GEOFINDA Tech Hub
                </span>
                <div className="text-xs text-gray-400">Career Portal</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Building the next generation of technology professionals in Rwanda
              through structured academic internships and mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/opportunities"
                  className="hover:text-primary transition-colors"
                >
                  Internship Tracks
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-primary transition-colors"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="hover:text-primary transition-colors"
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="mailto:career@geofinda.com"
                  className="hover:text-primary transition-colors"
                >
                  career@geofinda.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <div className="space-y-1">
                  <a
                    href="tel:+250787678779"
                    className="hover:text-primary transition-colors block"
                  >
                    +250 787 678 779
                  </a>
                  <a
                    href="tel:+250793412293"
                    className="hover:text-primary transition-colors block"
                  >
                    +250 793 412 293
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Nyarugenge, Kigali, Rwanda</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href="https://career.geofinda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  career.geofinda.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2 bg-gradient-to-r from-primary-blue to-primary-blue/70 hover:from-primary-blue hover:to-primary-green text-white rounded-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gradient-to-r from-primary-blue to-primary-blue/70 hover:from-primary-blue hover:to-primary-green text-white rounded-lg transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gradient-to-r from-primary-blue to-primary-blue/70 hover:from-primary-blue hover:to-primary-green text-white rounded-lg transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400 text-center md:text-right">
              © {currentYear}{" "}
              <span className="text-gradient-brand font-semibold">
                GEOFINDA Tech Hub
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
