import { TextRevealByWord } from "@/components/ui/text-reveal";

export function OperoCtaSection() {
  return (
    <section className="relative">
      {/* Top wave */}
      <div className="relative -mb-1">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[40px] md:h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,0 720,70 1080,10 C1260,0 1380,30 1440,20 L1440,80 L0,80 Z"
            fill="hsl(var(--hero-accent))"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="bg-hero-accent">
        <TextRevealByWord
          text="Opero es la manera de llevar tu negocio al siguiente nivel, profesionalizando tu reparto diario con tecnología, control y una operación diseñada para crecer contigo."
        />
      </div>

      {/* Bottom wave */}
      <div className="relative -mt-1">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[40px] md:h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,80 720,10 1080,70 C1260,80 1380,50 1440,60 L1440,0 L0,0 Z"
            fill="hsl(var(--hero-accent))"
          />
        </svg>
      </div>
    </section>
  );
}
