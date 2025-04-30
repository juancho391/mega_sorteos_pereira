export interface ValueInfo {
  text: string;
  name: string;
  icon: React.ReactNode;
}

export default function CardValues({ text, name, icon }: ValueInfo) {
  return (
    <div className="flex flex-col items-center mb-3">
      <div className="mt-2">{icon}</div>
      <h3 className="font-bold text-2xl">{name}</h3>
      <p className="text-sm text-center mt-2">{text}</p>
    </div>
  );
}
