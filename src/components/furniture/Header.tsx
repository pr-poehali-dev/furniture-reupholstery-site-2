import Icon from "@/components/ui/icon";
import { NAV_LINKS } from "./siteData";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  trackGoal: (goal: string) => void;
}

export default function Header({ menuOpen, setMenuOpen, trackGoal }: HeaderProps) {
  return (
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
          onClick={() => trackGoal("phone_click")}
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
              onClick={() => { setMenuOpen(false); trackGoal("phone_click"); }}
              className="mx-6 mt-2 flex items-center justify-center gap-2 font-montserrat text-xs tracking-widest uppercase px-5 py-3 border border-primary text-primary"
            >
              <Icon name="Phone" size={14} />
              8-923-656-6500
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
