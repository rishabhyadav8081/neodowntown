import { FiArrowRight, FiMapPin } from "react-icons/fi";
import rera from './assets/rera.png'
export default function Hero() {
  return (
    <section
      id="home"
      className="relative pb-10 lg:py-10"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center lg:scale-110 lg:translate-x-86"
          style={{
            backgroundImage:
              "url('https://ardianeodowntown.co.in/images/slider-1.webp')",
          }}
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111f2] via-[#111111c5] to-transparent" />

      {/* Golden Blur */}
      <div className="absolute -top-20 left-10 h-62 w-62 rounded-full bg-[#B58A45]/20 blur-3xl" />
      {/* RERA Logo */}
      <div className="absolute top-18 right-0.5 sm:right-4 lg:top-24 lg:right-2  z-30">
        <img
          src={rera}
          alt="RERA Approved"
          className="w-35 sm:w-44 md:w-28 lg:w-80 h-auto"
        />
      </div>
      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10 px-5 h-screen flex flex-col justify-between pt-26 pb-6">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-1 rounded-full border border-[#B58A45]/40 bg-white/10 backdrop-blur-md px-2 py-1.5 text-xs font-medium text-[#F4D08C]">
            <FiMapPin />
            Adjacent to Phoenix Palassio, Lucknow
          </div>

          {/* Heading */}
          <h1 className="mt-12 text-6xl font-serif leading-tight text-white">
            The Art
            <br />
            <span className="text-[#D6B06A]">of Arriving</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-md leading-6 text-gray-200">
            Crafted for Visionaries. Built for Legacy. Experience premium office
            spaces and flagship retail opportunities in Lucknow's next
            commercial landmark.
          </p>

          {/* Pricing */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-3">
              <p className="uppercase tracking-wide text-[9px] text-gray-300">
                Office Spaces
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#D6B06A]">
                ₹2.21 Cr*
              </h3>

              <p className="mt-1 text-xs text-gray-300">
                Starting Price
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-3">
              <p className="uppercase tracking-wide text-[9px] text-gray-300">
                Retail Spaces
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#D6B06A]">
                ₹2.74 Cr*
              </h3>

              <p className="mt-1 text-xs text-gray-300">
                Starting Price
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="pt-5 space-y-5">
          <a href="https://wa.me/917311144475" className="block">
            <button className="w-full bg-[#B58A45] hover:bg-[#98733A] text-white py-4 rounded-full font-semibold transition flex items-center justify-center gap-2">
              Book Site Visit
              <FiArrowRight />
            </button>
          </a>

          <a href="#pricing" className="block">
            <button className="w-full border border-white/40 bg-white/10 backdrop-blur-md text-white py-4 rounded-full hover:bg-white hover:text-black transition">
              Explore Project
            </button>
          </a>
        </div>
      </div>

      {/* Desktop Layout (unchanged) */}
      <div className="hidden lg:flex relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B58A45]/40 bg-white/10 backdrop-blur-md px-2 py-1.5 text-xs font-medium text-[#F4D08C]">
            <FiMapPin />
            Adjacent to Phoenix Palassio, Lucknow
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-serif leading-tight text-white">
            The Art
            <br />
            <span className="text-[#D6B06A]">of Arriving</span>
          </h1>

          <p className="mt-5 text-xl leading-relaxed text-gray-200 max-w-xl">
            Crafted for Visionaries. Built for Legacy. Experience premium office
            spaces and flagship retail opportunities in Lucknow's next
            commercial landmark.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-12">
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6">
              <p className="uppercase tracking-widest text-xs text-gray-300">
                Office Spaces
              </p>

              <h3 className="mt-3 text-4xl font-bold text-[#D6B06A]">
                ₹2.21 Cr*
              </h3>

              <p className="mt-2 text-gray-300">
                Starting Price
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6">
              <p className="uppercase tracking-widest text-xs text-gray-300">
                Retail Spaces
              </p>

              <h3 className="mt-3 text-4xl font-bold text-[#D6B06A]">
                ₹2.74 Cr*
              </h3>

              <p className="mt-2 text-gray-300">
                Starting Price
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <a href="https://wa.me/917311144475">
              <button className="bg-[#B58A45] hover:bg-[#98733A] text-white px-8 py-4 rounded-full font-semibold transition flex items-center gap-2">
                Book Site Visit
                <FiArrowRight />
              </button>

            </a>
            <a href="#pricing"><button className="border border-white/40 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              Explore Project
            </button></a>

          </div>
        </div>
      </div>
    </section>
  );
}