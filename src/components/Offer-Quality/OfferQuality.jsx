import React from "react";
import { Check, Layers, MessageCircle, Book, Package, Brain } from "lucide-react";

const features = [
  {
    icon: <Layers className="w-6 h-6 text-green-500" />,
    title: "Layered security",
    description: "With layered security, we ensure the safety of every unit we provide.",
  },
  {
    icon: <Check className="w-6 h-6 text-green-500" />,
    title: "Quality control of each part",
    description: "Every unit you send is checked carefully for every detail.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    title: "Reliable customer service",
    description: "Our customer service is available 24 hours a week, with qualified people.",
  },
  {
    icon: <Book className="w-6 h-6 text-green-500" />,
    title: "Maintenance manual book",
    description: "We provide a guidebook that can be used to ensure maximum care.",
  },
  {
    icon: <Package className="w-6 h-6 text-green-500" />,
    title: "Delivered safely",
    description: "Every unit we send arrives safely and quickly, without any obstacles or drama.",
  },
  {
    icon: <Brain className="w-6 h-6 text-green-500" />,
    title: "Based on artificial intelligence",
    description: "You can control and view each unit from your phone, it’s very easy to use.",
  },
];

const OfferQuality = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-10 lg:px-20 text-gray-800">
      {/* TITLE */}
      <h1 className="text-2xl sm:text-4xl text-center font-light max-w-4xl mx-auto mb-12 leading-snug">
        <span className="font-semibold text-black">We offer quality,</span> with the
        best materials and service
      </h1>

      {/* GRID OF FEATURES */}
      <div className="bg-white rounded-xl shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 sm:p-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 items-start text-left transition hover:scale-[1.02] "
          >
            <div className="bg-white shadow-md p-3 rounded-xl ">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferQuality;
