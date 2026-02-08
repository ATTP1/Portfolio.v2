function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 ">
        <div className="bg-accentLightBlue/50 backdrop-blur-sm flex justify-evenly  py-[2vh] text-navBar absolute w-screen z-20">
          <h1 className="text-baseWhite hover:text-accentYellow hover:cursor-pointer">
            Intro
          </h1>
          <h1 className="text-baseWhite hover:text-accentYellow hover:cursor-pointer">
            À Propos
          </h1>
          <h1 className="text-baseWhite hover:text-accentYellow hover:cursor-pointer">
            Projets
          </h1>
          <h1 className="text-baseWhite hover:text-accentYellow hover:cursor-pointer">
            Contact
          </h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
