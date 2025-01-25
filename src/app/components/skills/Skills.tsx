import Image from "next/image";
import TSLogo from "@/public/images/ts.png";
import JSLogo from "@/public/images/js.svg";
import TailwindLogo from "@/public/images/tailwind.png";
import FigmaLogo from "@/public/images/figma.png";
import GithubLogo from "@/public/images/256-2562282_github-white-icon-png-clipar222222222t.png";
import ReactLogo from "@/public/images/react.png";
import NextLogo from "@/public/images/nextjs.png";
import HtmlLogo from "@/public/images/html.svg"
import CssLogo from "@/public/images/css.svg"

const Skills = () => {
  return (
<div className="flex flex-col w-full gap-3 justify-center items-center">
        <p className="w-full h-fit text-4xl">Skills</p>
        <div className="w-1/3 h-auto grid grid-cols-3 gap-10 ">
          <span className="flex justify-center items-center p-2 w-20 h-20 rounded-full bg-[#251C31]">
            <Image src={NextLogo} alt="NextLogo"/>
          </span>
          <span className="flex justify-center items-center w-20 h-20  rounded-full bg-[#251C31]">
            <Image src={ReactLogo} alt="ReactLogo" width={50} height={50} />
          </span>
          <span className="flex justify-center items-center w-20 h-20 p-4 rounded-full bg-[#251C31]">
            <Image src={TSLogo} alt="TSLogo" />
          </span>
          <span className="flex justify-center items-center w-20 h-20 p-2 rounded-full bg-[#251C31]">
            <Image src={TailwindLogo} alt="TailwindLogo" />
          </span>
          <span className="flex justify-center items-center w-20 h-20 p-2 rounded-full bg-[#251C31]">
            <Image src={JSLogo} alt="JSLogo" width={50} height={50} />
          </span>
          <span className="flex justify-center items-center w-20 h-20 rounded-full bg-[#251C31]">
            <Image src={FigmaLogo} alt="FigmaLogo" />
          </span>
          <span className="flex justify-center items-center p-3 w-20 h-20 rounded-full bg-[#251C31]">
            <Image src={GithubLogo} alt="GithubLogo" />
          </span>
          <span className="flex justify-center items-center w-20 h-20 p-2 rounded-full bg-[#251C31]">
            <Image src={HtmlLogo} alt="HtmlLogo" width={40} height={40} />
          </span>
          <span className="flex justify-center items-center w-20 h-20 p-2 rounded-full bg-[#251C31]">
            <Image src={CssLogo} alt="CssLogo" width={40} height={40} />
          </span>
        </div>
      </div>  )
}

export default Skills