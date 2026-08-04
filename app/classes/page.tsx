import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/src/components/theme/SiteChrome";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import { danceStyles, journeySteps, site } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Classes",
};

export default function ClassesPage() {
  return (
    <SiteChrome>
      <section className="pb-20 pt-[160px] xl:pt-[200px]">
        <div className="container-fluid">
          <SectionTitle
            sectionName="Classes"
            sectionTitle="The Dancer’s Journey"
            sectionDesc="Programs for every age, style, and commitment level"
            text_muted="text-muted"
            bg_muted="bg-muted"
          />
        </div>
        <div className="container space-y-12 pt-14 2sm:pt-20">
          {journeySteps.map((step) => (
            <article
              key={step.id}
              className="grid items-center gap-8 border-b border-border pb-12 lg:grid-cols-[280px_1fr]"
            >
              <Image
                src={step.img}
                alt={step.name}
                width={280}
                height={320}
                className="h-[240px] w-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-primary">
                  {step.number} · {step.ageRange}
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-primary-foreground">
                  {step.name}
                </h2>
                <p className="mt-3 max-w-2xl text-lg text-primary-foreground">
                  {step.summary}
                </p>
                {step.onHold ? (
                  <p className="mt-4 font-semibold text-primary">
                    Class on Hold / Check Back Soon
                  </p>
                ) : null}
              </div>
            </article>
          ))}

          <div>
            <h3 className="text-2xl font-extrabold text-primary-foreground">
              Styles We Offer
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {danceStyles.map((style) => (
                <li key={style} className="border border-border px-4 py-3 font-medium">
                  {style}
                </li>
              ))}
            </ul>
            <a
              href={site.parentPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-primary px-8 py-4 font-bold text-secondary-foreground"
            >
              Register via Parent Portal
            </a>
            <p className="mt-4 text-base">
              Questions?{" "}
              <Link href="/contact" className="font-semibold text-primary hover-underline">
                <span>Contact us</span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
