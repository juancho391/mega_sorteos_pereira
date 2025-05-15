"use client";
import { useState, useEffect, createContext, ContextType } from "react";
import { Compra } from "./type";
// import axios from "axios";
import { InfoRifa, Token } from "./type";
const Context = createContext<ContextType | null>(null);

function ContextProvider({ children }) {
  const [data, setData] = useState<InfoRifa | null>(null);
  //Peticion para obtener los datos de la rifa
  // useEffect(() => {
  //   console.log("ejecutando peticion");
  //   const getRifa = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/api/rifa");
  //       if (response.status === 200) {
  //         setData(response.data);
  //         console.log(data);
  //       }
  //     } catch (error) {
  //       console.error("Error al obtener los datos de la rifa", error);
  //     }
  //   };

  //   getRifa();
  // }, []);

  const [total, setTotal] = useState(30000);

  const [token, setToken] = useState<Token | null>(null);

  const [cantidad, setCantidad] = useState(3);

  useEffect(() => {
    setTotal(cantidad * data?.precio);
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
        data,
        setData,
        setToken,
        token,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
