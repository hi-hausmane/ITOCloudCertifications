import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ logoUrl, showBlogLink = true, showJobsLink = true }) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="flex items-center">
            <img 
              src="/images/ito.png" 
              alt="ITO Cloud Certifications Logo" 
              className="h-10 w-auto" 
            />
          </a>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-6"
        >
          {showBlogLink && (
            <a href="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</a>
          )}

          {showJobsLink && (
            <a href="/jobs" className="text-slate-300 hover:text-white transition-colors">Jobs</a>
          )}
          
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;