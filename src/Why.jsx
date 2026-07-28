import {
  FiTrendingUp,
  FiMapPin,
  FiBriefcase,
  FiUsers,
  FiAward,
  FiArrowRight,
} from "react-icons/fi";

const reasons = [
  {
    icon: <FiMapPin size={28} />,
    title: "Prime Business Address",
    description:
      "Located beside Phoenix Palassio in Gomti Nagar Extension with excellent road connectivity.",
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: "High Growth Potential",
    description:
      "Situated in one of Lucknow's fastest-growing commercial corridors with strong appreciation prospects.",
  },
  {
    icon: <FiBriefcase size={28} />,
    title: "Retail + Office Ecosystem",
    description:
      "Designed for brands, startups, professionals and established enterprises under one roof.",
  },
  {
    icon: <FiUsers size={28} />,
    title: "High Footfall Destination",
    description:
      "Benefit from nearby residential communities and premium shopping destinations.",
  },
  {
    icon: <FiAward size={28} />,
    title: "Modern Architecture",
    description:
      "Premium façade, spacious layouts and world-class commercial infrastructure.",
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: "Long-Term Investment",
    description:
      "Ideal for investors seeking rental income and future capital appreciation.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="bg-[#111111] text-white py-24 hidden sm:block"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[6px] text-[#B58A45] font-semibold">
            Why Neo Downtown
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-serif leading-tight">
            Designed For
            <span className="text-[#B58A45]">
              {" "}Tomorrow's Business
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Neo Downtown isn't just another commercial project.
            It is envisioned as a destination where businesses,
            investors and premium brands grow together.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {reasons.map((item, index) => (

            <div
              key={index}
              className="group bg-[#1b1b1b] rounded-3xl border border-gray-800 p-8 hover:border-[#B58A45] transition-all duration-300 hover:-translate-y-2"
            >

              <div className="w-16 h-16 rounded-2xl bg-[#B58A45]/10 text-[#B58A45] flex items-center justify-center group-hover:bg-[#B58A45] group-hover:text-white transition">

                {item.icon}

              </div>

              <h3 className="mt-7 text-2xl font-semibold">

                {item.title}

              </h3>

              <p className="mt-5 text-gray-400 leading-7">

                {item.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-[#B58A45] to-[#9b7235] p-12">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <p className="uppercase tracking-[5px] text-white/80">
                Investment Opportunity
              </p>

              <h3 className="mt-4 text-4xl font-serif">
                Own Your Space in Lucknow's
                Fastest Growing Commercial Hub
              </h3>

              <p className="mt-6 text-white/90 leading-8">
                Whether you're an investor looking for appreciation,
                a retailer seeking visibility, or a business planning
                its next headquarters, Neo Downtown offers a premium
                commercial ecosystem built for long-term success.
              </p>

            </div>

            <div className="flex justify-center lg:justify-end">
              <a href="https://wa.me/917311144475">
                <button className="bg-white text-[#111111] px-10 py-5 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition">
                  <a href="https://wa.me/917311144475"></a>
                  Schedule Site Visit
                  <FiArrowRight />

                </button>

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}