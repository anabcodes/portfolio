import { useState } from "react";
import ContentSection from "../../layouts/ContentSection";
import { FaPlay } from "react-icons/fa";

const videos = [
  { src: "assets/softskills/reuniao-megajr.mp4", descricao: "Liderança que prioriza, ouve e estimula." },
  { src: "assets/softskills/apresentacao-pantanal-dev.mp4", descricao: "Comunicação clara." },
  { src: "assets/softskills/reuniao-diretoria.mp4", descricao: "Organização que mantém processos claros e eficientes." },
  { src: "assets/softskills/prototipagem.mp4", descricao: "Visão multidisciplinar com conhecimento em tecnologia, design e produto." },
];

const rotations = [-3, 2, -5, 3];

function SoftSkills() {
  const [pausedVideos, setPausedVideos] = useState<boolean[]>(
    Array(videos.length).fill(true)
  );
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }[]>(
    Array(videos.length).fill({ x: 0, y: 0 })
  );

  const handleMouseEnter = (index: number, e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget as HTMLVideoElement;
    video.currentTime = 0;
    video.play().catch(() => {});
    setPausedVideos((prev) => {
      const copy = [...prev];
      copy[index] = false;
      return copy;
    });
  };

  const handleMouseLeave = (index: number, e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget as HTMLVideoElement;
    video.pause();
    setPausedVideos((prev) => {
      const copy = [...prev];
      copy[index] = true;
      return copy;
    });
  };

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCursorPos((prev) => {
      const copy = [...prev];
      copy[index] = { x, y };
      return copy;
    });
  };

  return (
    <ContentSection
      title="Soft Skills"
      subtitle="Mais que código: habilidades que movem projetos"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] place-items-center mt-7 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative w-64 h-96 rounded-2xl transition-transform duration-500 group hover:z-50"
            style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
            onMouseMove={(e) => handleMouseMove(index, e)}
          >
            {/* Vídeo */}
            <video
              disablePictureInPicture
              className="w-full h-full object-cover rounded-2xl cursor-pointer transition-opacity duration-500 border-[1px]"
              src={video.src}
              muted
              loop
              onMouseEnter={(e) => handleMouseEnter(index, e)}
              onMouseLeave={(e) => handleMouseLeave(index, e)}
            />

            {/* Ícone de play */}
            {pausedVideos[index] && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-white/20 rounded-2xl transition-opacity duration-500 group-hover:z-50 border-[1px]">
                <FaPlay className="text-[#D2FFB0]  text-5xl" />
              </div>
            )}

            {/* Balão de descrição que segue o cursor */}
            {!pausedVideos[index] && (
              <div
                className="absolute border-[1px] px-8 py-2 bg-[#D2FFB0] text-black text-[9px] md:text-sm font-mono rounded-full pointer-events-none whitespace-nowrap z-50 group-hover:z-50"
                style={{
                  right: - cursorPos[index].x + 30,
                  top: cursorPos[index].y + 20,
                  transition: "left 0.1s ease, top 0.1s ease",
                }}
              >
                {video.descricao}
              </div>
            )}
          </div>
        ))}
      </div>
    </ContentSection>
  );
}

export default SoftSkills;
