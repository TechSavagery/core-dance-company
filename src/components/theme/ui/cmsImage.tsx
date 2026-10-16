"use client";

import Image, { type ImageProps } from "next/image";
import { focalPoint, urlFor, type SanityImage } from "@/src/sanity/lib/image";

type Props = Omit<ImageProps, "src" | "alt" | "loader"> & {
  image: SanityImage | undefined;
  alt?: string;
};

export default function CmsImage({ image, alt, style, ...props }: Props) {
  if (!image?.asset) return null;

  return (
    <Image
      {...props}
      src={urlFor(image).url()}
      alt={image.alt || alt || ""}
      loader={({ width, quality }) =>
        urlFor(image).width(width).fit("max").quality(quality ?? 75).auto("format").url()
      }
      style={{ objectPosition: focalPoint(image), ...style }}
    />
  );
}
