"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type PageContextType = {
  page: string | null;
  setPage: (role: string | null) => void;
};

const PageContext = createContext<PageContextType>({
  page: null,
  setPage: () => {},
});

export const usePage = () => useContext(PageContext);

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState<string | null>(null);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
