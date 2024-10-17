"use client";

interface DatasetListItemProps {
  name: string;
  isChecked: boolean;
  onClick: () => void;
}

export default function DatasetListItem({ name, isChecked, onClick }: DatasetListItemProps) {
  return (
    <div onClick={onClick} className={`flex justify-between items-center cursor-pointer`}>
      <span className="ml-2">{name}</span>
      <input className="h-5 w-5 text-neutral-600 bg-neutral-200 border-2 border-neutral-300 rounded-md focus:ring-neutral-500 focus:ring-offset-0 appearance-none checked:bg-neutral-900 checked:border-black transition duration-150 ease-in-out" type="checkbox" checked={isChecked} readOnly />
    </div>
  );
}