import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Target, Users, Download, Shield } from 'lucide-react';

const featuresData = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Comprehensive Curriculum",
    description: "Complete coverage of all AWS certification topics with hands-on labs and real-world scenarios."
  },
  {
    icon: <Play className="w-8 h-8" />,
    title: "Video Lessons",
    description: "High-quality video content with step-by-step explanations from AWS certified experts."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Practice Exams",
    description: "Realistic practice tests that mirror the actual AWS certification exam format."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Support",
    description: "Join thousands of students in our exclusive community for networking and support."
  },
  {
    icon: <Download className="w-8 h-8" />,
    title: "Downloadable Resources",
    description: "Access study guides, cheat sheets, and reference materials you can keep forever."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Lifetime Access",
    description: "Once enrolled, you'll have lifetime access to all course materials and updates."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our comprehensive course includes all the tools, resources, and support you need to pass your AWS certification exam with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-gradient p-8 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;