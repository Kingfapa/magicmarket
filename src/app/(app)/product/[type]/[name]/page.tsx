import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { createClient } from "@/supabase/server";
import { notFound } from "next/navigation";
import { DataTable } from "./components/table/data-table";
import { columns } from "./components/table/columns";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ type: string; name: string }>;
}) {
  const supabase = await createClient();

  const cards = await supabase
    .from("items")
    .select(
      `
      *,
      set:sets (
        name
      )`
    )
    .ilike("name", (await params).name)
    .single();
  if (cards.error) {
    notFound();
  }

  console.log(cards);

  const inventory = await supabase
    .from("inventory")
    .select(
      `
      *,
      condition:conditions (
        name
      ),
      item:items (
        name,
        set:sets (
          name
        )
      ),
      language:languages (
        name
      )
    `
    )
    .eq("item", cards.data.id);

  console.log(inventory);

  if (inventory.error) {
    notFound();
  }

  return (
    <div className="container flex flex-col min-h-screen gap-10 py-10 mx-auto border">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>{cards.data.name}</CardTitle>
        </CardHeader>
        <CardContent>Found in: </CardContent>
      </Card>
      <div className="flex gap-10">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Filter</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <DataTable columns={columns} data={inventory.data} /> */}
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Available for sale</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={inventory.data} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
