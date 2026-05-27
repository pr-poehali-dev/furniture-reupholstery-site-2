import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/files/a1e94587-e39f-4bbf-a772-f2ccd2011fe4.jpg";
const GALLERY_IMG_1 = "https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/files/2619eb68-b894-4ec2-9573-8a62d0ed5d3f.jpg";
const GALLERY_IMG_2 = "https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/files/3db463a2-151a-4ae7-b3b6-ca37da10ba2a.jpg";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
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

const GALLERY_ITEMS = [
  { img: HERO_IMG, label: "Диван Честерфилд", category: "Диваны" },
  { img: GALLERY_IMG_1, label: "Кресло в велюре", category: "Кресла" },
  { img: GALLERY_IMG_2, label: "Коллекция тканей", category: "Материалы" },
  { img: GALLERY_IMG_1, label: "Классическое кресло", category: "Кресла" },
  { img: HERO_IMG, label: "Угловой диван", category: "Диваны" },
  { img: GALLERY_IMG_2, label: "Велюр и шёлк", category: "Материалы" },
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

  const categories = ["Все", "Диваны", "Кресла", "Материалы"];
  const filteredGallery =
    activeCategory === "Все"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none">
            <span className="font-cormorant text-xl text-gold-gradient tracking-widest uppercase" style={{fontWeight: 600}}>
              АртРеставрация
            </span>
            <span className="font-montserrat text-[9px] tracking-[0.3em] text-muted-foreground uppercase mt-0.5">
              Мастерская перетяжки мебели
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
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
            href="#contacts"
            className="hidden md:block font-montserrat text-xs tracking-widest uppercase px-5 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Записаться
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
                href="#contacts"
                onClick={() => setMenuOpen(false)}
                className="mx-6 mt-2 text-center font-montserrat text-xs tracking-widest uppercase px-5 py-3 border border-primary text-primary"
              >
                Записаться
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Перетяжка мебели"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10">
          <div className="h-16 w-px bg-gradient-to-b from-transparent to-primary opacity-50" />
          <span
            className="text-primary/50 text-[10px] tracking-[0.4em] uppercase"
            style={{ writingMode: "vertical-rl", fontFamily: "'Montserrat', sans-serif" }}
          >
            Мастерская
          </span>
          <div className="h-16 w-px bg-gradient-to-t from-transparent to-primary opacity-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
          <div className="max-w-2xl">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-6 animate-fade-in-up">
              Премиальная мастерская
            </p>
            <h1
              className="font-cormorant text-6xl md:text-8xl font-light leading-[0.9] mb-6 animate-fade-in-up delay-200"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span className="block text-foreground">Новая</span>
              <span className="block text-gold-gradient italic">жизнь</span>
              <span className="block text-foreground">вашей мебели</span>
            </h1>

            <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent mb-8 animate-fade-in-up delay-400" />

            <p className="font-montserrat text-sm leading-relaxed text-muted-foreground mb-10 max-w-md animate-fade-in-up delay-400">
              Превращаем изношенную мебель в предметы искусства. Ручная работа, европейские ткани, более 15 лет мастерства.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
              <a
                href="#contacts"
                className="font-montserrat text-xs tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
              >
                Получить консультацию
              </a>
              <a
                href="#gallery"
                className="font-montserrat text-xs tracking-widest uppercase px-8 py-4 border border-border text-foreground hover:border-primary transition-colors text-center"
              >
                Смотреть работы
              </a>
            </div>

            <div className="flex gap-10 mt-16 pt-8 border-t border-border/50 animate-fade-in-up delay-800">
              {[
                { value: "15+", label: "лет опыта" },
                { value: "2400+", label: "выполненных работ" },
                { value: "100%", label: "гарантия качества" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-cormorant text-3xl text-gold-gradient"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
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
            <h2
              className="font-cormorant text-5xl md:text-6xl font-light gold-line-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
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
                  <span className="font-montserrat text-xs text-primary tracking-wide">
                    {service.price}
                  </span>
                </div>
                <h3
                  className="font-cormorant text-2xl font-light mb-3 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
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

      {/* GALLERY */}
      <section id="gallery" className="py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-4">Портфолио</p>
            <h2
              className="font-cormorant text-5xl md:text-6xl font-light gold-line-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
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
                  <span
                    className="font-cormorant text-xl text-foreground"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.label}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 border border-primary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="Maximize2" size={12} className="text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-3/4 h-3/4 border border-primary/20 z-0" />
              <img
                src={GALLERY_IMG_1}
                alt="О мастерской"
                className="relative z-10 w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 bg-primary/5 z-0 border border-primary/10" />
              <div className="absolute -bottom-6 left-8 z-20 bg-card border border-primary/30 p-6">
                <div
                  className="font-cormorant text-5xl text-gold-gradient leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  15
                </div>
                <div className="font-montserrat text-[9px] tracking-widest uppercase text-muted-foreground mt-1">
                  лет опыта
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-4">О нас</p>
              <h2
                className="font-cormorant text-5xl font-light leading-tight mb-6 gold-line"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Мастерство,<br />
                <em>рождённое из страсти</em>
              </h2>

              <p className="font-montserrat text-sm leading-relaxed text-muted-foreground mb-6">
                Мы — семейная мастерская с 15-летней историей. Каждый проект для нас — это не просто работа, а возможность вдохнуть новую жизнь в любимый предмет мебели.
              </p>
              <p className="font-montserrat text-sm leading-relaxed text-muted-foreground mb-10">
                Используем исключительно европейские ткани премиум-класса: натуральный велюр, шёлк, бархат, кожа. Наши мастера — сертифицированные специалисты с профильным образованием.
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
                      <div className="font-montserrat text-xs text-foreground" style={{fontWeight: 500}}>{feat.title}</div>
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
      <section id="reviews" className="py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-4">Клиенты о нас</p>
            <h2
              className="font-cormorant text-5xl md:text-6xl font-light gold-line-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Отзывы и рейтинги
            </h2>
          </div>

          <div className="flex flex-col items-center mb-14 p-8 border border-primary/20 bg-background/30 max-w-xs mx-auto">
            <div
              className="font-cormorant text-7xl text-gold-gradient leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              5.0
            </div>
            <div className="flex gap-1 my-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="Star" size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground">
              на основе 120+ отзывов
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="card-hover p-8 bg-background rounded-sm">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <span
                        className="font-cormorant text-lg text-primary"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {review.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-montserrat text-xs text-foreground" style={{fontWeight: 500}}>{review.name}</div>
                      <div className="font-montserrat text-[10px] text-muted-foreground mt-0.5">{review.role}</div>
                    </div>
                  </div>
                  <StarRating count={review.rating} />
                </div>
                <div className="w-8 h-px bg-primary/30 mb-4" />
                <p className="font-montserrat text-xs leading-relaxed text-muted-foreground italic">
                  «{review.text}»
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-4">Контакты</p>
              <h2
                className="font-cormorant text-5xl font-light leading-tight mb-6 gold-line"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Готовы преобразить<br />
                <em>вашу мебель</em>
              </h2>
              <p className="font-montserrat text-sm text-muted-foreground leading-relaxed mb-10 max-w-sm">
                Оставьте заявку и наш мастер свяжется с вами в течение часа для бесплатной консультации.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  { icon: "Phone", title: "Телефон", value: "8-923-656-6500", sub: "Ежедневно 9:00 — 21:00" },
                  { icon: "MapPin", title: "Адрес", value: "Барнаул, ул. Попова, 181/1", sub: "Работаем с выездом" },
                  { icon: "Mail", title: "Email", value: "info@artrestavratsiya.ru", sub: "Ответим в течение часа" },
                ].map((contact, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} size={16} className="text-primary" fallback="Info" />
                    </div>
                    <div>
                      <div className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground mb-0.5">
                        {contact.title}
                      </div>
                      <div className="font-montserrat text-sm text-foreground">{contact.value}</div>
                      <div className="font-montserrat text-[10px] text-muted-foreground mt-0.5">{contact.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border p-10">
              <h3
                className="font-cormorant text-3xl font-light mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Заявка на консультацию
              </h3>
              <form className="flex flex-col gap-5">
                <div>
                  <label className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Иван Петров"
                    className="w-full bg-background border border-border px-4 py-3 font-montserrat text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (999) 000-00-00"
                    className="w-full bg-background border border-border px-4 py-3 font-montserrat text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-montserrat text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">
                    Что нужно перетянуть?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Опишите вашу мебель и пожелания..."
                    className="w-full bg-background border border-border px-4 py-3 font-montserrat text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="font-montserrat text-xs tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity mt-2"
                >
                  Отправить заявку
                </button>
                <p className="font-montserrat text-[9px] text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span
              className="font-cormorant text-lg text-gold-gradient tracking-widest uppercase"
              style={{ fontWeight: 600 }}
            >
              АртРеставрация
            </span>
            <span className="font-montserrat text-[9px] tracking-widest text-muted-foreground uppercase mt-0.5">
              Мастерская перетяжки мебели
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

          <p className="font-montserrat text-[10px] text-muted-foreground">
            © 2024 АртРеставрация
          </p>
        </div>
      </footer>
    </div>
  );
}