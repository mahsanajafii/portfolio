import Image from "next/image";
import TSLogo from "../../../../public/images/ts.png";
import JSLogo from "../../../../public/images/js.svg";
import TailwindLogo from "../../../../public/images/tailwind.png";
import FigmaLogo from "../../../../public/images/figma.png";
import GithubLogo from "../../../../public/images/256-2562282_github-white-icon-png-clipar222222222t.png";
import ReactLogo from "../../../../public/images/react.png";
import NextLogo from "../../../../public/images/nextjs.png";
import HtmlLogo from "../../../../public/images/html.svg";
import CssLogo from "../../../../public/images/css.svg";

const Skills = () => {
  return (
    <div
      className="flex flex-col w-full gap-20 justify-center items-center"
      id="skills"
    >
      <p className="w-full h-fit text-6xl justify-center items-center flex">
        Skills:
      </p>
      <div className="w-1/2 h-auto flex overflow-hidden flex-wrap gap-5 justify-center items-center ">
        <span className="flex medium-radial-gradient justify-center items-center p-1 my-2 w-24 h-24 rounded-full  cursor-pointer ease-in hover:animate-pulse ">
          <span className="flex justify-center items-center p-2 w-full h-full rounded-full bg-[#251C31]">
            <Image src={NextLogo} alt="NextLogo" />
          </span>
        </span>
        <span className="flex medium-radial-gradient justify-center items-center p-1 my-2 w-24 h-24 rounded-full  cursor-pointer ease-in hover:animate-pulse ">
          <span className="flex justify-center items-center p-2 w-full h-full rounded-full bg-[#251C31]">
            <Image src={ReactLogo} alt="ReactLogo" width={50} height={50} />
          </span>
        </span>
        <span className="flex medium-radial-gradient justify-center items-center p-1 my-2 w-24 h-24 rounded-full  cursor-pointer ease-in hover:animate-pulse ">
          <span className="flex justify-center items-center p-4 w-full h-full rounded-full bg-[#251C31]">
            <Image src={TSLogo} alt="TSLogo" />
          </span>
        </span>
        <span className="flex medium-radial-gradient justify-center items-center p-1 my-2 w-24 h-24 rounded-full  cursor-pointer ease-in hover:animate-pulse ">
          <span className="flex justify-center items-center p-2 w-full h-full rounded-full bg-[#251C31]">
            <Image src={TailwindLogo} alt="TailwindLogo" />
          </span>
        </span>
        <span className="flex medium-radial-gradient justify-center items-center p-1 my-2 w-24 h-24 rounded-full  cursor-pointer ease-in hover:animate-pulse ">
          <span className="flex justify-center items-center p-2 w-full h-full rounded-full bg-[#251C31]">
            <Image src={JSLogo} alt="JSLogo" width={50} height={50} />
          </span>
        </span>
        <span className="flex medium-radial-gradient justify-center items-center p-1 my-2 w-24 h-24 rounded-full  cursor-pointer ease-in hover:animate-pulse ">
          <span className="flex justify-center items-center p-2 w-full h-full rounded-full bg-[#251C31]">
            <Image src={FigmaLogo} alt="FigmaLogo" />
          </span>
        </span>
        <span className="flex medium-radial-gradient justify-center items-center p-1 my-2 w-24 h-24 rounded-full  cursor-pointer ease-in hover:animate-pulse ">
          <span className="flex justify-center items-center p-2 w-full h-full rounded-full bg-[#251C31]">
            <Image src={GithubLogo} alt="GithubLogo" />
          </span>
        </span>
        <span className="flex medium-radial-gradient justify-center items-center p-1 my-2 w-24 h-24 rounded-full  cursor-pointer ease-in hover:animate-pulse ">
          <span className="flex justify-center items-center p-2 w-full h-full rounded-full bg-[#251C31]">
            <Image src={HtmlLogo} alt="HtmlLogo" width={40} height={40} />
          </span>
        </span>
        <span className="flex medium-radial-gradient justify-center items-center p-1 my-2 w-24 h-24 rounded-full  cursor-pointer ease-in hover:animate-pulse ">
          <span className="flex justify-center items-center p-2 w-full h-full rounded-full bg-[#251C31]">
            <Image src={CssLogo} alt="CssLogo" width={40} height={40} />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Skills;
