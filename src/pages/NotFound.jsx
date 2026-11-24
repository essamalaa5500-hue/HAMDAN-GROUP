import { Link } from "react-router-dom";
import { Home, Building2, Compass } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const { isAr } = useLanguage();

  return (
    <section className="min-h-[65vh] flex items-center justify-center bg-slate-50 px-4 py-16 text-[#0B192C]">
      <div className="max-w-xl w-full bg-white rounded-2xl border border-slate-200 shadow-lg p-8 sm:p-10 text-center">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-[#0B192C] text-[#E6C567] flex items-center justify-center border border-[#D4AF37]/40 mb-5">
          <Compass className="w-7 h-7" />
        </div>

        <p className="text-sm font-extrabold tracking-widest text-[#b89223] uppercase">
          404
        </p>

        <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
          {isAr ? "الصفحة أو الرابط غير موجود" : "Page or Link Not Found"}
        </h1>

        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          {isAr
            ? "يبدو أن الرابط الذي حاولت الوصول إليه غير صحيح أو تم نقله. يمكنك العودة إلى الصفحة الرئيسية أو استعراض شركات مجموعة حمدان."
            : "The link you followed may be broken or no longer available. You can return to the home page or browse Hamdan Group companies."}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B192C] hover:bg-[#163154] text-[#E6C567] font-bold text-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>{isAr ? "العودة للرئيسية" : "Back to Home"}</span>
          </Link>

          <Link
            to="/#companies"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B192C] border border-slate-200 font-bold text-sm transition-colors"
          >
            <Building2 className="w-4 h-4 text-[#b89223]" />
            <span>{isAr ? "استعراض الشركات" : "Explore Companies"}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
