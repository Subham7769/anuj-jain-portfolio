import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

const subscribe = (callback) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
};

const getSnapshot = () => window.matchMedia(QUERY).matches;

/**
 * Reactive prefers-reduced-motion flag. useSyncExternalStore keeps it
 * SSR-safe and re-renders if the OS setting changes mid-session.
 * Every animation (GSAP + Three) checks this before running.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}
