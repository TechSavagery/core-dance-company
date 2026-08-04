import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cardSlideAnimation() {
  return {
    offscreen: { opacity: 0, x: -150 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };
}

export function cardSlideAnimationDelay() {
  return {
    offscreen: { opacity: 0, x: -150 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.4 },
    },
  };
}

export function cardSlideAnimationRight() {
  return {
    offscreen: { opacity: 0, x: 150 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };
}

export function cardSlideAnimationRightDelay() {
  return {
    offscreen: { opacity: 0, x: 150 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.4 },
    },
  };
}
