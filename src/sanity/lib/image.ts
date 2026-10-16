import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "../env";

export type SanityImage = {
  asset?: { _ref: string };
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  alt?: string;
};

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function imageUrl(image: SanityImage | undefined, width = 1600): string {
  if (!image?.asset) return "";
  return urlFor(image).width(width).fit("max").auto("format").url();
}

/** CSS object-position for the editor-chosen focal point, if one was set. */
export function focalPoint(image: SanityImage | undefined): string | undefined {
  if (!image?.hotspot) return undefined;
  return `${Math.round(image.hotspot.x * 100)}% ${Math.round(image.hotspot.y * 100)}%`;
}
