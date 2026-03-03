import "./App.css";
import NavBar from "./component/navbar";
import Intro from "./pages/intro";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <NavBar />

      <section className="snap-start">
        <Intro />
      </section>

      <section className="snap-start">
        <Skills />
      </section>

      <section className="snap-start">
        <Projects />
      </section>

      <section className="snap-start">
        <Contact />
      </section>
    </>
  );
}

export default App;
