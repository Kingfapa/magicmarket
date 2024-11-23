import { columns } from "./columns";
import { DataTable } from "./data-table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { createClient } from "@/supabase/server";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = await createClient();

  // const { data, error } = await supabase.auth.getUser();

  const { data, error } = await supabase.from("inventory").select();

  console.log(data, error);

  return (
    <div className="container mx-auto py-10 border min-h-screen">
      <main className="flex flex-col gap-10">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Inventory</CardTitle>
              <CardDescription>Manage your inventory</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <DataTable columns={columns} data={data} /> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Inventory</CardTitle>
              <CardDescription>Manage your inventory</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <DataTable columns={columns} data={data} /> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Inventory</CardTitle>
              <CardDescription>Manage your inventory</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <DataTable columns={columns} data={data} /> */}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
