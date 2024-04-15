import Testimonals from "@/components/testimonals";

export default function Intro() {
  return (
    <>
      <div className="w-full  flex justify-between bg-[#4a5a58] pt-10 text-[#efebe2]">
        <div className="px-10 pt-10 py-10">
          <h2 className="text-5xl">
            Are you ready to go inward, and discover the potential that awaits
            you?
          </h2>
          <p className="py-10 mb-20">
            I hold my clients in safety and non-judgmental support as they
            pursue healing and self discovery. I know that going into one’s
            depths for self expansion takes courage, and I’m so honored to
            assist my clients in such a journey.
          </p>
          <Testimonals />
        </div>
      </div>
    </>
  );
}
