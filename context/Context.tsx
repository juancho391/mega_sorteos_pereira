"use client";
import { useState, useEffect, createContext, ContextType } from "react";

const Context = createContext<ContextType | null>(null);

function ContextProvider({ children }) {
  // Estado para la lista de numeros premiados
  //   const [numbersPremiun, setNumbersPremiun] = useState([]);
  //Estado para la informacion del rifa
  //   const [infoLottery, setInfoLottery] = useState({});
  //Estado para la compra de las boletas
  //   const [buyTickets, setBuyTickets] = useState({});
  const [total, setTotal] = useState(10000);

  const [cantidad, setCantidad] = useState(1);

  const sumarBoleta = () => {
    setCantidad(cantidad + 1);
  };

  const restarBoleta = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const setCombo = (cantidad: number) => {
    setCantidad(cantidad);
  };

  useEffect(() => {
    setTotal(cantidad * 10000);
  }, [cantidad]);

  return (
    <Context.Provider
      value={{
        cantidad,
        sumarBoleta,
        restarBoleta,
        total,
        setCombo,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
