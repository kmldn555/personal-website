function SkilssSection() {
  return (
    <div id="skills" className="bg-[#F2F3FF] scroll-mt-16">
      <div className="container h-full mx-auto justify-between items-center py-8 px-6 ">
        <div className="text-[11px] bg-[#C9E6FF] w-fit py-1 px-2.5 rounded-md font-bold text-[#2563EB] flex gap-2">
          <img src="IconCapabilities.svg" alt="IconCapabilities" />
          CAPABILITIES
        </div>
        <div>
          <div className="text-[28px] font-bold">Technical Expertise</div>
          <div className="text-[16px]">
            Production tools and battle-tested technologies I leverage to build
            mission-critical systems.
          </div>
        </div>
        <div className="md:grid md:grid-cols-4 gap-2">
          <div className="bg-white my-2 px-4 py-2 shadow-lg rounded-xl">
            <div className="flex gap-2 items-center">
              <img src="IconFrontend.svg" alt="IconFrontend" className="" />
              <div className="font-bold text-[20px]">Frontend Architecture</div>
            </div>
            <div className="text-[14px] pl-1">
              Building accessible, pixel-perfect, responsive client interfaces.
            </div>
            <div className="flex flex-wrap w-fit gap-2 my-2 text-[13px] pl-1">
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                React
              </div>
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                Next.js
              </div>
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                TypeScript
              </div>
              <div className="bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                Tailwind
              </div>
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                HTML5
              </div>
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                JavaScript
              </div>
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                Zustand
              </div>
            </div>
          </div>
          <div className="bg-white my-2 px-4 py-2 shadow-lg rounded-xl">
            <div className="flex gap-2 items-center">
              <img src="IconBackend.svg" alt="IconBackend" className="" />
              <div className="font-bold text-[20px]">Backend & APIs</div>
            </div>
            <div className=" text-[14px] pl-1">
              Engineering high-throughput, secure, and documented service APIs.
            </div>
            <div className="flex flex-wrap w-fit gap-2 my-2 text-[13px] pl-1">
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                Node.js
              </div>
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                Express.js
              </div>
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                NestJS
              </div>
              <div className="bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                GraphQL
              </div>
            </div>
          </div>
          <div className="bg-white my-2 px-4 py-2 shadow-lg rounded-xl">
            <div className="flex gap-2 items-center">
              <img src="IconData.svg" alt="IconDatabase" className="" />
              <div className="font-bold text-[20px]">Data & Storage</div>
            </div>
            <div className=" text-[14px] pl-1">
              Designing optimized schemas, indexes, and distributed caches.{" "}
            </div>
            <div className="flex flex-wrap w-fit gap-2 my-2 text-[13px] pl-1">
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                PostgreSQL
              </div>
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                MongoDB
              </div>
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                Redis
              </div>
              <div className="bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                Supabase
              </div>
            </div>
          </div>
          <div className="bg-white my-2 px-4 py-2 shadow-lg rounded-xl">
            <div className="flex gap-2 items-center">
              <img src="IconDevOps.svg" alt="IconDevOps" className="" />
              <div className="font-bold text-[20px]">Tools & DevOps</div>
            </div>
            <div className=" text-[14px] pl-1">
              Automating builds, container deployment, and continuous testing.
            </div>
            <div className="flex flex-wrap w-fit gap-2 my-2 text-[13px] pl-1">
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                Docker
              </div>
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                Git
              </div>
              <div className=" bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                GitHub
              </div>
              <div className="bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                Vercel
              </div>
              <div className="bg-[#E2E7FF] shadow-sm rounded-sm grid justify-items-center px-2">
                Vite
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkilssSection;
