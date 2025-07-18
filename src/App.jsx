import React, { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';

// Components
import BlogList from '@/components/BlogList';
import BlogPost from '@/components/BlogPost';
import JobsList from '@/components/JobsList';
import JobPost from '@/components/JobPost';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import CoursePreviewSection from '@/components/CoursePreviewSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import EmailCaptureModal from '@/components/EmailCaptureModal';

// Utils
import { getSortedPostsData, getPostData } from '@/utils/blogReader';
import { getSortedJobData, getJobData } from '@/utils/jobReader';  // ← We'll create this next

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/b935bfeb-be26-47f1-b683-7524f7cd4a2d/259d0b5b786315c56f9e7ca2015457a0.png";   
  const udemyCourseLink = "https://www.udemy.com/course/most-valuable-aws-solutions-architect-associate-saa-c03/?couponCode=087D7EFDDB1A30CEB44E";

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  // Detect current URL path
  const path = window.location.pathname;

  let pageContent;

  // --- BLOG ROUTES ---
  if (path === '/blog') {
    const posts = getSortedPostsData();
    pageContent = <BlogList posts={posts} />;
  } else if (path.startsWith('/blog/')) {
    const slug = path.split('/blog/')[1];
    const postData = getPostData(slug);
    pageContent = <BlogPost postData={postData} />;

  // --- JOBS ROUTES ---
  } else if (path === '/jobs') {
    const jobs = getSortedJobData();
    pageContent = <JobsList jobs={jobs} />;
  } else if (path.startsWith('/jobs/')) {
    const slug = path.split('/jobs/')[1];
    const jobData = getJobData(slug);
    pageContent = <JobPost jobData={jobData} />;

  // --- DEFAULT HOMEPAGE ---
  } else {
    pageContent = (
      <>
        <HeroSection onEnrollClick={handleEnrollClick} />
        <StatsSection />
        <FeaturesSection />
        <CoursePreviewSection onEnrollClick={handleEnrollClick} />
        <TestimonialsSection />
        <PricingSection onEnrollClick={handleEnrollClick} />
        <CtaSection onEnrollClick={handleEnrollClick} />
        <Footer logoUrl={logoUrl} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Header 
        logoUrl={logoUrl} 
        showBlogLink={path !== '/blog' && !path.startsWith('/blog/')}
        showJobsLink={path !== '/jobs' && !path.startsWith('/jobs/')}
      />
      {pageContent}
      <EmailCaptureModal 
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen}
        udemyLink={udemyCourseLink}
      />
      <Toaster />
    </div>
  );
}

export default App;