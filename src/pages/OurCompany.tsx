import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Building2, Handshake, Users, Award, Target, Heart } from 'lucide-react';
import { companyInfo } from '../data';
import { useScrollReveal } from '../hooks/useScrollReveal';

const teamMembers = [
  {
    name: 'Mr. Nitesh Yadav',
    role: 'Founder & CEO',
    image: '/images/NiteshYadav.jpg',
    phone: '+91-9136065603',
    description:
      'Visionary leader with over 10 years of experience in Mumbai real estate. Nitesh founded Ghrihum with a mission to make property dealings transparent, trustworthy, and accessible.',
  },
  {
    name: 'Mr. Vijay',
    role: 'Co-Founder & CTO',
    image: '/images/Vijay.jpg',
    phone: '+91-8286772066',
    description:
      'Technology and operations expert driving Ghrihum’s digital presence and streamlined processes for a seamless client experience.',
  },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in every project we undertake.',
  },
  {
    icon: Handshake,
    title: 'Trust',
    description: 'Building lasting relationships through transparency and integrity.',
  },
  {
    icon: Target,
    title: 'Commitment',
    description: 'Dedicated to delivering results that exceed our clients\' expectations.',
  },
  {
    icon: Heart,
    title: 'Client First',
    description: 'Every decision we make is driven by our clients\' best interests.',
  },
];

const milestones = [
  { year: '2014', title: 'Founded', description: 'Ghrihum Real Estate was established in Mumbai.' },
  { year: '2016', title: 'First Major Project', description: 'Completed our first large-scale residential collaboration.' },
  { year: '2019', title: '100+ Happy Clients', description: 'Crossed 100 successful property transactions.' },
  { year: '2022', title: 'Expanding Horizons', description: 'Expanded into commercial and industrial real estate sectors.' },
  { year: '2024', title: '500+ Clients', description: 'Serving over 500 happy clients across Mumbai Suburban.' },
];

export default function OurCompany() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();
  const { ref: teamRef, isVisible: teamVisible } = useScrollReveal();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#2a1808] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </Link>
          <span className="text-lg font-serif font-bold text-white">Ghrihum Real Estate</span>
          <div className="w-24" />
        </div>
      </div>

      {/* Hero Banner */}
      <section
        ref={heroRef}
        className="relative pt-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a1808] via-[#3d2410] to-[#6b4226]" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201, 169, 110, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201, 169, 110, 0.2) 0%, transparent 40%)',
            }}
          />
        </div>
        <div
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Building2 className="w-4 h-4 text-[#c9a96e]" />
              <span className="text-sm font-medium text-white/90 tracking-wide">Our Company</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building Trust,<br />
              <span className="text-[#c9a96e]">Delivering Excellence</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Your trusted partner for residential, commercial, and industrial
              real estate in Mumbai since 2014.
            </p>
          </div>
        </div>
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1440 60 1440 60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div
          ref={aboutRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="uppercase tracking-wider text-sm font-medium text-[#6b4226]">
                About Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Professional Real Estate Services in Mumbai
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Ghrihum Real Estate, we offer professional property services tailored for
                  buyers, sellers, and investors. Our team helps you find the right property,
                  sell at the best value, and explore smart investment opportunities.
                </p>
                <p>
                  With strong knowledge of the Mumbai Suburban market, we provide trusted
                  guidance at every step. From property search to final deal completion, we
                  ensure a smooth and reliable experience.
                </p>
                <p>
                  Our expertise spans across construction & development, sale & purchase,
                  and collaboration & joint ventures — making us your one-stop solution
                  for all real estate needs.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {[
                  { value: '10+', label: 'Years Experience' },
                  { value: '500+', label: 'Happy Clients' },
                  { value: '120+', label: 'Projects Done' },
                  { value: '98%', label: 'Success Rate' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-[#f5f0e8]">
                    <div className="text-2xl font-bold text-[#6b4226]">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Ghrihum Real Estate Office"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#6b4226] text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold font-serif">10+</div>
                <div className="text-sm text-white/80">Years of<br />Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#f5f0e8]">
        <div
          ref={valuesRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="text-center mb-16">
            <span className="uppercase tracking-wider text-sm font-medium text-[#6b4226]">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#6b4226]/10 flex items-center justify-center mb-4 group-hover:bg-[#6b4226] transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#6b4226] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20">
        <div
          ref={teamRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="text-center mb-16">
            <span className="uppercase tracking-wider text-sm font-medium text-[#6b4226]">
              Our Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Meet the People Behind Ghrihum
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Photo */}
                <div className="relative h-[350px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/images/default-profile.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-serif font-bold text-white">{member.name}</h3>
                    <span className="text-[#c9a96e] text-sm font-medium">{member.role}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.description}</p>
                  <div className="flex items-center gap-4">
                    <a
                      href={`tel:${member.phone.replace(/-/g, '')}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6b4226]/10 text-[#6b4226] text-sm font-medium hover:bg-[#6b4226] hover:text-white transition-all duration-300"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-[#2a1808]">
        <div
          ref={timelineRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="text-center mb-16">
            <span className="uppercase tracking-wider text-sm font-medium text-[#c9a96e]">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-3">
              Milestones That Define Us
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10" />

            {milestones.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#c9a96e] border-2 border-[#2a1808] z-10 mt-1.5" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8 md:text-left'}`}>
                  <span className="text-[#c9a96e] font-bold text-lg">{item.year}</span>
                  <h3 className="text-white font-semibold text-lg mt-1">{item.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch With Us
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Have a question or want to discuss a project? Reach out to us through any of these channels.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <a
              href="tel:+919136065603"
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#6b4226]/10 flex items-center justify-center group-hover:bg-[#6b4226] transition-colors duration-300">
                <Phone className="w-5 h-5 text-[#6b4226] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Phone</div>
                <div className="font-medium text-gray-900 text-sm">+91-9136065603</div>
                <div className="font-medium text-gray-900 text-sm">+91-8286772066</div>
              </div>
            </a>

            <a
              href={`mailto:${companyInfo.email}`}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#6b4226]/10 flex items-center justify-center group-hover:bg-[#6b4226] transition-colors duration-300">
                <Mail className="w-5 h-5 text-[#6b4226] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Email</div>
                <div className="font-medium text-gray-900 text-sm">{companyInfo.email}</div>
              </div>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#6b4226]/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#6b4226]" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Address</div>
                <div className="font-medium text-gray-900 text-sm">{companyInfo.address}</div>
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6b4226] hover:bg-[#3d2410] text-white font-semibold text-sm tracking-wide rounded-full transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="bg-[#2a1808] text-white/40 text-xs py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
