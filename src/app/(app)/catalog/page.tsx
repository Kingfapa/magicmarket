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
import { Filter } from "./components/filter";
import { Database } from "../../../../types/supabase";

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  console.log(params);
  const supabase = await createClient();
  // const query = supabase.from("inventory").select(`
  //   *,
  //   condition (*),
  //   language (*),
  //   item (
  //     name,
  //     type (*),
  //     set (*)
  //   )`);

  const query = supabase.from("cards").select();

  const { data, error } = await query;

  console.log(data, error);

  return (
    <div className="container flex flex-col min-h-screen gap-10 py-10 mx-auto border">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Black Lotus</CardTitle>
        </CardHeader>
        <CardContent>asdasds</CardContent>
      </Card>
      <div className="flex gap-4">
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
