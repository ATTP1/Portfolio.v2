import MeContacter from "../component/meContacter";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Skills() {
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".skillBar", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skillBar",
          start: "top bottom",
          toggleActions: "restart none restart none",
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <div id="PagePropos" className="pt-[6vh] h-screen  ">
        <div className=" w-screen  text-baseWhite flex flex-col items-center text-main mb-10 lg:flex-row lg:w-[80vw] lg:ml-[10vw] lg:items-end lg:gap-5">
          <h2 className="mt-[8vh] text-underText opacity-40 lg:text-lg-small lg:mt-0 lg:mb-[2vh]">
            {" "}
            Mes
          </h2>
          <h2 className="lg:text-lg-main"> Compétences clés</h2>
          <h2 className="mt-[1vh] text-underText opacity-40 lg:text-lg-small lg:mt-0 lg:mb-[2vh]">
            {" "}
            : 99% café, 1% magie!
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row-reverse ">
          <div className="w-[90vw] h-[40vh] text-skill text-baseWhite flex flex-col justify-between lg:w-[60vw] lg:text-lg-skill lg:gap-[4vh]">
            <div className="">
              <h3>Html</h3>
              <div className="relative ">
                <div className=" absolute w-full h-2 lg:h-4 bg-accentViolet rounded-2xl"></div>
                <div className="skillBar absolute w-full h-2 lg:h-4 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>CSS / SCSS</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 lg:h-4 bg-accentViolet rounded-2xl"></div>
                <div className="skillBar absolute w-full h-2 lg:h-4 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>JavaScript</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 lg:h-4 bg-accentViolet rounded-2xl"></div>
                <div className="skillBar absolute w-[75%] h-2 lg:h-4 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>React</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 lg:h-4 bg-accentViolet rounded-2xl"></div>
                <div className="skillBar absolute w-[85%] h-2 lg:h-4 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>Vue</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 lg:h-4 bg-accentViolet rounded-2xl"></div>
                <div className="skillBar absolute w-[70%] h-2 lg:h-4 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>Angular</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 lg:h-4 bg-accentViolet rounded-2xl"></div>
                <div className="skillBar absolute w-[65%] h-2 lg:h-4 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>GSAP</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 lg:h-4 bg-accentViolet rounded-2xl"></div>
                <div className="skillBar absolute w-[70%] h-2 lg:h-4 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>Tailwind</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 lg:h-4 bg-accentViolet rounded-2xl"></div>
                <div className="skillBar absolute w-[95%] h-2 lg:h-4 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>Git</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 lg:h-4 bg-accentViolet rounded-2xl"></div>
                <div className="skillBar absolute w-[70%] h-2 lg:h-4 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
          </div>
          <div className="text-underText m-10 text-baseWhite lg:w-[20vw] lg:text-[2.5vh] ">
            Passionné d’informatique et d’art, j’ai étudié en marketing, en
            finance et en web front-end. Je cherche à me dépasser à travers des
            projets inspirants, créatifs et stimulants!
          </div>
        </div>
      </div>
      <MeContacter />
    </>
  );
}

export default Skills;
