
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import About from "./components/about/About";

export default function Home() {
  const projectList=[
    {title:"E-Commerce Project",des:"E-commerce store project using React and TypeScript. Utilizes Axios for API calls, Zustand for state management, and Tailwind CSS for styling. React Hook Form is implemented for efficient form handling, creating a robust and user-friendly online shopping experience.",src:"/images/e-commerce.png"}
  ]
  return (
    <main className="items-start justify-start gap-24 flex flex-col p-8 pb-20">
      <About/>
      <Skills/>
      {
        projectList.map((project,index)=>(

          <Project project={project} key={index}/>
        ))
      }
    </main>
  );
}
