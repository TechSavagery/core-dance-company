"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CmsImage from "@/src/components/theme/ui/cmsImage";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import ProgressAndNavigation from "@/src/components/theme/ui/progressAndNavigation";
import SmartLink from "@/src/components/theme/ui/smartLink";
import type { HomePage } from "@/src/sanity/lib/queries";
import { cn } from "@/src/lib/theme/utils";

type Props = {
  heading: HomePage["highlightsHeading"];
  cards: NonNullable<HomePage["highlightCards"]>;
  text_muted?: string;
  bg_muted?: string;
};

export default function ProjectsSlider({ heading, cards, text_muted, bg_muted }: Props) {
  const pagination = {
    clickable: true,
    el: ".progressbar-pagination-projects",
    type: "progressbar" as const,
  };

  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle heading={heading} text_muted={text_muted} bg_muted={bg_muted} />
        <div className="pt-14 2sm:pt-20 lg:pt-[120px]">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            pagination={pagination}
            loop
            modules={[Pagination, Navigation]}
          >
            {cards.map(({ _key, title: project_name, description: project_desc, image, link }) => (
              <SwiperSlide key={_key}>
                <div className="overflow-hidden">
                  <CmsImage
                    image={image}
                    alt={project_name}
                    width={700}
                    height={500}
                    className="h-[360px] w-full object-cover"
                  />
                  <div className="mt-5">
                    <SmartLink
                      href={link || "#"}
                      className={cn(
                        `hover-underline text-2xl font-bold text-primary-foreground ${text_muted ?? ""}`
                      )}
                    >
                      <span>{project_name}</span>
                    </SmartLink>
                    <p className={cn(`mt-2 text-lg text-primary-foreground ${text_muted ?? ""}`)}>
                      {project_desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="container">
              <ProgressAndNavigation paginationClass="progressbar-pagination-projects" />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
