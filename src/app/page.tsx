
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import About from "./components/about/About";

export default function Home() {
  return (
    <main className="items-start justify-start gap-24 flex flex-col p-8 pb-20">
      <About/>
      <Skills/>
      <Project/>
    </main>
  );
}
