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
                1:1 Expansion Retreat
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
                        Want to go deeper and feel drawn to a customized
                        wellness retreat?
                      </li>
                      <li className="py-2">
                        These customized 1:1 immersive retreats are curated to
                        support you in transformation, healing, integration,
                        expanded states of consciousness, and self-discovery.
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
                  <h4 className="text-2xl font-medium mb-4">
                    What's Included?
                  </h4>
                  <p>
                    <ul>
                      <li className="py-2">
                        1-2 expanded states of consciousness journeys.
                      </li>
                      <li className="py-2">Customized meal plan/menu</li>
                      <li className="py-2">
                        1-3 Wellness sessions- Can include body work, energy
                        healing, sound healing, chakra diagnosis and alignment,
                        soul retrieval, timeline work, business and life
                        counseling, yoga, embodiment exercises, and meditation
                        (dependent on your needs).
                      </li>
                      <li className="py-2">Time in nature- hike or walk.</li>
                      <li className="py-2">
                        Optional Kambo ceremony as a preparation session a day
                        before a full day session.
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

            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="relative bg-[#efebe2] shadow-xl hover:-translate-y-1 mt-6 duration-300 rounded-xl text-[#c3a587]">
                <div className="p-6 lg:p-12 mb-20">
                  <h4 className="text-2xl font-medium mb-4">
                    Retreat Packages
                  </h4>
                  <p>
                    <ul>
                      <li className="py-2">
                        <ul>
                          <li className="py-2">
                            3 day retreat-Includes preparation sessions via
                            zoom, one full day expansion ceremony, wellness
                            sessions, embodiment practices, emotional support,
                            organic meals, integration sessions via zoom, and
                            much more.
                          </li>
                          <li className="py-2">
                            Airport transportation if needed
                          </li>
                          <li className="py-2">Airbnb included (up to $900)</li>
                          <li className="py-2">-$5,555</li>
                        </ul>
                        <ul>
                          <li className="py-2">
                            4 day retreat-Includes preparation sessions via
                            zoom, two full day expansion ceremonies, wellness
                            sessions, embodiment practices, emotional support,
                            organic meals, integration sessions via zoom, and
                            much more.
                          </li>
                          <li className="py-2">
                            Airport transportation if needed
                          </li>
                          <li className="py-2">
                            Airbnb included (up to $1200)
                          </li>
                          <li className="py-2">-$7,777</li>
                        </ul>
                      </li>
                      <li className="py-2">
                        These retreats can be customized.
                      </li>
                      <li className="py-2">
                        These options are just examples of what I have already
                        curated.
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
