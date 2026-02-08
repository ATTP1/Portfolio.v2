import MeContacter from "../component/meContacter";

function Intro() {
  return (
    <>
      <div className="pt-[6vh]">
        <div className="absolute w-screen h-[50vh] text-baseWhite flex flex-col items-center text-main">
          <h2 className="mt-[12vh]"> Allô,</h2>
          <h2 className=""> moi c'est</h2>
        </div>

        <div className="flex flex-col justify-center items-center h-[94vh] relative">
          <div className="w-[80vw] h-[50vw] object-cover object-top">
            <div className="absolute w-[80vw] text-baseWhite flex flex-col items-center text-main z-20">
              <h1 className=" text-mainBig text-baseBlue"> Allan</h1>
              <h2 className="-mt-2"> je suis</h2>
              <h1 className=""> développeur web</h1>
            </div>

            <img className="  " src="src/assets/IntroCircle.png" alt="" />
          </div>

          <div>
            <div className="border-10 border-baseBlue/50 border-t-0 mx-[15vw] w-[60vw] h-[30vw] object-cover object-bottom absolute rounded-b-full z-20 -mt-2"></div>
            <img
              className="w-[90vw] h-[50vw] object-cover object-bottom blur-sm -mt-10 -z-10"
              src="src/assets/IntroCircle.png"
              alt=""
            />
          </div>
        </div>
        <MeContacter />
      </div>
    </>
  );
}

export default Intro;
