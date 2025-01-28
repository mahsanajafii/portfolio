import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <main className="items-start justify-start gap-24 flex flex-col p-8 pb-20" id="home">
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </main>
  );
}
