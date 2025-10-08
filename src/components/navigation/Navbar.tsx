import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <nav className="z-50 fixed w-full px-5">
        {/* Botão hambúrguer (apenas no mobile) */}
        <button
          className="cursor-pointer bg-white/70 backdrop-blur-lg border-[1px] fixed md:hidden rounded-[10px] top-4 right-4 p-2 flex flex-col justify-center items-center w-10 h-10 gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`w-full h-[3px] bg-black rounded transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></div>
          <div
            className={`w-full h-[3px] bg-black rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
          ></div>
          <div
            className={`w-full h-[3px] bg-black rounded transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></div>
        </button>

        {/* Links */}
        <ul
          className={`md:my-0 flex flex-col items-center gap-6 fixed place-content-center top-14 right-14 left-14  bg-white/70 backdrop-blur-lg border-[1px] p-6 rounded-2xl md:flex-row md:gap-8 justify-end ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 md:opacity-100 md:translate-y-0"}
        `}
        >
          <li>
            <a href="/" className="font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="/certificacoes" className="font-medium">
              Certificações
            </a>
          </li>
          <li>
            <a href="/projetos" className="font-medium">
              Projetos
            </a>
          </li>
        </ul>
      </nav>
  
  );
}
