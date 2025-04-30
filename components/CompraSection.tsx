import ComboCard from "./ui/ComboCard";
import TicketCounter from "./ui/TicketCounter";
import CardSummary from "./ui/CardSummary";
import BuyForm from "./ui/BuyForm";
import CheckBuy from "./ui/CheckBuy";
export default function CompraSection() {
  return (
    <div className="border-2 border-brandYellow w-80 rounded-lg h-full flex flex-col items-center gap-3 p-3 sm:w-full sm:flex-row">
      <div className="gap-3 p-3 w-80 sm:w-full flex flex-col items-center sm:gap-6">
        <span className="mt-3 inline-block font-extrabold bg-gradient-to-r from-brandRed to to-brandYellow bg-clip-text text-transparent sm:text-3xl">
          COMPRA TUS BOLETAS
        </span>
        <div className="flex w-full h-full flex-wrap gap-2">
          <ComboCard precio={30000} quantity={3} />
          <ComboCard precio={50000} quantity={5} />
          <ComboCard precio={100000} quantity={10} />
        </div>
        <TicketCounter numberOfTickets={1} />
        <CardSummary ticketPrice={10000} quantity={1} />
      </div>
      <div className="w-full">
        <BuyForm />
        <CheckBuy />
      </div>
    </div>
  );
}
