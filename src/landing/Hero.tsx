import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-background flex flex-row items-end gap-4 py-4 pl-4 pr-0 md:px-8 h-[50dvh] md:h-auto">
      <div className={"grow md:w-1/4 flex-row flex justify-center w-1/3"}>
        <div className="flex flex-col gap-8">
          <h1 className={"text-6xl md:text-[10vw] text-foreground"}>CQ</h1>
          <div className={"flex flex-col gap-3 md:gap-5 items-start w-fit"}>
            <h2 className={"text-4xl md:text-[4vw] text-foreground"}>BUILD</h2>
            <h2 className="text-4xl md:text-[4vw] text-primary">LEARN</h2>
            <h2 className={"text-4xl md:text-[4vw] text-foreground"}>CREATE</h2>
          </div>
        </div>
      </div>
      <div className={"grow md:w-3/4 w-2/3 overflow-hidden h-full md:h-auto"}>
        <Image
          src="Hero_Image.svg"
          alt="Abstract technology image representing CodeQuantum"
          width={1280}
          height={800}
          className={
            "w-full h-full md:h-auto object-cover object-left md:object-fill"
          }
        />
      </div>
    </section>
  );
}
