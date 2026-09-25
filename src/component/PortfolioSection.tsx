import { Button } from "@/components/ui/button";

function PortfolioSection() {
  return (
    <div id="work" className="bg-[#FAF8FF] scroll-mt-16">
      <div className="container h-full mx-auto justify-between items-center py-8 px-6 ">
        <div className="text-[11px] bg-[#C9E6FF] w-fit py-1 px-2.5 rounded-md font-bold text-[#2563EB] flex gap-2">
          <img src="IconWork.svg" alt="IconWork" />
          PORTFOLIO
        </div>
        <div className="mt-1 font-bold text-[28px]">Selected Work</div>
        <div className="text-[16px]">
          Projects demonstrating end-to-end execution, robust system
          architecture, and polished user interactions.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {/* 1 */}
          <div className="flex flex-col h-full my-2 rounded-xl shadow-sm/50">
            <div className="h-48 overflow-hidden rounded-t-xl">
              <img
                src="ImageTaskFlow.svg"
                alt="ImageTaskFlow"
                className="rounded-t-xl w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 p-4">
              <div className="text-[11px] font-bold text-[#2563EB]">
                FULL STACK WEB APPLICATION
              </div>
              <div className="text-[20px] font-bold">
                TaskFlow — Task Management App
              </div>
              <div className="text-[16px]">
                A task management application that helps individuals organize
                daily tasks, manage priorities, and track task progress.
              </div>
              <div className="flex flex-wrap gap-2 text-[14px]">
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  React
                </div>
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  TypeScript
                </div>
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  Node.js
                </div>
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  Express
                </div>
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  PostgreSQL
                </div>
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  Tailwind CSS
                </div>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-2 mt-auto">
                <Button
                  onClick={() =>
                    alert(
                      "This feature is still under development. Thanks for your patience!",
                    )
                  }
                  className="bg-[#2563EB] hover:bg-blue-400 flex gap-2"
                >
                  View Case Study
                  <img src="IconView.svg" alt="IconView" />
                </Button>
                <Button
                  onClick={() =>
                    alert(
                      "This feature is still under development. Thanks for your patience!",
                    )
                  }
                  className="bg-[#FFFFFF] shadow-sm text-[#131B2E] hover:bg-gray-200 flex gap-2"
                >
                  <img src="IconGitHub.svg" alt="IconGitHub" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col h-full my-2 rounded-xl shadow-sm/50">
            <div className="h-48 overflow-hidden rounded-t-xl">
              <img
                src="ImageShopLite.svg"
                alt="ImageShopLite"
                className="rounded-t-xl w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 p-4">
              <div className="text-[11px] font-bold text-[#2563EB]">
                FRONTEND WEB APPLICATION
              </div>
              <div className="text-[20px] font-bold">
                ShopLite — E-commerce Website{" "}
              </div>
              <div className="text-[16px]">
                A simple e-commerce website that allows users to browse
                products, view product details, and manage items in a shopping
                cart.{" "}
              </div>
              <div className="flex flex-wrap gap-2 text-[14px]">
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  React
                </div>
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  TypeScript
                </div>
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  Tailwind CSS{" "}
                </div>
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  React Router{" "}
                </div>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-2 mt-auto">
                <Button
                  onClick={() =>
                    alert(
                      "This feature is still under development. Thanks for your patience!",
                    )
                  }
                  className="bg-[#2563EB] hover:bg-blue-400 flex gap-2"
                >
                  View Case Study
                  <img src="IconView.svg" alt="IconView" />
                </Button>
                <Button
                  onClick={() =>
                    alert(
                      "This feature is still under development. Thanks for your patience!",
                    )
                  }
                  className="bg-[#FFFFFF] shadow-sm text-[#131B2E] hover:bg-gray-200 flex gap-2"
                >
                  <img src="IconGitHub.svg" alt="IconGitHub" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col h-full my-2 rounded-xl shadow-sm/50">
            <div className="h-48 overflow-hidden rounded-t-xl">
              <img
                src="ImageFitTrack.svg"
                alt="ImageFitTrack"
                className="rounded-t-xl w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 p-4">
              <div className="text-[11px] font-bold text-[#2563EB]">
                DASHBOARD WEB APPLICATION
              </div>
              <div className="text-[20px] font-bold">
                FitTrack — Fitness Activity Dashboard
              </div>
              <div className="text-[16px]">
                A fitness activity dashboard that visualizes basic workout data
                such as distance, duration, and completed activities.
              </div>
              <div className="flex flex-wrap gap-2 text-[14px]">
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  React
                </div>
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  TypeScript
                </div>
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  Recharts
                </div>
                <div className="bg-[#E2E7FF] shadow-sm/30 rounded-sm grid justify-items-center px-2">
                  Tailwind CSS
                </div>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-2 mt-auto">
                <Button
                  onClick={() =>
                    alert(
                      "This feature is still under development. Thanks for your patience!",
                    )
                  }
                  className="bg-[#2563EB] hover:bg-blue-400 flex gap-2"
                >
                  View Case Study
                  <img src="IconView.svg" alt="IconView" />
                </Button>
                <Button
                  onClick={() =>
                    alert(
                      "This feature is still under development. Thanks for your patience!",
                    )
                  }
                  className="bg-[#FFFFFF] shadow-sm text-[#131B2E] hover:bg-gray-200 flex gap-2"
                >
                  <img src="IconGitHub.svg" alt="IconGitHub" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
