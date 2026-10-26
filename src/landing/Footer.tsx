import Image from "next/image";
import { calSans } from "@/src/lib/fonts";

export default function Footer(){
    return (
        <footer className="bg-background w-full overflow-hidden mt-auto">
            <div className="w-full h-auto">
                <Image
                    src="/footer.svg"
                    alt="Footer Image"
                    width={1280}
                    height={800}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="bg-background h-auto px-[10cqw] ml-auto flex flex-row items-center">
                <Image
                    src="/cqlogo.svg"
                    alt="CQ Logo"
                    width={50}
                    height={50}
                    className="object-left"
                />
                <h1 className={`${calSans.className} font-bold px-[1cqw] sm:text-[2rem] text-center`}>
                    CodeQuantum
                </h1>
            </div>
        </footer>
        );
}