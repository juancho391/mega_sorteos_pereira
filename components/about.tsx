import { LuCircleCheckBig } from "react-icons/lu";
import { LuUsersRound } from "react-icons/lu";
import { TfiMedallAlt } from "react-icons/tfi";
import CardValues from "./ui/CardValues";

export default function About() {
  return (
    <div className="w-80 border-1 border-brandYellow rounded-lg h-full px-3 flex flex-col items-center gap-2">
      <span className="text-2xl inline-block font-extrabold bg-gradient-to-r from-brandRed to to-brandYellow bg-clip-text text-transparent">
        QUIENES SOMOS
      </span>
      <span className="inline-block text-center font-light text-sm">
        en <span className="text-brandYellow">MEGA SORTEOS PEREIRA</span> nos
        dedicamos a hacer realidad los sueños de nuestros participantes a traés
        de sorteos transparentes y confiables
      </span>
      <span className="inline-block font-extrabold">Nuestos valores</span>
      <CardValues
        text="Todos nuestros sorteos son realizados con total transparencia y verificados por autoridades competentes."
        name="transparencia"
        icon={<LuCircleCheckBig className="text-brandYellow text-6xl" />}
      />
      <CardValues
        text="Construimos relaciones duraderas basadas en la confianza y el cumplimiento de nuestras promesas."
        name="Confianza"
        icon={<LuUsersRound className="text-brandYellow text-6xl" />}
      />
      <CardValues
        text="Nos esforzamos por ofrecer la mejor experiencia y los premios más atractivos del mercado."
        name="Excelencia"
        icon={<TfiMedallAlt className="text-brandYellow text-6xl" />}
      />
    </div>
  );
}
