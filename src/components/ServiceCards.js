// components/ServiceCards.js

const services = [
  {
    title: "Create the Kitchen You’ve Always Wanted",
    description: "Let’s bring your vision to life with a kitchen that’s as Practical as it is beautiful.",
    image: "./kitchen1.jpg", // Place image in /public/images/
    buttonText: "Discover more",
  },
  {
    title: " Your Perfect Wardrobe designs,Tailored by Us",
    description: "From luxurious walk-ins to sleek storage solutions, see how we can make your wardrobe dreams a reality.",
    image: "./wardrobe1.jpg",
    buttonText: "Discover more",
  },
  {
    title: "Get Personalized Interior Design Quote in Minutes",
    description: "Let’s bring your vision to life with a kitchen that’s as Practical as it is beautiful.",
    image: "./personalized.jpg",
    buttonText: "Get Free Estimate",
  },
];

export default function ServiceCards() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6" style={{backgroundColor:"white" , padding:"30px",paddingTop:"50px"}}>
      {services.map((service, index) => (
        <div key={index} className="border rounded-2xl shadow-sm flex flex-col px-4">
          <h3 className="text-xl text-center font-bold b-2 px-4 py-4" style={{color:"black",fontSize:"18px"}}>{service.title}</h3>
          <img src={service.image} alt={service.title} className="w-full h-60 object-cover" />
          <div className="p-4 flex flex-col justify-between flex-1">
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="mt-auto border border-gray-800 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-100 transition" style={{fontSize:"15px"}}>
              {service.buttonText}
            </button>
          </div>
        </div>
        
      ))}
    </div>
<section className="bg-black-900 text-white py-12 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          We Design Homes That Are Built To Last
        </h1>
        <p className="text-gray-300 mb-6">
          Your home deserves the best. And therefore, we source only the finest materials to ensure your home not only looks stunning but stands the test of time.
        </p>
        <button className="bg-white text-gray-900 font-medium py-2 px-6 rounded hover:bg-black-200 transition" style={{backgroundColor:"white"}}>
          Find out how we do it
        </button>
      </div>
    </section>
  
    </>
  );
}
