"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/src/content/site";
import ButtonFill from "@/src/components/theme/ui/buttons/buttonFill";
import SocialMediaList from "@/src/components/theme/ui/socialMediaList";
import useStickyHeader from "@/src/hooks/useStickyHeader";
import MobileNav from "./MobileNav";
import { cn } from "@/src/lib/theme/utils";

export default function HeaderFour() {
  useStickyHeader();
  const pathName = usePathname();

  return (
    <header className="absolute left-0 top-0 z-50 w-full overflow-x-clip bg-gray">
      <div className="hidden xl:block">
        <div className="container-fluid flex items-center justify-between py-4">
          <p className="mb-0 font-semibold">
            Welcome to {site.title}. {site.tagline}
          </p>
          <div className="flex items-center gap-5 divide-x divide-primary/40">
            <p className="font-bold">
              <span>Call Us:</span>{" "}
              <a href={site.phoneHref} className="hover-underline">
                <span>{site.phone}</span>
              </a>
            </p>
            <div className="pl-5">
              <SocialMediaList />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid hidden border-y border-border xl:block">
        <div className="bottom-navbar">
          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              className="logo inline-block py-3"
              aria-label="CORE Dance home"
            >
              <Image
                src="/brand/core-dance-logo-black.png"
                alt="CORE Dance"
                width={198}
                height={198}
                className="h-[162px] w-[162px] object-contain"
                priority
              />
            </Link>
            <nav>
              <ul className="flex items-center">
                {navLinks.map(({ label, href }) => {
                  const active = pathName === href;
                  return (
                    <li key={href} className="group">
                      <Link
                        href={href}
                        className={cn(
                          "nav-link flex items-center gap-2 px-7 py-[34px] text-xl font-medium text-primary-foreground group-hover:bg-primary group-hover:text-secondary-foreground",
                          active && "active bg-primary text-secondary-foreground"
                        )}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
                <li className="px-6 py-[22px]">
                  <a
                    href={site.parentPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonFill className="px-4 py-2 text-base after:left-0 after:bg-muted sm:px-6 sm:py-2.5 sm:text-lg">
                      {site.parentPortalLabel}
                    </ButtonFill>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="block xl:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
