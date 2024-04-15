import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonals() {
  return (
    <div className="pb-10">
      <img
        src="/static/title-testimonials.png"
        alt="testimonals"
        className="w-1/2 pb-10"
      />
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="italic">
              <p className="py-2">
                “I cannot say enough kind things about how Carson works with her
                clients. I have experienced other practitioners in this field
                and for me, Carson is beyond exceptional in the tender, loving
                guidance she provides. She stands out to me because she really
                deeply connects. She truly cares and I felt it deeply.
              </p>
              <p className="py-2">
                She holds space unlike anyone i’ve experienced. She is kind,
                gentle, intuitive, and tender. Every time, she met me exactly
                where I needed to be met and allowed me to go deeper as
                necessary. Her integration is also very mindful and
                personalized. I again, Can’t say enough about how she stands out
                in her client care. I have never met anyone that understands
                connection like Carson does.
              </p>
              <p className="py-2">
                I had not just one trauma to love through, with my ovarian
                cancer survival, but I also had a serious back injury to heal
                from and a traumatic family death to deeply grieve. I was able
                to fully process my body’s traumas and deeply feel and heal my
                grief on my own with her loving support.{" "}
              </p>
              <p className="py-2">
                I can’t recommend Carson enough- her work with me was life
                altering in the most positive of ways- I feel the best I have
                felt in 2 years in all aspects of my life. With love & gratitude
                & sonic blessing"
              </p>
            </div>
            <div className="py-10">
              -KK (Karen Kay Holly), Founder, creator KH essentials, The Women’s
              Health Panel, and HONNE), And/ or Former IT Director, Gap Inc.
            </div>
          </CarouselItem>
          <CarouselItem>
            <p className="italic">
              “My review for Carson is 11 stars out of 5! The experience I had
              was nothing short of life changing. Thanks to Carson's
              well-planned intake form and intake calls, I came into our session
              with a very clear intention of three topics on which I needed
              clarity. Throughout the session, Carson was very clear about how
              the session was going to go and what I should expect. We started
              with a guided session in which Carson helped guide me through some
              periods of my life in order to help me find clarity on my
              intentions. She was spot on in helping me to pay attention to my
              heart which guided me to unlock my true feelings on my intentions.
              Later, the journey turned inward. But Carson stayed by my side
              which allowed me to feel safe and on several occasions, I asked
              for her guidance. Though I had literally been struggling with
              these topics for years, I left the session with clarity on my
              intentions! It was nothing short of magical. I could not more
              highly recommend an experience or Carson as a guide”.
            </p>
            <div className="py-10">
              -Founder & CEO of SF-based investment firm
            </div>
          </CarouselItem>
          <CarouselItem>
            <p className="italic">
              “I’ve been on multiple retreats with Carson (with another coming
              up!), and they have honestly been hands-down the best decisions
              I’ve made for myself in recent years. I’ve been going through some
              tough situations in my personal life, so I decided to reach out to
              Carson to see how she could help. From my first call with her all
              the way through each retreat, I was blown away by how much thought
              was put into every step. It was very clear that she deeply cared,
              listened to everything I had to say, and planned each retreat
              completely catered toward my unique challenges. During the
              retreats, she’s able to mix together an incredibly wide variety of
              skills from her extensive training and background into something
              that feels incredibly personal and deeply fulfilling. With Carson
              I’m able to feel vulnerable yet comfortable and relaxed - this
              allows her to get to the root of my challenges and help me through
              them, making me feel seen, heard, and valued in a way I’ve
              personally never felt before. After each retreat I feel as if a
              massive weight has been lifted, where she continues to stay in
              touch to help and encourage me to live a healthier lifestyle, both
              mentally and physically. I cannot express how important these
              retreats have been for me. I began this journey feeling incredibly
              lost, and now I have gained a genuinely caring friend to help
              guide me through it. For that, I am truly blessed to have met
              Carson and grateful for everything she continues to do for me.”
            </p>
            <div className="py-10">
              John - Design Director at one of the Biggest Tech companies in the
              World.
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="top-[auto] left-0" />
        <CarouselNext className="top-[auto] right-0" />
      </Carousel>
    </div>
  );
}
