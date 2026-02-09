'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import logo from '@/assets/logo.png';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Navegación',
    links: [
      { title: 'Inicio', href: '#' },
      { title: 'Cómo funciona', href: '#como-funciona' },
      { title: 'Precio', href: '#precio' },
      { title: 'FAQ', href: '#faq' },
    ],
  },
  {
    label: 'Empresa',
    links: [
      { title: 'Sobre nosotros', href: '#' },
      { title: 'Política de privacidad', href: '#' },
      { title: 'Términos de servicio', href: '#' },
      { title: 'Contacto', href: '#contacto' },
    ],
  },
  {
    label: 'Redes Sociales',
    links: [
      { title: 'Facebook', href: '#', icon: FacebookIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
      { title: 'Youtube', href: '#', icon: YoutubeIcon },
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-white border-t border-border/40 pt-16 pb-8">
      {/* Glowing bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 flex flex-col items-center">
        <div className="w-full h-1.5 bg-gradient-to-r from-transparent via-hero-accent to-transparent rounded-full" />
        <div className="w-full h-16 bg-hero-accent/30 rounded-full blur-2xl -mt-8" />
        <div className="w-3/4 h-24 bg-hero-accent/20 rounded-full blur-3xl -mt-16" />
      </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
        <AnimatedContainer>
          <img src={logo} alt="Logo" className="h-20 md:h-28 w-auto mb-10" />
        </AnimatedContainer>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-14">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div>
                <h4 className="text-hero-accent font-bold text-sm uppercase tracking-wider mb-4">
                  {section.label}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.href === '#') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          } else {
                            const el = document.querySelector(link.href);
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-foreground/60 hover:text-hero-accent transition-colors text-sm flex items-center gap-2"
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* Bottom bar */}
        <AnimatedContainer delay={0.4}>
          <div className="border-t border-border/40 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/50 text-sm">
              © {new Date().getFullYear()} Opero. Todos los derechos reservados.
            </p>
            <p className="text-hero-accent text-sm font-semibold">
              Hecho con 🧡 para tu negocio
            </p>
          </div>
        </AnimatedContainer>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<'div'>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
