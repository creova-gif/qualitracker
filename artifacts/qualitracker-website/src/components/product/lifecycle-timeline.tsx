import { useState } from 'react';

interface LifecycleStage {
  label: string;
  detail: string;
  branch?: string;
}

/**
 * A real workflow state machine, rendered as a horizontal timeline. Both
 * callers below use the actual Django model STATUS_CHOICES from the real
 * QMS repository (thestartupgroup7/qmswebsite), not an invented or
 * idealized version of the workflow — see the stage copy for what each
 * one maps to.
 */
export function LifecycleTimeline({
  stages,
  accent = 'var(--qt-deep-teal)',
  accentText = '#FFFFFF',
}: {
  stages: LifecycleStage[];
  accent?: string;
  /** Text color for the active pill. White fails contrast on the gold accent
      (~2.3:1) — pass 'var(--qt-dark-navy)' when accent is gold. */
  accentText?: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="qt-card p-5 sm:p-7">
      <div className="flex flex-wrap gap-1 sm:flex-nowrap sm:overflow-x-auto">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex items-center">
            <button
              type="button"
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="qt-button qt-focus whitespace-nowrap rounded-full border px-3 py-2 text-left text-[11px] font-semibold"
              style={
                active === i
                  ? { borderColor: accent, background: accent, color: accentText }
                  : { borderColor: 'var(--qt-border-grey)', color: 'var(--qt-body-grey)' }
              }
              data-testid={`lifecycle-stage-${i}`}
            >
              {stage.label}
            </button>
            {i < stages.length - 1 && (
              <span className="mx-1 hidden h-px w-4 shrink-0 sm:block" style={{ background: 'var(--qt-border-grey)' }} />
            )}
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm leading-6" style={{ color: 'var(--qt-near-black)' }}>{stages[active].detail}</p>
      {/* body-grey, not gold-text — gold-text is ~3.66:1 on white at any size,
          confirmed failing 4.5:1 by the earlier Lighthouse run; reserve gold
          for icons/graphics only, per docs/website/14_ACCESSIBILITY_AUDIT.md */}
      {stages[active].branch && (
        <p className="mt-2 text-xs leading-5" style={{ color: 'var(--qt-body-grey)' }}>↩ {stages[active].branch}</p>
      )}
    </div>
  );
}
