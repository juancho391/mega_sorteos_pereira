"use client";
import { InfoRifa } from "@/context/type";
import NumberContainer from "../NumberContainer";
import axios from "axios";
import { Context } from "@/context/Context";
import { useContext } from "react";
import { Boleta } from "@/context/type";
import { useState } from "react";
import { Ganador } from "@/context/type";
export function CardRifa(props: InfoRifa) {
  const [numeroEspecial, setNumeroEspecial] = useState<number | null>(null);
  const { token, getRifas } = useContext(Context);
  const [dataGanador, setDataGanador] = useState<Ganador | null>(null);

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

  const desactivarRifa = async (props: number | undefined) => {
    const data = {
      id: props,
    };

    try {
      const response = await axios.patch(
        `http://localhost:8000/rifa/${data.id}/desactivar`,
        null,
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
      alert("Error al desactivar la rifa");
    }
  };

  const obtenerGanador = async (numero: Boleta) => {
    console.log(numero);
    try {
      const response = await axios.get(
        `http://localhost:8000/rifa/${numero.id_rifa}/${numero.numero}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setDataGanador(response.data);
      }
    } catch (error) {
      console.error("Error al obtener los datos de la rifa", error);
    }
  };
  const handlerConsultarGanador = () => {
    if (numeroEspecial === null) return;
    const numero: Boleta = {
      id_rifa: props.id,
      numero: numeroEspecial,
    };
    obtenerGanador(numero);
  };

  return (
    <div className="border-2 border-brandGray rounded-sm p-2 sm:flex sm:flex-row mt-3 mb-3">
      <div className="">
        <h2 className="font-extrabold ">Rifa {props.id}</h2>
        <ul>
          <li>{props.premio}</li>
          <li className="text-brandYellow">precio : {props.precio}</li>
          <li className="text-brandYellow">{props.tipo}</li>
          <li>
            Vendidas:{props.boletas ? props.boletas?.length : 0}
          </li>
          <li>{props.is_active === true ? "Activa" : "Desactivada"}</li>
          <li>
            recaudado:
            {props.boletas?.length
              ? props.precio
                ? props.precio * props.boletas?.length
                : 0
              : 0}
          </li>
        </ul>
        <button
          className="bg-red-500 rounded-sm p-1 font-extrabold cursor-pointer w-full sm:w-auto mb-1 mt-1"
          onClick={() => desactivarRifa(props.id)}
        >
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
          {dataGanador ? (
            <p>
              Nombre : {dataGanador.nombre} - Email : {dataGanador.email} -
              Celular : {dataGanador.celular}
            </p>
          ) : (
            <p>
              Nombre: jhon doe - Correo: ejemplo@ejemplo.com - Celular: 123456
            </p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-between w-full max-w-300">
          <button
            className="bg-red-500 rounded-sm p-1 font-extrabold  w-full cursor-pointer"
            onClick={handlerConsultarGanador}
          >
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
