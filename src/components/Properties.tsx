import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { properties } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Properties() {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  const handleViewAll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="uppercase tracking-wider text-sm font-medium text-[#6b4226]">
            OUR PROJECTS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Featured Properties
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
            gridVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {properties.map((property, index) => (
            <a
              key={index}
              href={property.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden cursor-pointer block h-[300px] sm:h-[350px]"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Background Image */}
              <img
                src={property.image}
                alt={property.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Type Badge */}
              <div className="absolute top-4 right-4 bg-white text-[#6b4226] px-3 py-1 rounded-full text-xs font-semibold">
                <span className="text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  {property.type}
                </span>
              </div>

              {/* External Link Icon */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <span className="flex items-center gap-1.5 text-xs font-medium text-white bg-[#c9a96e]/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <ExternalLink className="w-3 h-3" />
                  View Project
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                {property.price && (
                  <span className="inline-block text-[#c9a96e] text-sm font-semibold mb-2">
                    {property.price}
                  </span>
                )}
                <h3 className="font-semibold text-white text-lg md:text-xl mb-1">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1.5 text-white/80">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-sm">{property.location}</span>
                </div>
              </div>

              {/* Hover Highlight Border */}
              <div className="absolute inset-0 rounded-2xl ring-0 ring-[#c9a96e]/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-[#c9a96e]/50" />
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleViewAll}
            className="inline-flex items-center gap-2 bg-[#6b4226] hover:bg-[#3d2410] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 group/btn hover:shadow-lg hover:shadow-[#6b4226]/20"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
