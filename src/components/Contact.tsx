import { MapPin, Phone, Mail, Clock, ArrowRight, Building, PhoneCall, MessageSquare } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { companyInfo } from '../data';

const contactCards = [
  {
    icon: Building,
    title: 'Visit Our Office',
    subtitle: 'Mumbai, Maharashtra, India',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    icon: PhoneCall,
    title: 'Call Us Today',
    subtitle: '+91 9167395110',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    icon: MessageSquare,
    title: 'Send a Message',
    subtitle: 'info@ghrihum-realestate.com',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
];

const contactInfoItems = [
  {
    icon: MapPin,
    label: 'Our Address',
    value: companyInfo.address,
  },
  {
    icon: Phone,
    label: 'Phone Number',
    value: companyInfo.phone,
  },
  {
    icon: Mail,
    label: 'Email Address',
    value: companyInfo.email,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Sat: 9:00 AM - 7:00 PM',
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-[#faf8f5] to-[#f5f0e8] py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#6b4226] uppercase mb-3">
            CONTACT US
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2a1808]">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left – Dark brown info card */}
          <div
            className={`relative bg-[#3d2410] rounded-3xl p-8 sm:p-12 text-white overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-r from-[#6b4226] to-[#c9a96e]/5 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-r from-[#6b4226] to-[#c9a96e]/5 rounded-full" />
            <div className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-r from-[#6b4226] to-[#c9a96e]/5 rounded-full" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
                Let's Discuss Your Property Needs
              </h3>
              <p className="text-white/70 mb-10 leading-relaxed">
                Whether you're looking to buy, sell, or invest in property, our expert team is here
                to guide you every step of the way. Reach out to us and let's make your real estate
                goals a reality.
              </p>

              {/* Contact info items */}
              <div className="space-y-6 mb-10">
                {contactInfoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6b4226] to-[#c9a96e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={18} className="text-[#c9a96e]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={companyInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6b4226] to-[#c9a96e] text-[#3d2410] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#e8ddd0] transition-colors duration-300 group"
              >
                Book Free Consultation
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right – 3 stacked contact cards */}
          <div className="flex flex-col gap-5">
            {contactCards.map((card, index) => (
              <div
                key={card.title}
                className={`group relative rounded-2xl min-h-[140px] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2
hover:scale-[1.03] hover:shadow-2xl ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: isVisible ? `${300 + index * 150}ms` : '0ms' }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2a1808]/90 via-[#2a1808]/70 to-[#2a1808]/40" />

                {/* Content */}
                <div className="relative z-10 flex items-center gap-5 p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#6b4226] to-[#c9a96e]/10 backdrop-blur-md transition-all duration-500 group-hover:bg-[#c9a96e]/30 group-hover:rotate-6">
                    <card.icon size={24} className="text-[#c9a96e]" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-bold text-lg mb-1">{card.title}</h4>
                    <p className="text-white/60 text-sm">{card.subtitle}</p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-white/40 ml-auto transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
