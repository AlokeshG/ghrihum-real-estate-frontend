import { partners } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Partners = () => {
  const { ref, isVisible } = useScrollReveal();
  const duplicated = [...partners, ...partners];

  return (
    <section className="bg-[#f5f0e8] py-20 px-4 overflow-hidden">
      {/* Section Header */}
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our Premium Partners
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          We collaborate with the industry finest to deliver exceptional real
          estate solutions for our clients.
        </p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative overflow-hidden group">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#f5f0e8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#f5f0e8] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {duplicated.map((partner, index) => (
            <span
              key={`${partner}-${index}`}
              className="inline-flex items-center mx-2 md:mx-4 shrink-0"
            >
              <span className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#6b4226]/40 hover:text-[#6b4226]/70 transition-colors duration-300 cursor-default select-none">
                {partner}
              </span>
              <span className="text-[#c9a96e]/50 text-2xl md:text-3xl mx-4 md:mx-6 select-none">
                •
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
