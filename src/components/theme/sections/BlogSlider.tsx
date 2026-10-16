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
  heading: HomePage["newsHeading"];
  cards: NonNullable<HomePage["newsCards"]>;
  text_muted?: string;
  bg_muted?: string;
};

export default function BlogSlider({ heading, cards, text_muted, bg_muted }: Props) {
  const pagination = {
    clickable: true,
    el: ".progressbar-pagination-blog",
    type: "progressbar" as const,
  };

  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle heading={heading} text_muted={text_muted} bg_muted={bg_muted} />
        <div className="container pt-14 2sm:pt-20 lg:pt-[120px]">
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
            {cards.map((item) => {
              const Card = (
                <div className="group overflow-hidden">
                  <CmsImage
                    image={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="mt-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                      {[item.category, item.when].filter(Boolean).join(" · ")}
                    </p>
                    <h3
                      className={cn(
                        `hover-underline mt-2 text-2xl font-bold text-primary-foreground ${text_muted ?? ""}`
                      )}
                    >
                      <span>{item.title}</span>
                    </h3>
                    <p className={cn(`mt-2 text-lg text-primary-foreground ${text_muted ?? ""}`)}>
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              );

              return (
                <SwiperSlide key={item._key}>
                  {item.link ? <SmartLink href={item.link}>{Card}</SmartLink> : Card}
                </SwiperSlide>
              );
            })}
            <ProgressAndNavigation paginationClass="progressbar-pagination-blog" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
