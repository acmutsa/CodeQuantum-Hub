import Image from "next/image";
import Hero from "../landing/Hero";
import CodeQuantum from "../landing/CodeQuantum";
import Iterations from "@/src/landing/Iterations";
import Footer from "@/src/landing/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CodeQuantum />
      <Iterations />
      <Footer />
    </main>
  );
}
