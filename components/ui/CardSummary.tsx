interface infoSummary {
  ticketPrice: number;
  quantity: number;
}

export default function CardSummary(props: infoSummary) {
  return (
    <div className="w-full bg-brandGray rounded-lg h-full p-2">
      <span className="inline-block mb-3">Resumen de la compra</span>
      <div className="w-full flex justify-between mb-1">
        <span>Precio Boleta</span>
        <span>${props.ticketPrice}</span>
      </div>
      <div className="w-full bg-white h-0.5"></div>
      <div className="w-full flex justify-between mt-1">
        <span>Cantidad</span>
        <span>{props.quantity}</span>
      </div>
    </div>
  );
}
