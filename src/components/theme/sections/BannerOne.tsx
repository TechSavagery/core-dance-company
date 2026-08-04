"use client";

import Link from "next/link";
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import RightArrow from "@/src/components/theme/icons/rightArrow";
import ButtonFill from "@/src/components/theme/ui/buttons/buttonFill";
import { cn } from "@/src/lib/theme/utils";
import type { BannerSlide } from "@/src/content/site";

type Props = {
  data: BannerSlide[];
  text_muted?: string;
  bg_muted?: string;
};

export default function BannerOne({ data, text_muted, bg_muted }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const pagination = {
    clickable: true,
    el: ".hero-pagination",
    renderBullet(index: number, className: string) {
      return `
      <span class='${className} flex leading-120'>
         <span class='inline-block mr-2 lg:text-5xl text-3xl font-extrabold text-transparent webkit-text-stroke-width-1 webkit-text-stroke-primary active-blut'>0${index + 1}</span>
         <span class='title md:text-lg text-sm font-semibold text-primary-foreground hidden sm:block sm:max-w-56 max-w-48'> ${data[index]?.title ?? ""}</span>
      </span>`;
    },
  };

  return (
    <section className="banner-one relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={pagination}
        loop
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        speed={500}
        autoplay={{ delay: 4000 }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {data.map(({ id, banner_img, heading_one, heading_two, ctaLabel, ctaHref }) => (
          <SwiperSlide key={id} className="relative">
            <div
              className="bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${banner_img})` }}
            >
              <div className="container">
                <div className="pb-[250px] pt-[150px] xl:pt-[200px]">
                  <h1 className="relative text-5xl font-extrabold leading-[100%] xm:text-7xl sm:text-[100px] 2sm:text-[130px] lg:text-[170px] xl:text-[200px]">
                    <span
                      className={cn(
                        `animate-fill text-primary-foreground after:${bg_muted ?? "bg-muted"} ${text_muted ?? ""}`
                      )}
                    >
                      {" "}
                      {heading_one}{" "}
                    </span>
                    <svg
                      strokeWidth="2"
                      className="stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation h-25 w-full stroke-primary 2sm:h-[200px]"
                    >
                      <text x="0%" dominantBaseline="middle" y="70%">
                        {heading_two}
                      </text>
                    </svg>
                  </h1>
                  {ctaHref.startsWith("http") ? (
                    <a href={ctaHref} className="mt-10 inline-block" target="_blank" rel="noopener noreferrer">
                      <ButtonFill className={cn(`after:z-[1] px-4 after:left-0 sm:px-10 after:${bg_muted ?? "bg-muted"}`)}>
                        <span className="relative z-10">{ctaLabel}</span>
                      </ButtonFill>
                    </a>
                  ) : (
                    <Link href={ctaHref} className="mt-10 inline-block">
                      <ButtonFill className={cn(`after:z-[1] px-4 after:left-0 sm:px-10 after:${bg_muted ?? "bg-muted"}`)}>
                        <span className="relative z-10">{ctaLabel}</span>
                      </ButtonFill>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-0 right-0 z-40 flex justify-between">
          <div className="hero-pagination flex max-w-[800px] gap-5 bg-[rgba(245,208,210,0.35)] px-2 py-10 backdrop-blur-md sm:px-5 xl:gap-8 xl:px-9 xl:py-[61px]" />
          <div className="flex h-[136px] min-w-[70px] flex-col sm:w-[90px] xl:h-[181px]">
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => swiperRef.current?.slideNext()}
              className={cn(
                `flex h-1/2 items-center justify-center bg-primary text-secondary-foreground ${bg_muted ?? ""}`
              )}
            >
              <RightArrow width={35} height={22} />
            </button>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-1/2 rotate-180 items-center justify-center bg-secondary text-primary-foreground"
            >
              <RightArrow width={35} height={22} />
            </button>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
