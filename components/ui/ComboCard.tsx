import { IoTicketOutline } from "react-icons/io5";

interface InfoCombo {
  precio: number;
  quantity: number;
}
export default function ComboCard(props: InfoCombo) {
  return (
    <div className="flex flex-col rounded-lg bg-brandGray flex-grow w-min-28 h-full items-center p-2 text-center">
      <IoTicketOutline className="text-2xl" />
      <span className="mt-2">Combo {props.quantity} Boletas</span>
      <span className="text-brandYellow mt-1">${props.precio}</span>
    </div>
  );
}
