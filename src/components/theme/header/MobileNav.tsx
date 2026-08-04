"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import MenuIcon from "@/src/components/theme/icons/menuIcon";
import ButtonFill from "@/src/components/theme/ui/buttons/buttonFill";
import useOverflowHidden from "@/src/hooks/useOverflowHidden";
import { navLinks, site } from "@/src/content/site";

export default function MobileNav() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  useOverflowHidden(isMenuActive);

  return (
    <div className="mobile-navbar">
      <div className="relative overflow-x-clip bg-[#f9f9f9] px-2.5">
        <div className="container-fluid">
          <div className="flex items-center justify-between py-4">
            <button
              type="button"
              className="text-primary-foreground"
              onClick={() => setIsMenuActive(true)}
              aria-label="Open menu"
            >
              <MenuIcon className="cursor-pointer" />
            </button>
            <Link href="/" className="logo text-primary-foreground" aria-label="CORE Dance home">
              <Image
                src="/brand/core-dance-logo.png"
                alt="CORE Dance"
                width={64}
                height={66}
                className="h-12 w-auto object-contain brightness-0"
                priority
              />
            </Link>
          </div>
        </div>

        <nav
          className={`absolute top-0 z-50 max-h-screen min-h-screen w-full max-w-md overflow-y-auto bg-[#F9FFFC] px-4 py-4 transition-all duration-500 ${
            isMenuActive ? "right-0" : "sm:-right-full -right-[150%]"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-primary-foreground"
              onClick={() => setIsMenuActive(false)}
            >
              <Image
                src="/brand/core-dance-logo.png"
                alt="CORE Dance"
                width={64}
                height={66}
                className="h-12 w-auto object-contain brightness-0"
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuActive(false)}
              aria-label="Close menu"
            >
              <IoMdClose className="cursor-pointer text-2xl" />
            </button>
          </div>
          <ul className="mt-7">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsMenuActive(false)}
                  className="nav-link flex items-center gap-2 px-4 py-4 text-xl font-medium text-primary-foreground transition-all duration-500"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="px-4 pt-5">
              <a
                href={site.parentPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuActive(false)}
              >
                <ButtonFill className="w-full text-base after:left-0 after:bg-muted sm:text-lg">
                  {site.parentPortalLabel}
                </ButtonFill>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
