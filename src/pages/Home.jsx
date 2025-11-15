
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Snowflake, Leaf, Hammer } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';

const Home = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const featuredServices = [
    {
      title: "Snow Plowing",
      description: "24/7 emergency response and ice control for commercial & residential properties.",
      icon: Snowflake,
      accent: "bg-blue-50 text-blue-500",
    },
    {
      title: "Lawn Care",
      description: "Professional mowing, fertilization, and maintenance programs for a pristine lawn.",
      icon: Leaf,
      accent: "bg-green-50 text-green-500",
    },
    {
      title: "Hardscaping",
      description: "Custom patios, walkways, and retaining walls to transform your outdoor living space.",
      icon: Hammer,
      accent: "bg-gray-100 text-gray-600",
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terravian Landscaping LLC | Snow Plowing Meriden CT | Connecticut Landscaping</title>
        <meta name="description" content="Professional 24/7 snow plowing, landscaping, and property maintenance in Meriden, CT. We service commercial and residential clients across Connecticut. Call for a free quote!" />
        <meta property="og:title" content="Terravian Landscaping | Premier Property Maintenance" />
        <meta property="og:description" content="Professional snow plowing and landscaping services in Connecticut. Fully insured & reliable." />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1609799315337-991c510c1b3b" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Terravian Landscaping LLC",
              "image": "https://images.unsplash.com/photo-1609799315337-991c510c1b3b",
              "telephone": "(203) 514-1452",
              "email": "terravianlandscaping@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Meriden",
                "addressRegion": "CT",
                "postalCode": "06450",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.5381",
                "longitude": "-72.8070"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "priceRange": "$$"
            }
          `}
        </script>
      </Helmet>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#4ade80] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Components in Order */}
      <HeroSection />
      <TrustBadges />
      
      {/* Featured Services Section - New Replacement for ServicesSection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We provide comprehensive property solutions year-round. Here's a glimpse of what we do best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-lg ${service.accent} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-[#1a4d2e] font-semibold hover:text-[#4ade80] transition-colors"
                >
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <button className="px-8 py-4 bg-[#1a4d2e] text-white rounded-full font-bold shadow-lg hover:bg-[#143d24] transition-colors flex items-center justify-center gap-2 mx-auto">
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Keep Existing Sections */}
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
};

export default Home;
