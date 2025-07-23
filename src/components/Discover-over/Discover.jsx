import React, { useEffect, useRef, useState } from "react";
import backgroundImage from "../../assets/background-img.jpg";
import WindFarm from "../../assets/wind-farm.jpg";
import logo1 from "../../assets/Logo/Coca-Cola.png";
import logoblack from "../../assets/Logo/Coca-Cola-Black.png";

const Discover = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const logosRef = useRef(null);

  const logos = [
    { default: logoblack, hover: logo1 },
    { default: logoblack, hover: logo1 },
    { default: logoblack, hover: logo1 },
    { default: logoblack, hover: logo1 },
    { default: logoblack, hover: logo1 },
  ];

  const stats = [
    { value: "6 mil", label: "Annual net income" },
    { value: "315", label: "Projects completed" },
    { value: "120K", label: "Global Employees" },
  ];

  // ANIMATSIYA TRIGGERI
  useEffect(() => {
    const alreadyAnimated = sessionStorage.getItem("logosAnimated");
    if (alreadyAnimated) {
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          sessionStorage.setItem("logosAnimated", "true");
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (logosRef.current) {
      observer.observe(logosRef.current);
    }

    return () => {
      if (logosRef.current) observer.unobserve(logosRef.current);
    };
  }, []);
  return (
    <>
      <section className="w-full flex justify-center items-center px-4 py-4 bg-white">
        <div className="relative w-full max-w-8xl h-[700px] rounded-2xl shadow-xl overflow-hidden font-sans">
          <div
            className="absolute inset-0 bg-black/50 z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.7)",
            }}
          ></div>

          <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-10 gap-4 sm:gap-6 text-white">
            <h3 className="text-xs sm:text-base font-semibold tracking-wide uppercase">
              #1 Energy provider in the world
            </h3>
            <h1 className="text-2xl sm:text-5xl lg:text-7xl font-extrabold leading-tight max-w-[800px]">
              New Energy <br /> for the Future
            </h1>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-4">
              <a
                href="#"
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition duration-300"
              >
                Get in touch
              </a>
              <a
                href="#"
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition duration-300"
              >
                Our services
              </a>
            </div>
          </div>

          <div className="absolute top-20 right-2 sm:right-10 z-20">
            <div className="bg-white/10 backdrop-blur-md p-3 sm:p-5 rounded-2xl shadow-lg text-white w-[240px] sm:w-[300px] transition hover:scale-105">
              <img
                src={WindFarm}
                alt="Wind Farm"
                className="w-full h-[120px] sm:h-[140px] object-cover rounded-xl mb-4"
              />
              <div className="flex items-center justify-between">
                <p className="text-xs sm:text-sm font-light">
                  Discover Our Recent Project
                </p>
                <button className="border border-white px-2 py-1 rounded-full text-white hover:bg-white hover:text-black transition">
                  ↗
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 z-50 sm:m-0 mb-0 mr-0">
            <div className="relative">
              <div className="bg-white text-black rounded-tl-4xl mb-0 sm:px-10 py-4 sm:py-5 flex flex-wrap gap-4 sm:gap-10 text-center justify-center sm:justify-start">
                <div className="mask-inverse-corner-top-left -left-10 bottom-0"></div>
                <div className="mask-inverse-corner-top-left -top-10 right-0"></div>
                {stats.map((item, index) => (
                  <div key={index} className="min-w-[80px] sm:min-w-[90px]">
                    <h2 className="text-xl sm:text-3xl font-bold">
                      {item.value}
                    </h2>
                    <p className="text-xs sm:text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 sm:py-20">
        {/* Matn bloki */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 px-4 sm:px-10 lg:px-20">
          <h1 className="text-2xl sm:text-4xl text-gray-900 leading-snug max-w-md">
            <span className="block text-black">Focusing on quality</span>
            <span className="block font-sans text-gray-400">
              we maintain customer trust
            </span>
          </h1>
          <p className="text-gray-500 max-w-2xl text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            molestias enim illo. Dolor, illum vero beatae non temporibus quos
            nostrum neque iusto nulla magnam dolorem impedit fugit repellat
            minus unde?
          </p>
        </div>

        <div
          ref={logosRef}
          className="mt-10 flex flex-col items-center justify-center sm:px-6"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center transition-all duration-700 ease-out transform ${
                  hoveredIndex === index ? "bg-white shadow-lg" : "bg-gray-200"
                } ${
                  hasAnimated
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`, // ketma-ket chiqadi
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={hoveredIndex === index ? logo.hover : logo.default}
                  alt={`Logo ${index + 1}`}
                  className="w-16 sm:w-20 h-auto object-contain transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
