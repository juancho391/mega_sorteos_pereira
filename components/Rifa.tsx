import Image from "next/image";
import NumberContainer from "./NumberContainer";
import { NumberProps } from "./NumberContainer";

interface InfoLottery {
  premio: string;
  tipo: string;
  precio: number;
  listNumbers: NumberProps[];
}

export default function Rifa(props: InfoLottery) {
  return (
    <div className="w-80 border-1 border-brandYellow h-150 rounded-lg flex flex-col items-center px-3">
      <div className="rounded-full bg-brandRed text-center w-1/2 h-6 content-center mt-5 ">
        SORTEO ACTIVO
      </div>
      <div className="flex my-3 ">
        <div className="text-center">
          <span className="inline-block font-extrabold">GRAN SORTEO</span>
          <span className="inline-block font-extrabold bg-gradient-to-r from-brandRed to-brandYellow bg-clip-text text-transparent">
            {props.tipo} 0 KMS
          </span>
        </div>
        <div className="text-center">
          <span className="inline-block font-extrabold">{props.premio}</span>
          <span className="inline-block font-extrabold text-brandYellow">
            VALOR: ${props.precio}
          </span>
        </div>
      </div>
      <button className="w-full bg-linear-to-r from-brandRed to-brandYellow rounded-full h-8">
        COMPRAR AHORA!
      </button>
      <Image
        src={"/NKD.jpg"}
        height={500}
        width={500}
        alt="Picture of bike"
        className="mt-5"
      />
      <div className="border-2 border-brandYellow h-50 w-full flex flex-col items-center p-2">
        <span className="inline-block font-extrabold">Numeros Premiados</span>
        <div className="bg-brandRed h-20 w-full flex justify-around items-center ">
          {props.listNumbers.map((number) => (
            <NumberContainer
              key={number.number}
              number={number.number}
              isAvailable={number.isAvailable}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// const LotteryNumbers: React.FC<Props> = ({ listNumbers }) => {
//   return (
//     <div className="grid grid-cols-4 gap-4">
//       {listNumbers.map((item) => (
//         <div
//           key={item.number}
//           className={`p-4 border rounded text-center ${
//             item.isAvailable ? "bg-green-200" : "bg-red-200"
//           }`}
//         >
//           {item.number}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LotteryNumbers;
