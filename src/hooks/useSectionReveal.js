import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade + slide-up reveal on section entry, staggered across children.
 * Attach the returned ref to a container; children matching `childSelector`
 * animate in sequence. Centralized so every section reveals identically.
 */
export function useSectionReveal(childSelector = '[data-reveal]') {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const targets = el.querySelectorAll(childSelector);
    if (!targets.length) return;

    const tween = gsap.fromTo(
      targets,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: 'top 75%', once: true },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [childSelector, reducedMotion]);

  return ref;
}
