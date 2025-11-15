
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Hotel Manager, Meriden",
      content: "Terravian has been our go-to for snow removal for 3 years. They respond immediately and our parking lot is always clear! Essential for our business operations.",
      rating: 5
    },
    {
      name: "Mike Peterson",
      role: "Homeowner",
      content: "Best landscaping service in Connecticut! My lawn has never looked better. Professional, reliable, and affordable. Highly recommended for anyone looking for quality work.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Gas Station Owner",
      content: "Their 24/7 availability is a lifesaver during winter storms. Highly recommend for commercial properties! The team is professional and always on time.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#1a4d2e] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community is saying about Terravian.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-xl relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#4ade80]/20" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed italic relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto border-t border-gray-100 pt-6">
                <p className="font-bold text-[#1a4d2e] text-lg">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
