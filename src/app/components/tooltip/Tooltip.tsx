import Link from "next/link";
import Image from "next/image";

interface ITooltipProps {
  href: string;
  title: string;
  src: string;
}
const Tooltip: React.FC<ITooltipProps> = ({ href, title, src }) => {
  return (
    <section className="flex justify-center items-center">
      <Link
        className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
        href={href}
      >
        <Image src={src} alt={title} width={26} height={26} />
        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
          {title}
        </span>
      </Link>
    </section>
  );
};

export default Tooltip;
