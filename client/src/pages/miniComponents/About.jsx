import { useEffect, useState } from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/me.jpg"
              alt="Portrait of Samuel Aberra"
              className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              I’m Samuel Aberra, or Sami to friends. I hold a BSc. in
              Information Systems from Bahir Dar University with a CGPA of 3.79.
              As a full-stack developer and freelancer, I’m passionate about
              technology and creativity.
            </p>
            <p>
              I enjoy coding, programming, and exploring new technologies. I
              excel at problem-solving and also appreciate reading, meeting new
              people, and cooking.
            </p>
            <p className="tracking-[1px] text-xl">
              Above all, I am dedicated and persevering. I take pride in
              delivering high-quality work on time and have the resilience to
              tackle any challenge, no matter how long it takes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
