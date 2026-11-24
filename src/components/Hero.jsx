
import { ArrowLeft, ArrowRight, Building2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  const { isAr, t } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-[#0B192C]"
    >
      <img
        src={heroImg}
        alt="Hamdan Group Skyline"
        className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
      />

      <div
        className={`absolute inset-0 ${
          isAr
            ? "bg-gradient-to-l from-[#0B192C]/90 via-[#0B192C]/50 to-transparent"
            : "bg-gradient-to-r from-[#0B192C]/90 via-[#0B192C]/50 to-transparent"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-[#0B192C]/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F233D]/90 border border-[#D4AF37]/40 text-[#E6C567] text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm">
            <Building2 className="w-4 h-4 shrink-0" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
            {t.hero.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl drop-shadow">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#companies"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#E6C567] text-[#0B192C] font-bold text-sm sm:text-base shadow-lg shadow-[#D4AF37]/20 transition-all duration-200"
            >
              <span>{t.hero.primaryBtn}</span>
              <ArrowIcon className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-200"
            >
              {t.hero.secondaryBtn}
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#D4AF37]/25 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl">
          {t.hero.stats.map((stat, index) => (
            <div key={index}>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#E6C567] drop-shadow">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-200 font-medium drop-shadow">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
