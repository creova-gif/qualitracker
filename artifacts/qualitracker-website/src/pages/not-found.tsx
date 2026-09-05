import { PageShell } from '@/components/site/page-shell';
import { Button } from '@/components/site/button';

export default function NotFound() {
  return (
    <PageShell>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <p className="qt-eyebrow">404</p>
        <h1 className="font-brand mt-2 text-2xl font-bold" style={{ color: 'var(--qt-near-black)' }}>Page not found.</h1>
        <p className="mt-3 max-w-[380px] text-sm leading-6" style={{ color: 'var(--qt-body-grey)' }}>
          The page you're looking for doesn't exist, or moved.
        </p>
        <div className="mt-6"><Button href="/" variant="secondary" arrow="arrow">Back to home</Button></div>
      </div>
    </PageShell>
  );
}
