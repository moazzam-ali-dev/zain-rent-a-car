import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const PHONE_NUMBER = "923224377518";

function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hi Zain Rent a Car & Tours, I would like to book a car or tour package."
  );

  return (
    <footer className="bg-black text-white">

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <a
              href="#home"
              className="text-2xl font-black tracking-tight"
            >
              ZAIN
              <span className="text-yellow-400">
                Rent a Car
              </span>
              <br />
              <span className="text-lg text-gray-400">
                & Tours
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Your trusted partner for premium car rentals,
              comfortable travel and unforgettable tours across
              Pakistan.
            </p>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-300"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <a
                  href="#home"
                  className="transition hover:text-yellow-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-yellow-400"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#fleet"
                  className="transition hover:text-yellow-400"
                >
                  Our Fleet
                </a>
              </li>

              <li>
                <a
                  href="#tours"
                  className="transition hover:text-yellow-400"
                >
                  Tour Packages
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-yellow-400"
                >
                  Contact Us
                </a>
              </li>

            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Our Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>Car Rental</li>
              <li>Airport Transfers</li>
              <li>Tour Packages</li>
              <li>Corporate Transport</li>
              <li>Wedding Cars</li>
              <li>Customized Trips</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* PHONE */}
              <a
                href={`tel:+${PHONE_NUMBER}`}
                className="flex items-start gap-3 text-sm text-gray-400 transition hover:text-yellow-400"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-yellow-400"
                />

                <span>
                  +92 322 4377518
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:zainrentacar77@gmail.com"
                className="flex items-start gap-3 text-sm text-gray-400 transition hover:text-yellow-400"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-yellow-400"
                />

                <span>
                  zainrentacar77@gmail.com
                </span>
              </a>

              {/* LOCATION */}
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-yellow-400"
                />

                <span>
                  Lahore, Pakistan
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between md:p-8">

          <div>
            <h3 className="text-xl font-black md:text-2xl">
              Ready to Start Your Journey?
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Book your vehicle or plan your next Pakistan tour with us.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-yellow-300 md:mt-0"
          >
            Get Started
            <ArrowUpRight size={18} />
          </a>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Zain Rent a Car & Tours.
            All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="#"
              className="transition hover:text-yellow-400"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-yellow-400"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;