"use client";

import Image from "next/image";
import { site } from "@/src/content/site";
import PlayIcon from "@/src/components/theme/icons/playIcon";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import { cn } from "@/src/lib/theme/utils";

type Props = {
  text_muted?: string;
  bg_muted?: string;
  after_bg_muted?: string;
};

export default function VideoPortfolio({ text_muted, bg_muted }: Props) {
  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle
          sectionName="Watch"
          sectionTitle="See CORE in Action"
          sectionDesc="Follow us on YouTube and Instagram for studio moments"
          text_muted={text_muted}
          bg_muted={bg_muted}
        />
      </div>
      <div className="container pt-14 2sm:pt-20 lg:pt-[120px]">
        <a
          href={site.socials.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden"
        >
          <Image
            src="/images/stock/video-silhouettes.jpg"
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
