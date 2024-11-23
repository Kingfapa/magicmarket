import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { taskSchema } from "./data/schema";
import { db } from "@/db";
import { cards, inventory } from "@/db/schema";
import { inArray, isNotNull, sql } from "drizzle-orm";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/(app)/tasks/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  // const data = await db.query.inventory.findMany({
  //   where: isNotNull(inventory.cardId),
  // });

  // console.log(data);

  // const cardss = await db.query.cards.findMany({
  //   where: inArray(
  //     cards.id,
  //     data.map((d) => d.cardId)
  //   ),
  // });

  // console.log(cardss);

  return (
    <div className="container py-6">
      <section>
        <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
          <div className="md:hidden">
            <Image
              src="/examples/tasks-light.png"
              width={1280}
              height={998}
              alt="Playground"
              className="block dark:hidden"
            />
            <Image
              src="/examples/tasks-dark.png"
              width={1280}
              height={998}
              alt="Playground"
              className="hidden dark:block"
            />
          </div>
          <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Welcome back!
                </h2>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  The People of the Kingdom
                </h2>
                <p className="text-muted-foreground">
                  Here&apos;s a list of your tasks for this month!
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <UserNav />
              </div>
            </div>
            <DataTable data={tasks} columns={columns} />
          </div>
        </div>
      </section>
    </div>
  );
}
