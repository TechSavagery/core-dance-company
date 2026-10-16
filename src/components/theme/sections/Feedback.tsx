import Link from "next/link";
import RightArrow from "@/src/components/theme/icons/rightArrow";
import ButtonFill from "@/src/components/theme/ui/buttons/buttonFill";

export default function Feedback() {
  return (
    <section className="container py-20">
      <div
        className="flex flex-col items-start justify-between bg-cover bg-center bg-no-repeat pb-[69px] pl-10 pr-10 pt-20 md:flex-row md:items-end 2sm:pr-24 lg:pl-[148px] lg:pr-[133px] lg:pt-[117px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(/images/stock/gallery-on-stage.webp)",
        }}
      >
        <h1 className="max-w-[600px] text-[clamp(48px,7vw,130px)] font-extrabold leading-110 text-secondary-foreground">
          Drop Us a Line
        </h1>
        <Link href="/contact">
          <ButtonFill className="mt-6 border-secondary text-primary-foreground after:left-0 after:bg-secondary hover:text-secondary-foreground md:mt-0">
            Let’s Talk <RightArrow width={35} height={22} />
          </ButtonFill>
        </Link>
      </div>
    </section>
  );
}
