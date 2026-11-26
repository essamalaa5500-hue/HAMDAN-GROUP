import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

const WHATSAPP_NUMBER = "971559987822";

const iconsMap = {
  location: MapPin,
  phone: Phone,
  email: Mail,
  hours: Clock,
};

const initialForm = {
  name: "",
  email: "",
  phone: "",
  sector: "general",
  message: "",
};

const Contact = () => {
  const { isAr, t } = useLanguage();
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialForm);
    setSubmitted(false);
  };

  const whatsappMessage = encodeURIComponent(
    isAr
      ? "مرحباً مجموعة حمدان، أود التواصل معكم للاستفسار."
      : "Hello Hamdan Group, I would like to get in touch regarding an inquiry.",
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-white text-[#0B192C] overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" delay={0} duration={600}>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B192C]/5 border border-[#D4AF37]/40 text-[#0B192C] text-xs sm:text-sm font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <span>{t.contact.eyebrow}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] leading-tight">
              {t.contact.title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
          <Reveal
            variant="up"
            delay={120}
            duration={650}
            className="lg:col-span-5"
          >
            <div className="bg-[#0B192C] text-white rounded-2xl p-7 sm:p-8 border border-[#D4AF37]/30 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {t.contact.infoTitle}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {t.contact.infoSubtitle}
              </p>

              <div className="mt-7 space-y-5">
                {t.contact.cards.map((card) => {
                  const IconComp = iconsMap[card.id] || MapPin;
                  const isPhoneOrEmail =
                    card.id === "phone" || card.id === "email";

                  return (
                    <div
                      key={card.id}
                      className="flex items-start gap-4 p-4 rounded-xl bg-[#0F233D] border border-[#D4AF37]/20"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 text-[#E6C567] flex items-center justify-center shrink-0 mt-0.5">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-[#E6C567]">
                          {card.label}
                        </p>
                        {card.href ? (
                          <a
                            href={card.href}
                            dir={isPhoneOrEmail ? "ltr" : undefined}
                            className="mt-1 block text-sm sm:text-base font-bold text-white hover:text-[#E6C567] transition-colors break-words text-start"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm sm:text-base font-bold text-white break-words">
                            {card.value}
                          </p>
                        )}
                        <p className="mt-0.5 text-xs text-slate-400">
                          {card.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 pt-6 border-t border-white/10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#E6C567] text-[#0B192C] font-extrabold text-sm sm:text-base transition-colors shadow-lg cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 shrink-0" />
                  <span>
                    {isAr ? "تواصل عبر واتساب مباشرة" : "Chat on WhatsApp"}
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal
            variant="up"
            delay={220}
            duration={650}
            className="lg:col-span-7"
          >
            <div className="bg-slate-50 rounded-2xl p-7 sm:p-9 border border-slate-200">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B192C] mb-6">
                {t.contact.form.title}
              </h3>

              {submitted ? (
                <div className="rounded-2xl bg-white border border-[#D4AF37]/50 p-8 text-center shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 text-[#b89223] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <p className="text-base sm:text-lg font-bold text-[#0B192C] leading-relaxed">
                    {t.contact.form.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#0B192C] hover:bg-[#163154] text-[#E6C567] font-bold text-sm transition-colors cursor-pointer"
                  >
                    {t.contact.form.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-bold text-[#0B192C] mb-2"
                      >
                        {t.contact.form.nameLabel}
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.form.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-bold text-[#0B192C] mb-2"
                      >
                        {t.contact.form.emailLabel}
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-bold text-[#0B192C] mb-2"
                      >
                        {t.contact.form.phoneLabel}
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-sector"
                        className="block text-sm font-bold text-[#0B192C] mb-2"
                      >
                        {t.contact.form.sectorLabel}
                      </label>
                      <select
                        id="contact-sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-[#0B192C] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                      >
                        {t.contact.form.sectorOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-bold text-[#0B192C] mb-2"
                    >
                      {t.contact.form.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B192C] hover:bg-[#163154] text-[#E6C567] font-bold text-sm sm:text-base shadow-md transition-colors cursor-pointer"
                  >
                    <span>{t.contact.form.submitBtn}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
