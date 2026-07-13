import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP-driven count-up that fires once when the element scrolls into view.
 *
 * We animate a plain object and write formatted text into the DOM node
 * directly (instead of React state) — 60 state updates/sec through React
 * for a cosmetic counter is wasted render work; textContent writes are free.
 *
 * @param {number} target  final value
 * @param {{ prefix?: string, suffix?: string, duration?: number }} opts
 * @returns ref to attach to the element displaying the number
 */
export function useCountUp(target, { prefix = '', suffix = '', duration = 2 } = {}) {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (v) => `${prefix}${Math.round(v).toLocaleString('en-IN')}${suffix}`;

    if (reducedMotion) {
      el.textContent = format(target);
      return;
    }

    const state = { value: 0 };
    const tween = gsap.to(state, {
      value: target,
      duration,
      ease: 'power2.out', // decelerating ease reads as "settling" — no bounce, per spec
      onUpdate: () => {
        el.textContent = format(state.value);
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%', // fire slightly before fully in view so it feels responsive
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target, prefix, suffix, duration, reducedMotion]);

  return ref;
}
