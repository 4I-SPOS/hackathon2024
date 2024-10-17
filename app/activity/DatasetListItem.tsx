"use client"

import { useState } from "react";
import { Checkbox } from "@nextui-org/react";

interface IDatasetListItemProps {
  name: string;
  isChecked: boolean;
}

export default function DatasetListItem({ name, isChecked }: IDatasetListItemProps) {
  const [checked, setChecked] = useState(isChecked);

  const handleDivClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div
      onClick={handleDivClick}
      className="bg-white cursor-pointer flex justify-between outline outline-1 outline-neutral-300 rounded-lg pl-3 pr-1 py-2"
    >
      <p>{name}</p>
      <Checkbox isSelected={checked} onClick={handleDivClick} />
    </div>
  );
}
