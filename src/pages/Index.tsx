import { BackgroundPaths } from "@/components/ui/background-paths";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { ServiciosSection } from "@/components/ServiciosSection";
import { OperoCtaSection } from "@/components/OperoCtaSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ContactSection } from "@/components/ContactSection";
import { Home, Truck, Users, Mail } from "lucide-react";

const navItems = [
  { name: "Inicio", url: "#", icon: Home },
  { name: "Servicios", url: "#servicios", icon: Truck },
  { name: "Cómo funciona", url: "#como-funciona", icon: Users },
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
      <HowItWorksSection />
      <ContactSection />
    </>
  );
};

export default Index;
