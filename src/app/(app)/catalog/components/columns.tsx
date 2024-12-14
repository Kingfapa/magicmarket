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
    accessorKey: "item.name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Item" />
    ),
  },
  {
    accessorKey: "foil",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Foil" />
    ),
  },
  // {
  //   accessorKey: "item.type.name",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Type" />
  //   ),
  // },
  {
    accessorKey: "item.set.name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Set" />
    ),
  },
  {
    accessorKey: "condition.name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Condition" />
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
  },
  {
    accessorKey: "language.name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Language" />
    ),
  },
];
