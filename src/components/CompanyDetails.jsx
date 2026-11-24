
import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Phone,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_NUMBER = "971559987822";

const CompanyDetails = () => {
  const { slug } = useParams();
  const { isAr, t } = useLanguage();

  const company = t.companiesSection.items.find((item) => item.slug === slug);
  const BackArrow = isAr ? ArrowRight : ArrowLeft;
  const isLogoCard = company?.slug === "grand-levant";

  if (!company) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
        <p className="text-xl font-bold text-[#0B192C] mb-4">
          {isAr ? "الشركة غير موجودة" : "Company Not Found"}
        </p>
        <Link
          to="/#companies"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B192C] text-[#E6C567] font-semibold"
        >
          <BackArrow className="w-4 h-4" />
          <span>{t.companiesSection.backToCompanies}</span>
        </Link>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `مرحباً مجموعة حمدان، أود الاستفسار بخصوص: ${company.name}`
      : `Hello Hamdan Group, I would like to inquire about: ${company.name}`,
  );
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="bg-slate-50 min-h-screen py-14 lg:py-20 text-[#0B192C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/#companies"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#0B192C] mb-8"
        >
          <BackArrow className="w-4 h-4" />
          <span>{t.companiesSection.backToCompanies}</span>
        </Link>

        <div className="bg-[#0B192C] text-white rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xl grid grid-cols-1 md:grid-cols-12">
          {company.image && (
            <div
              className={`md:col-span-4 h-64 md:h-auto flex items-center justify-center ${
                isLogoCard ? "bg-[#F3ECE0] p-5" : "bg-[#0F233D]"
              }`}
            >
              <img
                src={company.image}
                alt={company.name}
                className={
                  isLogoCard
                    ? "max-h-full max-w-full object-contain"
                    : "w-full h-full object-cover object-center"
                }
              />
            </div>
          )}

          <div
            className={`${
              company.image ? "md:col-span-8" : "md:col-span-12"
            } p-7 sm:p-10 flex flex-col justify-between`}
          >
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#E6C567] text-xs font-bold mb-4">
                {company.category}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold">
                {company.name}
              </h1>
              <p className="mt-4 text-slate-200 text-base sm:text-lg leading-relaxed max-w-3xl">
                {company.fullDesc}
              </p>

              <div className="mt-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#E6C567] text-[#0B192C] font-bold text-sm transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>{isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E6C567] shrink-0" />
                <span>{company.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E6C567] shrink-0" />
                <span dir="ltr">{company.phone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 h-fit">
            <h2 className="text-lg font-extrabold text-[#0B192C] mb-4">
              {t.companiesSection.highlightsHeading}
            </h2>
            <ul className="space-y-3.5">
              {company.highlights.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#b89223] shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B192C]">
              {t.companiesSection.menuHeading}
            </h2>

            {company.menuCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7"
              >
                <h3 className="text-lg font-bold text-[#0B192C] pb-3 mb-4 border-b border-slate-100">
                  {cat.title}
                </h3>
                <div className="divide-y divide-slate-100">
                  {cat.items.map((item, j) => (
                    <div
                      key={j}
                      className="py-3 flex items-center justify-between gap-4 text-sm sm:text-base"
                    >
                      <span className="font-medium text-slate-800">
                        {item.name}
                      </span>
                      {item.price && (
                        <span className="font-bold text-[#b89223] shrink-0">
                          {item.price}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
