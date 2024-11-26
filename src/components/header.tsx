import Link from "next/link";

export function Header() {
  return (
    <header className="w-full h-14 flex items-center justify-center">
      <nav className="flex gap-8">
        <Link
          href="#informacoes"
          className="text-sm font-semibold text-zinc-700 hover:text-emerald-500 transition-colors duration-200 active:scale-95"
        >
          Informações
        </Link>
        <Link
          href="#conteudos"
          className="text-sm font-semibold text-zinc-700 hover:text-emerald-500 transition-colors duration-200 active:scale-95"
        >
          Conteúdos
        </Link>
        <Link
          href="#comunidade"
          className="text-sm font-semibold text-zinc-700 hover:text-emerald-500 transition-colors duration-200 active:scale-95"
        >
          Comunidade
        </Link>
        <Link
          href="#formulario"
          className="text-sm font-semibold text-zinc-700 hover:text-emerald-500 transition-colors duration-200 active:scale-95"
        >
          Formulário
        </Link>
      </nav>
    </header>
  );
}
