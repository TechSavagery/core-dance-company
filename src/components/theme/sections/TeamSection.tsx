"use client";

import { motion } from "framer-motion";
import CmsImage from "@/src/components/theme/ui/cmsImage";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import type { HomePage } from "@/src/sanity/lib/queries";
import { cardSlideAnimation, cn } from "@/src/lib/theme/utils";

type Props = {
  heading: HomePage["teamHeading"];
  members: NonNullable<HomePage["teamMembers"]>;
  text_muted?: string;
  bg_muted?: string;
};

export default function TeamSection({ heading, members, text_muted, bg_muted }: Props) {
  const variants = cardSlideAnimation();

  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle heading={heading} text_muted={text_muted} bg_muted={bg_muted} />
      </div>
      <div className="container pt-14 2sm:pt-20 lg:pt-20">
        <div className="grid gap-7 2sm:grid-cols-2 lg:grid-cols-3">
          {members.map(({ _key, photo, name, role: position }) => (
            <motion.div
              key={_key}
              className="team-card mb-16"
              initial="offscreen"
              whileInView="onscreen"
              variants={variants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="group relative hover-underline">
                <CmsImage
                  image={photo}
                  alt={name}
                  width={500}
                  height={600}
                  className="aspect-[5/6] w-full object-cover"
                />
                <div className="absolute bottom-[-10%] left-0 min-w-[295px] bg-secondary transition-all duration-500 group-hover:min-w-full">
                  <div className="px-[27px] pb-[18px] pt-[9px]">
                    <span
                      className={cn(
                        `cursor-pointer text-2xl font-bold leading-160 text-primary-foreground ${text_muted ?? ""}`
                      )}
                    >
                      {name}
                    </span>
                    <small
                      className={cn(
                        `block text-lg text-primary-foreground ${text_muted ?? ""}`
                      )}
                    >
                      {position}
                    </small>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
