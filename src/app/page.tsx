import { HeroSection } from "@/components/hero-section";
import { Collections } from "@/components/collections";
import { News } from "@/components/news";
import { GoogleForm } from "@/components/google-form";

export default function Home() {
  return (
    <>
      <HeroSection />

      <Collections />

      <News />

      <GoogleForm />
    </>
  );
}
