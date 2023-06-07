import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiFillCompass,
  AiOutlineMessage,
  AiFillMessage,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePlusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const menu = [
  {
    title: "home",
    icon: <AiOutlineHome />,
    activeIcon: <AiFillHome />,
  },
  {
    title: "search",
    icon: <AiOutlineSearch />,
    activeIcon: <AiOutlineSearch />,
  },
  {
    title: "explore",
    icon: <AiOutlineCompass />,
    activeIcon: <AiFillCompass />,
  },
  {
    title: "reels",
    icon: <RiVideoLine />,
    activeIcon: <RiVideoFill />,
  },
  {
    title: "message",
    icon: <AiOutlineMessage />,
    activeIcon: <AiFillMessage />,
  },
  {
    title: "notification",
    icon: <AiOutlineHeart />,
    activeIcon: <AiFillHeart />,
  },
  {
    title: "create",
    icon: <AiOutlinePlusCircle />,
    activeIcon: <AiFillPlusCircle />,
  },
  {
    title: "profile",
    icon: <CgProfile />,
    activeIcon: <CgProfile />,
  },
];
