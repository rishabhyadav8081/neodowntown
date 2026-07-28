import {
    HiOutlineBuildingOffice2,
    HiOutlineShieldCheck,
    HiOutlineMapPin,
    HiOutlineCalendarDays,
  } from "react-icons/hi2";
  
  const highlights = [
    {
      title: "G+8",
      subtitle: "Floors",
      icon: HiOutlineBuildingOffice2,
    },
    {
      title: "RERA",
      subtitle: "Approved",
      icon: HiOutlineShieldCheck,
    },
    {
      title: "Prime",
      subtitle: "Location",
      icon: HiOutlineMapPin,
    },
    {
      title: "2030",
      subtitle: "Possession",
      icon: HiOutlineCalendarDays,
    },
  ];
  
  export default function ImportantNote() {
    return (
      <div className="mt-14 max-w-xl">
  
        <div className="rounded-2xl border border-[#D6B06A]/30 bg-white/10 backdrop-blur-xl p-5 shadow-lg">
  
          {/* Header */}
          <div className="flex items-center gap-2 text-[#D6B06A] text-sm tracking-widest uppercase">
            <span className="h-2 w-2 rounded-full bg-[#D6B06A]" />
            Important Note
          </div>
  
          {/* Content */}
          <p className="mt-3 text-sm text-white/80 leading-relaxed">
            Prices are subject to availability and may change without prior notice.
            RERA registration details and approvals are available on request.
          </p>
  
        </div>
  
      </div>
    );
  }