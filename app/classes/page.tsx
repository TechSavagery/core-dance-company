import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/src/components/theme/SiteChrome";
import Feedback from "@/src/components/theme/sections/Feedback";
import ButtonFill from "@/src/components/theme/ui/buttons/buttonFill";
import ButtonOutline from "@/src/components/theme/ui/buttons/buttonOutline";
import RightArrow from "@/src/components/theme/icons/rightArrow";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import { cn } from "@/src/lib/theme/utils";
import { danceStyles, journeySteps, site } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Classes",
};

export default function ClassesPage() {
  return (
    <SiteChrome>
      <section className="pt-[160px] xl:pt-[260px]">
        <div className="container-fluid">
          <SectionTitle
            sectionName="Classes"
            sectionTitle="The Dancer’s Journey"
            sectionDesc="Programs for every age, style, and commitment level"
            text_muted="text-muted"
            bg_muted="bg-muted"
          />
        </div>
        <div className="container space-y-16 pt-14 2sm:pt-20">
          {journeySteps.map((step, index) => (
            <article
              key={step.id}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={cn(
                  "relative overflow-hidden",
                  index % 2 === 1 && "lg:order-2"
                )}
              >
                <Image
                  src={step.img}
                  alt={step.name}
                  width={800}
                  height={560}
                  className="h-[280px] w-full object-cover object-[center_25%] sm:h-[380px]"
                />
                <span className="absolute left-0 top-0 bg-primary px-5 py-3 text-3xl font-extrabold text-secondary-foreground">
                  {step.number}
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
                    Class on Hold — Check Back Soon
                  </p>
                ) : (
                  <a
                    href={site.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block"
                  >
                    <ButtonOutline className="after:left-0 after:bg-primary">
                      Register <RightArrow width={35} height={22} />
                    </ButtonOutline>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-24">
        <div className="container">
          <div className="bg-secondary px-6 py-14 sm:px-12 lg:px-20">
            <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold leading-110 text-primary-foreground">
              Styles We Offer
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-primary-foreground">
              Ballet-based training across a wide range of styles, from ages 2 through adult.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {danceStyles.map((style) => (
                <li
                  key={style}
                  className="flex items-center gap-3 border border-border bg-background px-5 py-4 text-lg font-semibold text-primary-foreground transition-colors duration-500 hover:border-primary"
                >
                  <span className="block h-2.5 w-2.5 shrink-0 rotate-45 bg-primary" />
                  {style}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href={site.parentPortalUrl} target="_blank" rel="noopener noreferrer">
                <ButtonFill className="after:left-0">Register via Parent Portal</ButtonFill>
              </a>
              <Link href="/contact" className="text-lg font-semibold text-primary hover-underline">
                <span>Questions? Contact us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Feedback />
    </SiteChrome>
  );
}
