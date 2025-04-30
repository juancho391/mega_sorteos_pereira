import { IoTicketOutline } from "react-icons/io5";

interface InfoCombo {
  precio: number;
  quantity: number;
}
export default function ComboCard(props: InfoCombo) {
  return (
    <div className="flex flex-col rounded-lg bg-brandGray flex-grow w-min-28 h-full items-center p-2 text-center sm:min-h-50 sm:justify-center">
      <IoTicketOutline className="text-2xl sm:text-3xl md:text-4xl" />
      <span className="mt-2 sm:text-2xl">Combo {props.quantity} Boletas</span>
      <span className="text-brandYellow mt-1 sm:text-2xl">${props.precio}</span>
    </div>
  );
}
