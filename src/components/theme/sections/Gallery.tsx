"use client";

import Link from "next/link";
import { useState } from "react";
import CmsImage from "@/src/components/theme/ui/cmsImage";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import type { HomePage } from "@/src/sanity/lib/queries";
import { cn } from "@/src/lib/theme/utils";

type Props = {
  heading: HomePage["galleryHeading"];
  items: NonNullable<HomePage["galleryItems"]>;
  text_muted?: string;
  bg_muted?: string;
};

const DEFAULT_EXPANDED = "02";

export default function Gallery({ heading, items, text_muted, bg_muted }: Props) {
  const [expandItem, setExpandItem] = useState(DEFAULT_EXPANDED);

  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle heading={heading} bg_muted={bg_muted} text_muted={text_muted} />
      </div>
      <div className="flex flex-col flex-wrap pt-14 sm:flex-row lg:flex-nowrap 2sm:pt-20 lg:pt-[120px]">
        {items.map(({ _key, image, title: img_title, description: img_desc, link }, index) => {
          const id = String(index + 1).padStart(2, "0");
          return (
          <div
            key={_key}
            onMouseEnter={() => setExpandItem(id)}
            onMouseLeave={() => setExpandItem(DEFAULT_EXPANDED)}
            className={cn(
              `group relative min-h-[420px] flex-grow overflow-hidden transition-all duration-700 sm:min-h-[750px]`,
              expandItem === id ? "basis-[50%] lg:basis-[47%]" : "basis-[30%] lg:basis-[20%]"
            )}
          >
            <div className="absolute inset-0 z-10 flex flex-col justify-between py-[30px] pl-5 pr-5 after:absolute after:bottom-0 after:left-0 after:z-[-1] after:h-1/2 after:w-full after:bg-gradient-to-t after:from-black/70 after:to-transparent after:content-[''] 2xl:pl-[30px] 2xl:pr-0">
              <h3
                className={cn(
                  `text-6xl font-extrabold leading-120 text-transparent webkit-text-stroke-width-1 webkit-text-stroke-white transition-all duration-700`,
                  expandItem === id && "webkit-text-stroke-primary"
                )}
              >
                {id}
              </h3>
              <div
                className={cn(
                  `flex items-start justify-between 2xl:flex-row 2xl:items-end`,
                  expandItem === id ? "flex-col" : "flex-col sm:flex-row"
                )}
              >
                <Link
                  href={link || "#"}
                  className="relative max-w-60 text-3xl font-bold leading-[135%] text-white 2sm:text-4xl 2xl:min-w-56"
                >
                  {img_title}
                </Link>
                <p
                  className={cn(
                    `min-w-72 overflow-hidden font-semibold text-secondary-foreground transition-all duration-700 xl:min-w-80 2xl:max-w-80 2xl:min-w-80`,
                    expandItem === id ? "opacity-100" : "opacity-100 sm:opacity-0"
                  )}
                >
                  {img_desc}
                </p>
              </div>
            </div>
            <CmsImage
              image={image}
              alt={img_title}
              width={800}
              height={1000}
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[750px]"
            />
          </div>
          );
        })}
      </div>
    </section>
  );
}
