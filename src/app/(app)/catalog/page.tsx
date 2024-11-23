import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { createClient } from "@/supabase/server";

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("inventory").select();

  console.log(data, error);

  return (
    <div className="container mx-auto py-10 border min-h-screen gap-10 flex flex-col">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Black Lotus</CardTitle>
        </CardHeader>
        <CardContent>asdasds</CardContent>
      </Card>
      <div className="flex gap-4">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Filter</CardTitle>
              <CardDescription>Filter your inventory</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Foil
                </label>
              </div>
              <Select>
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
        </div>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Black Lotus</CardTitle>
          </CardHeader>
          <CardContent>
            {data && <DataTable columns={columns} data={data} />}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
