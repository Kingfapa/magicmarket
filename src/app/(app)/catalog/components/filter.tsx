"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useQueryState } from "nuqs";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { Table } from "@tanstack/react-table";
import { Database } from "../../../../../types/supabase";
import { HelpCircle } from "lucide-react";

const FilterSelect = ({
  param,
  label,
  options,
}: {
  param: string;
  label: string;
  options: { value: string; label: string }[];
}) => {
  const [value, setValue] = useQueryState(param, {
    defaultValue: "",
    shallow: false,
  });
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const FilterCheckbox = ({ param, label }: { param: string; label: string }) => {
  const [checked, setChecked] = useQueryState<CheckedState>(param, {
    defaultValue: false,
    parse: (value) => value === "true",
  });
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={param} checked={checked} onCheckedChange={setChecked} />
      <label
        htmlFor={param}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export function Filter<TData>({ table }: { table: Table<TData> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter</CardTitle>
        <CardDescription>Filter your inventory</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <FilterSelect
          param="set"
          label="Set"
          options={[
            { label: "Alpha", value: "alpha" },
            { label: "Beta", value: "beta" },
          ]}
        />
        <FilterCheckbox param="foil" label="Foil" />
        <FilterSelect
          param="language"
          label="Language"
          options={[
            { label: "English", value: "english" },
            { label: "Swedish", value: "swedish" },
          ]}
        />
        <FilterSelect
          param="condition"
          label="Condition"
          options={[
            { label: "Near Mint", value: "NM" },
            { label: "Excellent", value: "EX" },
          ]}
        />
      </CardContent>
    </Card>
  );
}
