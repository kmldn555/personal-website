import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <div className="container h-full mx-auto justify-between items-center px-6 py-6 bg-[#FAF8FF]">
      <div className="flex items-center w-fit gap-2.5 px-3.5 py-1.5 rounded-full bg-white text-black shadow-sm">
        <div className="h-2.5 w-2.5  bg-green-600 rounded-full"></div>
        <div className="text-[14px]">
          Available for new engineering opportunities
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 justify-between mt-2">
        {/* container foto */}
        <div className="flex md:order-2 justify-center">
          <img
            src="ImageForHero.png"
            alt=""
            className="rounded-lg border-8 border-white shadow-lg/40 max-h-95"
          />
        </div>

        {/* container teks */}
        <div className=" flex flex-col mt-4 md:mt-0">
          <div className="flex text-[38px] md:text-[56px] font-bold gap-3 md:justify-start justify-center">
            Hi, I'm
            <span className="text-[#2563EB] underline decoration-wavy decoration-1">
              Kamal
            </span>
          </div>
          <div className=" text-[18px] md:text-[36px] font-semibold text-center md:text-start">
            Full-Stack Web Developer
          </div>
          <div className="md:text-[18px] text-[16px] text-center md:text-start">
            Building modern, scalable, and user-focused web experiences with
            clean architecture, high precision, and maintainable production
            code.
          </div>
          <div className="flex flex-col gap-2 md:flex-row mt-4">
            <a href="#work">
              <Button
                variant="outline"
                className="bg-[#2563EB] text-white border-0 hover:text-white hover:bg-blue-400 flex gap-2 w-full"
              >
                View My Work
                <img src="IconRightArrowWhite.svg" alt="IconRightArrowWhite" />
              </Button>
            </a>
            <a href="#contact">
              <Button className="bg-[#FFFFFF] shadow-sm text-[#131B2E] hover:bg-gray-200 flex gap-2 w-full">
                Contact Me
                <img src="IconEmailBlack.svg" alt="IconEmailBlack" />
              </Button>
            </a>
          </div>
          <div className="hidden md:block md:mt-4">
            <div className="font-bold">CORE FRAMEWORKS & STACK</div>
            <div className="flex flex-wrap gap-3 mt-2 w-fit ">
              <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                React / Next.js
              </div>
              <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                Javascript
              </div>
              <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                TypeScript
              </div>
              <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                Express.js
              </div>
              <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                Node.js
              </div>
              <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                PostgreSQL
              </div>
              <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                HTML
              </div>
              <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                TailwindCSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
