import ContentSection from "../../layouts/ContentSection";

function Experiencias() {
  return (
    <>
      <ContentSection title="Experiências">
        <section className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-4 p-10 rounded-2xl bg-radial from-[#BFC5FC] to-[#E6E9FF]">
            <img
              className="h-20 w-20 rounded-2xl object-contain"
              src="assets/empresas/compass-uol.png"
              alt=""
            />
            <div className="w-full md:w-9/10 flex flex-col gap-5">
              <h3 className="text-2xl md:text-3xl font-medium">Compass UOL</h3>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Cargo X</p>
                  <p className="text-neutral-500 text-[13px]">Período</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus similique, voluptate culpa nulla iusto corrupti
                    distinctio illo obcaecati illum ipsa inventore alias
                    suscipit, sapiente eaque perspiciatis rerum laboriosam
                    soluta ducimus!
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Cargo X</p>
                  <p className="text-neutral-500 text-[13px]">Período</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus similique, voluptate culpa nulla iusto corrupti
                    distinctio illo obcaecati illum ipsa inventore alias
                    suscipit, sapiente eaque perspiciatis rerum laboriosam
                    soluta ducimus!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 p-10 rounded-2xl bg-radial from-[#D4FFB2] to-[#EFFFE2]">
            <img
              className="h-20 w-20 rounded-2xl object-contain"
              src="assets/empresas/mega-jr.svg"
              alt=""
            />
            <div className="w-full md:w-9/10 flex flex-col gap-5">
              <h3 className="text-2xl md:text-3xl font-medium">Mega Júnior</h3>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Cargo X</p>
                  <p className="text-neutral-500 text-[13px]">Período</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus similique, voluptate culpa nulla iusto corrupti
                    distinctio illo obcaecati illum ipsa inventore alias
                    suscipit, sapiente eaque perspiciatis rerum laboriosam
                    soluta ducimus!
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Cargo X</p>
                  <p className="text-neutral-500 text-[13px]">Período</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus similique, voluptate culpa nulla iusto corrupti
                    distinctio illo obcaecati illum ipsa inventore alias
                    suscipit, sapiente eaque perspiciatis rerum laboriosam
                    soluta ducimus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentSection>
    </>
  );
}

export default Experiencias;
