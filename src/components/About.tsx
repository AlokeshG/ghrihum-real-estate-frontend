import { Award, Users, Building, TrendingUp } from 'lucide-react';
import { stats, aboutContent } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const statIcons = [Award, Users, Building, TrendingUp];

const aboutImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
];

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();

  return (
    <section id="about" className="bg-white py-20 px-4 md:px-8">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Left Column — Image Grid */}
        <div
          className={`grid grid-cols-2 gap-4 transition-all duration-700 ${sectionVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
            }`}
        >
          {aboutImages.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <img
                src={src}
                alt={`Real estate showcase ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d2410]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Right Column — Content */}
        <div
          className={`transition-all duration-700 delay-200 ${sectionVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10'
            }`}
        >
          {/* Label */}
          <span className="text-[#6b4226] uppercase tracking-wider text-sm font-semibold">
            {aboutContent.subtitle}
          </span>

          {/* Divider */}
          <div
            className="mt-3 mb-5 h-[3px] w-[60px] rounded-full"
            style={{
              background: 'linear-gradient(to right, #6b4226, #c9a96e)',
            }}
          />

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {aboutContent.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
            {aboutContent.description}
          </p>

          {/* Stats Grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <div
                  key={stat.label}
                  className={`bg-[#f5f0e8] rounded-2xl p-5 transition-all duration-500 hover:shadow-lg hover:shadow-[#6b4226]/10 hover:-translate-y-1 ${statsVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                    }`}
                  style={{
                    transitionDelay: statsVisible
                      ? `${index * 120}ms`
                      : '0ms',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#6b4226]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#6b4226]" />
                    </div>
                  </div>
                  <div className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                    {stat.value}
                    <span className="text-[#c9a96e]">{stat.suffix}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Founder Info */}
          <div className="mt-10 flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
              alt={aboutContent.founderName}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-[#c9a96e]/40"
              loading="lazy"
            />
            <div>
              <p className="font-serif font-semibold text-gray-900">
                {aboutContent.founderName}
              </p>
              <p className="text-sm text-[#6b4226]">
                {aboutContent.founderRole}
              </p>
            </div>
            <div className="ml-auto">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#6b4226] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#3d2410] transition-colors duration-300 shadow-lg shadow-[#6b4226]/20"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
