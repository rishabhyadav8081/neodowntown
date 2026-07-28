import {
    FiCheckCircle,
    FiTrendingUp,
    FiMapPin,
    FiHome,
    FiAward,
    FiShield,
  } from "react-icons/fi";
  
  const features = [
    {
      icon: <FiMapPin size={22} />,
      title: "Prime Address",
      description:
        "Strategically located beside Phoenix Palassio in Gomti Nagar Extension.",
    },
    {
      icon: <FiTrendingUp size={22} />,
      title: "High Appreciation",
      description:
        "One of Lucknow's fastest-growing commercial investment destinations.",
    },
    {
      icon: <FiHome size={22} />,
      title: "Retail + Office",
      description:
        "A perfect blend of premium retail shops and Grade-A office spaces.",
    },
    {
      icon: <FiAward size={22} />,
      title: "Luxury Design",
      description:
        "Modern architecture with elegant façade and premium interiors.",
    },
    {
      icon: <FiShield size={22} />,
      title: "Trusted Development",
      description:
        "Developed with quality construction and RERA registered for transparency.",
    },
    {
      icon: <FiCheckCircle size={22} />,
      title: "Future Ready",
      description:
        "Smart commercial infrastructure designed for tomorrow's businesses.",
    },
  ];
  
  export default function About() {
    return (
      <section
        id="about"
        className="py-2 bg-[#faf8f5]"
      >
        <div className="max-w-7xl mx-auto px-6">
  
          <div className="grid lg:grid-cols-2 gap-20 items-center ">
  
            {/* LEFT IMAGE */}
  
            <div className="relative  h-full ">
  
              <img
                src="https://ardianeodowntown.com/img/gal1-1400w.jpg"
                alt="Neo Downtown"
                className="rounded-[30px] shadow-2xl object-cover"
              />
  
              {/* Floating Card */}
  
              <div className="absolute bottom-8 left-8 bg-white rounded-3xl shadow-xl p-6 max-w-xs">
  
                <p className="uppercase text-xs tracking-[4px] text-[#B58A45]">
                  Premium Commercial
                </p>
  
                <h3 className="text-2xl font-bold mt-2">
                  Neo Downtown
                </h3>
  
                <p className="text-gray-500 mt-3 leading-7">
                  Designed to become Lucknow's next landmark business destination.
                </p>
  
              </div>
  
            </div>
  
            {/* RIGHT CONTENT */}
  
            <div className="">
  
              <p className="uppercase tracking-[5px] text-[#B58A45] font-semibold">
                About The Project
              </p>
  
              <h2 className="mt-4 text-5xl font-serif leading-tight text-gray-900">
                A Destination Where
                <span className="text-[#B58A45]">
                  {" "}Business Meets Luxury
                </span>
              </h2>
  
              <p className="mt-8 text-gray-600 leading-8 text-lg">
                Neo Downtown is envisioned as a premium commercial destination
                offering high-street retail and modern office spaces in one of
                Lucknow's most sought-after business corridors. Designed with
                contemporary architecture, spacious layouts, and world-class
                infrastructure, it provides an ideal environment for businesses,
                brands, entrepreneurs, and investors.
              </p>
  
              <p className="mt-6 text-gray-600 leading-8">
                Located adjacent to Phoenix Palassio, the project enjoys
                exceptional visibility, seamless connectivity, and access to a
                thriving commercial ecosystem, making it an excellent opportunity
                for long-term growth and investment.
              </p>
  
              {/* Highlights */}
  
              <div className="grid sm:grid-cols-2 gap-5 mt-12">
  
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#B58A45]" />
                  <span>Premium Retail Spaces</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#B58A45]" />
                  <span>Modern Office Spaces</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#B58A45]" />
                  <span>High Visibility Location</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#B58A45]" />
                  <span>Excellent Investment Potential</span>
                </div>
  
              </div>
  
            </div>
  
          </div>
  
          {/* FEATURE GRID */}
  {/* Features */}

<div className="mt-20">

{/* Mobile Scroll */}

<div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">

  {features.map((feature, index) => (

    <div
      key={index}
      className="snap-center shrink-0 w-[68%] bg-white rounded-2xl border border-gray-200 p-5 shadow-sm"
    >

      <div className="w-12 h-12 rounded-xl bg-[#B58A45]/10 flex items-center justify-center text-[#B58A45]">

        {feature.icon}

      </div>

      <h3 className="mt-4 text-base font-semibold text-gray-900">
        {feature.title}
      </h3>

      <p className="mt-2 text-sm text-gray-500 leading-6">
        {feature.description}
      </p>

    </div>

  ))}

</div>

{/* Desktop */}

<div className="hidden lg:grid lg:grid-cols-6 gap-4">

  {features.map((feature, index) => (

    <div
      key={index}
      className="group bg-white rounded-2xl border border-gray-200 p-5 text-center hover:border-[#B58A45] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >

      <div className="mx-auto w-12 h-12 rounded-xl bg-[#B58A45]/10 flex items-center justify-center text-[#B58A45] group-hover:bg-[#B58A45] group-hover:text-white transition">

        {feature.icon}

      </div>

      <h3 className="mt-4 text-base font-semibold text-gray-900 leading-5">
        {feature.title}
      </h3>

      <p className="mt-2 text-xs text-gray-500 leading-5">
        {feature.description}
      </p>

    </div>

  ))}

</div>

</div>
  
        </div>
      </section>
    );
  }