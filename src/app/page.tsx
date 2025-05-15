import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroHeading from "./components/HeroHeading";

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen w-full overflow-hidden">
      <Navbar />
      <HeroHeading />

      {/* کارت پروتئین به صورت absolute مطابق طرح فیگما */}
      <Image
        src="/images/protein-card-section.png"
        alt="Protein Card"
        width={180}
        height={90}
        className="absolute top-[320px] left-[5%] md:left-[8%] lg:left-[10%] rotate-[-10deg] z-10"
      />
    </main>
  );
}
