import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"
import { AnimatedText } from "@/components/ui/animated-underline-text-one"
import { DeliveryAnimation } from "@/components/DeliveryAnimation"

const SERVICIOS = [
  {
    id: "servicio-1",
    title: "Centralización total",
    description:
      "Gestiona todos tus envíos diarios desde una sola plataforma. Olvídate de llamadas, mensajes y coordinación manual.",
  },
  {
    id: "servicio-2",
    title: "Operación confiable y constante",
    description:
      "Accede a una red de repartidores verificados, disponibles cuando tu negocio los necesita, todos los días.",
  },
  {
    id: "servicio-3",
    title: "Visibilidad en tiempo real",
    description:
      "Sabe dónde está cada pedido, quién lo entrega y en qué estado se encuentra, en todo momento.",
  },
  {
    id: "servicio-4",
    title: "Menos errores, más eficiencia",
    description:
      "Reduce retrasos, confusiones y reprocesos con flujos claros y seguimiento automático.",
  },
  {
    id: "servicio-5",
    title: "Escala sin complicaciones",
    description:
      "Crece tu volumen de entregas sin aumentar tu carga operativa ni depender de improvisaciones.",
  },
  {
    id: "servicio-6",
    title: "Diseñado para negocios reales",
    description:
      "Ideal para restaurantes, dark kitchens, farmacias y comercios con envíos diarios.",
  },
  {
    id: "servicio-7",
    title: "Experiencia profesional para tus clientes",
    description:
      "Entregas más rápidas, ordenadas y confiables que elevan la percepción de tu marca.",
  },
  {
    id: "servicio-8",
    title: "Infraestructura, no solo repartos",
    description:
      "Opero Express no es mensajería: es la base operativa de tu logística diaria.",
  },
]

export function ServiciosSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Sticky Header */}
          <div className="sticky top-24 z-10 bg-background pb-6 lg:top-40 lg:h-fit">
            <p className="text-hero-accent font-semibold text-sm uppercase tracking-wider mb-4">
              nuestros servicios
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Todo tu reparto,{" "}
              <AnimatedText 
                text="bajo control" 
                textClassName="text-hero-accent"
                underlineClassName="text-hero-accent"
                underlineDuration={1.2}
              />
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Nuestra plataforma está diseñada para que gestiones tus envíos con total 
              tranquilidad, visibilidad y eficiencia. Sin complicaciones, sin improvisaciones.
            </p>
            
            {/* Delivery Animation */}
            <DeliveryAnimation />
          </div>

          {/* Right Column - Stacking Cards */}
          <ContainerScroll className="gap-0 mt-64 lg:mt-0">
            {SERVICIOS.map((servicio, index) => (
              <CardSticky
                key={servicio.id}
                index={index}
                baseTop={220}
                baseTopMobile={380}
                incrementY={20}
                incrementZ={10}
                className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-lg"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {servicio.title}
                  </h3>
                  <span className="text-3xl md:text-4xl font-bold text-hero-accent shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {servicio.description}
                </p>
              </CardSticky>
            ))}

            {/* Spacer: permite que las últimas cards alcancen su posición sticky sin scroll "vacío" excesivo */}
            <div aria-hidden style={{ height: (SERVICIOS.length - 1) * 20 + 300 }} />
          </ContainerScroll>
        </div>
      </div>
    </section>
  )
}
