export interface NumberProps {
  number: number;
  isAvailable: boolean;
}
export default function NumberContainer({
  number,
  isAvailable = true,
}: NumberProps) {
  return (
    <div
      className={`w-16 h-6 text-center rounded-full font-extrabold text-black ${
        isAvailable ? "bg-brandYellow" : "bg-brandRed"
      }`}
    >
      {number}
    </div>
  );
}
