import ContentSection from "../../layouts/ContentSection";
import Carrossel from "./Carrossel";
import HardSkillsList from "./HardSkillsList";

function HardSkills(){
    return(
        <ContentSection>
            <section className="flex flex-col gap-20 md:gap-5 md:flex-row">
                <HardSkillsList/>
                <Carrossel/>
            </section>
        </ContentSection>
    )
}

export default HardSkills;