import Link from "next/link";
import Image from "next/image";
import SocialMediaList from "@/src/components/theme/ui/socialMediaList";
import { site } from "@/src/content/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-fluid mx-auto">
      <div className="bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center pt-[100px] pb-20">
            <div>
              <Link href="/" className="text-primary-foreground inline-block">
                <Image
                  src="/brand/core-dance-logo-black.png"
                  alt="CORE Dance"
                  width={88}
                  height={88}
                  className="h-16 w-16 object-contain"
                />
              </Link>
              <h5 className="xl:text-2xl text-xl font-semibold text-primary-foreground leading-160 pt-2.5 pb-3">
                {site.tagline}
              </h5>
              <SocialMediaList />
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
                    {site.title}
                  </p>
                  <p className="text-lg text-primary-foreground">
                    882 Ricardo Ct
                  </p>
                  <p className="text-lg text-primary-foreground">
                    San Luis Obispo, CA 93401
                  </p>
                </div>
                <div className="mt-[17px]">
                  <Link
                    href={site.phoneHref}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Phone: <span>{site.phone}</span>
                  </Link>
                  <Link
                    href={site.emailHref}
                    className="text-lg block text-primary-foreground hover-underline"
                  >
                    Email: <span>{site.email}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 flex gap-x-10">
              <span className="h-[198px] w-[1px] bg-primary block my-2.5" />
              <div>
                <h5 className="text-2xl font-extrabold inline-block text-primary-foreground leading-160">
                  Parent Portal
                </h5>
                <span className="w-[99px] h-[1px] bg-primary block my-2.5" />
                <p className="text-lg text-primary-foreground mt-[18px]">
                  Register, manage schedules, and stay connected with the studio.
                </p>
                <Link
                  href={site.parentPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg block text-primary-foreground hover-underline mt-[17px]"
                >
                  <span>{site.parentPortalLabel}</span>
                </Link>
              </div>
            </div>
          </div>
          <hr className="bg-primary-foreground" />
          <div className="py-8 lg:flex justify-between items-center">
            <span className="text-sm text-primary-foreground block">
              Come SHINE with us
            </span>
            <span className="text-sm text-primary-foreground block mt-3 lg:mt-0">
              &copy; {currentYear}, {site.title}, All Rights Reserved ·{" "}
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
