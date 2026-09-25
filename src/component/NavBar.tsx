import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

function Navbar() {

const [open, setOpen] = useState(false)
const toogleSheet = () => {
  setOpen(!open)
}

  return (
    <div className="flex container h-full mx-auto justify-between items-center px-6 bg-white">
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <Sheet open={open}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="border-transparent"
                  onClick={toogleSheet}
                >
                  <Menu />
                </Button>
              }
            />
            <SheetContent
              side="left"
              showCloseButton={false}
              className="w-70 p-0"
            >
              {/* Menu Burger */}
              <SheetHeader className="border-b gap-0 pl-3 py-2">
                <SheetTitle className="text-[16px]">Menu</SheetTitle>
                <SheetDescription>
                  Navigate through the website.
                </SheetDescription>
              </SheetHeader>

              {/* Navigation Burger */}
              <nav className="flex flex-col gap-4 p-3">
                <a onClick={toogleSheet} href="#about" className="text-[16px]">
                  About
                </a>
                <a  onClick={toogleSheet} href="#skills" className="text-[16px]">
                  Skills
                </a>
                <a onClick={toogleSheet} href="#experience" className="text-[16px]">
                  Experiences
                </a>
                <a onClick={toogleSheet} href="#work" className="text-[16px]">
                  Work
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div
          className="bg-[#E2E7FF] py-1 px-2 rounded-lg flex gap-2
        "
        >
          <img src="IconFullStack.svg" alt="IconFullStack" />
          <p className="font-bold">Full-Stack-Dev</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-6 text-[16px] font-bold">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experiences</a>
        <a href="#work">Work</a>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="bg-[#2563EB] text-white border-0 hover:text-white hover:bg-blue-400"
        >
          <a href="#contact">Lets Talk</a>
        </Button>
        <div className="items-center">
          <img src="ImageForIcon.jpeg" alt="" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
