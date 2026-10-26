"use client";
import SponsorCard from "@/src/components/SponsorCard";
import type { SponsorsScrollerProps } from "@/src/lib/types";

const MIN_TRACK_ITEMS = 20;

export function SponsorsScroller({
  reverse = false,
  sponsors,
  year,
}: SponsorsScrollerProps) {
  const repeatCount = Math.max(1, Math.ceil(MIN_TRACK_ITEMS / sponsors.length));
  const track = Array.from({ length: repeatCount }, () => sponsors).flat();

  return (
    <div className="flex w-full overflow-hidden py-2 [--duration:70s]">
      {Array.from({ length: 2 }, (_, i) => (
        <div
          className={`flex flex-row ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
          key={i}
        >
          {track.map((sponsor, j) => (
            <SponsorCard sponsor={sponsor} year={year} key={j} />
          ))}
        </div>
      ))}
    </div>
  );
}
