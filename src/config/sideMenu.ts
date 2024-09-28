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
    url: "/admin/dashboard",
    label: "Dashboard", 
    icon: DashboardOutlined,
  },
  {
    key: "cases",
    url: "/admin/cases",
    label: "Cases", 
    icon: DashboardOutlined,
  },
  {
    key: "case-detail",
    url: "/admin/case-detail",
    label: "Case Deatil", 
    icon: DashboardOutlined,
  },
  {
    key: "court-list",
    url: "/admin/court-list",
    label: "Court List", 
    icon: DashboardOutlined,
  },
  {
    key: "upload-files",
    url: "/admin/upload-files",
    label: "Upload", 
    icon: DashboardOutlined,
  },
];
