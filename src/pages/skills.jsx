import MeContacter from "../component/meContacter";

function Skills() {
  return (
    <>
      <div className="pt-[6vh] h-screen">
        <div className=" w-screen  text-baseWhite flex flex-col items-center text-main mb-10">
          <h2 className="mt-[8vh] text-underText opacity-40"> Mes</h2>
          <h2 className=""> Compétences clés</h2>
          <h2 className="mt-[1vh] text-underText opacity-40">
            {" "}
            : 99% café, 1% magie!
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center  ">
          <div className="w-[90vw] h-[40vh] text-skill text-baseWhite flex flex-col justify-between">
            <div className="">
              <h3>Html</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 bg-accentViolet rounded-2xl"></div>
                <div className=" absolute w-full h-2 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>CSS / SCSS</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 bg-accentViolet rounded-2xl"></div>
                <div className=" absolute w-full h-2 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>JavaScript</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 bg-accentViolet rounded-2xl"></div>
                <div className=" absolute w-[75%] h-2 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>React</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 bg-accentViolet rounded-2xl"></div>
                <div className=" absolute w-[85%] h-2 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>Vue</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 bg-accentViolet rounded-2xl"></div>
                <div className=" absolute w-[70%] h-2 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>Angular</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 bg-accentViolet rounded-2xl"></div>
                <div className=" absolute w-[65%] h-2 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>GSAP</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 bg-accentViolet rounded-2xl"></div>
                <div className=" absolute w-[80%] h-2 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>Tailwind</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 bg-accentViolet rounded-2xl"></div>
                <div className=" absolute w-[95%] h-2 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
            <div className="">
              <h3>Git</h3>
              <div className="relative ">
                <div className="absolute w-full h-2 bg-accentViolet rounded-2xl"></div>
                <div className=" absolute w-[70%] h-2 bg-accentYellow rounded-2xl"></div>
              </div>
            </div>
          </div>
          <div className="text-underText m-10 text-baseWhite ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            alias deleniti tempore velit totam. Fugit enim dicta placeat
            excepturi atque omnis vitae repudiandae laboriosam accusamus, sed
            sapiente provident, facere optio!
          </div>
        </div>
      </div>
      <MeContacter />
    </>
  );
}

export default Skills;
