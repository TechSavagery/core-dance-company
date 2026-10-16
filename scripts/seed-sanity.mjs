/**
 * One-shot seed for staging dataset.
 * Usage: node --env-file=.env.local scripts/seed-sanity.mjs
 * Requires SANITY_API_WRITE_TOKEN in env.
 */
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "staging";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-08-01",
  token,
  useCdn: false,
});

const ref = (id) => ({ _type: "reference", _ref: id });

// Site settings and page content are imported by scripts/import-site-content.mjs.
const docs = [
  {
    _id: "tuitionPolicy",
    _type: "tuitionPolicy",
    title: "Tuition & policies",
    monthlyRates: [
      { _key: "r1", classCount: "1", amount: "$80" },
      { _key: "r2", classCount: "2", amount: "$140" },
      { _key: "r3", classCount: "3", amount: "$185" },
      { _key: "r4", classCount: "4", amount: "$225" },
      { _key: "r5", classCount: "5", amount: "$260" },
      { _key: "r6", classCount: "6", amount: "$295" },
      { _key: "r7", classCount: "7", amount: "$325" },
      { _key: "r8", classCount: "8", amount: "$355" },
      { _key: "r9", classCount: "9", amount: "$380" },
    ],
    additionalClassRate: "$35 each additional class",
    dropInRate: "$25",
    annualProcessingFee: "$45 per family",
    lateFeeNotes: "Auto-pay on the 1st. 10% late fee per week after the 7th.",
    sections: [
      {
        _key: "s1",
        heading: "Dancer expectations",
        body: "Dancers are expected to arrive on time, prepared, and ready to work with a positive attitude.",
      },
      {
        _key: "s2",
        heading: "Parent guidelines",
        body: "Parents support a safe, respectful studio environment and follow observation and communication guidelines.",
      },
      {
        _key: "s3",
        heading: "Make-ups",
        body: "Make-up class policies apply to missed month-to-month classes as published by the studio.",
      },
      {
        _key: "s4",
        heading: "Private lessons",
        body: "Private lessons are available by arrangement with faculty and studio administration.",
      },
      {
        _key: "s5",
        heading: "Photo & observation",
        body: "Photo restrictions and lobby observation rules protect dancers and class focus.",
      },
      {
        _key: "s6",
        heading: "Cancel / refund",
        body: "Cancellation and refund terms follow the current season handbook.",
      },
    ],
  },
];

const styles = [
  ["danceStyle-jazz", "Jazz Technique & Jazz", "High-energy jazz training covering technique, style, and performance quality.", "Fitted jazz attire; jazz shoes as instructed.", 1],
  ["danceStyle-ballet", "Ballet", "Classical ballet foundations, alignment, and vocabulary across levels.", "Leotard, tights, ballet slippers; hair secured.", 2],
  ["danceStyle-lyrical", "Lyrical & Contemporary", "Expressive movement blending ballet technique with contemporary storytelling.", "Fitted attire; bare feet or lyrical shoes as instructed.", 3],
  ["danceStyle-acro", "Acro", "Acrobatic skills, strength, and flexibility for dancers.", "Fitted athletic wear; bare feet.", 4],
  ["danceStyle-tap", "Tap", "Rhythm, clarity, and musicality through tap technique.", "Comfortable dance wear; tap shoes.", 5],
  ["danceStyle-hiphop", "Hip Hop & Jazz Funk", "Street-influenced grooves, isolations, and commercial jazz funk style.", "Comfortable athletic wear; clean sneakers.", 6],
  ["danceStyle-pointe", "Pre-Pointe & Pointe", "Strength and technique preparation for pointe work; teacher placement required.", "Ballet attire; pointe shoes when approved.", 7],
  ["danceStyle-mt", "Musical Theatre", "Song-and-dance performance skills for stage.", "Dance wear suitable for movement; character or jazz shoes as instructed.", 8],
  ["danceStyle-tiny", "Tiny Dancer Series", "Themed short series for our youngest dancers with costume and performance.", "Comfortable dance wear as listed per series.", 9],
  ["danceStyle-combo", "Combo classes", "Multi-discipline combo offerings (ballet/jazz, ballet/tap, tap/hip hop, etc.).", "", 10],
  ["danceStyle-specialty", "Specialty", "Flexibility, heels, ballroom, and other specialty classes.", "", 11],
].map(([id, name, description, dressCode, sortOrder]) => ({
  _id: id,
  _type: "danceStyle",
  name,
  description,
  dressCode: dressCode || undefined,
  sortOrder,
  active: true,
}));

const levels = [
  ["danceLevel-pre-ballet", "Pre-Ballet", "danceStyle-ballet", "pre-ballet", 10],
  ["danceLevel-ballet-1", "Ballet 1", "danceStyle-ballet", "ballet-1", 11],
  ["danceLevel-ballet-1-2", "Ballet 1/2", "danceStyle-ballet", "ballet-1-2", 12],
  ["danceLevel-ballet-2", "Ballet 2", "danceStyle-ballet", "ballet-2", 13],
  ["danceLevel-ballet-2-3", "Ballet 2/3", "danceStyle-ballet", "ballet-2-3", 14],
  ["danceLevel-ballet-3", "Ballet 3", "danceStyle-ballet", "ballet-3", 15],
  ["danceLevel-ballet-3-4", "Ballet 3/4", "danceStyle-ballet", "ballet-3-4", 16],
  ["danceLevel-pre-pointe", "Pre-Pointe / Pointe", "danceStyle-pointe", "pre-pointe-pointe", 17, "Teacher Placement"],
  ["danceLevel-jazz-1", "Jazz 1", "danceStyle-jazz", "jazz-1", 20],
  ["danceLevel-jazz-2", "Jazz 2", "danceStyle-jazz", "jazz-2", 21],
  ["danceLevel-jazz-2a", "Jazz 2A", "danceStyle-jazz", "jazz-2a", 22],
  ["danceLevel-jazz-2b", "Jazz 2B", "danceStyle-jazz", "jazz-2b", 23],
  ["danceLevel-jazz-2-3", "Jazz 2/3", "danceStyle-jazz", "jazz-2-3", 24],
  ["danceLevel-jazz-3", "Jazz 3", "danceStyle-jazz", "jazz-3", 25],
  ["danceLevel-jazz-3-4", "Jazz 3/4", "danceStyle-jazz", "jazz-3-4", 26],
  ["danceLevel-jazz-tech-1", "Jazz Tech 1", "danceStyle-jazz", "jazz-tech-1", 30],
  ["danceLevel-jazz-tech-1-2", "Jazz Tech 1/2", "danceStyle-jazz", "jazz-tech-1-2", 31],
  ["danceLevel-jazz-tech-2", "Jazz Tech 2", "danceStyle-jazz", "jazz-tech-2", 32],
  ["danceLevel-jazz-tech-2-3", "Jazz Tech 2/3", "danceStyle-jazz", "jazz-tech-2-3", 33],
  ["danceLevel-jazz-tech-3", "Jazz Tech 3", "danceStyle-jazz", "jazz-tech-3", 34],
  ["danceLevel-jazz-tech-3-4", "Jazz Tech 3/4", "danceStyle-jazz", "jazz-tech-3-4", 35],
  ["danceLevel-jazz-tech-4", "Jazz Tech 4", "danceStyle-jazz", "jazz-tech-4", 36],
  ["danceLevel-lyrical-1", "Lyrical 1", "danceStyle-lyrical", "lyrical-1", 40],
  ["danceLevel-lyrical-2", "Lyrical 2", "danceStyle-lyrical", "lyrical-2", 41],
  ["danceLevel-lyrical-2-3", "Lyrical 2/3", "danceStyle-lyrical", "lyrical-2-3", 42],
  ["danceLevel-lyrical-3", "Lyrical 3", "danceStyle-lyrical", "lyrical-3", 43],
  ["danceLevel-lyrical-3-4", "Lyrical 3/4", "danceStyle-lyrical", "lyrical-3-4", 44],
  ["danceLevel-contemporary-3-4", "Contemporary 3/4", "danceStyle-lyrical", "contemporary-3-4", 45],
  ["danceLevel-hiphop-1", "Hip Hop 1", "danceStyle-hiphop", "hiphop-1", 50],
  ["danceLevel-hiphop-2", "Hip Hop 2", "danceStyle-hiphop", "hiphop-2", 51],
  ["danceLevel-hiphop-2-3", "Hip Hop 2/3", "danceStyle-hiphop", "hiphop-2-3", 52],
  ["danceLevel-hiphop-3", "Hip Hop 3", "danceStyle-hiphop", "hiphop-3", 53],
  ["danceLevel-hiphop-3-4", "Hip Hop 3/4", "danceStyle-hiphop", "hiphop-3-4", 54],
  ["danceLevel-acro-1-2", "Acro 1/2", "danceStyle-acro", "acro-1-2", 60],
  ["danceLevel-acro-2", "Acro 2", "danceStyle-acro", "acro-2", 61],
  ["danceLevel-acro-3", "Acro 3", "danceStyle-acro", "acro-3", 62],
  ["danceLevel-acro-3-4", "Acro 3/4", "danceStyle-acro", "acro-3-4", 63],
  ["danceLevel-tap-fund", "Tap Fundamentals", "danceStyle-tap", "tap-fundamentals", 70],
  ["danceLevel-tap-1-2", "Tap 1/2", "danceStyle-tap", "tap-1-2", 71],
  ["danceLevel-tap-2-3", "Tap 2/3", "danceStyle-tap", "tap-2-3", 72],
  ["danceLevel-tap-3-4", "Tap 3/4", "danceStyle-tap", "tap-3-4", 73],
  ["danceLevel-ballet-jazz-combo", "Ballet / Jazz Combo", "danceStyle-combo", "ballet-jazz-combo", 80],
  ["danceLevel-ballet-tap-combo", "Ballet / Tap Combo", "danceStyle-combo", "ballet-tap-combo", 81],
  ["danceLevel-ballet-tap-combo-plus", "Ballet / Tap Combo+", "danceStyle-combo", "ballet-tap-combo-plus", 82],
  ["danceLevel-tap-hiphop-combo", "Tap / Hip Hop Combo", "danceStyle-combo", "tap-hiphop-combo", 83],
  ["danceLevel-tap-tumble-combo", "Tap / Tumble Combo", "danceStyle-combo", "tap-tumble-combo", 84],
  ["danceLevel-flex-a", "Flexibility A", "danceStyle-specialty", "flexibility-a", 90],
  ["danceLevel-flex-b", "Flexibility B", "danceStyle-specialty", "flexibility-b", 91],
  ["danceLevel-heels", "Heels", "danceStyle-specialty", "heels", 92],
  ["danceLevel-ballroom", "Ballroom", "danceStyle-specialty", "ballroom", 93],
  ["danceLevel-mt-a", "Musical Theatre A", "danceStyle-mt", "mt-a", 94],
  ["danceLevel-mt-b", "Musical Theatre B", "danceStyle-mt", "mt-b", 95],
  ["danceLevel-corebarre-2-3", "COREBarre for Dancers 2/3", "danceStyle-specialty", "corebarre-2-3", 96],
  ["danceLevel-corebarre-3-4", "COREBarre for Dancers 3/4", "danceStyle-specialty", "corebarre-3-4", 97],
  ["danceLevel-adult-ballet", "Adult Ballet", "danceStyle-ballet", "adult-ballet", 98],
].map(([id, name, styleId, levelCode, sortOrder, placementNotes]) => ({
  _id: id,
  _type: "danceLevel",
  name,
  style: ref(styleId),
  levelCode,
  placementNotes,
  ageNotes: id === "danceLevel-adult-ballet" ? "Adult" : undefined,
  sortOrder,
  active: true,
}));

const programs = [
  {
    _id: "program-tiny",
    _type: "program",
    name: "Tiny Dancer",
    ageRange: "Ages 2–6",
    summary:
      "Themed short series for our youngest dancers, typically including a costume and performance experience.",
    durationNotes: "5–10 week themed series",
    ctaLabel: "Explore Tiny Dancers",
    ctaHref: "/tiny-dancers",
    onHold: false,
    sortOrder: 1,
    active: true,
  },
  {
    _id: "program-beginning",
    _type: "program",
    name: "Beginning Series",
    ageRange: "Ages 4–10",
    summary: "Introductory series for new dancers building foundational skills.",
    durationNotes: "5–10 weeks",
    ctaLabel: "Class on Hold / Check Back Soon",
    onHold: true,
    sortOrder: 2,
    active: true,
  },
  {
    _id: "program-month",
    _type: "program",
    name: "Month-to-Month Classes",
    ageRange: "Ages 4–adult",
    summary:
      "Ongoing technique classes across styles and levels, culminating in Encore in June.",
    durationNotes: "Continuous enrollment",
    ctaLabel: "View classes",
    ctaHref: "/classes",
    onHold: false,
    sortOrder: 3,
    active: true,
  },
  {
    _id: "program-performance-co",
    _type: "program",
    name: "CORE Performance Company",
    ageRange: "CORE Babies, CORE Minis, Pre-Company",
    summary:
      "Introductory performing groups with local performances and typically one convention per year.",
    durationNotes: "Seasonal company track",
    ctaLabel: "Learn about performing groups",
    ctaHref: "/performing-groups",
    onHold: false,
    sortOrder: 4,
    active: true,
  },
  {
    _id: "program-cdc",
    _type: "program",
    name: "CORE Dance Company",
    ageRange: "Ages 9+",
    summary:
      "Audition-based competitive company with multiple competitions and conventions each season.",
    durationNotes: "2–4 competitions / conventions per year",
    ctaLabel: "Learn about CORE Dance Company",
    ctaHref: "/company",
    onHold: false,
    sortOrder: 5,
    active: true,
  },
];

const groups = [
  ["group-babies", "CORE Babies", false, "Ages 4–5", "Introductory performing group for our youngest company dancers.", "Local venues", 1],
  ["group-minis", "CORE Minis", false, "Ages 5.5–7", "Early performance training with local shows and optional convention experience.", "Local performances + optional Burlingame convention (Feb)", 2],
  ["group-pre-company", "Pre-Company", false, "Ages 7–8", "Bridge into competitive company life with local performances and convention/showcase.", "Local + Burlingame convention/showcase", 3],
  ["group-mt", "Musical Theatre Performance Group", false, "By audition / invitation", "Focused musical theatre performance group with dedicated rehearsal time.", "Rehearsal on studio schedule", 4],
  ["group-junior", "Junior", true, "CORE Dance Company", "Junior competitive company track.", "", 10],
  ["group-junior-gold", "Junior Gold", true, "CORE Dance Company", "Junior Gold competitive company track.", "", 11],
  ["group-pre-teen", "Pre-Teen", true, "CORE Dance Company", "Pre-Teen competitive company track.", "", 12],
  ["group-teen", "Teen", true, "CORE Dance Company", "Teen competitive company track.", "", 13],
  ["group-senior", "Senior", true, "CORE Dance Company", "Senior competitive company track.", "", 14],
  ["group-black", "Black Track", true, "CORE Dance Company", "Black competitive track within CORE Dance Company.", "", 15],
  ["group-silver", "Silver Track", true, "CORE Dance Company", "Silver competitive track within CORE Dance Company.", "", 16],
  ["group-production", "Production", true, "CORE Dance Company", "Company production numbers.", "", 17],
  ["group-sdt", "Solo / Duo / Trio", true, "CORE Dance Company", "Individual and small-group competitive entries.", "", 18],
  ["group-teen-reh", "Teen Rehearsal", true, "CORE Dance Company", "Dedicated teen company rehearsal block.", "", 19],
].map(([id, name, isCompanyTrack, ageRange, summary, competitionNotes, sortOrder]) => ({
  _id: id,
  _type: "performingGroup",
  name,
  isCompanyTrack,
  ageRange,
  summary,
  competitionNotes: competitionNotes || undefined,
  sortOrder,
  active: true,
}));

const people = [
  ["person-isabella", "Isabella Lund", "Owner & Company Director", "Owner and Company Director (from January 2026).", 1, true],
  ["person-alexa", "Alexa Von Der Hoff", "Prior Studio Owner", "Studio owner from 2018 through approximately 2025.", 2, false],
  ["person-leslie", "Leslie Baumberger", "Founder", "Studio founder (August 2010).", 10, false],
  ["person-stacy", "Stacy Millard", "Founder", "Studio founder (August 2010).", 11, false],
  ["person-rose", "Rose Patti", "Founder", "Studio founder (August 2010).", 12, false],
  ["person-zheila", "Zheila Pouraghabagher", "Founder", "Studio founder (August 2010).", 13, false],
].map(([id, name, role, bio, sortOrder, showOnSite]) => ({
  _id: id,
  _type: "person",
  name,
  role,
  bio,
  sortOrder,
  showOnSite,
  active: true,
}));

const events = [
  {
    _id: "event-season-start",
    _type: "studioEvent",
    title: "Season start",
    startDate: "2025-08-18",
    category: "registration",
    notes: "2025–26 season start (from prior Important Dates page).",
    featured: true,
    active: false,
  },
  { _id: "event-bring-friend", _type: "studioEvent", title: "Bring A Friend Week", category: "other", active: false },
  { _id: "event-holiday-parade", _type: "studioEvent", title: "SLO Holiday Parade", category: "performance", active: false },
  { _id: "event-santas-house", _type: "studioEvent", title: "Santa’s House", category: "performance", active: false },
  { _id: "event-alice-recital", _type: "studioEvent", title: "Alice Dreams Of Wonderland Recital", category: "performance", active: false },
  {
    _id: "event-rhythms",
    _type: "studioEvent",
    title: "Company “Rhythms” Showcase",
    startDate: "2026-05-30",
    category: "performance",
    featured: true,
    active: false,
  },
  {
    _id: "event-encore",
    _type: "studioEvent",
    title: "ENCORE",
    startDate: "2026-06-26",
    endDate: "2026-06-30",
    category: "performance",
    featured: true,
    active: false,
  },
  {
    _id: "event-summer-classes",
    _type: "studioEvent",
    title: "Summer Classes begin",
    startDate: "2026-07-06",
    category: "registration",
    active: false,
  },
];

const camps = [
  {
    _id: "camp-kpop",
    _type: "camp",
    name: "K-Pop World Tour",
    startDate: "2026-07-06",
    endDate: "2026-07-10",
    ages: "Grades 1–5",
    schedule: "9am–3pm",
    price: "$380 after May 1",
    earlyBirdPrice: "$350",
    description: "Summer camp from the prior season site. Seeded as archived for reference.",
    sortOrder: 1,
    active: false,
  },
  {
    _id: "camp-pawty",
    _type: "camp",
    name: "Dance PAW-ty With My Pet",
    startDate: "2026-07-13",
    endDate: "2026-07-17",
    ages: "Preschool / K",
    schedule: "9am–Noon",
    price: "$230 after May 1",
    earlyBirdPrice: "$200",
    description: "Summer camp from the prior season site. Seeded as archived for reference.",
    sortOrder: 2,
    active: false,
  },
  {
    _id: "camp-dino",
    _type: "camp",
    name: "DJ Dino’s Hip-Hop Stomp",
    startDate: "2026-07-20",
    endDate: "2026-07-24",
    ages: "Preschool / kids",
    schedule: "9am–Noon",
    price: "See prior season pricing",
    earlyBirdPrice: "Early-bird available previously",
    description: "Summer camp from the prior season site. Seeded as archived for reference.",
    sortOrder: 3,
    active: false,
  },
  {
    _id: "camp-wicked",
    _type: "camp",
    name: "Pink Bubbles & Emerald Energy",
    startDate: "2026-07-27",
    endDate: "2026-07-31",
    ages: "Wicked-themed camp ages",
    schedule: "9am–3pm",
    price: "$380 after May 1",
    earlyBirdPrice: "$350",
    description: "Summer camp from the prior season site. Seeded as archived for reference.",
    sortOrder: 4,
    active: false,
  },
];

const adult = [
  {
    _id: "adult-ballet",
    _type: "adultOffering",
    name: "Adult Ballet",
    offeringType: "adultClass",
    schedule: "Monday 6–7pm",
    description: "Adult ballet class (prior season copy noted running through June).",
    sortOrder: 1,
    active: false,
  },
  {
    _id: "adult-jazz-funk",
    _type: "adultOffering",
    name: "Adult Jazz Funk",
    offeringType: "adultClass",
    schedule: "Wednesday 10–11am",
    description: "Limited adult series (prior site: May 6–27).",
    sortOrder: 2,
    active: false,
  },
  {
    _id: "adult-corebarre",
    _type: "adultOffering",
    name: "COREBarre",
    offeringType: "coreBarre",
    schedule: "See Studio Bookings / ClassPass",
    description: "Barre fitness offering with separate booking stack from Studio Pro.",
    pricing: [
      { _key: "p1", label: "4-week trial", amount: "$44" },
      { _key: "p2", label: "Monthly", amount: "$129" },
      { _key: "p3", label: "New student monthly", amount: "$99" },
      { _key: "p4", label: "Single class", amount: "$18" },
      { _key: "p5", label: "10-pack", amount: "$165" },
    ],
    sortOrder: 3,
    active: true,
  },
];

const recitals = [
  {
    _id: "recital-encore-26",
    _type: "recital",
    name: "ENCORE 26",
    year: "2026",
    venue: "Cuesta Performing Arts Center",
    showDates: "June 27–28, 2026 · 2pm showtimes",
    rehearsalWindow: "Dress rehearsals June 19–25, 2026",
    fees: [
      { _key: "f1", label: "Costume", amount: "$85", dueDate: "March 5" },
      { _key: "f2", label: "Recital fee (per family)", amount: "$60", dueDate: "April 15" },
      { _key: "f3", label: "Tickets", amount: "$35", dueDate: "From June 1" },
    ],
    body: "Year-end recital content migrated from the Wix ENCORE page. Seeded as archived so current-season messaging can replace it.",
    sortOrder: 1,
    active: false,
  },
];

const allDocs = [
  ...docs,
  ...styles,
  ...levels,
  ...programs,
  ...groups,
  ...people,
  ...events,
  ...camps,
  ...adult,
  ...recitals,
];

const tx = client.transaction();
for (const doc of allDocs) {
  tx.createOrReplace(doc);
}

const result = await tx.commit({ visibility: "async" });
console.log(`Seeded ${allDocs.length} documents into ${projectId}/${dataset}`);
console.log(result);
