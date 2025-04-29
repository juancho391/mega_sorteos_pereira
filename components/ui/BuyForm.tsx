"use client";
import { CiCreditCard1 } from "react-icons/ci";
import { useState } from "react";

interface FormData {
  nombreCompleto: string;
  numeroDocumento: string;
  telefono: string;
  direccion: string;
  correo: string;
  confirmarCorreo: string;
}

export default function BuyForm() {
  const [formData, setFormData] = useState<FormData>({
    nombreCompleto: "",
    numeroDocumento: "",
    telefono: "",
    direccion: "",
    correo: "",
    confirmarCorreo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá la lógica para enviar los datos
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-full p-2 space-y-4">
      <div className="space-y-2">
        <label htmlFor="nombreCompleto" className="block text-sm font-medium">
          Nombre Completo
        </label>
        <input
          type="text"
          id="nombreCompleto"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
          placeholder="Ingresa tu nombre completo"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandYellow"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="numeroDocumento" className="block text-sm font-medium">
          Número de Documento
        </label>
        <input
          type="text"
          id="numeroDocumento"
          name="numeroDocumento"
          value={formData.numeroDocumento}
          onChange={handleChange}
          placeholder="Ingresa tu número de cédula"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandYellow"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="telefono" className="block text-sm font-medium">
          Teléfono Celular
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Ingresa tu número de celular"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandYellow"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="direccion" className="block text-sm font-medium">
          Dirección
        </label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          placeholder="Ingresa tu dirección completa"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandYellow"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="correo" className="block text-sm font-medium">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder="Ingresa tu correo electrónico"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandYellow"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="confirmarCorreo" className="block text-sm font-medium">
          Confirmar Correo Electrónico
        </label>
        <input
          type="email"
          id="confirmarCorreo"
          name="confirmarCorreo"
          value={formData.confirmarCorreo}
          onChange={handleChange}
          placeholder="Confirma tu correo electrónico"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brandYellow"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-brandRed to-brandYellow text-white py-2 px-4 rounded-md flex justify-center gap-2 items-center cursor-pointer hover:opacity-90 transition-opacity font-extrabold"
      >
        <CiCreditCard1 className="text-3xl" />
        PAGAR
      </button>
    </form>
  );
}
