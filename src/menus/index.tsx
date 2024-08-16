import { SideNavItemGroup } from "@/types";
import { LayoutDashboard, LocateIcon, PartyPopper, ShoppingBag, User } from "lucide-react";


export const SideNavbar: SideNavItemGroup[] = [
    {
        title: 'Dashboard',
        menuList: [
            {
                title: "Dashboard",
                path: "/",
                icon: LayoutDashboard,
                role: ['developer']
            },
            {
                title: "Products",
                path: "/products",
                icon: ShoppingBag,
                submenu: true,
                submenuItems: [
                    { title: 'All', path: '/products/all' },
                    { title: 'New', path: '/products/new' },
                ],
                role: ['']
            },
            {
                title: "Orders",
                path: "/orders",
                icon: PartyPopper,
                role: ['developer']
            },
        ]
    },
    {
        title: 'Master Data',
        menuList: [
            {
                title: "Location",
                path: "/location",
                icon: LocateIcon,
                role: ['developer']
            },
            {
                title: "UserManagement",
                path: "/user-management",
                icon: User,
                submenu: true,
                submenuItems: [
                    { title: 'User', path: '/user-management/user' },
                    { title: 'Role', path: '/user-management/role' },
                ],
                role: ['developer']
            },

        ]
    }
]
