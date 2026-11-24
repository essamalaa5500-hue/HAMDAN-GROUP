import { createContext, useContext, useState, useEffect } from "react";
import grandLevantImg from "../assets/Screenshot 2026-11-24 161021.png";
import alHareefImg from "../assets/alhareef.webp";

const blackPearlImg =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80";

const locationCafeImg =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80";

const businessServicesImg =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80";

const rzmContractingImg =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80";

const translations = {
  ar: {
    brand: {
      enName: "HAMDAN GROUP",
      arName: "مجموعة حمدان",
    },
    nav: {
      home: "الرئيسية",
      about: "عن المجموعة",
      companies: "شركاتنا",
      contact: "تواصل معنا",
      langBtn: "EN",
      sectors: [
        {
          id: "grand-levant",
          title: "جراند ليفانت (المطعم)",
          subtitle: "مطبخ شامي وأطباق رئيسية ومشويات",
          href: "/companies/grand-levant",
        },
        {
          id: "black-pearl-cafe",
          title: "بلاك بيرل كافيه",
          subtitle: "كافيه، مشويات، باستا، بيتزا وحلويات",
          href: "/companies/black-pearl-cafe",
        },
        {
          id: "location-cafe",
          title: "لوكيشن كافيه",
          subtitle: "قهوة مختصة، مشروبات باردة وحلويات",
          href: "/companies/location-cafe",
        },
        {
          id: "hamdan-business-services",
          title: "حمدان لخدمات رجال الأعمال",
          subtitle: "تأسيس الشركات وتخليص المعاملات الحكومية",
          href: "/companies/hamdan-business-services",
        },
        {
          id: "rzm-contracting",
          title: "آر زد إم للمقاولات",
          subtitle: "المقاولات العامة وأعمال البناء والتشطيبات",
          href: "/companies/rzm-contracting",
        },
        {
          id: "al-hareef-auto",
          title: "الحريف لصيانة السيارات",
          subtitle: "صيانة شاملة وخدمة متنقلة نصل إليك في مكانك",
          href: "/companies/al-hareef-auto",
        },
        {
          id: "hamdan-shipping-clearing",
          title: "حمدان للشحن والتخليص",
          subtitle: "الشحن والتخليص الجمركي ومتابعة الشحنات",
          href: "/companies/hamdan-shipping-clearing",
        },
      ],
    },
    hero: {
      badge: "مجموعة حمدان للتجارة والاستثمار",
      title: "نبني المستقبل برؤية استثمارية متكاملة",
      subtitle:
        "مجموعة رائدة تضم تحت مظلتها نخبة من المشاريع في قطاعات الضيافة، المطاعم، المقاولات، صيانة السيارات، الشحن والتخليص، وخدمات رجال الأعمال بمعايير عالمية.",
      primaryBtn: "استكشف شركاتنا",
      secondaryBtn: "تواصل معنا",
      stats: [
        { value: "+15", label: "عاماً من الخبرة العملية" },
        { value: "7", label: "كيانات وشركات تابعة" },
        { value: "100%", label: "التزام بالجودة والتميز" },
      ],
    },
    about: {
      eyebrow: "عن مجموعة حمدان",
      title: "خبرة أكثر من 15 عاماً في بناء مشاريع مستدامة",
      description:
        "تعمل مجموعة حمدان للتجارة والاستثمار بخبرة تمتد لأكثر من 15 عاماً ككيان مؤسسي يجمع بين التنوع القطاعي والانضباط التشغيلي. نعمل على تطوير وإدارة مشاريع عالية الكفاءة تلبي احتياجات السوق اليومية وتدعم نمو الأعمال.",
      foundedBadge: "خبرة أكثر من 15 عاماً",
      experienceValue: "+15 عاماً",
      highlights: [
        {
          title: "حوكمة وتشغيل مؤسسي",
          desc: "إدارة واضحة ومعايير جودة موحدة عبر كافة الفروع والقطاعات.",
        },
        {
          title: "تنوع يخدم السوق والمستثمر",
          desc: "تكامل بين الضيافة، المطاعم، المقاولات، صيانة السيارات، الشحن والتخليص، وخدمات الأعمال.",
        },
        {
          title: "موثوقية وسرعة إنجاز",
          desc: "التزام كامل بالمواعيد والشفافية في التعامل مع العملاء والشركاء.",
        },
      ],
      vision: {
        title: "رؤيتنا",
        text: "أن نكون مجموعة رائدة وموثوقة للتجارة والاستثمار، تصنع قيمة مستدامة وتضع معايير جديدة للتميز التشغيلي في القطاعات التي نعمل بها.",
      },
      mission: {
        title: "رسالتنا",
        text: "تقديم خدمات ومنتجات عالية الجودة تجمع بين الكفاءة العملية والاهتمام بأدق التفاصيل، مع بناء علاقات طويلة الأمد قائمة على الثقة مع العملاء والشركاء وفرق العمل.",
      },
    },
    companiesSection: {
      eyebrow: "شركاتنا وقطاعاتنا",
      title: "محفظة متنوعة من المشاريع والخدمات",
      subtitle:
        "نبذة سريعة عن الشركات التابعة لمجموعة حمدان — اضغط على أي شركة لاستعراض صفحتها التفصيلية وقائمة خدماتها أو وجباتها.",
      viewDetails: "عرض التفاصيل الكاملة",
      backToHome: "العودة إلى الرئيسية",
      backToCompanies: "العودة إلى الشركات",
      menuHeading: "أبرز أقسام القائمة والخدمات",
      highlightsHeading: "مميزات الشركة",
      infoHeading: "معلومات التواصل والموقع",
      currencyLabel: "درهم",
      items: [
        {
          slug: "grand-levant",
          category: "المطاعم والمطبخ الشامي",
          name: "جراند ليفانت — مطبخ ومأكولات شامية",
          shortDesc:
            "نكهات شامية أصيلة، أطباق يومية طازجة، مشويات، فطائر، ومقبلات متنوعة.",
          fullDesc:
            "يقدم جراند ليفانت تجربة طعام شامية متكاملة تجمع بين الأطباق اليومية الطازجة، الشاميات، المقبلات الساخنة والباردة، المشويات، والبيتزا والمعجنات المحضرة يومياً بأعلى معايير الجودة.",
          location: "دبي — الجداف، مبنى حور 18",
          phone: "+971 55 998 7822",
          image: grandLevantImg,
          highlights: [
            "أطباق يومية متنوعة محضرة طازجة يومياً",
            "تشكيلة واسعة من الشاميات، المقبلات، والمشويات",
            "معجنات وفطائر من الفرن، باستا وبيتزا بمعايير جودة عالية",
          ],
          menuCategories: [
            {
              title: "الأطباق اليومية والشاميات والمقبلات",
              items: [
                {
                  name: "أطباق يومية متنوعة (Daily Dish)",
                  price: "متاح يومياً",
                },
                { name: "شاميات وأطباق تقليدية أصيلة", price: "متنوع" },
                { name: "شوربات ومقبلات باردة وساخنة", price: "متنوع" },
              ],
            },
            {
              title: "المشويات، المعجنات والأطباق الرئيسية",
              items: [
                {
                  name: "مشويات مشكلة وأطباق رئيسية ولحوم وبحريات",
                  price: "متنوع",
                },
                {
                  name: "مناقيش، فطائر من الفرن، باستا وبيتزا",
                  price: "متنوع",
                },
                { name: "سلطات وسندوتشات", price: "متنوع" },
              ],
            },
          ],
        },
        {
          slug: "black-pearl-cafe",
          category: "الكافيهات والضيافة والمأكولات",
          name: "بلاك بيرل كافيه",
          shortDesc:
            "قائمة متكاملة تجمع بين المناقيش، البيتزا، المشويات، الطواجن، الباستا، السندوتشات، والحلويات.",
          fullDesc:
            "يجمع بلاك بيرل كافيه بين أجواء الكافيه المريحة وتنوع المطبخ الغني من السلطات والمناقيش والبيتزا إلى المشويات والطواجن والباستا والحلويات الشرقية والغربية مثل الكنافة والتشيز كيك.",
          location: "مجموعة حمدان — الفرع الرئيسي",
          phone: "متاح عبر إدارة المجموعة",
          image: blackPearlImg,
          highlights: [
            "تنوع كبير بين المشويات، الطواجن، الباستا، والبيتزا",
            "ركن حلويات مميز يشمل الكنافة والتشيز كيك وأرز بالحليب",
            "مناسب للجلسات اليومية والطلبات المتنوعة",
          ],
          menuCategories: [
            {
              title: "السلطات، الشوربة، المناقيش والبيتزا",
              items: [
                { name: "سلطات (تبولة، فتوش، حمص، سيزر دجاج)" },
                {
                  name: "شوربات (دجاج كريمة، مشروم، خضار، لسان عصفور، سي فود)",
                },
                { name: "مناقيش وبيتزا متنوعة" },
              ],
            },
            {
              title: "المشويات، الطواجن، الباستا والحلويات",
              items: [
                { name: "مشويات، أطباق دجاج ولحوم، وطواجن" },
                { name: "باستا وسندوتشات متنوعة" },
                { name: "حلويات (كنافة وتشيز كيك بنكهات متعددة)" },
              ],
            },
          ],
        },
        {
          slug: "location-cafe",
          category: "الكافيهات والضيافة",
          name: "لوكيشن كافيه — LOCATION CAFE",
          shortDesc:
            "وجهة عصرية لعشاق القهوة المختصة والمشروبات المبتكرة والحلويات الطازجة في أجواء مريحة.",
          fullDesc:
            "يقدم لوكيشن كافيه تجربة ضيافة متميزة تجمع بين أجود أنواع القهوة المختصة والمشروبات الساخنة والباردة، إلى جانب تشكيلة مختارة من المخبوزات والحلويات اليومية المناسبة لجلسات العمل والاسترخاء.",
          location: "دبي — الإمارات العربية المتحدة",
          phone: "متاح عبر إدارة المجموعة",
          image: locationCafeImg,
          highlights: [
            "قهوة مختصة محضرة بعناية من أجود المحاصيل",
            "تشكيلة واسعة من المشروبات الباردة والساخنة والعصائر الطازجة",
            "أجواء عصرية مريحة مناسبة للقاءات وجلسات العمل",
          ],
          menuCategories: [
            {
              title: "القهوة المختصة والمشروبات الساخنة",
              items: [
                {
                  name: "إسبريسو، أمريكانو، كورتادو، وفلات وايت",
                  price: "متنوع",
                },
                { name: "لاتيه، كابتشينو، وسبانيش لاتيه", price: "متنوع" },
                { name: "قهوة مقطرة (V60) وشاي مختص", price: "متنوع" },
              ],
            },
            {
              title: "المشروبات الباردة والمخبوزات والحلويات",
              items: [
                { name: "آيس سبانيش لاتيه، آيس موكا، وماتشا", price: "متنوع" },
                { name: "موهيتو وعصائر طبيعية طازجة", price: "متنوع" },
                { name: "كرواسون طازج وحلويات يومية مختارة", price: "متنوع" },
              ],
            },
          ],
        },
        {
          slug: "hamdan-business-services",
          category: "خدمات رجال الأعمال وتخليص المعاملات",
          name: "شركة حمدان لخدمات رجال الأعمال — HAMDAN BUSINESS SERVICES",
          shortDesc:
            "حلول متكاملة لتأسيس الشركات، إصدار وتجديد الرخص التجارية، وتخليص كافة المعاملات الحكومية في الإمارات.",
          fullDesc:
            "توفر شركة حمدان لخدمات رجال الأعمال دعماً شاملاً للمستثمرين ورواد الأعمال والشركات في دولة الإمارات، بدءاً من تأسيس الشركات واستخراج الرخص التجارية، مروراً بمعاملات الإقامة والعمل والعمال، وحتى تصديق المستندات والمتابعة الحكومية السريعة.",
          location: "دبي — الإمارات العربية المتحدة",
          phone: "+971 55 998 7822",
          image: businessServicesImg,
          highlights: [
            "تأسيس الشركات في البر الرئيسي والمناطق الحرة وإصدار الرخص التجارية",
            "إنجاز معاملات الإقامة، الهوية الإماراتية، ووزارة الموارد البشرية والتوطين",
            "سرعة في التنفيذ ومتابعة دقيقة لجميع الإجراءات الحكومية",
          ],
          menuCategories: [
            {
              title: "تأسيس الشركات والرخص التجارية",
              items: [
                {
                  name: "تأسيس الشركات وإصدار الرخص التجارية",
                  price: "حسب الخدمة",
                },
                {
                  name: "تجديد وتعديل الرخص والأنشطة التجارية",
                  price: "حسب الخدمة",
                },
                {
                  name: "حجز الأسماء التجارية والموافقات المبدئية",
                  price: "حسب الخدمة",
                },
              ],
            },
            {
              title: "خدمات الإقامة والمعاملات الحكومية (PRO)",
              items: [
                {
                  name: "إصدار وتجديد إقامات المستثمرين والموظفين",
                  price: "حسب الخدمة",
                },
                {
                  name: "معاملات العمل والعمال والفحص الطبي والهوية",
                  price: "حسب الخدمة",
                },
                {
                  name: "الطباعة القانونية وتصديق العقود والمستندات",
                  price: "حسب الخدمة",
                },
              ],
            },
          ],
        },
        {
          slug: "rzm-contracting",
          category: "المقاولات العامة والبناء",
          name: "شركة آر زد إم للمقاولات — R Z M CONTRACTING",
          shortDesc:
            "تنفيذ مشاريع البناء والمقاولات العامة، التجهيزات الداخلية، وأعمال الصيانة الهندسية بأعلى معايير الجودة.",
          fullDesc:
            "تعمل شركة آر زد إم للمقاولات (R Z M CONTRACTING) على تقديم حلول متكاملة في قطاع الإنشاءات والمقاولات العامة، تشمل تنفيذ المباني السكنية والتجارية، أعمال التشطيبات والديكور الداخلي، والترميم والصيانة وفق أدق المواصفات الهندسية والجداول الزمنية.",
          location: "دبي — الإمارات العربية المتحدة",
          phone: "متاح عبر إدارة المجموعة",
          image: rzmContractingImg,
          highlights: [
            "التزام صارم بمعايير الجودة والسلامة المهنية في جميع المواقع",
            "إدارة هندسية متكاملة وتسليم المشاريع وفق الجداول الزمنية المحددة",
            "خبرة في المشاريع السكنية والتجارية وأعمال التشطيبات المتكاملة",
          ],
          menuCategories: [
            {
              title: "المقاولات العامة والإنشاءات",
              items: [
                {
                  name: "تنفيذ المباني السكنية والتجارية والصناعية",
                  price: "حسب المشروع",
                },
                {
                  name: "الأعمال الإنشائية والهيكلية المتكاملة",
                  price: "حسب المشروع",
                },
                {
                  name: "إدارة المشاريع والإشراف الهندسي",
                  price: "حسب المشروع",
                },
              ],
            },
            {
              title: "التشطيبات، التجهيزات والصيانة",
              items: [
                {
                  name: "أعمال التشطيبات الداخلية والخارجية والديكور",
                  price: "حسب المشروع",
                },
                {
                  name: "تجهيز المحلات التجارية والمطاعم والمكاتب (Fit-Out)",
                  price: "حسب المشروع",
                },
                {
                  name: "أعمال الترميم والصيانة الشاملة للمباني",
                  price: "حسب المشروع",
                },
              ],
            },
          ],
        },
        {
          slug: "al-hareef-auto",
          category: "صيانة السيارات والورشة المتنقلة",
          name: "شركة الحريف لصيانة السيارات — AL HAREEF AUTO MAINTENANCE",
          shortDesc:
            "صيانة شاملة وخدمة متنقلة مجهزة بالكامل نصل إليك في مكانك — في المنزل أو العمل أو على الطريق.",
          fullDesc:
            "تقدم شركة الحريف لصيانة السيارات (AL HAREEF AUTO MAINTENANCE) خدمات صيانة وإصلاح متكاملة عبر مركز الصيانة وأسطول مركبات الصيانة المتنقلة المجهزة، لنصل إلى سيارتك في موقعك أينما كنت وتوفر عليك عناء التنقل والانتظار.",
          location: "دبي — الإمارات العربية المتحدة (وخدمة متنقلة لموقعك)",
          phone: "+971 55 998 7822",
          image: alHareefImg,
          highlights: [
            "خدمة صيانة متنقلة (Mobile Service) نصل إليك في مكانك أينما كنت",
            "فريق فني متخصص وأسطول مركبات مجهزة بأحدث معدات الفحص والصيانة",
            "صيانة دورية سريعة، فحص أعطال، وخدمات طوارئ وموقع العميل",
          ],
          menuCategories: [
            {
              title: "خدمات الصيانة المتنقلة (نصل إليك في مكانك)",
              items: [
                {
                  name: "تغيير الزيوت والفلاتر في موقع العميل",
                  price: "حسب الخدمة",
                },
                {
                  name: "الفحص الشامل وتشخيص الأعطال بالكمبيوتر في مكانك",
                  price: "حسب الخدمة",
                },
                {
                  name: "خدمات البطاريات، الفرامل، والصيانة السريعة في الموقع",
                  price: "حسب الخدمة",
                },
              ],
            },
            {
              title: "الصيانة الميكانيكية والكهربائية الشاملة",
              items: [
                {
                  name: "الصيانة الدورية والوقائية لجميع أنواع السيارات",
                  price: "حسب الحالة",
                },
                {
                  name: "إصلاح الأعطال الميكانيكية والكهربائية والتكييف",
                  price: "حسب الحالة",
                },
                {
                  name: "تجهيز وصيانة سيارات الأفراد والأساطيل والشركات",
                  price: "حسب الاتفاق",
                },
              ],
            },
          ],
        },
        {
          slug: "hamdan-shipping-clearing",
          category: "الشحن والتخليص الجمركي",
          name: "حمدان للشحن والتخليص — HAMDAN SHIPPING & CLEARING",
          shortDesc:
            "حلول متكاملة للشحن الدولي والمحلي، التخليص الجمركي، ومتابعة الشحنات بدقة وكفاءة.",
          fullDesc:
            "تقدم شركة حمدان للشحن والتخليص (HAMDAN SHIPPING & CLEARING) خدمات الشحن والتخليص الجمركي وتنسيق حركة البضائع والوثائق بكفاءة وموثوقية لخدمة الأفراد والشركات.",
          location: "دبي — الجداف، مبنى حور 18",
          phone: "+971 55 998 7822",
          image: businessServicesImg,
          highlights: [
            "تنسيق عمليات الشحن ومتابعة التخليص الجمركي بسرعة وانضباط",
            "مناسبة للشحنات التجارية والأفراد مع وضوح في الإجراءات",
            "تكامل مباشر مع خدمات المجموعة في دبي",
          ],
          menuCategories: [
            {
              title: "خدمات الشحن والتخليص",
              items: [
                {
                  name: "التخليص الجمركي ومتابعة المستندات",
                  price: "حسب الخدمة",
                },
                {
                  name: "تنسيق الشحن والمتابعة اللوجستية",
                  price: "حسب الشحنة",
                },
                {
                  name: "استشارات الشحن وحلول الأعمال",
                  price: "حسب الطلب",
                },
              ],
            },
          ],
        },
      ],
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "نسعد بتواصلكم واستفساراتكم",
      subtitle:
        "تواصل مع فريق مجموعة حمدان للاستفسار عن الشركات والقطاعات، الشراكات، أو طلبات الأعمال.",
      infoTitle: "بيانات التواصل المباشر",
      infoSubtitle:
        "يمكنكم التواصل معنا عبر القنوات التالية أو إرسال رسالة مباشرة عبر النموذج.",
      cards: [
        {
          id: "location",
          label: "الموقع والعنوان",
          value: "دبي — الجداف، مبنى حور 18",
          note: "الإمارات العربية المتحدة",
        },
        {
          id: "phone",
          label: "الهاتف المباشر",
          value: "+971 55 998 7822",
          note: "متاح للاستفسارات والطلبات",
          href: "tel:+971559987822",
        },
        {
          id: "email",
          label: "البريد الإلكتروني",
          value: "Hamdanco@hotmail.com",
          note: "للاستفسارات المؤسسية والأعمال",
          href: "mailto:Hamdanco@hotmail.com",
        },
        {
          id: "hours",
          label: "ساعات العمل",
          value: "من الاثنين إلى السبت",
          note: "الأحد: حسب نشاط كل فرع",
        },
      ],
      form: {
        title: "أرسل رسالتك",
        nameLabel: "الاسم الكامل",
        namePlaceholder: "اكتب اسمك هنا",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "name@example.com",
        phoneLabel: "رقم الهاتف",
        phonePlaceholder: "+971 50 000 0000",
        sectorLabel: "الجهة أو القطاع المعني",
        sectorOptions: [
          { value: "general", label: "إدارة المجموعة — استفسار عام" },
          { value: "grand-levant", label: "جراند ليفانت (المطعم)" },
          { value: "black-pearl-cafe", label: "بلاك بيرل كافيه" },
          { value: "location-cafe", label: "لوكيشن كافيه (LOCATION CAFE)" },
          {
            value: "hamdan-business-services",
            label: "شركة حمدان لخدمات رجال الأعمال",
          },
          { value: "rzm-contracting", label: "شركة آر زد إم للمقاولات" },
          {
            value: "al-hareef-auto",
            label: "شركة الحريف لصيانة السيارات (متنقلة)",
          },
          {
            value: "hamdan-shipping-clearing",
            label: "حمدان للشحن والتخليص (HAMDAN SHIPPING & CLEARING)",
          },
        ],
        messageLabel: "تفاصيل الرسالة",
        messagePlaceholder: "اكتب استفسارك أو طلبك بالتفصيل...",
        submitBtn: "إرسال الرسالة",
        successMessage:
          "تم استلام رسالتك بنجاح! سنقوم بمراجعتها والتواصل معك في أقرب وقت.",
        sendAnother: "إرسال رسالة أخرى",
      },
    },
    footer: {
      description:
        "مجموعة حمدان للتجارة والاستثمار — خبرة أكثر من 15 عاماً في تقديم حلول وخدمات متكاملة في المطاعم، الكافيهات، المقاولات، صيانة السيارات، الشحن والتخليص، وخدمات رجال الأعمال.",
      quickLinksTitle: "روابط سريعة",
      sectorsTitle: "شركاتنا وقطاعاتنا",
      contactTitle: "تواصل معنا",
      workingHoursLabel: "ساعات العمل:",
      workingHoursValue: "من الاثنين إلى السبت",
      copyright: "جميع الحقوق محفوظة © مجموعة حمدان للتجارة والاستثمار",
      foundedNote: "خبرة أكثر من 15 عاماً • دبي، الإمارات العربية المتحدة",
    },
  },
  en: {
    brand: {
      enName: "HAMDAN GROUP",
      arName: "مجموعة حمدان",
    },
    nav: {
      home: "Home",
      about: "About Group",
      companies: "Our Companies",
      contact: "Contact Us",
      langBtn: "عربي",
      sectors: [
        {
          id: "grand-levant",
          title: "Grand Levant (Restaurant)",
          subtitle: "Levantine kitchen, daily dishes & grills",
          href: "/companies/grand-levant",
        },
        {
          id: "black-pearl-cafe",
          title: "Black Pearl Cafe",
          subtitle: "Cafe, grills, pasta, pizza & desserts",
          href: "/companies/black-pearl-cafe",
        },
        {
          id: "location-cafe",
          title: "Location Cafe",
          subtitle: "Specialty coffee, cold drinks & desserts",
          href: "/companies/location-cafe",
        },
        {
          id: "hamdan-business-services",
          title: "Hamdan Business Services",
          subtitle: "Company formation & government PRO",
          href: "/companies/hamdan-business-services",
        },
        {
          id: "rzm-contracting",
          title: "R Z M Contracting",
          subtitle: "General contracting, construction & fit-out",
          href: "/companies/rzm-contracting",
        },
        {
          id: "al-hareef-auto",
          title: "Al Hareef Auto Maintenance",
          subtitle: "Full auto repair & mobile service to your location",
          href: "/companies/al-hareef-auto",
        },
        {
          id: "hamdan-shipping-clearing",
          title: "Hamdan Shipping & Clearing",
          subtitle: "Shipping, customs clearing & cargo coordination",
          href: "/companies/hamdan-shipping-clearing",
        },
      ],
    },
    hero: {
      badge: "HAMDAN GROUP — TRADE & INVESTMENT",
      title: "Building the Future with an Integrated Investment Vision",
      subtitle:
        "A leading conglomerate uniting premier ventures across hospitality, dining, contracting, automotive repair, shipping & clearing, and corporate PRO services to global standards.",
      primaryBtn: "Explore Our Companies",
      secondaryBtn: "Contact Us",
      stats: [
        { value: "15+", label: "Years of Experience" },
        { value: "7", label: "Subsidiaries & Ventures" },
        { value: "100%", label: "Commitment to Excellence" },
      ],
    },
    about: {
      eyebrow: "ABOUT HAMDAN GROUP",
      title: "Over 15 Years of Experience Building Sustainable Ventures",
      description:
        "Backed by over 15 years of experience, Hamdan Group for Trade & Investment operates as an institutional conglomerate combining sectoral diversity with operational discipline—developing and managing high-efficiency ventures that serve everyday market needs and support business growth.",
      foundedBadge: "Over 15 Years Experience",
      experienceValue: "15+ Years",
      highlights: [
        {
          title: "Institutional Governance",
          desc: "Clear management and unified quality standards across all branches and sectors.",
        },
        {
          title: "Balanced Market Portfolio",
          desc: "Synergy across hospitality, dining, contracting, automotive repair, shipping & clearing, and business services.",
        },
        {
          title: "Reliability & Execution Speed",
          desc: "Full commitment to timelines and transparency with clients and partners.",
        },
      ],
      vision: {
        title: "Our Vision",
        text: "To be a leading, trusted trade and investment group that creates sustainable value and sets new benchmarks for operational excellence across our sectors.",
      },
      mission: {
        title: "Our Mission",
        text: "To deliver high-quality services and experiences that combine practical efficiency with attention to detail, while building long-term relationships grounded in trust.",
      },
    },
    companiesSection: {
      eyebrow: "OUR COMPANIES & SECTORS",
      title: "A Diversified Portfolio of Ventures & Services",
      subtitle:
        "Brief overview of Hamdan Group subsidiaries—click any company to view its dedicated page, full details, and offerings.",
      viewDetails: "View Full Details",
      backToHome: "Back to Home",
      backToCompanies: "Back to Companies",
      menuHeading: "Featured Menu & Service Categories",
      highlightsHeading: "Key Highlights",
      infoHeading: "Location & Contact Info",
      currencyLabel: "AED",
      items: [
        {
          slug: "grand-levant",
          category: "Restaurant & Levantine Kitchen",
          name: "GRAND LEVANT — Gourmet & Kitchen",
          shortDesc:
            "Authentic Levantine flavors, fresh daily dishes, grills, oven specialties, and varied appetizers.",
          fullDesc:
            "Grand Levant delivers a complete Levantine dining experience featuring fresh daily dishes, Shamayat, hot and cold appetizers, grills, pasta, and oven-baked specialties prepared daily with consistent quality standards.",
          location: "Dubai — Al Jadaf, Hoor 18 Building",
          phone: "+971 55 998 7822",
          image: grandLevantImg,
          highlights: [
            "Varied daily dishes freshly prepared every day",
            "Wide selection of Shamayat, appetizers, and charcoal grills",
            "Oven-baked manaish, pies, pasta, and pizza to high quality standards",
          ],
          menuCategories: [
            {
              title: "Daily Dishes, Shamayat & Appetizers",
              items: [
                { name: "Daily Dish Selection", price: "Daily" },
                {
                  name: "Authentic Shamayat & Traditional Plates",
                  price: "Varied",
                },
                { name: "Soups, Cold & Hot Appetizers", price: "Varied" },
              ],
            },
            {
              title: "Grills, Oven Specialties & Main Courses",
              items: [
                {
                  name: "Grills, Main Courses, Meat & Seafood",
                  price: "Varied",
                },
                { name: "Manaish, Oven Pies, Pasta & Pizza", price: "Varied" },
                { name: "Salads & Sandwiches", price: "Varied" },
              ],
            },
          ],
        },
        {
          slug: "black-pearl-cafe",
          category: "Cafe, Dining & Hospitality",
          name: "BLACK PEARL CAFE",
          shortDesc:
            "A rich menu spanning manaish, pizza, grills, tajines, pasta, sandwiches, and signature desserts.",
          fullDesc:
            "Black Pearl Cafe blends a welcoming cafe atmosphere with a wide kitchen selection—from salads, manaish, and pizza to grills, tajines, pasta, and desserts such as kunafa and cheesecake.",
          location: "Hamdan Group — Main Branch",
          phone: "Available via Group Desk",
          image: blackPearlImg,
          highlights: [
            "Diverse menu covering grills, tajines, pasta, and pizza",
            "Dedicated dessert lineup including kunafa, cheesecake, and rice milk",
            "Ideal for everyday visits and varied group orders",
          ],
          menuCategories: [
            {
              title: "Salads, Soup, Manaish & Pizza",
              items: [
                { name: "Salads (Tabbouleh, Fattoush, Hummus, Caesar)" },
                { name: "Soups (Chicken Cream, Mushroom, Veg, Seafood)" },
                { name: "Manaish & Pizza Varieties" },
              ],
            },
            {
              title: "Grills, Tajine, Pasta & Sweets",
              items: [
                { name: "Grills, Chicken/Beef Dishes & Tajines" },
                { name: "Pasta & Sandwiches" },
                { name: "Sweets (Kunafa & Cheesecake Flavors)" },
              ],
            },
          ],
        },
        {
          slug: "location-cafe",
          category: "Specialty Coffee & Hospitality",
          name: "LOCATION CAFE",
          shortDesc:
            "A modern destination for specialty coffee lovers, signature cold beverages, and fresh daily pastries.",
          fullDesc:
            "Location Cafe offers a refined hospitality experience pairing freshly roasted specialty coffee and handcrafted cold drinks with a curated selection of daily pastries and desserts in a comfortable setting.",
          location: "Dubai — United Arab Emirates",
          phone: "Available via Group Desk",
          image: locationCafeImg,
          highlights: [
            "Specialty coffee brewed from carefully selected beans",
            "Wide range of hot and iced signature drinks and fresh juices",
            "Comfortable modern ambiance suited for meetings and relaxation",
          ],
          menuCategories: [
            {
              title: "Specialty Coffee & Hot Beverages",
              items: [
                {
                  name: "Espresso, Americano, Cortado & Flat White",
                  price: "Varied",
                },
                { name: "Latte, Cappuccino & Spanish Latte", price: "Varied" },
                { name: "Pour-Over (V60) & Specialty Teas", price: "Varied" },
              ],
            },
            {
              title: "Cold Drinks, Bakery & Desserts",
              items: [
                {
                  name: "Iced Spanish Latte, Iced Mocha & Matcha",
                  price: "Varied",
                },
                { name: "Mojitos & Fresh Natural Juices", price: "Varied" },
                { name: "Fresh Croissants & Daily Pastries", price: "Varied" },
              ],
            },
          ],
        },
        {
          slug: "hamdan-business-services",
          category: "Corporate PRO & Business Setup",
          name: "HAMDAN BUSINESS SERVICES",
          shortDesc:
            "End-to-end solutions for company formation, trade license issuance, and government PRO transactions in the UAE.",
          fullDesc:
            "Hamdan Business Services provides comprehensive corporate support for investors, entrepreneurs, and established companies across the UAE—covering mainland and free zone setup, trade licensing, residency visas, labor services, and fast document attestation.",
          location: "Dubai — United Arab Emirates",
          phone: "+971 55 998 7822",
          image: businessServicesImg,
          highlights: [
            "Mainland & Free Zone company formation and trade license issuance",
            "Residency visas, Emirates ID, and MOHRE labor processing",
            "Fast turnaround and accurate follow-up on all government procedures",
          ],
          menuCategories: [
            {
              title: "Company Formation & Trade Licensing",
              items: [
                {
                  name: "New Business Setup & Trade License Issuance",
                  price: "By Service",
                },
                {
                  name: "License Renewal, Amendments & Activity Additions",
                  price: "By Service",
                },
                {
                  name: "Trade Name Reservation & Initial Approvals",
                  price: "By Service",
                },
              ],
            },
            {
              title: "Visa & Government PRO Services",
              items: [
                {
                  name: "Investor & Employee Residency Visa Processing",
                  price: "By Service",
                },
                {
                  name: "MOHRE Labor Services, Medical & Emirates ID",
                  price: "By Service",
                },
                {
                  name: "Legal Typing, Contracts & Document Attestation",
                  price: "By Service",
                },
              ],
            },
          ],
        },
        {
          slug: "rzm-contracting",
          category: "General Contracting & Construction",
          name: "R Z M CONTRACTING",
          shortDesc:
            "Execution of construction projects, general contracting, interior fit-out, and engineering maintenance to high standards.",
          fullDesc:
            "R Z M Contracting delivers integrated solutions in the construction and general contracting sector—covering residential and commercial buildings, interior finishing and fit-out, and structural renovation according to strict engineering specifications and schedules.",
          location: "Dubai — United Arab Emirates",
          phone: "Available via Group Desk",
          image: rzmContractingImg,
          highlights: [
            "Strict adherence to quality and occupational safety standards on all sites",
            "Integrated engineering management with on-schedule project delivery",
            "Proven capability across residential, commercial, and fit-out works",
          ],
          menuCategories: [
            {
              title: "General Contracting & Construction",
              items: [
                {
                  name: "Residential, Commercial & Industrial Construction",
                  price: "By Project",
                },
                {
                  name: "Structural & Civil Engineering Works",
                  price: "By Project",
                },
                {
                  name: "Project Management & Site Supervision",
                  price: "By Project",
                },
              ],
            },
            {
              title: "Fit-Out, Finishing & Maintenance",
              items: [
                {
                  name: "Interior & Exterior Finishing and Decoration",
                  price: "By Project",
                },
                {
                  name: "Retail, Restaurant & Office Fit-Out",
                  price: "By Project",
                },
                {
                  name: "Building Renovation & Comprehensive Maintenance",
                  price: "By Project",
                },
              ],
            },
          ],
        },
        {
          slug: "al-hareef-auto",
          category: "Auto Maintenance & Mobile Workshop",
          name: "AL HAREEF AUTO MAINTENANCE",
          shortDesc:
            "Comprehensive auto care and a fully equipped mobile workshop that comes to your location—home, office, or roadside.",
          fullDesc:
            "Al Hareef Auto Maintenance provides full repair and maintenance services through our workshop and equipped mobile service fleet—coming directly to your vehicle wherever you are to save you time and travel.",
          location:
            "Dubai — United Arab Emirates (Mobile Service to Your Location)",
          phone: "+971 55 998 7822",
          image: alHareefImg,
          highlights: [
            "Mobile service fleet that reaches your location wherever you are",
            "Specialized technicians and vehicles equipped with modern diagnostic tools",
            "Fast periodic service, fault diagnostics, and on-site assistance",
          ],
          menuCategories: [
            {
              title: "Mobile Maintenance Services (At Your Location)",
              items: [
                {
                  name: "Oil & Filter Change at Client Location",
                  price: "By Service",
                },
                {
                  name: "Computer Diagnostics & Inspection at Your Spot",
                  price: "By Service",
                },
                {
                  name: "Battery, Brake & Quick On-Site Service",
                  price: "By Service",
                },
              ],
            },
            {
              title: "Mechanical, Electrical & Full Care",
              items: [
                {
                  name: "Periodic & Preventive Maintenance for All Vehicles",
                  price: "By Condition",
                },
                {
                  name: "Mechanical, Electrical & AC Repairs",
                  price: "By Condition",
                },
                {
                  name: "Individual, Fleet & Corporate Vehicle Care",
                  price: "By Agreement",
                },
              ],
            },
          ],
        },
        {
          slug: "hamdan-shipping-clearing",
          category: "Shipping & Customs Clearing",
          name: "HAMDAN SHIPPING & CLEARING",
          shortDesc:
            "Integrated shipping, customs clearing, and cargo coordination solutions for individuals and businesses.",
          fullDesc:
            "Hamdan Shipping & Clearing delivers shipping coordination, customs clearance support, and documentation handling with reliability and operational clarity.",
          location: "Dubai — Al Jadaf, Hoor 18 Building",
          phone: "+971 55 998 7822",
          image: businessServicesImg,
          highlights: [
            "Streamlined shipping coordination and customs clearing follow-up",
            "Suitable for commercial cargo and business inquiries",
            "Backed by Hamdan Group operations in Dubai",
          ],
          menuCategories: [
            {
              title: "Shipping & Clearing Services",
              items: [
                {
                  name: "Customs Clearing & Documentation",
                  price: "By Service",
                },
                {
                  name: "Shipment Coordination & Logistics",
                  price: "By Shipment",
                },
                {
                  name: "Shipping Inquiries & Business Support",
                  price: "By Request",
                },
              ],
            },
          ],
        },
      ],
    },
    contact: {
      eyebrow: "CONTACT US",
      title: "We Welcome Your Inquiries & Connections",
      subtitle:
        "Reach out to the Hamdan Group team regarding our companies, sectors, partnerships, or business requests.",
      infoTitle: "Direct Contact Information",
      infoSubtitle:
        "Connect with us through the channels below or send a message directly using the form.",
      cards: [
        {
          id: "location",
          label: "Location & Address",
          value: "Dubai — Al Jadaf, Hoor 18 Building",
          note: "United Arab Emirates",
        },
        {
          id: "phone",
          label: "Direct Phone",
          value: "+971 55 998 7822",
          note: "Available for inquiries & requests",
          href: "tel:+971559987822",
        },
        {
          id: "email",
          label: "Email Address",
          value: "Hamdanco@hotmail.com",
          note: "For corporate & business inquiries",
          href: "mailto:Hamdanco@hotmail.com",
        },
        {
          id: "hours",
          label: "Working Hours",
          value: "Monday to Saturday",
          note: "Sunday: Varies by branch",
        },
      ],
      form: {
        title: "Send Your Message",
        nameLabel: "Full Name",
        namePlaceholder: "Enter your full name",
        emailLabel: "Email Address",
        emailPlaceholder: "name@example.com",
        phoneLabel: "Phone Number",
        phonePlaceholder: "+971 50 000 0000",
        sectorLabel: "Relevant Entity or Sector",
        sectorOptions: [
          { value: "general", label: "Group Management — General Inquiry" },
          { value: "grand-levant", label: "Grand Levant (Restaurant)" },
          { value: "black-pearl-cafe", label: "Black Pearl Cafe" },
          { value: "location-cafe", label: "Location Cafe" },
          {
            value: "hamdan-business-services",
            label: "Hamdan Business Services",
          },
          { value: "rzm-contracting", label: "R Z M Contracting" },
          {
            value: "al-hareef-auto",
            label: "Al Hareef Auto Maintenance (Mobile)",
          },
          {
            value: "hamdan-shipping-clearing",
            label: "Hamdan Shipping & Clearing",
          },
        ],
        messageLabel: "Message Details",
        messagePlaceholder: "Write your inquiry or request in detail...",
        submitBtn: "Send Message",
        successMessage:
          "Your message has been received! Our team will review it and get back to you shortly.",
        sendAnother: "Send Another Message",
      },
    },
    footer: {
      description:
        "Hamdan Group for Trade & Investment — over 15 years of experience delivering integrated solutions across restaurants, cafes, contracting, auto maintenance, shipping & clearing, and business services.",
      quickLinksTitle: "Quick Links",
      sectorsTitle: "Our Companies & Sectors",
      contactTitle: "Contact Us",
      workingHoursLabel: "Working Hours:",
      workingHoursValue: "Monday to Saturday",
      copyright: "All Rights Reserved © Hamdan Group for Trade & Investment",
      foundedNote: "Over 15+ Years Experience • Dubai, United Arab Emirates",
    },
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ar");

  const isAr = lang === "ar";
  const t = translations[lang] || translations.ar;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
  }, [lang, isAr]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, isAr, t, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};

export default LanguageContext;
