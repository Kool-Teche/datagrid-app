import { FC } from "react";

interface IFileStatusIcon {
  isAvailable: boolean;
}

export const FileStatusIcon: FC<IFileStatusIcon> = ({ isAvailable }) => {
  return isAvailable ? <div className="green-icon">{null}</div> : null;
};
