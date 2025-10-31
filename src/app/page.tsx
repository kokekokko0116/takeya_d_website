import Box from '@mui/material/Box';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import StoresSection from '@/components/sections/StoresSection';
import CTASection from '@/components/sections/CTASection';
import ScrollToTop from '@/components/common/ScrollToTop';

export default function Home() {
  return (
    <Box>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AchievementsSection />
        <ServicesSection />
        <StoresSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </Box>
  );
}
