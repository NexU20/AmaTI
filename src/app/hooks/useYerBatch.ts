import { useContext } from "react";
import { YearBatchContext } from "../contexts/yearBatchContext";

export const useYearBatch = () => {
  const context = useContext(YearBatchContext);
  if (!context) {
    throw new Error("useYearBatch must be used within a YearBatchProvider");
  }
  return context;
};
