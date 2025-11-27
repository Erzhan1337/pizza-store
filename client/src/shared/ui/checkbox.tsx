import React from "react";
import { Check } from "lucide-react";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode; // Например, число товаров
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const Checkbox: React.FC<FilterCheckboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="flex items-center flex-1 cursor-pointer select-none">
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          className="peer sr-only"
        />

        <div
          className={`
          w-6 h-6 mr-2 rounded-[8px] flex items-center justify-center transition-all duration-200
          bg-gray-100 border-none
          peer-checked:bg-primary peer-checked:text-white
          group-hover:opacity-80
        `}
        >
          {checked && <Check size={16} strokeWidth={3} />}
        </div>

        <span className="leading-none text-base font-normal">{text}</span>
      </label>

      {endAdornment}
    </div>
  );
};
