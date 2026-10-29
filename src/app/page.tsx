import Image from "next/image";
import Hero from "../landing/Hero";
import CodeQuantum from "../landing/CodeQuantum";
import Iterations from "@/src/landing/Iterations";
import Footer from "@/src/landing/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-[5cqw] sm:gap-[3cqw]">
      <Hero />
      <CodeQuantum />
      <Iterations />
      <Footer />
    </main>
  );
}
