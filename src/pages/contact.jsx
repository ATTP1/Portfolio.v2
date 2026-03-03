import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Contact() {
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".iconsContact", {
        y: -200,
        opacity: 0,
        duration: 1.5,
        stagger: 0.5,
        ease: "bounce",
        scrollTrigger: {
          trigger: ".iconsContact",
          start: "top bottom",
          toggleActions: "restart none none none",
        },
      });
    });

    return () => context.revert();
  }, []);

  return (
    <>
      <div id="PageContact" className="pt-[6vh] h-screen ">
        <div className=" w-screen  text-baseWhite flex flex-col items-center text-main mb-10 lg:flex-row lg:ml-[10vw] lg:w-[80vw] lg:items-end lg:gap-5">
          <h2 className="mt-[8vh] text-underText opacity-40 lg:text-lg-small lg:mt-0 lg:mb-[2vh]">
            {" "}
            Pour
          </h2>
          <h2 className="lg:text-lg-main"> Me contacter</h2>
          <h2 className="mt-[1vh] text-underText opacity-40 lg:text-lg-small lg:mt-0 lg:mb-[2vh]">
            {" "}
            On travaille toujours mieux à plusieurs!
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center lg:mt-30 ">
          <div className="w-[80vw]  h-[36vh] text-skill text-baseWhite flex flex-col justify-between lg:flex-row">
            <div>
              <form
                className="flex flex-col text-underText lg:w-[40vw] lg:text-lg-small"
                action=""
              >
                <label htmlFor="nom"> Nom:</label>
                <input
                  className="bg-accentLightBlue/30 h-[3vh] rounded-2xl mb-[1vh] lg:h-[6vh] lg:mb-[2vh]"
                  type="text"
                />

                <label htmlFor="nom"> Courriel:</label>
                <input
                  className="bg-accentLightBlue/30 h-[3vh] rounded-2xl mb-[3vh] lg:h-[6vh] lg:mb-[6vh]"
                  type="email"
                  name="Courriel"
                  id=""
                />

                <div className="w-full flex flex-row-reverse">
                  <input
                    className=" bg-accentYellow text-baseBlue w-fit p-2 px-4 rounded-2xl z-40 lg:text-lg-small lg:p-4 lg:px-8 border-2 border-accentYellow hover:bg-baseBlue hover:text-accentYellow cursor-pointer"
                    type="submit"
                    value="Envoyer"
                  />
                </div>
              </form>
            </div>
            <div className="flex justify-evenly lg:items-center lg:w-full lg:text-lg-small">
              <div className="iconsContact">
                <h3 className="mb-2">Github:</h3>
                <a target="_blank" href="https://github.com/ATTP1">
                  <img
                    className=" w-[10vh] cursor-pointer hover:bg-accentViolet hover:rounded-full lg:w-[20vh]"
                    src="./src/assets/images/git.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="iconsContact">
                <h3 className="mb-2">Linkin:</h3>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/allan-pham-b50177304/"
                >
                  <img
                    className=" w-[10vh] cursor-pointer hover:bg-accentViolet hover:rounded-full lg:w-[20vh]"
                    src="./src/assets/images/linkin.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[20vh] absolute top-[380vh] overflow-hidden rounded-t-3xl lg:w-screen  lg:absolute  lg:top-[382vh] lg:rounded-none">
          <div className=" flex absolute lg:w-[95vw] h-[20vh]  text-baseBlue lg:text-lg-small justify-end items-end pb-5 z-20 text-right pointer-events-none">
            Projet Portfolio 2026 Front-End Web
            <br />© 2026 Allan Tri Tam Pham. Tous droits réservés.
          </div>
          <spline-viewer
            className="h-screen bg-accentYellow"
            url="https://prod.spline.design/XCsMP7nPjIRkyNiQ/scene.splinecode"
          ></spline-viewer>
        </div>
      </div>
    </>
  );
}

export default Contact;
