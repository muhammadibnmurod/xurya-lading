import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      features: "Features",
      services: "Services",
      contact: "Contact",
      language: "Language",
      Login: "Login",
      Getintouch: "Get in touch",
      Energyproviderintheworld: "#1 Energy provider in the world",
      NewEnergy: "New Energy",
      fortheFuture: "for the Future",
      getintouch: "Get in touch",
      ourservices: "Our services",
      DiscoverOurRecentProject: "Discover Our Recent Project",
      Annualnetincome: "Annual net income",
      Projectscompleted: "Projects completed",
      GlobalEmployees: "Global Employees",
      Focusingonquality: "Focusing on quality",
      wemaintaincustomertrust: "we maintain customer trust",
      lorem1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestias enim illo. Dolor, illum vero beatae non temporibus quos nostrum neque iusto nulla magnam dolorem impedit fugit repellat minus unde?",
      Weofferquality: "We offer quality",
      withhebestmaterialsandservice: "with the best materials and service",
      Layeredsecurity: "Layered security",
      Withlayeredsecurityweensurethesafetyofeveryunitweprovide:
        "With layered security, we ensure the safety of every unit we provide.",
      Qualitycontrolofeachpart: "Quality control of each part",
      Everyunityousendischeckedcarefullyforeverydetail:
        "Every unit you send is checked carefully for every detail.",
      Reliablecustomerservice: "Reliable customer service",
      Ourcustomerserviceisavailable24hoursaweekwithqualifiedpeople:
        "Our customer service is available 24 hours a week, with qualified people.",
      Maintenancemanualbook: "Maintenance manual book",
      Weprovideaguidebookthatcanbeusedtoensuremaximumcare:
        "We provide a guidebook that can be used to ensure maximum care.",
      Deliveredsafely: "Delivered safely",
      Everyunitwesendarrivessafelyandquicklywithoutanyobstaclesordrama:
        "Every unit we send arrives safely and quickly, without any obstacles or drama.",
      Basedonartificialintelligence: "Based on artificial intelligence",
      Youcancontrolandvieweachunitfromyourphoneitsveryeasytouse:
        "You can control and view each unit from your phone, it’s very easy to use.",

      Trustedservice: "Trusted service",
      foryourvariousneeds: "for your various needs",
      Viewdetails: "View details",
      Solarpanelsforhome: "Solar panels for home",
      Commercialsolarsolutions: "Commercial solar solutions",
      EVchargingstations: "EV charging stations",
      Batterystoragesystems: "Battery storage systems",
    },
  },
  uz: {
    translation: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      features: "Xususiyatlar",
      services: "Xizmatlar",
      contact: "Aloqa",
      language: "Til",
      Login: "Kirish",
      Getintouch: "Bog‘lanish",
      Energyproviderintheworld: "Dunyoning №1 energiya ta'minotchisi",
      NewEnergy: "Yangi energiya",
      fortheFuture: "Kelajak uchun",
      getintouch: "Aloqaga chiqish",
      ourservices: "Xizmatlarimiz",
      DiscoverOurRecentProject: "Oxirgi loyihamizni kashf eting",
      Annualnetincome: "Yillik sof daromad",
      Projectscompleted: "Bajarilgan loyihalar",
      GlobalEmployees: "Global xodimlar",
      Focusingonquality: "Sifatga e’tibor qaratgan holda",
      wemaintaincustomertrust: "Biz mijozlar ishonchini saqlab qolamiz",
      lorem1:
        "Lorem ipsum matni bu yerda misol uchun ishlatilmoqda. Bu joyda siz haqiqiy matn joylashtirishingiz mumkin.",
      Weofferquality: "Biz sifatni taklif qilamiz",
      withhebestmaterialsandservice: "eng yaxshi materiallar va xizmat bilan",
      Layeredsecurity: "Ko‘p qatlamli xavfsizlik",
      Withlayeredsecurityweensurethesafetyofeveryunitweprovide:
        "Ko‘p qatlamli xavfsizlik orqali biz har bir taqdim etilgan blokning xavfsizligini ta’minlaymiz.",
      Qualitycontrolofeachpart: "Har bir qismining sifat nazorati",
      Everyunityousendischeckedcarefullyforeverydetail:
        "Yuborilgan har bir blok har bir tafsilot bo‘yicha diqqat bilan tekshiriladi.",
      Reliablecustomerservice: "Ishonchli mijozlarga xizmat",
      Ourcustomerserviceisavailable24hoursaweekwithqualifiedpeople:
        "Mijozlarga xizmatimiz haftasiga 24 soat malakali xodimlar tomonidan taqdim etiladi.",
      Maintenancemanualbook: "Texnik xizmat ko‘rsatish qo‘llanmasi",
      Weprovideaguidebookthatcanbeusedtoensuremaximumcare:
        "Biz maksimal parvarishni ta’minlash uchun foydalanilishi mumkin bo‘lgan qo‘llanmani taqdim etamiz.",
      Deliveredsafely: "Xavfsiz yetkaziladi",
      Everyunitwesendarrivessafelyandquicklywithoutanyobstaclesordrama:
        "Yuborilgan har bir blok to‘siqlarsiz va muammosiz xavfsiz va tez yetkaziladi.",
      Basedonartificialintelligence: "Sun’iy intellekt asosida",
      Youcancontrolandvieweachunitfromyourphoneitsveryeasytouse:
        "Har bir blokni telefoningizdan boshqarishingiz va kuzatishingiz mumkin, juda oson foydalaniladi.",
      Trustedservice: "Ishonchli xizmat",
      foryourvariousneeds: "Turli ehtiyojlaringiz uchun",
      Viewdetails: "Batafsil ko‘rish",
      Solarpanelsforhome: "Uy uchun quyosh panellari",
      Commercialsolarsolutions: "Biznes uchun quyosh yechimlari",
      EVchargingstations: "Elektr mashina quvvatlash stansiyalari",
      Batterystoragesystems: "Batareya saqlash tizimlari",
    },
  },
  ru: {
    translation: {
      home: "Главная",
      about: "О нас",
      features: "Особенности",
      services: "Услуги",
      contact: "Контакты",
      language: "Язык",
      Login: "Авторизоваться",
      Getintouch: "Связаться с нами",
      Energyproviderintheworld: "Энергетический поставщик №1 в мире",
      NewEnergy: "Новая энергия",
      fortheFuture: "для будущего",
      getintouch: "Связаться с нами",
      ourservices: "Наши услуги",
      DiscoverOurRecentProject: "Ознакомьтесь с нашим последним проектом",
      Annualnetincome: "Годовой чистый доход",
      Projectscompleted: "Реализованные проекты",
      GlobalEmployees: "Сотрудники по всему миру",
      Focusingonquality: "Сосредоточенность на качестве",
      wemaintaincustomertrust: "мы сохраняем доверие клиентов",
      lorem1:
        "Текст Lorem ipsum используется здесь в качестве примера. Вы можете заменить его настоящим контентом.",
      Weofferquality: "Мы предлагаем качество",
      withhebestmaterialsandservice: "с лучшими материалами и обслуживанием",
      Layeredsecurity: "Многоуровневая безопасность",
      Withlayeredsecurityweensurethesafetyofeveryunitweprovide:
        "С помощью многоуровневой безопасности мы обеспечиваем безопасность каждого предоставляемого блока.",
      Qualitycontrolofeachpart: "Контроль качества каждой детали",
      Everyunityousendischeckedcarefullyforeverydetail:
        "Каждая отправляемая единица тщательно проверяется на каждую деталь.",
      Reliablecustomerservice: "Надежная служба поддержки клиентов",
      Ourcustomerserviceisavailable24hoursaweekwithqualifiedpeople:
        "Наша служба поддержки доступна 24 часа в неделю, с квалифицированным персоналом.",
      Maintenancemanualbook: "Руководство по обслуживанию",
      Weprovideaguidebookthatcanbeusedtoensuremaximumcare:
        "Мы предоставляем руководство, которое можно использовать для обеспечения максимального ухода.",
      Deliveredsafely: "Безопасная доставка",
      Everyunitwesendarrivessafelyandquicklywithoutanyobstaclesordrama:
        "Каждая отправленная единица прибывает безопасно и быстро, без препятствий и проблем.",
      Basedonartificialintelligence: "На основе искусственного интеллекта",
      Youcancontrolandvieweachunitfromyourphoneitsveryeasytouse:
        "Вы можете управлять и просматривать каждую единицу со своего телефона — это очень просто в использовании.",
      Trustedservice: "Надежный сервис",
      foryourvariousneeds: "Для ваших различных потребностей",
      Viewdetails: "Посмотреть детали",
      Solarpanelsforhome: "Солнечные панели для дома",
      Commercialsolarsolutions: "Коммерческие солнечные решения",
      EVchargingstations: "Станции зарядки электромобилей",
      Batterystoragesystems: "Системы хранения энергии",
    },
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
