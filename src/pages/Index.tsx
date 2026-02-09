import { BackgroundPaths } from "@/components/ui/background-paths";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { ServiciosSection } from "@/components/ServiciosSection";
import { OperoCtaSection } from "@/components/OperoCtaSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingSection } from "@/components/PricingSection";
import { IncludesSection } from "@/components/IncludesSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/ui/footer-section";
import { Home, HelpCircle, DollarSign, MessageCircleQuestion, Mail } from "lucide-react";

const navItems = [
  { name: "Inicio", url: "#", icon: Home },
  { name: "Cómo funciona", url: "#como-funciona", icon: HelpCircle },
  { name: "Precio", url: "#precio", icon: DollarSign },
  { name: "FAQ", url: "#faq", icon: MessageCircleQuestion },
  { name: "Contacto", url: "#contacto", icon: Mail },
];

const Index = () => {
  return (
    <>
      <NavBar items={navItems} />
      <BackgroundPaths />
      <div id="servicios">
        <ServiciosSection />
      </div>
      <OperoCtaSection />
      <div id="como-funciona">
        <HowItWorksSection />
      </div>
      <div id="precio">
        <PricingSection />
      </div>
      <IncludesSection />
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contacto">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};

export default Index;
