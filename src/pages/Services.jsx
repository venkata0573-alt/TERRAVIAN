
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Snowflake, Sun, Leaf, Hammer } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Snow Plowing & Salting",
      description: "Comprehensive winter property management to ensure safety and accessibility during the harshest storms.",
      image: "https://images.unsplash.com/photo-1674498782829-2c6f363c982a",
      features: ["24/7 Storm Monitoring & Response", "Driveway & Parking Lot Clearing", "Salt & Sand Application", "Emergency Call-Out Service"],
      icon: Snowflake,
      accent: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Lawn Care & Landscaping",
      description: "Professional lawn maintenance and design services to keep your property looking pristine year-round.",
      image: "https://images.unsplash.com/photo-1571937655835-8b71c0be3eeb",
      features: ["Weekly Mowing & Trimming", "Custom Landscape Design", "Seasonal Planting & Sodding", "Fertilization Programs"],
      icon: Sun,
      accent: "text-green-500",
      bg: "bg-green-50"
    },
    {
      title: "Seasonal Cleanups",
      description: "Thorough spring and fall cleanups to remove debris and prepare your landscape for the changing seasons.",
      image: "https://images.unsplash.com/photo-1669700276429-f2563c3fcd4e",
      features: ["Leaf Removal & Vacuuming", "Gutter Cleaning", "Debris Hauling", "Bed Edging & Mulching"],
      icon: Leaf,
      accent: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Hardscaping",
      description: "Beautiful and durable outdoor living spaces designed to enhance your property's value and functionality.",
      image: "https://images.unsplash.com/photo-1661401168391-e1335371ecd9",
      features: ["Patio & Walkway Installation", "Retaining Walls", "Stone Fire Pits", "Custom Staircases"],
      icon: Hammer,
      accent: "text-gray-600",
      bg: "bg-gray-100"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Terravian Landscaping LLC</title>
        <meta name="description" content="Explore our comprehensive landscaping and snow plowing services. From lawn care to hardscaping, we have you covered year-round." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1a4d2e] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-green-100 max-w-2xl mx-auto"
          >
            Professional care for every season. We treat your property like our own.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col"
              >
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <LazyLoadImage
                    src={service.image}
                    alt={service.title}
                    effect="blur"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    wrapperClassName="w-full h-full block"
                  />
                  <div className={`absolute top-4 right-4 p-3 bg-white/90 backdrop-blur rounded-lg shadow-lg z-20 ${service.accent}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1a4d2e] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-[#4ade80] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/contact">
                      <button className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-[#4ade80] hover:text-[#1a4d2e] transition-colors flex items-center justify-center gap-2 group/btn">
                        Learn More
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1a4d2e] to-[#0f2f1e] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-green-100 mb-8">
            Every property is unique. Contact us for a personalized quote tailored to your specific needs.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#4ade80] text-[#1a4d2e] rounded-full font-bold hover:bg-white transition-colors">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
