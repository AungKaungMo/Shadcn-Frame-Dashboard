import { useSidebarToggle } from "@/hooks/use-sidebar-toggle"
import { SideNavItemGroup } from "@/types"
import SidebarMenuItem from "./SidebarMenuItem";
import { checkRole } from "@/utils";
const sidebarMenuGroup = ({ menuGroup }: {
    menuGroup: SideNavItemGroup
}) => {
    const { toggleCollapse } = useSidebarToggle();
    return (
        <>
            {!toggleCollapse && (
                <h3 className=" pt-4 pl-3 font-semibold uppercase text-sm text-foreground">
                    {menuGroup.title}
                </h3>
            )}
            {
                menuGroup.menuList?.map((item, index) => (
                   !checkRole(item.role || []) && <SidebarMenuItem item={item} key={index} />
                ))
            }

        </>
    )
}

export default sidebarMenuGroup