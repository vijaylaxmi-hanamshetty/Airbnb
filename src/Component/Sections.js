import React from "react";
import { FiTrendingUp } from "react-icons/fi";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import img2 from "../Images/img2.png";


const sectionsData = [
  {
    icon: <FiTrendingUp className="h-7 lg:h-10  w-20 lg:w-25" />,
    title: "Develop your partnerships with Hosts",
    description:
      "By becoming an experienced Co-Host, you're allowing potential Hosts to contact you to learn about your services. You define the terms of your collaboration and determine your fee.",
    image: img2,
  },
  {
    icon: <HiOutlineHandThumbUp className="h-7 lg:h-10   w-20 lg:w-25" />,
    title: "Help ensure Hosts’ and guests’ satisfaction",
    description:
      "Welcoming guests, cleaning, maintaining homes: whatever your scope of services, you can help create the best experience for both guests and the Hosts you support by making quality your top priority.",
    image: img3,
  },
  {
    icon: <BsStars className="h-7  lg:h-10  w-20 lg:w-25" />,
    title: "Work independently at your own pace",
    description:
      "You decide what works best for you. Whatever your goals, our tools and the community of experienced Co-Hosts are there to help you achieve them.",
    image: img4,
  },
 
];
export default sectionsData;
