import { FC, memo } from "react";
import { FileStatusIcon } from "./FileStatusIcon";

import { IDataRow } from "../typings";

interface IDataRowProps {
  row: IDataRow;
  isSelected: boolean;
  onSelect: (name: string) => void;
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
          onChange={() => onSelect(row.name)}
        />
      </td>
      <td>{row.name}</td>
      <td>{row.device}</td>
      <td>{row.path}</td>
      <td className="file-status-container">
        {row.status === "available" && (
          <span>
            <FileStatusIcon isAvailable={row.status === "available"} />
          </span>
        )}
        {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
      </td>
    </tr>
  )
);

export default DataRowComponent;
