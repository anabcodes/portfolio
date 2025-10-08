import ContentSection from "../../layouts/ContentSection";
import Projeto from "./Projeto";
import type { ImagemProjeto } from "../../types/projeto";
import { imagens } from "../../data/projetos/projeto-1";

const imagensProjetos: ImagemProjeto[] = imagens;

function Projetos(){
    return(
        <>
        <ContentSection title="PROJETOS">
            <section className="flex flex-col gap-20 md:gap-40">
                <Projeto dadosImagens={imagensProjetos} titulo="Projeto 1" descricao="Ana Julia de Lima Braghim Ana Julia de Lima Braghim Ana Julia de Lima Braghim Ana Julia de Lima Braghim Ana Julia de Lima Braghim Ana Julia de Lima Braghim Ana Julia de Lima Braghim Ana Julia de Lima Braghim Ana Julia"/>
                <Projeto dadosImagens={imagensProjetos} titulo="Projeto 1" descricao="Ana Julia de Lima Braghim"/>
            </section>
        </ContentSection>
        </>
    )
}

export default Projetos;