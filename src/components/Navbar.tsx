import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Search } from 'lucide-react';
import { navLinks, companyInfo } from '../data';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleActive = () => {
      let current = '#home';

      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 120;
        const height = (section as HTMLElement).offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = `#${section.id}`;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleActive);

    return () => window.removeEventListener('scroll', handleActive);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Main navbar — glassy transparent design */}
      <nav
        className={`transition-all duration-500 ease-in-out border-b ${scrolled
          ? 'bg-white/60 backdrop-blur-2xl border-white/30 shadow-2xl shadow-black/10'
          : 'bg-white/10 backdrop-blur-md border-white/15'
          }`}
        style={{
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(12px) saturate(140%)',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(12px) saturate(140%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between ${scrolled ? 'h-16 lg:h-20' : 'h-20 lg:h-24'}">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/logo.png"
              alt="Ghrihum Real Estate"
              className="h-16 lg:h-20 w-auto w-auto object-contain transition-all duration-300 group-hover:scale-110"
            />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-5 py-2 text-sm font-semibold tracking-wider transition-all duration-300 group hover:scale-105 ${activeSection === link.href
                    ? 'text-[#C9A96E]'
                    : scrolled
                      ? 'text-gray-700 hover:text-[#6b4226]'
                      : 'text-white hover:text-[#F8D57E]'
                    }`}
                >
                  {link.label}
                  {/* Hover underline animation */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#C9A96E] rounded-full border border-white/20 hover:scale-110 transition-all duration-300 ${activeSection === link.href
                      ? 'w-3/4'
                      : 'w-0 group-hover:w-3/4'
                      }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: Search + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              className={`p-2 rounded-full transition-all duration-200 ${scrolled
                ? 'text-gray-600 hover:text-[#6b4226] hover:bg-[#f5f0e8]'
                : 'text-white/80 hover:text-white hover:bg-white/15'
                }`}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((prev) => !prev)}
              className={`lg:hidden p-2 rounded-full transition-all duration-200 ${scrolled
                ? 'text-gray-700 hover:text-[#6b4226] hover:bg-[#f5f0e8]'
                : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${mobileOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                    }`}
                />
                <X
                  className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${mobileOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                    }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <ul
            className={`px-4 pb-5 pt-2 space-y-1 border-t ${scrolled ? 'border-gray-100' : 'border-white/15'
              }`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 text-sm font-medium tracking-wider rounded-lg transition-all duration-200 ${scrolled
                    ? 'text-gray-700 hover:text-[#6b4226] hover:bg-[#f5f0e8]'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sub-navbar — Visit Us & Contact below the main navbar */}
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-xs tracking-wide text-white/90">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Visit Us</span>
          </a>
          <a
            href="tel:9167395110"
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{companyInfo.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
