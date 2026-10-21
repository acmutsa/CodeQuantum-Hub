"use client"
import { calSans, poppins } from "@/src/lib/fonts";
import type { HackathonCard } from '@/src/lib/types';


export default function CodeQuantumInfo({
                                           hackathonCard
                                       }: { hackathonCard: HackathonCard }) {

    if (hackathonCard === null || hackathonCard === undefined) return null;

    return (
        <div className="w-full flex flex-col" id="info">

            <h3 className={`${calSans.className} text-4xl lg:text-5xl text-center font-extrabold pb-[5cqw] sm:pb-[2cqw]`}>
                {hackathonCard.name.toUpperCase()} INFO
            </h3>

            <p className={`${poppins.className} text-xl text-justify font-regular px-[10cqw] pb-[5cqw] sm:pb-[2cqw]`}>
                {hackathonCard.description ?? "Details for this hackathon are coming soon."}
            </p>

            <div className={`flex flex-wrap gap-4 ${poppins.className} text-xl text-justify font-regular px-[10cqw]`}>

                <a href={`https://${hackathonCard.year}.cqhacks.org`} className="rounded-[2px] border-2 border-accent bg-accent px-6 py-3 font-semibold text-background transition-transform duration-150 active:scale-95">
                    Visit website
                </a>

                <a href={hackathonCard.photosLink} className="rounded-[2px] border-2 border-accent px-6 py-3 font-semibold text-accent transition-transform duration-150 active:scale-95">
                    View photos
                </a>

            </div>

        </div>
    );
}