import { Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    description: "Nuestro equipo responde en tiempo real.",
    value: "contacto@opero.mx",
    href: "mailto:contacto@opero.mx",
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
    <section id="contacto" className="relative px-4 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="mx-auto max-w-6xl bg-card rounded-3xl shadow-2xl px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 border border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Nos encantaría saber de ti. Escríbenos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-hero-accent/10 flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-hero-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{card.description}</p>
              <a
                href={card.href}
                className="text-hero-accent font-semibold hover:underline"
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
