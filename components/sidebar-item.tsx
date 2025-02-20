"use client";

import React from "react";
import { SIDEBAR_CLASSES } from "@/lib/constants";
import { useDataContext } from "../context/DataContext";
import { MenuTab } from "../types/sidebar.interface";

interface SidebarItemProps {
  name: MenuTab;
  icon: React.ReactNode;
}

export function SidebarItem({ name, icon }: SidebarItemProps) {
  const { menuTab, setMenuTab } = useDataContext();
  return (
    <li className="list-none">
      <div
        className={`flex p-2 rounded hover:bg-secondaryColor hover:text-white text-black cursor-pointer items-center mb-4 ${
          menuTab === name && "bg-secondaryColor text-gray-100"
        }`}
        onClick={() => {
          setMenuTab(name);
        }}
      >
        {<span className={SIDEBAR_CLASSES.icon}>{icon}</span>}
        {<span className="font-sans mr-2">{name}</span>}
      </div>
    </li>
  );
}
