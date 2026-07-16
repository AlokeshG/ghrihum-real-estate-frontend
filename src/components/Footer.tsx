import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo, properties } from '../data';

const informationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#241507] via-[#2a1808] to-[#1a0f05] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#c9a96e]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#6b4226]/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-2.5 mb-5 group"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <rect width="40" height="40" rx="10" fill="#6b4226" />
                <path
                  d="M20 8L8 18H12V30H18V22H22V30H28V18H32L20 8Z"
                  fill="white"
                />
              </svg>
              <span className="text-xl font-serif font-bold text-white group-hover:text-[#c9a96e] group-hover:tracking-wide transition-colors duration-300">
                Ghrihum Real Estate
              </span>
            </a>

            {/* Social Media Icons */}
            <p className="text-white/50 text-sm mb-4">Follow Our Socials</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md backdrop-blur-md
flex items-center justify-center
transition-all duration-300
hover:bg-[#c9a96e]
hover:scale-110
hover:-translate-y-1"
                >
                  <social.icon size={16} className="text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">
              Information
            </h4>
            <ul className="space-y-3">
              {informationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white/60 hover:text-[#c9a96e] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">
              Our Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/our-company"
                  className="text-white/60 hover:text-[#c9a96e] transition-colors duration-300 text-sm"
                >
                  About Company
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, '#services')}
                  className="text-white/60 hover:text-[#c9a96e] transition-colors duration-300 text-sm"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="text-white/60 hover:text-[#c9a96e] transition-colors duration-300 text-sm"
                >
                  Our Latest Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">
              Portfolio
            </h4>
            <ul className="space-y-3">
              {properties.map((property) => (
                <li key={property.title}>
                  <a
                    href={property.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#c9a96e] transition-colors duration-300 text-sm"
                  >
                    {property.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919136065603"
                    className="text-white/60 hover:text-[#c9a96e] transition-colors duration-300 text-sm"
                  >
                    +91-9136065603
                  </a>
                  <a
                    href="tel:+918286772066"
                    className="text-white/60 hover:text-[#c9a96e] transition-colors duration-300 text-sm"
                  >
                    +91-8286772066
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-white/60 hover:text-[#c9a96e] transition-colors duration-300 text-sm"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c9a96e] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Property Updates */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-white">
              Property Updates
            </h4>
            <p className="text-white/50 text-sm mb-5">
              Stay informed about the newest luxury residential projects in Mumbai.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#c9a96e]/50 transition-colors duration-200"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6b4226] to-[#c9a96e] hover:scale-105
shadow-lg hover:bg-[#8a5a3a] text-white text-sm font-medium transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Designed & Developed using React.js
          </p>
        </div>
      </div>
    </footer>
  );
}
