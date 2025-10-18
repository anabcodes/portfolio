import ContentSection from "../../layouts/ContentSection";

function FormacaoAcademica() {
  return (
    <>
      <ContentSection
        title="Formação Acadêmica"
        subtitle="Minha formação vai além da sala de aula: participei de projetos práticos que aplicaram a teoria em situações reais, desenvolvendo soluções e habilidades que complementam o aprendizado acadêmico."
      >
        <section className="flex flex-col gap-5">
          <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-4">
            <div className="bg-[#E6E9FF] p-10 rounded-2xl flex flex-col gap-2 justify-center">
              <p className="font-semibold">Bacharelado em Sistemas de Informação</p>
              <p>
                Curso Sistemas de Informação na UFMS, onde aprofundo conhecimentos em engenharia de software, inteligência artificial e arquitetura de sistemas. A formação tem fortalecido tanto meu raciocínio técnico quanto minha capacidade analítica e de resolução de problemas, preparando-me para atuar com eficiência no desenvolvimento e na inovação tecnológica.
              </p>
            </div>
            <img
              className="object-cover bg-neutral-200 h-full aspect-video rounded-2xl"
              src="assets/images/membros-mega-junior.jpg"
              alt=""
            />
            <div className="bg-[#D2FFB0] p-10 rounded-2xl flex flex-col gap-2 justify-center">
              <p className="font-semibold">Experiência em Empresa Júnior</p>
              <p>
                Na Mega Júnior, comecei como desenvolvedora back-end e hoje atuo como diretora de gestão de pessoas. A vivência em diferentes áreas me tornou mais organizada, proativa e estratégica, fortalecendo minhas habilidades de liderança, gestão de equipes e comunicação ao acompanhar quase 40 membros e liderar diretamente uma equipe de 7 pessoas.
              </p>
            </div>
            <img
              className="object-cover bg-neutral-200 h-full aspect-video rounded-2xl"
              src="assets/images/pantanal-dev-com-ufms.jpg"
              alt=""
            />
            <div className="bg-[#EFCEFF] p-10 rounded-2xl flex flex-col gap-2 justify-center">
              <p className="font-semibold">Programa B3 – Pantanal.dev com UFMS</p>
              <p>
                Atuei no módulo de Engenharia de Software do Pantanal.dev, projeto da B3 em parceria com a UFMS. Nosso time foi vencedor, entregando um MVP que resolveu uma dor do setor de inovação da Bolsa do Brasil, enquanto adquiri visão ampla e, principalmente, prática de engenharia de software, da descoberta de produto ao protótipo final.
              </p>
            </div>
            <img
              className="object-cover bg-neutral-200 h-full aspect-video rounded-2xl"
              src="assets/images/time-ganhador-pantanal-self.jpg"
              alt=""
            />
          </div>
        </section>
      </ContentSection>
    </>
  );
}

export default FormacaoAcademica;
