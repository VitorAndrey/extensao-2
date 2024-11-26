import { Button } from "./ui/button";
import Link from "next/link";

export function Info() {
  return (
    <section
      id="informacoes"
      className="mx-auto flex min-h-[calc(100svh-(16px*16))] w-full max-w-6xl flex-col items-center justify-center px-2 py-10"
    >
      <h2 className="px-4 text-center text-2xl font-semibold lg:text-3xl">
        Dicas de <span className="text-emerald-500">Saúde</span> para uma Rotina
        Corrida!
      </h2>
      <p className="max-w-3xl self-center px-4 py-6 text-center text-zinc-500">
        Manter a saúde em dia mesmo com uma rotina corrida pode ser desafiador.
        Aqui estão algumas dicas simples para ajudá-lo a cuidar de seu corpo e
        mente, mesmo com a agenda cheia:
      </p>
      <div className="mb-6 flex w-full flex-col items-center justify-center gap-4 p-4 child:flex-1 lg:flex-row lg:items-start lg:gap-12 lg:p-8">
        <ol className="flex flex-col gap-4 child:flex child:items-center child:gap-2 list-decimal">
          <li>
            Planeje suas refeições para garantir uma alimentação saudável.
          </li>
          <li>Mantenha-se hidratado ao longo do dia.</li>
          <li>
            Encaixe atividades físicas simples, como caminhar durante o almoço.
          </li>
          <li>Priorize o sono para melhorar sua energia e disposição.</li>
          <li>Gerencie o estresse com práticas como meditação e yoga.</li>
          <li>
            Mantenha contato social para reduzir a ansiedade e melhorar o
            bem-estar.
          </li>
        </ol>
      </div>

      <Link
        href="https://boris.com.br/blog/manter-saude-rotina-corrid/"
        target="_blank"
      >
        <Button className="self-center rounded-full border-2 border-emerald-500 bg-transparent font-semibold text-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:text-white">
          Saiba Mais!
        </Button>
      </Link>
    </section>
  );
}
