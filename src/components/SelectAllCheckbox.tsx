import React from "react";

interface ISelectAllCheckboxProps {
  isChecked: boolean;
  isIndeterminate: boolean;
  selectedCount: number;
  onChange: () => void;
}

const SelectAllCheckbox: React.FC<ISelectAllCheckboxProps> = ({
  isChecked,
  isIndeterminate,
  selectedCount,
  onChange,
}) => {
  return (
    <div className="datagrid-checkbox-container">
      <input
        type="checkbox"
        id="select-all-checkbox" // ✅ Unique ID for accessibility
        className="datagrid-checkbox"
        checked={isChecked}
        ref={(el: HTMLInputElement | null) => {
          if (el) el.indeterminate = isIndeterminate;
        }}
        onChange={onChange}
      />
      <span>
        {selectedCount ? `${selectedCount} Selected` : "None Selected"}
      </span>
    </div>
  );
};

export default SelectAllCheckbox;
