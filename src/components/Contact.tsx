import React, { useState } from "react";
import { Phone, Instagram, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");

 const openWhatsApp = () => {
  if (!name.trim() || !phone.trim() || !area.trim()) {
    alert("Please fill all the required fields before contacting us.");
    return;
  }

  if (phone.length !== 10) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  const myNumber = "8185871689";

  const message = `
*New Appointment Request*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📍 *Area / Location:* ${area}
`;

  const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};


  return (
    <section id="contact" className="py-24 bg-[#faf7f3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-5xl font-bold text-center mb-4">
          Book Your <span className="text-amber-600">Appointment</span>
        </h2>

        <p className="text-center text-gray-600 text-lg mb-16">
          Our designer will visit you personally for consultations and measurements
        </p>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT FORM */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

              {/* Full Name */}
              <div>
                <label className="block font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block font-semibold mb-2">Phone Number *</label>
                <input
                  type="text"
                  value={phone}
                  maxLength={10}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder="Enter your 10-digit mobile number"
                  required
                  className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Area / Location */}
              <div>
                <label className="block font-semibold mb-2">Area / Location *</label>
                <textarea
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Enter your area or location"
                required
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-amber-400 h-24 resize-none"
              />

              </div>

              <p className="text-gray-500 text-sm">
                You can share reference images via WhatsApp after booking
              </p>

              {/* BUTTON */}
              <button
                type="button"
                onClick={openWhatsApp}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Contact Us via WhatsApp
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* Connection Options */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <h3 className="text-xl font-semibold mb-6">Other Ways to Connect</h3>

              <div className="space-y-4">

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 border rounded-xl">
                  <Phone size={22} className="text-amber-500" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-500 text-sm">+91  98491 90616</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-4 p-4 border rounded-xl">
                  <Instagram size={22} className="text-amber-500" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-gray-500 text-sm">@univouge_official</p>
                  </div>
                </div>

              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-gradient-to-br from-amber-50 to-gray-100 p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>

              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center">1</span>
                  We’ll confirm your appointment via WhatsApp
                </li>

                <li className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center">2</span>
                  Our designer visits you at your location
                </li>

                <li className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center">3</span>
                  Consultation, measurements, and fabric selection
                </li>

                <li className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center">4</span>
                  Your custom celebrity look is created perfectly
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
