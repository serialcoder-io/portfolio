//import Image from "next/image";
import Hero from "@/components/home/hero";
import AboutSection from "@/components/home/about";
import Features from "@/components/home/features";

export const metadata = {
  title: "Home | Omar Anli",
  description: "Welcome to Omar Anli’s portfolio, a backend and full-stack developer.",
};



export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Features />
    </>
  );
}
