import ContentSection from "../../layouts/ContentSection";
import Projeto from "./Projeto";
import { dadosB3yond } from "../../data/projetos/b3yond";
import { dadosCineXP } from "../../data/projetos/cine-xp";
import { dadosMagoDaRede } from "../../data/projetos/mago-da-rede";

function Projetos(){
    return(
        <>
        <ContentSection title="PROJETOS">
            <section className="flex flex-col gap-20 md:gap-40">
                <Projeto dadosImagens={dadosB3yond} titulo="B3yond" descricao="Projeto desenvolvido no programa Pantanal.dev (Bolsa do Brasil + UFMS), com o desafio de criar um MVP para cadastro de iniciativas da área de inovação da B3. A plataforma permite que colaboradores compartilhem ideias e iniciativas, fortalecendo a cultura de inovação interna. Nosso time foi vencedor do módulo de Engenharia de Software, e as imagens mostram o protótipo que desenvolvi na parte de design UI/UX, com foco em usabilidade e engajamento." textoDestaque="Designer & Desenvolvedora front-end"/>
                <Projeto dadosImagens={dadosMagoDaRede} titulo="Mago da Rede" descricao="Mago da Rede é um site educativo e interativo que ensina sobre geolocalização por IP de forma lúdica. Inspirado no Akinator, o usuário responde a três perguntas e o “mago” tenta adivinhar onde ele está, revelando depois o “segredo” por trás da mágica. O projeto busca conscientizar e alertar sobre privacidade na internet, mostrando como sites podem identificar sua localização mesmo sem permissão explícita." textoDestaque="Designer & Desenvolvedora front-end"/>
                <Projeto dadosImagens={dadosCineXP} titulo="CineXP" descricao="Cinexp é uma plataforma completa de críticas e recomendações de filmes, desenvolvida do back-end ao front-end. Os usuários podem publicar e comentar críticas, além de cadastrar novos filmes. O projeto foi pensado para criar um espaço de troca entre cinéfilos, estimulando o debate e o compartilhamento de experiências sobre cinema." textoDestaque="Designer & Desenvolvedora Fullstack"/>
            </section>
        </ContentSection>
        </>
    )
}

export default Projetos;