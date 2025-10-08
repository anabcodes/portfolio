import FormacaoAcademica from "./FormacaoAcademica";
import Experiencias from "./Experiencias";
import HeroSection from "./HeroSection";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";

function Home(){
    return(
        <>
        <section>
            <HeroSection/>
            <SoftSkills/>
            <HardSkills/>
            <FormacaoAcademica/>
            <Experiencias/>
        </section>
        </>
    )
}

export default Home;