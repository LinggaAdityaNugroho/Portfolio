import { FaHtml5, FaCss3Alt, FaPhp, FaLaravel, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiCisco, SiMikrotik } from "react-icons/si";

export const items = [
  {
    icon: <FaHtml5 className="text-white" />,
    label: "HTML",
    color: "#F54927",
  },
  {
    icon: <FaCss3Alt className="text-white" />,
    label: "CSS",
    color: "#2652E6",
  },
  {
    icon: <IoLogoJavascript className="text-white" />,
    label: "JavaScript",
    color: "#D7BC38",
  },
  {
    icon: <RiTailwindCssFill className="text-white" />,
    label: "Tailwind",
    color: "#3EBFF8",
  },
  {
    icon: <FaPhp className="text-white" />,
    label: "PHP",
    color: "#7B7FB5",
  },
  {
    icon: <FaLaravel className="text-white" />,
    label: "Laravel",
    color: "#FF3427",
  },
  {
    icon: <SiMysql className="text-white" />,
    label: "MySQL",
    color: "#4A7DA4",
    type: "image",
  },
  {
    icon: <FaGithub className="text-white" />,
    label: "GitHub",
    color: "#22262A",
  },
  {
    icon: <SiCisco className="text-white" />,
    label: "Cisco",
    color: "#22262A",
  },
  {
    icon: <SiMikrotik className="text-white" />,
    label: "Mikrotik",
    color: "#22262A",
  },
];
