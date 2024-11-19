"use client";

import { inventory } from "@/db/schema";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<typeof inventory.$inferSelect>[] = [
  {
    accessorKey: "cardId",
    header: "cardId",
  },
  {
    accessorKey: "card.name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "price",
  },
  {
    accessorKey: "quality",
    header: "Quality",
  },
  {
    accessorKey: "foil",
    header: "Foil",
  },
];
