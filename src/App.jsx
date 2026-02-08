import "./App.css";
import NavBar from "./component/navbar";
import Intro from "./pages/intro";
import Skills from "./pages/skills";
import Projects from "./pages/projects";

function App() {
  return (
    <>
      <NavBar />

      <Intro />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
