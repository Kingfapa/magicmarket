import { db } from "@/db";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await db.query.inventory.findMany({
    with: {
      card: true,
    },
  });
  console.log(data);

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
              <DataTable columns={columns} data={data} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
