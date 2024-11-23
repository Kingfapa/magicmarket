"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Database } from "../../../../types/supabase";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Database["public"]["Tables"]["inventory"]>[] = [
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
