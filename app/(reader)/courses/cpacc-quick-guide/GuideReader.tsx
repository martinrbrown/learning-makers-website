'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { Chapter } from '@/lib/guide';

export default function GuideReader({
  chapters,
  guideTitle,
  firstPageHref,
  children,
}: {
  chapters: Chapter[];
  guideTitle: string;
  firstPageHref: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [exitClass, setExitClass] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  // Keep a ref in sync with the latest isOpen so touch handlers never read stale state
  const isOpenRef = useRef(isOpen);
  isOpenRef.current = isOpen;

  const parts = pathname.split('/').filter(Boolean);
  const slugAtPath = parts[2] ?? '';
  const activeL3Slug = parts[3] ?? '';
  const firstPageSlug = firstPageHref.replace(/^\/courses\/cpacc-quick-guide\//, '');

  // Initialise sidebar state based on viewport width (desktop open, mobile closed)
  useEffect(() => {
    setIsOpen(window.matchMedia('(min-width: 768px)').matches);
  }, []);

  // Close sidebar on mobile and clear swipe exit class on navigation
  useEffect(() => {
    if (!window.matchMedia('(min-width: 768px)').matches) {
      setIsOpen(false);
    }
    setExitClass('');
  }, [pathname]);

  // Close sidebar with Escape key
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
        requestAnimationFrame(() => toggleRef.current?.focus());
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // Fix 2: swipe left → next, swipe right → prev on the main content area
  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    let startX = 0;
    let startY = 0;

    function onTouchStart(e: TouchEvent) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }

    function onTouchEnd(e: TouchEvent) {
      // Don't navigate while the sidebar overlay is open on mobile
      if (isOpenRef.current) return;

      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;

      // Ignore sub-threshold and predominantly vertical movements
      if (Math.abs(dx) < 50 || Math.abs(dy) >= Math.abs(dx)) return;

      const isNext = dx < 0;
      const sel = isNext ? 'a[rel="next"]' : 'a[rel="prev"]';
      const link = document.querySelector<HTMLAnchorElement>(sel);
      if (!link) return;

      const href = link.getAttribute('href')!;
      setExitClass(isNext ? 'swipe-exit-left' : 'swipe-exit-right');
      setTimeout(() => router.push(href), 180);
    }

    main.addEventListener('touchstart', onTouchStart, { passive: true });
    main.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      main.removeEventListener('touchstart', onTouchStart);
      main.removeEventListener('touchend', onTouchEnd);
    };
  }, []); // registered once; reads DOM at event time for the current page's prev/next links

  function handleToggle() {
    const next = !isOpen;
    setIsOpen(next);
    requestAnimationFrame(() => {
      if (next) {
        document.querySelector<HTMLAnchorElement>('#guide-sidebar a')?.focus();
      } else {
        toggleRef.current?.focus();
      }
    });
  }

  function handleClose() {
    setIsOpen(false);
    requestAnimationFrame(() => toggleRef.current?.focus());
  }

  const sidebarAttr = isOpen !== null ? { 'data-sidebar-open': String(isOpen) } : {};

  return (
    <div className="guide-reader" {...sidebarAttr}>
      <a className="skip-link" href="#guide-content">Skip to main content</a>

      <header className="guide-header">
        <h1 className="guide-site-title">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Link href="/courses" aria-label="Back to Learningmakers Courses">
            <img src="/logomark.png" alt="" aria-hidden="true" className="guide-logo" />
          </Link>
          <Link href={firstPageHref}>{guideTitle}</Link>
        </h1>
      </header>

      <div className="guide-body">
        <nav id="guide-sidebar" className="guide-sidebar" aria-label="Guide contents">
          <button
            className="sidebar-close"
            onClick={handleClose}
            aria-label="Close menu"
            aria-expanded={isOpen ?? undefined}
            aria-controls="guide-sidebar"
          >
            <span aria-hidden="true">✕</span>
          </button>

          <ul>
            {chapters
              .filter(c => c.depth === 0 && c.slug !== firstPageSlug)
              .map(l1 => {
                const l2Children = chapters.filter(c => c.parentSlug === l1.slug);
                return (
                  <li key={l1.slug}>
                    <Link
                      href={`/courses/cpacc-quick-guide/${l1.slug}`}
                      aria-current={slugAtPath === l1.slug ? 'page' : undefined}
                    >
                      {l1.title}
                    </Link>
                    {l2Children.length > 0 && (
                      <ul className="toc-level2">
                        {l2Children.map(l2 => (
                          <li key={l2.slug}>
                            <Link
                              href={`/courses/cpacc-quick-guide/${l2.slug}`}
                              aria-current={
                                slugAtPath === l2.slug && !activeL3Slug ? 'page' : undefined
                              }
                            >
                              {l2.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
          </ul>
        </nav>

        <main
          ref={mainRef}
          id="guide-content"
          className={`guide-main${exitClass ? ` ${exitClass}` : ''}`}
          tabIndex={-1}
        >
          <button
            ref={toggleRef}
            className="sidebar-toggle"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen ?? undefined}
            aria-controls="guide-sidebar"
            onClick={handleToggle}
          >
            <span aria-hidden="true">☰</span>
          </button>
          {children}
        </main>
      </div>
    </div>
  );
}
