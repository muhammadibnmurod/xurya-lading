import React from "react";
import SolarPanels from "../../assets/Solarpanels.jpg";

const services = [
  { id: "01", title: "Solar panels for home" },
  { id: "02", title: "Commercial solar solutions" },
  { id: "03", title: "EV charging stations" },
  { id: "04", title: "Battery storage systems" },
];

function TrustService() {
  return (
    <div className="w-full px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="flex-1 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              <span className="font-[600]">Trusted service</span>, for your various needs
            </h1>
            <button className="mt-4 bg-green-200 hover:bg-green-300 text-gray-700 font-semibold py-2 px-6 rounded-2xl transition">
              Get in touch ↗
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
              >
                <p className="text-lg font-bold text-gray-400">{service.id}</p>
                <h4 className="text-xl font-semibold text-green-800 mt-1 mb-3">
                  {service.title}
                </h4>
                <a
                  href="#"
                  className="text-sm text-green-600 hover:underline hover:text-green-800"
                >
                  View details
                </a>
              </div>
            ))}
          </div>
        </div>


        <div className="flex-1 flex justify-center items-center">
          <img
            src={SolarPanels}
            alt="Solar Panels"
            className="w-full max-w-md h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default TrustService;
