"use server";

import { db } from "@/db";
import { cards, insertInventorySchema, inventory } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createInventory = async (formData: FormData): Promise<void> => {
  // Create a new inventory item.
  try {
    const { data, success, error } = insertInventorySchema.safeParse({
      cardId: parseInt(formData.get("cardId") as string),
      price: formData.get("price"),
      quantity: parseInt(formData.get("quantity") as string),
      quality: formData.get("quality"),
    });
    if (!success) {
      throw new Error(`Invalid data: ${error.message}`);
    }
    const card = await db.query.cards.findFirst({
      where: eq(cards.id, data.cardId),
    });
    // check if the card exists
    if (!card) {
      throw new Error("Card not found");
    }
    // insert the inventory item
    await db.insert(inventory).values(data);
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while creating the inventory item.");
  }
};
