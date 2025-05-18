"use client";
import { InfoRifa } from "@/context/type";
import NumberContainer from "../NumberContainer";
import axios from "axios";
import { Context } from "@/context/Context";
import { useContext } from "react";
import { Boleta } from "@/context/type";
import { useState } from "react";
export function CardRifa(props: InfoRifa) {
  const [numeroEspecial, setNumeroEspecial] = useState<number | null>(null);
  const { token, getRifas } = useContext(Context);

  const crearNumeroEspecial = async (newNumber: Boleta) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/numeros/numero_especial",
        newNumber,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        getRifas();
      }
    } catch (error) {
      console.error("Error al obtener los datos de la rifa", error);
    }
  };

  const handlerAgregarNumeroEspecial = () => {
    if (numeroEspecial === null) return;
    //verifico que numero especial no exista
    const existe = props.numeros_especiales?.some(
      (numero) => numero.numero === numeroEspecial
    );
    if (existe) {
      alert("El número especial ya existe");
      return;
    }

    const newNumber: Boleta = {
      id_rifa: props.id,
      numero: numeroEspecial,
      disponible: true,
    };

    if (newNumber) {
      crearNumeroEspecial(newNumber);
    }
  };
  return (
    <div className="border-2 border-brandGray rounded-sm p-2 sm:flex sm:flex-row mt-3 mb-3">
      <div className="">
        <h2 className="font-extrabold ">Rifa {props.id}</h2>
        <ul>
          <li>{props.premio}</li>
          <li className="text-brandYellow">precio : {props.precio}</li>
          <li className="text-brandYellow">{props.tipo}</li>
          <li>Boletas Vendidas: {10}</li>
          <li>Estado: {props.is_active === true ? "Activa" : "Desactivada"}</li>
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
            onChange={(e) => setNumeroEspecial(parseInt(e.target.value))}
            required
          ></input>
          <button
            className="bg-red-500 rounded-sm p-1 font-extrabold cursor-pointer w-full"
            onClick={handlerAgregarNumeroEspecial}
          >
            Agregar numero especial
          </button>
        </div>
      </div>
    </div>
  );
}
