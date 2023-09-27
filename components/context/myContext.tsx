"use client";

// themes.tsx
import React, { createContext, useContext, ReactNode } from "react";

interface MyContextType {
  isDeleteModal: boolean;
  //   toggleDeleteMode: () => void;
  setIsDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function MyContextProvider({ children }: { children: ReactNode }) {
  const [isDeleteModal, setIsDeleteModal] = React.useState<boolean>(false);

  //   const toggleDeleteMode = () => {
  //     setDeleteModal(true);
  //   };

  const contextValue = {
    isDeleteModal,
    setIsDeleteModal,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}
