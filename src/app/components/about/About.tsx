import Image from "next/image";
import Pic from "../../../../public/images/mypic.png";

const About = () => {
  return (
    <>
      <div
        className="w-full h-full flex justify-center items-center gap-5 "
        id="about"
      >
        <span className="relative">

        <span className="linear-gradient-bg w-72 h-72 "></span>
        <div className="h-72 w-72 rounded-full border-none flex justify-center items-center ">
          <Image src={Pic} alt="my pic" width={200} height={200} />
        </div>
        </span>

        <div className="w-fit h-fit flex flex-col gap-3">
          <p className="w-fit h-fit text-xl font-Preahvihear">
            A Front End Developer who
          </p>
          <p className="w-fit h-fit text-7xl ">Judges a book</p>
          <p className="w-fit h-fit text-7xl inline">
            by its <p className="text-[#7127BA] inline">cover</p>...
          </p>
          <p className="w-fit h-fit text-base ">
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3">
        <h1 className="w-fit h-fit text-4xl">
          I'm a Junior Front End Developer
        </h1>
        <p className="w-fit h-fit text-lg">
          {" "}
          I am Currently looking for a job in the field of front-end programming
        </p>
        <p>
          As a front-end developer with over a year of experience, I am
          continuously learning and developing my skills. I am passionate about
          new challenges and always seek opportunities for growth and
          improvement. This combination of a love for learning and enthusiasm
          for challenges drives me to deliver the best results in my work.
        </p>
      </div>
    </>
  );
};

export default About;
