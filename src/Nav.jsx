import { useEffect, useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiChevronDown,
} from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PropertyLeadPopup from "./Popup";
import logo from "./assets/logo.png";

const navLinks = [
  "Home",
  "About",
  "Amenities",
  "Location",
  "Pricing",
  "Gallery",
  "Articles",
];

const linkHref = (item) => item === "Articles" ? "#articles" : `#${item.toLowerCase().replace(/\s/g, "")}`;

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [developerOpen, setDeveloperOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    const handleOpenLeadForm = () => setIsPopupOpen(true);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-lead-form", handleOpenLeadForm);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-lead-form", handleOpenLeadForm);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-[500] transition-all duration-300 ${
          scrolled
            ? "bg-white backdrop-blur-lg shadow-sm border-b border-gray-200"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-5 h-16 lg:h-20 flex items-center justify-between">

          {/* Left Logos */}
          <div className="flex items-center gap-2 lg:gap-5">

            <a
              href="https://www.bbdgreencity.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 sm:w-16 lg:w-24"
            >
              <img
                src="https://adgschool.com/wp-content/uploads/2024/01/bbd-group-1.png"
                alt="BBD Group"
                className="w-full h-auto"
              />
            </a>

            <a
              href="https://vedshreegroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 sm:w-16 lg:w-24"
            >
              <img
                src="https://vedshreegroup.com/uploads/logo-1678977084.png"
                alt="Ved Shree"
                className="w-full h-auto"
              />
            </a>

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item) => (
              <a
                key={item}
                href={linkHref(item)}
                className="relative text-[15px] font-medium text-gray-700 hover:text-[#B58A45] transition group"
              >
                {item}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#B58A45] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Developer Projects */}
            <div className="relative">

              <button
                onClick={() => setDeveloperOpen(!developerOpen)}
                className="flex items-center gap-1 text-[15px] font-medium text-gray-700 hover:text-[#B58A45] transition"
              >
                Developer Projects
                <HiChevronDown
                  className={`transition-transform duration-300 ${
                    developerOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {developerOpen && (
                <div className="absolute top-full mt-3 w-48 bg-white rounded-lg shadow-lg border overflow-hidden">

                  <a
                    href="https://www.bbdgreencity.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    BBD
                  </a>

                  <a
                    href="https://vedshreegroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Ved Shree
                  </a>

                </div>
              )}

            </div>

          </nav>

          {/* Neo Downtown Logo */}
          <a href="#" className="hidden lg:block w-32">
            <img src={logo} alt="Neo Downtown" />
          </a>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenu(true)}
            className="lg:hidden text-2xl p-2"
          >
            <HiOutlineMenuAlt3 />
          </button>

        </div>
      </header>      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-300 ${
          mobileMenu ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setMobileMenu(false)}
          className="absolute inset-0 bg-black/50"
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-[340px] bg-white transition-transform duration-300 flex flex-col ${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center px-5 py-5 border-b">

            <img
              src={logo}
              alt="Neo Downtown"
              className="w-28"
            />

            <button
              onClick={() => setMobileMenu(false)}
              className="text-2xl"
            >
              <HiOutlineX />
            </button>

          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto">

            {navLinks.map((item) => (
              <a
                key={item}
                href={linkHref(item)}
                onClick={() => setMobileMenu(false)}
                className="block px-6 py-4 border-b text-base font-medium hover:text-[#B58A45] transition"
              >
                {item}
              </a>
            ))}

            {/* Developer Projects */}
            <div className="border-b">

              <button
                onClick={() => setDeveloperOpen(!developerOpen)}
                className="w-full flex items-center justify-between px-6 py-4 font-medium"
              >
                Developer Projects

                <HiChevronDown
                  className={`transition-transform duration-300 ${
                    developerOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {developerOpen && (
                <div className="pb-3">

                  <a
                    href="https://www.bbdgreencity.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-10 py-3 text-gray-600 hover:text-[#B58A45]"
                  >
                    BBD
                  </a>

                  <a
                    href="https://vedshreegroup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-10 py-3 text-gray-600 hover:text-[#B58A45]"
                  >
                    Ved Shree
                  </a>

                </div>
              )}

            </div>

            {/* Neo Downtown Logo */}
            <div className="px-6 py-5">
              <img
                src={logo}
                alt="Neo Downtown"
                className="w-36"
              />
            </div>

          </div>

          {/* Bottom Section */}
          <div className="border-t p-5 bg-white">

            <button
              onClick={() => {
                setMobileMenu(false);
                setIsPopupOpen(true);
              }}
              className="w-full bg-[#B58A45] text-white rounded-full py-3.5 font-semibold hover:bg-black hover:text-[#B58A45] transition"
            >
              Book Site Visit
            </button>

            <div className="grid grid-cols-2 gap-3 mt-4">

              <a
                href="tel:+917311144475"
                className="border rounded-full py-3 flex items-center justify-center gap-2 text-sm font-medium hover:border-[#B58A45] hover:text-[#B58A45] transition"
              >
                <FiPhoneCall size={18} />
                Call
              </a>

              <a
                href="https://wa.me/917311144475"
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-full py-3 flex items-center justify-center gap-2 text-sm font-medium hover:border-[#25D366] hover:text-[#25D366] transition"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* Lead Popup */}
      <PropertyLeadPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSuccess={() => {
          setIsPopupOpen(false);
          console.log("Lead submitted successfully");
        }}
      />
    </>
  );
}
