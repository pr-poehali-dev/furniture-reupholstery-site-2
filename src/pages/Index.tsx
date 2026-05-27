import { useState } from "react";
import Icon from "@/components/ui/icon";

const SEND_LEAD_URL = "https://functions.poehali.dev/60193b9b-2d6c-4a62-9a84-c5350aff37b6";

const HERO_IMG = "https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/files/a1e94587-e39f-4bbf-a772-f2ccd2011fe4.jpg";
const GALLERY_IMG_1 = "https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/files/2619eb68-b894-4ec2-9573-8a62d0ed5d3f.jpg";
const GALLERY_IMG_2 = "https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/files/3db463a2-151a-4ae7-b3b6-ca37da10ba2a.jpg";
const BEFORE_AFTER_1 = "https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/files/3b286939-aba5-408e-8b20-bb60ce6b76ff.jpg";
const BEFORE_AFTER_2 = "https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/files/364c0efc-92e2-40d4-ab42-5166f81d0f61.jpg";
const BEFORE_AFTER_3 = "https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/files/c6bfbd3e-293e-48a9-8537-7cbdd1bc27d8.jpg";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Цены", href: "#prices" },
  { label: "Галерея", href: "#gallery" },
  { label: "О нас", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Sofa",
    title: "Перетяжка диванов",
    desc: "Полное восстановление обивки диванов любой сложности. Замена поролона, пружин, декоративных элементов.",
    price: "от 15 000 ₽",
  },
  {
    icon: "Crown",
    title: "Кресла и пуфы",
    desc: "Перетяжка кресел, пуфов, банкеток. Возможность изменения формы и добавления элементов декора.",
    price: "от 6 000 ₽",
  },
  {
    icon: "Bed",
    title: "Мягкие кровати",
    desc: "Реставрация изголовий, каркасов и спинок кроватей. Работаем с антикварной мебелью.",
    price: "от 10 000 ₽",
  },
  {
    icon: "Briefcase",
    title: "Офисная мебель",
    desc: "Перетяжка офисных стульев, кресел руководителей и переговорных комнат. Корпоративные заказы.",
    price: "от 4 000 ₽",
  },
  {
    icon: "Star",
    title: "Антикварная реставрация",
    desc: "Бережное восстановление старинной мебели с сохранением оригинального стиля и ценности.",
    price: "по запросу",
  },
  {
    icon: "Palette",
    title: "Дизайнерские решения",
    desc: "Разработка индивидуального дизайна, подбор тканей и материалов под ваш интерьер.",
    price: "бесплатно",
  },
];

const PRICES = [
  {
    category: "Диваны",
    icon: "Sofa",
    items: [
      { name: "Двухместный диван", price: "от 15 000 ₽" },
      { name: "Трёхместный диван", price: "от 20 000 ₽" },
      { name: "Угловой диван", price: "от 25 000 ₽" },
      { name: "Диван Честерфилд", price: "от 30 000 ₽" },
    ],
  },
  {
    category: "Кресла",
    icon: "Crown",
    items: [
      { name: "Кресло стандарт", price: "от 6 000 ₽" },
      { name: "Кресло с оттоманкой", price: "от 10 000 ₽" },
      { name: "Кресло-качалка", price: "от 8 000 ₽" },
      { name: "Пуф / банкетка", price: "от 3 000 ₽" },
    ],
  },
  {
    category: "Кровати",
    icon: "Bed",
    items: [
      { name: "Изголовье кровати", price: "от 8 000 ₽" },
      { name: "Кровать с каркасом", price: "от 15 000 ₽" },
      { name: "Детская кроватка", price: "от 7 000 ₽" },
      { name: "Антикварная кровать", price: "по запросу" },
    ],
  },
  {
    category: "Офис",
    icon: "Briefcase",
    items: [
      { name: "Офисное кресло", price: "от 4 000 ₽" },
      { name: "Кресло руководителя", price: "от 7 000 ₽" },
      { name: "Стул мягкий", price: "от 2 000 ₽" },
      { name: "Диван в офис", price: "от 18 000 ₽" },
    ],
  },
];

const GALLERY_ITEMS = [
  { img: BEFORE_AFTER_1, label: "Диван до/после", category: "До/После" },
  { img: BEFORE_AFTER_2, label: "Кресло до/после", category: "До/После" },
  { img: BEFORE_AFTER_3, label: "Изголовье кровати", category: "Кровати" },
  { img: GALLERY_IMG_1, label: "Кресло в велюре", category: "Кресла" },
  { img: HERO_IMG, label: "Диван Честерфилд", category: "Диваны" },
  { img: GALLERY_IMG_2, label: "Коллекция тканей", category: "Материалы" },
];

const REVIEWS = [
  {
    name: "Елена Воронова",
    role: "Дизайнер интерьера",
    rating: 5,
    text: "Работаю с этой мастерской уже три года. Качество исполнения безупречное — все клиенты в восторге. Особенно впечатляет работа с нестандартными формами и антикварными предметами.",
    initials: "ЕВ",
  },
  {
    name: "Дмитрий Захаров",
    role: "Владелец ресторана",
    rating: 5,
    text: "Перетянули все диваны и стулья в нашем заведении. Выдержали сроки, качество отменное. Посетители часто спрашивают, где мы нашли такую красивую мебель.",
    initials: "ДЗ",
  },
  {
    name: "Анастасия Климова",
    role: "Частный клиент",
    rating: 5,
    text: "Отдала старый бабушкин диван — вернули настоящее произведение искусства. Мастера внимательно отнеслись к каждой детали и предложили идеальную ткань.",
    initials: "АК",
  },
  {
    name: "Михаил Серов",
    role: "Архитектор",
    rating: 5,
    text: "Профессионализм на высшем уровне. Работаем вместе на крупных проектах — всегда в срок, всегда качественно. Настоящие мастера своего дела.",
    initials: "МС",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={14}
        className={i < count ? "text-amber-400 fill-amber-400" : "text-muted-foreground"}
      />
    ))}
  </div>
);

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Все");
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const categories = ["Все", "До/После", "Диваны", "Кресла", "Кровати", "Материалы"];
  const filteredGallery =
    activeCategory === "Все"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setFormState("loading");
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", phone: "", service: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none">
            <span className="font-cormorant text-xl text-gold-gradient tracking-widest uppercase" style={{ fontWeight: 600 }}>
              Перетяжка мебели №1
            </span>
            <span className="font-montserrat text-[9px] tracking-[0.3em] text-muted-foreground uppercase mt-0.5">
              Мастерская · Барнаул
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link font-montserrat text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="tel:89236566500"
            className="hidden md:flex items-center gap-2 font-montserrat text-xs tracking-wider text-primary hover:opacity-80 transition-opacity"
          >
            <Icon name="Phone" size={14} />
            8-923-656-6500
          </a>

          <button
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-montserrat text-xs tracking-widest uppercase px-6 py-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:89236566500"
                onClick={() => setMenuOpen(false)}
                className="mx-6 mt-2 flex items-center justify-center gap-2 font-montserrat text-xs tracking-widest uppercase px-5 py-3 border border-primary text-primary"
              >
                <Icon name="Phone" size={14} />
                8-923-656-6500
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Перетяжка мебели Барнаул" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
          <div className="max-w-2xl">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-6 animate-fade-in-up">
              №1 в Барнауле · 15 лет мастерства
            </p>
            <h1 className="font-cormorant text-6xl md:text-8xl font-light leading-[0.9] mb-6 animate-fade-in-up delay-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <span className="block text-foreground">Новая</span>
              <span className="block text-gold-gradient italic">жизнь</span>
              <span className="block text-foreground">вашей мебели</span>
            </h1>

            <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent mb-8 animate-fade-in-up delay-400" />

            <p className="font-montserrat text-sm leading-relaxed text-muted-foreground mb-10 max-w-md animate-fade-in-up delay-400">
              Перетяжка диванов, кресел и кроватей в Барнауле. Европейские ткани, ручная работа, бесплатный выезд на замер.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
              <a
                href="#contacts"
                className="font-montserrat text-xs tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
              >
                Бесплатный замер
              </a>
              <a
                href="tel:89236566500"
                className="font-montserrat text-xs tracking-widest uppercase px-8 py-4 border border-border text-foreground hover:border-primary transition-colors text-center flex items-center justify-center gap-2"
              >
                <Icon name="Phone" size={14} />
                Позвонить
              </a>
            </div>

            <div className="flex gap-10 mt-16 pt-8 border-t border-border/50 animate-fade-in-up delay-800">
              {[
                { value: "15+", label: "лет опыта" },
                { value: "2400+", label: "выполненных работ" },
                { value: "2 года", label: "гарантия" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-cormorant text-3xl text-gold-gradient" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {stat.value}
                  </span>
                  <span className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="font-montserrat text-[9px] tracking-widest uppercase text-muted-foreground">Прокрутите</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-4">Что мы делаем</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light gold-line-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Наши услуги
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="card-hover p-8 bg-card rounded-sm group cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:border-primary/70 transition-colors">
                    <Icon name={service.icon} size={20} className="text-primary" fallback="Star" />
                  </div>
                  <span className="font-montserrat text-xs text-primary tracking-wide font-medium">
                    {service.price}
                  </span>
                </div>
                <h3 className="font-cormorant text-2xl font-light mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {service.title}
                </h3>
                <p className="font-montserrat text-xs leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-4">Прозрачные цены</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light gold-line-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Стоимость работ
            </h2>
            <p className="font-montserrat text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
              Окончательная цена зависит от состояния мебели и выбранной ткани. Бесплатный выезд и точный расчёт — звоните.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICES.map((cat, idx) => (
              <div key={idx} className="bg-background border border-border/60 p-6 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                  <div className="w-9 h-9 border border-primary/30 flex items-center justify-center">
                    <Icon name={cat.icon} size={16} className="text-primary" fallback="Star" />
                  </div>
                  <span className="font-cormorant text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {cat.category}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between gap-2">
                      <span className="font-montserrat text-[11px] text-muted-foreground leading-tight">{item.name}</span>
                      <span className="font-montserrat text-[11px] text-primary whitespace-nowrap font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Info" size={18} className="text-primary flex-shrink-0" />
              <p className="font-montserrat text-xs text-muted-foreground">
                Цены ориентировочные. Точный расчёт — после бесплатного выезда мастера на дом.
              </p>
            </div>
            <a
              href="#contacts"
              className="font-montserrat text-xs tracking-widest uppercase px-6 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Вызвать мастера
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-4">Портфолио</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light gold-line-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Наши работы
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-montserrat text-[10px] tracking-widest uppercase px-5 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGallery.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden aspect-[4/3] cursor-pointer">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-montserrat text-[9px] tracking-widest uppercase text-primary block mb-1">
                    {item.category}
                  </span>
                  <span className="font-cormorant text-xl text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-3/4 h-3/4 border border-primary/20 z-0" />
              <img src={GALLERY_IMG_1} alt="О мастерской" className="relative z-10 w-full h-[500px] object-cover" />
              <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 bg-primary/5 z-0 border border-primary/10" />
              <div className="absolute -bottom-6 left-8 z-20 bg-card border border-primary/30 p-6">
                <div className="font-cormorant text-5xl text-gold-gradient leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>15</div>
                <div className="font-montserrat text-[9px] tracking-widest uppercase text-muted-foreground mt-1">лет опыта</div>
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-4">О нас</p>
              <h2 className="font-cormorant text-5xl font-light leading-tight mb-6 gold-line" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Мастерство,<br />
                <em>рождённое из страсти</em>
              </h2>

              <p className="font-montserrat text-sm leading-relaxed text-muted-foreground mb-6">
                Мы — семейная мастерская с 15-летней историей в Барнауле. Каждый проект для нас — это возможность вдохнуть новую жизнь в любимый предмет мебели.
              </p>
              <p className="font-montserrat text-sm leading-relaxed text-muted-foreground mb-10">
                Используем исключительно европейские ткани премиум-класса: натуральный велюр, шёлк, бархат, кожу. Наши мастера — сертифицированные специалисты с профильным образованием.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon: "Award", title: "Гарантия 2 года", desc: "На все виды работ" },
                  { icon: "Truck", title: "Бесплатный выезд", desc: "Оценка и замеры" },
                  { icon: "Clock", title: "Точно в срок", desc: "Выполняем договорённости" },
                  { icon: "Gem", title: "Элитные ткани", desc: "Поставки из Европы" },
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={feat.icon} size={14} className="text-primary" fallback="Check" />
                    </div>
                    <div>
                      <div className="font-montserrat text-xs text-foreground font-medium">{feat.title}</div>
                      <div className="font-montserrat text-[10px] text-muted-foreground mt-0.5">{feat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contacts"
                className="inline-block font-montserrat text-xs tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-4">Клиенты о нас</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light gold-line-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Отзывы и рейтинги
            </h2>
          </div>

          <div className="flex flex-col items-center mb-14 p-8 border border-primary/20 bg-card max-w-xs mx-auto">
            <div className="font-cormorant text-7xl text-gold-gradient leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>5.0</div>
            <div className="flex gap-1 my-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="Star" size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground">на основе 120+ отзывов</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="card-hover p-8 bg-card rounded-sm">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <span className="font-cormorant text-lg text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {review.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-montserrat text-xs text-foreground font-medium">{review.name}</div>
                      <div className="font-montserrat text-[10px] text-muted-foreground mt-0.5">{review.role}</div>
                    </div>
                  </div>
                  <StarRating count={review.rating} />
                </div>
                <div className="w-8 h-px bg-primary/30 mb-4" />
                <p className="font-montserrat text-xs leading-relaxed text-muted-foreground italic">«{review.text}»</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-4">Контакты</p>
              <h2 className="font-cormorant text-5xl font-light leading-tight mb-6 gold-line" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Готовы преобразить<br />
                <em>вашу мебель</em>
              </h2>
              <p className="font-montserrat text-sm text-muted-foreground leading-relaxed mb-10 max-w-sm">
                Оставьте заявку — мастер свяжется с вами в течение часа и согласует удобное время бесплатного выезда.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  { icon: "Phone", title: "Телефон", value: "8-923-656-6500", sub: "Ежедневно 9:00 — 21:00", href: "tel:89236566500" },
                  { icon: "MapPin", title: "Адрес", value: "Барнаул, ул. Попова, 181/1", sub: "Работаем с выездом по городу", href: null },
                  { icon: "Mail", title: "Email", value: "dionis.1979@icloud.com", sub: "Ответим в течение часа", href: "mailto:dionis.1979@icloud.com" },
                ].map((contact, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} size={16} className="text-primary" fallback="Info" />
                    </div>
                    <div>
                      <div className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground mb-0.5">{contact.title}</div>
                      {contact.href ? (
                        <a href={contact.href} className="font-montserrat text-sm text-foreground hover:text-primary transition-colors">{contact.value}</a>
                      ) : (
                        <div className="font-montserrat text-sm text-foreground">{contact.value}</div>
                      )}
                      <div className="font-montserrat text-[10px] text-muted-foreground mt-0.5">{contact.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background border border-border p-10">
              <h3 className="font-cormorant text-3xl font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Заявка на замер
              </h3>
              <p className="font-montserrat text-xs text-muted-foreground mb-8">Бесплатно, без обязательств. Ответим в течение часа.</p>

              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div className="w-14 h-14 border border-primary/40 flex items-center justify-center">
                    <Icon name="Check" size={24} className="text-primary" />
                  </div>
                  <p className="font-cormorant text-2xl text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Заявка отправлена!</p>
                  <p className="font-montserrat text-xs text-muted-foreground">Мы свяжемся с вами в течение часа.</p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="font-montserrat text-xs tracking-widest uppercase text-primary hover:opacity-70 transition-opacity mt-2"
                  >
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Иван Петров"
                      className="w-full bg-card border border-border px-4 py-3 font-montserrat text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="+7 (923) 656-65-00"
                      className="w-full bg-card border border-border px-4 py-3 font-montserrat text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">
                      Что нужно перетянуть?
                    </label>
                    <select
                      value={form.service}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      className="w-full bg-card border border-border px-4 py-3 font-montserrat text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Выберите услугу</option>
                      <option>Диван</option>
                      <option>Кресло</option>
                      <option>Кровать</option>
                      <option>Офисная мебель</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">
                      Комментарий
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Опишите мебель и пожелания..."
                      className="w-full bg-card border border-border px-4 py-3 font-montserrat text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {formState === "error" && (
                    <p className="font-montserrat text-xs text-red-400">Ошибка отправки. Позвоните нам: 8-923-656-6500</p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="font-montserrat text-xs tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {formState === "loading" ? (
                      <>
                        <Icon name="Loader2" size={14} className="animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      "Отправить заявку"
                    )}
                  </button>
                  <p className="font-montserrat text-[9px] text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-cormorant text-lg text-gold-gradient tracking-widest uppercase" style={{ fontWeight: 600 }}>
              Перетяжка мебели №1
            </span>
            <span className="font-montserrat text-[9px] tracking-widest text-muted-foreground uppercase mt-0.5">
              Барнаул · ул. Попова, 181/1
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <a href="tel:89236566500" className="font-montserrat text-sm text-foreground hover:text-primary transition-colors">
              8-923-656-6500
            </a>
            <p className="font-montserrat text-[10px] text-muted-foreground">© 2026 Перетяжка мебели №1</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
