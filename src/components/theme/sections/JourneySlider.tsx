"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import ProgressAndNavigation from "@/src/components/theme/ui/progressAndNavigation";
import { journeySteps } from "@/src/content/site";
import { cn } from "@/src/lib/theme/utils";

type Props = {
  text_muted?: string;
  bg_muted?: string;
};

export default function JourneySlider({ text_muted, bg_muted }: Props) {
  const pagination = {
    clickable: true,
    el: ".progressbar-pagination-journey",
    type: "progressbar" as const,
  };

  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle
          sectionName="Journey"
          sectionTitle="The Dancer’s Journey"
          sectionDesc="Five pathways from Tiny Dancer to CORE Dance Company"
          link="/classes"
          button_text="Explore Pathways"
          bg_muted={bg_muted}
          text_muted={text_muted}
        />
        <div className="pt-14 2sm:pt-20 lg:pt-[120px]">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              560: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
            pagination={pagination}
            loop
            modules={[Pagination, Navigation]}
          >
            {journeySteps.map((step) => (
              <SwiperSlide key={step.id}>
                <div className="group">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <Link
                        href={step.href}
                        className={cn(
                          `relative z-10 overflow-hidden border-2 border-white px-[25px] py-2.5 text-white after:absolute after:left-0 after:top-0 after:bottom-0 after:z-[-1] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full`
                        )}
                      >
                        {step.onHold ? "Check Back Soon" : "Learn More"}
                      </Link>
                    </div>
                    <div className="relative after:absolute after:left-1/2 after:top-1/2 after:h-0 after:w-0 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[rgba(153,27,30,0.35)] after:opacity-0 after:blur-sm after:transition-all after:duration-500 after:group-hover:h-full after:group-hover:w-full after:group-hover:opacity-100">
                      <Image
                        src={step.img}
                        alt={step.name}
                        width={500}
                        height={600}
                        className="aspect-[4/5] w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-[21px]">
                    <p className={cn(`text-sm font-bold text-primary ${text_muted ?? ""}`)}>
                      {step.number} · {step.ageRange}
                    </p>
                    <Link
                      href={step.href}
                      className={cn(
                        `hover-underline text-2xl font-semibold leading-160 text-primary-foreground ${text_muted ?? ""}`
                      )}
                    >
                      <span>{step.name}</span>
                    </Link>
                    <p className={cn(`mt-2 text-base text-primary-foreground/90 ${text_muted ?? ""}`)}>
                      {step.summary}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="container">
              <ProgressAndNavigation paginationClass="progressbar-pagination-journey" />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
