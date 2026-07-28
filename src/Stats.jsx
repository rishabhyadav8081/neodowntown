import {
  FiLayers,
  FiMapPin,
  FiBriefcase,
  FiCalendar,
  FiTrendingUp,
  FiShield,
} from "react-icons/fi";

const stats = [
  {
    icon: <FiLayers size={32} />,
    value: "8",
    suffix: "+",
    title: "Floors",
    subtitle: "Premium Commercial Tower",
  },
  {
    icon: <FiBriefcase size={32} />,
    value: "2",
    title: "Commercial Segments",
    subtitle: "Retail & Office Spaces",
  },
  {
    icon: <FiMapPin size={32} />,
    value: "1",
    title: "Prime Location",
    subtitle: "Adjacent to Phoenix Palassio",
  },
  {
    icon: <FiTrendingUp size={32} />,
    value: "25000",
    prefix: "₹",
    suffix: "/sq.ft",
    title: "Retail Pricing",
    subtitle: "Ground Floor",
  },
  {
    icon: <FiCalendar size={32} />,
    value: "2030",
    title: "Possession",
    subtitle: "Expected Delivery",
  },
  {
    icon: <FiShield size={32} />,
    value: "100",
    suffix: "%",
    title: "RERA Registered",
    subtitle: "Investment Security",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#B58A45] text-sm font-semibold">
            Project Highlights
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 leading-tight">
            Numbers That Speak
            <span className="text-[#B58A45]"> Excellence</span>
          </h2>

          <p className="mt-5 text-gray-600 text-sm md:text-base leading-7">
            Neo Downtown combines premium architecture, strategic location and
            excellent investment opportunities in the heart of Lucknow.
          </p>

        </div>
        {/* Stats */}

        {/* Mobile - Horizontal Scroll */}
        <div className="md:hidden mt-14 -mx-5 px-5 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 w-max pb-2">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group w-40 h-40 flex-shrink-0 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:border-[#B58A45] hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#B58A45]/10 text-[#B58A45] flex items-center justify-center group-hover:bg-[#B58A45] group-hover:text-white transition">
                  {item.icon}
                </div>

                {/* Number */}
                <div className="mt-3 flex items-end justify-center">
                  {item.prefix && (
                    <span className="text-base font-bold text-[#B58A45] mr-1">
                      {item.prefix}
                    </span>
                  )}

                  <span className="text-2xl font-bold text-gray-900 leading-none">
                    {item.value}
                  </span>

                  {item.suffix && (
                    <span className="text-sm font-semibold text-[#B58A45] ml-1">
                      {item.suffix}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-3 text-sm font-semibold text-gray-900 leading-5">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-1 text-[11px] text-gray-500 leading-4">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop */}
        <div className="hidden md:grid grid-cols-3 xl:grid-cols-6 gap-5 mt-14">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-5 text-center hover:border-[#B58A45] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="mx-auto w-14 h-14 rounded-xl bg-[#B58A45]/10 text-[#B58A45] flex items-center justify-center group-hover:bg-[#B58A45] group-hover:text-white transition">
                {item.icon}
              </div>

              {/* Number */}
              <div className="mt-5 flex justify-center items-end">
                {item.prefix && (
                  <span className="text-xl font-bold text-[#B58A45] mr-1">
                    {item.prefix}
                  </span>
                )}

                <span className="text-4xl font-bold text-gray-900 leading-none">
                  {item.value}
                </span>

                {item.suffix && (
                  <span className="text-base text-[#B58A45] font-semibold ml-1">
                    {item.suffix}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-2 text-sm text-gray-500">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}