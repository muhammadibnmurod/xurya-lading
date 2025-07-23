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
      Seehowwesolveproblemsrightontarget:
        "See how we solve problems, right on target",
      Viewcasestudy: "View case study",
      ElectricCarChargingStation: "Electric Car Charging Station",
      TeslaEnergy: "Tesla Energy",
      WebuiltafastandreliablechargingnetworkacrossallregionsusingXuryassmartsolutions:
        "We built a fast and reliable charging network across all regions using Xurya's smart solutions.",
      ElonDCTOTeslaEnergy: "Elon D. — CTO Tesla Energy",
      ResidentialSolarPanels: "Residential Solar Panels",
      Medtronic: "Medtronic",
      WeareverysatisfiedwiththeservicesfromXuryaThishelpedusincreaseefficiencygreatly:
        "We are very satisfied with the services from Xurya. This helped us increase efficiency greatly.",
      JenniferKolobalyCTOEVMedtronic: "Jennifer Kolobaly – CTO EV Medtronic",
      WindPowerforIndustry: "Wind Power for Industry",
      WindNovaCorp: "WindNova Corp",
      Xuryaswindsolutionshelpedusreducecostsandmovetowardcleanerenergygoals:
        "Xurya's wind solutions helped us reduce costs and move toward cleaner energy goals.",
      MarcusLHeadofOpsatWindNova: "Marcus L. — Head of Ops at WindNova",
      Itstimetosupportzeropollutionwithrenewableresources:
        "It's time to support zero pollution, with renewable resources",
      Experiencedformorethan10years: "Experienced for more than 10 years",
      Supportforthelatesttechnology: "Support for the latest technology",
      p: "By increasing the effectiveness and efficiency of electricity use, the use of renewable resources is very profitable for all  industrial services.",
      TermsofService: "Terms of Service",
      PrivacyPolicy: "Privacy Policy",
      XuryaIncAllrightsreserved: "© 2024 Xurya Inc. All rights reserved",
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
      Seehowwesolveproblemsrightontarget:
        "Qanday qilib muammolarni aniq hal qilishimizni ko‘ring",
      Viewcasestudy: "Tadqiqotni ko‘rish",
      ElectricCarChargingStation: "Elektr mashina quvvatlash stansiyasi",
      TeslaEnergy: "Tesla Energy",
      WebuiltafastandreliablechargingnetworkacrossallregionsusingXuryassmartsolutions:
        "Biz Xurya'ning aqlli yechimlari yordamida barcha hududlarda tez va ishonchli quvvatlash tarmog‘ini yaratdik.",
      ElonDCTOTeslaEnergy: "Elon D. — Bosh texnolog Tesla Energy",
      ResidentialSolarPanels: "Uy uchun quyosh panellari",
      Medtronic: "Medtronic",
      WeareverysatisfiedwiththeservicesfromXuryaThishelpedusincreaseefficiencygreatly:
        "Biz Xurya xizmatlaridan juda mamnunmiz. Bu samaradorligimizni sezilarli darajada oshirishga yordam berdi.",
      JenniferKolobalyCTOEVMedtronic:
        "Jennifer Kolobaly – EV Medtronic bosh texnologi",
      WindPowerforIndustry: "Sanoat uchun shamol energiyasi",
      WindNovaCorp: "WindNova Corp",
      Xuryaswindsolutionshelpedusreducecostsandmovetowardcleanerenergygoals:
        "Xurya'ning shamol yechimlari xarajatlarimizni kamaytirib, toza energiya maqsadlariga erishishga yordam berdi.",
      MarcusLHeadofOpsatWindNova:
        "Markus L. — WindNova operatsiyalar bo‘yicha rahbari",
      Itstimetosupportzeropollutionwithrenewableresources:
        "Endi ifloslanishsiz energiyani qayta tiklanadigan manbalar bilan qo‘llab-quvvatlash vaqti keldi",
      Experiencedformorethan10years: "10 yildan ortiq tajribaga ega",
      Supportforthelatesttechnology:
        "Eng so‘nggi texnologiyalarni qo‘llab-quvvatlash",
      p: "Elektrdan foydalanish samaradorligi va foydaliligini oshirish orqali qayta tiklanadigan manbalardan foydalanish barcha sanoat xizmatlari uchun juda foydalidir.",
      TermsofService: "Xizmat ko‘rsatish shartlari",
      PrivacyPolicy: "Maxfiylik siyosati",
      XuryaIncAllrightsreserved:
        "© 2024 Xurya Inc. Barcha huquqlar himoyalangan",
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
      Seehowwesolveproblemsrightontarget:
        "Узнайте, как мы решаем проблемы точно в цель",
      Viewcasestudy: "Посмотреть кейс",
      ElectricCarChargingStation: "Станция зарядки электромобилей",
      TeslaEnergy: "Tesla Energy",
      WebuiltafastandreliablechargingnetworkacrossallregionsusingXuryassmartsolutions:
        "Мы создали быструю и надежную сеть зарядки по всем регионам, используя умные решения от Xurya.",
      ElonDCTOTeslaEnergy: "Илон Д. — Технический директор Tesla Energy",
      ResidentialSolarPanels: "Солнечные панели для дома",
      Medtronic: "Medtronic",
      WeareverysatisfiedwiththeservicesfromXuryaThishelpedusincreaseefficiencygreatly:
        "Мы очень довольны услугами Xurya. Это значительно повысило нашу эффективность.",
      JenniferKolobalyCTOEVMedtronic:
        "Дженнифер Колобали – Технический директор EV Medtronic",
      WindPowerforIndustry: "Ветряная энергия для промышленности",
      WindNovaCorp: "WindNova Corp",
      Xuryaswindsolutionshelpedusreducecostsandmovetowardcleanerenergygoals:
        "Решения Xurya по ветряной энергии помогли нам сократить расходы и приблизиться к целям чистой энергии.",
      MarcusLHeadofOpsatWindNova:
        "Маркус Л. — Руководитель операций в WindNova",
      Itstimetosupportzeropollutionwithrenewableresources:
        "Пришло время поддерживать нулевое загрязнение с помощью возобновляемых ресурсов",
      Experiencedformorethan10years: "Более 10 лет опыта",
      Supportforthelatesttechnology: "Поддержка новейших технологий",
      p: "Повышая эффективность использования электроэнергии, использование возобновляемых ресурсов становится очень выгодным для всех промышленных услуг.",
      TermsofService: "Условия обслуживания",
      PrivacyPolicy: "Политика конфиденциальности",
      XuryaIncAllrightsreserved: "© 2024 Xurya Inc. Все права защищены",
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
