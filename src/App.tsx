import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MobileMenu } from "./components/MobileMenu";
import { FloatingActionButton } from "./components/FloatingActionButton";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl" lang="ar">
      <Header onMenuClick={handleMenuClick} />
      {isMobileMenuOpen && (
        <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
      )}
      
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      
      <Footer />
      <FloatingActionButton />
      <Toaster position="top-center" />
    </div>
  );
}