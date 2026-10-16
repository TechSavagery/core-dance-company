"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import QuoteIcon from "@/src/components/theme/icons/quoteIcon";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import ProgressAndNavigation from "@/src/components/theme/ui/progressAndNavigation";
import type { HomePage } from "@/src/sanity/lib/queries";
import { cn } from "@/src/lib/theme/utils";

type Props = {
  heading: HomePage["testimonialsHeading"];
  items: NonNullable<HomePage["testimonials"]>;
  text_muted?: string;
  bg_muted?: string;
};

export default function Testimonial({ heading, items, text_muted, bg_muted }: Props) {
  const pagination = {
    clickable: true,
    el: ".progressbar-pagination-testimonial",
    type: "progressbar" as const,
  };

  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle heading={heading} text_muted={text_muted} bg_muted={bg_muted} />
        <div className="container pt-14 2sm:pt-20 lg:pt-[120px]">
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{ 992: { slidesPerView: 2 } }}
            pagination={pagination}
            loop
            modules={[Pagination, Navigation]}
          >
            {items.map(({ _key, name, role: position, quote: review }) => (
              <SwiperSlide key={_key}>
                <div className="border border-border bg-secondary/40 p-8 lg:p-12">
                  <QuoteIcon width={48} height={36} />
                  <p
                    className={cn(
                      `mt-6 text-xl leading-160 text-primary-foreground lg:text-2xl ${text_muted ?? ""}`
                    )}
                  >
                    {review}
                  </p>
                  <div className="mt-8">
                    <p className={cn(`text-xl font-bold text-primary-foreground ${text_muted ?? ""}`)}>
                      {name}
                    </p>
                    <p className={cn(`text-lg text-primary-foreground ${text_muted ?? ""}`)}>
                      {position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <ProgressAndNavigation paginationClass="progressbar-pagination-testimonial" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
