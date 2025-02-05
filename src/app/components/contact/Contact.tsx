import Tooltip from "../tooltip/Tooltip";

const Contact: React.FC = () => {
  const list = [
    {
      href: "http://www.linkedin.com/in/mahsa-najafi-084809106",
      title: "Linkedin",
      icon: "/images/LinkedIn_icon.svg.png",
    },
    {
      href: "https://github.com/mahsanajafii",
      title: "Gitgub",
      icon: "/images/logo-github2.png",
    },
    {
      href: "https://t.me/Mahsanajafi",
      title: "Telegram",
      icon: "/images/telegram-icon.png",
    },
  ];
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center gap-5"
      id="contact"
    >
      <p className="w-full h-fit text-4xl justify-center items-center flex">
        Contact
      </p>
      <p>
        I'm currently looking to join a cross-functional team that values
        improving people's lives through accessible design. or have a project in
        mind? Let's connect.
      </p>
      <p>
        EMAIL:
        <b> mahsa.najafi2006@gmail.com</b>
      </p>
      <p>
        TEL:
        <b> 09120620115</b>
      </p>
      <div className="flex justify-center items-center w-full h-auto gap-4 mt-5">
        {list.map((item, index) => (
          <Tooltip
            href={item.href}
            title={item.title}
            key={index}
            src={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
