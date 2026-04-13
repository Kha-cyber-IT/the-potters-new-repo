import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Page } from './types';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { InfoPages } from './components/InfoPages';
import { ActionPages } from './components/ActionPages';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const scrollTargetRef = useRef<string | null>(null);
  const navCounterRef = useRef(0);
  const [navTick, setNavTick] = useState(0);

  useEffect(() => {
    const target = scrollTargetRef.current;
    scrollTargetRef.current = null;
    let rafId1: number;
    let rafId2: number;
    if (target) {
      rafId1 = requestAnimationFrame(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      // Double rAF ensures DOM is fully painted before scrolling
      rafId1 = requestAnimationFrame(() => {
        rafId2 = requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        });
      });
    }
    return () => {
      cancelAnimationFrame(rafId1);
      if (rafId2 !== undefined) cancelAnimationFrame(rafId2);
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

  const bgColor = currentPage === Page.Home ? 'bg-[#1a1a1a]' : 'bg-[#0f0f0f]';

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
