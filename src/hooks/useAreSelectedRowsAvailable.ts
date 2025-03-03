import { useMemo } from "react";
import { IDataRow } from "../typings";

const useAreSelectedRowsAvailable = (selectedRows: IDataRow[]): boolean => {
  return useMemo(() => {
    return (
      selectedRows.length > 0 &&
      selectedRows.every((row) => row.status === "available")
    );
  }, [selectedRows]);
};

export default useAreSelectedRowsAvailable;
