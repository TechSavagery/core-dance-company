"use client";

import { useSwiper } from "swiper/react";
import RightArrow from "@/src/components/theme/icons/rightArrow";

export default function SwiperNavigation() {
  const swiper = useSwiper();

  return (
    <div className="flex items-center gap-[22px]">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="text-primary-foreground rotate-180"
        aria-label="Previous slide"
      >
        <RightArrow width={35} height={22} />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="text-primary-foreground"
        aria-label="Next slide"
      >
        <RightArrow width={35} height={22} />
      </button>
    </div>
  );
}
