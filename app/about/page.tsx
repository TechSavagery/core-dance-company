import type { Metadata } from "next";
import Image from "next/image";
import SiteChrome from "@/src/components/theme/SiteChrome";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import { site } from "@/src/content/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <SiteChrome>
      <section className="pb-20 pt-[160px] xl:pt-[200px]">
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
          <Image
            src="/theme/about-image.jpg"
            alt="CORE Dance"
            width={800}
            height={900}
            className="w-full object-cover"
          />
          <div className="space-y-6 text-lg text-primary-foreground">
            {site.story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="text-2xl font-extrabold">{site.story.signOff}</p>
            <p>
              {site.story.ownerName}
              <br />
              <span className="text-base">{site.story.ownerTitle}</span>
            </p>
            <ul className="space-y-2 pt-4">
              {site.brandClaims.map((claim) => (
                <li key={claim} className="font-semibold text-primary">
                  {claim}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
