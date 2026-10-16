import Link from "next/link";
import CmsImage from "@/src/components/theme/ui/cmsImage";
import SocialMediaList from "@/src/components/theme/ui/socialMediaList";
import type { Settings } from "@/src/sanity/lib/content";

export default function Footer({ settings }: { settings: Settings }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-fluid mx-auto">
      <div className="bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center pt-[100px] pb-20">
            <div>
              <Link href="/" className="text-primary-foreground inline-block">
                <CmsImage
                  image={settings.logo}
                  alt={settings.title}
                  width={88}
                  height={88}
                  className="h-16 w-16 object-contain"
                />
              </Link>
              <h5 className="xl:text-2xl text-xl font-semibold text-primary-foreground leading-160 pt-2.5 pb-3">
                {settings.tagline}
              </h5>
              <SocialMediaList items={settings.socials} />
            </div>
            <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5" />
              <div>
                <h5 className="text-2xl font-extrabold block text-primary-foreground leading-160">
                  Visit Us
                </h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5" />
                <div>
                  <p className="text-xl font-bold text-primary-foreground">
                    {settings.title}
                  </p>
                  <p className="text-lg text-primary-foreground">
                    {settings.addressLine1}
                  </p>
                  <p className="text-lg text-primary-foreground">
                    {settings.addressLine2}
                  </p>
                </div>
                <div className="mt-[17px]">
                  <Link
                    href={settings.phoneHref}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Phone: <span>{settings.phone}</span>
                  </Link>
                  <Link
                    href={settings.emailHref}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Email: <span>{settings.email}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5" />
              <div>
                <h5 className="text-2xl font-extrabold inline-block text-primary-foreground leading-160">
                  {settings.parentPortalLabel}
                </h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5" />
                <p className="text-lg text-primary-foreground mt-[18px]">
                  {settings.footerPortalText}
                </p>
                <Link
                  href={settings.parentPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg block text-primary-foreground hover-underline mt-[17px]"
                >
                  <span>{settings.parentPortalLabel}</span>
                </Link>
              </div>
            </div>
          </div>
          <hr className="bg-primary-foreground" />
          <div className="py-8 lg:flex justify-between items-center">
            <span className="text-sm text-primary-foreground block">
              {settings.footerNote}
            </span>
            <span className="text-sm text-primary-foreground block mt-3 lg:mt-0">
              &copy; {currentYear}, {settings.title}, All Rights Reserved ·{" "}
              <a
                href="/images/stock/CREDITS.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline"
              >
                <span>Photo credits</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
