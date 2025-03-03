import React from "react";

interface IButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({
  onClick,
  disabled,
  children,
  className = "",
}) => {
  return (
    <button
      className={`datagrid-download-cta ${
        disabled ? "disabled" : "enabled"
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
