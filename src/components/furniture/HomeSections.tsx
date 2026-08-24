import Icon from "@/components/ui/icon";
import { HERO_IMG, SERVICES, PRICES } from "./siteData";

interface HomeSectionsProps {
  trackGoal: (goal: string) => void;
}

export default function HomeSections({ trackGoal }: HomeSectionsProps) {
  return (
    <>
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
              №1 в Барнауле · 22 года мастерства
            </p>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary/40 bg-primary/10 animate-fade-in-up">
              <Icon name="Sparkles" size={14} className="text-primary" />
              <span className="font-montserrat text-xs tracking-wide text-foreground">
                Знаете, как сэкономить <span className="text-primary font-semibold">до 70%</span> на перетяжке вместо покупки новой мебели?
              </span>
            </div>
            <h1 className="font-cormorant text-6xl md:text-8xl font-light leading-[0.9] mb-6 animate-fade-in-up delay-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <span className="block text-foreground">Новая</span>
              <span className="block text-gold-gradient italic">жизнь</span>
              <span className="block text-foreground">вашей мебели</span>
              <span className="sr-only"> — перетяжка мебели в Барнауле</span>
            </h1>

            <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent mb-8 animate-fade-in-up delay-400" />

            <p className="font-montserrat text-sm leading-relaxed text-muted-foreground mb-10 max-w-md animate-fade-in-up delay-400">
              Перетяжка диванов, кресел и кроватей в Барнауле. Европейские ткани, ручная работа, оценка по фотографии.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
              <a
                href="#contacts"
                className="font-montserrat text-xs tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
              >
                Оценка по фото
              </a>
              <a
                href="tel:89236566500"
                onClick={() => trackGoal("phone_click")}
                className="font-montserrat text-xs tracking-widest uppercase px-8 py-4 border border-border text-foreground hover:border-primary transition-colors text-center flex items-center justify-center gap-2"
              >
                <Icon name="Phone" size={14} />
                Позвонить
              </a>
            </div>

            <div className="flex gap-10 mt-16 pt-8 border-t border-border/50 animate-fade-in-up delay-800">
              {[
                { value: "22+", label: "лет опыта" },
                { value: "10230+", label: "выполненных работ" },
                { value: "12 мес.", label: "гарантия" },
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
              Окончательная цена зависит от состояния мебели и выбранной ткани. Пришлите фото — дадим точный расчёт.
            </p>
            <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 border border-primary/40 bg-primary/10">
              <Icon name="Sparkles" size={14} className="text-primary flex-shrink-0" />
              <span className="font-montserrat text-xs tracking-wide text-foreground">
                Перетяжка обойдётся до <span className="text-primary font-semibold">70% дешевле</span> покупки новой мебели
              </span>
            </div>
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
                Цены ориентировочные. Точный расчёт — пришлите фото мебели, ответим в течение часа.
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
    </>
  );
}
