import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const PHONE_NUMBER = "923224377518";

function ContactUs() {
  const whatsappMessage = encodeURIComponent(
    "Hi Zain Rent a Car & Tours, I would like to get more information about your rental cars and tour packages."
  );

  return (
    <section id="contact" className="bg-gray-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Let's Plan Your
            <br />
            <span className="text-yellow-400">
              Perfect Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Need a rental car or planning your next trip?
            Contact Zain Rent a Car & Tours and let us help you
            plan a comfortable and memorable journey.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">

            <h3 className="text-2xl font-black text-white">
              Contact Information
            </h3>

            <p className="mt-3 text-gray-400">
              We're available to help you with car rentals,
              airport transfers and customized tour packages.
            </p>

            {/* PHONE */}
            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-400/50 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Call Us
                </p>

                <p className="font-bold text-white">
                  +92 3224377518
                </p>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-400/50 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black">
                <MessageCircle size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  WhatsApp
                </p>

                <p className="font-bold text-white">
                  Chat With Us
                </p>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:info@zainrentacar77@gmail.com"
              className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-yellow-400/50 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Email
                </p>

                <p className="font-bold text-white">
                  zainrentacar77@gmail.com
                </p>
              </div>
            </a>

            {/* LOCATION */}
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Location
                </p>

                <p className="font-bold text-white">
                  Lahore, Pakistan
                </p>
              </div>
            </div>

            {/* HOURS */}
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black">
                <Clock3 size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Business Hours
                </p>

                <p className="font-bold text-white">
                  Mon - Sun: 24 Hours
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-10">

            <h3 className="text-2xl font-black text-gray-900">
              Send Us a Message
            </h3>

            <p className="mt-2 text-gray-500">
              Tell us what you need and we'll get back to you.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);

                const name = formData.get("name");
                const phone = formData.get("phone");
                const service = formData.get("service");
                const message = formData.get("message");

                const text = encodeURIComponent(
                  `Hi Zain Rent a Car & Tours,

Name: ${name}
Phone: ${phone}
Service: ${service}

Message:
${message}`
                );

                window.open(
                  `https://wa.me/${PHONE_NUMBER}?text=${text}`,
                  "_blank"
                );
              }}
              className="mt-8 space-y-5"
            >

              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="03XX XXXXXXX"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              {/* SERVICE */}
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  I'm Interested In
                </label>

                <select
                  name="service"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                >
                  <option>Car Rental</option>
                  <option>Tour Package</option>
                  <option>Airport Transfer</option>
                  <option>Corporate Transport</option>
                  <option>Custom Trip</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-4 font-bold text-white transition hover:bg-yellow-400 hover:text-black"
              >
                Send on WhatsApp
                <ArrowRight size={18} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;