import Icon from "@/components/ui/icon";
import { GALLERY_ITEMS, REVIEWS } from "./siteData";

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

interface ShowcaseSectionsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  lightboxIdx: number | null;
  setLightboxIdx: (idx: number | null) => void;
}

export default function ShowcaseSections({
  activeCategory,
  setActiveCategory,
  lightboxIdx,
  setLightboxIdx,
}: ShowcaseSectionsProps) {
  const categories = ["Все", "Диваны", "Кресла", "Кровати"];
  const filteredGallery =
    activeCategory === "Все"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  return (
    <>
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
              <div key={idx} className="group relative overflow-hidden aspect-[4/3] cursor-pointer" onClick={() => setLightboxIdx(idx)}>
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

          {lightboxIdx !== null && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightboxIdx(null)}
            >
              <button
                className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
                onClick={() => setLightboxIdx(null)}
              >
                <Icon name="X" size={32} />
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
                onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + filteredGallery.length) % filteredGallery.length); }}
              >
                <Icon name="ChevronLeft" size={40} />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
                onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % filteredGallery.length); }}
              >
                <Icon name="ChevronRight" size={40} />
              </button>
              <img
                src={filteredGallery[lightboxIdx].img}
                alt={filteredGallery[lightboxIdx].label}
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="font-montserrat text-xs tracking-widest uppercase text-white/60">
                  {filteredGallery[lightboxIdx].label} — {lightboxIdx + 1} / {filteredGallery.length}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-3/4 h-3/4 border border-primary/20 z-0" />
              <img src="https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/files/c71b2754-5ab9-48fb-94ef-09ec405b1d41.jpg" alt="Обивщик мягкой мебели" className="relative z-10 w-full h-[500px] object-cover" />
              <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 bg-primary/5 z-0 border border-primary/10" />
              <div className="absolute -bottom-6 left-8 z-20 bg-card border border-primary/30 p-6">
                <div className="font-cormorant text-5xl text-gold-gradient leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>22</div>
                <div className="font-montserrat text-[9px] tracking-widest uppercase text-muted-foreground mt-1">года опыта</div>
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
                  { icon: "Award", title: "Гарантия 12 месяцев", desc: "На все виды работ" },
                  { icon: "Camera", title: "Оценка по фото", desc: "Пришли фото — скажем цену" },
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="relative overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/bucket/10544cb8-8121-48a8-b1a7-92907ded99ab.png"
                alt="Наши швеи за работой"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background/70 px-5 py-3">
                <p className="font-montserrat text-xs tracking-widest uppercase text-foreground">Наши мастера</p>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/bucket/01922a6f-1a09-43bf-a1bf-63cc113e8d66.png"
                alt="Бесплатный вывоз и доставка мебели"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background/70 px-5 py-3">
                <p className="font-montserrat text-xs tracking-widest uppercase text-foreground">Бесплатный вывоз и доставка</p>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/2c1c2b7c-a07b-4aaa-b118-54c4e8e34048/bucket/413cd880-6b3f-42be-8051-9d686202ae53.png"
                alt="Выбор тканей"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background/70 px-5 py-3">
                <p className="font-montserrat text-xs tracking-widest uppercase text-foreground">Большой выбор тканей</p>
              </div>
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
    </>
  );
}
