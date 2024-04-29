import Image from "next/image";
import Header from "@/components/Header";
import Intro from "@/components/home";

export default function SoundTherapy() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Header section="about" />
      <section className="light pt-14 md:pt-24 bg-[#4a5a58] pt-10 text-[#efebe2]">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-12 justify-center mb-6 md:mb-12">
            <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
              <h2 className="text-3xl md:text-[45px] font-bold mb-6">
                7 day international transformational retreat 2024 launching
                soon…
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
