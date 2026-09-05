import { QtSymbol } from '@/assets/qt-symbol';

/** The wordmark + symbol lockup. `tone="reversed"` for Dark Navy/Deep Teal backgrounds. */
export function Logo({ tone = 'default', height = 28 }: { tone?: 'default' | 'reversed'; className?: string; height?: number }) {
  const wordmarkColor = tone === 'reversed' ? '#FFFFFF' : 'var(--qt-dark-navy)';
  const symbolColor = tone === 'reversed' ? '#FFFFFF' : 'var(--qt-deep-teal)';
  return (
    <span className="inline-flex items-center gap-2" style={{ height }}>
      <QtSymbol color={symbolColor} size={height} />
      <span className="font-brand font-bold tracking-tight" style={{ color: wordmarkColor, fontSize: height * 0.68 }}>
        QualiTracker
      </span>
    </span>
  );
}
