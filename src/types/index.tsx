import { ForwardRefExoticComponent } from "react";
import { LucideProps } from "lucide-react";

export type SideNavItem = {
    title: string;
    path: string;
    icon?: ForwardRefExoticComponent<LucideProps> | undefined;
    submenu?: boolean;
    submenuItems?: SideNavItem[];
    role?: string[]
}

export type SideNavItemGroup = {
    title: string;
    menuList: SideNavItem[];
}

export type LoginDataType = {
    email: string;
    password: string;
}

export type LocationResponse = {
    // data: ResponseData,
    data: LocationResponseDataValue[],
    message: string,
    status: boolean
}

type ResponseData = {
    current_page: number,
    first_page_url: string,
    from: number, 
    last_page: number,
    last_page_url: string,
    next_page_url: string,
    path: string,
    per_page: number,
    prev_page_url?: string,
    to: number,
    total: number,
    links: ResponseLink[],
    data: LocationResponseDataValue[]
}

type ResponseLink = {
    url: string,
    label: string,
    active: boolean
}

export type LocationResponseDataValue = {
    id: number,
    name: string,
    parent: string,
    slug: string,
    status: string,
    is_deleted: string,
    created_at: string,
    updated_at: string
}

export type CreateLocationType = {
    name: string,
    parent_id: number,
}

export type UpdateLocationType = {
    id: number,
    name: string,
    parent_id: number,
}

export type LocationDetailType = {
    message: string,
    status: boolean,
    data: LocationDetailData
}

export type LocationDetailData = {
    id: number,
    name: string,
    status: number,
    is_deleted: number,
    parent: {
        id: number,
        is_deleted: string,
        name: string,
        status: string,
    }
}