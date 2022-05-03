import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineHome,
  AiOutlineMoneyCollect,
  AiOutlineUser,
} from "react-icons/ai";
import { FaCog, FaOpencart } from "react-icons/fa";
import { SidebarItem } from "../models/SidebarItem";

export const SidebarData: SidebarItem[] = [
  {
    title: "Home1",
    path: "/home",
    icon: <AiOutlineHome />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: "Child11",
        path: "/home/child11",
        icon: <AiOutlineUser />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
          {
            title: "Chil111",
            path: "/home/child11/child111",
            icon: <AiOutlineUser />,
          },
        ],
      },
      {
        title: "Child12",
        path: "/home/child12",
        icon: <AiOutlineMoneyCollect />,
      },
      {
        title: "Child13",
        path: "/home/child13",
        icon: <FaOpencart />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: "Child131",
                path: "/child13/child131",
                icon: <AiOutlineUser />,
            }
        ],
      },
      {
        title: "Child14",
        path: "/home/child14",
        icon: <FaCog />,
      },
    ]
  },
  {
    title: "Home2",
    path: "/home2",
    icon: <FaOpencart />,
  }
];
