import Icon from "@/components/ui/icon";
import { NAV_LINKS, TELEGRAM_LINK } from "./siteData";

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface ContactSectionProps {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  formState: "idle" | "loading" | "success" | "error";
  setFormState: (state: "idle" | "loading" | "success" | "error") => void;
  handleSubmit: (e: React.FormEvent) => void;
  trackGoal: (goal: string) => void;
}

export default function ContactSection({
  form,
  setForm,
  formState,
  setFormState,
  handleSubmit,
  trackGoal,
}: ContactSectionProps) {
  return (
    <>
      {/* PHOTO ESTIMATE */}
      <section id="photo-estimate" className="py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-montserrat text-xs tracking-[0.4em] uppercase text-primary mb-4">Быстро и удобно</p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light gold-line-center mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Оценка работ по фото
          </h2>
          <p className="font-montserrat text-sm leading-relaxed text-muted-foreground mb-10 max-w-xl mx-auto">
            Пришлите фото вашей мебели — и мы бесплатно рассчитаем стоимость работ в течение часа. Без выезда и лишних вопросов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href="tel:89236566500"
              onClick={() => trackGoal("phone_click")}
              className="font-montserrat text-xs tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-3"
            >
              <Icon name="Phone" size={14} />
              8-923-656-6500
            </a>
            <a
              href="https://max.ru/+79236566500"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-xs tracking-widest uppercase px-10 py-4 border border-border text-foreground hover:border-primary transition-colors flex items-center gap-3"
            >
              <Icon name="MessageCircle" size={14} />
              Написать в Max
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { icon: "Camera", text: "Сфотографируйте мебель" },
              { icon: "Send", text: "Отправьте нам фото" },
              { icon: "BadgeCheck", text: "Получите точную цену" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center">
                  <Icon name={step.icon} size={18} className="text-primary" fallback="Check" />
                </div>
                <p className="font-montserrat text-xs text-muted-foreground">{step.text}</p>
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
                Оставьте заявку — мастер свяжется с вами в течение часа и сделает оценку по фотографии.
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
                        <a
                          href={contact.href}
                          onClick={() => contact.href.startsWith("tel:") && trackGoal("phone_click")}
                          className="font-montserrat text-sm text-foreground hover:text-primary transition-colors"
                        >{contact.value}</a>
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
                Заявка на оценку
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

      {/* TELEGRAM FLOAT */}
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#229ED9] text-white px-4 py-3 shadow-lg hover:bg-[#1a8bbf] transition-colors group"
        style={{ borderRadius: 2 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.514 14.85l-2.948-.924c-.641-.2-.654-.641.136-.953l11.51-4.44c.535-.194 1.003.131.35 1.715z"/>
        </svg>
        <span className="font-montserrat text-xs tracking-widest uppercase">
          Написать Мастеру
        </span>
      </a>

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
            <a href="tel:89236566500" onClick={() => trackGoal("phone_click")} className="font-montserrat text-sm text-foreground hover:text-primary transition-colors">
              8-923-656-6500
            </a>
            <p className="font-montserrat text-[10px] text-muted-foreground">© 2026 Перетяжка мебели №1</p>
          </div>
        </div>
      </footer>
    </>
  );
}
