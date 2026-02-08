import SplashScreen from '@/components/SplashScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
<<<<<<< HEAD
import Features from '@/components/Features';
import About from '@/components/About';
=======
import About from '@/components/About';
import Dashboard from '@/components/Dashboard';
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTop from '@/components/ScrollToTop';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
<<<<<<< HEAD
        <Features />
        <About />
=======
        <About />
        <Dashboard />
>>>>>>> 5ca29a7a3916c1e3aa478aaae2aefaaba2dcc361
        <HowItWorks />
        <Benefits />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <CookieBanner />
      </main>
    </>
  );
}
