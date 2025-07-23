import React from "react";
import {
  Check,
  Layers,
  MessageCircle,
  Book,
  Package,
  Brain,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const features = [
  {
    icon: <Layers className="w-6 h-6 text-green-500" />,
    title: "Layeredsecurity",
    description: "Withlayeredsecurityweensurethesafetyofeveryunitweprovide",
  },
  {
    icon: <Check className="w-6 h-6 text-green-500" />,
    title: "Qualitycontrolofeachpart",
    description: "Everyunityousendischeckedcarefullyforeverydetail",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-green-500" />,
    title: "Reliablecustomerservice",
    description:
      "Ourcustomerserviceisavailable24hoursaweekwithqualifiedpeople.",
  },
  {
    icon: <Book className="w-6 h-6 text-green-500" />,
    title: "Maintenancemanualbook",
    description: "Weprovideaguidebookthatcanbeusedtoensuremaximumcare.",
  },
  {
    icon: <Package className="w-6 h-6 text-green-500" />,
    title: "Deliveredsafely",
    description:
      "Everyunitwesendarrivessafelyandquicklywithoutanyobstaclesordrama",
  },
  {
    icon: <Brain className="w-6 h-6 text-green-500" />,
    title: "Basedonartificialintelligence",
    description:
      "Youcancontrolandvieweachunitfromyourphoneitsveryeasytouse",
  },
];

const OfferQuality = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-10 lg:px-20 text-gray-800">
      {/* TITLE */}
      <h1 className="text-2xl sm:text-4xl text-center font-light max-w-4xl mx-auto mb-12 leading-snug">
        <span className="font-semibold text-black">{t("Weofferquality")},</span>{" "}
        {t("withhebestmaterialsandservice")}
      </h1>

      {/* GRID OF FEATURES */}
      <div className="bg-white rounded-xl shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 sm:p-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 items-start text-left transition hover:scale-[1.02] "
          >
            <div className="bg-white shadow-md p-3 rounded-xl ">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold">{t(feature.title)}</h3>
            <p className="text-sm text-gray-500">{t(feature.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferQuality;
