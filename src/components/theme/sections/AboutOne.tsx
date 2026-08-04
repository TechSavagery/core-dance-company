import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import ButtonOutline from "@/src/components/theme/ui/buttons/buttonOutline";
import RightArrow from "@/src/components/theme/icons/rightArrow";
import { site } from "@/src/content/site";
import { cn } from "@/src/lib/theme/utils";

type Props = {
  text_muted?: string;
  bg_muted?: string;
};

export default function AboutOne({ text_muted, bg_muted }: Props) {
  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle
          sectionName="About"
          sectionTitle="Our Story"
          sectionDesc={site.mission}
          link="/about"
          button_text="Read More"
          text_muted={text_muted}
          bg_muted={bg_muted}
        />
      </div>
      <div className="container pt-14 2sm:pt-20 lg:pt-[120px]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden">
            <Image
              src="/theme/about-image.jpg"
              alt="CORE Dance studio"
              width={800}
              height={900}
              className="h-full max-h-[640px] w-full object-cover"
            />
          </div>
          <div>
            <p className={cn(`mb-6 text-lg text-primary-foreground ${text_muted ?? ""}`)}>
              {site.story.paragraphs[0].slice(0, 280)}…
            </p>
            <p className={cn(`mb-8 text-lg text-primary-foreground ${text_muted ?? ""}`)}>
              {site.story.paragraphs[2]}
            </p>
            <p className={cn(`mb-2 text-2xl font-extrabold text-primary-foreground ${text_muted ?? ""}`)}>
              {site.story.signOff}
            </p>
            <p className={cn(`text-lg text-primary-foreground ${text_muted ?? ""}`)}>
              {site.story.ownerName} — {site.story.ownerTitle}
            </p>
            <Link href="/about" className="mt-8 inline-block">
              <ButtonOutline className={cn(`after:left-0 after:${bg_muted ?? "bg-muted"}`)}>
                Learn More <RightArrow width={35} height={22} />
              </ButtonOutline>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
