import type { Metadata } from "next";
import SiteChrome from "@/src/components/theme/SiteChrome";
import SectionTitle from "@/src/components/theme/ui/sectionTitle";
import { site } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <SiteChrome>
      <section className="pb-20 pt-[160px] xl:pt-[200px]">
        <div className="container-fluid">
          <SectionTitle
            sectionName="Contact"
            sectionTitle="Let’s Talk"
            sectionDesc="We’d love to help your dancer find the right pathway"
            text_muted="text-muted"
            bg_muted="bg-muted"
          />
        </div>
        <div className="container grid gap-12 pt-14 lg:grid-cols-2 2sm:pt-20">
          <div className="space-y-6 text-lg text-primary-foreground">
            <div>
              <h3 className="text-xl font-extrabold">Studio</h3>
              <p className="mt-2">{site.address}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-semibold text-primary hover-underline"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>
            <div>
              <h3 className="text-xl font-extrabold">Call / Text</h3>
              <a href={site.phoneHref} className="mt-2 block hover-underline">
                <span>{site.phone}</span>
              </a>
            </div>
            <div>
              <h3 className="text-xl font-extrabold">Email</h3>
              <a href={site.emailHref} className="mt-2 block hover-underline">
                <span>{site.email}</span>
              </a>
            </div>
            <div>
              <a
                href={site.parentPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary px-8 py-4 font-bold text-secondary-foreground"
              >
                {site.parentPortalLabel}
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-primary-foreground">Hours</h3>
            <ul className="mt-4 space-y-2">
              {site.hours.map((h) => (
                <li
                  key={h.label}
                  className="flex justify-between gap-4 border-b border-border py-3 text-primary-foreground"
                >
                  <span className="font-semibold">{h.label}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
