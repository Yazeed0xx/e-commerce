import {
  int,
  mysqlTable,
  serial,
  varchar,
  decimal,
  boolean,
  text,
  json,
  timestamp,
} from "drizzle-orm/mysql-core";
import { ref } from "process";

export const users = mysqlTable("users_table", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  refreshToken: varchar({ length: 255 }),
  isVerified: boolean().notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});

export const products = mysqlTable("products", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  price: decimal().notNull(),
  imageUrl: varchar({ length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});

export const userRelationships = mysqlTable("user_relationships", {});

export const profile = mysqlTable("profile", {
  id: serial().primaryKey(),
  userId: int().references(() => users.id),
  bio: text(),
  profilePicture: varchar({ length: 255 }),
  socialLinks: json(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});
