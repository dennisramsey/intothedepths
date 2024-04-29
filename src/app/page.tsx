import Image from "next/image";
import Header from "@/components/Header";
import Intro from "@/components/home";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Header section="home" />
      <Intro />
    </main>
  );
}
