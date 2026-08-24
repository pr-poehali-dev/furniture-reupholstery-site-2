import { useState } from "react";
import Header from "@/components/furniture/Header";
import HomeSections from "@/components/furniture/HomeSections";
import ShowcaseSections from "@/components/furniture/ShowcaseSections";
import ContactSection from "@/components/furniture/ContactSection";
import { SEND_LEAD_URL } from "@/components/furniture/siteData";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Все");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const trackGoal = (goal: string) => {
    if (typeof window !== "undefined" && (window as any).ym) {
      (window as any).ym(101026698, "reachGoal", goal);
    }
  };

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
        trackGoal("lead_form_submit");
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
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} trackGoal={trackGoal} />

      <HomeSections trackGoal={trackGoal} />

      <ShowcaseSections
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        lightboxIdx={lightboxIdx}
        setLightboxIdx={setLightboxIdx}
      />

      <ContactSection
        form={form}
        setForm={setForm}
        formState={formState}
        setFormState={setFormState}
        handleSubmit={handleSubmit}
        trackGoal={trackGoal}
      />
    </div>
  );
}
