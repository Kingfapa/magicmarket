"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Database } from "../../../../../types/supabase";
import { DataTableColumnHeader } from "./data-table-column-header";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<
  Database["public"]["Tables"]["inventory"]["Row"]
>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
  },
  {
    accessorKey: "condition",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Condition"
        options={[
          { id: "NM", value: "NM" },
          { id: "EX", value: "EX" },
        ]}
      />
    ),
    filterFn: "arrIncludesSome",
  },
  {
    accessorKey: "language",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Language" />
    ),
  },
];
