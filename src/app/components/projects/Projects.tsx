import Image from "next/image";

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "E-Commerce Project",
      des: "E-commerce store project using React and TypeScript. Utilizes Axios for API calls, Zustand for state management, and Tailwind CSS for styling. React Hook Form is implemented for efficient form handling, creating a robust and user-friendly online shopping experience.",
      src: "/images/e-commerce.png",
    },
    {
      title: "E-Commerce Project",
      des: "E-commerce store project using React and TypeScript. Utilizes Axios for API calls, Zustand for state management, and Tailwind CSS for styling. React Hook Form is implemented for efficient form handling, creating a robust and user-friendly online shopping experience.",
      src: "/images/e-commerce.png",
    },
    {
      title: "E-Commerce Project",
      des: "E-commerce store project using React and TypeScript. Utilizes Axios for API calls, Zustand for state management, and Tailwind CSS for styling. React Hook Form is implemented for efficient form handling, creating a robust and user-friendly online shopping experience.",
      src: "/images/e-commerce.png",
    },
  ];
  return (
    <div className="flex flex-col w-full h-full gap-20 mb-44" id="projects">
      <p className="w-full h-fit text-6xl justify-center items-center flex">Projects:</p>
      <div className="grid grid-cols-3 w-full h-[300px] gap-5 group relative odd:floating_xy_even">
      {projectList.map((project, index) => (
        <div key={index} className=" even:floating_xy_even flex flex-col w-full h-full gap-5 bg-[#2B0B3A] opacity-70 rounded-2xl justify-center items-center p-3">
            <p className="font-semibold text-xl text-[#CCD6F6]">
              {project.title}
            </p>
            
          {/* <div className=" w-full h-full flex flex-col py-4 justify-start items-start flo"> */}
            <div className="bg-[#2B0B3A] p-2 w-2/3 h-full flex flex-col justify-center items-center hover:shadow-md hover:shadow-[#CCD6F6] hover:scale-105 cursor-pointer transition-all duration-700 rounded-2xl">
              <Image
                src={project.src}
                alt={`${project.title} pic`}
                className="rounded-2xl shadow-md shadow-[#693B93]"
                width={600}
                height={600}
              />
            </div>
            {/* </div> */}
            <div className="w-full ">
              <p className="text-white font-semibold text-lg p-4 text-wrap">
                {project.des}
              </p>
            </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
{/* <div key={index} className="flex flex-row w-full h-full ">
          <div className="w-full h-full flex flex-col gap-5 justify-center ">
            <p className="font-semibold text-xl text-[#CCD6F6]">
              {project.title}
            </p>
            <div className="w-full  bg-[#693B93] opacity-50 rounded-2xl ml-8 transition-all duration-700 ease-in-out ">
              <p className="text-white font-semibold text-lg p-4 text-wrap">
                {project.des}
              </p>
            </div>
          </div>
          <div className=" w-full h-full flex flex-col py-4 justify-start items-start flo">
            <div className="bg-[#2B0B3A] pt-6 pl-8 w-2/3 h-full flex flex-col justify-center items-center -ml-10 hover:shadow-md hover:shadow-[#CCD6F6] hover:scale-105 cursor-pointer transition-all duration-700 rounded-2xl">
              <Image
                src={project.src}
                alt={`${project.title} pic`}
                className="rounded-tl-2xl shadow-md shadow-[#693B93]"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div> */}