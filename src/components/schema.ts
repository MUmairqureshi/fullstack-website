import {
    pgTable,
    serial,
    text,
    timestamp,
    integer,
    index,
    date,
    uniqueIndex,
  } from 'drizzle-orm/pg-core';
  // import { InferModel } from "drizzle-o.rm";
  
  import { InferModel, desc } from "drizzle-orm";
import { varchar } from 'drizzle-orm/mysql-core';
  
  export const UsersTable = pgTable(
      "dommz_entities ",
      {
        productId : serial("id").primaryKey().notNull(),
        productName: text("productName").notNull(),
        productDescription: text("productDescription").notNull(),
        productQuantity: integer("productQuantity").notNull(),
        productSlug: text("productSlug").notNull(),
        productPrice: integer("productPrice").notNull(),
        productImage : timestamp("productImage").notNull(),
  
      },
     
    );
  
  
    export type User = InferModel<typeof UsersTable>;
    export type NewUser = InferModel<typeof UsersTable, "insert">;;
    
   