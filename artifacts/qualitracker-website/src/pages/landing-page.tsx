import { useState, type FormEvent, type ReactNode } from 'react';
import { submitLead, HONEYPOT_FIELD_NAME } from '@/lib/leads';
import {
  ArrowDownRight,
  ArrowRight,
  BookOpenCheck,
  Check,
  ClipboardCheck,
  FileCheck2,
  FlaskConical,
  Menu,
  MessageSquareText,
  Microscope,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

type ChatMode = 'found' | 'missing';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

const standards = ['ISO 15189', 'SLIPTA', 'WHO LQMS'];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className="group flex items-center gap-2.5"
      data-testid="link-brand-home"
      aria-label="QualiTracker home"
    >
      <span
        className={`relative flex h-9 w-9 items-center justify-center rounded-[11px] border ${
          light ? 'border-[#d6d9b2]/40 bg-[#d6d9b2]/10' : 'border-[#17483f] bg-[#17483f]'
        }`}
      >
        <span className={`font-display text-[22px] font-bold ${light ? 'text-[#d6d9b2]' : 'text-[#f5f1e7]'}`}>Q</span>
        <span className={`absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 ${light ? 'border-[#17483f] bg-[#e7774d]' : 'border-[#f7f4ed] bg-[#e7774d]'}`} />
      </span>
      <span className={`font-display text-[21px] font-bold tracking-[-.04em] ${light ? 'text-[#f5f1e7]' : 'text-[#17483f]'}`}>
        QualiTracker
      </span>
    </a>
  );
}

function SectionKicker({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`font-mono-ui mb-4 text-[11px] font-medium uppercase tracking-[.17em] ${light ? 'text-[#d6d9b2]' : 'text-[#b85d3c]'}`}>
      {children}
    </p>
  );
}

function PrimaryButton({ children, href = '#contact', onClick, light = false, testId }: { children: ReactNode; href?: string; onClick?: () => void; light?: boolean; testId: string }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`qt-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold ${
        light ? 'bg-[#d6d9b2] text-[#17483f] hover:bg-[#e4e6ca]' : 'bg-[#17483f] text-[#f7f4ed] hover:bg-[#266458]'
      }`}
      data-testid={testId}
    >
      {children}
      <ArrowRight size={16} strokeWidth={2.5} />
    </a>
  );
}

function FeatureIcon({ children }: { children: ReactNode }) {
  return <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7e8c8] text-[#17483f]">{children}</div>;
}

function AppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[570px]">
      <div className="absolute -left-8 top-14 hidden h-36 w-7 items-center justify-center rounded-full border border-[#d6d9b2]/30 bg-[#17483f] md:flex">
        <span className="qt-vertical-label font-mono-ui text-[9px] uppercase tracking-[.2em] text-[#d6d9b2]">QMS / LIVE</span>
      </div>
      <div className="rounded-[23px] border border-[#e7e8c8]/20 bg-[#f7f4ed] p-2 shadow-[18px_22px_0_rgba(10,38,32,.2)]">
        <div className="overflow-hidden rounded-[16px] border border-[#d7d8c9] bg-[#eeefe4]">
          <div className="flex items-center justify-between border-b border-[#d7d8c9] bg-[#f7f4ed] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#17483f] text-[12px] font-bold text-[#f7f4ed]">Q</div>
              <span className="text-[10px] font-bold tracking-tight text-[#17483f]">QualiTracker / Lab workspace</span>
            </div>
            <span className="font-mono-ui text-[9px] text-[#52716a]">08:42 EAT</span>
          </div>
          <div className="grid min-h-[337px] grid-cols-[112px_1fr]">
            <aside className="hidden border-r border-[#d7d8c9] bg-[#e8eadb] p-3 sm:block">
              <div className="font-mono-ui mb-4 text-[8px] uppercase tracking-[.13em] text-[#52716a]">Workspace</div>
              {['Overview', 'Documents', 'Actions', 'AI assistant'].map((item, i) => (
                <div key={item} className={`mb-2 rounded-md px-2 py-2 text-[9px] font-semibold ${i === 3 ? 'bg-[#d6d9b2] text-[#17483f]' : 'text-[#52716a]'}`}>
                  {item}
                </div>
              ))}
              <div className="qt-dashed-rule my-4" />
              <div className="font-mono-ui text-[8px] uppercase tracking-[.13em] text-[#52716a]">This week</div>
              <div className="mt-3 space-y-2 text-[9px] text-[#52716a]">
                <div className="flex justify-between"><span>Open actions</span><b className="text-[#17483f]">04</b></div>
                <div className="flex justify-between"><span>Due soon</span><b className="text-[#b85d3c]">02</b></div>
              </div>
            </aside>
            <div className="p-4 sm:p-5">
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <p className="font-mono-ui text-[8px] uppercase tracking-[.13em] text-[#52716a]">Good morning, lab team</p>
                  <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-[#17483f]">Quality at a glance</h3>
                </div>
                <div className="rounded-md bg-[#d6d9b2] px-2 py-1 font-mono-ui text-[8px] text-[#17483f]">PILOT SPACE</div>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-[#d7d8c9] bg-[#f7f4ed] p-3">
                  <div className="mb-3 flex items-center justify-between"><FileCheck2 size={14} className="text-[#b85d3c]" /><span className="font-mono-ui text-[8px] text-[#52716a]">RECORDS</span></div>
                  <strong className="font-display text-2xl text-[#17483f]">128</strong>
                  <p className="mt-1 text-[8px] text-[#52716a]">tracked documents</p>
                </div>
                <div className="rounded-xl border border-[#d7d8c9] bg-[#f7f4ed] p-3">
                  <div className="mb-3 flex items-center justify-between"><ClipboardCheck size={14} className="text-[#b85d3c]" /><span className="font-mono-ui text-[8px] text-[#52716a]">ACTIONS</span></div>
                  <strong className="font-display text-2xl text-[#17483f]">04</strong>
                  <p className="mt-1 text-[8px] text-[#52716a]">need attention</p>
                </div>
              </div>
              <div className="mt-3 rounded-xl border border-[#d7d8c9] bg-[#f7f4ed] p-3">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-[#17483f]">Recent quality activity</span>
                  <span className="font-mono-ui text-[8px] text-[#52716a]">VIEW ALL</span>
                </div>
                {['Temperature log · updated', 'Reagent acceptance · reviewed', 'Internal audit · action open'].map((row, i) => (
                  <div key={row} className="flex items-center gap-2 border-t border-[#e3e3d8] py-2 first:border-0">
                    <span className={`h-1.5 w-1.5 rounded-full ${i === 2 ? 'bg-[#e7774d]' : 'bg-[#6b9a76]'}`} />
                    <span className="flex-1 text-[8px] text-[#52716a]">{row}</span>
                    <span className="font-mono-ui text-[7px] text-[#8b9a8d]">{i + 1}h</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -right-2 flex items-center gap-2 rounded-full border border-[#d6d9b2]/35 bg-[#245b50] px-3 py-2 shadow-lg sm:-right-8">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d6d9b2] text-[#17483f]"><Sparkles size={13} /></span>
        <span className="font-mono-ui text-[9px] text-[#f7f4ed]">AI assistant / grounded</span>
      </div>
    </div>
  );
}

function ChatbotDemo() {
  const [mode, setMode] = useState<ChatMode>('found');
  const [question, setQuestion] = useState('What is the acceptable temperature range for the reagent fridge?');
  const foundQuestion = 'What is the acceptable temperature range for the reagent fridge?';
  const missingQuestion = 'Can you compare our turnaround time with nearby laboratories?';

  function selectQuestion(next: ChatMode) {
    setMode(next);
    setQuestion(next === 'found' ? foundQuestion : missingQuestion);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#d7d8c9] bg-[#f7f4ed] shadow-[0_18px_50px_rgba(23,72,63,.08)]">
      <div className="flex items-center justify-between border-b border-[#d7d8c9] px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#17483f] text-[#d6d9b2]"><MessageSquareText size={16} /></span>
          <div><p className="text-sm font-bold text-[#17483f]">Ask your quality records</p><p className="font-mono-ui text-[9px] uppercase tracking-[.1em] text-[#7c8c80]">AI assistant / demo mode</p></div>
        </div>
        <span className="flex items-center gap-1.5 font-mono-ui text-[9px] text-[#52716a]"><span className="h-1.5 w-1.5 rounded-full bg-[#6b9a76]" /> SOP-grounded</span>
      </div>
      <div className="space-y-4 p-5">
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-sm bg-[#e7e8c8] px-4 py-3 text-sm leading-6 text-[#17483f]">{question}</div>
        {mode === 'found' ? (
          <div className="max-w-[94%] rounded-2xl rounded-bl-sm border border-[#d7d8c9] bg-[#eeefe4] px-4 py-3.5">
            <p className="text-sm leading-6 text-[#315850]">The acceptable range is <strong className="text-[#17483f]">2°C to 8°C</strong>. Record the fridge temperature at the start and end of each working day.</p>
            <div className="mt-3 flex items-start gap-2 border-t border-[#d7d8c9] pt-3">
              <BookOpenCheck size={13} className="mt-0.5 shrink-0 text-[#b85d3c]" />
              <div><p className="font-mono-ui text-[9px] uppercase tracking-[.08em] text-[#b85d3c]">Cited source</p><p className="mt-0.5 text-[11px] font-semibold text-[#52716a]">Reagent Storage SOP · QMS-SOP-014 · section 4.2</p></div>
            </div>
          </div>
        ) : (
          <div className="max-w-[94%] rounded-2xl rounded-bl-sm border border-dashed border-[#c5a98c] bg-[#f4e9da] px-4 py-3.5">
            <p className="text-sm leading-6 text-[#315850]">I couldn’t find a relevant SOP or quality record for that question.</p>
            <p className="mt-2 text-[11px] leading-5 text-[#7c6858]">QualiTracker does not make up an answer. Try a question about an uploaded lab record, or ask your QMS officer to add one.</p>
            <p className="mt-3 font-mono-ui text-[9px] uppercase tracking-[.08em] text-[#b85d3c]">No relevant SOP found</p>
          </div>
        )}
        <div className="border-t border-[#d7d8c9] pt-4">
          <div className="mb-2 font-mono-ui text-[9px] uppercase tracking-[.12em] text-[#7c8c80]">Try the other state</div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => selectQuestion('found')} className={`qt-button rounded-full border px-3 py-2 text-left text-[11px] font-semibold ${mode === 'found' ? 'border-[#17483f] bg-[#17483f] text-[#f7f4ed]' : 'border-[#cfd3bd] text-[#52716a] hover:border-[#17483f]'}`} data-testid="button-chat-sop-question">Ask about a lab SOP</button>
            <button type="button" onClick={() => selectQuestion('missing')} className={`qt-button rounded-full border px-3 py-2 text-left text-[11px] font-semibold ${mode === 'missing' ? 'border-[#b85d3c] bg-[#b85d3c] text-[#f7f4ed]' : 'border-[#cfd3d0] text-[#52716a] hover:border-[#b85d3c]'}`} data-testid="button-chat-fallback-question">Ask without a source</button>
          </div>
        </div>
        <div className="flex gap-2 rounded-xl border border-[#d7d8c9] bg-[#eeefe4] p-2">
          <input value={question} onChange={(event) => setQuestion(event.target.value)} className="min-w-0 flex-1 bg-transparent px-2 text-xs text-[#17483f] outline-none placeholder:text-[#8b9a8d]" aria-label="Ask the assistant a question" data-testid="input-chat-question" />
          <button type="button" onClick={() => setMode(question.toLowerCase().includes('compare') ? 'missing' : 'found')} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#17483f] text-[#f7f4ed] hover:bg-[#266458]" aria-label="Send question" data-testid="button-send-chat"><ArrowRight size={15} /></button>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ name, detail, price, features, featured, selected, onSelect }: { name: string; detail: string; price: string; features: string[]; featured?: boolean; selected: boolean; onSelect: () => void }) {
  return (
    <button type="button" onClick={onSelect} className={`group relative flex min-h-[352px] w-full flex-col rounded-2xl border p-6 text-left transition-transform duration-200 hover:-translate-y-1 ${featured ? 'border-[#17483f] bg-[#17483f] text-[#f7f4ed] shadow-[10px_12px_0_#d6d9b2]' : 'border-[#d7d8c9] bg-[#f7f4ed] text-[#17483f] hover:border-[#b85d3c]'} ${selected ? 'ring-2 ring-[#e7774d] ring-offset-2 ring-offset-[#f1eee5]' : ''}`} data-testid={`card-pricing-${name.toLowerCase()}`}>
      {featured && <span className="absolute -top-3 left-5 rounded-full bg-[#e7774d] px-3 py-1 font-mono-ui text-[9px] font-medium uppercase tracking-[.1em] text-[#f7f4ed]">First cohort</span>}
      <div className="mb-8 flex items-start justify-between">
        <div><h3 className="font-display text-2xl font-bold tracking-tight">{name}</h3><p className={`mt-1 text-xs ${featured ? 'text-[#cbd4b8]' : 'text-[#52716a]'}`}>{detail}</p></div>
        <span className={`flex h-7 w-7 items-center justify-center rounded-full border ${selected ? 'border-[#e7774d] bg-[#e7774d] text-[#f7f4ed]' : featured ? 'border-[#d6d9b2]/45 text-[#d6d9b2]' : 'border-[#cfd3bd] text-[#52716a]'}`}><Check size={14} /></span>
      </div>
      <div className="mb-7"><span className="font-display text-[37px] font-bold tracking-[-.07em]">{price}</span>{price !== 'Talk to us' && <span className={`ml-1 text-xs ${featured ? 'text-[#cbd4b8]' : 'text-[#52716a]'}`}>/ month</span>}</div>
      <div className={`qt-dashed-rule mb-5 ${featured ? 'border-[#d6d9b2]/30' : 'border-[#cfd3bd]'}`} />
      <ul className="space-y-3">
        {features.map((feature) => <li key={feature} className="flex gap-2 text-xs leading-5"><Check size={14} className={`mt-0.5 shrink-0 ${featured ? 'text-[#d6d9b2]' : 'text-[#b85d3c]'}`} /><span className={featured ? 'text-[#ecedda]' : 'text-[#52716a]'}>{feature}</span></li>)}
      </ul>
      <span className={`mt-auto pt-6 text-xs font-bold ${featured ? 'text-[#d6d9b2]' : 'text-[#b85d3c]'}`}>Select this plan <ArrowRight size={13} className="ml-1 inline transition-transform group-hover:translate-x-1" /></span>
    </button>
  );
}

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Pilot');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [newsletterState, setNewsletterState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [newsletterError, setNewsletterError] = useState<string | null>(null);

  function scrollToContact() {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const honeypot = data.get(HONEYPOT_FIELD_NAME);
    const institution = String(data.get('institution') ?? '').trim();
    const country = String(data.get('country') ?? '').trim();
    const role = String(data.get('role') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();

    if (!institution || !country || !role || !email) {
      setSubmitError('Please fill in every field.');
      return;
    }

    setSubmitting(true);
    try {
      await submitLead({
        kind: 'demo_request',
        email,
        institution,
        role,
        country,
        source: 'homepage-contact',
        consent: true,
        website: honeypot ? String(honeypot) : undefined,
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error && err.message === 'ALREADY_SUBSCRIBED'
          ? "Looks like you've already requested a demo with this email."
          : 'Something went wrong. Please try again.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function submitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('newsletter-email') ?? '').trim();

    if (!email) return;

    setNewsletterState('submitting');
    setNewsletterError(null);
    try {
      await submitLead({
        kind: 'newsletter',
        email,
        source: 'footer',
        consent: true,
      });
      setNewsletterState('success');
      form.reset();
    } catch (err) {
      setNewsletterState('error');
      setNewsletterError(
        err instanceof Error && err.message === 'ALREADY_SUBSCRIBED'
          ? "You're already on the list."
          : 'Something went wrong. Please try again.',
      );
    }
  }

  return (
    <main className="qt-site qt-noise">
      <header className="absolute left-0 right-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 lg:px-8">
          <BrandMark light />
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-xs font-semibold text-[#cad3bd] transition-colors hover:text-[#f7f4ed]" data-testid={`link-nav-${item.label.toLowerCase()}`}>{item.label}</a>)}
            <a href="#contact" className="rounded-full border border-[#d6d9b2]/45 px-4 py-2 text-xs font-bold text-[#d6d9b2] transition-colors hover:border-[#d6d9b2] hover:bg-[#d6d9b2] hover:text-[#17483f]" data-testid="link-nav-contact">Request a demo</a>
          </nav>
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6d9b2]/35 text-[#d6d9b2] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
        {menuOpen && <nav className="mx-4 rounded-2xl border border-[#d6d9b2]/20 bg-[#17483f] p-3 shadow-xl md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#f7f4ed] hover:bg-[#245b50]" data-testid={`link-mobile-${item.label.toLowerCase()}`}>{item.label}</a>)}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 block rounded-xl bg-[#d6d9b2] px-4 py-3 text-sm font-bold text-[#17483f]" data-testid="link-mobile-contact">Request a demo</a>
        </nav>}
      </header>

      <section id="home" className="qt-dark-grid relative min-h-[720px] overflow-hidden pb-20 pt-36 text-[#f7f4ed] lg:min-h-[785px] lg:pt-44">
        <div className="absolute -right-28 top-28 h-[400px] w-[400px] rounded-full border border-[#d6d9b2]/10" />
        <div className="absolute -right-7 top-52 h-[250px] w-[250px] rounded-full border border-[#d6d9b2]/10" />
        <div className="mx-auto grid max-w-[1240px] items-center gap-16 px-5 lg:grid-cols-[.93fr_1.07fr] lg:gap-12 lg:px-8">
          <div className="qt-reveal relative z-10">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#e7774d]" />
              <span className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-[#d6d9b2]">Built for East African laboratories</span>
            </div>
            <h1 className="qt-display-mark max-w-[570px] font-display text-[clamp(3.8rem,8vw,7.25rem)] font-bold text-[#f7f4ed]">Quality that <span className="text-[#e7774d]">works</span> for every lab.</h1>
            <p className="mt-8 max-w-[450px] text-[16px] leading-7 text-[#cbd4c3]">A digital quality management system with a built-in AI assistant—so your records are searchable, traceable, and ready when the auditor arrives.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <PrimaryButton light href="#contact" testId="button-hero-demo">Request a demo</PrimaryButton>
              <a href="#contact" className="qt-button inline-flex items-center gap-2 rounded-full px-2 py-3 text-sm font-bold text-[#d6d9b2] hover:text-[#f7f4ed]" data-testid="link-hero-pilot"><ArrowDownRight size={17} /> Join the pilot cohort</a>
            </div>
            <a href="#how-it-works" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#98afa1] hover:text-[#f7f4ed]" data-testid="link-hero-how-it-works">See how it works <ArrowRight size={14} /></a>
            <div className="mt-12 flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[.13em] text-[#98afa1]"><ShieldCheck size={15} className="text-[#d6d9b2]" /> Standards-aware by design</div>
          </div>
          <div className="qt-reveal qt-reveal-delay-2 relative z-10 pt-3 lg:pt-14"><AppPreview /></div>
        </div>
        <div className="mx-auto mt-24 flex max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <span className="font-mono-ui text-[10px] uppercase tracking-[.16em] text-[#79958c]">A calmer way to run quality</span>
          <span className="font-mono-ui text-[10px] uppercase tracking-[.16em] text-[#79958c]">Scroll to inspect <ArrowDownRight size={14} className="ml-1 inline" /></span>
        </div>
      </section>

      <section className="border-b border-[#d7d8c9] bg-[#e7e8c8] py-5">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 lg:px-8">
          <span className="font-mono-ui text-[10px] uppercase tracking-[.15em] text-[#52716a]">Designed around the work, not around a binder</span>
          <div className="flex flex-wrap gap-2.5">{standards.map((standard) => <span key={standard} className="rounded-full border border-[#9cae95] px-3 py-1.5 font-mono-ui text-[10px] text-[#315850]">{standard}</span>)}</div>
        </div>
      </section>

      <section id="how-it-works" className="qt-grid bg-[#f1eee5] py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
            <div>
              <SectionKicker>01 / The reality</SectionKicker>
              <h2 className="max-w-[450px] font-display text-4xl font-bold leading-[1.02] tracking-[-.045em] text-[#17483f] sm:text-5xl">Your quality system already exists. It’s just hiding.</h2>
              <p className="mt-6 max-w-[380px] text-sm leading-6 text-[#52716a]">In a shared drive. In a WhatsApp thread. In a folder that only one person knows how to find. QualiTracker gives the work a home your whole lab can trust.</p>
              <div className="mt-9 flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[.13em] text-[#b85d3c]"><span className="h-2 w-2 rounded-full bg-[#e7774d]" /> Not another binder</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Search size={20} />, title: 'Find the record', copy: 'Search quality documents, actions, and evidence from one place.' },
                { icon: <Network size={20} />, title: 'See the trail', copy: 'Know what changed, who reviewed it, and what still needs attention.' },
                { icon: <ClipboardCheck size={20} />, title: 'Close the loop', copy: 'Turn findings into assigned, visible actions with a clear next step.' },
                { icon: <FlaskConical size={20} />, title: 'Keep the context', copy: 'Make your lab’s own SOPs the source of truth for everyday questions.' },
              ].map((item, index) => (
                <div key={item.title} className={`rounded-2xl border border-[#d7d8c9] bg-[#f7f4ed] p-6 ${index === 1 ? 'sm:translate-y-7' : ''} ${index === 3 ? 'sm:translate-y-7' : ''}`} data-testid={`card-reality-${index}`}>
                  <FeatureIcon>{item.icon}</FeatureIcon>
                  <h3 className="font-display text-xl font-bold text-[#17483f]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#52716a]">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#f7f4ed] py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><SectionKicker>02 / The system</SectionKicker><h2 className="max-w-[560px] font-display text-4xl font-bold leading-[1.04] tracking-[-.045em] text-[#17483f] sm:text-5xl">The useful parts of quality, in one calm workspace.</h2></div>
            <p className="max-w-[270px] text-sm leading-6 text-[#52716a]">Small enough to start with. Structured enough to stand up to scrutiny.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl bg-[#17483f] p-7 text-[#f7f4ed] sm:p-10">
              <div className="absolute bottom-[-40px] right-[-20px] h-60 w-60 rounded-full border border-[#d6d9b2]/20" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div><div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-[#d6d9b2] text-[#17483f]"><FileCheck2 size={21} /></div><h3 className="max-w-[430px] font-display text-3xl font-bold tracking-[-.035em] text-[#f7f4ed]">A record is only useful when it tells the whole story.</h3><p className="mt-4 max-w-[390px] text-sm leading-6 text-[#cbd4c3]">Version history, review dates, owners, and linked actions stay together—so evidence does not get separated from the work it proves.</p></div>
                <div className="mt-12 grid max-w-[470px] grid-cols-3 gap-2 border-t border-[#d6d9b2]/25 pt-5">
                  {[['01', 'Versioned'], ['02', 'Traceable'], ['03', 'Exportable']].map(([num, label]) => <div key={num}><span className="font-mono-ui text-[10px] text-[#d6d9b2]">{num}</span><p className="mt-1 text-[11px] font-semibold text-[#e7e8c8]">{label}</p></div>)}
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-[#d7d8c9] bg-[#eeefe4] p-7"><div className="mb-6 flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7e8c8] text-[#17483f]"><ClipboardCheck size={19} /></div><span className="font-mono-ui text-[9px] uppercase tracking-[.13em] text-[#b85d3c]">MVP</span></div><h3 className="font-display text-2xl font-bold text-[#17483f]">Actions that move</h3><p className="mt-2 text-xs leading-5 text-[#52716a]">Assign findings, set due dates, and keep corrective action from becoming a forgotten note.</p></div>
              <div className="rounded-2xl border border-[#d7d8c9] bg-[#eeefe4] p-7"><div className="mb-6 flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7e8c8] text-[#17483f]"><Microscope size={19} /></div><span className="font-mono-ui text-[9px] uppercase tracking-[.13em] text-[#b85d3c]">MVP</span></div><h3 className="font-display text-2xl font-bold text-[#17483f]">Made for the bench</h3><p className="mt-2 text-xs leading-5 text-[#52716a]">A focused workflow for lab directors, QMS officers, and bench technologists—not a generic enterprise maze.</p></div>
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              ['Document control', 'Keep SOPs, forms, and policies current with clear ownership.'],
              ['Audit readiness', 'Pull together the evidence an accreditor needs without a last-minute hunt.'],
              ['Role clarity', 'Give each person the right view of the work they are responsible for.'],
            ].map(([title, copy]) => <div key={title} className="border-t-2 border-[#17483f] pt-5"><h3 className="font-display text-xl font-bold text-[#17483f]">{title}</h3><p className="mt-2 text-xs leading-5 text-[#52716a]">{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="qt-dark-grid py-24 text-[#f7f4ed] lg:py-32">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 lg:grid-cols-[.86fr_1.14fr] lg:gap-24 lg:px-8">
          <div><SectionKicker light>03 / Ask the record</SectionKicker><h2 className="font-display text-4xl font-bold leading-[1.03] tracking-[-.045em] sm:text-5xl">An assistant that knows when it doesn’t know.</h2><p className="mt-6 max-w-[410px] text-sm leading-6 text-[#cbd4c3]">Ask in plain language. Get an answer grounded in your lab’s own records, with the source beside it. If there is no relevant SOP, QualiTracker says so.</p><div className="mt-8 flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[.14em] text-[#d6d9b2]"><span className="h-2 w-2 rounded-full bg-[#e7774d]" /> No invented answers</div></div>
          <ChatbotDemo />
        </div>
      </section>

      <section className="bg-[#e7e8c8] py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 lg:grid-cols-[.7fr_1.3fr] lg:items-center lg:px-8">
          <div><SectionKicker>04 / Built with context</SectionKicker><h2 className="font-display text-4xl font-bold leading-[1.03] tracking-[-.045em] text-[#17483f]">Standards-aware. Not standards theatre.</h2></div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="border-l-2 border-[#b85d3c] pl-4"><p className="font-display text-xl font-bold text-[#17483f]">ISO 15189</p><p className="mt-2 text-xs leading-5 text-[#52716a]">A familiar frame for medical laboratory quality and competence.</p></div>
            <div className="border-l-2 border-[#b85d3c] pl-4"><p className="font-display text-xl font-bold text-[#17483f]">SLIPTA</p><p className="mt-2 text-xs leading-5 text-[#52716a]">Structured around the reality of stepwise improvement.</p></div>
            <div className="border-l-2 border-[#b85d3c] pl-4"><p className="font-display text-xl font-bold text-[#17483f]">WHO LQMS</p><p className="mt-2 text-xs leading-5 text-[#52716a]">Grounded in practical quality management principles.</p></div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#f1eee5] py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionKicker>05 / Transparent pricing</SectionKicker><h2 className="font-display text-4xl font-bold leading-[1.03] tracking-[-.045em] text-[#17483f] sm:text-5xl">A clear start. No price fog.</h2></div><p className="max-w-[330px] text-sm leading-6 text-[#52716a]">Choose a shape that fits your lab today. We’ll confirm the right scope together.</p></div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <PricingCard name="Pilot" detail="For the first cohort" price="Talk to us" features={['A focused QMS workspace', 'Built-in SOP assistant', 'Pilot onboarding and feedback']} featured selected={selectedPlan === 'Pilot'} onSelect={() => { setSelectedPlan('Pilot'); scrollToContact(); }} />
            <PricingCard name="Core" detail="For one laboratory" price="$120" features={['Document and action control', 'Searchable quality records', 'Role-based workspace']} selected={selectedPlan === 'Core'} onSelect={() => { setSelectedPlan('Core'); scrollToContact(); }} />
            <PricingCard name="Partner" detail="For systems partners" price="Talk to us" features={['Multi-site conversations', 'Implementation planning', 'Partner support']} selected={selectedPlan === 'Partner'} onSelect={() => { setSelectedPlan('Partner'); scrollToContact(); }} />
          </div>
          <p className="mt-6 font-mono-ui text-[10px] uppercase tracking-[.12em] text-[#7c8c80]">Selected: {selectedPlan} · Pricing is transparent at the start of every conversation.</p>
        </div>
      </section>

      <section id="about" className="bg-[#f7f4ed] py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div><SectionKicker>06 / About the build</SectionKicker><h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-.045em] text-[#17483f] sm:text-5xl">Built by someone who has lived the paper workflow.</h2><p className="mt-6 max-w-[420px] text-sm leading-6 text-[#52716a]">QualiTracker starts with a simple observation: good laboratory teams are already doing the work. Their systems should make that work visible, not make it harder.</p></div>
            <div className="grid gap-10 sm:grid-cols-2">
              <div><span className="font-mono-ui text-[11px] text-[#b85d3c]">IN THE MVP</span><ul className="mt-5 space-y-4">{['Quality records and document control', 'Actions, owners, and due dates', 'AI answers cited to your SOPs', 'A workspace designed for small teams'].map((item) => <li key={item} className="flex gap-3 text-sm text-[#315850]"><Check size={16} className="mt-0.5 shrink-0 text-[#b85d3c]" />{item}</li>)}</ul></div>
              <div className="sm:border-l sm:border-[#d7d8c9] sm:pl-8"><span className="font-mono-ui text-[11px] text-[#52716a]">PLANNED NEXT</span><ul className="mt-5 space-y-4">{['Deeper implementation support', 'More ways to connect partner teams', 'Additional workflow depth shaped by pilots'].map((item) => <li key={item} className="flex gap-3 text-sm text-[#52716a]"><ArrowRight size={16} className="mt-0.5 shrink-0 text-[#8b9a8d]" />{item}</li>)}</ul><p className="mt-8 border-t border-[#d7d8c9] pt-5 text-xs leading-5 text-[#7c8c80]">The first pilot cohort will help decide what earns its place next.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="qt-dark-grid relative overflow-hidden py-24 text-[#f7f4ed] lg:py-32">
        <div className="absolute -bottom-36 -left-20 h-72 w-72 rounded-full border border-[#d6d9b2]/10" />
        <div className="mx-auto grid max-w-[1240px] gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-8">
          <div className="relative z-10"><SectionKicker light>07 / Start a conversation</SectionKicker><h2 className="max-w-[510px] font-display text-5xl font-bold leading-[.98] tracking-[-.05em] sm:text-6xl">Let’s make quality easier to see.</h2><p className="mt-7 max-w-[390px] text-sm leading-6 text-[#cbd4c3]">We’re inviting a small first pilot cohort of East African laboratories. Tell us a little about your lab and we’ll be in touch.</p><div className="mt-10 flex flex-wrap gap-2">{['Lab directors', 'QMS officers', 'Bench technologists', 'Accreditors', 'NGO partners'].map((item) => <span key={item} className="rounded-full border border-[#d6d9b2]/30 px-3 py-2 font-mono-ui text-[9px] uppercase tracking-[.08em] text-[#d6d9b2]">{item}</span>)}</div></div>
          <div className="relative z-10 rounded-2xl bg-[#f7f4ed] p-6 text-[#17483f] shadow-[12px_14px_0_rgba(214,217,178,.25)] sm:p-8">
            {submitted ? (
              <div className="flex min-h-[355px] flex-col justify-center"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#d6d9b2] text-[#17483f]"><Check size={23} /></div><h3 className="font-display text-3xl font-bold tracking-tight">Request received.</h3><p className="mt-3 max-w-[350px] text-sm leading-6 text-[#52716a]">Thank you for sharing a little about your lab. We’ll follow up about the first pilot cohort.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-8 w-fit text-sm font-bold text-[#b85d3c] underline decoration-[#e7774d] underline-offset-4" data-testid="button-submit-another">Submit another request</button></div>
            ) : (
              <form onSubmit={submitForm}>
                <div className="mb-7 flex items-start justify-between gap-4"><div><p className="font-mono-ui text-[10px] uppercase tracking-[.14em] text-[#b85d3c]">Pilot interest</p><h3 className="mt-2 font-display text-3xl font-bold tracking-tight">Tell us where you work.</h3></div><span className="font-mono-ui text-[10px] text-[#7c8c80]">01 — 04</span></div>
                <div className="space-y-4">
                  <label className="block"><span className="mb-1.5 block text-xs font-bold text-[#315850]">Institution</span><input required name="institution" placeholder="e.g. Regional medical laboratory" className="w-full rounded-xl border border-[#cfd3bd] bg-[#eeefe4] px-4 py-3 text-sm text-[#17483f] outline-none transition-colors placeholder:text-[#8b9a8d] focus:border-[#17483f]" data-testid="input-institution" /></label>
                  <div className="grid gap-4 sm:grid-cols-2"><label className="block"><span className="mb-1.5 block text-xs font-bold text-[#315850]">Country</span><select required name="country" defaultValue="" className="w-full appearance-none rounded-xl border border-[#cfd3bd] bg-[#eeefe4] px-4 py-3 text-sm text-[#17483f] outline-none focus:border-[#17483f]" data-testid="select-country"><option value="" disabled>Select country</option><option>Kenya</option><option>Uganda</option><option>Tanzania</option><option>Rwanda</option><option>Ethiopia</option><option>Other</option></select></label><label className="block"><span className="mb-1.5 block text-xs font-bold text-[#315850]">Role</span><select required name="role" defaultValue="" className="w-full appearance-none rounded-xl border border-[#cfd3bd] bg-[#eeefe4] px-4 py-3 text-sm text-[#17483f] outline-none focus:border-[#17483f]" data-testid="select-role"><option value="" disabled>Select role</option><option>Lab director</option><option>QMS officer</option><option>Bench technologist</option><option>Accreditor</option><option>NGO health-systems partner</option></select></label></div>
                  <label className="block"><span className="mb-1.5 block text-xs font-bold text-[#315850]">Work email</span><input required type="email" name="email" placeholder="you@yourlab.org" className="w-full rounded-xl border border-[#cfd3bd] bg-[#eeefe4] px-4 py-3 text-sm text-[#17483f] outline-none transition-colors placeholder:text-[#8b9a8d] focus:border-[#17483f]" data-testid="input-email" /></label>
                  {/* Honeypot — hidden from real users, catches naive bots */}
                  <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                    Leave this field empty
                    <input tabIndex={-1} autoComplete="off" name={HONEYPOT_FIELD_NAME} />
                  </label>
                </div>
                {submitError && <p role="alert" className="mt-4 text-sm font-semibold text-[#b85d3c]">{submitError}</p>}
                <button type="submit" disabled={submitting} className="qt-button mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#e7774d] px-5 py-3.5 text-sm font-bold text-[#f7f4ed] hover:bg-[#c96040] disabled:cursor-not-allowed disabled:opacity-60" data-testid="button-submit-demo">{submitting ? 'Sending…' : 'Request a demo'} {!submitting && <ArrowRight size={16} />}</button>
                <p className="mt-4 text-center text-[10px] leading-4 text-[#7c8c80]">We'll only use this to follow up about the pilot cohort.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[#17483f] text-[#f7f4ed]">
        <div className="mx-auto max-w-[1240px] border-b border-[#265950] px-5 py-10 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono-ui text-[10px] uppercase tracking-[.14em] text-[#b6c7bc]">Stay ahead of what's happening with QualiTracker</p>
              <p className="mt-1 text-sm text-[#cbd4c3]">One email, occasionally. No spam.</p>
            </div>
            {newsletterState === 'success' ? (
              <p className="text-sm font-semibold text-[#d6d9b2]" data-testid="text-newsletter-success">You're in. We'll keep you posted.</p>
            ) : (
              <form onSubmit={submitNewsletter} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input id="newsletter-email" required type="email" name="newsletter-email" placeholder="you@yourlab.org" className="w-full rounded-full border border-[#3a6a5f] bg-[#12352e] px-4 py-2.5 text-sm text-[#f7f4ed] outline-none placeholder:text-[#79958c] focus:border-[#d6d9b2]" data-testid="input-newsletter-email" />
                <button type="submit" disabled={newsletterState === 'submitting'} className="qt-button shrink-0 rounded-full bg-[#d6d9b2] px-5 py-2.5 text-xs font-bold text-[#17483f] hover:bg-[#c7cb9e] disabled:cursor-not-allowed disabled:opacity-60" data-testid="button-newsletter-subscribe">{newsletterState === 'submitting' ? 'Subscribing…' : 'Subscribe'}</button>
              </form>
            )}
          </div>
          {newsletterState === 'error' && newsletterError && <p role="alert" className="mt-2 text-xs font-semibold text-[#e7774d]" data-testid="text-newsletter-error">{newsletterError}</p>}
        </div>
        <div className="mx-auto flex max-w-[1240px] flex-col gap-7 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <BrandMark light />
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono-ui text-[10px] uppercase tracking-[.11em] text-[#9fb2a4]">{navItems.map((item) => <a key={item.href} href={item.href} className="hover:text-[#d6d9b2]" data-testid={`link-footer-${item.label.toLowerCase()}`}>{item.label}</a>)}<a href="#contact" className="hover:text-[#d6d9b2]" data-testid="link-footer-contact">Request demo</a></div>
          <p className="font-mono-ui text-[10px] uppercase tracking-[.1em] text-[#79958c]">QualiTracker / 2025</p>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;