import { useState } from "react";
import {
  FiDownload,
  FiArrowRight,
  FiMaximize2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PropertyLeadPopup from "./Popup";

import g from "../src/assets/g.png";
import f from "../src/assets/f.png";
import s from "../src/assets/s.png";
import t from "../src/assets/t.png";

// Dummy office floor images
import office1 from "../src/assets/t.png";
import office2 from "../src/assets/4&5f.png";
import office3 from "../src/assets/6f.png";
import office4 from "../src/assets/7f.png";
import office5 from "../src/assets/8f.png";

const floors = [
  {
    id: 1,
    name: "Ground Floor",
    image: g,
    title: "Premium Retail",
    area: "1750 Sq.ft - 6630 Sq.ft",
    price: "₹25,000 / Sq.ft",
    description:
      "Ideal for flagship stores, cafés and premium retail brands with maximum visibility.",
  },
  {
    id: 2,
    name: "First Floor",
    image: f,
    title: "Retail Spaces",
    area: "2286 Sq.ft - 6759 Sq.ft",
    price: "₹20,000 / Sq.ft",
    description:
      "Designed for fashion, lifestyle and business outlets.",
  },
  {
    id: 3,
    name: "Second Floor",
    image: s,
    title: "Retail Spaces",
    area: "780 Sq.ft - 6759 Sq.ft",
    price: "₹16,000 / Sq.ft",
    description:
      "Perfect for restaurants, entertainment and branded stores.",
  },
  {
    id: 4,
    name: "Office Floors",
    title: "Premium Offices",
    images: [office1, office2, office3, office4, office5],
    area: "562 Sq.ft - 5014 Sq.ft",
    price: "₹11,500 / Sq.ft",
    description:
      "Modern Grade-A office spaces with efficient layouts.",
  },
];

export default function FloorPlans() {
  const [selected, setSelected] = useState(floors[0]);
  const [showPopup, setShowPopup] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "";
    link.download = "Neo_Floor_Plan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section id="floor-plans" className="py-8 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[6px] text-[#B58A45] font-semibold">
              Floor Plans
            </p>

            <h2 className="mt-4 text-5xl font-serif">
              Find Your Perfect
              <span className="text-[#B58A45]">
                {" "}
                Commercial Space
              </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Explore detailed floor layouts for retail shops and premium office
              spaces designed to maximize visibility and functionality.
            </p>
          </div>

          {/* Tabs */}

          <div className="flex overflow-x-auto gap-4 mt-16 pb-2">
            {floors.map((floor) => (
              <button
                key={floor.id}
                onClick={() => setSelected(floor)}
                className={`whitespace-nowrap px-7 py-4 rounded-full font-semibold transition ${selected.id === floor.id
                  ? "bg-[#B58A45] text-white"
                  : "bg-white border hover:border-[#B58A45]"
                  }`}
              >
                {floor.name}
              </button>
            ))}
          </div>

          {/* Main Content */}

          <div className="grid lg:grid-cols-2 gap-14 mt-14">



            {/* Left Image */}

            <div className="relative overflow-hidden rounded-[35px] shadow-xl">

              {selected.images ? (
                <>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                      prevEl: ".floor-prev",
                      nextEl: ".floor-next",
                    }}
                    pagination={{ clickable: true }}
                    className="rounded-[35px]"
                  >
                    {selected.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={img}
                          alt={`${selected.name}-${index}`}
                          className="w-full rounded-[35px] transition duration-700 hover:scale-105"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Custom Previous Button */}

                  <button
                    className="floor-prev absolute left-4 top-1/2 -translate-y-1/2 z-30
                 flex h-10 w-10 items-center justify-center
                 rounded-full bg-[#B58A45]
                 text-white shadow-lg
                 transition duration-300
                 hover:bg-black"
                  >
                    <FiChevronLeft size={18} />
                  </button>

                  {/* Custom Next Button */}

                  <button
                    className="floor-next absolute right-4 top-1/2 -translate-y-1/2 z-30
                 flex h-10 w-10 items-center justify-center
                 rounded-full bg-[#B58A45]
                 text-white shadow-lg
                 transition duration-300
                 hover:bg-black"
                  >
                    <FiChevronRight size={18} />
                  </button>
                </>
              ) : (
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full rounded-[35px] transition duration-700 hover:scale-105"
                />
              )}

             

            </div>

            {/* Right Content */}

            <div className="bg-white rounded-[24px] md:rounded-[35px] shadow-lg p-6 sm:p-8 lg:p-10">

              {/* Title */}
              <span className="uppercase tracking-[2px] sm:tracking-[4px] text-[#B58A45] font-semibold text-xs sm:text-sm">
                {selected.title}
              </span>

              {/* Heading */}
              <h3 className="mt-3 md:mt-4 text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight">
                {selected.name}
              </h3>

              {/* Description */}
              <p className="mt-4 sm:mt-6 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
                {selected.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10">

                <div className="bg-[#faf8f5] rounded-2xl p-5 sm:p-6">
                  <p className="text-gray-500 text-sm">
                    Available Area
                  </p>

                  <h4 className="text-base sm:text-lg font-bold mt-2 break-words">
                    {selected.area}
                  </h4>
                </div>

                <div className="bg-[#faf8f5] rounded-2xl p-5 sm:p-6">
                  <p className="text-gray-500 text-sm">
                    Basic Sale Price
                  </p>

                  <h4 className="text-xl sm:text-2xl font-bold mt-2 text-[#B58A45] break-words">
                    {selected.price}
                  </h4>
                </div>

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-12">

                <a
                  href="https://wa.me/917311144475"
                  className="flex-1 bg-[#B58A45] hover:bg-black text-white py-3.5 sm:py-4 rounded-full font-semibold transition flex justify-center items-center gap-2 text-sm sm:text-base"
                >
                  Enquire Now
                  <FiArrowRight className="text-lg" />
                </a>

                <button
                  onClick={() => setShowPopup(true)}
                  className="flex-1 border border-gray-300 py-3.5 sm:py-4 rounded-full hover:border-[#B58A45] transition flex justify-center items-center gap-2 text-sm sm:text-base"
                >
                  <FiDownload className="text-lg" />
                  Download Plan
                </button>

              </div>

            </div>

          </div>
        </div>
      </section>

      <PropertyLeadPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onSuccess={() => {
          setShowPopup(false);
          handleDownload();
        }}
      />
    </>
  );
}