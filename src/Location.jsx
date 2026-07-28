import {
  FiMapPin,
  FiNavigation,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

const locations = [
  {
    title: "Phoenix Palassio",
    distance: "2 Minutes",
    color: "bg-[#B58A45]",
  },
  {
    title: "Ekana Stadium",
    distance: "2 Minutes",
    color: "bg-black",
  },
  {
    title: "Shaheed Path",
    distance: "3 Minutes",
    color: "bg-[#B58A45]",
  },
  {
    title: "Gomti Nagar",
    distance: "8 Minutes",
    color: "bg-black",
  },
  {
    title: "Lucknow Airport",
    distance: "20 Minutes",
    color: "bg-[#B58A45]",
  },
  {
    title: "Medanta Hospital",
    distance: "10 Minutes",
    color: "bg-black",
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="py-20 lg:py-28 bg-[#faf8f5]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#B58A45] text-sm font-semibold">
            Prime Location
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
            Connected To
            <span className="text-[#B58A45]">
              {" "}Everything Important
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-sm md:text-base">
            Neo Downtown enjoys one of Lucknow's most strategic commercial
            addresses, surrounded by luxury retail, premium residences,
            entertainment hubs and seamless connectivity.
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 mt-16 lg:mt-20">

          {/* LEFT */}

          <div className="space-y-6">

            {/* Image */}

            <div className="relative overflow-hidden rounded-[32px] group shadow-xl">
              <iframe
                title="Neo Downtown Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7209.056327656172!2d81.01025118230747!3d26.805049246924888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be50f680d6ab7%3A0x24754497f91e4ad6!2sNeo%20Downtown!5e0!3m2!1sen!2sin!4v1782539016416!5m2!1sen!2sin"
                className="w-full h-[340px] md:h-[450px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              {/* Floating Badge */}

              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur rounded-full px-5 py-2 flex items-center gap-2 shadow-lg">

                <FiMapPin className="text-[#B58A45]" />

                <span className="font-medium text-sm">
                  Gomti Nagar Extension
                </span>

              </div>

              {/* Bottom Text */}

              <div className="absolute bottom-8 left-8">

                <p className="uppercase tracking-[3px] text-[#B58A45] text-xs">
                  Prime Commercial Address
                </p>

                <h3 className="text-3xl lg:text-4xl font-serif text-white mt-2">
                  Neo Downtown
                </h3>

              </div>

            </div>

            {/* Distance Cards */}

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-white rounded-3xl p-6 shadow-md">

                <p className="text-xs uppercase tracking-[3px] text-[#B58A45]">
                  Airport
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  20 Min
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Chaudhary Charan Singh Airport
                </p>

              </div>

              <div className="bg-white rounded-3xl p-6 shadow-md">

                <p className="text-xs uppercase tracking-[3px] text-[#B58A45]">
                  Stadium
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  2 Min
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  Ekana Cricket Stadium
                </p>

              </div>

            </div>

            {/* Why Location */}

            <div className="bg-white rounded-[32px] shadow-lg p-8">

              <h3 className="text-2xl font-serif text-gray-900">
                Why This Location?
              </h3>

              <div className="space-y-5 mt-8">

                {[
                  "Adjacent to Phoenix Palassio Mall",
                  "Near Lulu Mall",
                  "Direct access to Shaheed Path",
                  "Premium residential neighbourhood",
                  "High-growth commercial corridor",
                ].map((point) => (

                  <div
                    key={point}
                    className="flex items-start gap-4"
                  >

                    <div className="w-3 h-3 rounded-full bg-[#B58A45] mt-2" />

                    <p className="text-gray-600 leading-7">
                      {point}
                    </p>

                  </div>

                ))}

              </div>

              {/* <button
                className="w-full mt-8 bg-[#B58A45] hover:bg-black transition text-white py-4 rounded-full font-semibold"
              >
                View on Google Maps
              </button> */}

            </div>

          </div>

          {/* RIGHT */}

          {/* Mobile View */}
          <div className="md:hidden -mx-5 px-5 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 w-max pb-2">
              {locations.map((item, index) => (
                <div
                  key={index}
                  className="group w-[300px] flex-shrink-0 bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white`}
                    >
                      <FiMapPin size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Nearby Landmark
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-[#B58A45]">
                    <FiClock />
                    <span className="font-semibold text-gray-900">
                      {item.distance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            {locations.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 mb-5 flex justify-between items-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white`}
                  >
                    <FiMapPin size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Nearby Landmark
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <FiClock className="text-[#B58A45]" />
                    <span className="font-semibold">
                      {item.distance}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="rounded-[32px] bg-[#111111] text-white p-8 lg:p-10 mt-8">
            <div className="flex items-center gap-4">
              <FiNavigation
                size={30}
                className="text-[#B58A45]"
              />
              <h3 className="text-2xl lg:text-3xl font-serif">
                Excellent Connectivity
              </h3>
            </div>

            <p className="mt-6 text-gray-300 leading-7 lg:leading-8">
              Enjoy quick access to Shaheed Path, premium residential townships,
              hospitals, educational institutions, shopping destinations and
              Lucknow's fastest-growing commercial district.
            </p>

            <a href="https://wa.me/917311144475" className="mt-8 bg-[#B58A45] hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-full flex items-center gap-3 font-semibold text-center">
              Book Site Visit
              <FiArrowRight />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
