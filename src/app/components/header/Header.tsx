import Image from "next/image";
import Logo from "/public/images/logoportfolio.png";

const Header:React.FC = () => {
  return (
    <header className="w-full h-20 p-8 bg-[#1A0B2E] justify-between items-center flex">
      <Image src={Logo} alt="logo" width={90} height={40} />
      <ul className="w-1/2 h-fit flex justify-around items-center gap-5">
        <li className="cursor-pointer p-2 rounded-full hover:font-extrabold hover:animate-bounce">
          <a href="#home">Home</a>
        </li>
        
        <li className="cursor-pointer p-2 rounded-full hover:font-extrabold hover:animate-bounce">
          <a href="#skills">Skills</a>
        </li>
        <li className="cursor-pointer p-2 rounded-full hover:font-extrabold hover:animate-bounce">
          <a href="#projects">Projects</a>
        </li>
        <li className="cursor-pointer p-2 rounded-full hover:font-extrabold hover:animate-bounce">
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
