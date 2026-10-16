"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import ProgressAndNavigation from "@/src/components/theme/ui/progressAndNavigation";
import { services } from "@/src/content/site";
import { cn } from "@/src/lib/theme/utils";

type Props = {
  text_muted?: string;
  bg_muted?: string;
};

export default function ServicesSlider({ text_muted, bg_muted }: Props) {
  const pagination = {
    clickable: true,
    el: ".progressbar-pagination-services",
    type: "progressbar" as const,
  };

  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle
          sectionName="Programs"
          sectionTitle="Train. Perform. Compete."
          sectionDesc="Pathways for every age, style, and commitment level"
          link="/classes"
          button_text="View Classes"
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
            {services.map(({ id, title, desc, img }) => (
              <SwiperSlide key={id}>
                <div className="group relative overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    width={600}
                    height={700}
                    className="h-[420px] w-full object-cover lg:h-[520px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-secondary/95 p-6">
                    <Link
                      href="/classes"
                      className={cn(
                        `hover-underline text-2xl font-bold text-primary-foreground ${text_muted ?? ""}`
                      )}
                    >
                      <span>{title}</span>
                    </Link>
                    <p className={cn(`mt-2 text-lg text-primary-foreground ${text_muted ?? ""}`)}>
                      {desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="container">
              <ProgressAndNavigation paginationClass="progressbar-pagination-services" />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
