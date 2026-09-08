import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { FeaturedWork } from './components/FeaturedWork';
import { Pricing } from './components/Pricing';
import { Maintenance } from './components/Maintenance';
import { Hosting } from './components/Hosting';
import { ComparisonTable } from './components/ComparisonTable';
import { AboutAndWhy } from './components/AboutAndWhy';
import { WorkProcess } from './components/WorkProcess';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const handleStartProject = () => {
    const pricingEl = document.querySelector('#pricing');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#f4f4f7] selection:bg-red-600/30 selection:text-white relative">
      {/* Sticky Navigation */}
      <Navbar onStartProject={handleStartProject} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        {/* Hero Section */}
        <Hero onStartProject={handleStartProject} />

        {/* Quick Stats / Trust */}
        <Stats />

        {/* Services (What I Build - 8 Cards) */}
        <Services />

        {/* Featured Work (Selected Work - 5 Projects) */}
        <FeaturedWork />

        {/* Pricing (3 Plans) */}
        <Pricing />

        {/* Maintenance Plans (3 Monthly Plans) */}
        <Maintenance />

        {/* Hosting (1 Year Free + Renewal Details) */}
        <Hosting />

        {/* Comparison Table */}
        <ComparisonTable />

        {/* About & Why Apex Surya */}
        <AboutAndWhy />

        {/* Work Process (Cinematic 5-Step Timeline) */}
        <WorkProcess />

        {/* Instagram Follow Journey */}
        <InstagramSection />

        {/* Contact (Project Form, 2 Options, Email Queries) */}
        <ContactSection />

        {/* Final CTA */}
        <FinalCTA onStartProject={handleStartProject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
