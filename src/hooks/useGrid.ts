import { useState } from "react";
import { IDataRow } from "../typings";
import useAreSelectedRowsAvailable from "./useAreSelectedRowsAvailable";

const useGrid = (data: IDataRow[]) => {
  const [selectedRows, setSelectedRows] = useState<IDataRow[]>([]);
  const isDownloadEnabled = useAreSelectedRowsAvailable(selectedRows);

  const handleRowSelection = (row: IDataRow) => {
    setSelectedRows((prev) =>
      prev.includes(row) ? prev.filter((item) => item !== row) : [...prev, row]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...data]);
    }
  };

  const getSelectAllState = () => {
    if (selectedRows.length === 0)
      return { isChecked: false, isIndeterminate: false };
    if (selectedRows.length === data.length)
      return { isChecked: true, isIndeterminate: false };
    return { isChecked: false, isIndeterminate: true };
  };

  const handleDownload = () => {
    const downloadedItems = data
      .filter((row) => selectedRows.includes(row) && row.status === "available")
      .map((row) => `Name: ${row.name} Device: ${row.device} Path: ${row.path}`)
      .join("\n\n");

    alert(`Downloaded Items\n${downloadedItems}`);
  };

  return {
    selectedRows,
    handleRowSelection,
    handleSelectAll,
    getSelectAllState,
    isDownloadEnabled,
    handleDownload,
  };
};

export default useGrid;
