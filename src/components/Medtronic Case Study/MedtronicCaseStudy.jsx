import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import SolarPanels from "../../assets/solar-panels.jpg";
// import ChargingStation from "../../assets/charging-station.jpg";
// import WindTurbine from "../../assets/wind-turbine.jpg";
import { useTranslation } from "react-i18next";

const data = [
  {
    title: "ElectricCarChargingStation",
    company: "TeslaEnergy",
    quote:
      "We built a fast and reliable charging network across all regions using Xurya's smart solutions.",
    author: "ElonDCTOTeslaEnergy",
    image: SolarPanels,
  },
  {
    title: "ResidentialSolarPanels",
    company: "Medtronic",
    quote:
      "WeareverysatisfiedwiththeservicesfromXuryaThishelpedusincreaseefficiencygreatly",
    author: "JenniferKolobalyCTOEVMedtronic",
    image: SolarPanels,
  },
  {
    title: "WindPowerforIndustry",
    company: "WindNovaCorp",
    quote:
      "Xuryaswindsolutionshelpedusreducecostsandmovetowardcleanerenergygoals",
    author: "MarcusLHeadofOpsatWindNova",
    image: SolarPanels,
  },
];

const MedtronicCaseStudy = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = data[activeIndex];
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-10">
        {t("Seehowwesolveproblemsrightontarget")}
      </h1>

      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl p-6 lg:p-10 max-w-7xl w-full gap-8 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 space-y-5 flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-green-700">
              {t(current.company)}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {t(current.quote)}
            </p>
            <button className="bg-green-500 text-white font-medium px-6 py-3 rounded-full hover:bg-green-600 transition duration-200 w-fit">
              {t("Viewcasestudy")}
            </button>
            <p className="text-sm text-gray-500 mt-2">{t(current.author)}</p>
          </motion.div>

          <motion.div
            key={current.image}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <img
              src={current.image}
              alt={t(current.title)}
              className="rounded-xl object-cover w-full sm:h-[300px] md:h-[350px] lg:h-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-10 text-sm sm:text-base">
        {data.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-5 py-2 rounded-full border transition duration-200 ${
              idx === activeIndex
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {t(item.title)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MedtronicCaseStudy;
