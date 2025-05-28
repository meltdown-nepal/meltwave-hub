
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterDropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: any) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ 
  label, 
  value, 
  options, 
  onChange 
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full md:w-32">
        <SelectValue placeholder={`Filter by ${label}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map(option => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FilterDropdown;
