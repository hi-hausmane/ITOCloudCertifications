import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Globe, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen relative overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl floating"></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center max-w-4xl mx-auto">
            <span className="gradient-text">FREE AWS Certification Training</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight text-center max-w-3xl mx-auto text-slate-200">
            Become a certified <span className="text-blue-400">AWS Solutions Architect (SAA-C03)</span> — today.
          </h2>

          {/* Urgency & Gmail Note */}
          <div className="text-center mb-8 max-w-3xl mx-auto space-y-2">
            <p className="text-lg md:text-xl font-semibold text-orange-400">
              🔥 Hurry! Only 1 week left — limited FREE spots available!
            </p>
            <p className="text-md md:text-lg text-blue-300">
              ✅ No credit card needed — just sign up with your Gmail on Udemy.
            </p>
          </div>

          {/* CTA Button (Top, Above the Fold) */}
          <div className="flex justify-center mb-10">
            <a
              href="https://www.udemy.com/course/most-valuable-aws-solutions-architect-associate-saa-c03/?couponCode=494FBE75F75DC4605184"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-xl font-semibold rounded-2xl shadow-lg pulse-glow"
              >
                🎓 Enroll Free on Udemy <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </a>
          </div>


          {/* Coupon & Info */}
          <div className="text-slate-300 mb-12 max-w-4xl mx-auto text-center space-y-4">
            <p className="text-lg md:text-xl">
              <strong>Use this coupon to enroll for FREE (limited time):</strong>
            </p>

            {/* Coupon Code */}
            <div>
              <code className="block mt-2 py-4 px-8 bg-slate-800 text-green-400 rounded-lg font-bold text-2xl tracking-wide">
                494FBE75F75DC4605184
              </code>
            </div>

          {/* Video Section */}
          <div
            className="my-12 mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 relative"
            style={{ aspectRatio: '16 / 9' }}
          >
            <iframe
              src="https://www.youtube.com/embed/qnFEdBHZS0U"
              title="AWS Course Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-presentation allow-popups"
              className="absolute inset-0 w-full h-full border-none"
            ></iframe>
          </div>
          
            {/* Backup Udemy Link */}
            <div>
              <a
                href="https://www.udemy.com/course/most-valuable-aws-solutions-architect-associate-saa-c03/?couponCode=494FBE75F75DC4605184"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline font-medium transition"
              >
                Or click here to enroll directly on Udemy
              </a>
            </div>

            {/* Contact */}
            <p className="text-slate-400 text-sm md:text-base">
              Questions? Contact:{' '}
              <a
                href="mailto:hausmane@itocloudcertifications.com"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                hausmane@itocloudcertifications.com
              </a>
            </p>
          </div>

          {/* CTA Button (Bottom) */}
          <div className="flex justify-center mb-12">
            <a
              href="https://www.udemy.com/course/most-valuable-aws-solutions-architect-associate-saa-c03/?couponCode=494FBE75F75DC4605184"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-xl font-semibold rounded-2xl shadow-lg pulse-glow"
              >
                🚀 Start Learning Now <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
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
