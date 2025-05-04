export default function Footer() {
  return (
    <footer className="w-full h-full text-center border-t-2 border-brandYellow p-2 flex flex-col justify-center items-center space-y-1">
      <div>
        <span className="text-brandYellow text-2xl mr-2">MEGA SORTEOS</span>
        <span className="text-brandRed text-2xl">PEREIRA</span>
      </div>
      <p>
        La mejor plataforma de sorteos y rifas en Pereira. Participa y gana
        premios increíbles con total transparencia y seguridad.
      </p>
      <span className="text-2xl inline-block text-brandYellow">Contacto</span>
      <span className="inline-block">Cra 57 #20-18 Pereira</span>
      <span className="inline-block">info@megasorteospereira.com</span>
      <span className="inline-block">Whatsapp +57 3117079075</span>
      <span className="inline-block">Terminos y condiciones</span>
      <span className="inline-block">
        © 2025 Megasorteos Pereira Todos los derechos reservados.
      </span>
    </footer>
  );
}
