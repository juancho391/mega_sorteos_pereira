"use client";
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";
import { ContextType } from "./type";
import axios from "axios";
import { InfoRifa, Token } from "./type";
const Context = createContext<ContextType | null>(null);

function useAppContext(): ContextType {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useAppContext must be used within a ContextProvider");
  }
  return context;
}

type ContextProviderProps = {
  children: ReactNode;
};

function ContextProvider({ children }: ContextProviderProps) {
  const [data, setData] = useState<InfoRifa | null>(null);

  const [total, setTotal] = useState(3000);

  const [token, setToken] = useState<Token | null>(null);

  const [cantidad, setCantidad] = useState(3);

  const [rifas, setRifas] = useState<InfoRifa[]>([]);

  const [noVendidas, setnoVendidas] = useState(0);

  const base_url = process.env.NEXT_PUBLIC_API_URL;
  const getRifas = async () => {
    try {
      const response = await axios.get(`${base_url}/rifa`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setRifas(response.data);
      }
    } catch (error) {
      console.error("Error al obtener los datos de la rifa", error);
    }
  };

  useEffect(() => {
    setTotal(cantidad * (data?.precio ?? 0));
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
        base_url,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider, useAppContext };
