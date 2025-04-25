// File: pages/index.js
import { useState } from 'react';
import TopMenuBar from '../components/TopMenuBar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TherapySection from '../components/TherapySection';
import CommunitySection from '../components/CommunitySection';

export default function Home() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800 text-white'}`}>
      <TopMenuBar theme={theme} setTheme={setTheme} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TherapySection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}