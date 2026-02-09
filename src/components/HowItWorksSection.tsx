import { FeatureSteps } from "@/components/ui/feature-steps";
import step1 from "@/assets/step-1-orders.jpg";
import step2 from "@/assets/step-2-request.jpg";
import step3 from "@/assets/step-3-pickup.jpg";
import step4 from "@/assets/step-4-tracking.jpg";
import step5 from "@/assets/step-5-confirmation.jpg";
import step6 from "@/assets/step-6-growth.jpg";

const features = [
  {
    step: "📦 Paso 1",
    title: "Recibes pedidos de tus clientes como siempre",
    content:
      "Tus ventas siguen igual: WhatsApp, llamadas, Instagram, Marketplace, tu tienda, tu equipo de ventas… tu canal es tu canal. No cambias tu operación ni obligas a nadie a usar otra app.",
    image: step1,
  },
  {
    step: "⚡ Paso 2",
    title: "En segundos solicitas una recolección",
    content:
      "Entras a Opero, eliges origen, destino y tipo de envío y listo. Sin llamadas. Sin perseguir mensajeros. Sin perder tiempo coordinando.",
    image: step2,
  },
  {
    step: "🚚 Paso 3",
    title: "Un repartidor llega a recoger tu paquete",
    content:
      "El sistema asigna automáticamente al repartidor ideal según zona, tamaño, urgencia y capacidad. Tú no buscas… Opero lo resuelve.",
    image: step3,
  },
  {
    step: "📍 Paso 4",
    title: "Monitoreo en tiempo real y notificaciones",
    content:
      "Tú y tu cliente reciben actualizaciones de estatus: recolección, en camino, entrega y comprobante. Menos \"¿dónde viene?\" y más confianza.",
    image: step4,
  },
  {
    step: "✅ Paso 5",
    title: "Entrega con confirmación",
    content:
      "Cada entrega se valida con evidencia (foto/firma/código, según tu operación). Así reduces errores, reclamos y paquetes \"entregados pero no entregados\".",
    image: step5,
  },
  {
    step: "🎉 Paso 6",
    title: "Entrega en menos de 30 minutos y sigues creciendo",
    content:
      "Cada pedido entregado es un cliente feliz que te recomienda. Si hoy haces 10 envíos, Opero coordina 10. Si mañana haces 200, Opero los entrega en menos de 30 minutos, sin caos operativo.",
    image: step6,
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative px-4 md:px-8 lg:px-16 pt-14 md:pt-20 pb-2 md:pb-8 h-screen flex items-center">
      <div className="mx-auto max-w-6xl w-full bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
        <FeatureSteps
          features={features}
          title="📋 Paso a paso — Cómo funciona Opero"
          autoPlayInterval={5000}
          imageHeight="h-[150px] md:h-[350px]"
        />
        <p className="text-center text-muted-foreground text-xs md:text-sm px-6 pb-4 max-w-2xl mx-auto">
          Todo el proceso, de principio a fin, diseñado para que tus envíos diarios se entreguen en menos de 30 minutos.
        </p>
      </div>
    </section>
  );
}
