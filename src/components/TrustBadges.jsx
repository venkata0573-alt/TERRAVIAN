
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Star, MapPin } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      text: "Fully Insured & Licensed",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      text: "24/7 Emergency Response",
      color: "text-red-400"
    },
    {
      icon: Star,
      text: "5-Star Rated Service",
      color: "text-yellow-400"
    },
    {
      icon: MapPin,
      text: "Locally Owned & Operated",
      color: "text-[#4ade80]"
    }
  ];

  return (
    <div className="relative -mt-20 z-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex items-center gap-4 p-6 rounded-xl bg-[#1a4d2e]/90 backdrop-blur-lg border border-[#4ade80]/20 shadow-xl hover:bg-[#1f5c37] transition-colors group"
          >
            <div className={`p-3 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-300`}>
              <badge.icon className={`w-6 h-6 ${badge.color}`} />
            </div>
            <span className="text-white font-medium text-lg leading-tight">
              {badge.text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
