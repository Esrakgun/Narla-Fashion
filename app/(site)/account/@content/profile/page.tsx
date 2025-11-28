"use client";

import ProfileHeader from "./ProfileHeader";
import ProfileForm from "./ProfileForm";

export default function ProfilePage() {
  return (
    <section
      className="profile-bg min-h-screen w-full flex justify-center items-start px-6! py-10!"
      style={{
        backgroundImage: "url('/assets/pp.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY: "-200px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-3xl w-full backdrop-blur-md rounded-2xl p-8! shadow-lg">
        <ProfileHeader />
        <ProfileForm />
      </div>
    </section>
  );
}
