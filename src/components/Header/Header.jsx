import React, { useMemo, useState, useEffect } from "react";
import LogoImg from "../../assets/Logo.jpg";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const navLinks = ["home", "about", "features", "services", "contact"];
const languageOptions = [
  { label: "English", code: "en" },
  { label: "Uzbek", code: "uz" },
  { label: "Russian", code: "ru" },
];

function Header() {
  const { t, i18n } = useTranslation();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    () => localStorage.getItem("i18nextLng") || "en"
  );

  const handleLanguageSelect = (lang) => {
    i18n.changeLanguage(lang.code);
    setSelectedLang(lang.code);
    setLanguageOpen(false);
  };

  const langLabel = useMemo(
    () => languageOptions.find((item) => item.code === selectedLang)?.label,
    [selectedLang]
  );

  useEffect(() => {
    const currentLang = localStorage.getItem("i18nextLng");
    if (!currentLang) {
      const defaultLang = "en";
      i18n.changeLanguage(defaultLang).then(() => {
        localStorage.setItem("i18nextLng", defaultLang);
        setSelectedLang(defaultLang);
      });
    } else {
      setSelectedLang(currentLang);
    }
  }, [i18n]);

  return (
    <header className="bg-white py-4 px-6 ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={LogoImg}
            alt="Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <p className="text-xl font-bold text-gray-800">Xurya</p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 hover:text-green-600 transition"
            >
              {t(link)}
            </a>
          ))}
        </nav>

        {/* Button */}
        <div className="hidden md:flex items-center space-x-3 relative">
          <button className="px-4 py-2 border border-green-600 text-green-600 rounded-3xl hover:bg-green-100 transition">
            {t("Login")}
          </button>

          {/* Language */}
          <div className="relative z-100">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="px-4 py-2 border border-green-600 text-gray-700 rounded-3xl hover:bg-gray-100 transition"
            >
              {langLabel}
            </button>

            {languageOpen && (
              <ul className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-md z-10">
                {languageOptions.map((lang, index) => (
                  <li
                    key={index}
                    onClick={() => handleLanguageSelect(lang)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="px-4 py-2 bg-green-600 text-white rounded-3xl hover:bg-green-700 transition">
            {t("Getintouch")}
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-green-600 transition"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex flex-col space-y-2 pt-2">
            <button className="px-4 py-2 border border-green-600 text-green-600 rounded-3xl hover:bg-green-100 transition">
              {t("Login")}
            </button>

            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="w-full px-4 py-2 border border-gray-400 text-gray-700 rounded-3xl hover:bg-gray-100 transition text-left"
              >
                {selectedLang}
              </button>

              {languageOpen && (
                <ul className="mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md z-10">
                  {languageOptions.map((lang, index) => (
                    <li
                      key={index}
                      onClick={() => handleLanguageSelect(lang)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {lang.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button className="px-4 py-2 bg-green-600 text-white rounded-3xl hover:bg-green-700 transition">
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
