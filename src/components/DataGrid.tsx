import { FC } from "react";

import Table from "./Table";
import Button from "./Button";
import SelectAllCheckbox from "./SelectAllCheckbox";
import useGrid from "../hooks/useGrid";
import { sampleData } from "../data/sampleData";

const DataGrid: FC = () => {
  const {
    selectedRows,
    handleRowSelection,
    handleSelectAll,
    getSelectAllState,
    isDownloadEnabled,
    handleDownload,
  } = useGrid(sampleData);

  const { isChecked, isIndeterminate } = getSelectAllState();

  return (
    <div className="container">
      <div className="datagrid-head-section">
        <SelectAllCheckbox
          isChecked={isChecked}
          isIndeterminate={isIndeterminate}
          onChange={handleSelectAll}
          selectedCount={selectedRows.length}
        />
        <Button onClick={handleDownload} disabled={!isDownloadEnabled}>
          Download Selected
        </Button>
      </div>
      <Table
        data={sampleData}
        selectedRows={selectedRows}
        onSelect={handleRowSelection}
      />
    </div>
  );
};

export default DataGrid;
