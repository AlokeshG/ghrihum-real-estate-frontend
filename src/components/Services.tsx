import { Building2, Handshake, Users, ArrowRight } from 'lucide-react';
import { services } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Handshake,
  Users,
};

export default function Services() {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  const handleCardClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#faf8f5] via-white to-[#f5f0e8] py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="uppercase tracking-wider text-sm font-medium text-[#6b4226]">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 max-w-3xl mx-auto leading-tight">
            Complete Real Estate Services for Buyers, Sellers & Investors
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${cardsVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Left — Tall Image with Overlay */}
          <div className="relative min-h-[500px] rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80"
              alt="Real Estate Solutions"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3d2410]/70 via-[#3d2410]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                Comprehensive Real Estate Solutions
              </h3>
              <p className="text-white/80 text-sm md:text-base mb-6 max-w-md">
                From property search to final deal completion, we provide
                end-to-end support for all your real estate needs in Mumbai.
              </p>
              <button
                onClick={handleCardClick}
                className="inline-flex items-center gap-2 bg-[#c9a96e] hover:bg-[#b8953d] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 group/btn"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right — Service Cards */}
          <div className="flex flex-col gap-4">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Building2;

              return (
                <div
                  key={index}
                  onClick={handleCardClick}
                  className="group bg-white rounded-3xl p-7 cursor-pointer
border border-gray-100
transition-all duration-500
hover:-translate-y-3
hover:shadow-2xl
hover:shadow-[#6b4226]/15"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#6b4226]/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-gradient-to-r
group-hover:from-[#6b4226]
group-hover:to-[#c9a96e]
group-hover:rotate-6">
                      <Icon className="w-6 h-6 text-[#6b4226] transition-all duration-500 group-hover:text-white group-hover:rotate-12 group-hover:scale-125" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg text-gray-900">
                          {service.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-[#6b4226] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2" />
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs font-medium text-[#6b4226] bg-[#f5f0e8] px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Learn More Button */}
                      <div className="mt-5">
                        <button
                          onClick={handleCardClick}
                          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
