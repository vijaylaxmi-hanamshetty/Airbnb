import { LuBookOpen } from "react-icons/lu";
import { BsPersonCheckFill } from "react-icons/bs";
import { TiCameraOutline } from "react-icons/ti";
const Data = [
  {
    icon: <BsPersonCheckFill className="  text-pink-400 h-10 w-10 "/>,
    title: "Exposure to Hosts",
    description: "You'll be displayed on the experienced Co-Host page, where Hosts in your area can find your help.",
  },
  {
    icon: <TiCameraOutline  className=" text-pink-400 h-10 w-10"/>,
    title: "Specialised tools",
    description: ".Access a set of tools to help you manage your business your way. Receive a share of a booking’s payout, co-create listings and message new Hosts directly.",
  },
  {
    icon: <LuBookOpen className="text-pink-400 h-10 w-10"/>,
    title: "Resources and community",
    description: "Explore a series of educational resources on the tools you can use, and connect with an active community of experienced Co-Hosts who can help you get started.",
  },
];

export default Data;
