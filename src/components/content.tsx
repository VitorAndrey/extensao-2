export const videos = [
  "https://www.youtube.com/watch?v=--XaDcCutTI",
  "https://www.youtube.com/watch?v=Z9H8FAzVb9w",
  "https://www.youtube.com/watch?v=zrO3V758uGw",
];

export function Content() {
  return (
    <section
      id="conteudos"
      className="mx-auto flex min-h-[calc(100svh-(16px*4))] w-full max-w-4xl flex-col justify-center gap-4 px-2 py-8"
    >
      <h2 className="text-2xl font-semibold lg:text-3xl text-center">
        Como <span className="text-emerald-500">Manter a Saúde</span> na
        Correria do Dia a Dia
      </h2>
      <h3 className="text-lg font-medium text-center text-zinc-600">
        Dicas práticas para uma vida saudável, mesmo com a agenda apertada
      </h3>

      <div className="flex justify-between gap-4 py-8">
        {videos.map((video, index) => (
          <div key={index} className="flex-1 aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${new URL(
                video
              ).searchParams.get("v")}`}
              frameBorder="0"
              title={`YouTube video player ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>

      <p className="text-zinc-500">
        Sabemos como é difícil manter uma rotina saudável com a agenda lotada.
        Mas pequenas atitudes diárias, como planejar suas refeições, manter-se
        hidratado, encaixar exercícios rápidos e priorizar o sono, podem
        transformar sua saúde. Nos vídeos abaixo, você aprenderá como adotar
        esses hábitos de forma simples e eficaz, mesmo nos dias mais corridos.
      </p>
    </section>
  );
}
