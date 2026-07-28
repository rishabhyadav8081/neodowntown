import {
    FiArrowRight,
    FiCheck,
    FiDownload,
    FiTrendingUp,
    FiMapPin,
    FiShield,
    FiStar,
  } from "react-icons/fi";
  
  const pricing = [
    {
      type: "Retail Spaces",
      subtitle: "Ground Floor Commercial",
      price: "₹25,000",
      unit: "/ Sq.ft",
      starting: "Starting ₹4.37 Cr*",
      features: [
        "Premium Ground Floor Location",
        "High Footfall Zone",
        "Double Height Frontage",
        "Brand Visibility Advantage",
        "Strong Rental Yield Potential",
      ],
    },
    {
      type: "Office Spaces",
      subtitle: "Premium Corporate Offices",
      price: "₹11,500",
      unit: "/ Sq.ft",
      starting: "Starting ₹2.21 Cr*",
      features: [
        "Upper Floor Office Spaces",
        "Modern Infrastructure",
        "Flexible Layouts",
        "Prime Business Address",
        "Long-Term Appreciation",
      ],
    },
  ];
  
  const plans = [
    {
      title: "Construction Linked Payment Plan",
      desc:
        "Payments aligned with construction milestones for financial flexibility.",
    },
    {
      title: "Assured Return Investment Plan",
      desc:
        "Structured returns model designed for stable investor income.",
    },
  ];
  
  export default function Pricing() {
    return (
      <section id="pricing" className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
  
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs tracking-[4px] uppercase text-gray-500">
              Pricing & Investment
            </p>
  
            <h2 className="mt-3 text-4xl font-semibold text-gray-900">
              Investment Plans
            </h2>
  
            <p className="mt-3 text-gray-600">
              Clear pricing structure with premium commercial opportunities.
            </p>
          </div>
  
          {/* PRICING BOX CARDS */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
  
            {pricing.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition overflow-hidden"
              >
  
                {/* HEADER BOX */}
                <div className="border-b border-gray-100 p-6 flex justify-between items-start">
  
                  <div>
                    <p className="text-xs uppercase tracking-[3px] text-gray-500">
                      {item.subtitle}
                    </p>
  
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {item.type}
                    </h3>
                  </div>
  
                  <span className="text-xs px-3 py-1 rounded-full bg-[#B58A45]/10 text-[#B58A45]">
                    {item.starting}
                  </span>
  
                </div>
  
                {/* PRICE BOX */}
                <div className="px-6 py-6 flex items-end gap-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {item.price}
                  </span>
                  <span className="text-gray-500 mb-1">{item.unit}</span>
                </div>
  
                {/* FEATURES BOX */}
                <div className="px-6 pb-6 space-y-3">
                  {item.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <FiCheck className="text-[#B58A45] mt-1" />
                      <span className="text-sm text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
  
                {/* CTA BOX */}
                <div className="border-t border-gray-100 p-5">
                  <a href="https://wa.me/917311144475" className="w-full bg-gray-900 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#B58A45] transition">
                    Enquire Now <FiArrowRight />
                  </a>
                </div>
  
              </div>
            ))}
          </div>
  
          {/* INVESTMENT PLANS */}
          {/* <div className="mt-14 text-center">
            <h3 className="text-2xl font-semibold text-gray-900">
              Investment Plans
            </h3>
  
            <div className="mt-6 grid md:grid-cols-2 gap-6">
  
              {plans.map((p, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl p-5 text-left"
                >
                  <h4 className="text-lg font-semibold text-gray-900">
                    {p.title}
                  </h4>
  
                  <p className="mt-2 text-gray-600 text-sm">
                    {p.desc}
                  </p>
                </div>
              ))}
  
            </div>
          </div> */}
  
          {/* STATS (ONE LINE FIXED)
          <div className="mt-14 border border-gray-200 rounded-xl px-6 py-5 flex flex-wrap md:flex-nowrap items-center justify-between gap-6 text-center">
  
            {[
              { icon: <FiMapPin />, label: "Location", value: "Prime" },
              { icon: <FiShield />, label: "Safety", value: "High" },
              { icon: <FiTrendingUp />, label: "Growth", value: "30%+" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 text-left">
                <span className="text-[#B58A45]">{s.icon}</span>
  
                <div>
                  <div className="font-semibold text-gray-900">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
  
          </div> */}
  
          {/* CTA (ONE LINE FIXED) */}
          <div className="mt-14 border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
  
            {/* <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900">
                Get Complete Project Details
              </h3>
              <p className="text-sm text-gray-600">
                Download brochure & floor plans instantly
              </p>
            </div>
  
            <div className="flex gap-3">
              <button className="bg-gray-900 text-white px-5 py-3 rounded-lg flex items-center gap-2">
                <FiDownload /> Brochure
              </button>
  
              <button className="border border-gray-900 px-5 py-3 rounded-lg flex items-center gap-2">
                Site Visit <FiArrowRight />
              </button>
            </div> */}
  
          </div>
  
        </div>
      </section>
    );
  }