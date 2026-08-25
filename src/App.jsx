import { useState } from "react";
import {
  Phone,
  Menu,
  X,
  MapPin,
  CalendarDays,
  Clock3,
  CarFront,
  ArrowRight,
} from "lucide-react";

import Fleet from "./components/Fleet";
import Services from "./components/Services";
import TourPackages from "./components/TourPackages";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ================= NAVBAR ================= */}
      <nav className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          {/* ================= PREMIUM LOGO ================= */}
          <a href="#" className="group flex items-center gap-4">

            {/* Z ICON */}
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-3xl font-black text-black shadow-2xl shadow-yellow-400/30 transition-all duration-300 group-hover:scale-105">
              Z

              {/* Inner Border */}
              <div className="absolute inset-1 rounded-xl border border-black/10" />
            </div>

            {/* BRAND NAME */}
            <div className="leading-none">

              <h1 className="text-4xl font-black tracking-[0.16em] text-white drop-shadow-2xl sm:text-5xl">
                ZAIN
              </h1>

              <div className="mt-2 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-yellow-400" />

                <p className="text-[10px] font-bold tracking-[0.3em] text-yellow-300 sm:text-xs">
                  RENT A CAR
                </p>

                <span className="h-[2px] w-8 bg-yellow-400" />
              </div>

              <p className="mt-2 text-[9px] font-semibold tracking-[0.45em] text-white/80 sm:text-[10px]">
                & TOURS
              </p>

            </div>
          </a>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#"
              className="text-sm font-medium text-white transition hover:text-yellow-400"
            >
              Home
            </a>

            <a
              href="#fleet"
              className="text-sm font-medium text-white transition hover:text-yellow-400"
            >
              Our Fleet
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-white transition hover:text-yellow-400"
            >
              Services
            </a>

            <a
              href="#tours"
              className="text-sm font-medium text-white transition hover:text-yellow-400"
            >
              Tours
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-white transition hover:text-yellow-400"
            >
              Contact
            </a>

          </div>

          {/* ================= CALL BUTTON ================= */}
          <a
            href="tel:+923224377518"
            className="hidden items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-300 md:flex"
          >
            <Phone size={17} />
            Call Now
          </a>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="mx-4 rounded-2xl border border-white/10 bg-black/95 p-6 shadow-xl backdrop-blur-xl md:hidden">

            <div className="flex flex-col gap-5">

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-white transition hover:text-yellow-400"
              >
                Home
              </a>

              <a
                href="#fleet"
                onClick={() => setMenuOpen(false)}
                className="text-white transition hover:text-yellow-400"
              >
                Our Fleet
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="text-white transition hover:text-yellow-400"
              >
                Services
              </a>

              <a
                href="#tours"
                onClick={() => setMenuOpen(false)}
                className="text-white transition hover:text-yellow-400"
              >
                Tours
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-white transition hover:text-yellow-400"
              >
                Contact
              </a>

            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[720px] items-center overflow-hidden bg-black">

        {/* HERO IMAGE */}
        <img
          src="https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/678/2019-audi-a6_100678982.jpg"
          alt="Audi A6 - Zain Rent a Car"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        {/* LIGHT DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />

        {/* ================= HERO CONTENT ================= */}
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 lg:px-8">

          <div className="max-w-3xl">

            {/* SMALL BADGE */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 backdrop-blur-sm">

              <CarFront size={16} className="text-yellow-400" />

              <span className="text-sm font-medium text-yellow-300">
                ZAIN Car Rental & Tours
              </span>

            </div>

            {/* HERO HEADING */}
            <h2 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">

              Your Journey.
              <br />

              <span className="text-yellow-400">
                Our Ride.
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">

              Reliable cars, professional drivers and unforgettable journeys.
              Book your perfect ride with Zain Rent a Car & Tours.

            </p>

            {/* ================= BUTTONS ================= */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* EXPLORE FLEET */}
              <a
                href="#fleet"
                className="flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-4 font-bold text-black shadow-lg shadow-yellow-400/20 transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Explore Our Fleet
                <ArrowRight size={18} />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/923224377518"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                WhatsApp Us
              </a>

            </div>
          </div>

          {/* ================= BOOKING CARD ================= */}
          <div className="mt-12 max-w-5xl rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">

            <div className="grid gap-4 md:grid-cols-4">

              {/* PICKUP LOCATION */}
              <div className="rounded-2xl bg-white p-4">

                <div className="mb-2 flex items-center gap-2 text-gray-500">

                  <MapPin size={18} />

                  <span className="text-xs font-semibold">
                    Pickup Location
                  </span>

                </div>

                <input
                  type="text"
                  placeholder="Lahore"
                  className="w-full bg-transparent font-semibold outline-none"
                />

              </div>

              {/* DATE */}
              <div className="rounded-2xl bg-white p-4">

                <div className="mb-2 flex items-center gap-2 text-gray-500">

                  <CalendarDays size={18} />

                  <span className="text-xs font-semibold">
                    Pickup Date
                  </span>

                </div>

                <input
                  type="date"
                  className="w-full bg-transparent font-semibold outline-none"
                />

              </div>

              {/* TIME */}
              <div className="rounded-2xl bg-white p-4">

                <div className="mb-2 flex items-center gap-2 text-gray-500">

                  <Clock3 size={18} />

                  <span className="text-xs font-semibold">
                    Pickup Time
                  </span>

                </div>

                <input
                  type="time"
                  className="w-full bg-transparent font-semibold outline-none"
                />

              </div>

              {/* FIND CAR */}
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 font-bold text-black transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Find A Car
                <ArrowRight size={18} />
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* ================= QUICK INFO ================= */}
      <section className="border-b bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 lg:px-8">

          <div>
            <h3 className="text-2xl font-black">
              50+
            </h3>

            <p className="text-sm text-gray-500">
              Vehicles Available
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black">
              24/7
            </h3>

            <p className="text-sm text-gray-500">
              Customer Support
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black">
              1000+
            </h3>

            <p className="text-sm text-gray-500">
              Happy Customers
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black">
              Lahore
            </h3>

            <p className="text-sm text-gray-500">
              Based Service
            </p>
          </div>

        </div>
      </section>

      {/* ================= FLEET ================= */}
      <Fleet />

      <Services />

      <TourPackages />

      <ContactUs />

      <Footer />

    </div>
  );
}

export default App;