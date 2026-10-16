import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome from "@/src/components/theme/SiteChrome";
import Feedback from "@/src/components/theme/sections/Feedback";
import ButtonFill from "@/src/components/theme/ui/buttons/buttonFill";
import ButtonOutline from "@/src/components/theme/ui/buttons/buttonOutline";
import CmsImage from "@/src/components/theme/ui/cmsImage";
import RightArrow from "@/src/components/theme/icons/rightArrow";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import { cn } from "@/src/lib/theme/utils";
import { getClassesPage, getSettings, pageMetadata, pathwayNumber } from "@/src/sanity/lib/content";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getClassesPage();
  return pageMetadata(seo);
}

export default async function ClassesPage() {
  const [page, settings] = await Promise.all([getClassesPage(), getSettings()]);

  return (
    <SiteChrome>
      <section className="pt-[160px] xl:pt-[260px]">
        <div className="container-fluid">
          <SectionTitle heading={page.heading} text_muted="text-muted" bg_muted="bg-muted" />
        </div>
        <div className="container space-y-16 pt-14 2sm:pt-20">
          {page.pathways?.map((step, index) => (
            <article
              key={step._key}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={cn(
                  "relative overflow-hidden",
                  index % 2 === 1 && "lg:order-2"
                )}
              >
                <CmsImage
                  image={step.image}
                  alt={step.name}
                  width={800}
                  height={560}
                  className={cn(
                    "h-[280px] w-full object-cover sm:h-[380px]",
                    !step.image?.hotspot && "object-[center_25%]"
                  )}
                />
                <span className="absolute left-0 top-0 bg-primary px-5 py-3 text-3xl font-extrabold text-secondary-foreground">
                  {pathwayNumber(index)}
                </span>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  {step.ageRange}
                </p>
                <h2 className="mt-2 text-[clamp(30px,3.5vw,48px)] font-extrabold leading-110 text-primary-foreground">
                  {step.name}
                </h2>
                <span className="my-5 block h-px w-[120px] bg-primary" />
                <p className="max-w-xl text-lg text-primary-foreground">{step.summary}</p>
                {step.onHold ? (
                  <p className="mt-5 inline-block border border-primary px-4 py-2 font-semibold text-primary">
                    {page.onHoldLabel}
                  </p>
                ) : (
                  <a
                    href={settings.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block"
                  >
                    <ButtonOutline className="after:left-0 after:bg-primary">
                      {page.registerButtonLabel} <RightArrow width={35} height={22} />
                    </ButtonOutline>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {page.styles?.length ? (
        <section className="pt-24">
          <div className="container">
            <div className="bg-secondary px-6 py-14 sm:px-12 lg:px-20">
              <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold leading-110 text-primary-foreground">
                {page.stylesTitle}
              </h2>
              {page.stylesIntro ? (
                <p className="mt-3 max-w-2xl text-lg text-primary-foreground">{page.stylesIntro}</p>
              ) : null}
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.styles.map((style, index) => (
                  <li
                    key={`${style}-${index}`}
                    className="flex items-center gap-3 border border-border bg-background px-5 py-4 text-lg font-semibold text-primary-foreground transition-colors duration-500 hover:border-primary"
                  >
                    <span className="block h-2.5 w-2.5 shrink-0 rotate-45 bg-primary" />
                    {style}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                {page.stylesButtonLabel ? (
                  <a href={settings.parentPortalUrl} target="_blank" rel="noopener noreferrer">
                    <ButtonFill className="after:left-0">{page.stylesButtonLabel}</ButtonFill>
                  </a>
                ) : null}
                {page.contactLinkLabel ? (
                  <Link href="/contact" className="text-lg font-semibold text-primary hover-underline">
                    <span>{page.contactLinkLabel}</span>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <Feedback banner={settings.contactBanner} />
    </SiteChrome>
  );
}
