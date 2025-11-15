
import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Leaf, ClipboardCheck, Hammer, Check } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ServicesSection = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Snow Plowing & Salting",
      description: "Keep your property safe and accessible all winter long.",
      features: ["24/7 Emergency Response", "Commercial & Residential", "Ice Control & Salting", "Walkway Clearing"],
      color: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1609799315337-991c510c1b3b" // Reusing hero image contextually for snow if needed, or keeping it abstract
    },
    {
      icon: Leaf,
      title: "Lawn Care & Landscaping",
      description: "Professional maintenance for a lush, green lawn.",
      features: ["Weekly Mowing", "Fertilization Programs", "Landscape Design", "Sod Installation"],
      color: "bg-[#4ade80]",
      image: "https://images.unsplash.com/photo-1587566417705-719c328cbbdb"
    },
    {
      icon: ClipboardCheck,
      title: "Seasonal Cleanups",
      description: "Spring and fall cleanups to prepare your yard.",
      features: ["Leaf Removal", "Gutter Cleaning", "Debris Removal", "Mulch Installation"],
      color: "bg-orange-500",
      image: null
    },
    {
      icon: Hammer,
      title: "Hardscaping",
      description: "Permanent features to enhance your outdoor living space.",
      features: ["Patios & Walkways", "Retaining Walls", "Stone Work", "Fire Pits"],
      color: "bg-gray-500",
      image: null
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#1a4d2e] font-bold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Comprehensive Property Care</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From winter storms to summer blooms, we provide professional year-round maintenance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100"
            >
              {service.image && (
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#1a4d2e]/20 group-hover:bg-transparent transition-colors z-10" />
                  <LazyLoadImage
                    src={service.image}
                    alt={service.title}
                    effect="blur"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    wrapperClassName="w-full h-full block"
                  />
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-grow">
                <div className={`w-12 h-12 rounded-lg ${service.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 ${service.color.replace('bg-', 'text-')}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="mt-auto space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-[#4ade80] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
