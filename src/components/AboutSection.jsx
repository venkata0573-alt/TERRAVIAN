
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Target, Award } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AboutSection = () => {
  const stats = [
    { icon: Target, label: "Reliability", value: "100%" },
    { icon: Award, label: "Excellence", value: "Top Rated" },
    { icon: Users, label: "Community", value: "Local" },
    { icon: Heart, label: "Quality", value: "Premium" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#4ade80] rounded-3xl transform rotate-3 scale-105 opacity-20" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <LazyLoadImage
                src="https://images.unsplash.com/photo-1703001716301-c684d501f9a7"
                alt="Terravian Landscaping professional team at work"
                effect="blur"
                className="w-full h-[500px] object-cover"
                wrapperClassName="w-full h-full block"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                <p className="text-[#1a4d2e] font-bold text-4xl mb-1">100%</p>
                <p className="text-gray-600 font-medium">Client Satisfaction Guarantee on all services</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#4ade80] font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h2 className="text-4xl font-bold text-[#1a4d2e] mb-6">Growing From Roots to Results</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Terravian Landscaping started with a single truck, a mower, and a commitment to doing things right. Today, we're proud to serve dozens of residential and commercial clients across Connecticut, but our core values remain unchanged.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that your outdoor space is an extension of your home or business. That's why we treat every property as if it were our own, delivering meticulous care and reliable service you can count on, season after season.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-[#1a4d2e]/5 rounded-lg text-[#1a4d2e]">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{stat.label}</h4>
                    <p className="text-sm text-gray-500">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
