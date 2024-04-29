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
                1:1 Full Day
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-6 gap-y-8 lg:gap-y-0 max-w-7xl mx-auto">
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <div className="relative bg-[#efebe2] shadow-xl hover:-translate-y-1 mt-6 duration-300 rounded-xl">
                <div className="p-6 lg:p-12 mb-20 mb-0 text-[#c3a587]">
                  <h4 className="text-2xl font-medium mb-4">
                    The Expansion Session
                  </h4>
                  <ul>
                    <li className="py-2">
                      These ceremonies last at least six hours, and utilize
                      several transformative practices.
                    </li>

                    <li className="py-2">
                      The full day journey is focused on leveraging expanded
                      states of consciousness for transformation and healing.
                      Customized methods often include breathwork, meditation,
                      bodywork, inner child healing, timeline healing, energy
                      work, sound healing, and practices steeped in wisdom
                      traditions.
                    </li>

                    <li className="py-2">
                      I offer the option of two different medicines, and utilize
                      both clinical and wisdom practices.
                    </li>

                    <li className="py-2">
                      The intention of this work is to support your reclamation
                      and integration of disparate parts of yourself, thereby
                      offering the ability to come back into wholeness within
                      your body.
                    </li>

                    <li className="py-2">
                      These Expansion Sessions are preceded by two preparation
                      sessions before the ceremony (via zoom), and are followed
                      by two integration sessions after the ceremony. There is
                      an option for one preparation or integration session in
                      person as a 2-2.5 hours wellness session.
                    </li>

                    <li className="py-2">
                      The day long 1:1 ceremonies are generally conducted in my
                      gorgeous lofted temple space in San Francisco, California.
                      However, many clients fly into the Bay Area for these
                      sessions and may rent an AirBnB nearby (optional).
                    </li>

                    <li className="py-2">
                      The Expansion Session package, which includes a one hour
                      zoom call, an (optional) in person 2-2.5 hour wellness
                      session, and two integration sessions via zoom is $2,500.
                      I do offer a sliding scale for those that feel it may be
                      more accessible.
                    </li>

                    <li className="py-2">
                      Please note that due to time needed for my planning and
                      energetic requirements involved in such a package, these
                      sessions are generally booked a minimum of 3 weeks - one
                      month in advance
                    </li>
                  </ul>
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
              <div className="relative bg-[#efebe2] shadow-xl hover:-translate-y-1 mt-6 duration-300 rounded-xl">
                <div className="p-6 lg:p-12 mb-20 mb-0 text-[#c3a587]">
                  <h4 className="text-2xl font-medium mb-4">
                    Finding healing by going inward.
                  </h4>
                  <ul>
                    <li className="py-2">You don’t have to do it alone.</li>
                    <li className="py-2">
                      I’m here to show up as a guide and counselor during this
                      time of healing, reclamation, self discovery, and
                      integration.
                    </li>
                    <li className="py-2">
                      It takes courage to say “yes” to diving into the depths of
                      your core.
                    </li>
                    <li className="py-2">
                      The more that you honor and acknowledge the duality of
                      being human, which means being shadow and light, and
                      honoring the full spectrum of feeling. The more you will
                      experience a healthy balance of living, and the more it
                      will create space for expansion and self discovery.
                    </li>
                    <li className="py-2">
                      As you continue to look at all of your parts, do the
                      healing and integration work. The more you will start to
                      wake up to your own magic, essence, and dharma.
                    </li>
                    <li className="py-2">
                      The gift of working with a guide is that you will be fully
                      supported in your process. You just have to show up, and
                      be open to doing the work.{" "}
                    </li>
                  </ul>
                </div>
                <div className="flex rounded-xl p-6 lg:p-12 pb-0 lg:pb-0 relative">
                  <img
                    src="/static/offerings01.jpeg"
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
