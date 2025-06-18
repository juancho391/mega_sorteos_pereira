"use client";
import { MdOutlineCheckCircle } from "react-icons/md";
import { GoXCircle } from "react-icons/go";
import { useRouter } from "next/navigation";
export interface InfoSolicitud {
  text: string;
  aprobado: boolean;
}

export default function InfoPago(props: InfoSolicitud) {
  const router = useRouter();
  const mensaje = props.aprobado
    ? "Tu pago se ha realizado con exito los numeros de tu boleta se enviaran a tu correo electronico, gracias por participar en nuestros sorteos, si no recibiste tus numeros recuerda revisar tu bandeja de spam"
    : "Algo salio mal no pudimos procesar tu pago intentalo nuevamente";
  return (
    <div className="flex items-center flex-col p-3 space-y-7 sm:space-y-0 text-center">
      {/* <Header /> */}
      <div className="flex flex-col items-center  rounded-md w-full p-3 gap-5">
        {props.aprobado ? (
          <div className="text-9xl text-green-500">
            <MdOutlineCheckCircle />
          </div>
        ) : (
          <div className="text-9xl text-brandRed">
            <GoXCircle />
          </div>
        )}
        <h1 className={` text-2xl text-white${props.aprobado ? "" : ""}`}>
          {props.text}!
        </h1>
        <h3>{mensaje}</h3>
        <button
          className={`w-30 h-10 border-1 m-5 border-white rounded-sm cursor-pointer ${
            props.aprobado ? "bg-green-700" : "bg-brandRed"
          }`}
          onClick={() => {
            router.push("/");
          }}
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}
