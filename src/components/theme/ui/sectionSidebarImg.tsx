"use client";

import { motion } from "framer-motion";
import { cardSlideAnimation } from "@/src/lib/theme/utils";
import Image from "next/image";
import { staticBlurDataUrl } from "@/src/lib/theme/staticBlurDataUrl";

type Props = {
  img: string;
  section_name: string;
  className?: string;
};

export default function SectionSidebarImg({
  img,
  section_name,
  className,
}: Props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardSlideAnimation()}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      <Image
        src={img}
        loading="lazy"
        placeholder="blur"
        blurDataURL={staticBlurDataUrl}
        width={600}
        height={700}
        alt={section_name}
        className="w-full h-auto"
      />
    </motion.div>
  );
}
