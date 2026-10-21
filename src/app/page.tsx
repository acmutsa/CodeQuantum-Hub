import Image from "next/image";
import Iterations from "@/src/landing/Iterations";
import Hero from "@/src/landing/Hero";
import CodeQuantum from "@/src/landing/CodeQuantum";

export default function Home() {
  return (
    <main>
      <Hero/>
      <CodeQuantum/>
      <Iterations/>
    </main>
  );
}
