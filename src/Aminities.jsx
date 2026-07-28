import {
    FiCoffee,
    FiWifi,
    FiShield,
    FiTruck,
    FiBatteryCharging,
    FiMonitor,
    FiNavigation,
    FiLayers,
    FiUsers,
    FiHome,
    FiArrowRight,
  } from "react-icons/fi";
  
  import { FaParking } from "react-icons/fa";
  
  const amenities = [
    {
      icon: <FiHome size={28} />,
      title: "Grand Entrance Lobby",
      desc: "Elegant reception area designed to create a lasting first impression.",
    },
    {
      icon: <FaParking size={28} />,
      title: "Ample Parking",
      desc: "Dedicated parking for owners, visitors and employees.",
    },
    {
      icon: <FiBatteryCharging size={28} />,
      title: "100% Power Backup",
      desc: "Continuous operations with reliable power infrastructure.",
    },
    {
      icon: <FiWifi size={28} />,
      title: "High-Speed Connectivity",
      desc: "Business-ready internet and communication infrastructure.",
    },
    {
      icon: <FiShield size={28} />,
      title: "24×7 Security",
      desc: "CCTV surveillance with trained security personnel.",
    },
    {
      icon: <FiTruck size={28} />,
      title: "Service Access",
      desc: "Dedicated service entry and smooth logistics movement.",
    },
    {
      icon: <FiLayers size={28} />,
      title: "High-Speed Elevators",
      desc: "Multiple elevators ensuring quick movement across floors.",
    },
    {
      icon: <FiCoffee size={28} />,
      title: "Fine Dine Space",
      desc: "Premium dining and café spaces for professionals and visitors.",
    },
    {
      icon: <FiMonitor size={28} />,
      title: "Modern Office Spaces",
      desc: "Flexible office layouts built for growing businesses.",
    },
    {
      icon: <FiNavigation size={28} />,
      title: "Prime Visibility",
      desc: "Excellent frontage with high customer visibility.",
    },
    {
      icon: <FiUsers size={28} />,
      title: "Business Community",
      desc: "Surrounded by premium brands and corporate offices.",
    },
    {
      icon: <FiArrowRight size={28} />,
      title: "Future Ready",
      desc: "Designed for tomorrow's commercial ecosystem.",
    },
  ];
  
  export default function Amenities() {
    return (
        <section id="amenities" className="bg-white py-6 lg:py-4">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
      
          {/* Heading */}
      
          <div className="text-center max-w-3xl mx-auto">
      
            <p className="uppercase tracking-[4px] text-[#B58A45] text-sm font-semibold">
              World-Class Amenities
            </p>
      
            <h2 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-900">
              Everything Your
              <span className="text-[#B58A45]"> Business Needs</span>
            </h2>
      
            <p className="mt-5 text-gray-600 leading-7 text-sm md:text-base">
              Every detail at Neo Downtown has been thoughtfully planned to create an
              exceptional environment for businesses, brands, professionals and
              visitors.
            </p>
      
          </div>
      
          {/* Featured */}
      
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center mt-16 lg:mt-20">
      
            {/* Image */}
      
            <div className="relative overflow-hidden rounded-[30px] lg:rounded-[40px] group">
      
              <img
                src="https://ik.imagekit.io/sjnshacs8/propertygallery/69eb392642401_ardianeodowntown12.webp"
                alt="Neo Downtown Amenities"
                className="w-full h-[320px] md:h-[450px] object-cover transition duration-700 group-hover:scale-105"
              />
      
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      
              <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
      
                <p className="uppercase tracking-[3px] text-[#B58A45] text-xs md:text-sm">
                  Premium Commercial Experience
                </p>
      
                <h3 className="text-2xl md:text-4xl font-serif text-white mt-2">
                  Designed For Success
                </h3>
      
              </div>
      
            </div>
      
            {/* Content */}
      
            <div>
      
              <h3 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                Elevating Every Business Experience
              </h3>
      
              <p className="mt-6 text-gray-600 leading-8">
                From premium retail spaces to modern office infrastructure, Neo
                Downtown is thoughtfully designed to deliver comfort, convenience and
                operational efficiency for businesses of every scale.
              </p>
      
              <div className="space-y-5 mt-8">
      
                {[
                  "Elegant architectural design with premium façade.",
                  "Modern infrastructure supporting future business growth.",
                  "Safe, secure and professionally managed environment.",
                  "Retail and office spaces crafted for premium brands.",
                ].map((point) => (
      
                  <div
                    key={point}
                    className="flex items-start gap-4"
                  >
      
                    <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#B58A45]" />
      
                    <p className="text-gray-700 leading-7">
                      {point}
                    </p>
      
                  </div>
      
                ))}
      
              </div>
      
            </div>
      
          </div>
      
          {/* Amenities */}
      
          <div className="mt-16 lg:mt-20">
      
            {/* Mobile Slider */}
      
            <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
      
              {amenities.map((item, index) => (
      
                <div
                  key={index}
                  className="snap-center shrink-0 w-[68%] rounded-2xl bg-[#faf8f5] border border-gray-200 p-5"
                >
      
                  <div className="w-12 h-12 rounded-xl bg-[#B58A45]/10 flex items-center justify-center text-[#B58A45]">
      
                    {item.icon}
      
                  </div>
      
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {item.title}
                  </h3>
      
                  <p className="mt-2 text-sm text-gray-500 leading-6">
                    {item.desc}
                  </p>
      
                </div>
      
              ))}
      
            </div>
      
            {/* Desktop Grid */}
      
            <div className="hidden lg:grid grid-cols-4 gap-5">
      
              {amenities.map((item, index) => (
      
                <div
                  key={index}
                  className="group rounded-2xl bg-[#faf8f5] border border-gray-200 p-6 hover:border-[#B58A45] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
      
                  <div className="w-14 h-14 rounded-xl bg-[#B58A45]/10 flex items-center justify-center text-[#B58A45] group-hover:bg-[#B58A45] group-hover:text-white transition">
      
                    {item.icon}
      
                  </div>
      
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
      
                  <p className="mt-3 text-sm text-gray-500 leading-6">
                    {item.desc}
                  </p>
      
                </div>
      
              ))}
      
            </div>
      
          </div>
      
        </div>
      </section>
    );
  }