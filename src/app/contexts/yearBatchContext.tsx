import React, {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

// Tipe data untuk context
interface YearBatchContextType {
  selectedBatch: string;
  setSelectedBatch: (batch: string) => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Inisialisasi Context
export const YearBatchContext = createContext<YearBatchContextType | undefined>(
  undefined
);

// Provider untuk Context
export const YearBatchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedBatch, setSelectedBatch] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <YearBatchContext.Provider
      value={{ selectedBatch, setSelectedBatch, isOpen, setIsOpen }}
    >
      {children}
    </YearBatchContext.Provider>
  );
};
