
import { Eye, Target, Calendar, ShieldCheck, Layers, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const highlightIcons = [ShieldCheck, Layers, Zap];

const About = () => {
  const { isAr, t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-[#0B192C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B192C]/5 border border-[#D4AF37]/40 text-[#0B192C] text-xs sm:text-sm font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>{t.about.eyebrow}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] leading-tight">
              {t.about.title}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.about.description}
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#0B192C] text-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#E6C567] mb-5">
              <Calendar className="w-6 h-6" />
            </div>
            <p className="text-xs uppercase tracking-wider text-[#E6C567] font-semibold">
              {t.about.foundedBadge}
            </p>
            <p className="mt-2 text-4xl font-extrabold text-white">
              {t.about.experienceValue || (isAr ? "+15 عاماً" : "15+ Years")}
            </p>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-7 sm:p-9 hover:border-[#D4AF37]/60 transition-colors">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#0B192C] text-[#E6C567] flex items-center justify-center shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                {t.about.vision.title}
              </h3>
            </div>
            <p className="text-slate-600 text-base leading-relaxed">
              {t.about.vision.text}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-7 sm:p-9 hover:border-[#D4AF37]/60 transition-colors">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#0B192C] text-[#E6C567] flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                {t.about.mission.title}
              </h3>
            </div>
            <p className="text-slate-600 text-base leading-relaxed">
              {t.about.mission.text}
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.about.highlights.map((item, idx) => {
            const IconComponent = highlightIcons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 text-[#0B192C] flex items-center justify-center shrink-0 mt-0.5">
                  <IconComponent className="w-5 h-5 text-[#b89223]" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#0B192C]">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
