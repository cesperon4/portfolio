import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SidebarItem } from "./sidebar-item";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

export function AppSidebar() {
  return (
    <Sidebar className="w-64 h-full bg-blue-500 text-white flex flex-col font-sans">
      <SidebarHeader className="p-4 text-blue-400">
        <h1 className="text-xl font-semibold">Christian Esperon</h1>
      </SidebarHeader>
      <SidebarContent className="flex-grow p-4">
        <SidebarGroup className="space-y-2">
          <SidebarItem icon={<FaHome />} name={"Home"} />
          <SidebarItem icon={<FaUser />} name={"About"} />
          <SidebarItem icon={<FaBriefcase />} name={"Portfolio"} />
          <SidebarItem icon={<FaEnvelope />} name={"Contact"} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="text-sm text-blue-400">&copy; 2025 My Portfolio</p>
      </SidebarFooter>
    </Sidebar>
  );
}
