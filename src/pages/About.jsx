
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Star, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: "Years in Business", value: "15+" },
    { label: "Projects Completed", value: "2,000+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Team Members", value: "24" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      desc: "Dependable service you can count on, rain or shine."
    },
    {
      icon: Star,
      title: "Quality",
      desc: "Excellence in every project, no matter the size."
    },
    {
      icon: Users,
      title: "Community",
      desc: "Supporting local neighborhoods and businesses."
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Commitment to perfection in every detail."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Terravian Landscaping LLC</title>
        <meta name="description" content="Learn about Terravian Landscaping's 15+ years of experience, our core values, and our commitment to excellence in snow plowing and landscaping." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1a4d2e] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Terravian
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-green-100 max-w-2xl mx-auto"
          >
            Building trust and beautiful landscapes in Connecticut for over 15 years.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Terravian Landscaping began with a simple mission: to provide reliable, high-quality property maintenance that homeowners and businesses could truly depend on. What started as a small operation with a single truck has grown into one of the region's most respected landscaping and snow removal companies.
                </p>
                <p>
                  Over the past 15+ years, we've honed our craft, expanded our fleet, and built a team of dedicated professionals who share our passion for the outdoors. Despite our growth, we've never lost sight of our roots. We treat every client like a neighbor because, to us, that's exactly what you are.
                </p>
                <p>
                  Today, we are proud to serve over 2,000 satisfied clients, delivering year-round solutions that enhance safety, beauty, and property value across Connecticut.
                </p>
              </div>
              
              {/* Mission Statement */}
              <div className="mt-8 p-6 bg-green-50 rounded-xl border-l-4 border-[#1a4d2e]">
                <h3 className="font-bold text-[#1a4d2e] mb-2 uppercase tracking-wide text-sm">Our Mission</h3>
                <p className="italic text-gray-700 font-medium text-lg">
                  "To transform and maintain outdoor spaces with unwavering reliability, exceptional quality, and a deep commitment to the communities we serve."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#4ade80]/20 rounded-2xl transform rotate-3"></div>
              <LazyLoadImage
                src="https://images.unsplash.com/photo-1703001716301-c684d501f9a7"
                alt="Terravian Landscaping Team"
                effect="blur"
                className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover"
                wrapperClassName="w-full h-full block"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1a4d2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#4ade80] mb-2">{stat.value}</div>
                <div className="text-green-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4ade80] transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-[#1a4d2e]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Terravian?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Licensed & Insured", desc: "Full peace of mind knowing your property is protected." },
              { title: "Modern Equipment", desc: "We invest in top-tier machinery for efficiency and quality." },
              { title: "Communication", desc: "Direct access to our team with prompt responses." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl hover:border-[#4ade80] transition-colors">
                <div className="w-12 h-12 bg-[#1a4d2e] rounded-full flex items-center justify-center text-white mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a4d2e] text-white rounded-full font-bold hover:bg-[#143d24] transition-colors shadow-lg hover:shadow-xl">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
