import { BackgroundPaths } from "@/components/ui/background-paths";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Truck, Users, Mail } from "lucide-react";

const navItems = [
  { name: "Inicio", url: "#", icon: Home },
  { name: "Servicios", url: "#", icon: Truck },
  { name: "Nosotros", url: "#", icon: Users },
  { name: "Contacto", url: "#", icon: Mail },
];

const Index = () => {
  return (
    <>
      <NavBar items={navItems} />
      <BackgroundPaths />
    </>
  );
};

export default Index;
