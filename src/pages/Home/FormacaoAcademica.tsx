import ContentSection from "../../layouts/ContentSection";

function FormacaoAcademica() {
  return (
    <>
      <ContentSection
        title="Formação Acadêmica"
        subtitle="Sistemas de Informação na Universidade Federal de Mato Grosso do Sul, cursando o 6º de 8 semestres"
      >
        <section className="flex flex-col gap-5">
          <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-4">
            <div className="bg-[#E6E9FF] p-10 rounded-2xl flex flex-col gap-2 justify-center">
              <p className="font-semibold">Sistemas de informação</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                modi ratione ad quas alias non sunt, velit hic, impedit
                accusantium voluptatum aliquam accusamus dolorem debitis
                eligendi minima veniam molestias officiis.
              </p>
            </div>
            <img
              className="object-cover bg-neutral-200 h-full aspect-video rounded-2xl"
              src="assets/images/membros-mega-junior.jpg"
              alt=""
            />
            <div className="bg-[#D2FFB0] p-10 rounded-2xl flex flex-col gap-2 justify-center">
              <p className="font-semibold">Sistemas de informação</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                modi ratione ad quas alias non sunt, velit hic, impedit
                accusantium voluptatum aliquam accusamus dolorem debitis
                eligendi minima veniam molestias officiis.
              </p>
            </div>
            <img
              className="object-cover bg-neutral-200 h-full aspect-video rounded-2xl"
              src="assets/images/pantanal-dev-com-ufms.jpg"
              alt=""
            />
            <div className="bg-[#EFCEFF] p-10 rounded-2xl flex flex-col gap-2 justify-center">
              <p className="font-semibold">Sistemas de informação</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                modi ratione ad quas alias non sunt, velit hic, impedit
                accusantium voluptatum aliquam accusamus dolorem debitis
                eligendi minima veniam molestias officiis.
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
