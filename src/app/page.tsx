import Image from "next/image";
import Hero from "../landing/Hero";
import CodeQuantum from "../landing/CodeQuantum";
import Iterations from "@/src/landing/Iterations";

export default function Home() {
  return (
    <main>
      <Hero />
      <CodeQuantum />
      <Iterations />
    </main>
  );
}
