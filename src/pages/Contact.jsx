import SectionTitle from "../components/Atoms/Section/SectionTitle";
import Divider from "../components/Atoms/Divider/Divider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  const dataSosmed = [
    {
      titleGm: "Stay in touch",
      description: "Reach out via email for inquiries or collaborations.",
      titleButton: "Gmail",
      icon: <BiLogoGmail size={50} />,
    },
    {
      titleGm: "Follow my creative journey",
      description: "Follow my creative journey.",
      titleButton: "Instagram",
      icon: <IoLogoInstagram size={50} />,
    },
    {
      titleGm: "Let's Connect",
      description: "Connect with me professionally.",
      titleButton: "Linkedin",
      icon: <IoLogoLinkedin size={50} />,
    },
    {
      titleGm: "Explore the Code",
      description: "Explore my open-source work.",
      titleButton: "Github",
      icon: <FaGithub size={50} />,
    },
  ];

  const [singleItem, ...data] = dataSosmed;

  return (
    <div>
      <SectionTitle title={"Contact"} subtitle={"Let`s get in touch"} />

      <Divider />

      <SectionTitle
        subtitle={"Let`s get in touch"}
        className={"text-neutral-300 mt-2"}
      />

      <div className="flex flex-col gap-8 mt-4">
        {singleItem && (
          <Card className={"w-full  "}>
            <CardHeader>
              <CardTitle>{singleItem.titleGm}</CardTitle>
              <CardDescription>{singleItem.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between ">
                <Button
                  size="lg"
                  className={
                    "items-center place-self-end   hover:scale-110 transition-all "
                  }
                >
                  Go to {singleItem.titleButton} <MdOutlineArrowOutward />
                </Button>
                <div className="p-2  border-8 rounded-4xl">
                  {singleItem.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.map((item, i) => (
            <Card className={"w-full"} key={i}>
              <CardHeader>
                <CardTitle>{item.titleButton}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between ">
                  <Button
                    size="lg"
                    className={
                      "items-center place-self-end hover:scale-110 transition-all "
                    }
                  >
                    Go to {item.titleButton} <MdOutlineArrowOutward />
                  </Button>
                  <div className="p-2  border-8 rounded-4xl">{item.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
