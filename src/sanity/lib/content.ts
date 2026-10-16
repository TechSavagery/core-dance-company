import type { Metadata } from "next";
import { cache } from "react";
import { sanityFetch } from "./client";
import {
  aboutPageQuery,
  classesPageQuery,
  contactPageQuery,
  homePageQuery,
  siteSettingsQuery,
  type AboutPage,
  type ClassesPage,
  type ContactPage,
  type HomePage,
  type Seo,
  type SiteSettings,
} from "./queries";

export type Social = { id: string; label: string; href: string };

export type Settings = SiteSettings & {
  address: string;
  mapsUrl: string;
  phoneHref: string;
  emailHref: string;
  socials: Social[];
};

function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `tel:+${digits.length === 10 ? `1${digits}` : digits}`;
}

async function required<T>(promise: Promise<T | null>, name: string): Promise<T> {
  const doc = await promise;
  if (!doc) throw new Error(`Sanity document "${name}" is missing. Run npm run import-content.`);
  return doc;
}

export const getSettings = cache(async (): Promise<Settings> => {
  const s = await required(sanityFetch<SiteSettings | null>(siteSettingsQuery), "siteSettings");
  const address = `${s.addressLine1}, ${s.addressLine2}`;
  const socials = [
    { id: "ig", label: "IG", href: s.instagramUrl },
    { id: "tt", label: "TT", href: s.tiktokUrl },
    { id: "yt", label: "YT", href: s.youtubeUrl },
    { id: "fb", label: "FB", href: s.facebookUrl },
  ].filter((item): item is Social => Boolean(item.href));

  return {
    ...s,
    address,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
    phoneHref: telHref(s.phone),
    emailHref: `mailto:${s.email}`,
    socials,
  };
});

export const getHomePage = cache(() => required(sanityFetch<HomePage | null>(homePageQuery), "homePage"));
export const getAboutPage = cache(() => required(sanityFetch<AboutPage | null>(aboutPageQuery), "aboutPage"));
export const getClassesPage = cache(() =>
  required(sanityFetch<ClassesPage | null>(classesPageQuery), "classesPage"),
);
export const getContactPage = cache(() =>
  required(sanityFetch<ContactPage | null>(contactPageQuery), "contactPage"),
);

/** Leaves out empty fields so pages inherit the site-wide defaults from the root layout. */
export function pageMetadata(seo: Seo | undefined): Metadata {
  return {
    ...(seo?.title ? { title: seo.title } : {}),
    ...(seo?.description ? { description: seo.description } : {}),
  };
}

export function pathwayNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}
