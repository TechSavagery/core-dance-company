"use client";

import { cn } from "@/src/lib/theme/utils";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import RightArrow from "@/src/components/theme/icons/rightArrow";
import ButtonOutline from "./buttons/buttonOutline";
import SmartLink from "./smartLink";
import type { SectionHeading } from "@/src/sanity/lib/queries";

type Props = {
  heading?: SectionHeading;
  text_muted?: string;
  bg_muted?: string;
};

export default function SectionTitle({ heading, text_muted, bg_muted }: Props) {
  const {
    backgroundWord: sectionName,
    title: sectionTitle,
    subtitle: sectionDesc,
    buttonLink: link,
    buttonLabel: button_text,
  } = heading ?? {};
  const [scroll, setScroll] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.0"],
  });

  const scrollActive = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scrollIdle = useTransform(
    scrollYProgress,
    [0, 0],
    ["0%", `${scrollHeight / 3}px`]
  );
  const scrollValue = scroll ? scrollActive : scrollIdle;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScrollHeight(window.scrollY);
        setScroll(false);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={containerRef} className="overflow-x-hidden">
        <motion.div style={{ translateX: scrollValue, transitionDuration: "1s" }}>
          <h1 className="text-transparent webkit-text-stroke-width-2 webkit-text-stroke-primary opacity-35 xl:text-[324px] lg:text-[200px] md:text-[170px] sm:text-[140px] text-[100px] whitespace-nowrap font-extrabold leading-135">
            {sectionName}
          </h1>
        </motion.div>
      </div>
      <div className="container relative">
        <div
          className={cn(
            `xl:-mt-52 -mt-16 xl:ml-12.5 lg:ml-9 md:ml-7 ml-3 after:contents-[""] after:absolute after:left-[12px] after:top-0 after:w-[1px] after:h-full after:bg-primary`
          )}
        >
          <h2
            className={cn(
              `[font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110 text-primary-foreground mb-5 ${text_muted ?? ""}`
            )}
          >
            {sectionTitle}
          </h2>
          <span
            className={cn(
              `block w-[300px] h-[1px] bg-primary ${bg_muted ?? ""}`
            )}
          />
          <div className="flex md:flex-row flex-col justify-between md:items-center">
            <h5
              className={cn(
                `text-primary-foreground lg:text-[35px] sm:text-3xl text-2xl font-semibold mt-4 max-w-[690px] md:mb-0 mb-7 !leading-160 ${text_muted ?? ""}`
              )}
            >
              {sectionDesc}
            </h5>
            {button_text && link ? (
              <SmartLink href={link}>
                <ButtonOutline
                  className="2sm:px-10 px-3 after:left-0 after:bg-primary"
                >
                  {button_text} <RightArrow height={22} width={35} />
                </ButtonOutline>
              </SmartLink>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
