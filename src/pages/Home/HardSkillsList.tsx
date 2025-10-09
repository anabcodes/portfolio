function HardSkillsList(){

    const skills = [
        {
            title: "Desenvolvimento Front-end",
            description: "No estágio, criei interfaces ricas, responsivas e centradas no usuário, com componentização avançada, gerenciamento de estado, performance otimizada e integração com APIs. Também implementei testes unitários e de integração usando bibliotecas do React, garantindo qualidade e confiabilidade do código. (Tecnologias: React, HTML, CSS, Tailwind, JavaScript/TypeScript, Jest, React Testing Library)"
        },
        {
            title: "Desenvolvimento Back-end",
            description: "Desenvolvi projetos pessoais com back-end completo, criando APIs RESTful escaláveis, implementando lógica de negócios, autenticação e autorização seguras, definindo DTOs e gerenciando dados com eficiência, aplicando boas práticas de arquitetura e manutenção. (Tecnologias: Node.js, Express.js, Fastify, Prisma, Sequelize)"
        },
        {
            title: "Computação em Nuvem (AWS)",
            description: "Com certificação AWS Certified Cloud Practitioner, apliquei conceitos de nuvem no estágio, entendendo escalabilidade, elasticidade, responsabilidade compartilhada e arquitetura AWS, incluindo regiões, zonas de disponibilidade e edge locations."
        },
        {
            title: "Banco de Dados",
            description: "Em projetos pessoais, modelei e normalizei dados relacionais, criei consultas eficientes, índices e transações para garantir integridade, consistência e performance. (Tecnologias: PostgreSQL, SQLite, MariaDB, MySQL)"
        },
        {
            title: "UI/UX",
            description: "Atuei na prática em projetos universitários, participando de todas as etapas do UX: pesquisa, personas, prototipagem e testes com usuários, além do design de interfaces intuitivas e responsivas, sempre alinhando necessidades do usuário com implementação front-end. (Ferramentas: Figma)"
        },
        {
            title: "Descoberta de Produto",
            description: "No projeto de extensão da universidade, participei da descoberta de produto aplicando Lean Inception, benchmarking, validação de hipóteses e prototipagem rápida, garantindo que as soluções desenvolvidas entregassem valor real aos usuários. (Ferramentas: Miro, prototipagem rápida, Lean Inception)"
        },
        {
            title: "Metodologias Ágeis",
            description: "Atuei em projetos e no estágio em ambientes que aplicavam Scrum e Kanban, participando de sprints, planning, daily stand-ups e retrospectives, colaborando em entregas contínuas e alinhamento entre equipes multidisciplinares. (Ferramentas: Jira, Trello)"
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
                        className="px-10"
                        style={{ direction: "ltr" }}
                    >
                        <h3 className="text-xl font-bold mb-1">{skill.title}</h3>
                        <p className="text-gray-700 text-sm">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default HardSkillsList