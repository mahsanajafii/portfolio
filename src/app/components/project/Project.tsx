import Image from "next/image";

const Project:React.FC = ({project}) => {
  return (
<div className="flex flex-row w-full h-[300px]">
    <div className="w-full h-full flex flex-col gap-5 justify-center">
<p className="font-semibold text-xl text-[#CCD6F6]">{project.title}</p>
    <div className="w-full h-1/2 bg-[#693B93] opacity-50 rounded-2xl ml-8 transition-all duration-700  ">
<p className="text-white font-semibold text-lg p-4 text-wrap">{project.des}</p>
    </div>
    </div>
    <div className=" w-full h-full flex flex-col py-4 justify-start items-start">
        
    <div className="bg-[#2B0B3A] pt-6 pl-8 w-2/3 h-full flex flex-col justify-center items-center -ml-10 hover:shadow-md hover:shadow-[#CCD6F6] hover:scale-105 cursor-pointer transition-all duration-700 rounded-2xl">
    <Image src={project.src} alt={`${project.title} pic`}  className="rounded-tl-2xl shadow-md shadow-[#693B93]" width={600} height={600}/>
    </div>
    </div>
</div>
        )
}

export default Project