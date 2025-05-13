"use client";
import Rifa from "@/components/Rifa";
import { Boleta } from "@/context/type";
import CompraSection from "@/components/CompraSection";
import About from "@/components/about";
import Footer from "@/components/Footer";
import { Context } from "@/context/Context";
import { useContext } from "react";

export default function Home() {
  const { data, data2 } = useContext(Context);
  

  return (
    <div className="flex items-center flex-col py-2 space-y-7 sm:space-y-0">
      {/* <Header /> */}
      <div className="w-full sm:p-14 flex items-center flex-col space-y-6">
        { data? (
          <>
            <Rifa
              precio={10000}
              premio={data.premio}
              tipo={data.tipo}
              numeros_especiales={data.numeros_especiales}
            />
            <CompraSection />
          </>
        ) : (
          <p>Cargando datos...</p>
        )}
  
        <About />
        <Footer />
      </div>
    </div>
  );
}
