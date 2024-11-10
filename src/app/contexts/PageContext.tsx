"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
