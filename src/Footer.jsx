import {
  FiArrowUp,
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiDownload,
} from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="relative bg-black text-white overflow-hidden pb-5">
        {/* Background Glow */}

        <div className="absolute -top-40 left-0 w-96 h-96 bg-[#B58A45]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B58A45]/10 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-6 pt-12 lg:pt-20 pb-8 lg:pb-10">
          {/* Top CTA */}

          <div className="rounded-[24px] lg:rounded-[40px] bg-gradient-to-r from-[#B58A45] to-[#8f6a36] p-6 lg:p-14 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10">
            <div>
              <p className="uppercase tracking-[3px] lg:tracking-[4px] text-white/80 text-xs lg:text-base">
                Limited Inventory Available
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif mt-3 leading-tight">
                Invest In Lucknow's
                <br />
                Next Landmark
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 lg:gap-4">
              <button className="w-full sm:w-auto bg-white text-black px-8 py-3.5 lg:py-4 rounded-full font-semibold hover:scale-105 transition">
               <a  href="https://wa.me/917311144475">
               Book Site Visit
               </a> 
              </button>

              <button className="w-full sm:w-auto border border-white px-8 py-3.5 lg:py-4 rounded-full font-semibold hover:bg-white hover:text-black transition flex items-center justify-center gap-2">
                <FiDownload />
                Download Brochure
              </button>
            </div>
          </div>

          {/* Main Footer */}

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-14 mt-12 lg:mt-20">
            {/* Brand */}

            <div>
              <h2 className="text-4xl lg:text-5xl font-serif tracking-[6px] lg:tracking-[8px] text-[#B58A45]">
                NEO
              </h2>

              <p className="tracking-[6px] lg:tracking-[7px] text-xs lg:text-sm mt-2">
                DOWNTOWN
              </p>

              <p className="text-gray-400 leading-7 lg:leading-8 text-sm lg:text-base mt-5 lg:mt-8">
                Neo Downtown is a premium commercial destination offering
                luxury retail spaces and Grade-A offices in the heart of
                Gomti Nagar Extension, Lucknow.
              </p>
            </div>

            {/* Quick Links */}

            <div>
              <h3 className="text-xl lg:text-2xl font-semibold">
                Quick Links
              </h3>

              <ul className="space-y-3 lg:space-y-4 mt-5 lg:mt-8 text-gray-400">
                {[
                  "Home",
                  "About",
                  "Amenities",
                  "Location",
                  "Pricing",
                  "Gallery",
                  "Articles",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-[#B58A45] transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}

            <div>
              <h3 className="text-xl lg:text-2xl font-semibold">
                Contact
              </h3>

              <div className="space-y-4 lg:space-y-6 mt-5 lg:mt-8">
          
                <div className="flex gap-4">
                  <FiPhone className="text-[#B58A45] mt-1" />

                  <span className="text-gray-400 text-sm lg:text-base">
                  +917311144475

                  </span>
                </div>

                <div className="flex gap-4">
                  <FiMail className="text-[#B58A45] mt-1" />

                  <span className="text-gray-400 text-sm lg:text-base">
                  sales@neodowntown.co.in

                  </span>
                </div>

                <div className="flex gap-4">
                  <FiMapPin className="text-[#B58A45] mt-1" />

                  <span className="text-gray-400 leading-6 lg:leading-7 text-sm lg:text-base">
                  CP-05-B, Sector - CBD, Near CG, City, Chak Gajariya, Lucknow, UP - 226010
                  </span>
                </div>
              </div>
            </div>            {/* Social */}

            <div>
              <h3 className="text-xl lg:text-2xl font-semibold">
                Follow Us
              </h3>

              <div className="flex gap-3 lg:gap-4 mt-5 lg:mt-8">
                {[
                  <FiFacebook />,
                  <FiInstagram />,
                  <FiLinkedin />,
                  <FiYoutube />,
                ].map((icon, index) => (
                  <button
                    key={index}
                    className="w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-[#1d1d1d] hover:bg-[#B58A45] transition flex justify-center items-center text-lg lg:text-xl"
                  >
                    {icon}
                  </button>
                ))}
              </div>

              <div className="mt-6 lg:mt-10">
                <h4 className="font-semibold text-base lg:text-lg">
                  Sales Office
                </h4>

                <p className="text-gray-400 mt-3 lg:mt-4 leading-6 lg:leading-8 text-sm lg:text-base">
                  Visit our experience center and explore premium commercial
                  opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}

          <div className="border-t border-gray-800 mt-10 lg:mt-16 pt-6 lg:pt-10">
            <p className="text-gray-500 leading-6 lg:leading-8 text-xs lg:text-sm">
              <strong className="text-white">Disclaimer:</strong> The
              information provided on this website is for general informational
              purposes only and does not constitute an offer to sell or a legal
              commitment. Prices, layouts, specifications, amenities and
              availability are subject to change without prior notice. Please
              contact the official sales team for the latest details.
            </p>
          </div>

          {/* Bottom */}

          <div className="flex flex-col lg:flex-row justify-between items-center mt-6 lg:mt-10 gap-3 lg:gap-6">
            <p className="text-gray-500 text-xs lg:text-sm text-center lg:text-left">
              © {year} Neo Downtown. All Rights Reserved.
            </p>

            
    <a
      href="https://www.brandsinhouse.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-2 hover:opacity-80 transition"
    >
      <span className="text-xs text-slate-300">Developed by</span>

      <img
        src="https://i.ibb.co/Z6QXhTD9/Brands-in-House.png"
        alt="BrandinHouse"
        className="h-5 w-auto"
      />
    </a>
          </div>
        </div>
      </footer>

      {/* Back To Top */}

      <button
        onClick={scrollTop}
        className="fixed bottom-5 right-5 lg:bottom-6 lg:right-6 z-50 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-[#B58A45] text-white shadow-xl hover:scale-110 transition"
      >
        <FiArrowUp className="mx-auto text-lg lg:text-xl" />
      </button>
    </>
  );
}
