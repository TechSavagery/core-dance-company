import type { Metadata } from "next";
import SiteChrome from "@/src/components/theme/SiteChrome";
import AboutOne from "@/src/components/theme/sections/AboutOne";
import BannerOne from "@/src/components/theme/sections/BannerOne";
import BlogSlider from "@/src/components/theme/sections/BlogSlider";
import Feedback from "@/src/components/theme/sections/Feedback";
import Gallery from "@/src/components/theme/sections/Gallery";
import JourneySlider from "@/src/components/theme/sections/JourneySlider";
import ProjectsSlider from "@/src/components/theme/sections/ProjectsSlider";
import ServicesSlider from "@/src/components/theme/sections/ServicesSlider";
import TeamSection from "@/src/components/theme/sections/TeamSection";
import Testimonial from "@/src/components/theme/sections/Testimonial";
import VideoPortfolio from "@/src/components/theme/sections/VideoPortfolio";
import Counter from "@/src/components/theme/ui/counter";
import { bannerSlides, counterStats, site } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Home",
  description: `${site.heroHeadline} — ${site.tagline}`,
};

const muted = {
  text_muted: "text-muted",
  bg_muted: "bg-muted",
  border_muted: "border-muted",
};

export default function HomePage() {
  return (
    <SiteChrome>
      <BannerOne data={[...bannerSlides]} {...muted} />
      <AboutOne {...muted} />
      <Counter
        {...muted}
        data={counterStats.map((s) => ({
          id: s.id,
          count: s.count,
          title: s.title,
        }))}
      />
      <Gallery {...muted} />
      <ServicesSlider {...muted} />
      <TeamSection {...muted} />
      <VideoPortfolio {...muted} after_bg_muted="after:bg-muted" />
      <ProjectsSlider {...muted} />
      <Testimonial {...muted} />
      <JourneySlider {...muted} />
      <BlogSlider {...muted} />
      <Feedback />
    </SiteChrome>
  );
}
