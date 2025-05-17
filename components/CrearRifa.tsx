"use client";
import { FileUpload } from "./ui/file-upload";
export function CrearRifa() {
  return (
    <div className="h-full border-2 border-white m-5 p-3 rounded-sm  w-full">
      <h1 className="text-white font-extrabold text-center mb-3">Crear rifa</h1>
      <form className="flex  flex-col gap-5 sm:flex-row w-full ">
        <div className="sm:order-1 sm:w-1/2">
          <FileUpload onChange={(files) => console.log("files:", files)} />
        </div>
        <div className="flex flex-col gap-3 sm:w-1/2">
          <label htmlFor="">Premio</label>
          <input
            className="bg-brandGray p-1 rounded-sm"
            type="text"
            placeholder="NKD 125"
            required
          />
          <label className="" htmlFor="">
            Tipo
          </label>
          <input
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
