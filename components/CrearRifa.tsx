"use client";
import { FileUpload } from "./ui/file-upload";
import { RifaCreate } from "@/context/type";
import { useState } from "react";
import axios from "axios";
import { Context } from "@/context/Context";
import { useContext } from "react";

export function CrearRifa() {
  const { token, getRifas } = useContext(Context);
  const [imagen, setImagen] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formDataRaw = new FormData(form);

    // Tipar y construir el objeto con los datos de la rifa
    const newRifa: RifaCreate = {
      premio: formDataRaw.get("premio") as string,
      tipo: formDataRaw.get("tipo") as string,
      precio: parseInt(formDataRaw.get("precio") as string),
    };

    // Construimos un nuevo FormData para el backend
    const formDataToSend = new FormData();
    formDataToSend.append("premio", newRifa.premio);
    formDataToSend.append("tipo", newRifa.tipo);
    formDataToSend.append("precio", newRifa.precio.toString());
    if (imagen) {
      formDataToSend.append("image", imagen);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/rifa",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Rifa creada con éxito:", response.data);
        getRifas();
      }
    } catch (error) {
      console.error("Error al crear la rifa:", error);
    }
  };
  return (
    <div className="h-full border-2 border-white m-5 p-3 rounded-sm  w-full">
      <h1 className="text-white font-extrabold text-center mb-3">Crear rifa</h1>
      <form
        className="flex  flex-col gap-5 sm:flex-row w-full "
        onSubmit={handleSubmit}
      >
        <div className="sm:order-1 sm:w-1/2">
          <FileUpload onChange={(files) => files && setImagen(files[0])} />
        </div>
        <div className="flex flex-col gap-3 sm:w-1/2">
          <label htmlFor="">Premio</label>
          <input
            name="premio"
            className="bg-brandGray p-1 rounded-sm"
            type="text"
            placeholder="NKD 125"
            required
          />
          <label className="" htmlFor="">
            Tipo
          </label>
          <input
            name="tipo"
            className="bg-brandGray p-1 rounded-sm"
            type="text"
            placeholder="Vehiculo"
            required
          />
          <label className="" htmlFor="">
            {" "}
            Valor boleta
          </label>
          <input
            name="precio"
            className="bg-brandGray p-1 rounded-sm mb-2"
            type="text"
            placeholder="3000"
            required
          />
          <button
            className="bg-linear-to-r from-brandRed to-brandYellow rounded-sm p-1 font-extrabold mt-2 cursor-pointer w-full"
            type="submit"
          >
            Crear Rifa
          </button>
        </div>
      </form>
    </div>
  );
}
