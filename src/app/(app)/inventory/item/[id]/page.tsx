import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { db } from "@/db";
import { cards } from "@/db/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const card = await db.query.cards.findFirst({
    where: eq(cards.id, parseInt(id)),
  });
  if (!card) {
    return <div>Card not found</div>;
  }
  return (
    <div className="container py-10 grid gap-4 grid-cols-3 ">
      <div className="relative w-full fill-current">
        <Image
          className="rounded-sm"
          object-fit="cover"
          alt="Group Image"
          fill={true}
          src="https://cards.scryfall.io/normal/front/1/9/19586946-a6a6-4154-a544-15a052483f96.jpg?1708742099"
        />
      </div>
    </div>
  );
}
