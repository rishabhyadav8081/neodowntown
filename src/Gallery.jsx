import { useState } from "react";
import office from "../src/assets/office.png";
import office2 from "../src/assets/office2.png";
import amen from "../src/assets/amen.png";
import ext1 from "../src/assets/ext1.jpeg";
import ext3 from "../src/assets/ext3.png";
import const1 from "../src/assets/const6.png";
import const2 from "../src/assets/const7.png";
import const3 from "../src/assets/const8.png";
import const4 from "../src/assets/const9.png";
import const5 from "../src/assets/const10.png";
import const6 from "../src/assets/const11.png";
import retail from "../src/assets/retail.png";
import retail2 from "../src/assets/retail2.png";

const tabs = [
  "Exterior",
  "Construction",
  "Retail",
  "Office",
  "Amenities",
];

const images = [
  // Exterior (shown first)
  {
    category: "Exterior",
    src: "https://pbs.twimg.com/media/G0n3MZWaQAAcFxx.jpg",
  },
  {
    category: "Exterior",
    src: "https://newprojects.99acres.com/projects/ardia_projects_llp/ardia_neo_downtown/images/1bnvgs5_1763194447_673167995_O.jpg",
  },
  {
    category: "Exterior",
    src: ext1,
  },
  {
    category: "Exterior",
    src: ext3,
  },
  {
    category: "Exterior",
    src: "https://newprojects.99acres.com/projects/ardia_projects_llp/ardia_neo_downtown/images/yfqzbg7_1763194447_673167993_optOrig.jpg",
  },

  // Construction
  {
    category: "Construction",
    src: const1,
  },
  {
    category: "Construction",
    src: const2,
  },
  {
    category: "Construction",
    src: const3,
  },
  {
    category: "Construction",
    src: const4,
  },
  {
    category: "Construction",
    src: const5,
  },
  {
    category: "Construction",
    src: const6,
  },

  // Retail
  {
    category: "Retail",
    src: "https://ik.imagekit.io/sjnshacs8/propertygallery/69eb392642401_ardianeodowntown12.webp",
  },{
    category: "Retail",
    src: retail
  },
  {
    category: "Retail",
    src: retail2
  },
  // Office
  {
    category: "Office",
    src: office,
  },
  {
    category: "Office",
    src: office2,
  },

  // Amenities
  {
    category: "Amenities",
    src: "https://ardianeodowntown.com/img/parking1-768w.jpg",
  },
  {
    category: "Amenities",
    src: amen,
  },
];

export default function Gallery() {
  // Exterior is selected by default
  const [active, setActive] = useState("Exterior");

  const filtered = images.filter((img) => img.category === active);

  return (
    <section id="gallery" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[6px] text-[#B58A45] font-semibold">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-serif">
            Experience Neo Downtown
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Discover elegant architecture, premium interiors and thoughtfully
            designed commercial spaces through our project gallery.
          </p>
        </div>

        {/* Filters */}
        <div className="hidden sm:flex justify-center flex-wrap gap-3 lg:gap-4 mt-10 lg:mt-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 lg:px-6 py-2.5 lg:py-3 rounded-full transition font-medium whitespace-nowrap ${
                active === tab
                  ? "bg-[#B58A45] text-white"
                  : "border hover:border-[#B58A45]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile Gallery */}
        <div className="lg:hidden mt-10 -mx-6 px-6 overflow-x-auto">
          <div className="flex gap-4 w-max pb-2">
            {filtered.map((image, index) => (
              <div
                key={index}
                className="w-[280px] flex-shrink-0 rounded-3xl overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.category}
                  className="w-full h-[380px] object-cover rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Masonry */}
        <div className="hidden lg:block columns-1 sm:columns-2 lg:columns-3 gap-6 mt-16">
          {filtered.map((image, index) => (
            <div
              key={index}
              className="mb-6 overflow-hidden rounded-3xl group"
            >
              <img
                src={image.src}
                alt={image.category}
                className="w-full rounded-3xl transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Virtual Tour */}
        <div className="mt-16 lg:mt-24 rounded-[30px] lg:rounded-[40px] overflow-hidden relative h-[350px] lg:h-[500px]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/BAob8o_jfks"
            title="Neo Downtown Virtual Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}