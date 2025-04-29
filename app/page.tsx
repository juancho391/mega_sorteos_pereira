import Header from "@/components/Header";
import Rifa from "@/components/Rifa";
import { NumberProps } from "@/components/NumberContainer";
import CompraSection from "@/components/CompraSection";

export default function Home() {
  const numbersList: NumberProps[] = [
    {
      number: 93441,
      isAvailable: true,
    },
    {
      number: 22062,
      isAvailable: true,
    },
    {
      number: 43241,
      isAvailable: true,
    },
    {
      number: 57862,
      isAvailable: true,
    },
    {
      number: 63421,
      isAvailable: true,
    },
    {
      number: 45162,
      isAvailable: true,
    },
    {
      number: 43141,
      isAvailable: true,
    },
    {
      number: 55462,
      isAvailable: true,
    },
    {
      number: 52462,
      isAvailable: true,
    },
    {
      number: 12462,
      isAvailable: true,
    },
    // {
    //   number: 12359,
    //   isAvailable: true,
    // },
  ];
  return (
    <div className="flex items-center flex-col py-2 space-y-10">
      <Header />
      <Rifa
        precio={10000}
        premio="AKT NKD 125"
        tipo="MOTO"
        listNumbers={numbersList}
      />
      <CompraSection />
    </div>
  );
}
