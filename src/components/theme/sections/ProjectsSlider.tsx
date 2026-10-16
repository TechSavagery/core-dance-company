"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import ProgressAndNavigation from "@/src/components/theme/ui/progressAndNavigation";
import { highlights } from "@/src/content/site";
import { cn } from "@/src/lib/theme/utils";

type Props = {
  text_muted?: string;
  bg_muted?: string;
};

export default function ProjectsSlider({ text_muted, bg_muted }: Props) {
  const pagination = {
    clickable: true,
    el: ".progressbar-pagination-projects",
    type: "progressbar" as const,
  };

  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle
          sectionName="Highlights"
          sectionTitle="Why Families Choose CORE"
          sectionDesc="Technique, pathways, and a studio that feels like home"
          link="/about"
          button_text="Our Story"
          text_muted={text_muted}
          bg_muted={bg_muted}
        />
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
            {highlights.map(({ id, project_name, project_desc, project_img, link }) => (
              <SwiperSlide key={id}>
                <div className="overflow-hidden">
                  <Image
                    src={project_img}
                    alt={project_name}
                    width={700}
                    height={500}
                    className="h-[360px] w-full object-cover"
                  />
                  <div className="mt-5">
                    <Link
                      href={link}
                      className={cn(
                        `hover-underline text-2xl font-bold text-primary-foreground ${text_muted ?? ""}`
                      )}
                    >
                      <span>{project_name}</span>
                    </Link>
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
