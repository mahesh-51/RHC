import { MenuItems } from "../types/menutpes"

export const DASHBOARD_ARR = [
    "Total Number of Records",
    "Total Number of Courts",
    "Total Number of Files",
    "Todays Cases"
]

export const menuItems: MenuItems[] = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "About us",
        url: "/about"
    },
    {
        title: "Services",
        url: "/services"
    },
    {
        title: "Contact us",
        url: "/contact-us"
    }
]

export const AdminMenuItems: MenuItems[] = [
    {
        title: "DashBaord",
        url: "/dashboard"
    },
    {
        title: "Case Detail",
        url: "/case-Detail"
    },
    {
        title: "Court",
        url: "/court-list"
    },
    {
        title: "Daily case",
        url: "/cases"
    },
    {
        title: "Upload Files",
        url: "/upload-files"
    }
]