/**
 * Hardcoded site content for studio-owner preview.
 * Replace with Sanity fetches later (schemas already exist).
 *
 * Photos in public/images/stock/ are licensed stock placeholders (see CREDITS.txt
 * there; CC BY / BY-SA images require attribution) until real CORE photos arrive.
 */

export const site = {
  title: "CORE Dance",
  tagline: "Come SHINE with us!",
  heroHeadline: "GET INSPIRED WITH THE VERY BEST",
  mission: "Our mission is to inspire the community to dance!",
  phone: "(805) 541-2669",
  phoneHref: "tel:+18055412669",
  email: "coredance.cc@gmail.com",
  emailHref: "mailto:coredance.cc@gmail.com",
  address: "882 Ricardo Ct, San Luis Obispo, CA 93401",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=882+Ricardo+Ct+San+Luis+Obispo+CA+93401",
  parentPortalUrl: "https://app.gostudiopro.com/online/core/",
  parentPortalLabel: "Parent Portal",
  scheduleUrl: "https://app.gostudiopro.com/online/core/",
  registerUrl: "https://app.gostudiopro.com/online/core/",
  brandClaims: [
    "Best of SLO — 15 years",
    "Largest and most diverse performing groups on the Central Coast",
  ],
  socials: {
    instagram: "https://www.instagram.com/coredance.slo/",
    tiktok: "https://www.tiktok.com/@coredance.slo",
    youtube: "https://www.youtube.com/@COREdanceSLO",
  },
  hours: [
    { label: "Monday", time: "9:45–11:45am & 3:30–8pm" },
    { label: "Tuesday", time: "3:15–8pm" },
    { label: "Wednesday–Thursday", time: "3:30–8pm" },
    { label: "Friday", time: "3–7:45pm" },
    { label: "Saturday", time: "9am–12pm" },
    { label: "Sunday", time: "Closed" },
  ],
  aboutImage: "/images/stock/about-ballerina.jpg",
  story: {
    heading: "Our Story",
    paragraphs: [
      "CORE Dance was founded by Leslie Baumberger, Stacy Millard, Rose Patti and Zheila Pouraghabagher in August of 2010 when American Dance closed its doors after 38 years of providing young dancers a place to train. In 2018, Alexa Von Der Hoff took over the leadership role, as Studio Owner, taking the customer experience to the next level for the next 7 years. Most recently, Isabella Lund has taken over the role of Studio Owner in January 2026, and is excited to lead CORE for years to come.",
      "Since opening in 2010, thousands of students have experienced a positive, enriched dance experience in CORE’s classrooms. The dance environment is clean, modern and safe.",
      "CORE Dance offers something for every interested dancer, all ages, styles and commitment levels. In addition to the ballet based dance training CORE offers, we also offer performance opportunities for beginners through advanced levels, starting at age 2 through adults. CORE Dance currently has the largest and most diverse performing groups on the entire Central Coast, and has been voted Best Of SLO for 15 years in a row.",
    ],
    signOff: "SHINE!",
    ownerName: "Isabella",
    ownerTitle: "Owner & Company Director",
  },
  /** Flat nav for HeaderFour / MobileNav (id, name, path). */
  nav: [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Classes", path: "/classes" },
    { id: 4, name: "Contact", path: "/contact" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Contact", href: "/contact" },
] as const;

export type BannerSlide = {
  id: number;
  title: string;
  heading_one: string;
  heading_two: string;
  banner_img: string;
  ctaLabel: string;
  ctaHref: string;
};

export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    title: "Come SHINE with us",
    heading_one: "Shine",
    heading_two: "With Us",
    banner_img: "/images/stock/hero-recital-red.webp",
    ctaLabel: "Register Now",
    ctaHref: site.registerUrl,
  },
  {
    id: 2,
    title: "Get inspired with the very best",
    heading_one: "Inspired",
    heading_two: "To Dance",
    banner_img: "/images/stock/hero-studio-kicks.jpg",
    ctaLabel: "View Schedule",
    ctaHref: site.scheduleUrl,
  },
  {
    id: 3,
    title: "Best of SLO — 15 years",
    heading_one: "Best of",
    heading_two: "SLO",
    banner_img: "/images/stock/hero-stage-pink.jpg",
    ctaLabel: "Our Story",
    ctaHref: "/about",
  },
];

export type JourneyStep = {
  id: number;
  number: string;
  name: string;
  ageRange: string;
  summary: string;
  href: string;
  img: string;
  onHold?: boolean;
};

export const journeySteps: JourneyStep[] = [
  {
    id: 1,
    number: "01",
    name: "Tiny Dancer",
    ageRange: "Ages 2–6",
    summary:
      "Themed short series for our youngest dancers, typically including a costume and performance experience. Creative movement and ballet based, 5–10 weeks.",
    href: "/classes",
    img: "/images/stock/journey-tiny-dancer.jpg",
  },
  {
    id: 2,
    number: "02",
    name: "Beginning Series",
    ageRange: "Ages 4–10",
    summary:
      "Introductory series for new dancers building foundational skills before committing to month-to-month classes. Currently on hold — check back soon.",
    href: "/classes",
    img: "/images/stock/journey-beginning.jpg",
    onHold: true,
  },
  {
    id: 3,
    number: "03",
    name: "Month-to-Month Classes",
    ageRange: "Ages 4–adult",
    summary:
      "Ongoing technique classes across styles and levels, with multiple performance opportunities including our annual recital Encore in June.",
    href: "/classes",
    img: "/images/stock/journey-month-to-month.jpg",
  },
  {
    id: 4,
    number: "04",
    name: "CORE Performance Company",
    ageRange: "CORE Babies, Minis, Pre-Company",
    summary:
      "Introductory performing groups with local performances and typically one convention per year.",
    href: "/classes",
    img: "/images/stock/journey-performance-company.webp",
  },
  {
    id: 5,
    number: "05",
    name: "CORE Dance Company",
    ageRange: "Ages 9+",
    summary:
      "Audition-based competitive company with 2–4 competitions and conventions each season plus local performances.",
    href: "/classes",
    img: "/images/stock/journey-dance-company.jpg",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Isabella Lund",
    position: "Owner & Company Director",
    img: "/images/stock/team-director.webp",
  },
  {
    id: 2,
    name: "Faculty",
    position: "Technique & Performance",
    img: "/images/stock/team-faculty.jpg",
  },
  {
    id: 3,
    name: "Company Coaches",
    position: "Competitive Training",
    img: "/images/stock/team-coaches.jpg",
  },
] as const;

export const counterStats = [
  { id: 1, count: "15+", title: "Years Best of SLO" },
  { id: 2, count: "2010", title: "Founded" },
  { id: 3, count: "5", title: "Pathway Levels" },
  { id: 4, count: "10+", title: "Dance Styles" },
] as const;

export const danceStyles = [
  "Jazz Technique & Jazz",
  "Ballet",
  "Lyrical & Contemporary",
  "Acro",
  "Tap",
  "Hip Hop & Jazz Funk",
  "Pre-Pointe & Pointe",
  "Musical Theatre",
  "Tiny Dancer Series",
  "Combo classes",
] as const;

/** ProjectsSlider / spotlight cards */
export const highlights = [
  {
    id: 1,
    project_name: "Technique First",
    project_desc:
      "Ballet-based training that builds a strong foundation for every style.",
    project_img: "/images/stock/highlight-technique.jpg",
    client: "All Levels",
    area: "Studio",
    project_year: "Ongoing",
    project_type: "Training",
    link: "/classes",
  },
  {
    id: 2,
    project_name: "Performance Pathways",
    project_desc:
      "From Tiny Dancer showcases to competitive company — grow at your pace.",
    project_img: "/images/stock/highlight-encore.webp",
    client: "Performing Groups",
    area: "SLO",
    project_year: "Seasonal",
    project_type: "Performance",
    link: "/classes",
  },
  {
    id: 3,
    project_name: "Central Coast Home",
    project_desc:
      "Clean, modern studios in San Luis Obispo welcoming ages 2 through adult.",
    project_img: "/images/stock/highlight-studio.jpg",
    client: "Families",
    area: "882 Ricardo Ct",
    project_year: "Since 2010",
    project_type: "Community",
    link: "/about",
  },
  {
    id: 4,
    project_name: "Encore & Beyond",
    project_desc:
      "Annual recital and local performances that celebrate every dancer’s progress.",
    project_img: "/images/stock/gallery-community.webp",
    client: "All Dancers",
    area: "SLO",
    project_year: "June",
    project_type: "Recital",
    link: "/contact",
  },
] as const;

export const galleryItems = [
  {
    id: "01",
    img_title: "Studio Life",
    img_desc: "Energy, focus, and friendship in every class.",
    img: "/images/stock/gallery-studio-life.jpg",
    link: "/about",
  },
  {
    id: "02",
    img_title: "On Stage",
    img_desc: "Recitals and competitions that celebrate every dancer.",
    img: "/images/stock/gallery-on-stage.webp",
    link: "/about",
  },
  {
    id: "03",
    img_title: "Technique",
    img_desc: "Strong foundations across styles and ages.",
    img: "/images/stock/gallery-technique.jpg",
    link: "/classes",
  },
  {
    id: "04",
    img_title: "Company",
    img_desc: "Competitive tracks that push excellence.",
    img: "/images/stock/gallery-company.jpg",
    link: "/classes",
  },
  {
    id: "05",
    img_title: "Community",
    img_desc: "A studio family in San Luis Obispo.",
    img: "/images/stock/gallery-community.webp",
    link: "/contact",
  },
] as const;

/** ServicesSlider cards (styles/offerings — no dedicated service-*.jpg assets). */
export const serviceItems = [
  {
    id: "01",
    service_name: "Ballet",
    service_desc: "Classical technique and artistry for every age and level.",
    link: "/classes",
  },
  {
    id: "02",
    service_name: "Jazz",
    service_desc: "Dynamic style, performance quality, and strong technique.",
    link: "/classes",
  },
  {
    id: "03",
    service_name: "Contemporary",
    service_desc: "Expressive movement that builds strength and creativity.",
    link: "/classes",
  },
  {
    id: "04",
    service_name: "Hip Hop",
    service_desc: "High-energy grooves, musicality, and confidence.",
    link: "/classes",
  },
  {
    id: "05",
    service_name: "Tap",
    service_desc: "Rhythm, clarity, and musical fun from the ground up.",
    link: "/classes",
  },
  {
    id: "06",
    service_name: "Company",
    service_desc: "Competitive tracks for dedicated dancers ready to shine.",
    link: "/classes",
  },
] as const;

/** Legacy shape kept for about/services imagery references. */
export const services = [
  {
    id: 1,
    title: "Recreational Classes",
    desc: "Month-to-month technique across jazz, ballet, tap, hip hop, and more.",
    img: "/images/stock/service-recreational.jpg",
  },
  {
    id: 2,
    title: "Performing Groups",
    desc: "CORE Babies, Minis, and Pre-Company for local stage experience.",
    img: "/images/stock/service-performing.jpg",
  },
  {
    id: 3,
    title: "Competitive Company",
    desc: "Audition-based CORE Dance Company for serious dancers ages 9+.",
    img: "/images/stock/service-company.jpg",
  },
] as const;

export const newsItems = [
  {
    id: 1,
    title: "ENCORE Recital",
    date: "June",
    tag: "Events",
    excerpt:
      "Our annual recital — the highlight of the season for month-to-month dancers.",
    thumb: "/images/stock/news-encore.webp",
    href: "/contact",
  },
  {
    id: 2,
    title: "Parent Portal",
    date: "Register",
    tag: "Studio",
    excerpt:
      "View schedules, register for classes, and manage your dancer account online.",
    thumb: "/images/stock/news-parent-portal.jpg",
    href: site.parentPortalUrl,
  },
  {
    id: 3,
    title: "Summer Camps",
    date: "Summer",
    tag: "Camps",
    excerpt:
      "Themed camps and intensives for dancers of all ages — check back for dates.",
    thumb: "/images/stock/news-camps.webp",
    href: "/classes",
  },
  {
    id: 4,
    title: "Company Season",
    date: "Compete",
    tag: "Company",
    excerpt:
      "CORE Dance Company dancers train, perform locally, and compete throughout the year.",
    thumb: "/images/stock/news-company.jpg",
    href: "/classes",
  },
] as const;

export const testimonials = [
  {
    id: 1,
    name: "Studio Family",
    position: "Parent",
    review:
      "CORE has been a second home for our dancer — strong technique, kind teachers, and a community that shines.",
  },
  {
    id: 2,
    name: "Company Parent",
    position: "Parent",
    review:
      "From Tiny Dancer to Company, the pathway is clear. Our dancer grew in confidence every season.",
  },
  {
    id: 3,
    name: "Adult Student",
    position: "Adult Classes",
    review:
      "Welcoming classes for adults too — I finally found a studio that meets me where I am.",
  },
] as const;

export const leadershipTimeline = [
  {
    year: "2010",
    title: "CORE Is Founded",
    desc: "Leslie Baumberger, Stacy Millard, Rose Patti and Zheila Pouraghabagher open CORE when American Dance closes after 38 years.",
  },
  {
    year: "2018",
    title: "A New Chapter",
    desc: "Alexa Von Der Hoff becomes Studio Owner, taking the customer experience to the next level for seven years.",
  },
  {
    year: "2026",
    title: "Isabella Takes the Lead",
    desc: "Isabella Lund becomes Studio Owner in January 2026, excited to lead CORE for years to come.",
  },
] as const;

export const aboutList = [
  {
    id: "01",
    item: "Technique That Shines",
    item_desc:
      "Strong foundations in ballet, jazz, contemporary, and more — taught with care at every age and level.",
  },
  {
    id: "02",
    item: "Community First",
    item_desc:
      "A studio family where dancers grow confidence, friendships, and a lifelong love of movement.",
  },
  {
    id: "03",
    item: "Performance Ready",
    item_desc:
      "From recreational joy to competitive company tracks — opportunities to take the stage and shine.",
  },
] as const;
