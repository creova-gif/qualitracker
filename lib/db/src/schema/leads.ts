import { pgTable, text, timestamp, uuid, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

// A single lead model that covers both newsletter signups and the
// "pilot interest" / demo-request contact form. `source` and `kind`
// tell them apart so we can report on each separately without
// maintaining two tables that will inevitably drift.
export const leadsTable = pgTable("leads", {
  id: uuid("id").primaryKey().defaultRandom(),

  // Contact identity
  email: text("email").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  institution: text("institution"), // "company" for a lab context
  role: text("role"),
  country: text("country"),

  // What kind of lead this is
  kind: text("kind", { enum: ["newsletter", "demo_request"] }).notNull(),

  // Attribution — where the lead came from
  source: text("source").notNull(), // e.g. "homepage", "footer", "resource-article"
  landingPage: text("landing_page"),
  referrer: text("referrer"),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  utmTerm: text("utm_term"),
  utmContent: text("utm_content"),

  // Consent (required for newsletter, implicit-but-recorded for demo requests)
  consent: boolean("consent").notNull().default(false),
  consentTimestamp: timestamp("consent_timestamp", { withTimezone: true }),

  // Lifecycle status
  status: text("status", {
    enum: [
      "new",
      "subscribed",
      "engaged",
      "qualified",
      "contacted",
      "converted",
      "unsubscribed",
    ],
  })
    .notNull()
    .default("new"),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// Unique-ish constraint note: Drizzle push will create the table as
// defined here; add a partial unique index on (email, kind) via a
// migration once this is live, so the same person can be on the
// newsletter *and* have submitted a demo request without collision,
// but can't double-submit the same kind.

export const insertLeadSchema = createInsertSchema(leadsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  status: true,
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leadsTable.$inferSelect;
