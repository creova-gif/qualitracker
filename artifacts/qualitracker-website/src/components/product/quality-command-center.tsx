/**
 * A real recreation of the actual product dashboard's shape — stat cards
 * plus a lab-scoped context panel — restyled to the QualiTracker brand
 * tokens instead of the internal app's own Roboto/ad-hoc styling. Sample
 * values are illustrative; the layout and fields are not invented, they
 * mirror templates/dashboard.html in the real repository (Laboratories /
 * Departments / Roles / Users counts, current-lab/department/role panel).
 */
const STATS = [
  { label: 'Laboratories', value: '4', tint: 'var(--qt-teal-tint)', color: 'var(--qt-deep-teal)' },
  { label: 'Departments', value: '11', tint: 'var(--qt-mint-light)', color: 'var(--qt-deep-teal)' },
  { label: 'Roles', value: '6', tint: 'var(--qt-lab-grey)', color: 'var(--qt-body-grey)' },
  { label: 'Users in your lab', value: '23', tint: '#F9F5EA', color: 'var(--qt-gold-text)' },
];

export function QualityCommandCenter() {
  return (
    <div className="qt-card qt-shadow-overlay overflow-hidden">
      <div className="flex items-center justify-between border-b px-5 py-3.5" style={{ borderColor: 'var(--qt-border-grey)', background: 'var(--qt-clinical-white)' }}>
        <span className="text-sm font-semibold" style={{ color: 'var(--qt-near-black)' }}>Welcome back — dashboard</span>
        <span className="font-mono-ui rounded-md px-2 py-1 text-[9px] uppercase tracking-[.08em]" style={{ background: 'var(--qt-lab-grey)', color: 'var(--qt-body-grey)' }}>
          Illustrative sample
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-xl p-4" style={{ background: s.tint }}>
            <div className="font-brand text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
            <div className="mt-1 text-[11px]" style={{ color: 'var(--qt-body-grey)' }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div className="border-t px-5 py-4" style={{ borderColor: 'var(--qt-border-grey)' }}>
        <p className="font-mono-ui text-[10px] uppercase tracking-[.08em]" style={{ color: 'var(--qt-body-grey)' }}>Your laboratory</p>
        <div className="mt-3 flex flex-wrap gap-6">
          <div>
            <div className="text-[10px]" style={{ color: 'var(--qt-body-grey)' }}>LABORATORY</div>
            <div className="mt-0.5 text-sm font-bold" style={{ color: 'var(--qt-near-black)' }}>Central Reference Lab</div>
          </div>
          <div>
            <div className="text-[10px]" style={{ color: 'var(--qt-body-grey)' }}>LAB TYPE</div>
            <span className="mt-0.5 inline-block rounded-full px-2.5 py-1 font-mono-ui text-[10px]" style={{ background: 'var(--qt-teal-tint)', color: 'var(--qt-deep-teal)' }}>Clinical</span>
          </div>
          <div>
            <div className="text-[10px]" style={{ color: 'var(--qt-body-grey)' }}>DEPARTMENT</div>
            <div className="mt-0.5 text-sm font-semibold" style={{ color: 'var(--qt-near-black)' }}>Microbiology</div>
          </div>
        </div>
      </div>
    </div>
  );
}
