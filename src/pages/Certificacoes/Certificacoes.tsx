import ContentSection from "../../layouts/ContentSection";

function Certificados(){
    return(
        <>
        <ContentSection title="CERTIFICAÇÕES">
        <section className="flex flex-col gap-5">
            <div className="w-full">
                <div className="flex flex-col md:flex-row w-full border-1 rounded-2xl border-neutral-300 p-3 gap-3 ">
                    <img className="bg-[#242f3e] h-60 aspect-video rounded-2xl object-contain object-left" src="assets/certificados/cloud-practitioner.jpg" alt="" />
                    <div className="flex flex-col gap-1 justify-center">
                        <p className="text-2xl text-purple-500 font-bold">AWS Certified Cloud Practitioner</p>
                        <p className="text-neutral-500 font-semibold text-[16px]">Amazon Web Services (AWS)</p>
                        <p>Certificação que comprova conhecimento fundamental em computação em nuvem, incluindo serviços da AWS, arquitetura de nuvem, escalabilidade, segurança e responsabilidade compartilhada, garantindo compreensão sólida de conceitos essenciais de infraestrutura na nuvem.</p>
                    </div>
                </div>
            </div>

            
        </section>
        </ContentSection>
        </>
    )
}

export default Certificados;