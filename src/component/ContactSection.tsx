import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ContactSection() {
  return (
    <div id="contact" className="bg-[#FAF8FF] scroll-mt-16">
      <div className="container h-full mx-auto justify-between items-center py-8 px-6  md:grid md:grid-cols-2 md:gap-6 md:items-start ">
        <div className="">
          <div className="text-[11px] bg-[#C9E6FF] w-fit py-1 px-2.5 rounded-md font-bold text-[#2563EB] flex gap-2">
            <img src="IconGetInTouch.svg" alt="IconGetInTouch" />
            GET IN TOUCH
          </div>
          <div className="mt-1 font-bold text-[28px]">
            Let's build something exceptional together.
          </div>
          <div className="text-[16px]">
            Have an upcoming product launch, complex architectural challenge, or
            full-time opportunity? Drop a note and I will get back to you within
            24 hours.
          </div>

          <div className="flex flex-row gap-2 mt-6 items-start">
            <div className=" font-bold p-3 bg-[#DBE1FF] rounded-full text-[#2563EB] tex-[14px]">
              <img src="IconEmail.svg" alt="IconEmail" />
            </div>
            <div>
              <div className="text-[14px] font-bold">Direct Email</div>
              <div className="text-[14px]">kmldnhmd@gmail.com</div>
            </div>
          </div>

          <div className="flex flex-row gap-2 mt-6 items-start">
            <div className=" font-bold p-3 bg-[#DBE1FF] rounded-full text-[#2563EB] tex-[14px] justify-items-center">
              <img src="IconTimeZone.svg" alt="IconTimeZone" />
            </div>
            <div>
              <div className="text-[14px] font-bold">
                Timezone & Availability
              </div>
              <div className="text-[16px]">UTC+7/ Open to Global Remote</div>
            </div>
          </div>

          <div className="flex flex-wrap w-fit gap-2 my-2 text-[13px] pl-1 mt-6">
            <div className=" bg-[#E2E7FF] shadow-sm rounded-sm px-2 flex items-center gap-2 hover:bg-[#C9E6FF]">
              <img
                src="IconGitHub1.svg"
                alt="IconGitHub"
                className="h-3.25 w-3.25"
              />
              Github
            </div>
            <div className=" bg-[#E2E7FF] shadow-sm rounded-sm px-2 flex items-center gap-2 hover:bg-[#C9E6FF]">
              <img
                src="IconLinkedIn.svg"
                alt="IconLinkedIn"
                className="h-3.25 w-3.25"
              />
              LinkedIn
            </div>
            <div className=" bg-[#E2E7FF] shadow-sm rounded-sm px-2 flex items-center gap-2 hover:bg-[#C9E6FF]">
              <img src="IconX.svg" alt="IconX" className="h-3.25 w-3.25" />
              X/Twitter
            </div>
          </div>
        </div>
        {/* Container Message */}
        <div className=" flex flex-col p-4 md:mt-0 mt-4 rounded-sm shadow-sm/50 gap-4">
          <div>
            <div className="text-[13px]">Your Name</div>
            <Input
              className="text-[16px] bg-gray-200 rounded-sm p-3.5 text-gray-500 h-10"
              placeholder="e.g. Budi Santoso"
            />
          </div>
          <div>
            <div className="text-[13px]">Email Address</div>
            <Input
              className="text-[16px] bg-gray-200 rounded-sm p-3.5 text-gray-500 h-10"
              placeholder="Budi@company.com"
            />
          </div>
          <div>
            <div className="text-[13px]">Project Scope / Inquiries</div>
            <Input
              className="text-[16px] bg-gray-200 rounded-sm p-3.5 text-gray-500 h-10"
              placeholder="Full-stack SaaS Architecture"
            />
          </div>
          <div>
            <div className="text-[13px]">Message</div>
            <Textarea
              className="text-[16px] bg-gray-200 rounded-sm p-3.5 text-gray-500 h-20"
              placeholder="Tell me about your product vision, timeline, and tech stack..."
            />
          </div>
          <Button
            variant="outline"
            onClick={() => {
              alert(
                "Thanks for reaching out! The contact form is currently under development. Please feel free to reach out via email for now.",
              );
            }}
            className="bg-[#2563EB] text-white border-0 hover:text-white hover:bg-blue-400"
          >
            <img src="IconSendMessage.svg" alt="IconSendMessage" />
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
