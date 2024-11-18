import { db } from "@/db";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
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
      <main>
        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
}
