import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Globe,
  Menu,
  X,
  Coffee,
  Utensils,
  Wrench,
  Briefcase,
  HardHat,
  Ship,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logoImg from "../assets/logo.jpeg";

const sectorIcons = {
  "grand-levant": Utensils,
  "black-pearl-cafe": Coffee,
  "location-cafe": Coffee,
  "hamdan-business-services": Briefcase,
  "rzm-contracting": HardHat,
  "al-hareef-auto": Wrench,
  "hamdan-shipping-clearing": Ship,
};

const Navbar = () => {
  const { isAr, t, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSwitch = () => {
    toggleLanguage();
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B192C] text-white shadow-lg border-b border-[#D4AF37]/25">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div
          dir="ltr"
          className="flex items-center justify-between gap-2 h-16 sm:h-20"
        >
          {/* Logo + Brand Name */}
          <Link
            to="/#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 sm:gap-3 min-w-0 shrink group"
          >
            <img
              src={logoImg}
              alt="Hamdan Group Logo"
              className="h-9 sm:h-12 w-auto max-w-[44px] sm:max-w-none object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight text-left border-l border-[#D4AF37]/30 pl-2 sm:pl-3 min-w-0">
              <span className="text-xs sm:text-base font-bold tracking-wider text-[#E6C567] uppercase truncate">
                {t.brand.enName}
              </span>
              <span className="text-[11px] sm:text-sm font-semibold text-gray-100 truncate">
                {t.brand.arName}
              </span>
            </div>
          </Link>

          
          <nav
            dir={isAr ? "rtl" : "ltr"}
            className="hidden md:flex items-center gap-7 lg:gap-8 text-sm lg:text-base font-medium shrink-0"
          >
            <Link
              to="/#home"
              className="text-gray-200 hover:text-[#E6C567] transition-colors py-2 whitespace-nowrap"
            >
              {t.nav.home}
            </Link>

            <Link
              to="/#about"
              className="text-gray-200 hover:text-[#E6C567] transition-colors py-2 whitespace-nowrap"
            >
              {t.nav.about}
            </Link>

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1.5 text-gray-200 hover:text-[#E6C567] transition-colors py-2 whitespace-nowrap focus:outline-none cursor-pointer"
              >
                <span>{t.nav.companies}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#E6C567] transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div
                  className={`absolute top-full ${
                    isAr ? "right-0" : "left-0"
                  } w-80 pt-2 z-50`}
                >
                  <div className="bg-[#0F233D] border border-[#D4AF37]/30 rounded-xl shadow-2xl overflow-hidden max-h-[75vh] overflow-y-auto py-2">
                    {t.nav.sectors.map((sector) => {
                      const IconComponent = sectorIcons[sector.id] || Briefcase;
                      return (
                        <Link
                          key={sector.id}
                          to={sector.href}
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-start gap-3.5 px-4 py-2.5 hover:bg-[#163154] transition-colors group/item"
                        >
                          <div className="p-2 rounded-lg bg-[#0B192C] text-[#E6C567] border border-[#D4AF37]/20 group-hover/item:border-[#E6C567] transition-colors mt-0.5 shrink-0">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white group-hover/item:text-[#E6C567] transition-colors">
                              {sector.title}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {sector.subtitle}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/#contact"
              className="text-gray-200 hover:text-[#E6C567] transition-colors py-2 whitespace-nowrap"
            >
              {t.nav.contact}
            </Link>
          </nav>

          
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={handleLanguageSwitch}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg border border-[#D4AF37]/50 text-[#E6C567] hover:bg-[#D4AF37] hover:text-[#0B192C] font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>{t.nav.langBtn}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg text-gray-200 hover:text-[#E6C567] hover:bg-[#163154] shrink-0 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

     
      {isMobileMenuOpen && (
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="md:hidden bg-[#0F233D] border-t border-[#D4AF37]/20 px-3 sm:px-4 pt-3 pb-5 max-h-[82vh] overflow-y-auto space-y-1.5"
        >
          <Link
            to="/#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-lg text-sm sm:text-base font-medium text-gray-200 hover:bg-[#163154] hover:text-[#E6C567]"
          >
            {t.nav.home}
          </Link>

          <Link
            to="/#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-lg text-sm sm:text-base font-medium text-gray-200 hover:bg-[#163154] hover:text-[#E6C567]"
          >
            {t.nav.about}
          </Link>

          <div>
            <button
              type="button"
              onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm sm:text-base font-medium text-gray-200 hover:bg-[#163154] hover:text-[#E6C567]"
            >
              <span>{t.nav.companies}</span>
              <ChevronDown
                className={`w-4 h-4 text-[#E6C567] transition-transform duration-200 ${
                  isMobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMobileDropdownOpen && (
              <div className="mt-1 space-y-1 px-2 border-s-2 border-[#D4AF37]/40 ms-3">
                {t.nav.sectors.map((sector) => {
                  const IconComponent = sectorIcons[sector.id] || Briefcase;
                  return (
                    <Link
                      key={sector.id}
                      to={sector.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 py-2 px-2.5 rounded-lg text-xs sm:text-sm text-gray-300 hover:text-[#E6C567] hover:bg-[#163154]/60"
                    >
                      <IconComponent className="w-4 h-4 text-[#E6C567] shrink-0" />
                      <span className="truncate">{sector.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            to="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-lg text-sm sm:text-base font-medium text-gray-200 hover:bg-[#163154] hover:text-[#E6C567]"
          >
            {t.nav.contact}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
