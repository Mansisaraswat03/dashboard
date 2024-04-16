import DashboardDetails from "@/components/DashboardDetails";
import { Orders } from "@/components/Orders";
import Statistics from "@/components/Statistics";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-main-color from-10% via-second-color via-35% to-main-color to-90% w-full">
    <div className="flex items-center justify-center gap-4 py-4">
      <Image src="/logo.png" alt="logo" width={400} height={400} className="w-40" />
      <h1 className="text-3xl font-bold text-fourth-color">Mansi's Dashboard</h1>
    </div>
    <div className="py-0 px-5 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_0.4fr] gap-8">
    <div className="grid grid-cols-1 gap-4 mb-2">
      <DashboardDetails/>
      <Statistics/>
    </div>
    <Orders/>
    </div>
    </div>
  );
}
