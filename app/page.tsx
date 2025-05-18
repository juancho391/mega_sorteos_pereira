"use client";
import Rifa from "@/components/Rifa";
import Loader from "@/components/ui/loader";
import CompraSection from "@/components/CompraSection";
import About from "@/components/about";
import Footer from "@/components/Footer";
import { Context } from "@/context/Context";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const { data, setData } = useContext(Context);
  useEffect(() => {
    console.log("ejecutando peticion");
    const getRifa = async () => {
      try {
        const response = await axios.get("http://localhost:8000/rifa/activa");
        if (response.status === 200) {
          setData(response.data);
          console.log(data);
        }
      } catch (error) {
        console.error("Error al obtener los datos de la rifa", error);
      }
    };

    getRifa();
  }, []);

  return (
    <div className="flex items-center flex-col py-2 space-y-7 sm:space-y-0">
      {/* <Header /> */}
      <div className="w-full sm:p-14 flex items-center flex-col space-y-6">
        {data ? (
          <>
            <Rifa
              precio={data.precio}
              premio={data.premio}
              tipo={data.tipo}
              image_premio={data.image_premio}
              numeros_especiales={data.numeros_especiales}
            />
            <CompraSection />
          </>
        ) : (
          <Loader />
        )}

        <About />
        <Footer />
      </div>
    </div>
  );
}
