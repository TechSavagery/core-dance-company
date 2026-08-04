import { site } from "@/src/content/site";

const defaultSocials = [
  { id: "ig", label: "IG", href: site.socials.instagram },
  { id: "tt", label: "TT", href: site.socials.tiktok },
  { id: "yt", label: "YT", href: site.socials.youtube },
  { id: "fb", label: "FB", href: site.socials.facebook },
] as const;

type Social = { id: string | number; label: string; href: string };

type Props = {
  items?: readonly Social[];
};

export default function SocialMediaList({ items = defaultSocials }: Props) {
  return (
    <ul className="flex items-center gap-5">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative text-lg font-semibold text-primary-foreground hover-underline ${
                isLast
                  ? ""
                  : "after:absolute after:right-[-12px] after:top-1/2 after:h-5 after:w-px after:-translate-y-1/2 after:rotate-[22deg] after:bg-primary after:content-['']"
              }`}
            >
              <span>{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
