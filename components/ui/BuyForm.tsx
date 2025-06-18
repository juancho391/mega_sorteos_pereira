"use client";
import { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { useAppContext } from "@/context/Context";
import { Compra } from "@/context/type";
import { useRouter } from "next/navigation";
import axios from "axios";

interface FormData extends Compra {
  confirmarCorreo: string;
}

export default function BuyForm() {
  const { cantidad, data, noVendidas, base_url } = useAppContext();
  const router = useRouter();

  const [formCompra, setFormCompra] = useState<FormData>({
    id_rifa: data?.id ?? 0,
    nombre_completo: "",
    cedula: "",
    telefono_celular: "",
    direccion: "",
    email: "",
    confirmarCorreo: "",
    precio: data?.precio ?? 0,
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

  const [alerta, setAlerta] = useState(false); // Hacer reactiva la alerta
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar el envío

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormCompra((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrores((prev) => ({ ...prev, [name]: "" }));
  };

  const crearCompra = async (formCompraBody: Compra) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post(`${base_url}/compra`, formCompraBody);

      if (response.status === 200) {
        const init_point = response.data.init_point;
        router.push(init_point);
      }
    } catch (error) {
      console.error("Error al crear compra:", error);
      alert("Ocurrió un error al procesar tu compra");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación de cantidad disponible
    if (noVendidas > formCompra.cantidad) {
      setAlerta(true);
      return;
    }
    setAlerta(false);

    // Validación de campos
    const nuevosErrores = {
      nombre_completo: !formCompra.nombre_completo
        ? "Este campo es obligatorio"
        : "",
      cedula: !formCompra.cedula ? "Este campo es obligatorio" : "",
      telefono_celular: !formCompra.telefono_celular
        ? "Este campo es obligatorio"
        : formCompra.telefono_celular.length !== 10
        ? "El teléfono debe tener 10 dígitos"
        : "",
      direccion: !formCompra.direccion ? "Este campo es obligatorio" : "",
      email: !formCompra.email
        ? "Este campo es obligatorio"
        : !/^\S+@\S+\.\S+$/.test(formCompra.email)
        ? "Correo electrónico inválido"
        : "",
      confirmarCorreo: !formCompra.confirmarCorreo
        ? "Este campo es obligatorio"
        : formCompra.email !== formCompra.confirmarCorreo
        ? "Los correos no coinciden"
        : "",
    };

    setErrores(nuevosErrores);

    // Verificar si hay errores
    if (Object.values(nuevosErrores).some((err) => err !== "")) return;

    // Preparar datos para enviar (sin confirmarCorreo)
    const datosParaEnviar: Compra = {
      id_rifa: formCompra.id_rifa,
      nombre_completo: formCompra.nombre_completo,
      cedula: formCompra.cedula,
      telefono_celular: formCompra.telefono_celular,
      direccion: formCompra.direccion,
      email: formCompra.email,
      precio: formCompra.precio,
      cantidad: formCompra.cantidad,
    };

    await crearCompra(datosParaEnviar);
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
            value={formCompra[id as keyof FormData]}
            onChange={handleChange}
            placeholder={placeholder}
            className={inputClass(errores[id as keyof typeof errores])}
          />
          {errores[id as keyof typeof errores] && (
            <p className="text-red-500 text-sm">
              {errores[id as keyof typeof errores]}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className={`w-full bg-gradient-to-r from-brandRed to-brandYellow text-white py-2 px-4 rounded-md flex justify-center gap-2 items-center cursor-pointer hover:opacity-90 transition-opacity font-extrabold h-8 ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Procesando..."
        ) : (
          <>
            <CiCreditCard1 className="text-3xl" />
            PAGAR
          </>
        )}
      </button>

      {alerta && (
        <p className="text-brandRed text-center font-extrabold">
          No Hay Boletas Suficientes, boletas restantes: {9999 - noVendidas}
        </p>
      )}
    </form>
  );
}
