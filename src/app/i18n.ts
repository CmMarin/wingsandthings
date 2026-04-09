export type Lang = "EN" | "RO" | "RU";

export type Copy = Record<Lang, string>;

export const categoryCopy: Record<string, Copy> = {
  "Korean Wings": { EN: "Korean Wings", RO: "Aripioare coreene", RU: "Корейские крылышки" },
  "Honey Mustard Wings": { EN: "Honey Mustard Wings", RO: "Aripioare miere-muștar", RU: "Крылышки мед-горчица" },
  "Vietnamese Wings": { EN: "Vietnamese Wings", RO: "Aripioare vietnameze", RU: "Вьетнамские крылышки" },
  "BBQ Wings": { EN: "BBQ Wings", RO: "Aripioare BBQ", RU: "Крылышки BBQ" },
  "Mango Habanero Wings": { EN: "Mango Habanero Wings", RO: "Aripioare mango habanero", RU: "Крылышки манго-хабанеро" },
  "Buffalo Wings": { EN: "Buffalo Wings", RO: "Aripioare Buffalo", RU: "Крылышки Buffalo" },
  "Classic Wings": { EN: "Classic Wings", RO: "Aripioare clasice", RU: "Классические крылышки" },
  Combos: { EN: "Combos", RO: "Combo-uri", RU: "Комбо" },
  Cauliflower: { EN: "Cauliflower", RO: "Conopidă", RU: "Цветная капуста" },
  Tacos: { EN: "Tacos", RO: "Taco-uri", RU: "Тако" },
  Sides: { EN: "Sides", RO: "Garnituri", RU: "Гарниры" },
  Beer: { EN: "Beer", RO: "Bere", RU: "Пиво" },
  "Soft drinks": { EN: "Soft drinks", RO: "Băuturi răcoritoare", RU: "Безалкогольные напитки" },
  Cider: { EN: "Cider", RO: "Cidru", RU: "Сидр" },
  Wine: { EN: "Wine", RO: "Vin", RU: "Вино" },
  "Hot drinks": { EN: "Hot drinks", RO: "Băuturi calde", RU: "Горячие напитки" },
};

export const variantLabelCopy: Record<string, Copy> = {
  "8 buc": { EN: "8 pcs", RO: "8 buc", RU: "8 шт." },
  "12 buc": { EN: "12 pcs", RO: "12 buc", RU: "12 шт." },
  "5 buc": { EN: "5 pcs", RO: "5 buc", RU: "5 шт." },
  "Porție": { EN: "Portion", RO: "Porție", RU: "Порция" },
  "Platou": { EN: "Platter", RO: "Platou", RU: "Ассорти" },
};

export const menuCopy: Record<string, { name: Copy; desc: Copy }> = {
  "Aripioare Coreene cu pastă Gochujang": {
    name: { EN: "Korean Wings with Gochujang Paste", RO: "Aripioare coreene", RU: "Корейские крылышки" },
    desc: { EN: "Korean wings with gochujang paste, sesame and scallions.", RO: "Aripioare cu pastă gochujang, susan și ceapă verde.", RU: "Корейские крылышки с пастой гочуджан, кунжутом и зеленым луком." },
  },
  "Aripioare cu Miere și Muștar": {
    name: { EN: "Honey Mustard Wings", RO: "Aripioare miere-muștar", RU: "Крылышки мёд-горчица" },
    desc: { EN: "Wings glazed with honey and mustard.", RO: "Aripioare glazurate cu miere și muștar.", RU: "Крылышки, глазированные медом и горчицей." },
  },
  "Aripioare cu Sos Vietnamez de Pește": {
    name: { EN: "Vietnamese Fish Sauce Wings", RO: "Aripioare vietnameze", RU: "Крылышки по-вьетнамски" },
    desc: { EN: "Vietnamese-style wings with fresh bright flavors.", RO: "Aripioare în stil vietnamez cu arome proaspete.", RU: "Крылышки вьетнамского стиля со свежим ярким вкусом." },
  },
  "Aripioare cu Sos BBQ": {
    name: { EN: "BBQ Wings", RO: "Aripioare BBQ", RU: "BBQ крылышки" },
    desc: { EN: "Wings glazed in smoky hickory BBQ sauce.", RO: "Aripioare glazurate în sos BBQ hickory.", RU: "Крылышки в глазури из дымного hickory BBQ-соуса." },
  },
  "Aripioare cu Mango Habanero": {
    name: { EN: "Mango Habanero Wings", RO: "Aripioare mango-habanero", RU: "Крылышки манго-хабанеро" },
    desc: { EN: "Sweet-and-spicy wings with a tropical kick.", RO: "Aripioare picante dulci-acrișoare.", RU: "Сладко-острые крылышки с тропическим акцентом." },
  },
  "Aripioare Buffalo": {
    name: { EN: "Buffalo Wings", RO: "Aripioare Buffalo", RU: "Buffalo крылышки" },
    desc: { EN: "Classic Buffalo wings in a tangy hot sauce.", RO: "Aripioare clasice Buffalo în sos iute-acrișor.", RU: "Классические крылышки Buffalo в остром соусе." },
  },
  "Aripioare Crocante": {
    name: { EN: "Crispy Wings", RO: "Aripioare crocante", RU: "Хрустящие крылышки" },
    desc: { EN: "Classic crispy wings.", RO: "Aripioare crocante clasice.", RU: "Классические хрустящие крылышки." },
  },
  "Crispy Strips": {
    name: { EN: "Crispy Strips", RO: "Fâșii crocante de pui", RU: "Хрустящие стрипсы" },
    desc: { EN: "Crispy chicken strips.", RO: "Fâșii de pui crocante.", RU: "Хрустящие куриные стрипсы." },
  },
  "Combo Wings & Taco & Fries": {
    name: { EN: "Wings, Taco & Fries Combo", RO: "Combo aripioare, taco și cartofi", RU: "Комбо: крылышки, тако и фри" },
    desc: { EN: "The ideal combo.", RO: "Combinația ideală.", RU: "Идеальное комбо." },
  },
  "Platou cu aripioare": {
    name: { EN: "Wing Platter", RO: "Platou de aripioare", RU: "Ассорти крылышек" },
    desc: { EN: "The king's platter.", RO: "Platoul regilor.", RU: "Королевское ассорти." },
  },
  "Conopidă Buffalo": {
    name: { EN: "Buffalo Cauliflower", RO: "Conopidă Buffalo", RU: "Капуста Buffalo" },
    desc: { EN: "Cauliflower in Buffalo sauce.", RO: "Conopidă în sos Buffalo.", RU: "Цветная капуста в соусе Buffalo." },
  },
  "Conopidă Coreeană cu Gochujang": {
    name: { EN: "Korean Cauliflower with Gochujang", RO: "Conopidă coreeană", RU: "Корейская капуста" },
    desc: { EN: "Cauliflower with gochujang paste.", RO: "Conopidă cu pastă gochujang.", RU: "Цветная капуста с пастой гочуджан." },
  },
  "Conopidă cu Miere și Muștar": {
    name: { EN: "Honey Mustard Cauliflower", RO: "Conopidă miere-muștar", RU: "Капуста мед-горчица" },
    desc: { EN: "Cauliflower glazed with honey and mustard.", RO: "Conopidă glazurată cu miere și muștar.", RU: "Цветная капуста в глазури из меда и горчицы." },
  },
  "Conopidă cu Sos BBQ": {
    name: { EN: "BBQ Cauliflower", RO: "Conopidă BBQ", RU: "BBQ капуста" },
    desc: { EN: "Cauliflower glazed in smoky hickory BBQ sauce.", RO: "Conopidă glazurată în sos BBQ hickory.", RU: "Цветная капуста в глазури из дымного hickory BBQ-соуса." },
  },
  "Conopidă cu Mango Habanero": {
    name: { EN: "Mango Habanero Cauliflower", RO: "Conopidă mango-habanero", RU: "Капуста манго-хабанеро" },
    desc: { EN: "Sweet and spicy cauliflower.", RO: "Conopidă dulce și picantă.", RU: "Сладко-острая цветная капуста." },
  },
  "Taco cu vită coreeană": {
    name: { EN: "Korean Beef Taco", RO: "Taco coreean", RU: "Корейский тако" },
    desc: { EN: "Delicious taco with marinated beef.", RO: "Taco delicios cu vită marinată.", RU: "Вкусный тако с маринованной говядиной." },
  },
  "Taco Jamaican Jerk": {
    name: { EN: "Jamaican Jerk Taco", RO: "Taco jamaican", RU: "Ямайский тако" },
    desc: { EN: "Taco with Jamaican flavors.", RO: "Taco cu arome jamaicane.", RU: "Тако с ямайскими специями." },
  },
  "Cartofi prăjiți 150g": {
    name: { EN: "Fries 150g", RO: "Cartofi prăjiți 150g", RU: "Картофель фри 150 г" },
    desc: { EN: "Crispy fries.", RO: "Cartofi crocanți.", RU: "Хрустящий картофель фри." },
  },
  "Cartofi wedges prăjiți 200g": {
    name: { EN: "Wedges 200g", RO: "Cartofi wedges prăjiți 200g", RU: "Картофельные дольки 200 г" },
    desc: { EN: "Spicy wedges.", RO: "Wedges picanți.", RU: "Пикантные картофельные дольки." },
  },
  "Bile de cartofi prăjite 150g": {
    name: { EN: "Potato Balls 150g", RO: "Bile de cartofi prăjite 150g", RU: "Картофельные шарики 150 г" },
    desc: { EN: "Golden potato balls.", RO: "Tater tots aurii.", RU: "Золотистые картофельные шарики." },
  },
  "Inele de ceapă": {
    name: { EN: "Onion Rings", RO: "Inele de ceapă", RU: "Луковые кольца" },
    desc: { EN: "Juicy onion rings.", RO: "Inele de ceapă suculente.", RU: "Сочные луковые кольца." },
  },
  "Litra IPA fără alcool": {
    name: { EN: "Non-Alcoholic IPA", RO: "IPA fără alcool", RU: "Безалкогольный IPA" },
    desc: { EN: "Non-alcoholic IPA.", RO: "IPA fără alcool.", RU: "Безалкогольный IPA." },
  },
  "Beermaster Cider Caru' cu Mere": {
    name: { EN: "Beermaster Apple Cider", RO: "Beermaster Cidru cu Mere", RU: "Beermaster яблочный сидр" },
    desc: { EN: "Apple cider from Beermaster.", RO: "Cidru de mere Beermaster.", RU: "Яблочный сидр Beermaster." },
  },
  "Vin (Pahar)": {
    name: { EN: "Wine (Glass)", RO: "Vin (Pahar)", RU: "Вино (бокал)" },
    desc: { EN: "Wine by the glass.", RO: "Vin la pahar.", RU: "Вино по бокалам." },
  },
  "Băuturi Răcoritoare 0.3L": {
    name: { EN: "Soft Drinks 0.3L", RO: "Băuturi Răcoritoare 0.3L", RU: "Безалкогольные напитки 0.3L" },
    desc: { EN: "Soft drinks by the glass.", RO: "Băuturi răcoritoare la pahar.", RU: "Безалкогольные напитки по бокалам." },
  },
  "Apa Bucovina": {
    name: { EN: "Bucovina Water", RO: "Apa Bucovina", RU: "Вода Bucovina" },
    desc: { EN: "Bucovina bottled water.", RO: "Apă îmbuteliată Bucovina.", RU: "Бутилированная вода Bucovina." },
  },
  "Ceai & Cafea": {
    name: { EN: "Tea & Coffee", RO: "Ceai & Cafea", RU: "Чай и кофе" },
    desc: { EN: "Tea and coffee selection.", RO: "Selecție de ceai și cafea.", RU: "Выбор чая и кофе." },
  },
};

export const sauceLevelCopy: Record<string, Copy> = {
  EXTREME: { EN: "EXTREME", RO: "EXTREM", RU: "ЭКСТРИМ" },
  HOT: { EN: "HOT", RO: "PICANT", RU: "ОСТРЫЙ" },
  MEDIUM: { EN: "MEDIUM", RO: "MEDIU", RU: "СРЕДНИЙ" },
  MILD: { EN: "MILD", RO: "BLÂND", RU: "МЯГКИЙ" },
};

export const sauceCopy: Record<string, { desc: Copy }> = {
  "Death March": {
    desc: { EN: "Sign the waiver. No mercy.", RO: "Semnează declarația. Fără milă.", RU: "Подпиши отказ. Без пощады." },
  },
  "Wall of Sound": {
    desc: { EN: "Sustained heat with melodic depth.", RO: "Căldură susținută cu adâncime melodică.", RU: "Длительный жар с мелодической глубиной." },
  },
  "Crowd Pleaser": {
    desc: { EN: "Accessible fire for the masses.", RO: "Foc accesibil pentru mase.", RU: "Доступный огонь для всех." },
  },
  "Sound Check": {
    desc: { EN: "Warmup round for your taste buds.", RO: "Rundă de încălzire pentru papile.", RU: "Разминка для вкусовых рецепторов." },
  },
};

export const uiCopy = {
  officialDocument: { EN: "Official Document", RO: "Document Oficial", RU: "Официальный Документ" },
  fullMenu: { EN: "Full Menu", RO: "Meniu Complet", RU: "Полное Меню" },
  close: { EN: "Close", RO: "Închide", RU: "Закрыть" },
  details: { EN: "Details →", RO: "Detalii →", RU: "Детали →" },
  itemDocs: { EN: "Item Docs", RO: "Fișa Produsului", RU: "Документы Товара" },
  specs: { EN: "Specs", RO: "Specificații", RU: "Характеристики" },
  standardOrder: { EN: "Standard Order", RO: "Comandă Standard", RU: "Стандартный Заказ" },
  order: { EN: "Order", RO: "Comandă", RU: "Заказать" },
  buyNow: { EN: "Buy Now", RO: "Cumpără Acum", RU: "Купить Сейчас" },
  bottleNo: { EN: "BOTTLE NO.", RO: "STICLA NR.", RU: "БУТЫЛКА №" },
  optionsVariants: { EN: "Options / Variants", RO: "Opțiuni / Variante", RU: "Опции / Варианты" },
  open: { EN: "Open", RO: "Disponibil", RU: "Свободно" },
  inUse: { EN: "In Use", RO: "Ocupat", RU: "Занято" },
  walkUpAndPlay: { EN: "> Walk up and play", RO: "> Vino și joacă", RU: "> Подойди и играй" },
  tryAgainLater: { EN: "> Try again later", RO: "> Revino mai târziu", RU: "> Попробуй позже" },
  hostTournamentTitle: { EN: "Host a Tournament", RO: "Găzduiește un Turneu", RU: "Проведи Турнир" },
  hostTournamentCopy: { EN: "Organizers drink free. Bring the crowd.", RO: "Organizatorii beau gratis. Adu publicul.", RU: "Организаторы пьют бесплатно. Приводи толпу." },
  getNotifiedTitle: { EN: "Get Notified", RO: "Primește Notificări", RU: "Получать Уведомления" },
  getNotifiedCopy: { EN: "Sign up for fight nights & tournaments", RO: "Înscrie-te la fight night-uri și turnee", RU: "Подпишись на бойцовские вечера и турниры" },
  artInfo: { EN: "Art Info", RO: "Info Artă", RU: "Инфо об Арте" },
  purchaseInquiry: { EN: "Purchase Inquiry", RO: "Cerere de Cumpărare", RU: "Запрос на Покупку" },
  artWallDescription: { EN: "Local artists only. Raw talent, unfiltered expression. 100% of sales go to the creators. Keep the scene alive.", RO: "Doar artiști locali. Talent pur, expresie nefiltrată. 100% din vânzări merg la creatori. Păstrează scena vie.", RU: "Только местные художники. Сырой талант, нефильтрованное выражение. 100% продаж идут авторам. Сохраняй сцену живой." },
  footerInfoHeading: { EN: "INFO", RO: "INFO", RU: "ИНФО" },
  footerHoursLabel: { EN: "Hours", RO: "Program", RU: "Часы работы" },
  footerAddressLabel: { EN: "Address", RO: "Adresă", RU: "Адрес" },
  footerPhoneLabel: { EN: "Phone", RO: "Telefon", RU: "Телефон" },
  locationLine1: { EN: "Str. Mitropolit Gavriil Bănulescu-Bodoni 4", RO: "Str. Mitropolit Gavriil Bănulescu-Bodoni 4", RU: "ул. Митрополит Гавриил Бэнулеску-Бодони 4" },
  locationLine2: { EN: "Chișinău, Moldova", RO: "Chișinău, Moldova", RU: "Кишинёв, Молдова" },
};

export function translate(copy: Copy, lang: Lang) {
  return copy[lang];
}

export function menuName(name: string, lang: Lang) {
  return menuCopy[name]?.name[lang] ?? name;
}

export function menuDesc(name: string, lang: Lang) {
  return menuCopy[name]?.desc[lang] ?? "";
}

export function categoryLabel(category: string, lang: Lang) {
  return categoryCopy[category]?.[lang] ?? category;
}

export function variantLabel(label: string, lang: Lang) {
  return variantLabelCopy[label]?.[lang] ?? label;
}

export function sauceLevel(level: string, lang: Lang) {
  return sauceLevelCopy[level]?.[lang] ?? level;
}

export function sauceDescription(name: string, lang: Lang) {
  return sauceCopy[name]?.desc[lang] ?? "";
}
