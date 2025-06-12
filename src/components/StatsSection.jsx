import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  { number: "1,800+", label: "Students Enrolled" },
  { number: "95%", label: "Satisfaction" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "24/7", label: "Support Available" }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;