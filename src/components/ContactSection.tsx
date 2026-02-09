import { Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    description: "Nuestro equipo responde en tiempo real.",
    value: "contacto@opero.mx",
    shortValue: "contacto@\nopero.mx",
  },
  {
    icon: MapPin,
    title: "Oficina",
    description: "Visítanos en persona.",
    value: "Ciudad de México, MX",
    href: "#",
  },
  {
    icon: Phone,
    title: "Llámanos",
    description: "Disponible en horario laboral.",
    value: "+52 55 1234 5678",
    href: "tel:+525512345678",
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="relative px-4 md:px-8 lg:px-16 py-8 md:py-20">
      <div data-bg-accent className="mx-auto max-w-6xl bg-hero-accent rounded-2xl md:rounded-3xl shadow-2xl px-4 py-8 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="text-center mb-4 md:mb-12">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
            Contáctanos
          </h2>
          <p className="text-xs md:text-xl text-white/70 max-w-2xl mx-auto">
            Nos encantaría saber de ti. Escríbenos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-1 md:gap-8">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center text-center p-1.5 md:p-6 rounded-lg md:rounded-2xl bg-white/10 hover:bg-white/20 transition-colors overflow-hidden"
            >
              <div className="w-7 h-7 md:w-14 md:h-14 rounded-full bg-white/20 flex items-center justify-center mb-1 md:mb-4">
                <card.icon className="w-3.5 h-3.5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-[10px] md:text-lg font-semibold text-white mb-0.5 md:mb-1">{card.title}</h3>
              <p className="text-[9px] md:text-sm text-white/60 mb-1 md:mb-3 hidden md:block">{card.description}</p>
              <a
                href={card.href}
                className="text-[8px] md:text-base text-white font-semibold hover:underline text-center leading-tight"
              >
                {card.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
