import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdCall } from "react-icons/io";
import logo from './assets/logo.png'

export default function PropertyLeadPopup({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbzYxdDWDJaL0KtdePlnpFKAUpHlU1fFE9mwMPVeKTdf4UJiGqdVQDmMiWs1zXP3Y-2Ntw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone, 
          message: formData.message,
        }),
      });
  
      const result = await res.text();
      console.log("Response:", result);
  
      setLoading(false);
  
      setFormData({
        name: "",
        phoneNumber: "",
        message: "",
      });
  
      onClose(); // close popup after success
    } catch (error) {
      console.error(error);
      alert("Form submission failed");
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                rotate: -4,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                rotate: 4,
                y: 30,
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 14,
              }}
              className="relative w-full max-w-[430px] rounded-[36px] overflow-hidden border border-white/20 bg-white/90 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute -top-24 -left-16 w-44 h-44 bg-[#B58A45] rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-16 w-44 h-44 bg-[#B58A45] rounded-full blur-3xl" />

              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center"
              >
                ×
              </button>

              <div className="px-7 pt-7">
                <div className="inline-flex items-center gap-2 px- py-2 w-40  text-[#e09a1a]  font-semibold ">
                 <img src={logo} alt="" />
                </div>

                <h2 className="mt-5 text-[32px] leading-[1.05] font-black text-gray-900">
                Find Your Perfect Retail & Office Space
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Connect with our experts for best deals, site visits &
                  investment guidance.
                </p>

                <div className="mt-6 rounded-[28px] bg-[#B58A45] p-5 relative overflow-hidden text-white">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-green-100">
                        Special Benefits
                      </p>

                      <h3 className="mt-2 text-sm  font-md">
                       Shedule Your
                        <br />
                        Free Site Visit
                      </h3>
                    </div>

                    <a
                      href="tel:+917311144475"
                      className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20"
                    >
                      <IoMdCall className="text-3xl text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="px-7 pt-6 pb-7 space-y-4"
              >
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 pt-5"
                  />
                  <label className="absolute left-5 top-4 text-sm text-gray-400 transition-all peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    maxLength={10}
                    required
                    className="peer w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 pt-5"
                  />
                  <label className="absolute left-5 top-4 text-sm text-gray-400 transition-all peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full h-14 rounded-2xl border border-gray-200 bg-white px-5 pt-5"
                  />
                  <label className="absolute left-5 top-4 text-sm text-gray-400 transition-all peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs">
                    Message
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-2xl bg-[#B58A45] text-white font-semibold"
                >
                  {loading
                    ? "Submitting..."
                    : "Get Free Consultation"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}