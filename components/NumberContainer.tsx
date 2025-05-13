import { Boleta } from "@/context/type";
export default function NumberContainer({
  numero,
  disponible = true,
}: Boleta) {
  return (
    <div
      className={`w-16 h-6 flex items-center justify-center rounded-full font-extrabold text-black sm:h-8 sm:w-20 lg:h-12 lg:w-24 ${
        disponible ? "bg-brandYellow" : "bg-brandRed"
      }`}
    >
      {numero}
    </div>
  );
}
