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
      <SelectTrigger className="w-[180px]">
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

export function Filter() {
  const [foil, setFoil] = useQueryState<CheckedState>("foil", {
    defaultValue: false,
    parse: (value) => value === "true",
  });
  const [condition, setCondition] = useQueryState("condition", {
    defaultValue: "",
    shallow: false,
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter</CardTitle>
        <CardDescription>Filter your inventory</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <FilterCheckbox param="foil" label="Foil" />
        <FilterSelect
          param="Language"
          label="Language"
          options={[
            { label: "English", value: "english" },
            { label: "Swedish", value: "swedish" },
          ]}
        />
        <Select value={condition} onValueChange={setCondition}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Condition" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Condition</SelectLabel>
              <SelectItem value="NM">Near Mint</SelectItem>
              <SelectItem value="EX">Excellent</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Language</SelectLabel>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="swedish">Swedish</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
