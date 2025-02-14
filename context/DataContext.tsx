"use client"; // required in next.js 13+ which uses server side rendering

import React, { createContext, useContext, useState, ReactNode } from "react";
import { MenuTab } from "../types/sidebar.interface";

interface DataContextType {
  menuTab: MenuTab;
  setMenuTab: React.Dispatch<React.SetStateAction<MenuTab>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [menuTab, setMenuTab] = useState<MenuTab>("Home");

  return (
    <DataContext.Provider
      value={{
        menuTab,
        setMenuTab,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
