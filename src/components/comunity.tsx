import image1 from "../../public/vivencia-1.jpg";
import image2 from "../../public/vivencia-2.jpg";
import Image from "next/image";

export function Comunity() {
  return (
    <section
      id="comunidade"
      className="mx-auto flex min-h-[calc(100svh-(16px*4))] w-full max-w-4xl flex-col justify-center gap-4 px-2 py-8"
    >
      <h2 className="text-2xl font-semibold lg:text-3xl text-center">
        Como <span className="text-emerald-500">Cuidar da Sua Saúde</span> em
        Meio à Correria do Dia a Dia
      </h2>
      <h3 className="text-lg font-medium text-center text-zinc-600">
        Estratégias para manter o equilíbrio e bem-estar, mesmo com uma agenda
        cheia
      </h3>

      <div className="flex justify-between gap-4 py-8">
        <div className="flex-1">
          <Image
            src={image1}
            alt="Pessoa praticando exercício ao ar livre"
            className="w-full rounded-lg shadow-lg h-64 object-cover"
          />
        </div>
        <div className="flex-1">
          <Image
            src={image2}
            alt="Grupo de pessoas praticando atividades físicas juntos"
            className="w-full rounded-lg shadow-lg object-cover h-64"
          />
        </div>
      </div>

      <p className="text-zinc-500">
        Sabemos como é desafiador manter a saúde quando a agenda está cheia, mas
        com pequenas mudanças, você pode alcançar um estilo de vida mais
        equilibrado. Nesta seção, mostramos como membros da nossa comunidade têm
        incorporado atividades simples ao seu dia a dia, como exercícios rápidos
        e cuidados com a alimentação. O vídeo a seguir traz dicas práticas para
        integrar esses hábitos de maneira eficaz, mesmo nos dias mais corridos.
      </p>
    </section>
  );
}
