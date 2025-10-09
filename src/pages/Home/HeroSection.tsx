import TextoDestaque from "../../components/ui/TextoDestaque";
import ContentSection from "../../layouts/ContentSection";

function HeroSection(){
    return(
        <>
        <ContentSection>
            <section className="flex flex-col justify-center items-center md:gap-3 gap-5">
                <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-center">ANA BRAGHIM</h1>
                <img className="w-60 h-60 rounded-full bg-neutral-200 object-cover" src="assets/images/ana-braghim.jpg" alt="" />
                <TextoDestaque texto="Front-End & Back-End • UI/UX • Cloud Computing"/>
                <p className="text-center">Crio softwares que unem experiência do usuário, qualidade e boas práticas de engenharia.</p>
            </section>
        </ContentSection>
        </>
    )
}

export default HeroSection;