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
import { getHomePage, getSettings, pageMetadata } from "@/src/sanity/lib/content";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getHomePage();
  return pageMetadata(seo);
}

const muted = {
  text_muted: "text-muted",
  bg_muted: "bg-muted",
  border_muted: "border-muted",
};

export default async function HomePage() {
  const [page, settings] = await Promise.all([getHomePage(), getSettings()]);

  return (
    <SiteChrome>
      {page.heroSlides?.length ? <BannerOne data={page.heroSlides} {...muted} /> : null}
      <AboutOne page={page} {...muted} />
      {settings.stats?.length ? (
        <Counter
          {...muted}
          data={settings.stats.map((s) => ({ id: s._key, count: s.value, title: s.label }))}
        />
      ) : null}
      {page.galleryItems?.length ? (
        <Gallery heading={page.galleryHeading} items={page.galleryItems} {...muted} />
      ) : null}
      {page.programCards?.length ? (
        <ServicesSlider heading={page.programsHeading} cards={page.programCards} {...muted} />
      ) : null}
      {page.teamMembers?.length ? (
        <TeamSection heading={page.teamHeading} members={page.teamMembers} {...muted} />
      ) : null}
      <VideoPortfolio
        heading={page.videoHeading}
        image={page.videoImage}
        link={page.videoLink}
        {...muted}
        after_bg_muted="after:bg-muted"
      />
      {page.highlightCards?.length ? (
        <ProjectsSlider heading={page.highlightsHeading} cards={page.highlightCards} {...muted} />
      ) : null}
      {page.testimonials?.length ? (
        <Testimonial heading={page.testimonialsHeading} items={page.testimonials} {...muted} />
      ) : null}
      {page.pathways?.length ? (
        <JourneySlider
          heading={page.journeyHeading}
          pathways={page.pathways}
          buttonLabel={page.journeyButtonLabel}
          onHoldLabel={page.journeyOnHoldLabel}
          {...muted}
        />
      ) : null}
      {page.newsCards?.length ? (
        <BlogSlider heading={page.newsHeading} cards={page.newsCards} {...muted} />
      ) : null}
      <Feedback banner={settings.contactBanner} />
    </SiteChrome>
  );
}
