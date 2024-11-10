"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

type Role = "mhs" | "prodi" | "ortu";

type RoleContextType = {
  role: Role;
  setRole: (role: Role) => void;
};

const RoleContext = createContext<RoleContextType>({
  role: "mhs",
  setRole: () => {},
});

export const useRole = () => useContext(RoleContext);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>("mhs");

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
