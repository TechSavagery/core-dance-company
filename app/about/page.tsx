import type { Metadata } from "next";
import Image from "next/image";
import SiteChrome from "@/src/components/theme/SiteChrome";
import Feedback from "@/src/components/theme/sections/Feedback";
import Counter from "@/src/components/theme/ui/counter";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import {
  aboutList,
  counterStats,
  leadershipTimeline,
  site,
} from "@/src/content/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <SiteChrome>
      <section className="pt-[160px] xl:pt-[260px]">
        <div className="container-fluid">
          <SectionTitle
            sectionName="About"
            sectionTitle={site.story.heading}
            sectionDesc={site.mission}
            text_muted="text-muted"
            bg_muted="bg-muted"
          />
        </div>
        <div className="container grid items-start gap-12 pt-14 lg:grid-cols-2 2sm:pt-20">
          <div className="relative lg:sticky lg:top-32">
            <Image
              src={site.aboutImage}
              alt="CORE Dance dancers"
              width={800}
              height={1000}
              className="max-h-[720px] w-full object-cover"
            />
            <div className="absolute -bottom-6 left-6 bg-primary px-6 py-4 text-secondary-foreground">
              <p className="text-3xl font-extrabold leading-none">15 Years</p>
              <p className="text-sm font-semibold uppercase tracking-widest">
                Voted Best of SLO
              </p>
            </div>
          </div>
          <div className="space-y-6 text-lg text-primary-foreground">
            {site.story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <div className="border-l-4 border-primary pl-5">
              <p className="text-2xl font-extrabold">{site.story.signOff}</p>
              <p>
                {site.story.ownerName}
                <br />
                <span className="text-base">{site.story.ownerTitle}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Counter
        text_muted="text-muted"
        bg_muted="bg-muted"
        data={counterStats.map((s) => ({ id: s.id, count: s.count, title: s.title }))}
      />

      <section className="pt-24">
        <div className="container">
          <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold leading-110 text-primary-foreground">
            What We Stand For
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutList.map(({ id, item, item_desc }) => (
              <div
                key={id}
                className="border border-border bg-secondary p-8 transition-colors duration-500 hover:border-primary"
              >
                <span className="text-5xl font-extrabold text-primary">{id}</span>
                <h3 className="mt-4 text-2xl font-bold text-primary-foreground">{item}</h3>
                <p className="mt-3 text-lg text-primary-foreground">{item_desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-24">
        <div className="container">
          <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold leading-110 text-primary-foreground">
            Our Journey
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {leadershipTimeline.map(({ year, title, desc }) => (
              <li key={year} className="relative border-t-4 border-primary pt-6">
                <span className="text-4xl font-extrabold text-primary">{year}</span>
                <h3 className="mt-2 text-xl font-bold text-primary-foreground">{title}</h3>
                <p className="mt-2 text-lg text-primary-foreground">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Feedback />
    </SiteChrome>
  );
}
