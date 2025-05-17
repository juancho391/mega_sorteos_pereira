import { CardRifa } from "@/components/ui/CardRifa";
import { InfoRifa } from "@/context/type";

const rifa: InfoRifa = {
  id: 1,
  precio: 10000,
  fecha_inicio: "2025-06-01",
  fecha_fin: "2025-06-30",
  premio: "NKD 125",
  tipo: "Moto 0 kms",
  is_active: true,
  image_premio: "https://example.com/moto.jpg",
  numeros_especiales: [
    { id: 1, numero: 1445, disponible: false },
    { id: 2, numero: 25123, disponible: true },
    { id: 3, numero: 3321, disponible: true },
    { id: 4, numero: 412, disponible: true },
    { id: 5, numero: 512, disponible: true },
    { id: 6, numero: 633, disponible: true },
    { id: 7, numero: 724, disponible: true },
    { id: 8, numero: 8512, disponible: true },
    { id: 9, numero: 9421, disponible: true },
    { id: 10, numero: 10412, disponible: true },
  ],
};
export function Rifas() {
  return (
    <div className="h-full border-2 border-white m-5 p-3 rounded-sm w-full">
      <CardRifa {...rifa} />
      {/* <CardRifa {...rifa} />
      <CardRifa {...rifa} />
      <CardRifa {...rifa} />
      <CardRifa {...rifa} /> */}
    </div>
  );
}
