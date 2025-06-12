import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Play, ArrowRight } from 'lucide-react';

const CoursePreviewSection = ({ onEnrollClick }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Premium Content</span><br />
              Built by Experts
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Our course content is created by AWS-certified professionals with years of real-world experience. 
              Every lesson is designed to not just help you pass the exam, but to make you a better cloud professional.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-slate-300">150+ HD video lessons covering all exam topics</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-slate-300">Hands-on labs with real AWS environments</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-slate-300">500+ practice questions with detailed explanations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-slate-300">Downloadable study guides and cheat sheets</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={onEnrollClick}
            >
              View Full Curriculum <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="card-gradient p-8 rounded-2xl glow-effect">
              <img  
                className="w-full h-64 object-cover rounded-xl mb-6" 
                alt="AWS course dashboard showing video lessons and progress tracking"
                src="https://images.unsplash.com/photo-1624388611710-bdf95023d1c2" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">AWS Solutions Architect</h4>
                    <p className="text-slate-400 text-sm">Chapter 1: Introduction to AWS</p>
                  </div>
                </div>
                <div className="text-blue-400 font-semibold">12:34</div>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-slate-300 text-sm">Progress: 75% complete</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursePreviewSection;