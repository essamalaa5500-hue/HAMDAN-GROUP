
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Utensils,
  Coffee,
  Briefcase,
  HardHat,
  Wrench,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const iconsBySlug = {
  "grand-levant": Utensils,
  "black-pearl-cafe": Coffee,
  "location-cafe": Coffee,
  "hamdan-business-services": Briefcase,
  "rzm-contracting": HardHat,
  "al-hareef-auto": Wrench,
};

const CompaniesSection = () => {
  const { isAr, t } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  if (!t?.companiesSection) {
    return null;
  }

  return (
    <section
      id="companies"
      className="py-20 lg:py-28 bg-slate-50 text-[#0B192C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B192C]/5 border border-[#D4AF37]/40 text-[#0B192C] text-xs sm:text-sm font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>{t.companiesSection.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] leading-tight">
            {t.companiesSection.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.companiesSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.companiesSection.items.map((company) => {
            const IconComp = iconsBySlug[company.slug] || Utensils;
            const isLogoCard = company.slug === "grand-levant";

            return (
              <div
                key={company.slug}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#D4AF37] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`relative h-60 w-full overflow-hidden ${
                      isLogoCard
                        ? "bg-[#F3ECE0] p-4 flex items-center justify-center"
                        : "bg-[#0B192C]"
                    }`}
                  >
                    <img
                      src={company.image}
                      alt={company.name}
                      className={
                        isLogoCard
                          ? "max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                          : "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      }
                    />
                    {!isLogoCard && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/70 via-transparent to-transparent" />
                    )}
                    <span className="absolute bottom-3 start-4 text-xs font-bold px-3 py-1 rounded-full bg-[#0B192C]/90 text-[#E6C567] border border-[#D4AF37]/30 backdrop-blur-sm">
                      {company.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#0B192C] leading-snug">
                        {company.name}
                      </h3>
                      <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#b89223] shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {company.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-slate-100">
                  <Link
                    to={`/companies/${company.slug}`}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0B192C] hover:text-[#b89223] transition-colors"
                  >
                    <span>{t.companiesSection.viewDetails}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
