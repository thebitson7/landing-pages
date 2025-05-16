import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import HeroHeading from "./components/HeroSection/HeroSection";
import CaloriesCard from "./components/CaloriesCard/CaloriesCard";

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen w-full overflow-hidden">
      <Navbar />
      <HeroHeading />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <CaloriesCard />
    </div>
    </main>
  );
}
