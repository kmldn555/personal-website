function TestimonialSection() {
  return (
    <div className="container h-full mx-auto justify-between items-center py-8 px-6 bg-[#F2F3FF]">
      <div className="text-[11px] bg-[#C9E6FF] w-fit py-1 px-2.5 rounded-md font-bold text-[#2563EB] flex gap-2">
        <img src="IconEndorsement.svg" alt="IconEndorsement" />
        ENDORSEMENT
      </div>
      <div className="mt-1 font-bold text-[28px]">What Peers & Leaders Say</div>
      <div className="text-[16px]">
        Feedback from colleagues, engineering managers, and product partners.
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-4">
        {/* 1 */}
        <div className="flex flex-col p-4 gap-4 mt-4 rounded-xl shadow-sm/50">
          <div className="flex justify-between">
            <img src="IconEndorsement1.svg" alt="Icon99" />
            <img src="IconFiveStar.svg" alt="IconFiveStar" />
          </div>
          <div className="italic text-justify text-[16px]">
            “Kamal consistently demonstrated strong attention to detail and a
            structured approach to quality control. He was reliable in handling
            data, identifying issues, and following through with the necessary
            actions.”
          </div>
          <div className="flex flex-row gap-2">
            <div className=" font-bold p-3 bg-[#DBE1FF] rounded-full text-[#2563EB] tex-[14px]">
              KT
            </div>
            <div>
              <div className="text-[20px] font-bold">Kenji Tanaka</div>
              <div className="text-[11px]">Quality Control Supervisor</div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col p-4 gap-4 mt-4 rounded-xl shadow-sm/50">
          <div className="flex justify-between">
            <img src="IconEndorsement1.svg" alt="Icon99" />
            <img src="IconFiveStar.svg" alt="IconFiveStar" />
          </div>
          <div className="italic text-justify text-[16px]">
            “Kamal was organized and dependable in managing technical
            documentation and operational data. He worked carefully,
            communicated clearly with the team, and adapted well to new
            responsibilities.”
          </div>
          <div className="flex flex-row gap-2">
            <div className=" font-bold p-3 bg-[#DBE1FF] rounded-full text-[#2563EB] tex-[14px]">
              HN
            </div>
            <div>
              <div className="text-[20px] font-bold">Hiroshi Nakamura</div>
              <div className="text-[11px]">Laboratory Coordinator</div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="flex flex-col p-4 gap-4 mt-4 rounded-xl shadow-sm/50">
          <div className="flex justify-between">
            <img src="IconEndorsement1.svg" alt="Icon99" />
            <img src="IconFiveStar.svg" alt="IconFiveStar" />
          </div>
          <div className="italic text-justify text-[16px]">
            “Kamal showed strong problem-solving skills in a demanding
            operational environment. He was proactive in monitoring conditions,
            analyzing problems, and taking practical actions to keep daily
            operations running effectively.”
          </div>
          <div className="flex flex-row gap-2">
            <div className=" font-bold p-3 bg-[#DBE1FF] rounded-full text-[#2563EB] tex-[14px]">
              TY
            </div>
            <div>
              <div className="text-[20px] font-bold">Takashi Yamamoto,</div>
              <div className="text-[11px]">Farm Manager</div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="flex flex-col p-4 gap-4 mt-4 rounded-xl shadow-sm/50">
          <div className="flex justify-between">
            <img src="IconEndorsement1.svg" alt="Icon99" />
            <img src="IconFiveStar.svg" alt="IconFiveStar" />
          </div>
          <div className="italic text-justify text-[16px]">
            “Working with Kamal was a positive experience. He was responsible,
            willing to learn, and able to work independently while maintaining
            good communication with the team.”
          </div>
          <div className="flex flex-row gap-2">
            <div className=" font-bold p-3 bg-[#DBE1FF] rounded-full text-[#2563EB] tex-[14px]">
              DS
            </div>
            <div>
              <div className="text-[20px] font-bold">Daichi Sato</div>
              <div className="text-[11px]">Former Colleague</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
