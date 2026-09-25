function AboutMeSection() {
  return (
    <div id="about" className="bg-[#FAF8FF] scroll-mt-16">
      <div className="container h-full mx-auto justify-between items-center py-8 px-6 ">
        <div className="text-[11px] bg-[#C9E6FF] w-fit py-1 px-2.5 rounded-md font-bold text-[#2563EB] flex gap-2">
          <img src="IconAboutMe.svg" alt="IconAboutMe" />
          ABOUT ME
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-6 md:items-start">
          <div>
            <div className="mt-1 pb-4 font-bold text-[28px]">
              Bridging technical precision with human-centric interfaces
            </div>

            {/* container text */}
            <div className="text-[16px]">
              <div className="pb-2">
                Im a software engineer focused on building reliable web
                applications and responsive digital experiences. I enjoy turning
                complex problems into simple, scalable, and user-friendly
                solutions.
              </div>
              <div className="pb-2 ">
                I also value teamwork, automated testing, and clear API design
                to help teams work efficiently and build better products
                together.
              </div>
              <div className="pb-2">
                Beyond shipping features, I place deep emphasis on developer
                empathy, comprehensive automated testing, and establishing clean
                API contracts that empower cross-functional teams to iterate
                without blockers.
              </div>
            </div>
          </div>
          {/* container principal */}
          <div className=" flex flex-col gap-2">
            <div className="bg-white shadow-md/10 rounded-xl flex flex-row px-4 py-3 gap-2">
              <img src="IconCleanCode.svg" alt="Icon Clean" className="" />
              <div>
                <div className="font-semibold text-5">Clean Code & Rigor</div>
                <div className="text-[14px]">
                  Strict typing, modular separation of concerns, and automated
                  tests to guarantee reliability.
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md/10 rounded-xl flex flex-row px-4 py-3 gap-2">
              <img
                src="IconScalable.svg"
                alt="Icon Scalable"
                className="w-10 h-10"
              />
              <div>
                <div className="font-semibold text-5">
                  Scalable Architecture
                </div>
                <div className="text-[14px]">
                  Microservices, event-driven streaming, caching layers, and
                  decoupled edge computations.
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md/10 rounded-xl flex flex-row px-4 py-3 gap-2">
              <img
                src="IconEmpathetic.svg"
                alt="Icon Empathetic"
                className=""
              />
              <div>
                <div className="font-semibold text-5">
                  Empathetic Communication
                </div>
                <div className="text-[14px]">
                  Clear documentation, productive code reviews, and proactive
                  alignment with design & product.
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md/10 rounded-xl flex flex-row px-4 py-3 gap-2">
              <img src="IconContinous.svg" alt="Icon Continous" className="" />
              <div>
                <div className="font-semibold text-5">Continuous Evolution</div>
                <div className="text-[14px]">
                  Constantly evaluating modern frontend ecosystems, serverless
                  paradigms, and runtime standards.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
