import { useEffect } from 'react';

/**
 * Per-route <title> and meta description for this SPA. index.html only ships
 * one static title/description (fine for a single-page site, a real SEO gap
 * once the site became 8 routes) — this sets both on mount without adding a
 * head-management dependency the existing stack doesn't need.
 */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const descTag = document.querySelector('meta[name="description"]');
    const previousDescription = descTag?.getAttribute('content') ?? '';
    descTag?.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    ogTitle?.setAttribute('content', title);
    ogDescription?.setAttribute('content', description);

    return () => {
      document.title = previousTitle;
      descTag?.setAttribute('content', previousDescription);
    };
  }, [title, description]);
}
