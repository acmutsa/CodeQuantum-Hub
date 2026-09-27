import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-white flex flex-col lg:flex-row md:flex-row items-center m-8 pt-4 pb-4">
            <div className={"grow shrink lg:w-1/4 md:w-1/3 flex justify-center mx-auto lg:pt-[15%] md:pt-[10%]"}>
                <div className={"flex flex-col space-y-5 items-start w-fit self-center"}>
                    <h1 className={"text-7xl lg:text-[172px] text-black lg:pb-10 md:pb-10"} >
                        CQ
                    </h1>
                    <h2 className={"text-5xl lg:text-[72px] text-black"}>
                        BUILD
                    </h2>
                    <h2 className="text-5xl lg:text-[72px] text-blue-600">
                        LEARN
                    </h2>
                    <h2 className={"text-5xl lg:text-[72px] text-black"}>
                        CREATE
                    </h2>
                </div>
            </div>
            <div className={"grow shrink lg:w-3/4 md:w-2/3"}>
                <Image
                    src="Hero_Image.svg"
                    alt="Abstract technology image representing CodeQuantum"
                    width={1280}
                    height={800}
                    className={"w-full h-auto"}
                />
            </div>
        </section>
    )
}