import {
  Car,
  UserRound,
  Plane,
  Route,
  BriefcaseBusiness,
  Clock3,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Car Rental",
    description:
      "Rent clean, comfortable and well-maintained vehicles for your daily travel and special occasions.",
  },
  {
    icon: UserRound,
    title: "Car With Driver",
    description:
      "Travel comfortably with professional and experienced drivers for local and outstation journeys.",
  },
  {
    icon: Plane,
    title: "Airport Transfer",
    description:
      "Reliable airport pickup and drop-off service with comfortable vehicles and on-time drivers.",
  },
  {
    icon: Route,
    title: "Tours & Trips",
    description:
      "Explore beautiful destinations across Pakistan with customized tour transportation.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Transport",
    description:
      "Professional transportation solutions for companies, meetings, events and business travel.",
  },
  {
    icon: Clock3,
    title: "Long-Term Rental",
    description:
      "Flexible daily, weekly and monthly rental options for personal and business requirements.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* SECTION HEADING */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
            What We Offer
          </p>

          <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
            Complete
            <span className="text-yellow-500">
              {" "}Travel Solutions
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-500">
            From a single-day car rental to complete tours across Pakistan,
            Zain Rent a Car & Tours is here to make your journey comfortable
            and stress-free.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-100 bg-gray-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-yellow-300 hover:bg-black hover:shadow-2xl"
              >

                {/* ICON */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black transition duration-300 group-hover:bg-yellow-400">
                  <Icon size={27} />
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-black text-gray-900 transition group-hover:text-white">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 leading-7 text-gray-500 transition group-hover:text-gray-300">
                  {service.description}
                </p>

                {/* LEARN MORE */}
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition group-hover:text-yellow-400"
                >
                  Learn More
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

              </div>
            );
          })}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-black p-8 md:p-10">

          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Need A Ride?
              </p>

              <h3 className="mt-2 text-3xl font-black text-white md:text-4xl">
                Let us plan your journey.
              </h3>

              <p className="mt-3 max-w-xl text-gray-400">
                Tell us where you want to go and we will help you choose
                the right vehicle and travel option.
              </p>
            </div>

            <a
              href="https://wa.me/923224377518"
              target="_blank"
              rel="noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-300"
            >
              Contact Us
              <ArrowRight size={18} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;