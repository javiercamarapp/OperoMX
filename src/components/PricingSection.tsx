import React from 'react';
import { PlusIcon, ShieldCheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BorderTrail } from '@/components/ui/border-trail';
export function PricingSection() {
  return <section className="relative px-4 md:px-8 lg:px-16 py-8 md:py-12">
      <div className="mx-auto max-w-6xl bg-hero-accent rounded-3xl px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16 shadow-2xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <div>
            <Badge variant="outline" className="border-white/30 text-white/90 bg-white/10">
              Precio
            </Badge>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Precios claros para escalar, sin comisiones.
          </h2>

          <p className="max-w-2xl text-sm text-white/80 md:text-base">
            ​Empiezas, usas y cancelas cuando quieras.
Pagas una tarifa fija y utilizas toda la plataforma de Opero sin compromisos a largo plazo.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="relative rounded-2xl bg-white/10 backdrop-blur-sm p-1">
            <BorderTrail className="from-white/70 via-white/50 to-white/20" size={80} transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'linear'
          }} />
            <BorderTrail className="from-white/50 via-white/30 to-transparent" size={60} transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'linear'
          }} delay={3} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Monthly */}
              <div className="rounded-xl bg-white/10 p-5 transition-all hover:bg-white/15">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Mensual</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-white/50 line-through">$2,500</span>
                      <Badge className="bg-white/20 text-white border-none text-xs">11% off</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white/70 mb-3">
                  ¡El mejor valor para negocios en crecimiento!
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-sm text-white/70">$</span>
                  <span className="text-3xl font-bold text-white">2,000</span>
                  <span className="text-sm text-white/70">/mes</span>
                </div>
                <Button className="w-full bg-white text-hero-accent hover:bg-white/90 font-semibold">
                  Comenzar ahora
                </Button>
              </div>

              {/* Yearly */}
              <div className="rounded-xl bg-white/15 p-5 ring-2 ring-white/30 transition-all hover:bg-white/20">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Anual</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-white/50 line-through">$8.99</span>
                      <Badge className="bg-white/20 text-white border-none text-xs">22% off</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white/70 mb-3">
                  ¡Desbloquea ahorros con un compromiso anual!
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-sm text-white/70">$</span>
                  <span className="text-3xl font-bold text-white">6.99</span>
                  <span className="text-sm text-white/70">/mes</span>
                </div>
                <Button className="w-full bg-white text-hero-accent hover:bg-white/90 font-semibold">
                  Empezar ya
                </Button>
              </div>
            </div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }} className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
            <ShieldCheckIcon className="h-4 w-4" />
            Acceso a todas las funcionalidades sin costes ocultos
          </motion.div>
        </div>
      </div>
    </section>;
}