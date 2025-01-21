"use client";
import AvatarWithIcons from "../AvatarWithIcons/indext";
import ProfileSection from "../ProfileSection";

export const Profile = () => {
  return (
<section className="min-h-screen bg-[#FFDD55] flex items-center justify-center">
<div className="lg:flex items-center">
        <ProfileSection />
        <AvatarWithIcons />
      </div>
    </section>
  );
};
