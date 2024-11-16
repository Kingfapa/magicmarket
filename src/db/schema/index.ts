import {
  pgTable,
  serial,
  integer,
  varchar,
  decimal,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const cards = pgTable("cards", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  set: varchar("set_name", { length: 100 }).notNull(),
  rarity: varchar("rarity", { length: 50 }).notNull(),
  color: varchar("color", { length: 50 }).notNull(),
  manaCost: varchar("mana_cost", { length: 50 }),
  type: varchar("type", { length: 100 }),
  power: integer("power"),
  toughness: integer("toughness"),
  description: varchar("description", { length: 255 }),
  imageUrl: varchar("image_url", { length: 255 }),
});

export const cardsRelations = relations(cards, ({ many }) => ({
  inventory: many(inventory),
}));

export const inventory = pgTable("inventory", {
  id: serial("id").primaryKey(),
  cardId: integer("card_id")
    .notNull()
    .references(() => cards.id),
  quantity: integer("quantity").notNull(),
  price: decimal("price", {
    precision: 10,
    scale: 2,
  }).notNull(),
  quality: varchar("quality", { length: 50 }).notNull().default("NM"),
  foil: boolean("foil").default(false),
  addedAt: timestamp("added_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const inventoryRelations = relations(inventory, ({ one }) => ({
  card: one(cards, {
    fields: [inventory.cardId],
    references: [cards.id],
  }),
}));
