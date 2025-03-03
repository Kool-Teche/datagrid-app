import { FC, useCallback } from "react";
import DataRowComponent from "./DataRow";
import { IDataRow } from "../typings";

interface TableProps {
  data: IDataRow[];
  selectedRows: IDataRow[];
  onSelect: (row: IDataRow) => void;
}

const Table: FC<TableProps> = ({ data, selectedRows, onSelect }) => {
  return (
    <table className="datagrid-table-container">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Device</th>
          <th>Path</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          // ✅ Memoize onSelect for each row
          const memoizedOnSelect = useCallback(() => onSelect(row), [row]);

          return (
            <DataRowComponent
              key={row.name}
              row={row}
              isSelected={selectedRows.includes(row)}
              onSelect={memoizedOnSelect}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
