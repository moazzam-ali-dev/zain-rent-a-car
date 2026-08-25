import {
  CalendarDays,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const tours = [
  {
    destination: "hunza Valley",
    location: "Gilgit-Baltistan",
    days: "5 Days / 4 Nights",
    image: "/images/hunza.jpg",
    price: "From PKR 45,000",
    included: [
      "Private Transport",
      "Hotel Accommodation",
      "Breakfast",
      "Sightseeing",
    ],
  },
  {
    destination: "Skardu",
    location: "Gilgit-Baltistan",
    days: "6 Days / 5 Nights",
    image: "/images/skardu.jpg",
    price: "From PKR 55,000",
    included: [
      "Private Transport",
      "Hotel Accommodation",
      "Breakfast",
      "Tour Guide",
    ],
  },
  {
    destination: "Murree",
    location: "Punjab",
    days: "3 Days / 2 Nights",
    image: "/images/Murree.jpg",
    price: "From PKR 25,000",
    included: [
      "Private Transport",
      "Hotel Accommodation",
      "Breakfast",
      "Sightseeing",
    ],
  },
  {
    destination: "Swat Valley",
    location: "Khyber Pakhtunkhwa",
    days: "4 Days / 3 Nights",
    image: "/images/swat.jpg",
    price: "From PKR 35,000",
    included: [
      "Private Transport",
      "Hotel Accommodation",
      "Breakfast",
      "Sightseeing",
    ],
  },
  {
    destination: "Naran Kaghan",
    location: "Khyber Pakhtunkhwa",
    days: "4 Days / 3 Nights",
    image: "/images/naran.jpg",
    price: "From PKR 38,000",
    included: [
      "Private Transport",
      "Hotel Accommodation",
      "Breakfast",
      "Sightseeing",
    ],
  },
  {
    destination: "Neelum Valley",
    location: "Azad Kashmir",
    days: "5 Days / 4 Nights",
    image: "/images/neelum.jpg",
    price: "From PKR 42,000",
    included: [
      "Private Transport",
      "Hotel Accommodation",
      "Breakfast",
      "Sightseeing",
    ],
  },
];

const PHONE_NUMBER = "923224377518";

function Tours() {
  return (
    <section id="tours" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* SECTION HEADING */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
            Explore Pakistan
          </p>

          <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
            Discover Pakistan
            <br />
            <span className="text-yellow-500">
              With Zain Tours
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            Explore Pakistan's most beautiful destinations with comfortable
            transport, quality accommodation and carefully planned tour
            packages.
          </p>
        </div>

        {/* TOUR CARDS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => {
            const whatsappMessage = encodeURIComponent(
              `Hi Zain Rent a Car & Tours, I am interested in the ${tour.destination} tour (${tour.days}). Please share complete details and availability.`
            );

            return (
              <div
                key={tour.destination}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={`${tour.destination} tour`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* LOCATION */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/75 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                    <MapPin size={14} className="text-yellow-400" />
                    {tour.location}
                  </div>

                  {/* DESTINATION */}
                  <div className="absolute bottom-5 left-5">
                    <h3 className="text-3xl font-black text-white">
                      {tour.destination}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* DAYS */}
                  <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-gray-600">
                    <CalendarDays
                      size={18}
                      className="text-yellow-500"
                    />
                    {tour.days}
                  </div>

                  {/* INCLUDED */}
                  <div>
                    <p className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-900">
                      What's Included
                    </p>

                    <div className="grid grid-cols-2 gap-y-3">
                      {tour.included.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 text-yellow-500"
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* PRICE + BOOK */}
                  <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-5">
                    <div>
                      <p className="text-xs text-gray-400">
                        Tour Package
                      </p>

                      <p className="text-lg font-black text-gray-900">
                        {tour.price}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-yellow-400 hover:text-black"
                    >
                      Book Now
                      <ArrowRight size={16} />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 rounded-3xl bg-black px-6 py-10 text-center md:px-10">
          <h3 className="text-2xl font-black text-white md:text-3xl">
            Can't Find Your Destination?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Tell us where you want to go and we'll create a customized
            tour package according to your budget and requirements.
          </p>

          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
              "Hi Zain Rent a Car & Tours, I want a customized tour package."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3 font-bold text-black transition hover:bg-yellow-300"
          >
            Plan My Trip
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Tours;