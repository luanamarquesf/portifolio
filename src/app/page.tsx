"use client";
import AvatarWithIcons from "./components/AvatarWithIcons/indext";
import Header from "./components/Header";
import { Montserrat } from "next/font/google"
import ProfileSection from "./components/ProfileSection";
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  const handleMenuClick = (menuItem: string) => {
    console.log(`Você clicou em: ${menuItem}`);
  };

  return (
    <div className={montserrat.className + " bg-[#FFDD55] w-full h-screen "}>
      <Header onMenuClick={handleMenuClick} />
      <main className={montserrat.className}>

        <div className="p-10">
          <div className="flex items-center">
            <ProfileSection />
            <AvatarWithIcons />
          </div>

        </div>
      </main>

    </div>
  );

}
