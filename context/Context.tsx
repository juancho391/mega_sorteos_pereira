"use client";
import { useState, useEffect, createContext, ContextType } from "react";
import { Compra } from "./type";

const Context = createContext<ContextType | null>(null);

function ContextProvider({ children }) {
  // Estado para la lista de numeros premiados
  //   const [numbersPremiun, setNumbersPremiun] = useState([]);
  //Estado para la informacion del rifa
  //   const [infoLottery, setInfoLottery] = useState({});
  //Estado para la compra de las boletas
  //   const [buyTickets, setBuyTickets] = useState({});
  const [total, setTotal] = useState(30000);

  const [cantidad, setCantidad] = useState(3);

  useEffect(() => {
    setTotal(cantidad * 10000);
  }, [cantidad]);
  const [formCompra, setFormCompra] = useState<Compra>({
    nombreCompleto: "",
    numeroDocumento: "",
    telefono: "",
    direccion: "",
    correo: "",
    confirmarCorreo: "",
    precioBoleta: 10000,
    cantidad: 3,
    total: total,
  });

  const sumarBoleta = () => {
    setCantidad(cantidad + 1);
  };

  const restarBoleta = () => {
    if (cantidad > 3) {
      setCantidad(cantidad - 1);
    }
  };

  const setCombo = (cantidad: number) => {
    setCantidad(cantidad);
  };

  return (
    <Context.Provider
      value={{
        cantidad,
        sumarBoleta,
        restarBoleta,
        total,
        setCombo,
        formCompra,
        setFormCompra,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
