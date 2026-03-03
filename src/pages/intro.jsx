import MeContacter from "../component/meContacter";
import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Intro() {
  useEffect(() => {
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);

    const split = SplitText.create(".textIntro", {
      type: "words",
    });

    gsap.from(split.words, {
      y: -100,
      opacity: 0,
      rotation: "random(-30, 20)",
      duration: 1.5,
      ease: "back",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".textIntro",
        start: "top bottom",
        toggleActions: "restart none restart none",
      },
    });
  }, []);
  return (
    <>
      <div
        id="PageIntro"
        className=" h-screen w-screen flex flex-col items-center"
      >
        <div className="textIntro w-screen h-[20vh] mt-[5vh] text-baseWhite flex flex-col items-center text-main lg:mt-0 lg:h-[10vh] lg:z-50 lg:text-lg-main lg:items-start lg:w-[60vw] pointer-events-none">
          <h2 className="mt-[15vh] lg:mt-[5vh] "> Allô,</h2>
          <div className="lg:flex pointer-events-none">
            <h2> moi c'est </h2>
            <h2 className="hidden lg:block lg:text-lg-mainBig lg:-mt-[5vh] lg:absolute lg:left-[40vw] lg:text-baseBlue">
              &nbsp;Allan
            </h2>
          </div>
          <h2 className="hidden lg:block lg:mt-[2vh] ">
            Je suis développpeur web
          </h2>
        </div>
        <div className="w-screen h-80 top-[55vh] bg-red-500/0 absolute z-20 backdrop-blur-xl pointer-events-none lg:h-[55vh] lg:top-[50vh] lg:w-[80vw]"></div>
        <div className="mt-[10vh] relative lg:mt-0">
          <div className=" w-[80vw] h-[80vw] rounded-full  overflow-hidden lg:w-[40vw] lg:h-[40vw]">
            <spline-viewer
              className="bg-accentYellow"
              url="https://prod.spline.design/XCsMP7nPjIRkyNiQ/scene.splinecode"
            ></spline-viewer>

            <div className="hidden lg:block ml-[4vw] mt-[2vh] w-[32vw] h-[16vw] absolute top-[50%] border-20 border-baseBlue/80 border-t-0 object-cover object-bottom  rounded-b-full z-20 pointer-events-none"></div>

            <div className="absolute w-[80vw] text-baseWhite flex flex-col items-center text-main z-20 top-0 pointer-events-none lg:hidden ">
              <h1 className=" text-mainBig text-baseBlue"> Allan</h1>
              <h2 className="-mt-2"> je suis</h2>
              <h1 className=""> développeur web</h1>
              <div className="border-10 border-baseBlue/80 border-t-0  w-[60vw] h-[30vw] object-cover object-bottom  rounded-b-full z-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      <MeContacter />
    </>
  );
}

export default Intro;
