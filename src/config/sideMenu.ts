import { ISideNavType } from "../types/adminTypes";
import {
  DashboardOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FaChevronDown } from "react-icons/fa";
import { RiFeedbackLine } from "react-icons/ri";
import { FaQ } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoReport } from "react-icons/go";
import { TbPrompt } from "react-icons/tb";

export const sideNavItems: ISideNavType[] = [
  {
    key: "dashboard",
    url: "/",
    label: "Dashboard", 
    icon: DashboardOutlined,
  }
];
