import Hero from "../landing/Hero"
import {Cal_Sans} from "next/font/google";

const calSans = Cal_Sans({
    weight: "400",
    variable: "--font-cal-sans"
});

export default function Home() {
  return (
      <main className={calSans.variable}>
        <Hero/>
      </main>
  );
}
