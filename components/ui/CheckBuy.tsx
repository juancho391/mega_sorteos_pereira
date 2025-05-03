interface CheckBuyProps {
  total: number;
}
export default function CheckBuy(props: CheckBuyProps) {
  return (
    <div className="w-full bg-brandGray rounded-lg p-2 sm:h-full">
      <span className="sm:text-lg">
        Seras redirigido a la pagina de pse para completar tu pago de forma
        segura
      </span>
      <div className="w-full bg-linear-to-r from-brandRed to-brandYellow rounded-sm h-7 text-center flex  items-center justify-center font-light mt-2 sm:text-lg sm:mb-5">
        TOTAL A PAGAR: ${props.total}
      </div>
    </div>
  );
}
