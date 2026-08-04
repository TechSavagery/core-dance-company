import SwiperNavigation from "./swiperNavigation";

type Props = {
  paginationClass?: string;
};

export default function ProgressAndNavigation({
  paginationClass = "progressbar-pagination",
}: Props) {
  return (
    <div className="mt-10 sm:mt-[70px]">
      <div className="relative flex items-center justify-between">
        <div className={`${paginationClass} h-px w-[70%] bg-primary/20 lg:w-[90%]`} />
        <SwiperNavigation />
      </div>
    </div>
  );
}
