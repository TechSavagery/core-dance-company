import { cn } from "@/src/lib/theme/utils";
import OutlineSvgText from "../outlineSvgText";
import Link from "next/link";

type Props = {
  id: string;
  service_name: string;
  service_desc: string;
  text_muted?: string;
  link?: string;
};

export default function ServiceCard({
  id,
  service_name,
  service_desc,
  text_muted,
  link = "/classes",
}: Props) {
  return (
    <div className="px-3 sm:px-0">
      <OutlineSvgText text={id} />
      <Link
        href={link}
        className={cn(
          `text-primary-foreground font-bold leading-135 md:text-4xl text-3xl hover-underline ${text_muted ?? ""}`
        )}
      >
        <span>{service_name}</span>
      </Link>
      <p className={cn(`font-normal text-primary-foreground ${text_muted ?? ""}`)}>
        {service_desc}
      </p>
    </div>
  );
}
