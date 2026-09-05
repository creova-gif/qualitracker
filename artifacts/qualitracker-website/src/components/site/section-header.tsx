import type { ReactNode } from 'react';

/** The brand's signature type move: eyebrow label, Poppins title, 4px gold rule. */
export function SectionHeader({
  eyebrow,
  title,
  light = false,
  align = 'left',
}: {
  eyebrow: string;
  title: ReactNode;
  light?: boolean;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <p className={`qt-eyebrow ${light ? 'qt-eyebrow-light' : ''}`}>{eyebrow}</p>
      <h2
        className="font-brand mt-2.5 font-bold leading-[1.1] tracking-[-.02em]"
        style={{ color: light ? '#FFFFFF' : 'var(--qt-near-black)', fontSize: 'clamp(1.75rem, 3.4vw, 2.5rem)' }}
      >
        {title}
      </h2>
      <div className={`qt-rule-gold ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
