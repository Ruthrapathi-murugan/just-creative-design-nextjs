export default function WhoWeDesignFor() {
  const categories = [
    {
      title: "New Homeowners",
      desc: "Starting fresh in a new apartment or villa? We help you create interiors that are stylish, functional, and fully move-in ready—so your dream home feels complete from day one.",
      icon: "./home.jpg",
    },
    {
      title: "Working Professionals",
      desc: "For those with busy schedules, we offer end-to-end, ready-to-use interior solutions—designed for convenience, comfort, and effortless living.",
      icon: "./delivery.jpg",
    },
    {
      title: "Families Upgrading Their Space",
      desc: "As your family grows, so do your needs. We specialize in redesigning existing homes to be more organized, comfortable, and in tune with your changing lifestyle.",
      icon: "./family.jpg",
    },
    {
      title: "Design-Lovers & Trend-Seekers",
      desc: "Whether you love sleek minimalism, modern luxury, or a cozy blend of both, we turn your aesthetic into reality with curated colors, textures, and layouts.",
      icon: "./design lover.jpg",
    },
    {
      title: "Homeowners in Bangalore Looking for Trusted Designers",
      desc: 'Tired of searching "interior designer near me"? With 100+ completed projects across Bangalore, we bring experience, creativity, and professionalism right to your doorstep.',
      icon: "./Homeowners.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Who We Design For</h2>
      <p className="mt-2 lg:text-2xl  text-gray-600 md:text-xl " style={{fontFamily:"Helvetica Neue",textAlign:"justify"}}>
        At Just Creative Designs, we understand that every home tells a different story. That’s why our interior
        design services are tailored to fit different needs, styles, and stages of life:
      </p>

      <div className="max-w-6xl mx-auto p-0">
        <div className="grid gap-6 p-0 grid-cols-1 sm:grid-cols-2" style={{padding:"20px"}}>
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`flex flex-col items-start p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300
              ${i === categories.length - 1 && categories.length % 2 !== 0 ? 'sm:col-span-2 sm:mx-auto sm:max-w-md' : ''}`}
            >
              <div className="mb-4 bg-rose-100 p-1 rounded-full">
                <img src={cat.icon} alt={`${cat.title} icon`} className="w-14 h-15" />
              </div>
              <h3 className="text-lg mb-4" style={{fontFamily:"Helvetica Neue",fontSize:"24px"}}>{cat.title}</h3>
              <p className="text-sm text-gray-600"  style={{fontFamily:"Helvetica Neue",fontSize:"18px"}}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
