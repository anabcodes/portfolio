function HardSkillsList(){

    const skills = [
        {
        title: "React",
        subtitle: "Front-end",
        description: "Desenvolvimento de interfaces modernas, responsivas e performáticas."
        },
        {
        title: "Node.js",
        subtitle: "Back-end",
        description: "Criação de APIs, integração com bancos de dados e lógica de servidor."
        },
        {
        title: "TypeScript",
        subtitle: "Tipagem",
        description: "Escrita de código mais seguro e escalável com tipagem estática."
        },
        {
        title: "TypeScript",
        subtitle: "Tipagem",
        description: "Escrita de código mais seguro e escalável com tipagem estática."
        },
        {
        title: "TypeScript",
        subtitle: "Tipagem",
        description: "Escrita de código mais seguro e escalável com tipagem estática."
        },
        {
        title: "TypeScript",
        subtitle: "Tipagem",
        description: "Escrita de código mais seguro e escalável com tipagem estática."
        },
    ];

    return(
        <>
        <section className="flex flex-col gap-10 w-full md:w-1/2 h-[600px] ">
            <h1 className="text-4xl md:text-6xl font-bold text-center md:text-start">Hard Skills</h1>
            <div className="flex flex-col overflow-y-auto py-4  scrollbar-thin scrollbar-track-neutral-200 gap-8 scrollbar-thumb-purple-400 h-full" style={{ direction: "rtl" }}>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="pl-10"
                        style={{ direction: "ltr" }}
                    >
                        <h3 className="text-xl font-bold mb-1">{skill.title}</h3>
                        <h4 className="text-md text-gray-500 mb-3">{skill.subtitle}</h4>
                        <p className="text-gray-700 text-sm">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default HardSkillsList