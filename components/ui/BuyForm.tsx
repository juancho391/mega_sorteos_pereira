"use client";
import { useContext, useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { Context } from "@/context/Context";
import { Compra } from "@/context/type";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function BuyForm() {
  const { cantidad, data, noVendidas } = useContext(Context);
  const router = useRouter();

  const [formCompra, setFormCompra] = useState<Compra>({
    id_rifa: data.id,
    nombre_completo: "",
    cedula: "",
    telefono_celular: "",
    direccion: "",
    email: "",
    precio: data.precio,
    cantidad: cantidad,
  });

  const [errores, setErrores] = useState({
    nombre_completo: "",
    cedula: "",
    telefono_celular: "",
    direccion: "",
    email: "",
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

  const crearCompra = async (formCompraBody: Compra) => {
    const response = await axios.post(
      "http://localhost:8000/compra",
      formCompraBody
    );

    if (response.status === 200) {
      console.log(response.data);
      const init_point = response.data.init_point;
      router.push(init_point);
    }
  };

  const mensajeAlerta = `No Hay Boletas Suficientes, boletas restantes : ${
    9999 - noVendidas
  }`;

  let alerta = false

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (cantidad > noVendidas) {
      alerta = true;
      return;
    }
    const formActualizado = {
      ...formCompra,
      cantidad,
    };

    const nuevosErrores: typeof errores = {
      nombre_completo: formCompra.nombre_completo
        ? ""
        : "Este campo es obligatorio",
      cedula: formCompra.cedula ? "" : "Este campo es obligatorio",
      telefono_celular: formCompra.telefono_celular
        ? ""
        : "Este campo es obligatorio",
      direccion: formCompra.direccion ? "" : "Este campo es obligatorio",
      email: formCompra.email ? "" : "Este campo es obligatorio",
      confirmarCorreo: formCompra.confirmarCorreo
        ? ""
        : "Este campo es obligatorio",
    };

    if (
      formCompra.telefono_celular.length < 10 ||
      formCompra.telefono_celular.length > 10
    ) {
      nuevosErrores.telefono_celular = "El telefono debe tener 10 digitos";
    }

    if (
      formCompra.email &&
      formCompra.confirmarCorreo &&
      formCompra.email !== formCompra.confirmarCorreo
    ) {
      nuevosErrores.confirmarCorreo = "Los correos no coinciden";
    }

    const hayErrores = Object.values(nuevosErrores).some((err) => err !== "");
    setErrores(nuevosErrores);

    if (hayErrores) return;

    console.log(formActualizado);
    crearCompra(formActualizado);
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
          id: "nombre_completo",
          label: "Nombre Completo",
          placeholder: "Ingresa tu nombre completo",
        },
        {
          id: "cedula",
          label: "Número de Documento",
          placeholder: "Ingresa tu número de cédula",
        },
        {
          id: "telefono_celular",
          label: "Teléfono Celular",
          placeholder: "Ingresa tu número de celular",
        },
        {
          id: "direccion",
          label: "Dirección",
          placeholder: "Ingresa tu dirección completa",
        },
        {
          id: "email",
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
      {alerta ? (
        <p className="text-brandRed text-center font-extrabold ">
          {mensajeAlerta}
        </p>
      ) : null}
    </form>
  );
}
