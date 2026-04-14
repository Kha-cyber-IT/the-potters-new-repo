import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { Page } from './types';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { InfoPages } from './components/InfoPages';
import { ActionPages } from './components/ActionPages';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const scrollTargetRef = useRef<string | null>(null);
  const consumedTargetRef = useRef<string | null>(null);
  const navCounterRef = useRef(0);
  const [navTick, setNavTick] = useState(0);

  // Disable browser automatic scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  // useLayoutEffect runs BEFORE the browser paints, preventing flash of wrong scroll position
  useLayoutEffect(() => {
    const target = scrollTargetRef.current;
    scrollTargetRef.current = null;
    consumedTargetRef.current = target;

    // Immediately force scroll to top synchronously (before paint)
    if (!target) {
      window.scrollTo(0, 0);
    }
  }, [currentPage, navTick]);

  // useEffect handles post-paint scroll corrections and smooth scroll targets
  useEffect(() => {
    const target = consumedTargetRef.current;
    consumedTargetRef.current = null;
    let rafId1: number;
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    };

    if (target) {
      // Scroll to a specific element after paint
      rafId1 = requestAnimationFrame(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      // Post-paint scroll corrections: double rAF + staggered timeouts
      // to handle Framer Motion animations, lazy images, and async content
      rafId1 = requestAnimationFrame(() => {
        scrollToTop();
        requestAnimationFrame(scrollToTop);
      });

      // Staggered fallbacks for content that loads/animates after initial paint
      [50, 150, 300].forEach(delay => {
        timeoutIds.push(setTimeout(scrollToTop, delay));
      });
    }

    return () => {
      if (rafId1 !== undefined) cancelAnimationFrame(rafId1);
      timeoutIds.forEach(clearTimeout);
    };
  }, [currentPage, navTick]);

  const handleSetPage = useCallback((page: Page, scrollTarget?: string) => {
    scrollTargetRef.current = scrollTarget ?? null;
    navCounterRef.current += 1;
    setNavTick(navCounterRef.current);
    setCurrentPage(page);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home setPage={handleSetPage} />;
      
      // Info & Visionary Pages
      case Page.AboutUs:
      case Page.NewBuilding:
      case Page.OurStaff:
      case Page.ChurchPlanting:
      case Page.OurVision:
      case Page.StatementOfFaith:
        return <InfoPages page={currentPage} setPage={handleSetPage} />;

      // Action, Ministry & Event Pages
      case Page.GetConnected:
      case Page.PlanAVisit:
      case Page.Conference2025:
      case Page.Events2026:
      case Page.Stories:
      case Page.Give:
      case Page.Ministries:
      case Page.ChildrensMinistry:
      case Page.Recovery:
        return <ActionPages page={currentPage} setPage={handleSetPage} />;
        
      default:
        return <Home setPage={handleSetPage} />;
    }
  };

  const bgColor = currentPage === Page.Home ? 'bg-[#F5F0E8]' : 'bg-[#0f0f0f]';

  return (
    <div className={`min-h-screen w-full relative ${bgColor} transition-colors duration-500`}>
      <Navigation 
        currentPage={currentPage}
        setPage={handleSetPage} 
      />

      <main className="w-full">
        <div className="w-full">
          {renderContent()}
          <Footer setPage={handleSetPage} />
        </div>
      </main>
    </div>
  );
}
