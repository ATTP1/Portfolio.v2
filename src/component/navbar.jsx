function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 lg:rotate-270 lg:w-[100vh] lg:bottom-0 lg:h-fit lg:-left-[50vh] lg:top-[50vh]">
        <div className="bg-accentLightBlue/50 backdrop-blur-sm flex justify-evenly  py-[2vh] text-navBar absolute w-screen z-20 lg:w-[100vh] lg:text-lg-small lg:flex-row-reverse">
          <a href="#PageIntro">
            <h1 className="text-baseWhite hover:text-accentYellow hover:cursor-pointer">
              Intro
            </h1>
          </a>
          <a href="#PagePropos">
            <h1 className="text-baseWhite hover:text-accentYellow hover:cursor-pointer">
              À Propos
            </h1>
          </a>
          <a href="#PageProjets">
            <h1 className="text-baseWhite hover:text-accentYellow hover:cursor-pointer">
              Projets
            </h1>
          </a>
          <a href="#PageContact">
            <h1 className="text-baseWhite hover:text-accentYellow hover:cursor-pointer">
              Contact
            </h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
