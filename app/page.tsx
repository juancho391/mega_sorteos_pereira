import Header from "@/components/Header";
import Rifa from "@/components/Rifa";
import { NumberProps } from "@/components/NumberContainer";

export default function Home() {
  const numbersList: NumberProps[] = [
    {
      number: 93441,
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
      number: 52462,
      isAvailable: true,
    },
    // {
    //   number: 93441,
    //   isAvailable: true,
    // },
    // {
    //   number: 45162,
    //   isAvailable: true,
    // },
    // {
    //   number: 43141,
    //   isAvailable: true,
    // },
    // {
    //   number: 52462,
    //   isAvailable: true,
    // },
    // {
    //   number: 52462,
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
    </div>
  );
}
