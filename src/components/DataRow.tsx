import { FC, memo } from "react";
import { FileStatusIcon } from "./FileStatusIcon";

import { IDataRow } from "../typings";

interface IDataRowProps {
  row: IDataRow;
  isSelected: boolean;
  onSelect: (row: IDataRow) => void;
}

const DataRowComponent: FC<IDataRowProps> = memo(
  ({ row, isSelected, onSelect }) => (
    <tr>
      <td>
        <input
          type="checkbox"
          id={`checkbox-${row.name}`} // ✅ Unique ID for accessibility
          className="datagrid-checkbox"
          checked={isSelected}
          onChange={() => {
            onSelect(row);
          }}
        />
        <label
          className="datagrid-checkbox-label"
          htmlFor={`checkbox-${row.name}`}
        >{`checkbox-${row.name}`}</label>
      </td>
      <td>{row.name}</td>
      <td>{row.device}</td>
      <td>{row.path}</td>
      <td className="file-status-container">
        {row.status === "available" && (
          <span>
            <FileStatusIcon status={row.status} />
          </span>
        )}
        {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
      </td>
    </tr>
  )
);

export default DataRowComponent;
