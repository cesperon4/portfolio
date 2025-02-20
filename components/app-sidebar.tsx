import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SidebarItem } from "./sidebar-item";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

import { Footer } from "./footer";

export function AppSidebar() {
  return (
    <Sidebar className="w-64 font-sans">
      <SidebarHeader className="p-4 text-primaryColor border-b bg-secondaryColor">
        <div className="w-12 h-12  text-gray-50 rounded-full flex items-center justify-center border-4 border-primaryColor">
          <h1 className="text-lg font-semibold">CE</h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="flex-grow p-4">
        <SidebarGroup className="space-y-2">
          <SidebarItem icon={<FaHome />} name={"Home"} />
          <SidebarItem icon={<FaUser />} name={"About"} />
          <SidebarItem icon={<FaBriefcase />} name={"Projects"} />
          <SidebarItem icon={<FaEnvelope />} name={"Contact"} />
          <SidebarItem icon={<IoIosDocument />} name={"Resume"} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Footer sidebar={false} />
      </SidebarFooter>
    </Sidebar>
  );
}
