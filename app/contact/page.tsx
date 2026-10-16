import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import SiteChrome from "@/src/components/theme/SiteChrome";
import ButtonFill from "@/src/components/theme/ui/buttons/buttonFill";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import SocialMediaList from "@/src/components/theme/ui/socialMediaList";
import { getContactPage, getSettings, pageMetadata } from "@/src/sanity/lib/content";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContactPage();
  return pageMetadata(seo);
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-5 border border-border p-6 transition-colors duration-500 hover:border-primary">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary text-2xl text-secondary-foreground">
        {icon}
      </span>
      <div className="text-lg text-primary-foreground">
        <h3 className="text-xl font-extrabold">{title}</h3>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getContactPage(), getSettings()]);

  return (
    <SiteChrome>
      <section className="pb-20 pt-[160px] xl:pt-[260px]">
        <div className="container-fluid">
          <SectionTitle heading={page.heading} text_muted="text-muted" bg_muted="bg-muted" />
        </div>
        <div className="container grid gap-12 pt-14 lg:grid-cols-2 2sm:pt-20">
          <div className="space-y-5">
            <InfoCard icon={<FiMapPin />} title={page.studioCardTitle}>
              <p>{settings.address}</p>
              <a
                href={settings.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-semibold text-primary hover-underline"
              >
                <span>{page.directionsLabel}</span>
              </a>
            </InfoCard>
            <InfoCard icon={<FiPhone />} title={page.phoneCardTitle}>
              <a href={settings.phoneHref} className="hover-underline">
                <span>{settings.phone}</span>
              </a>
            </InfoCard>
            <InfoCard icon={<FiMail />} title={page.emailCardTitle}>
              <a href={settings.emailHref} className="break-all hover-underline">
                <span>{settings.email}</span>
              </a>
            </InfoCard>
            <div className="flex flex-wrap items-center gap-6 pt-3">
              <a href={settings.parentPortalUrl} target="_blank" rel="noopener noreferrer">
                <ButtonFill className="after:left-0">{settings.parentPortalLabel}</ButtonFill>
              </a>
              <SocialMediaList items={settings.socials} />
            </div>
          </div>

          {settings.hours?.length ? (
            <div className="bg-secondary p-8 sm:p-10">
              <div className="flex items-center gap-3 text-primary-foreground">
                <FiClock className="text-2xl text-primary" />
                <h3 className="text-2xl font-extrabold">{page.hoursTitle}</h3>
              </div>
              <ul className="mt-6">
                {settings.hours.map((h) => (
                  <li
                    key={h._key}
                    className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-primary/20 py-4 text-lg text-primary-foreground last:border-b-0"
                  >
                    <span className="font-semibold">{h.label}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="container pt-16">
          <iframe
            title={`${settings.title} on Google Maps`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(settings.address)}&output=embed`}
            className="h-[420px] w-full border-0 grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteChrome>
  );
}
