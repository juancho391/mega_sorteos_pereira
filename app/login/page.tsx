"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { Context } from "@/context/Context";
import { useContext } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { setToken, base_url } = useContext(Context);
  const [isLogin, setIslogin] = useState(true);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    try {
      const response = await axios.post(`${base_url}/auth/token`, data);
      if (response.status === 200) {
        setIslogin(true);
        setToken(response.data.access_token);
        router.push("/panelAdmin");
      }
    } catch (error) {
      setIslogin(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Administrador
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email">Correo Electronico</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="example@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full cursor-pointer text-white bg-brandRed focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Iniciar Sesion
              </button>
            </div>
            <p className={isLogin ? "hidden" : ""}>
              Contraseña o correo incorrecto
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
