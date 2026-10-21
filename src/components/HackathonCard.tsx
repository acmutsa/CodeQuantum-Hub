"use client"
import { useEffect, useState } from 'react';
import { cn } from '@/src/lib/utils';
import type { HackathonCardProps } from '@/src/lib/types';
import Link from "next/link";

const FALLBACK_LOGO = "/img/rh.svg";

export default function HackathonCard({
                                          isCentered,
                                          position,
                                          hackathon,
                                          onSelect,
                                          cardSize
                                      }: HackathonCardProps) {

    const logoSrc = `/logos/CQ${hackathon.year}.${hackathon.imgFormat}`;
    const [src, setSrc] = useState(FALLBACK_LOGO);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => { setSrc(logoSrc) }, [logoSrc]);

    return (
        <div
            onClick={onSelect}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-4 transition-all duration-500 ease-in-out flex flex-col justify-center",
                "[clip-path:polygon(50px_0%,calc(100%-50px)_0%,100%_50px,100%_100%,calc(100%-50px)_100%,50px_100%,0_100%,0_0)]",
                isCentered
                    ? "z-10 bg-background text-foreground border-accent shadow-[0px_8px_0px_4px_hsl(var(--border))]"
                    : "z-0 bg-background text-foreground border-border shadow-none"
            )}
            style={{
                width: cardSize,
                height: cardSize / 1.7,
                transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCentered ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCentered ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `
            }}
        >
            <Link href={`https://${hackathon.year}.rowdyhacks.org`}>
                <span className={cn("absolute right-[-2px] top-12 h-0.5 w-[70.71px] origin-top-right rotate-45", isCentered ? "bg-accent" : "bg-border")} />

                <img
                    src={src}
                    alt={hackathon.name}
                    onError={() => setSrc(FALLBACK_LOGO)}
                    className="mb-4 h-16 w-16 bg-muted object-contain object-top shadow-[3px_3px_0px_hsl(var(--background))]"
                />

                <h3 className={"text-base sm:text-xl font-medium"}>
                    {hackathon.name}
                </h3>
            </Link>
        </div>
    );
}