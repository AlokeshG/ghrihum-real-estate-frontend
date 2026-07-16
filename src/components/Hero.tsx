import { useState, useEffect, useCallback } from 'react';
import { Building2, Handshake, Users, ArrowRight } from 'lucide-react';
import { heroSlides } from '../data';

const badgeIcons: Record<string, React.ElementType> = {
  Building2,
  Handshake,
  Users,
};

const tabLabels = ['Construction', 'Sale & Purchase', 'Collaboration'];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);

  const switchSlide = useCallback(
    (index: number) => {
      if (index === activeIndex || isTransitioning) return;
      setIsTransitioning(true);
      // Start exit animation
      setTimeout(() => {
        setDisplayIndex(index);
        setActiveIndex(index);
        // Let enter animation play
        setTimeout(() => setIsTransitioning(false), 50);
      }, 400);
    },
    [activeIndex, isTransitioning]
  );

  // Auto-play slides
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (activeIndex + 1) % heroSlides.length;
      switchSlide(next);
    }, 7000);
    return () => clearInterval(timer);
  }, [activeIndex, switchSlide]);

  const slide = heroSlides[displayIndex];
  const BadgeIcon = badgeIcons[slide.badgeIcon] || Building2;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      {/* Background images with crossfade + scale */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1800ms] ease-in-out ${
            i === activeIndex
              ? 'opacity-100 scale-110'
              : 'opacity-0 scale-100'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen pt-[100px] pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#D6B57C]/10 backdrop-blur-md border border-white/20 mb-6 transition-all duration-500 ${
                isTransitioning
                  ? 'opacity-0 -translate-x-4'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              <BadgeIcon className="w-4 h-4 text-[#c9a96e]" />
              <span className="text-sm font-medium text-white/90 tracking-wide">
                {slide.badge}
              </span>
            </div>

            {/* Title */}
            <h1
              className={`font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl font-bold text-white leading-[1.1] mb-6 transition-all duration-600 delay-75 ${
                isTransitioning
                  ? 'opacity-0 -translate-x-6'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              React Hero Test
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl transition-all duration-600 delay-150 ${
                isTransitioning
                  ? 'opacity-0 -translate-x-6'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              {slide.subtitle}
            </p>

            {/* Bullets */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-6 mb-10 transition-all duration-600 delay-200 ${
                isTransitioning
                  ? 'opacity-0 -translate-x-6'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              {slide.bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg shadow-[#c9a96e]/30 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white/85 font-medium">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`transition-all duration-600 delay-300 ${
                isTransitioning
                  ? 'opacity-0 -translate-x-6'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#C89B3C] to-[#D6B57C] text-white font-semibold text-sm tracking-wide rounded-full hover:scale-105 hover:shadow-yellow-500/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 group"
              >
                {slide.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-1 p-1.5 bg-[#e8ddd0]/90 backdrop-blur-md rounded-full shadow-2xl shadow-black/20">
            {tabLabels.map((label, i) => (
              <button
                key={label}
                onClick={() => switchSlide(i)}
                className={`relative px-5 sm:px-7 py-2.5 text-xs sm:text-sm font-semibold tracking-wide rounded-full transition-all duration-400 whitespace-nowrap ${
                  activeIndex === i
                    ? 'bg-gradient-to-r from-[#8B5E3C] to-[#C89B3C] text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-gradient-to-r from-[#C89B3C] to-[#D6B57C]/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  );
};

export default Hero;
