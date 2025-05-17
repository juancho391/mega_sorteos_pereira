import { CrearRifa } from "@/components/CrearRifa";
import { Rifas } from "@/components/Rifas";
import Footer from "@/components/Footer";

export default function PanelAdmin() {
  return (
    <div className="flex flex-col grow-1 items-center p-5 sm:p-10">
      <CrearRifa />
      <Rifas />
      <Footer />
    </div>
  );
}
