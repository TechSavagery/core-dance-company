import { defineQuery } from "next-sanity";
import type { SanityImage } from "./image";

export type SectionHeading = {
  backgroundWord?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonLink?: string;
};

export type Seo = { title?: string; description?: string };

export type Keyed<T> = T & { _key: string };

export type SiteSettings = {
  title: string;
  tagline?: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  hours?: Keyed<{ label: string; time: string }>[];
  parentPortalLabel: string;
  parentPortalUrl: string;
  registerUrl: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  youtubeUrl?: string;
  facebookUrl?: string;
  logo: SanityImage;
  topBarMessage?: string;
  footerPortalText?: string;
  footerNote?: string;
  contactBanner?: {
    heading?: string;
    buttonLabel?: string;
    buttonLink?: string;
    image?: SanityImage;
  };
  stats?: Keyed<{ value: string; label: string }>[];
  seoDescription?: string;
};

export type Pathway = Keyed<{
  name: string;
  ageRange?: string;
  summary?: string;
  image: SanityImage;
  onHold?: boolean;
}>;

export type HeroSlide = Keyed<{
  headingLine1: string;
  headingLine2: string;
  navLabel: string;
  image: SanityImage;
  buttonLabel: string;
  buttonLink: string;
}>;

export type HomePage = {
  heroSlides?: HeroSlide[];
  aboutHeading?: SectionHeading;
  aboutImage?: SanityImage;
  aboutText?: string[];
  aboutButtonLabel?: string;
  galleryHeading?: SectionHeading;
  galleryItems?: Keyed<{ title: string; description?: string; image: SanityImage; link?: string }>[];
  programsHeading?: SectionHeading;
  programCards?: Keyed<{ title: string; description?: string; image: SanityImage }>[];
  teamHeading?: SectionHeading;
  teamMembers?: Keyed<{ name: string; role?: string; photo: SanityImage }>[];
  videoHeading?: SectionHeading;
  videoImage?: SanityImage;
  videoLink?: string;
  highlightsHeading?: SectionHeading;
  highlightCards?: Keyed<{ title: string; description?: string; image: SanityImage; link?: string }>[];
  testimonialsHeading?: SectionHeading;
  testimonials?: Keyed<{ quote: string; name: string; role?: string }>[];
  journeyHeading?: SectionHeading;
  journeyButtonLabel?: string;
  journeyOnHoldLabel?: string;
  newsHeading?: SectionHeading;
  newsCards?: Keyed<{
    title: string;
    category?: string;
    when?: string;
    excerpt?: string;
    image: SanityImage;
    link?: string;
  }>[];
  seo?: Seo;
  pathways?: Pathway[];
  about?: { signOff?: string; ownerName?: string; ownerTitle?: string };
};

export type AboutPage = {
  heading?: SectionHeading;
  image?: SanityImage;
  badgeHeadline?: string;
  badgeText?: string;
  story?: string[];
  signOff?: string;
  ownerName?: string;
  ownerTitle?: string;
  valuesTitle?: string;
  values?: Keyed<{ title: string; description?: string }>[];
  timelineTitle?: string;
  timeline?: Keyed<{ year: string; title: string; description?: string }>[];
  seo?: Seo;
};

export type ClassesPage = {
  heading?: SectionHeading;
  pathways?: Pathway[];
  registerButtonLabel?: string;
  onHoldLabel?: string;
  stylesTitle?: string;
  stylesIntro?: string;
  styles?: string[];
  stylesButtonLabel?: string;
  contactLinkLabel?: string;
  seo?: Seo;
};

export type ContactPage = {
  heading?: SectionHeading;
  studioCardTitle?: string;
  directionsLabel?: string;
  phoneCardTitle?: string;
  emailCardTitle?: string;
  hoursTitle?: string;
  seo?: Seo;
};

export const siteSettingsQuery = defineQuery(`*[_id == "siteSettings"][0]`);

export const homePageQuery = defineQuery(`*[_id == "homePage"][0]{
  ...,
  "pathways": *[_id == "classesPage"][0].pathways,
  "about": *[_id == "aboutPage"][0]{ signOff, ownerName, ownerTitle }
}`);

export const aboutPageQuery = defineQuery(`*[_id == "aboutPage"][0]`);

export const classesPageQuery = defineQuery(`*[_id == "classesPage"][0]`);

export const contactPageQuery = defineQuery(`*[_id == "contactPage"][0]`);
