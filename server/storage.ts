import { type User, type InsertUser, type LotteryBet, type InsertLotteryBet, type LotteryDraw, type InsertLotteryDraw, type WalletBetCount, type InsertWalletBetCount } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Lottery operations
  createBet(bet: InsertLotteryBet): Promise<LotteryBet>;
  getBetsByWallet(walletAddress: string, drawTick: number): Promise<LotteryBet[]>;
  getCurrentDraw(): Promise<LotteryDraw | undefined>;
  createDraw(draw: InsertLotteryDraw): Promise<LotteryDraw>;
  getWalletBetCount(walletAddress: string, drawTick: number): Promise<WalletBetCount | undefined>;
  updateWalletBetCount(walletBetCount: InsertWalletBetCount): Promise<WalletBetCount>;
  getRecentWinners(): Promise<LotteryBet[]>;
  getCurrentJackpot(): Promise<number>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private lotteryBets: Map<string, LotteryBet>;
  private lotteryDraws: Map<string, LotteryDraw>;
  private walletBetCounts: Map<string, WalletBetCount>;
  private currentDrawTick: number = 13847291;

  constructor() {
    this.users = new Map();
    this.lotteryBets = new Map();
    this.lotteryDraws = new Map();
    this.walletBetCounts = new Map();
    
    // Initialize with current draw
    this.initializeCurrentDraw();
    this.initializeSampleData();
  }

  private initializeCurrentDraw() {
    const currentDraw: LotteryDraw = {
      id: randomUUID(),
      drawTick: this.currentDrawTick,
      winningNumbers: [7, 15, 22, 37, 43],
      prizePool: 1500000000000, // 1.5M QUBIC (60% of total collected)
      rolloverAmount: 0,
      totalBets: 250, // 250 tickets sold
      totalRevenue: 2500000000000, // 2.5M QUBIC total revenue (250 × 10,000)
      minimumJackpotUsed: 0,
      qubicFoundationShare: 125000000000, // 5% = 125K QUBIC
      developerShare: 100000000000, // 4% = 100K QUBIC
      franchiseeShare: 775000000000, // 31% = 775K QUBIC
      hasWinner: false,
      winnerWallet: null,
      isActive: true,
      createdAt: new Date(),
    };
    this.lotteryDraws.set(currentDraw.id, currentDraw);
  }

  private initializeSampleData() {
    // Sample recent winners
    const winners = [
      {
        id: randomUUID(),
        walletAddress: "FKJH...8NK2",
        selectedNumbers: [3, 17, 29, 41, 48],
        amount: 10000000000, // 10,000 QUBIC
        drawTick: this.currentDrawTick - 1,
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
        transactionHash: "0xabc123",
      },
      {
        id: randomUUID(),
        walletAddress: "MQPL...7XR9",
        selectedNumbers: [5, 12, 33, 44, 50],
        amount: 10000000000, // 10,000 QUBIC
        drawTick: this.currentDrawTick - 2,
        createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
        transactionHash: "0xdef456",
      },
      {
        id: randomUUID(),
        walletAddress: "BWQT...4ML5",
        selectedNumbers: [8, 21, 35, 39, 47],
        amount: 10000000000, // 10,000 QUBIC
        drawTick: this.currentDrawTick - 3,
        createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000),
        transactionHash: "0xghi789",
      },
    ];

    winners.forEach(winner => {
      this.lotteryBets.set(winner.id, winner);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBet(bet: InsertLotteryBet): Promise<LotteryBet> {
    const id = randomUUID();
    const lotteryBet: LotteryBet = {
      ...bet,
      id,
      amount: bet.amount || 10000000000,
      createdAt: new Date(),
      transactionHash: `0x${randomUUID().replace(/-/g, '')}`,
    };
    this.lotteryBets.set(id, lotteryBet);
    return lotteryBet;
  }

  async getBetsByWallet(walletAddress: string, drawTick: number): Promise<LotteryBet[]> {
    return Array.from(this.lotteryBets.values()).filter(
      (bet) => bet.walletAddress === walletAddress && bet.drawTick === drawTick
    );
  }

  async getCurrentDraw(): Promise<LotteryDraw | undefined> {
    return Array.from(this.lotteryDraws.values()).find(
      (draw) => draw.isActive
    );
  }

  async createDraw(draw: InsertLotteryDraw): Promise<LotteryDraw> {
    const id = randomUUID();
    const lotteryDraw: LotteryDraw = {
      ...draw,
      id,
      rolloverAmount: draw.rolloverAmount ?? 0,
      totalBets: draw.totalBets ?? 0,
      totalRevenue: draw.totalRevenue ?? 0,
      minimumJackpotUsed: draw.minimumJackpotUsed ?? 0,
      qubicFoundationShare: draw.qubicFoundationShare ?? 0,
      developerShare: draw.developerShare ?? 0,
      franchiseeShare: draw.franchiseeShare ?? 0,
      hasWinner: draw.hasWinner ?? false,
      winnerWallet: draw.winnerWallet ?? null,
      isActive: draw.isActive ?? true,
      createdAt: new Date(),
    };
    this.lotteryDraws.set(id, lotteryDraw);
    return lotteryDraw;
  }

  async getWalletBetCount(walletAddress: string, drawTick: number): Promise<WalletBetCount | undefined> {
    const key = `${walletAddress}-${drawTick}`;
    return this.walletBetCounts.get(key);
  }

  async updateWalletBetCount(walletBetCount: InsertWalletBetCount): Promise<WalletBetCount> {
    const key = `${walletBetCount.walletAddress}-${walletBetCount.currentDrawTick}`;
    const existing = this.walletBetCounts.get(key);
    
    const updated: WalletBetCount = {
      ...walletBetCount,
      betCount: walletBetCount.betCount || 0,
      updatedAt: new Date(),
    };
    
    this.walletBetCounts.set(key, updated);
    return updated;
  }

  async getRecentWinners(): Promise<LotteryBet[]> {
    // Return recent bets that match winning patterns (simplified for demo)
    return Array.from(this.lotteryBets.values())
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
      .slice(0, 5);
  }

  async getCurrentJackpot(): Promise<number> {
    const currentDraw = await this.getCurrentDraw();
    // Return current prize pool (60% of collected + any rollover)
    return currentDraw ? (currentDraw.prizePool + currentDraw.rolloverAmount) : 2500000000;
  }
}

export const storage = new MemStorage();
