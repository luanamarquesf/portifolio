"use client";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from "./components/Header";
import { Montserrat } from "next/font/google";
import { Profile } from "./components/sections/Profile";
import { AboutSection } from "./components/sections/About";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const handleMenuClick = (menuItem: string) => {
    console.log(`Você clicou em: ${menuItem}`);
  };

  return (
    <div className={montserrat.className + " bg-[#FFDD55] w-full h-screen "}>
      <Header onMenuClick={handleMenuClick} />
      <main>
        <Profile />
        <AboutSection />
      </main>
    
    </div>
  );
}
