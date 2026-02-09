import { TextRevealByWord } from "@/components/ui/text-reveal";

export function OperoCtaSection() {
  return (
    <section className="relative">
      {/* Top wave */}
      <div className="relative -mb-1">
        <svg
          viewBox="0 0 1440 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[15px] md:h-[30px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C240,10 480,25 720,15 C960,5 1200,20 1440,10 L1440,30 L0,30 Z"
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
          viewBox="0 0 1440 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[15px] md:h-[30px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C240,20 480,5 720,15 C960,25 1200,10 1440,20 L1440,0 L0,0 Z"
            fill="hsl(var(--hero-accent))"
          />
        </svg>
      </div>
    </section>
  );
}
