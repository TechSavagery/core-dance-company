import type { Social } from "@/src/sanity/lib/content";

type Props = {
  items: readonly Social[];
};

export default function SocialMediaList({ items }: Props) {
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
