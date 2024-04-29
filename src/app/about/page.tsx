import Image from "next/image";
import Header from "@/components/Header";
import Intro from "@/components/home";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Header section="about" />
      <section className="ezy__about12 light pt-14 md:pt-24 bg-[#4a5a58] pt-10 text-[#efebe2]">
        <div className="container px-4">
          <div className="grid grid-cols-12 gap-5 justify-center items-center">
            <div className="col-span-12 lg:col-span-6">
              <div className="lg:px-7">
                <h1 className="uppercase text-4xl md:text-6xl leading-tight font-medium mb-2">
                  ABOUT ME
                </h1>
                <p className="text-lg leading-normal opacity-75 my-6">
                  I have dedicated my life to self discovery, reclamation of the
                  self, integration, endless growth, and bringing more beauty
                  into the world. I am inspired and driven by supporting people
                  in their healing, using a variety of tools that include
                  psychedelic therapy, intimacy coaching, energy work, sound
                  healing, deep listening, and presence.
                </p>
                <p className="text-lg leading-normal opacity-75 my-6">
                  My life has been transformed through the past decade by
                  working with various forms of somatic healing modalities, in
                  addition to psychedelics (with psychedelics being the first
                  catalyst for me twelve years ago). In order to serve others in
                  my passion, I’ve spent recent years training in various
                  modalities, earning certifications as a psychedelic
                  practitioner, reiki master, sound healer, and tantra
                  practitioner.{" "}
                </p>
                <p className="text-lg leading-normal opacity-75 my-6">
                  These tools have transformed my life and I am honored to offer
                  the same to my clients. Now feeling deeply in alignment with
                  my dharmic journey, I support my clients in their own healing
                  by helping them reclaim all parts of themselves through inner
                  child work, remembrance of the soul, and trauma informed
                  healing.
                </p>
                <p className="text-lg leading-normal opacity-75 my-6">
                  I travel this path with the deepest humility, respect and
                  reverence - and I would be honored to discuss how I might
                  possibly support you on your own unique path.
                </p>
                <p className="text-lg leading-normal opacity-75 my-6">
                  I reside in San Francisco, and manage my full time wellness
                  practice out of a beautiful temple space that I have curated
                  for sessions.
                </p>
                <p className="text-lg leading-normal opacity-75 my-6">
                  With love, Carson
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="flex justify-center lg:justify-start lg:ml-12">
                <img
                  src="/static/about.jpg"
                  alt=""
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
