import React from 'react';

const Footer = ({ logoUrl }) => {
  return (
    <footer className="bg-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            {logoUrl ? (
              <img src={logoUrl} alt="AWS Master Course Logo" className="h-10 w-auto mb-4" />
            ) : (
              <h3 className="text-2xl font-bold gradient-text mb-4">AWS Master</h3>
            )}
            <p className="text-slate-400 mb-4">
              The most comprehensive AWS certification course designed to accelerate your cloud career.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                <span className="text-blue-400 font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                <span className="text-blue-400 font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                <span className="text-blue-400 font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold mb-4 block text-white">Course</span>
            <div className="space-y-2 text-slate-400">
              <p className="hover:text-white transition-colors cursor-pointer">Curriculum</p>
              <p className="hover:text-white transition-colors cursor-pointer">Practice Exams</p>
              <p className="hover:text-white transition-colors cursor-pointer">Study Materials</p>
            </div>
          </div>
        
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} AWS Master Course. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;