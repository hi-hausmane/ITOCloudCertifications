import React from 'react';

export default function FormationPage({ onEnrollClick }) {
  return (
    <>
      <HeroSection onEnrollClick={onEnrollClick} />
      <StatsSection />
      <FeaturesSection />
      <CoursePreviewSection onEnrollClick={onEnrollClick} />
      <TestimonialsSection />
      <PricingSection onEnrollClick={onEnrollClick} />
      <CtaSection onEnrollClick={onEnrollClick} />
      <Footer logoUrl="https://storage.googleapis.com/hostinger-horizons-assets-prod/b935bfeb-be26-47f1-b683-7524f7cd4a2d/259d0b5b786315c56f9e7ca2015457a0.png"  />
    </>
  );
}
