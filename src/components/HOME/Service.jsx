import React from 'react';


const services = [
  {
    icon: "👷🏼‍♀️", // Replace with your icon or image
    title: "Manufacture",
    description: "With decades of manufacturing and engineering experience at Vista, you can be confident that your fittings, furniture and installations will be of the highest quality finish."
  },
  {
    icon: "💻", // Replace with your icon or image
    title: "Design And Development",
    description: "Our extensive experience of working with brands and retailers results in creative and engaging design underpinned by the latest in passenger trends and shopper insights."
  },
  {
    icon: "⚙️", // Replace with your icon or image
    title: "Project Management",
    description: "From the beginning of a concept, right through to the final installation, we appoint a dedicated and experienced manager to oversee each project with detail and precision."
  },
  {
    icon: "🔧", // Replace with your icon or image
    title: "Installation / Align Locally",
    description: "Vista’s Pan India presence ensures that we can guarantee local access to even the most remote locations."
  },
  {
    icon: "📐", // Replace with your icon or image
    title: "Measurements On Site",
    description: "Recce is an important part to begin any project. We have services for site measurements with all necessary tools."
  },
  {
    icon: "🛠️", // Replace with your icon or image
    title: "Maintenance",
    description: "We are renowned for the ongoing care and professional relationships we maintain with our clients."
  }
];

const Service = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">We Offer</h2>
      <p className="text-lg mb-16 max-w-xl mx-auto">
        We believe in giving shoppers the best possible brand experience in-store,
        We provide Value Added Services Pan India
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 m-2 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-sky-500"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
