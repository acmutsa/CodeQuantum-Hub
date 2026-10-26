"use client";
import { SponsorsScroller } from "@/src/components/SponsorsScroller";
import { calSans, poppins } from "@/src/lib/fonts";
import type { SponsorsProps } from "@/src/lib/types";

export default function Sponsors({ sponsors, year }: SponsorsProps) {
  return (
    <div className="w-full flex flex-col" id="sponsors">
      <h3
        className={`${calSans.className} text-4xl lg:text-5xl text-center font-extrabold pb-[5cqw] sm:pb-[2cqw]`}
      >
        SPONSORS
      </h3>
      {sponsors === undefined ? (
        <p
          className={`${poppins.className} text-xl text-justify font-regular px-[10cqw] pb-[5cqw] sm:pb-[2cqw]`}
        >
          Unfortunately, sponsor data could not be recovered.
        </p>
      ) : sponsors.length === 0 ? (
        <p
          className={`${poppins.className} text-xl text-justify font-regular px-[10cqw] pb-[5cqw] sm:pb-[2cqw]`}
        >
          We are still looking for sponsors for this event! If you are
          interested, check out{" "}
          <a
            href={`https://${year}.rowdyhacks.org`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-2 hover:underline"
          >
            our website
          </a>
        </p>
      ) : (
        <>
          <SponsorsScroller sponsors={sponsors} year={year} />
          <SponsorsScroller sponsors={sponsors} year={year} reverse={true} />
        </>
      )}
    </div>
  );
}
