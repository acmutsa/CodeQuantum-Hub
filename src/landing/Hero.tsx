import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-white flex flex-row items-stretch md:items-center m-8 pt-4 pb-4 h-[50dvh] md:h-auto gap-4 mr-0 md:mr-8">
            <div className={"grow md:w-1/4 flex justify-center mx-auto md:pt-[15%] w-1/3"}>
                <div className={"flex flex-col space-y-5 items-start w-fit self-center"}>
                    <h1 className={"text-6xl md:text-[10vw] text-black lg:pb-10 md:pb-10"} >
                        CQ
                    </h1>
                    <h2 className={"text-4xl md:text-[4vw] text-black"}>
                        BUILD
                    </h2>
                    <h2 className="text-4xl md:text-[4vw] text-blue-600">
                        LEARN
                    </h2>
                    <h2 className={"text-4xl md:text-[4vw] text-black"}>
                        CREATE
                    </h2>
                </div>
            </div>
            <div className={"grow md:w-3/4 w-2/3 overflow-hidden h-full md:h-auto"}>
                <Image
                    src="Hero_Image.svg"
                    alt="Abstract technology image representing CodeQuantum"
                    width={1280}
                    height={800}
                    className={"w-full h-full md:h-auto object-cover object-left md:object-fill"}
                />
            </div>
        </section>
    )
}