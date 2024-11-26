import Image from "next/image";
import hero_image from "../../public/hero-section.svg";
import { Button } from "./ui/button";
import { HeartIcon } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-(16px*4))] w-full max-w-6xl flex-col items-center justify-center gap-8 text-center md:min-h-[80svh] md:px-10 md:text-left lg:flex-row lg:gap-0">
      <div className="lg:flex-1">
        <h1 className="max-w-xs p-4 text-3xl font-semibold md:mt-10 md:max-w-xl md:p-0 md:text-4xl lg:mt-0 lg:text-5xl">
          Cuide de sua saúde e bem-estar{" "}
          <span className="text-emerald-500">Juntos</span> podemos mais!
        </h1>

        <p className="my-2 max-w-xs p-4 text-sm text-zinc-500 md:my-6 md:max-w-xl md:p-0 lg:text-base">
          Está difícil manter uma rotina saudável? Estamos aqui para oferecer
          dicas e motivação para você se cuidar melhor.
        </p>

        <Link target="_blank" href="#informacoes">
          <Button className="md:text-md rounded-full bg-emerald-500 hover:scale-[1.01] hover:bg-emerald-500 active:scale-[0.99] md:px-7 md:py-5 lg:px-8 lg:py-6 lg:text-lg">
            Comece Agora
            <HeartIcon className="ml-2 scale-110" fill="#ffffff" />
          </Button>
        </Link>
      </div>

      <div className="flex w-full items-center justify-center lg:flex-1">
        <Image
          src={hero_image}
          alt="Pessoas cuidando da saúde"
          className="w-full max-w-xs lg:max-w-md"
        />
      </div>
    </section>
  );
}
