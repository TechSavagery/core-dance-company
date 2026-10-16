/**
 * Uploads the website's starting text and images into Sanity.
 *
 * Usage:
 *   npm run import-content            creates only the documents that don't exist yet
 *   npm run import-content -- --force overwrites existing documents (erases editor changes)
 *
 * Requires SANITY_API_WRITE_TOKEN in .env.local.
 */
import { createReadStream, existsSync } from "node:fs";
import { basename, join } from "node:path";
import { randomUUID } from "node:crypto";
import { createClient } from "@sanity/client";
import {
  aboutList,
  bannerSlides,
  counterStats,
  danceStyles,
  galleryItems,
  highlights,
  journeySteps,
  leadershipTimeline,
  newsItems,
  services,
  site,
  teamMembers,
  testimonials,
} from "./initial-content.mts";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;
const force = process.argv.includes("--force");

if (!projectId || !dataset || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET or SANITY_API_WRITE_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-08-01",
  token,
  useCdn: false,
});

const key = () => randomUUID().replace(/-/g, "").slice(0, 12);
const keyed = (items) => items.map((item) => ({ _key: key(), ...item }));

const uploaded = new Map();
async function image(publicPath, alt) {
  if (!uploaded.has(publicPath)) {
    const file = join("public", publicPath);
    if (!existsSync(file)) throw new Error(`Image not found: ${file}`);
    const asset = await client.assets.upload("image", createReadStream(file), {
      filename: basename(publicPath),
    });
    uploaded.set(publicPath, asset._id);
    console.log(`  uploaded ${publicPath}`);
  }
  return {
    _type: "image",
    asset: { _type: "reference", _ref: uploaded.get(publicPath) },
    ...(alt ? { alt } : {}),
  };
}

const heading = (backgroundWord, title, subtitle, buttonLabel, buttonLink) => ({
  _type: "sectionHeading",
  backgroundWord,
  title,
  subtitle,
  ...(buttonLabel ? { buttonLabel, buttonLink } : {}),
});

async function buildSiteSettings() {
  const [addressLine1, ...rest] = site.address.split(", ");
  return {
    _id: "siteSettings",
    _type: "siteSettings",
    title: site.title,
    tagline: site.tagline,
    phone: site.phone,
    email: site.email,
    addressLine1,
    addressLine2: rest.join(", "),
    hours: keyed(site.hours.map(({ label, time }) => ({ label, time }))),
    parentPortalLabel: site.parentPortalLabel,
    parentPortalUrl: site.parentPortalUrl,
    registerUrl: site.registerUrl,
    instagramUrl: site.socials.instagram,
    tiktokUrl: site.socials.tiktok,
    youtubeUrl: site.socials.youtube,
    logo: await image("/brand/core-dance-logo-black.png", "CORE Dance"),
    topBarMessage: `Welcome to ${site.title}. ${site.tagline}`,
    footerPortalText: "Register, manage schedules, and stay connected with the studio.",
    footerNote: "Come SHINE with us",
    contactBanner: {
      heading: "Drop Us a Line",
      buttonLabel: "Let’s Talk",
      buttonLink: "/contact",
      image: await image("/images/stock/gallery-on-stage.webp", "Dancers on stage"),
    },
    stats: keyed(counterStats.map(({ count, title }) => ({ value: count, label: title }))),
    seoDescription:
      "Come SHINE with us! Dance studio in San Luis Obispo offering classes for ages 2–adult, performing groups, and CORE Dance Company.",
  };
}

async function buildHomePage() {
  const heroSlides = [];
  for (const slide of bannerSlides) {
    heroSlides.push({
      headingLine1: slide.heading_one,
      headingLine2: slide.heading_two,
      navLabel: slide.title,
      image: await image(slide.banner_img),
      buttonLabel: slide.ctaLabel,
      buttonLink: slide.ctaHref,
    });
  }

  const galleryItemsDocs = [];
  for (const item of galleryItems) {
    galleryItemsDocs.push({
      title: item.img_title,
      description: item.img_desc,
      image: await image(item.img, item.img_title),
      link: item.link,
    });
  }

  const programCards = [];
  for (const item of services) {
    programCards.push({ title: item.title, description: item.desc, image: await image(item.img, item.title) });
  }

  const team = [];
  for (const member of teamMembers) {
    team.push({ name: member.name, role: member.position, photo: await image(member.img, member.name) });
  }

  const highlightCards = [];
  for (const item of highlights) {
    highlightCards.push({
      title: item.project_name,
      description: item.project_desc,
      image: await image(item.project_img, item.project_name),
      link: item.link,
    });
  }

  const newsCards = [];
  for (const item of newsItems) {
    newsCards.push({
      title: item.title,
      category: item.tag,
      when: item.date,
      excerpt: item.excerpt,
      image: await image(item.thumb, item.title),
      link: item.href,
    });
  }

  return {
    _id: "homePage",
    _type: "homePage",
    heroSlides: keyed(heroSlides),
    aboutHeading: heading("About", site.story.heading, site.mission, "Read More", "/about"),
    aboutImage: await image(site.aboutImage, "CORE Dance studio"),
    aboutText: [`${site.story.paragraphs[0].slice(0, 280)}…`, site.story.paragraphs[2]],
    aboutButtonLabel: "Learn More",
    galleryHeading: heading(
      "Gallery",
      "Life at CORE",
      "Where dancers train, perform, and grow together",
      "View Programs",
      "/classes",
    ),
    galleryItems: keyed(galleryItemsDocs),
    programsHeading: heading(
      "Programs",
      "Train. Perform. Compete.",
      "Pathways for every age, style, and commitment level",
      "View Classes",
      "/classes",
    ),
    programCards: keyed(programCards),
    teamHeading: heading(
      "Team",
      "Leadership at CORE",
      "Guiding dancers with technique, care, and high standards",
      "Contact Us",
      "/contact",
    ),
    teamMembers: keyed(team),
    videoHeading: heading("Watch", "See CORE in Action", "Follow us on YouTube and Instagram for studio moments"),
    videoImage: await image("/images/stock/video-silhouettes.jpg", "Watch CORE Dance"),
    videoLink: site.socials.youtube,
    highlightsHeading: heading(
      "Highlights",
      "Why Families Choose CORE",
      "Technique, pathways, and a studio that feels like home",
      "Our Story",
      "/about",
    ),
    highlightCards: keyed(highlightCards),
    testimonialsHeading: heading("Voices", "What Families Say", "A studio community built on trust and excellence"),
    testimonials: keyed(testimonials.map(({ review, name, position }) => ({ quote: review, name, role: position }))),
    journeyHeading: heading(
      "Journey",
      "The Dancer’s Journey",
      "Five pathways from Tiny Dancer to CORE Dance Company",
      "Explore Pathways",
      "/classes",
    ),
    journeyButtonLabel: "Learn More",
    journeyOnHoldLabel: "Check Back Soon",
    newsHeading: heading("Studio", "What’s Happening", "Recitals, registration, camps, and company season"),
    newsCards: keyed(newsCards),
    seo: { title: "Home", description: `${site.heroHeadline} — ${site.tagline}` },
  };
}

async function buildAboutPage() {
  return {
    _id: "aboutPage",
    _type: "aboutPage",
    heading: heading("About", site.story.heading, site.mission),
    image: await image(site.aboutImage, "CORE Dance dancers"),
    badgeHeadline: "15 Years",
    badgeText: "Voted Best of SLO",
    story: [...site.story.paragraphs],
    signOff: site.story.signOff,
    ownerName: site.story.ownerName,
    ownerTitle: site.story.ownerTitle,
    valuesTitle: "What We Stand For",
    values: keyed(aboutList.map(({ item, item_desc }) => ({ title: item, description: item_desc }))),
    timelineTitle: "Our Journey",
    timeline: keyed(leadershipTimeline.map(({ year, title, desc }) => ({ year, title, description: desc }))),
    seo: { title: "About" },
  };
}

async function buildClassesPage() {
  const pathways = [];
  for (const step of journeySteps) {
    pathways.push({
      name: step.name,
      ageRange: step.ageRange,
      summary: step.summary,
      image: await image(step.img, step.name),
      onHold: Boolean(step.onHold),
    });
  }

  return {
    _id: "classesPage",
    _type: "classesPage",
    heading: heading("Classes", "The Dancer’s Journey", "Programs for every age, style, and commitment level"),
    pathways: keyed(pathways),
    registerButtonLabel: "Register",
    onHoldLabel: "Class on Hold — Check Back Soon",
    stylesTitle: "Styles We Offer",
    stylesIntro: "Ballet-based training across a wide range of styles, from ages 2 through adult.",
    styles: [...danceStyles],
    stylesButtonLabel: "Register via Parent Portal",
    contactLinkLabel: "Questions? Contact us",
    seo: { title: "Classes" },
  };
}

function buildContactPage() {
  return {
    _id: "contactPage",
    _type: "contactPage",
    heading: heading("Contact", "Let’s Talk", "We’d love to help your dancer find the right pathway"),
    studioCardTitle: "Studio",
    directionsLabel: "Get directions",
    phoneCardTitle: "Call / Text",
    emailCardTitle: "Email",
    hoursTitle: "Office Hours",
    seo: { title: "Contact" },
  };
}

const builders = {
  siteSettings: buildSiteSettings,
  homePage: buildHomePage,
  aboutPage: buildAboutPage,
  classesPage: buildClassesPage,
  contactPage: buildContactPage,
};

console.log(`Importing into ${projectId}/${dataset}${force ? " (overwriting)" : ""}`);
const existing = new Set(await client.fetch(`*[_id in $ids]._id`, { ids: Object.keys(builders) }));

const tx = client.transaction();
for (const [id, build] of Object.entries(builders)) {
  if (existing.has(id) && !force) {
    console.log(`- ${id}: already exists, skipped (use --force to overwrite)`);
    continue;
  }
  console.log(`- ${id}: building`);
  tx.createOrReplace(await build());
}

const result = await tx.commit();
console.log(`Done: ${result.results.length} document(s) written.`);
