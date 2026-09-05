export type LeadKind = 'newsletter' | 'demo_request' | 'waitlist' | 'talk_to_team';

export interface SubmitLeadInput {
  kind: LeadKind;
  email: string;
  firstName?: string;
  lastName?: string;
  institution?: string;
  role?: string;
  country?: string;
  /** e.g. "Medical laboratory", "Multi-site network" — waitlist/talk-to-team only. */
  organizationType?: string;
  /** Free-text context: waitlist detail, or a talk-to-team inquiry (prefix with its category). */
  message?: string;
  source: string; // where on the site this came from, e.g. "homepage-hero", "footer"
  consent: boolean;
  /** Honeypot passthrough — leave undefined for real users. */
  website?: string;
}

// Simple honeypot field name shared with the backend. Rendered
// visually hidden in the form; real users never see or fill it.
export const HONEYPOT_FIELD_NAME = 'website';

export async function submitLead(input: SubmitLeadInput): Promise<void> {
  const params = new URLSearchParams(window.location.search);

  const res = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...input,
      landingPage: window.location.pathname,
      referrer: document.referrer || undefined,
      utmSource: params.get('utm_source') ?? undefined,
      utmMedium: params.get('utm_medium') ?? undefined,
      utmCampaign: params.get('utm_campaign') ?? undefined,
      utmTerm: params.get('utm_term') ?? undefined,
      utmContent: params.get('utm_content') ?? undefined,
    }),
  });

  if (res.status === 409) {
    throw new Error('ALREADY_SUBSCRIBED');
  }
  if (!res.ok) {
    throw new Error('SUBMIT_FAILED');
  }
}
