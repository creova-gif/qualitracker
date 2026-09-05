import '@testing-library/jest-dom/vitest';

// jsdom deliberately doesn't implement IntersectionObserver — framer-motion's
// `whileInView` (used by components/site/reveal.tsx) needs it to mount at
// all. A minimal stub is enough for render-without-throwing smoke tests;
// it never actually fires, so the element just stays at its initial state.
class MockIntersectionObserver {
  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
  takeRecords = () => [];
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});
Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});

// jsdom doesn't implement matchMedia; framer-motion's useReducedMotion and
// Tailwind's dark-mode variant both probe it. Stub it so component tests
// don't have to know that.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
