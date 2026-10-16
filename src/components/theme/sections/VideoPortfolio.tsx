"use client";

import PlayIcon from "@/src/components/theme/icons/playIcon";
import CmsImage from "@/src/components/theme/ui/cmsImage";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import type { HomePage } from "@/src/sanity/lib/queries";
import { cn } from "@/src/lib/theme/utils";

type Props = {
  heading: HomePage["videoHeading"];
  image: HomePage["videoImage"];
  link?: string;
  text_muted?: string;
  bg_muted?: string;
  after_bg_muted?: string;
};

export default function VideoPortfolio({ heading, image, link, text_muted, bg_muted }: Props) {
  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle heading={heading} text_muted={text_muted} bg_muted={bg_muted} />
      </div>
      <div className="container pt-14 2sm:pt-20 lg:pt-[120px]">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden"
        >
          <CmsImage
            image={image}
            alt="Watch CORE Dance"
            width={1400}
            height={800}
            className="max-h-[640px] w-full object-cover"
          />
          <span
            className={cn(
              `absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-secondary-foreground transition group-hover:scale-110 ${bg_muted ?? ""}`
            )}
          >
            <PlayIcon width={28} height={28} />
          </span>
        </a>
      </div>
    </section>
  );
}
