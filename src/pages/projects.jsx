import { useState } from "react";
import MeContacter from "../component/meContacter";

function Projects() {
  // 1) Chaque item a une image pour le carousel + une image pour le DISPLAY
  const projects = [
    {
      id: "p1",
      thumb: "https://picsum.photos/id/1011/600/600",
      display: "https://picsum.photos/id/1011/1200/700",
    },
    {
      id: "p2",
      thumb: "https://picsum.photos/id/1025/600/600",
      display: "https://picsum.photos/id/1025/1200/700",
    },
    {
      id: "p3",
      thumb: "https://picsum.photos/id/1035/600/600",
      display: "https://picsum.photos/id/1035/1200/700",
    },
    {
      id: "p4",
      thumb: "https://picsum.photos/id/1041/600/600",
      display: "https://picsum.photos/id/1041/1200/700",
    },
    {
      id: "p5",
      thumb: "https://picsum.photos/id/1050/600/600",
      display: "https://picsum.photos/id/1050/1200/700",
    },
    {
      id: "p6",
      thumb: "https://picsum.photos/id/1062/600/600",
      display: "https://picsum.photos/id/1062/1200/700",
    },
  ];

  // 2) Sélection par défaut (le premier)
  const [selected, setSelected] = useState(projects[0]);

  // 3) Pour l’auto-loop, on duplique MAIS on garde l’index vers le vrai project
  const loopProjects = [...projects, ...projects];

  return (
    <>
      <div className="pt-[6vh] h-screen">
        <div className="w-screen text-baseWhite flex flex-col items-center text-main mb-10">
          <h2 className="mt-[8vh] text-underText opacity-40"> Mon</h2>
          <h2> Portfolio</h2>
          <h2 className="mt-[1vh] text-underText opacity-40"> en ce moment.</h2>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="w-screen h-[40vh] text-skill text-baseWhite flex flex-col justify-between">
            <div className="w-full h-[40%] overflow-hidden relative">
              <div className="flex gap-4 w-max animate-scrollLTR">
                {loopProjects.map((p, i) => {
                  const isActive = p.id === selected.id;

                  return (
                    <button
                      key={`${p.id}-${i}`}
                      type="button"
                      onClick={() => setSelected(p)}
                      className={[
                        "w-[15vh] h-fit rounded-2xl overflow-hidden ",
                        "border-4 transition-transform duration-150",
                        isActive
                          ? "border-accentYellow "
                          : "border-transparent hover:border-accentYellow",
                      ].join(" ")}
                    >
                      <img
                        src={p.thumb}
                        alt={`project-${p.id}`}
                        className="w-full aspect-square object-cover block"
                        draggable="false"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-full h-[60%]  flex items-center justify-center  overflow-hidden">
              <img
                src={selected.display}
                alt={`display-${selected.id}`}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          </div>

          <div className="text-underText m-10 text-baseWhite">
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

export default Projects;
