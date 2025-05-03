import { IoTicketOutline } from "react-icons/io5";

interface InfoCombo {
  precio: number;
  cantidad: number;
  setCombo: (cantidad: number) => void;
}
export default function ComboCard(props: InfoCombo) {
  return (
    <div
      onClick={() => props.setCombo(props.cantidad)}
      className="flex flex-col rounded-lg bg-brandGray flex-grow w-min-28 h-full items-center p-2 text-center sm:min-h-50 sm:justify-center cursor-pointer"
    >
      <IoTicketOutline className="text-2xl sm:text-3xl md:text-4xl" />
      <span className="mt-2 sm:text-2xl">Combo {props.cantidad} Boletas</span>
      <span className="text-brandYellow mt-1 sm:text-2xl">${props.precio}</span>
    </div>
  );
}
