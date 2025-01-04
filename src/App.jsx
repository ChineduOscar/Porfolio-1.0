import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experiences from "./components/Experiences";
import Projects from "./components/Projects"
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experiences /></section>
        <section id="projects"><Projects /></section>
      </div>
      <section id="contact"><Footer /></section>
    </div>
  );
}

export default App;

