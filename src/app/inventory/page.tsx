import { db } from "@/db";

import { columns } from "./columns";
import { DataTable } from "./data-table";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await db.query.inventory.findMany({
    with: {
      card: true,
    },
  });
  console.log(data);

  return (
    <div className="container mx-auto">
      <main>
        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
}
