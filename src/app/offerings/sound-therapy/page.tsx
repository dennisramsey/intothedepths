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
                Sound Healing, Energy Work, Bodywork
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-6 gap-y-8 lg:gap-y-0 max-w-7xl mx-auto">
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="relative bg-[#efebe2] shadow-xl hover:-translate-y-1 mt-6 duration-300 rounded-xl">
                <div className="p-6 lg:p-12 mb-20">
                  <p className="mb-0 text-[#c3a587]">
                    <ul>
                      <li className="py-2">
                        Sound healing: gong, tuning forks, crystal bowls,
                        Tibetan brass bowls, various kinds of chimes, reverie
                        harp, hardpan, and more.
                      </li>
                      <li className="py-2">
                        Reiki energy healing, including Chakra diagnosis and
                        alignment
                      </li>
                      <li className="py-2">Timeline regression</li>
                      <li className="py-2">Heart de-armoring</li>
                      <li className="py-2">Five elements massage</li>
                      <li className="py-2">Intuitive full body massage</li>
                      <li className="py-2 text-bold">
                        Leveraging multiple certifications, I customize sessions
                        based on the needs and desires of each client.
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="flex rounded-xl p-6 lg:p-12 pb-0 lg:pb-0 relative">
                  <img
                    src="/static/offerings01.jpeg"
                    className="w-full h-auto -mt-24 mb-12 rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="relative bg-[#efebe2] shadow-xl hover:-translate-y-1 mt-6 duration-300 rounded-xl text-[#c3a587]">
                <div className="p-6 lg:p-12 mb-20">
                  <h4 className="text-2xl font-medium mb-4">Offerings</h4>
                  <p className="mb-0 ">
                    While meaningful and healing, note that I consider these
                    offerings primarily as introductory or integration sessions
                    to my deeper healing offerings.
                  </p>
                  <p>
                    <ul>
                      <li className="py-2">
                        2 Hour session- 10-15 minute check in paired with a gong
                        fu cha tea pouring, followed by energy
                        healing/expansion, sound healing, and intuitive full
                        body massage.
                      </li>
                      <li className="py-2">
                        2.5 Hour session-Similar offerings as a 2 hour session,
                        but allowing us more time for customized healing work,
                        plus a heart de-armoring - a powerful healing modality
                        for many clients.
                      </li>
                      <li className="py-2">
                        3 Hour session- Will give us flexibility to allow
                        maximum time to customize to your personal needs,
                        inclusive of all of the offerings listed above.
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="flex rounded-xl p-6 lg:p-12 pb-0 lg:pb-0 relative">
                  <img
                    src="/static/offerings02.jpeg"
                    className="w-full h-auto -mt-24 mb-12 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
