"use client"
import HackathonCard from "@/src/components/HackathonCard";
//import Sponsors from "@/src/landing/Sponsors";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/src/lib/utils";
import { calSans, poppins } from '@/src/lib/fonts';
import c from '@/cq.hub.config';
import type { HackathonCard as HackathonCardData } from '@/src/lib/types';
import CodeQuantumInfo from "./CodeQuantumInfo";

const hackathons: HackathonCardData[] = c.hackathons;

const MOBILE_CARD_SIZE = 290;
const DESKTOP_CARD_SIZE = 365;
const BREAKPOINT = 640;

export default function Iterations() {
    const [cardSize, setCardSize] = useState(MOBILE_CARD_SIZE);
    const [highlightedIndex, setHighlightedIndex] = useState(hackathons.length - 1);
    const isFirstHackathonCentered = highlightedIndex === 0;
    const isLastHackathonCentered = highlightedIndex === hackathons.length - 1;

    useEffect(() => {
        const updateSize = () => {
            const isDesktop = window.matchMedia(
                `(min-width: ${BREAKPOINT}px)`
            ).matches;
            setCardSize(isDesktop ? DESKTOP_CARD_SIZE : MOBILE_CARD_SIZE);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const goToIndex = (index: number) => {
        setHighlightedIndex(Math.max(0, Math.min(hackathons.length - 1, index)));
    };

    const highlighted = hackathons[highlightedIndex];

    return (
        <div className="w-full flex flex-col" id="iterations">
            <h2 className={`${calSans.className} text-4xl lg:text-5xl text-center font-extrabold pb-[5cqw] sm:pb-[2cqw]`}>
                ITERATIONS
            </h2>

            <div className="flex flex-col items-center gap-[5cqw] sm:gap-[3cqw]">

                <div className="flex w-full justify-center items-center">
                    <div className="relative flex w-full flex-col overflow-hidden bg-muted/30">
                        <div className="relative" style={{ height: cardSize / 1.7 + 130 }}>
                            {hackathons.map((hackathon, index) => (
                                <HackathonCard
                                    key={hackathon.number}
                                    position={index - highlightedIndex}
                                    hackathon={hackathon}
                                    onSelect={() => goToIndex(index)}
                                    isCentered={index === highlightedIndex}
                                    cardSize={cardSize}
                                />
                            ))}
                        </div>

                        <div className="flex justify-center gap-16">

                            <button
                                onClick={() => goToIndex(highlightedIndex - 1)}
                                disabled={isFirstHackathonCentered}
                                className={cn("flex h-14 w-14 items-center justify-center bg-background", isFirstHackathonCentered && "cursor-not-allowed opacity-30")}
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft />
                            </button>

                            <button
                                onClick={() => goToIndex(highlightedIndex + 1)}
                                disabled={isLastHackathonCentered}
                                className={cn("flex h-14 w-14 items-center justify-center bg-background", isLastHackathonCentered && "cursor-not-allowed opacity-30")}
                                aria-label="Next testimonial"
                            >
                                <ChevronRight />
                            </button>

                        </div>

                    </div>
                </div>

                <CodeQuantumInfo hackathonCard={highlighted} />
                {/*<Sponsors sponsors={highlighted.sponsors} iteration={highlighted.iteration} year={highlighted.year} />*/}

            </div>
        </div>
    );
}