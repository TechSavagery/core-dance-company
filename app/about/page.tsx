import type { Metadata } from "next";
import SiteChrome from "@/src/components/theme/SiteChrome";
import Feedback from "@/src/components/theme/sections/Feedback";
import CmsImage from "@/src/components/theme/ui/cmsImage";
import Counter from "@/src/components/theme/ui/counter";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import { getAboutPage, getSettings, pageMetadata, pathwayNumber } from "@/src/sanity/lib/content";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getAboutPage();
  return pageMetadata(seo);
}

export default async function AboutPage() {
  const [page, settings] = await Promise.all([getAboutPage(), getSettings()]);

  return (
    <SiteChrome>
      <section className="pt-[160px] xl:pt-[260px]">
        <div className="container-fluid">
          <SectionTitle heading={page.heading} text_muted="text-muted" bg_muted="bg-muted" />
        </div>
        <div className="container grid items-start gap-12 pt-14 lg:grid-cols-2 2sm:pt-20">
          <div className="relative lg:sticky lg:top-32">
            <CmsImage
              image={page.image}
              alt="CORE Dance dancers"
              width={800}
              height={1000}
              className="max-h-[720px] w-full object-cover"
            />
            {page.badgeHeadline ? (
              <div className="absolute -bottom-6 left-6 bg-primary px-6 py-4 text-secondary-foreground">
                <p className="text-3xl font-extrabold leading-none">{page.badgeHeadline}</p>
                {page.badgeText ? (
                  <p className="text-sm font-semibold uppercase tracking-widest">{page.badgeText}</p>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className="space-y-6 text-lg text-primary-foreground">
            {page.story?.map((p, index) => <p key={index}>{p}</p>)}
            {page.signOff || page.ownerName ? (
              <div className="border-l-4 border-primary pl-5">
                <p className="text-2xl font-extrabold">{page.signOff}</p>
                <p>
                  {page.ownerName}
                  <br />
                  <span className="text-base">{page.ownerTitle}</span>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {settings.stats?.length ? (
        <Counter
          text_muted="text-muted"
          bg_muted="bg-muted"
          data={settings.stats.map((s) => ({ id: s._key, count: s.value, title: s.label }))}
        />
      ) : null}

      {page.values?.length ? (
        <section className="pt-24">
          <div className="container">
            <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold leading-110 text-primary-foreground">
              {page.valuesTitle}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {page.values.map(({ _key, title, description }, index) => (
                <div
                  key={_key}
                  className="border border-border bg-secondary p-8 transition-colors duration-500 hover:border-primary"
                >
                  <span className="text-5xl font-extrabold text-primary">{pathwayNumber(index)}</span>
                  <h3 className="mt-4 text-2xl font-bold text-primary-foreground">{title}</h3>
                  <p className="mt-3 text-lg text-primary-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.timeline?.length ? (
        <section className="pt-24">
          <div className="container">
            <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold leading-110 text-primary-foreground">
              {page.timelineTitle}
            </h2>
            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {page.timeline.map(({ _key, year, title, description }) => (
                <li key={_key} className="relative border-t-4 border-primary pt-6">
                  <span className="text-4xl font-extrabold text-primary">{year}</span>
                  <h3 className="mt-2 text-xl font-bold text-primary-foreground">{title}</h3>
                  <p className="mt-2 text-lg text-primary-foreground">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      <Feedback banner={settings.contactBanner} />
    </SiteChrome>
  );
}
