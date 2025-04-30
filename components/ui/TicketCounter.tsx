import { PiPlusThin } from "react-icons/pi";
import { PiMinus } from "react-icons/pi";

interface TicketCounterProps {
  numberOfTickets: number;
}

export default function TicketCounter({ numberOfTickets }: TicketCounterProps) {
  return (
    <div className="w-full mx-3 flex items-center">
      <PiMinus className="h-8 w-8 bg-brandGray rounded-md text-center sm:h-10 sm:w-10" />
      <div className="w-full h-8 bg-brandGray p-3 flex items-center justify-center content-center rounded-lg mx-2 sm:text-2xl sm:h-10">
        {numberOfTickets}
      </div>
      <PiPlusThin className="bg-brandGray h-8 w-8 rounded-md text-center sm:h-10 sm:w-10" />
    </div>
  );
}
