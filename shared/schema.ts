import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, jsonb, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const lotteryBets = pgTable("lottery_bets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  walletAddress: text("wallet_address").notNull(),
  selectedNumbers: jsonb("selected_numbers").notNull(), // Array of 5 numbers
  amount: integer("amount").notNull().default(10000), // QUBIC amount
  drawTick: integer("draw_tick").notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
  transactionHash: text("transaction_hash"),
});

export const lotteryDraws = pgTable("lottery_draws", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  drawTick: integer("draw_tick").notNull().unique(),
  winningNumbers: jsonb("winning_numbers").notNull(), // Array of 5 numbers
  jackpotAmount: integer("jackpot_amount").notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const walletBetCounts = pgTable("wallet_bet_counts", {
  walletAddress: text("wallet_address").primaryKey(),
  currentDrawTick: integer("current_draw_tick").notNull(),
  betCount: integer("bet_count").notNull().default(0),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertLotteryBetSchema = createInsertSchema(lotteryBets).omit({
  id: true,
  createdAt: true,
});

export const insertLotteryDrawSchema = createInsertSchema(lotteryDraws).omit({
  id: true,
  createdAt: true,
});

export const insertWalletBetCountSchema = createInsertSchema(walletBetCounts).omit({
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type LotteryBet = typeof lotteryBets.$inferSelect;
export type InsertLotteryBet = z.infer<typeof insertLotteryBetSchema>;
export type LotteryDraw = typeof lotteryDraws.$inferSelect;
export type InsertLotteryDraw = z.infer<typeof insertLotteryDrawSchema>;
export type WalletBetCount = typeof walletBetCounts.$inferSelect;
export type InsertWalletBetCount = z.infer<typeof insertWalletBetCountSchema>;
