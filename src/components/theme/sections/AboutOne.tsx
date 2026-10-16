import Link from "next/link";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import ButtonOutline from "@/src/components/theme/ui/buttons/buttonOutline";
import CmsImage from "@/src/components/theme/ui/cmsImage";
import RightArrow from "@/src/components/theme/icons/rightArrow";
import type { HomePage } from "@/src/sanity/lib/queries";
import { cn } from "@/src/lib/theme/utils";

type Props = {
  page: HomePage;
  text_muted?: string;
  bg_muted?: string;
};

export default function AboutOne({ page, text_muted, bg_muted }: Props) {
  const { signOff, ownerName, ownerTitle } = page.about ?? {};

  return (
    <section className="pt-20">
      <div className="container-fluid">
        <SectionTitle heading={page.aboutHeading} text_muted={text_muted} bg_muted={bg_muted} />
      </div>
      <div className="container pt-14 2sm:pt-20 lg:pt-[120px]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden">
            <CmsImage
              image={page.aboutImage}
              alt="CORE Dance studio"
              width={800}
              height={900}
              className="h-full max-h-[640px] w-full object-cover"
            />
          </div>
          <div>
            {page.aboutText?.map((paragraph, index) => (
              <p
                key={index}
                className={cn(
                  `text-lg text-primary-foreground ${text_muted ?? ""}`,
                  index === (page.aboutText?.length ?? 0) - 1 ? "mb-8" : "mb-6"
                )}
              >
                {paragraph}
              </p>
            ))}
            {signOff ? (
              <p className={cn(`mb-2 text-2xl font-extrabold text-primary-foreground ${text_muted ?? ""}`)}>
                {signOff}
              </p>
            ) : null}
            {ownerName ? (
              <p className={cn(`text-lg text-primary-foreground ${text_muted ?? ""}`)}>
                {ownerName}
                {ownerTitle ? ` — ${ownerTitle}` : ""}
              </p>
            ) : null}
            {page.aboutButtonLabel ? (
              <Link href="/about" className="mt-8 inline-block">
                <ButtonOutline className="after:left-0 after:bg-primary">
                  {page.aboutButtonLabel} <RightArrow width={35} height={22} />
                </ButtonOutline>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
