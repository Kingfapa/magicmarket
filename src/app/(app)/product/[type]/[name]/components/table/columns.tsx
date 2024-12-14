"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronRight, MoreHorizontal, ShoppingCart } from "lucide-react";
import { Tables } from "types/supabase";
import Form from "next/form";

export const columns: ColumnDef<Tables<"inventory">>[] = [
  {
    accessorKey: "condition.name",
    header: "Condition",
  },

  {
    accessorKey: "language.name",
    header: "Language",
  },
  {
    accessorKey: "item.name",
    header: "Name",
  },
  {
    accessorKey: "item.set.name",
    header: "Set",
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row, cell }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium text-right">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <Form action={console.log}>
          <Button variant="outline" size="icon">
            <ShoppingCart />
          </Button>
        </Form>
      );
    },
  },
];
