"use client";
import { useState, useEffect, createContext, ContextType } from "react";
import axios from "axios";
import { InfoRifa, Token } from "./type";
const Context = createContext<ContextType | null>(null);

function ContextProvider({ children }) {
  const [data, setData] = useState<InfoRifa | null>(null);

  const [total, setTotal] = useState(3000);

  const [token, setToken] = useState<Token | null>(null);

  const [cantidad, setCantidad] = useState(3);

  const [rifas, setRifas] = useState<InfoRifa[]>([]);

  const [noVendidas, setnoVendidas] = useState(0);
  const getRifas = async () => {
    try {
      const response = await axios.get("http://localhost:8000/rifa", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log(response.data);
        setRifas(response.data);
      }
    } catch (error) {
      console.error("Error al obtener los datos de la rifa", error);
    }
  };

  useEffect(() => {
    setTotal(cantidad * data?.precio);
  }, [cantidad]);

  const sumarBoleta = () => {
    setCantidad(cantidad + 1);
  };

  const restarBoleta = () => {
    if (cantidad > 3) {
      setCantidad(cantidad - 1);
    } else if (9999 - noVendidas < 3 && 9999 - noVendidas > 0) {
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
        data,
        setData,
        setToken,
        token,
        getRifas,
        rifas,
        setnoVendidas,
        noVendidas,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
