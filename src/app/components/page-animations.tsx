'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function PageAnimations() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.landing-page');
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(
        {
          motion: '(prefers-reduced-motion: no-preference)',
          desktop: '(min-width: 768px)',
          pointer: '(hover: hover) and (pointer: fine)',
        },
        ({ conditions }) => {
          if (!conditions?.motion) return;

          const heroElements = root.querySelectorAll<HTMLElement>(
            '[data-hero-reveal]',
          );
          if (heroElements.length) {
            gsap.from(heroElements, {
              y: 40,
              opacity: 0,
              duration: 0.75,
              stagger: 0.12,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
            });
          }

          const featureCards =
            root.querySelectorAll<HTMLElement>('.feature-card');
          if (featureCards.length) {
            gsap.from(featureCards, {
              y: 28,
              opacity: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: '.bento-section',
                start: 'top 78%',
                once: true,
              },
            });
          }

          const header = document.querySelector<HTMLElement>('.site-header');
          if (header) {
            ScrollTrigger.create({
              trigger: root,
              start: 'top -24px',
              onEnter: () => header.classList.add('is-scrolled'),
              onLeaveBack: () => header.classList.remove('is-scrolled'),
            });
          }

          const showcase = root.querySelector<HTMLElement>('.showcase-section');
          const viewport = root.querySelector<HTMLElement>(
            '.showcase-viewport',
          );
          const track = root.querySelector<HTMLElement>('.showcase-track');

          if (
            conditions.desktop &&
            showcase &&
            viewport &&
            track &&
            track.scrollWidth > viewport.clientWidth
          ) {
            gsap.to(track, {
              x: () => -(track.scrollWidth - viewport.clientWidth),
              ease: 'none',
              scrollTrigger: {
                trigger: showcase,
                pin: true,
                scrub: 1,
                start: 'top top',
                end: () =>
                  `+=${track.scrollWidth - viewport.clientWidth}`,
                invalidateOnRefresh: true,
                anticipatePin: 1,
              },
            });
            gsap.set(viewport, { overflow: 'hidden' });
          }

          const magneticButtons = Array.from(
            document.querySelectorAll<HTMLElement>('.magnetic-cta'),
          );
          const cleanups: (() => void)[] = [];

          if (conditions.pointer) {
            magneticButtons.forEach((button) => {
              const handlePointerMove = (event: PointerEvent) => {
                const bounds = button.getBoundingClientRect();
                const offsetX =
                  event.clientX - bounds.left - bounds.width / 2;
                const offsetY =
                  event.clientY - bounds.top - bounds.height / 2;

                gsap.to(button, {
                  x: offsetX * 0.16,
                  y: offsetY * 0.2,
                  duration: 0.3,
                  ease: 'power3.out',
                });
              };

              const handlePointerLeave = () => {
                gsap.to(button, {
                  x: 0,
                  y: 0,
                  duration: 0.8,
                  ease: 'elastic.out(1, 0.3)',
                });
              };

              button.addEventListener('pointermove', handlePointerMove);
              button.addEventListener('pointerleave', handlePointerLeave);
              cleanups.push(() => {
                button.removeEventListener('pointermove', handlePointerMove);
                button.removeEventListener('pointerleave', handlePointerLeave);
                gsap.killTweensOf(button);
                gsap.set(button, { clearProps: 'transform' });
              });
            });
          }

          return () => cleanups.forEach((cleanup) => cleanup());
        },
      );
    }, root);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return null;
}
