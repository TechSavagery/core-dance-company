import { cn } from "@/src/lib/theme/utils";
import Image from "next/image";
import Link from "next/link";
import { staticBlurDataUrl } from "@/src/lib/theme/staticBlurDataUrl";

type Props = {
  thumb: string;
  date: string;
  tag: string;
  title: string;
  text_muted?: string;
  href?: string;
};

export default function BlogCard({
  thumb,
  date,
  tag,
  title,
  text_muted,
  href = "/blog",
}: Props) {
  return (
    <Link href={href} className="hover-underline">
      <Image
        src={thumb}
        loading="lazy"
        placeholder="blur"
        blurDataURL={staticBlurDataUrl}
        alt={title}
        width={600}
        height={400}
        className="w-full h-auto object-cover"
      />
      <div className="mt-8">
        <p className={cn(`text-primary-foreground flex items-center gap-2 mb-2.5`)}>
          <small className="text-lg">{date}</small> /{" "}
          <small className="text-lg">{tag}</small>
        </p>
        <span
          className={cn(
            `text-primary-foreground font-semibold text-2xl ${text_muted ?? ""}`
          )}
        >
          {title}
        </span>
      </div>
    </Link>
  );
}
