import RightArrow from "@/src/components/theme/icons/rightArrow";
import ButtonFill from "@/src/components/theme/ui/buttons/buttonFill";
import SmartLink from "@/src/components/theme/ui/smartLink";
import { focalPoint, imageUrl } from "@/src/sanity/lib/image";
import type { SiteSettings } from "@/src/sanity/lib/queries";

type Props = {
  banner: SiteSettings["contactBanner"];
};

export default function Feedback({ banner }: Props) {
  if (!banner?.heading) return null;

  return (
    <section className="container py-20">
      <div
        className="flex flex-col items-start justify-between bg-cover bg-center bg-no-repeat pb-[69px] pl-10 pr-10 pt-20 md:flex-row md:items-end 2sm:pr-24 lg:pl-[148px] lg:pr-[133px] lg:pt-[117px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${imageUrl(banner.image, 2000)})`,
          backgroundPosition: focalPoint(banner.image),
        }}
      >
        <h1 className="max-w-[600px] text-[clamp(48px,7vw,130px)] font-extrabold leading-110 text-secondary-foreground">
          {banner.heading}
        </h1>
        {banner.buttonLabel && banner.buttonLink ? (
          <SmartLink href={banner.buttonLink}>
            <ButtonFill className="mt-6 border-secondary text-primary-foreground after:left-0 after:bg-secondary hover:text-secondary-foreground md:mt-0">
              {banner.buttonLabel} <RightArrow width={35} height={22} />
            </ButtonFill>
          </SmartLink>
        ) : null}
      </div>
    </section>
  );
}
