import "./App.css";
import Home from "./pages/Home";
import { Button } from "./components/ui/button";
import Divider from "./components/Atoms/Divider/Divider";
import { FaCode, FaArrowRight } from "react-icons/fa";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  const dataSidebar = [
    {
      icon: <FaCode />,
      href: "#",
      title: "Home",
    },
    {
      icon: <FaCode />,
      href: "#",
      title: "About",
    },
    {
      icon: <FaCode />,
      href: "#",
      title: "Achievements",
    },
    {
      icon: <FaCode />,
      href: "#",
      title: "Project",
    },
  ];

  const getYear = new Date().getFullYear();

  return (
    <div className="px-10 py-5 grid grid-cols-4 gap-10">
      <div className=" h-full w-full md:col-span-1">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <img src="" alt="" className="rounded-full w-24 h-24 bg-red-300" />
          <h3 className="text-neutral-300 font-medium">Lingga Aditya</h3>
          <p className="text-neutral-300">@lingdty._</p>
        </div>
        <div className="flex w-full gap-4">
          <Button className={"flex-1"}>Dark</Button>
          <Button className={"flex-1"}>Language</Button>
        </div>

        <Divider />

        <div className="flex flex-col gap-6">
          {dataSidebar.map((item) => (
            <Button className={"w-full flex items-center justify-between "}>
              <span className="flex gap-4 items-center">
                {item.icon} {item.title}
              </span>{" "}
              <FaArrowRight />
            </Button>
          ))}
        </div>

        <Divider />

        <div className="flex flex-col items-center gap-1">
          <h3 className="text-neutral-300 font-medium">
            COPYRIGHT © {getYear}
          </h3>

          <p className="text-neutral-300">
            Lingga Aditya. All rights reserved.
          </p>
        </div>
      </div>

      <div className="col-span-4 md:col-span-3">
        {/* <Home /> */}
        <About />
      </div>
    </div>
  );
}

export default App;
