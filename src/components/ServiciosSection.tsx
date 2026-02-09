import { motion } from "framer-motion";
import { Zap, Truck, MapPin, BarChart3, LucideIcon } from "lucide-react";

interface ServicioCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const servicios: ServicioCard[] = [
  {
    icon: Zap,
    title: "Logística de Despacho Inmediato",
    description:
      "Garantizamos la integridad de sus productos mediante tiempos de respuesta optimizados y una gestión de última milla de alta velocidad.",
  },
  {
    icon: Truck,
    title: "Disponibilidad de Flota Flexible",
    description:
      "Garantizamos la cobertura total en periodos de alta demanda mediante una red extensa de conductores, asegurando la continuidad de su servicio sin interrupciones.",
  },
  {
    icon: MapPin,
    title: "Monitoreo Logístico en Tiempo Real",
    description:
      "Transparencia operativa mediante sistemas de geolocalización avanzada, permitiendo el seguimiento preciso de cada unidad desde el origen hasta el destino final.",
  },
  {
    icon: BarChart3,
    title: "Gestión Contable y Auditoría",
    description:
      "Reportes financieros detallados y conciliación automatizada de pedidos, brindando una visión clara y estructurada de la rentabilidad de su canal digital.",
  },
];

export function ServiciosSection() {
  return (
    <section className="py-24 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center tracking-tight text-hero-foreground mb-16"
        >
          Servicios
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon;
            return (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF5B48]/10">
                  <Icon className="w-6 h-6 text-[#FF5B48]" />
                </div>
                <h3 className="text-xl font-bold text-hero-foreground mb-3">
                  {servicio.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {servicio.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
