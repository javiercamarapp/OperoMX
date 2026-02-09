import { TextRevealByWord } from "@/components/ui/text-reveal";

export function OperoCtaSection() {
  return (
    <section className="relative">
      {/* Top wave */}
      <div className="relative -mb-1">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[30px] md:h-[60px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,20 480,50 720,30 C960,10 1200,40 1440,20 L1440,60 L0,60 Z"
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
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[30px] md:h-[60px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C240,40 480,10 720,30 C960,50 1200,20 1440,40 L1440,0 L0,0 Z"
            fill="hsl(var(--hero-accent))"
          />
        </svg>
      </div>
    </section>
  );
}
