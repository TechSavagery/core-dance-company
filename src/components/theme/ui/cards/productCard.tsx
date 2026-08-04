"use client";

import Image from "next/image";
import { cn } from "@/src/lib/theme/utils";
import Link from "next/link";
import { staticBlurDataUrl } from "@/src/lib/theme/staticBlurDataUrl";

type Props = {
  product_img: string;
  product_name: string;
  price?: string;
  subtitle?: string;
  text_muted?: string;
  bg_muted?: string;
  id: number | string;
  href?: string;
  ctaLabel?: string;
};

/** Journey / product-style card — cart/Redux removed. */
export default function ProductCard({
  product_img,
  product_name,
  price,
  subtitle,
  text_muted,
  bg_muted,
  href = "/classes",
  ctaLabel = "Learn More",
}: Props) {
  return (
    <div className="group">
      <div className="relative">
        <div className="absolute z-10 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Link
            href={href}
            className={cn(
              `px-[25px] py-2.5 flex items-center gap-2.5 border-white hover:border-primary text-white border-2 whitespace-nowrap relative z-10 overflow-hidden after:absolute after:left-0 after:top-0 after:bottom-0 after:z-[-1] after:bg-primary after:${bg_muted ?? ""} after:w-0 after:transition-all after:duration-500 hover:after:w-full text-secondary-foreground hover:text-secondary-foreground transition-all duration-500`
            )}
          >
            {ctaLabel}
          </Link>
        </div>
        <div className="relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all after:duration-500 after:group-hover:w-full after:group-hover:h-full after:group-hover:opacity-100 after:h-0 after:w-0 after:opacity-0 after:flex after:justify-center after:items-center after:bg-[rgba(37,_59,_47,_0.38)] after:group-hover:blur-sm">
          <Image
            src={product_img}
            loading="lazy"
            placeholder="blur"
            blurDataURL={staticBlurDataUrl}
            alt={product_name}
            width={400}
            height={506}
            className="w-full h-full max-h-[506px] object-cover"
          />
        </div>
      </div>
      <div className="mt-[21px] flex justify-between">
        <div>
          <Link
            href={href}
            className={cn(
              `text-2xl font-semibold text-primary-foreground leading-160 hover-underline ${text_muted ?? ""}`
            )}
          >
            <span>{product_name}</span>
          </Link>
          {(price || subtitle) && (
            <p className={cn(`text-2xl text-primary-foreground ${text_muted ?? ""}`)}>
              {subtitle ?? price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
