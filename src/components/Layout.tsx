import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { TopHeader } from './TopHeader';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { ScrollToTop } from './ScrollToTop';
import { PageLoader } from './PageLoader';
import { cn } from '@/src/lib/utils';

export const Layout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <ScrollToTop />
      <header className={cn(
        "fixed top-0 left-0 right-0 z-[60] transition-transform duration-500",
        isScrolled && "md:-translate-y-10"
      )}>
        <TopHeader />
        <Navbar />
      </header>
      <main className={cn(
        "flex-grow overflow-x-hidden",
        !isHome && "md:pt-[120px] pt-24" // Account for fixed navbar on non-home pages
      )}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};
