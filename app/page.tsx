import { PriceChart } from "./chart";
import { Suspense } from "react";

import { sql } from "@/lib/db";

export interface IPriceHistory {
  price_id: number
  inventory_id: number
  price: string
  recorded_at: string
}

async function getData() {
  const price_history = await sql<IPriceHistory[]>`SELECT * FROM price_history WHERE inventory_id = 1`

  return price_history;
}


export default async function Page() {
  const price_history = await getData()
  console.log(price_history)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Suspense fallback={<div>Loading...</div>}>
          <PriceChart data={price_history} />

        </Suspense>
      </main>
    </div>
  );
}
