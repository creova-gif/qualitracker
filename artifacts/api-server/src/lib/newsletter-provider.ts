import { logger } from "./logger";

/**
 * Provider-agnostic newsletter interface. The rest of the app only
 * ever talks to this contract — swapping Resend for Mailchimp, Kit,
 * or Brevo later is a one-file change, not a rewrite.
 */
export interface NewsletterProvider {
  subscribe(input: {
    email: string;
    firstName?: string;
    lastName?: string;
  }): Promise<void>;
  unsubscribe(email: string): Promise<void>;
  healthCheck(): Promise<boolean>;
}

/**
 * Default provider used until real credentials are configured.
 * Logs instead of failing, so newsletter signups still get stored as
 * leads (see leads route) even before a provider is wired up — we
 * just won't actually email anyone yet.
 */
class NoopNewsletterProvider implements NewsletterProvider {
  async subscribe(input: { email: string }): Promise<void> {
    logger.warn(
      { email: input.email },
      "NewsletterProvider not configured — signup stored as a lead but NOT forwarded to any email provider. Set NEWSLETTER_PROVIDER + credentials.",
    );
  }
  async unsubscribe(): Promise<void> {}
  async healthCheck(): Promise<boolean> {
    return true;
  }
}

// TODO: once a provider is chosen (Resend recommended — simplest API,
// good deliverability, generous free tier), add e.g.:
//
//   class ResendNewsletterProvider implements NewsletterProvider {
//     constructor(private apiKey: string, private audienceId: string) {}
//     async subscribe({ email, firstName, lastName }) {
//       await fetch(`https://api.resend.com/audiences/${this.audienceId}/contacts`, {
//         method: "POST",
//         headers: { Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json" },
//         body: JSON.stringify({ email, first_name: firstName, last_name: lastName }),
//       });
//     }
//     ...
//   }
//
// and select it here based on process.env.NEWSLETTER_PROVIDER.
// Never read the API key anywhere except this file.

export function getNewsletterProvider(): NewsletterProvider {
  return new NoopNewsletterProvider();
}
