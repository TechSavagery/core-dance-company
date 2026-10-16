"use client";

import { useEffect } from "react";

/** Marks `.nav-link` matching the current pathname as active. */
export default function useActiveNavLink(pathName: string, homePath = "/") {
  useEffect(() => {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.remove("active");
      if (!href) return;
      if (href === homePath && pathName === homePath) {
        link.classList.add("active");
      } else if (href !== homePath && pathName.startsWith(href)) {
        link.classList.add("active");
      }
    });
  }, [pathName, homePath]);
}
