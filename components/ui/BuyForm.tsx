"use client";
import { useContext, useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { Context } from "@/context/Context";

export default function BuyForm() {
  const { formCompra, setFormCompra, cantidad, total } = useContext(Context);

  const [errores, setErrores] = useState({
    nombreCompleto: "",
    numeroDocumento: "",
    telefono: "",
    direccion: "",
    correo: "",
    confirmarCorreo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormCompra((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrores((prev) => ({ ...prev, [name]: "" })); // limpiar error al escribir
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formActualizado = {
      ...formCompra,
      cantidad,
      total,
    };

    const nuevosErrores: typeof errores = {
      nombreCompleto: formCompra.nombreCompleto
        ? ""
        : "Este campo es obligatorio",
      numeroDocumento: formCompra.numeroDocumento
        ? ""
        : "Este campo es obligatorio",
      telefono: formCompra.telefono ? "" : "Este campo es obligatorio",
      direccion: formCompra.direccion ? "" : "Este campo es obligatorio",
      correo: formCompra.correo ? "" : "Este campo es obligatorio",
      confirmarCorreo: formCompra.confirmarCorreo
        ? ""
        : "Este campo es obligatorio",
    };

    if (formCompra.telefono.length < 10 || formCompra.telefono.length > 10) {
      nuevosErrores.telefono = "El telefono debe tener 10 digitos";
    }

    if (
      formCompra.correo &&
      formCompra.confirmarCorreo &&
      formCompra.correo !== formCompra.confirmarCorreo
    ) {
      nuevosErrores.confirmarCorreo = "Los correos no coinciden";
    }

    const hayErrores = Object.values(nuevosErrores).some((err) => err !== "");
    setErrores(nuevosErrores);

    if (hayErrores) return;

    console.log(formActualizado);
  };

  const inputClass = (error: string) =>
    `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
      error
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-brandYellow"
    }`;

  return (
    <form onSubmit={handleSubmit} className="w-full h-full p-2 space-y-4">
      {[
        {
          id: "nombreCompleto",
          label: "Nombre Completo",
          placeholder: "Ingresa tu nombre completo",
        },
        {
          id: "numeroDocumento",
          label: "Número de Documento",
          placeholder: "Ingresa tu número de cédula",
        },
        {
          id: "telefono",
          label: "Teléfono Celular",
          placeholder: "Ingresa tu número de celular",
        },
        {
          id: "direccion",
          label: "Dirección",
          placeholder: "Ingresa tu dirección completa",
        },
        {
          id: "correo",
          label: "Correo Electrónico",
          placeholder: "Ingresa tu correo electrónico",
        },
        {
          id: "confirmarCorreo",
          label: "Confirmar Correo Electrónico",
          placeholder: "Confirma tu correo electrónico",
        },
      ].map(({ id, label, placeholder }) => (
        <div key={id} className="space-y-2">
          <label htmlFor={id} className="block text-sm font-medium">
            {label}
          </label>
          <input
            type={id.includes("correo") ? "email" : "text"}
            id={id}
            name={id}
            value={(formCompra as any)[id]}
            onChange={handleChange}
            placeholder={placeholder}
            className={inputClass((errores as any)[id])}
            required
          />
          {(errores as any)[id] && (
            <p className="text-red-500 text-sm">{(errores as any)[id]}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-brandRed to-brandYellow text-white py-2 px-4 rounded-md flex justify-center gap-2 items-center cursor-pointer hover:opacity-90 transition-opacity font-extrabold h-8"
      >
        <CiCreditCard1 className="text-3xl" />
        PAGAR
      </button>
    </form>
  );
}
