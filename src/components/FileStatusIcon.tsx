import { FC } from "react";

interface IFileStatusIcon {
  status: "available" | "scheduled";
}

export const FileStatusIcon: FC<IFileStatusIcon> = ({ status }) => {
  return status === "available" ? (
    <div className="green-icon">{null}</div>
  ) : null;
};
