"use client";
import { CardRifa } from "@/components/ui/CardRifa";
import { InfoRifa } from "@/context/type";
import { useEffect } from "react";
import { Context } from "@/context/Context";
import { useContext } from "react";

export function Rifas() {
  const { getRifas, rifas } = useContext(Context);

  useEffect(() => {
    getRifas();
  }, []);

  return (
    <div
      className={`h-full border-2 border-white m-5 p-3 rounded-sm w-full ${
        rifas.length > 0 ? "" : "text-center"
      }`}
    >
      {rifas && rifas.length > 0 ? (
        rifas.map((rifa: InfoRifa) => (
          <CardRifa
            key={rifa.id}
            precio={rifa.precio}
            premio={rifa.premio}
            tipo={rifa.tipo}
            image_premio={rifa.image_premio}
            numeros_especiales={rifa.numeros_especiales}
            is_active={rifa.is_active}
            id={rifa.id}
            boletas={rifa.boletas}
          />
        ))
      ) : (
        <p className="font-extrabold text-2xl">No hay rifas Aun</p>
      )}
    </div>
  );
}
