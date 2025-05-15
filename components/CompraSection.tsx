"use client";

import ComboCard from "./ui/ComboCard";
import TicketCounter from "./ui/TicketCounter";
import CardSummary from "./ui/CardSummary";
import BuyForm from "./ui/BuyForm";
import CheckBuy from "./ui/CheckBuy";
import { useContext } from "react";
import { Context } from "@/context/Context";
export default function CompraSection() {
  const { cantidad, sumarBoleta, restarBoleta, total, setCombo, data } =
    useContext(Context);
  return (
    <div className="border-2 border-brandYellow w-80 rounded-lg h-full flex flex-col items-center gap-3 p-3 sm:w-full sm:flex-row">
      <div className="gap-3 p-3 w-80 sm:w-full flex flex-col items-center sm:gap-6">
        <span className="mt-3 inline-block font-extrabold bg-gradient-to-r from-brandRed to to-brandYellow bg-clip-text text-transparent sm:text-3xl">
          COMPRA TUS BOLETAS
        </span>
        <div className="flex w-full h-full flex-wrap gap-2">
          <ComboCard
            precio={data.precio * 3}
            cantidad={3}
            setCombo={setCombo}
          />
          <ComboCard
            precio={data.precio * 5}
            cantidad={5}
            setCombo={setCombo}
          />
          <ComboCard
            precio={data.precio * 10}
            cantidad={10}
            setCombo={setCombo}
          />
        </div>
        <TicketCounter
          cantidad={cantidad}
          sumarBoleta={sumarBoleta}
          restarBoleta={restarBoleta}
        />
        <CardSummary ticketPrice={data.precio} quantity={cantidad} />
      </div>
      <div className="w-full">
        <BuyForm />
        <CheckBuy total={total} />
      </div>
    </div>
  );
}
