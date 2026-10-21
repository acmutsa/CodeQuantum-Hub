"use client";

export default function SponsorCard({
                                        sponsor,
                                        year
                                    }: { sponsor: string; year: number }) {
    console.log("SponsorCard", sponsor, year);

    return (
        <div className="flex shrink-0 items-center gap-3 bg-background px-4 py-2">
            {sponsor && (
                <img
                    className="h-10 w-auto max-w-[100px] object-contain"
                    src={`/sponsors/${year}/${sponsor}.svg`}
                    alt={sponsor}
                />
            )}
        </div>
    );

};