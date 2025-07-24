import React from 'react';
import { motion } from 'framer-motion';

const CoursePreviewSection = ({ onEnrollClick }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Instructor Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Hausmane,   <span className="gradient-text">CEO</span>, of ITO Cloud Certifications !
            </h2>

            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                <strong>Hi, I'm Hausmane</strong>, an AWS cloud trainer with 6+ years of experience in cloud computing.
              </p>
              <p>
                🎓 Graduated from Universidad Politécnica de Madrid. Worked internationally — in Switzerland (at a UN NGO in Geneva) and the Netherlands as a cloud consultant.
              </p>
              <p>
                💼 I’ve helped startups, SMEs, and international organizations design custom AWS solutions, focusing on automation, data management, and AWS infrastructure.
              </p>
              <p>
                💻 Now, I create hands-on, project-driven courses to help beginners and career changers break into cloud.
              </p>
              <p className="font-semibold text-white">
                🚀 My goal? Make cloud computing practical, accessible, and career-ready.
              </p>
            </div>
          </motion.div>

          {/* Your Image – MAX SIZE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <img
              src="/images/moi.png"
              alt="Hausmane - AWS Instructor"
              className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
              style={{ filter: "brightness(1.1) contrast(1.05)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursePreviewSection;