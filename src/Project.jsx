import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function ProjectShowcase() {
  return (
    <section id="showcase" className="bg-[#111111] py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[6px] text-[#B58A45] font-semibold">
              Project Showcase
            </p>

            <h2 className="mt-5 text-5xl lg:text-6xl font-serif leading-tight">
              A Commercial Landmark
              <span className="block text-[#B58A45]">
                Crafted To Inspire
              </span>
            </h2>

            <p className="mt-8 text-gray-300 leading-8 text-lg">
              Neo Downtown blends modern architecture with functional
              commercial spaces to create a destination where businesses,
              brands and professionals thrive.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex gap-4 items-start">
                <FiCheck className="text-[#B58A45] mt-1" />
                <p>Iconic façade with premium architectural design.</p>
              </div>

              <div className="flex gap-4 items-start">
                <FiCheck className="text-[#B58A45] mt-1" />
                <p>Wide frontage ensuring maximum retail visibility.</p>
              </div>

              <div className="flex gap-4 items-start">
                <FiCheck className="text-[#B58A45] mt-1" />
                <p>Luxury office environment built for future businesses.</p>
              </div>

              <div className="flex gap-4 items-start">
                <FiCheck className="text-[#B58A45] mt-1" />
                <p>Modern infrastructure with premium specifications.</p>
              </div>

            </div>

            <a href="#floor-plans" className="mt-12 bg-[#B58A45] hover:bg-white hover:text-black transition px-8 py-4 rounded-full flex items-center gap-3 font-semibold">

              Explore Floor Plans

              <FiArrowRight />

            </a>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            <img
              src="https://vedshreegroup.com/uploads/project-gal-1760176792.jpg"
              className="rounded-[30px] h-[240px] object-cover w-full"
              alt=""
            />

            <img
              src="https://ardianeodowntown.com/img/gal1-1400w.jpg"
              className="rounded-[30px] h-[240px] object-cover w-full mt-12"
              alt=""
            />

            <img
              src="https://vedshreegroup.com/uploads/project-gal-1760176854.jpg"
              className="rounded-[30px] h-[240px] object-cover w-full -mt-12"
              alt=""
            />

            <img
              src="https://vedshreegroup.com/uploads/project-gal-1760176845.jpg"
              className="rounded-[30px] h-[240px] object-cover w-full"
              alt=""
            />

          </div>

        </div>

      </div>
    </section>
  );
}