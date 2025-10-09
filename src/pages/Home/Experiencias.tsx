import ContentSection from "../../layouts/ContentSection";

function Experiencias() {
  return (
    <>
      <ContentSection title="Experiências">
        <section className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-4 p-10 rounded-2xl bg-radial from-[#BFC5FC] to-[#E6E9FF]">
            <img
              className="h-20 w-20 rounded-2xl object-contain"
              src="assets/empresas/compass-uol.png"
              alt=""
            />
            <div className="w-full md:w-9/10 flex flex-col gap-5">
              <h3 className="text-2xl md:text-3xl font-medium">Compass UOL</h3>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Estagiária de desenvolvimento front-end</p>
                  <p className="text-neutral-500 text-[13px]">Abr 2025 – Set 2025</p>
                  <p>
                    Atuei no desenvolvimento de uma aplicação web responsiva e de alta performance usando React com TypeScript. Implementei gerenciamento de estado global com Redux, validação de formulários com React Hook Form e Zod, e integração com APIs RESTful para persistência e dinamismo de dados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 p-10 rounded-2xl bg-radial from-[#D4FFB2] to-[#EFFFE2]">
            <img
              className="h-20 w-20 rounded-2xl object-contain"
              src="assets/empresas/mega-jr.svg"
              alt=""
            />
            <div className="w-full md:w-9/10 flex flex-col gap-5">
              <h3 className="text-2xl md:text-3xl font-medium">Mega Júnior</h3>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Diretora de Gestão de Pessoas e Vice-presidente</p>
                  <p className="text-neutral-500 text-[13px]">Fev 2025 – Atual</p>
                  <p>
                    Fui responsável pela reestruturação das diretorias da empresa, com quase 40 membros, documentando cargos e criando processos eficientes. Conduzi processo seletivo com mais de 100 candidaturas, lidero reuniões gerais mensais e traço estratégias para manter um clima organizacional saudável, estimulando o crescimento da empresa e o desenvolvimento profissional dos membros.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Diretora de Marketing</p>
                  <p className="text-neutral-500 text-[13px]">Nov 2024 – Fev 2025</p>
                  <p>
                    Desenvolvi uma nova identidade visual da empresa, alinhando propósito e marca, aumentando visibilidade e seriedade. Criei documentações e padrões de design ainda utilizados pela equipe e elaborei o calendário editorial, gerenciando diretamente uma equipe de 5 membros.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Gerente de Marketing</p>
                  <p className="text-neutral-500 text-[13px]">Set 2024 – Nov 2024</p>
                  <p>
                    Liderei a equipe de designers e organizei o calendário editorial, mantendo consistência e qualidade das entregas.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Desenvolvedora Back-End Trainee</p>
                  <p className="text-neutral-500 text-[13px]">Jul 2024 – Set 2024</p>
                  <p>
                    Ingressei como desenvolvedora back-end, desenvolvendo durante o processo seletivo uma API RESTful com Node.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentSection>
    </>
  );
}

export default Experiencias;
