import {
  Users,
  Settings2,
  Fuel,
  ArrowRight,
} from "lucide-react";

const vehicles = [
  {
    name: "Toyota Corolla",
    category: "Sedan",
    image: "/images/corolla.jpg",
    seats: "5 Seats", // Fixed missing property
    transmission: "Automatic",
    fuel: "Petrol",
    price: "From PKR 6,000/day",
  },
  {
    name: "Honda Civic",
    category: "Premium Sedan",
    image: "/images/civic.jpg",
    seats: "5 Seats",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "From PKR 10,000/day",
  },
  {
    name: "Toyota Yaris",
    category: "Economy Sedan",
    image: "/images/yaris.jpg",
    seats: "5 Seats",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "From PKR 5,500/day",
  },
  {
    name: "Toyota Fortuner",
    category: "Luxury SUV",
    image: "/images/fortuner.jpg",
    seats: "7 Seats",
    transmission: "Automatic",
    fuel: "Diesel",
    price: "From PKR 15,000/day",
  },
  {
    name: "land-crusior-v8",
    category: "Luxury SUV",
    image: "/images/land-crusior-v8.jpg",
    seats: "7 Seats",
    transmission: "Automatic",
    fuel: "Diesel",
    price: "From PKR 30,000/day",
  },
  {
    name: "Hyundai Tucson",
    category: "Crossover SUV",
    image: "/images/tucson.jpg",
    seats: "5 Seats",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "From PKR 10,000/day",
  },
  {
  name: "Honda BR-V",
  category: "Family SUV",
  image: "/images/brv.jpg",
  seats: "7 Seats",
  transmission: "Automatic",
  fuel: "Petrol",
  price: "From PKR 8,000/day",
},

{
  name: "Haval H6",
  category: "Luxury SUV",
  image: "/images/haval-h6.jpg",
  seats: "5 Seats",
  transmission: "Automatic",
  fuel: "Petrol",
  price: "From PKR 15,000/day",
},

{
  name: "Toyota Hilux Revo",
  category: "Pickup",
  image: "/images/revo.jpg",
  seats: "5 Seats",
  transmission: "Automatic",
  fuel: "Diesel",
  price: "From PKR 15,000/day",
},

{
  name: "Kia Sportage",
  category: "Premium SUV",
  image: "/images/sportage.jpg",
  seats: "5 Seats",
  transmission: "Automatic",
  fuel: "Petrol",
  price: "From PKR 10,000/day",
},

{
  name: "Toyota 4C",
  category: "Family Vehicle",
  image: "/images/coaster-4c.jpg",
  seats: "29 Seats",
  transmission: "Manual",
  fuel: "Diesel",
  price: "From PKR 18,000/day",
},

{
  name: "Toyota 5C",
  category: "Family Vehicle",
  image: "/images/coaster-5c.jpg",
  seats: "29 Seats",
  transmission: "Manual",
  fuel: "Diesel",
  price: "From PKR 22,000/day",
},

{
  name: "Mazda",
  category: "Family Vehicle",
  image: "/images/mazda.jpg",
  seats: "35 Seats",
  transmission: "Manual",
  fuel: "Diesel",
  price: "From PKR 12,000/day",
},
];

const PHONE_NUMBER = "923224377518";

function Fleet() {
  return (
    <section id="fleet" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
              Our Fleet
            </p>

            <h2 className="text-4xl font-black text-gray-900 md:text-5xl">
              Find The Perfect
              <br />
              <span className="text-yellow-500">
                Ride For Your Journey
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-gray-500">
              From comfortable sedans to premium SUVs, choose a vehicle
              that fits your trip, family and budget.
            </p>
          </div>

          <button
            type="button"
            className="flex w-fit items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-800 transition hover:border-yellow-400 hover:bg-yellow-400"
          >
            View All Vehicles
            <ArrowRight size={18} />
          </button>
        </div>

        {/* VEHICLE CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => {
            const whatsappMessage = encodeURIComponent(
              `Hi, I am interested in renting the ${vehicle.name} (${vehicle.price}). Is it available?`
            );

            return (
              <div
                key={vehicle.name}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} rental car`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-black/80 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                    {vehicle.category}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-2xl font-black text-gray-900">
                    {vehicle.name}
                  </h3>

                  {/* CAR DETAILS */}
                  <div className="mt-5 grid grid-cols-3 gap-3 border-y border-gray-100 py-4">
                    {/* SEATS */}
                    <div className="flex flex-col items-center gap-1 text-center">
                      <Users size={18} className="text-yellow-500" />
                      <span className="text-xs text-gray-500">
                        {vehicle.seats}
                      </span>
                    </div>

                    {/* TRANSMISSION */}
                    <div className="flex flex-col items-center gap-1 text-center">
                      <Settings2 size={18} className="text-yellow-500" />
                      <span className="text-xs text-gray-500">
                        {vehicle.transmission}
                      </span>
                    </div>

                    {/* FUEL */}
                    <div className="flex flex-col items-center gap-1 text-center">
                      <Fuel size={18} className="text-yellow-500" />
                      <span className="text-xs text-gray-500">
                        {vehicle.fuel}
                      </span>
                    </div>
                  </div>

                  {/* PRICE + BOOK */}
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">Rental</p>
                      <p className="font-bold text-gray-900">
                        {vehicle.price}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-yellow-400 hover:text-black"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Fleet;