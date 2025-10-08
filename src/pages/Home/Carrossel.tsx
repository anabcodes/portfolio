import { useEffect, useRef } from "react";
import gsap from "gsap";

function Carrossel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cols = carouselRef.current?.querySelectorAll(".col");

    if (!cols) return;

    cols.forEach((col, index) => {
      gsap.fromTo(
        col,
        { y: -(index * 80) },
        {
          y: -(col.scrollHeight / 2) - index * 80,
          repeat: -1,
          duration: 20,
          ease: "linear",
        }
      );
    });
  }, []);

  return (
    <section
      ref={carouselRef}
      className="flex w-full md:w-1/2 h-[600px] overflow-hidden gap-2 
      [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]
      justify-center"
    >
      <div className="col flex flex-col w-1/2 h-full gap-2">
        <img
          src="assets/tecnologias/react.png"
          alt="React"
          className="rounded-lg aspect-square object-cover "
        />
        <img
          src="assets/tecnologias/node.png"
          alt="Node"
          className="rounded-lg aspect-square object-cover "
        />
        <img
          src="assets/tecnologias/typescript.png"
          alt="TypeScript"
          className="rounded-lg aspect-square object-cover "
        />
        <img
          src="assets/tecnologias/react.png"
          alt="React"
          className="rounded-lg aspect-square object-cover "
        />
        <img
          src="assets/tecnologias/node.png"
          alt="Node"
          className="rounded-lg aspect-square object-cover "
        />
        <img
          src="assets/tecnologias/typescript.png"
          alt="TypeScript"
          className="rounded-lg aspect-square object-cover "
        />
      </div>

      <div className="col flex flex-col w-1/2 h-full gap-2">
        <img
          src="assets/tecnologias/git.png"
          alt="Git"
          className="rounded-lg aspect-square object-cover "
        />
        <img
          src="assets/tecnologias/tailwind.png"
          alt="Tailwind"
          className="rounded-lg aspect-square object-cover "
        />
        <img
          src="assets/tecnologias/mysql.png"
          alt="MySQL"
          className="rounded-lg aspect-square object-cover "
        />
        <img
          src="assets/tecnologias/git.png"
          alt="Git"
          className="rounded-lg aspect-square object-cover"
        />
        <img
          src="assets/tecnologias/tailwind.png"
          alt="Tailwind"
          className="rounded-lg aspect-square object-cover"
        />
        <img
          src="assets/tecnologias/mysql.png"
          alt="MySQL"
          className="rounded-lg aspect-square object-cover"
        />
      </div>
    </section>
  );
}

export default Carrossel;
