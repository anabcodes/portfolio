import { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
import "@splidejs/react-splide/css";
import TextoDestaque from "../../components/ui/TextoDestaque";
import type { ImagemProjeto, ProjetoProps } from "../../types/projeto";

function Projeto({dadosImagens, titulo, descricao} : ProjetoProps) {

  const mainRef = useRef<SplideInstance | null>(null);
  const thumbsRef = useRef<SplideInstance | null>(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current) {
      mainRef.current.sync(thumbsRef.current);
    }
  }, []);

  return (
    <section className="flex flex-col gap-5">
      <div className="text-center flex flex-col items-center gap-5">
        <h3 className="text-2xl md:text-4xl font-medium">{titulo}</h3>
        <p className="w-full md:w-2/3">
          {descricao}
        </p>
        <TextoDestaque texto="Texto pequeno bem aqui" />
      </div>
      <div className="w-full max-w-4xl mx-auto">
        {/* Slider principal */}
        <Splide
          options={{
            type: "fade",
            heightRatio: 0.5,
            pagination: false,
            arrows: false,
            cover: true,
          }}
          onMounted={(splide: SplideInstance) => (mainRef.current = splide)}
          aria-label="Carrossel principal"
        >
          {dadosImagens.map((item : ImagemProjeto, index:number) => (
            <SplideSlide key={index}>
              <div className="h-full relative group border-[1px]">
                <img
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full object-cover h-full"
                />
                <div className="group-hover:opacity-0 opacity-100 transition-opacity duration-300 absolute bg-green-100/70 backdrop-blur-lg border-black border-t-[1px] flex flex-col justify-center  p-4 bottom-0 w-full ">
                  <h4 className="text-black text-lg font-semibold">
                    {item.titulo}
                  </h4>
                  <p className="text-black text-sm">{item.descricao}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* Slider de miniaturas */}
        <Splide
          options={{
            rewind: true,
            fixedWidth: 150,
            fixedHeight: 80,
            isNavigation: true,
            gap: 10,
            focus: "center",
            pagination: false,
            cover: true,
            dragMinThreshold: { mouse: 4, touch: 10 },
            breakpoints: {
              640: {
                fixedWidth: 66,
                fixedHeight: 38,
              },
            },
          }}
          onMounted={(splide: SplideInstance) => (thumbsRef.current = splide)}
          aria-label="Miniaturas"
          className="mt-4"
        >
          {dadosImagens.map((item, index) => (
            <SplideSlide key={index}>
              <img
                src={item.src}
                alt={`Thumb ${index + 1}`}
                className="w-full h-full object-cover rounded-full cursor-pointer opacity-80 hover:opacity-100 transition"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default Projeto;
