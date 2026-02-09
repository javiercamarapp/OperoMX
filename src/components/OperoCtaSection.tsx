import { TextRevealByWord } from "@/components/ui/text-reveal";

export function OperoCtaSection() {
  return (
    <section className="relative">
      {/* Top wave */}
      <div className="relative -mb-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[60px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C240,40 480,100 720,60 C960,20 1200,80 1440,40 L1440,120 L0,120 Z"
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
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[60px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C240,80 480,20 720,60 C960,100 1200,40 1440,80 L1440,0 L0,0 Z"
            fill="hsl(var(--hero-accent))"
          />
        </svg>
      </div>
    </section>
  );
}
