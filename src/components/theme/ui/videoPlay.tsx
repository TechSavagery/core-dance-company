"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PlayIcon from "@/src/components/theme/icons/playIcon";
import { cardSlideAnimation } from "@/src/lib/theme/utils";
import { staticBlurDataUrl } from "@/src/lib/theme/staticBlurDataUrl";

type Props = {
  img: string;
  videoUrl?: string;
  alt?: string;
};

/** Opens YouTube (or other video URL) in a new tab — no react-modal-video. */
export default function VideoPlay({
  img,
  videoUrl = "https://www.youtube.com/@COREdanceSLO",
  alt = "video",
}: Props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardSlideAnimation()}
      viewport={{ once: true, amount: 0.2 }}
      className="relative max-h-[400px] mt-10 lg:mt-0"
    >
      <Image
        src={img}
        loading="lazy"
        placeholder="blur"
        blurDataURL={staticBlurDataUrl}
        alt={alt}
        width={698}
        height={400}
        className="w-full max-w-[698px] mx-auto h-full object-cover"
      />
      <Link
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="md:w-[109px] md:h-[109px] w-24 h-24 rounded-full text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9]/[.78] cursor-pointer flex justify-center items-center"
        aria-label="Watch video on YouTube"
      >
        <span className="ml-2.5">
          <PlayIcon width={30} height={36} />
        </span>
      </Link>
    </motion.div>
  );
}
