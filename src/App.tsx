import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Plans from './components/Plans';
import PanelMockup from './components/PanelMockup';
import Locations from './components/Locations';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';

// Premium Futuristic System Upgrades
import LoadingScreen from './components/LoadingScreen';
import FlashSale from './components/FlashSale';
import LiveServerStatus from './components/LiveServerStatus';
import Infrastructure from './components/Infrastructure';
import MinecraftVersions from './components/MinecraftVersions';
import PaymentMethods from './components/PaymentMethods';
import AiSupport from './components/AiSupport';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse spotlight tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#05050a] text-slate-100 flex flex-col justify-between selection:bg-[#00f0ff]/20 selection:text-[#00f0ff] relative overflow-hidden">
      
      {/* Premium Diagnostic Loader */}
      <LoadingScreen />

      {/* Interactive Cyber Mouse Glow Spotlight */}
      <div 
        className="fixed pointer-events-none w-[350px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.04)_0%,transparent_70%)] rounded-full -translate-x-1/2 -translate-y-1/2 z-30 transition-shadow duration-300 hidden md:block"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      ></div>

      {/* Floating Interactive AI Assistant */}
      <AiSupport />

      {/* Sticky luxurious navigation */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* Interactive glow hero wrapper with realistic world map and network connections */}
        <Hero />

        {/* Floating countdown limited offer coupon block */}
        <FlashSale />

        {/* Dynamic Trust metrics banner */}
        <TrustBar />

        {/* Interactive Server Tiers Grid (Minecraft starting from ₹30, VPS starting from ₹60) */}
        <Plans />

        {/* Safe payments processor logo grid */}
        <PaymentMethods />

        {/* Interactive Minecraft version and server jars matrix */}
        <MinecraftVersions />

        {/* Live Playground Dashboard Console */}
        <PanelMockup />

        {/* Real-time server telemetry and diagnostic status table */}
        <LiveServerStatus />

        {/* Global vector Latency speed check mapping */}
        <Locations />

        {/* Physical Ryzen dedicated rack temperatures/RPM scheduler */}
        <Infrastructure />

        {/* High performance bento-style highlights */}
        <Features />

        {/* Performance & cost comparisons tabular graphic */}
        <WhyUs />

        {/* Positive Review sliding cards */}
        <Testimonials />

        {/* Floating Accordion FAQs panel */}
        <FAQ />

        {/* Discord community promoter card */}
        <SupportSection />

      </main>

      {/* Corporate directory and credits */}
      <Footer />

    </div>
  );
}

