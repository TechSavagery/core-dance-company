"use client";

import { useEffect } from "react";

/** Sticky bottom navbar on scroll — adapted from Architronix Home 4. */
export default function useStickyHeader() {
  useEffect(() => {
    const isSticky = () => {
      const header = document.querySelector(".bottom-navbar");
      const mobileNavbar = document.querySelector(".mobile-navbar");
      const navLinks = document.querySelectorAll(".bottom-navbar .nav-link");
      const scrollTop = window.scrollY;

      if (scrollTop >= 250) {
        header?.classList.add(
          "container-fluid",
          "fixed",
          "top-0",
          "left-0",
          "w-full",
          "bg-background",
          "z-20",
          "animate-slideDown",
          "shadow-md",
          "header-pinned"
        );
        mobileNavbar?.classList.add(
          "container-fluid",
          "fixed",
          "top-0",
          "left-0",
          "w-full",
          "bg-background",
          "z-20",
          "animate-slideDown",
          "header-pinned"
        );
        navLinks.forEach((ele) => {
          ele.classList.remove("py-[34px]");
          ele.classList.add("py-5");
        });
      }
      if (scrollTop < 50) {
        header?.classList.remove(
          "container-fluid",
          "fixed",
          "top-0",
          "left-0",
          "w-full",
          "bg-background",
          "z-20",
          "animate-slideDown",
          "shadow-md",
          "header-pinned"
        );
        mobileNavbar?.classList.remove(
          "container-fluid",
          "fixed",
          "top-0",
          "left-0",
          "w-full",
          "bg-background",
          "z-20",
          "animate-slideDown",
          "header-pinned"
        );
        navLinks.forEach((ele) => {
          ele.classList.remove("py-5");
          ele.classList.add("py-[34px]");
        });
      }
    };

    window.addEventListener("scroll", isSticky);
    return () => window.removeEventListener("scroll", isSticky);
  }, []);
}
