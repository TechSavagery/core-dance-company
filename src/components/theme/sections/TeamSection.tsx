"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import { teamMembers } from "@/src/content/site";
import { cardSlideAnimation, cn } from "@/src/lib/theme/utils";

type Props = {
  text_muted?: string;
  bg_muted?: string;
};

export default function TeamSection({ text_muted, bg_muted }: Props) {
  const variants = cardSlideAnimation();

  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle
          sectionName="Team"
          sectionTitle="Leadership at CORE"
          sectionDesc="Guiding dancers with technique, care, and high standards"
          button_text="Contact Us"
          link="/contact"
          text_muted={text_muted}
          bg_muted={bg_muted}
        />
      </div>
      <div className="container pt-14 2sm:pt-20 lg:pt-[340px]">
        <div className="grid gap-7 2sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map(({ id, img, name, position }) => (
            <motion.div
              key={id}
              className="team-card mb-16"
              initial="offscreen"
              whileInView="onscreen"
              variants={variants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="group relative hover-underline">
                <Image
                  src={img}
                  alt={name}
                  width={500}
                  height={600}
                  className="h-full w-full object-cover"
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
