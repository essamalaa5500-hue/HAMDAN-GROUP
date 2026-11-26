import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

const Footer = () => {
  const { isAr, t } = useLanguage();

  if (!t?.footer) {
    return null;
  }

  const quickLinks = [
    { label: t.nav.home, to: "/#home" },
    { label: t.nav.about, to: "/#about" },
    { label: t.nav.companies, to: "/#companies" },
    { label: t.nav.contact, to: "/#contact" },
  ];

  return (
    <footer className="bg-[#0B192C] text-slate-300 border-t border-[#D4AF37]/30 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <Reveal
            variant="up"
            delay={0}
            duration={600}
            className="lg:col-span-4"
          >
            <div className="space-y-4">
              <Link to="/#home" className="inline-flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-wide text-[#E6C567]">
                  {isAr ? t.brand.arName : t.brand.enName}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {isAr ? t.brand.enName : t.brand.arName}
                </span>
              </Link>

              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                {t.footer.description}
              </p>
            </div>
          </Reveal>

          <Reveal
            variant="up"
            delay={100}
            duration={600}
            className="lg:col-span-2"
          >
            <div>
              <h3 className="text-sm font-extrabold text-[#E6C567] uppercase tracking-wider mb-4">
                {t.footer.quickLinksTitle}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {quickLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="hover:text-[#E6C567] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal
            variant="up"
            delay={200}
            duration={600}
            className="lg:col-span-3"
          >
            <div>
              <h3 className="text-sm font-extrabold text-[#E6C567] uppercase tracking-wider mb-4">
                {t.footer.sectorsTitle}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {t.nav.sectors.map((sector) => (
                  <li key={sector.id}>
                    {sector.href.startsWith("/companies/") ? (
                      <Link
                        to={sector.href}
                        className="hover:text-[#E6C567] transition-colors"
                      >
                        {sector.title}
                      </Link>
                    ) : (
                      <a
                        href={sector.href}
                        className="hover:text-[#E6C567] transition-colors"
                      >
                        {sector.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal
            variant="up"
            delay={300}
            duration={600}
            className="lg:col-span-3"
          >
            <div>
              <h3 className="text-sm font-extrabold text-[#E6C567] uppercase tracking-wider mb-4">
                {t.footer.contactTitle}
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E6C567] shrink-0 mt-1" />
                  <span>
                    {isAr
                      ? "دبي — الجداف، مبنى حور 18"
                      : "Dubai — Al Jadaf, Hoor 18 Building"}
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E6C567] shrink-0" />
                  <a
                    href="tel:+971558700401"
                    dir="ltr"
                    className="hover:text-[#E6C567] transition-colors"
                  >
                    +971 55 870 0401
                  </a>
                </li>

                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E6C567] shrink-0" />
                  <a
                    href="mailto:Hamdanco@hotmail.com"
                    className="hover:text-[#E6C567] transition-colors break-all"
                  >
                    Hamdanco@hotmail.com
                  </a>
                </li>

                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#E6C567] shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-400">
                      {t.footer.workingHoursLabel}{" "}
                    </span>
                    <span className="text-white font-medium">
                      {t.footer.workingHoursValue}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={150} duration={550}>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p>{t.footer.copyright}</p>
            <p>{t.footer.foundedNote}</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
