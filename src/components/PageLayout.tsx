import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import MobileCTA from './MobileCTA';

interface PageLayoutProps {
  children: React.ReactNode;
  heroOverlay?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, heroOverlay = false }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </div>
  );
};

export default PageLayout;
