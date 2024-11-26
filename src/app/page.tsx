import { HeroSection } from "@/components/hero-section";
import { Info } from "@/components/info";
import { Content } from "@/components/content";
import { GoogleForm } from "@/components/google-form";
import { Comunity } from "@/components/comunity";

export default function Home() {
  return (
    <>
      <HeroSection />

      <Info />

      <Content />

      <Comunity />

      <GoogleForm />
    </>
  );
}
