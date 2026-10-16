"use client";

import { cn } from "@/src/lib/theme/utils";
import SlotCounter from "react-slot-counter";

export type CounterItem = {
  id: number | string;
  count: string;
  title: string;
};

type Props = {
  text_muted?: string;
  bg_muted?: string;
  data?: CounterItem[];
};

const defaultCounterList: CounterItem[] = [
  { id: 1, count: "15", title: "Years Best of SLO" },
  { id: 2, count: "200+", title: "Dancers" },
  { id: 3, count: "40+", title: "Weekly Classes" },
  { id: 4, count: "1", title: "Studio Family" },
];

export default function Counter({
  text_muted,
  bg_muted,
  data = defaultCounterList,
}: Props) {
  return (
    <div className="pt-20">
      <div className="container">
        <ul className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-10">
          {data.map(({ id, count, title }) => (
            <li key={id} className="flex flex-col">
              <span
                className={cn(
                  `[font-size:_clamp(48px,9vw,90px)] font-extrabold text-primary-foreground leading-120 overflow-y-hidden overflow-x-auto ${text_muted ?? ""}`
                )}
              >
                <SlotCounter
                  startValue={0}
                  value={count}
                  debounceDelay={5000}
                  duration={2}
                  animateOnVisible={{
                    triggerOnce: true,
                    rootMargin: "0px 0px -100px 0px",
                  }}
                />
              </span>
              <span
                className={cn(
                  `w-[150px] h-[1px] bg-primary 2sm:mt-3.5 2sm:mb-4 mt-1 mb-2 ${bg_muted ?? ""}`
                )}
              />
              <span
                className={cn(
                  `2sm:text-2xl text-xl font-bold text-primary-foreground ${text_muted ?? ""}`
                )}
              >
                {title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
