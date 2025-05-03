import Image from "next/image";
import NumberContainer from "./NumberContainer";
import { Progress } from "./ui/progress";
import { infoRifa } from "@/context/type";

export default function Rifa(props: infoRifa) {
  return (
    <div className="w-80 border-1 border-brandYellow h-full rounded-lg flex flex-col items-center px-3 sm:w-full">
      <div className="flex flex-col w-full sm:flex-row h-full">
        <div className="w-full flex flex-col items-center sm:items-start sm:h-full sm:p-3 sm:gap-10 sm:max-w-[70%] ">
          <div className="rounded-full bg-brandRed text-center w-1/2 h-6 content-center mt-5 sm:w-50 sm:text-2xl sm:h-10">
            SORTEO ACTIVO
          </div>
          <div className="flex my-3 sm:flex-col sm:gap-6">
            <div className="text-center sm:flex sm:flex-col">
              <span className="inline-block font-extrabold sm:text-2xl sm:text-start">
                GRAN SORTEO
              </span>
              <span className="inline-block font-extrabold bg-gradient-to-r from-brandRed to-brandYellow bg-clip-text text-transparent sm:text-2xl sm:text-start">
                {props.tipo} 0 KMS
              </span>
            </div>
            <div className="text-center sm:flex sm:flex-col">
              <span className="inline-block font-extrabold sm:text-2xl sm:text-start">
                {props.premio}
              </span>
              <span className="inline-block font-extrabold text-brandYellow sm:text-2xl sm:text-start">
                VALOR: ${props.precio}
              </span>
            </div>
          </div>
          <button className="w-full bg-linear-to-r from-brandRed to-brandYellow rounded-lg h-10 sm:max-w-full sm:text-lg ">
            COMPRAR AHORA!
          </button>
        </div>
        <div className="relative w-full h-64 mb-5 sm:min-h-90 ">
          <Image
            src={"/NKD.jpg"}
            alt="Picture of bike"
            className="mt-5 object-fill"
            fill
          />
        </div>
      </div>
      <div className="h-50 w-full flex flex-col items-center p-2">
        <span className="inline-block font-extrabold sm:text-2xl sm:mt-3">
          Numeros Premiados
        </span>
        <div className="h-full w-full flex justify-evenly flex-wrap content-evenly">
          {props.listNumbers.map((number) => (
            <NumberContainer
              key={number.number}
              number={number.number}
              isAvailable={number.isAvailable}
            />
          ))}
        </div>
        <div className="w-full h-7 sm:h-14">
          <Progress value={60} />
        </div>
      </div>
    </div>
  );
}
