import { InfoRifa } from "@/context/type";
import NumberContainer from "../NumberContainer";

export function CardRifa(props: InfoRifa) {
  return (
    <div className="border-2 border-brandGray rounded-sm p-2 sm:flex sm:flex-row mt-3 mb-3">
      <div className="">
        <h2 className="font-extrabold ">Rifa {props.id}</h2>
        <ul>
          <li>{props.premio}</li>
          <li className="text-brandYellow">Valor : {props.precio}</li>
          <li className="text-brandYellow">{props.tipo}</li>
          <li>Boletas Vendidas: {10}</li>
          <li>Estado: {props.is_active ? "Activa" : "Desactivada"}</li>
          <li>Total recaudo: 100.000.000</li>
        </ul>
        <button className="bg-red-500 rounded-sm p-1 font-extrabold cursor-pointer w-full sm:w-auto mb-1 mt-1">
          Desactivar Rifa
        </button>
      </div>
      <div className="flex  flex-col gap-2 justify-center w-full sm:items-center">
        <div className="flex gap-1 flex-wrap justify-center mt-1">
          {props.numeros_especiales?.map((numero) => (
            <NumberContainer
              key={numero.id}
              numero={numero.numero}
              disponible={numero.disponible}
            />
          ))}
        </div>
        <div className="bg-brandGray p-1 rounded-md w-full max-w-300">
          <p>Celular: 31689054, Nombre:German No.Boleta: 55</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-between w-full max-w-300">
          <button className="bg-red-500 rounded-sm p-1 font-extrabold  w-full cursor-pointer">
            Consultar Ganador
          </button>
          <input
            className="bg-brandGray rounded-sm p-1 font-extrabold w-full"
            type="number"
            placeholder="1234"
            required
          ></input>
          <button className="bg-red-500 rounded-sm p-1 font-extrabold cursor-pointer w-full">
            Agregar numero especial
          </button>
        </div>
      </div>
    </div>
  );
}
