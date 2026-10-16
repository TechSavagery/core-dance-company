"use client";

import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import RightArrow from "@/src/components/theme/icons/rightArrow";
import ButtonFill from "@/src/components/theme/ui/buttons/buttonFill";
import SmartLink from "@/src/components/theme/ui/smartLink";
import { cn } from "@/src/lib/theme/utils";
import { focalPoint, imageUrl } from "@/src/sanity/lib/image";
import type { HeroSlide } from "@/src/sanity/lib/queries";

type Props = {
  data: HeroSlide[];
  text_muted?: string;
  bg_muted?: string;
};

function escapeHtml(text: string) {
  return text.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

export default function BannerOne({ data, text_muted, bg_muted }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  const pagination = {
    clickable: true,
    el: ".hero-pagination",
    renderBullet(index: number, className: string) {
      return `
      <span class='${className} flex items-center leading-120'>
         <span class='inline-block lg:text-5xl text-3xl font-extrabold text-transparent webkit-text-stroke-width-1 webkit-text-stroke-primary active-blut sm:mr-2'>0${index + 1}</span>
         <span class='title hidden max-w-56 sm:block text-sm font-semibold text-primary-foreground md:text-lg'>${escapeHtml(data[index]?.navLabel ?? "")}</span>
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
        {data.map(({ _key, image, headingLine1: heading_one, headingLine2: heading_two, buttonLabel: ctaLabel, buttonLink: ctaHref }) => (
          <SwiperSlide key={_key} className="relative">
            <div
              className="relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${imageUrl(image, 2400)})`,
                backgroundPosition: focalPoint(image),
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/10" />
              <div className="container relative">
                <div className="pb-[200px] pt-[180px] sm:pb-[250px] xl:pt-[290px]">
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
                  <SmartLink href={ctaHref} className="mt-10 inline-block">
                    <ButtonFill className="after:z-[1] px-4 after:left-0 sm:px-10">
                      <span className="relative z-10">{ctaLabel}</span>
                    </ButtonFill>
                  </SmartLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-0 left-0 right-0 z-40 flex justify-between sm:left-auto">
          <div className="hero-pagination flex flex-1 items-center justify-around bg-[rgba(245,208,210,0.35)] px-4 backdrop-blur-md sm:max-w-[800px] sm:flex-none sm:justify-start sm:gap-5 sm:px-5 xl:gap-8 xl:px-9" />
          <div className="flex h-[136px] min-w-[70px] flex-col sm:w-[90px] xl:h-[181px]">
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => swiperRef.current?.slideNext()}
              className={cn(
                "flex h-1/2 items-center justify-center bg-primary text-secondary-foreground"
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
