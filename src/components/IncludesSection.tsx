import { cn } from "@/lib/utils";
import {
  Ban,
  Timer,
  Truck,
  MapPin,
  CheckCircle2,
  DollarSign,
  BarChart3,
  Smartphone,
  Brain,
} from "lucide-react";

const features = [
  {
    title: "Sin comisiones por venta",
    description:
      "Opero no toma porcentaje de tus ingresos. Lo que cobras a tus clientes es tuyo.",
    icon: <Ban className="h-6 w-6" />,
  },
  {
    title: "Entregas rápidas en ciudad",
    description:
      "Operación diseñada para entregar en menos de 30 minutos, incluso con alto volumen diario.",
    icon: <Timer className="h-6 w-6" />,
  },
  {
    title: "Coordinación de envíos sin límite",
    description:
      "Desde pocos pedidos hasta cientos al día. Opero se adapta al tamaño de tu operación.",
    icon: <Truck className="h-6 w-6" />,
  },
  {
    title: "Seguimiento en tiempo real",
    description:
      "Tú y tu cliente pueden ver el estatus del envío en todo momento: recolección, trayecto y entrega.",
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    title: "Confirmación de entrega",
    description:
      "Cada pedido se valida con evidencia (foto, firma o código), reduciendo errores y reclamos.",
    icon: <CheckCircle2 className="h-6 w-6" />,
  },
  {
    title: "Tarifas claras por envío",
    description:
      "Costos definidos por zona y tipo de entrega. Sin cargos ocultos ni variaciones inesperadas.",
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    title: "Historial y control operativo",
    description:
      "Accede a todos tus envíos, tiempos, incidencias y comprobantes desde un solo panel.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Soporte para tu operación diaria",
    description:
      "Acompañamiento cuando lo necesitas para que tu logística no se detenga.",
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    title: "Compatible con tu forma de vender",
    description:
      "Funciona con WhatsApp, llamadas, tiendas online, marketplaces o equipos de ventas. No cambias tu proceso, solo lo haces más eficiente.",
    icon: <Brain className="h-6 w-6" />,
  },
];

function Feature({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-col py-8 px-5 relative group/feature border-b border-white/10 last:border-b-0",
        "lg:border-b-0",
        "lg:border-r border-white/10 last:border-r-0"
      )}
    >
      {/* top gradient on hover */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-hero-accent/20 to-transparent pointer-events-none" />

      {/* bottom border accent on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hero-accent to-transparent opacity-0 group-hover/feature:opacity-100 transition duration-200" />

      <div className="mb-4 relative z-10 text-white/60 group-hover/feature:text-hero-accent transition-colors duration-200">
        {icon}
      </div>
      <div className="relative z-10">
        <h4 className="text-lg font-bold text-white mb-2 group-hover/feature:text-hero-accent transition-colors duration-200">
          {title}
        </h4>
        <p className="text-sm text-white/50 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function IncludesSection() {
  return (
    <section className="bg-foreground px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-hero-accent font-semibold text-sm tracking-wider uppercase mb-3">
            🔍 Todo incluido
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Lo que incluye Opero
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
