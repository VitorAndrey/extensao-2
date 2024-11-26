export function GoogleForm() {
  return (
    <section
      id="formulario"
      className="w-full flex items-center justify-center flex-col gap-8"
    >
      <h2 className="text-3xl font-semibold text-center text-zinc-800 max-w-md">
        <span className="text-emerald-500">Junte-se</span> à Nossa Comunidade e
        Ajude a{" "}
        <span className="text-emerald-500">
          Construir um Futuro Mais Saudável!
        </span>
      </h2>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScmruVhbkAFMUvzNYHlPo2JJLiLSYtPOwGr67-JQOJHY_Xeyg/viewform?embedded=true"
        width="640"
        height="4039"
      >
        Carregando…
      </iframe>
    </section>
  );
}
