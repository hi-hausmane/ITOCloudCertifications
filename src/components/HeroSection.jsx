import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, CheckCircle, Clock, Globe, ArrowRight } from 'lucide-react';

const HeroSection = ({ onEnrollClick }) => {
  return (
    <section className="hero-gradient min-h-screen relative overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center max-w-4xl mx-auto">
            <span className="gradient-text">LEAVE US 5 STARS</span> and get new courses<br />
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center max-w-4xl mx-auto">
            <span className="gradient-text">Your</span> AWS Certification <span className="gradient-text">SAA-C03</span><br />
          </h2>

          {/* Big & Bold Gmail Message - Now Before Video */}
          <div className="text-center mb-8 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-semibold text-blue-300">
              ✅ No credit card needed — Udemy only requires a Gmail to sign up!
            </p>
          </div>

          {/* Video Section */}
          <div className="my-12 mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 relative" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              src="https://www.youtube.com/embed/qnFEdBHZS0U"
              title="AWS Course Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-presentation allow-popups"
              className="absolute inset-0 w-full h-full border-none"
              onError={(e) => {
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                const fallback = parent.querySelector('.video-fallback');
                if (fallback) fallback.style.display = 'flex';
              }}
            ></iframe>

            {/* Fallback if video fails to load */}
            <div className="video-fallback absolute inset-0 bg-slate-800 flex flex-col items-center justify-center text-center p-6 text-white hidden">
              <p className="text-lg mb-4">🎥 Video not loading?</p>
              <a
                href="https://www.youtube.com/watch?v=qnFEdBHZS0U"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Watch the preview on YouTube
              </a>
            </div>
          </div>

          {/* Subtitle - Link & Coupon */}
          <div className="text-slate-300 mb-10 max-w-4xl mx-auto text-center space-y-4">
            <p className="text-lg md:text-xl">
              <strong>Enroll now on Udemy — Course is FREE with coupon - 5 STARS + Comment!</strong>
            </p>

            {/* Urgency Message */}
            <p className="text-orange-400 font-semibold">
              ⚠️ Hurry! Only 1 week left — Just 100 spots remaining!
            </p>

            {/* Video Callout */}
            <p className="text-slate-300 text-base">
              Watch the video above for a full walkthrough of what you’ll learn!
            </p>

            {/* Udemy Link */}
            <div>
              <a 
                href="https://www.udemy.com/course/most-valuable-aws-solutions-architect-associate-saa-c03/?couponCode=494FBE75F75DC4605184"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-mono text-sm md:text-base break-all underline transition block px-2"
              >
                https://www.udemy.com/course/most-valuable-aws-solutions-architect-associate-saa-c03/?couponCode=494FBE75F75DC4605184
              </a>
            </div>

            {/* Coupon Code */}
            <div>
              <span className="text-gray-400">Coupon Code:</span>
              <code className="block mt-2 py-3 px-6 bg-slate-800 text-green-400 rounded-lg font-bold text-lg">
                494FBE75F75DC4605184
              </code>
            </div>

            {/* Email Address */}
            <div className="mt-4">
              <p className="text-slate-400 text-sm md:text-base">
                Contact: 
                <a 
                  href="mailto:hausmane@itocloudcertifications.com"
                  className="text-blue-400 hover:text-blue-300 ml-1 transition"
                >
                  hausmane@itocloudcertifications.com
                </a>
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://www.udemy.com/course/most-valuable-aws-solutions-architect-associate-saa-c03/?couponCode=494FBE75F75DC4605184"
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold pulse-glow"
              >
                Start Learning Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>Self-Paced Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" />
              <span>Lifetime Access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;