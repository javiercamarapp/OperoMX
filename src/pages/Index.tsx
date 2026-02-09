import { BackgroundPaths } from "@/components/ui/background-paths";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { ServiciosSection } from "@/components/ServiciosSection";
import { OperoCtaSection } from "@/components/OperoCtaSection";
import { Home, Truck, Users, Mail } from "lucide-react";

const navItems = [
  { name: "Inicio", url: "#", icon: Home },
  { name: "Servicios", url: "#servicios", icon: Truck },
  { name: "Nosotros", url: "#", icon: Users },
  { name: "Contacto", url: "#", icon: Mail },
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
    </>
  );
};

export default Index;
