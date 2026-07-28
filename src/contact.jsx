import { useState } from "react";
import { FiArrowRight, FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    lookingFor: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const optionalDetails = [
        formData.lookingFor && `Looking For: ${formData.lookingFor}`,
        formData.message,
      ]
        .filter(Boolean)
        .join(" | ");

      await fetch("https://script.google.com/macros/s/AKfycbzYxdDWDJaL0KtdePlnpFKAUpHlU1fFE9mwMPVeKTdf4UJiGqdVQDmMiWs1zXP3Y-2Ntw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: optionalDetails,
        }),
      });

      setFormData({ name: "", phone: "", lookingFor: "", message: "" });
      alert("Thank you! Your details have been submitted.");
    } catch (error) {
      console.error(error);
      alert("Form submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-10 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-2">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[5px] text-[#B58A45] font-semibold text-sm">
            Book Site Visit
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-serif text-black leading-tight">
            Find Your{" "}
            <span className="text-[#B58A45]">Perfect Space</span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm leading-6">
            Share your details and our team will connect with you shortly.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          {/* FORM */}
          <div className="bg-white rounded-[30px] p-8 shadow-2xl">
            <h3 className="text-2xl font-serif">Enquire Now</h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#B58A45]"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                maxLength={10}
                required
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#B58A45]"
              />

              <select
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#B58A45]"
              >
                <option value="">Looking For</option>
                <option value="Retail Space">Retail Space</option>
                <option value="Office Space">Office Space</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Message"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-[#B58A45]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#B58A45]  text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2"
              >
                {loading ? "Submitting..." : "Submit"}
                <FiArrowRight />
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className=" rounded-[30px] border border-gray-300 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl text-black font-serif">
                Contact Info
              </h3>

              <div className="mt-6 space-y-5 text-sm">
                <div className="flex gap-4">
                  <FiPhone className="text-[#B58A45]" size={20} />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-black">+917311144475</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FiMail className="text-[#B58A45]" size={20} />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-black">sales@neodowntown.co.in</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FiMapPin className="text-[#B58A45]" size={20} />
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-black">
                    Plot No - CP-05-B, Sector - CBD, Near CG, City, Chak Gajariya, Lucknow, UP - 226010
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FiClock className="text-[#B58A45]" size={20} />
                  <div>
                    <p className="text-gray-400">Hours</p>
                    <p className="text-black">10:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden mt-6">
            <iframe
                title="Neo Downtown Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7209.056327656172!2d81.01025118230747!3d26.805049246924888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be50f680d6ab7%3A0x24754497f91e4ad6!2sNeo%20Downtown!5e0!3m2!1sen!2sin!4v1782539016416!5m2!1sen!2sin"
                className="w-full h-[340px] md:h-[450px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
