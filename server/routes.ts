import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLotteryBetSchema, insertWalletBetCountSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get current lottery draw information
  app.get("/api/lottery/current-draw", async (req, res) => {
    try {
      const currentDraw = await storage.getCurrentDraw();
      if (!currentDraw) {
        return res.status(404).json({ message: "No active draw found" });
      }
      res.json(currentDraw);
    } catch (error) {
      res.status(500).json({ message: "Failed to get current draw" });
    }
  });

  // Get current jackpot amount
  app.get("/api/lottery/jackpot", async (req, res) => {
    try {
      const jackpot = await storage.getCurrentJackpot();
      
      // Simulate real-time cryptocurrency prices (in production, use real API)
      const qubicPriceUSD = 0.000002202;
      const jackpotUSD = jackpot * qubicPriceUSD;
      
      const cryptoPrices = {
        qubic: jackpot,
        usd: jackpotUSD,
        btc: jackpotUSD / 96000, // Approximate BTC price
        eth: jackpotUSD / 3200,  // Approximate ETH price
        sol: jackpotUSD / 205,   // Approximate SOL price
      };
      
      res.json(cryptoPrices);
    } catch (error) {
      res.status(500).json({ message: "Failed to get jackpot information" });
    }
  });

  // Get wallet bet count for current draw
  app.get("/api/lottery/wallet-bets/:walletAddress", async (req, res) => {
    try {
      const { walletAddress } = req.params;
      const currentDraw = await storage.getCurrentDraw();
      
      if (!currentDraw) {
        return res.status(404).json({ message: "No active draw found" });
      }

      const walletBetCount = await storage.getWalletBetCount(walletAddress, currentDraw.drawTick);
      const betCount = walletBetCount?.betCount || 0;
      
      res.json({ betCount, maxBets: 5, remaining: 5 - betCount });
    } catch (error) {
      res.status(500).json({ message: "Failed to get wallet bet count" });
    }
  });

  // Place a lottery bet
  app.post("/api/lottery/place-bet", async (req, res) => {
    try {
      const betData = insertLotteryBetSchema.parse(req.body);
      
      // Validate selected numbers
      if (!Array.isArray(betData.selectedNumbers) || betData.selectedNumbers.length !== 5) {
        return res.status(400).json({ message: "Must select exactly 5 numbers" });
      }
      
      const numbers = betData.selectedNumbers as number[];
      if (numbers.some(num => num < 1 || num > 50)) {
        return res.status(400).json({ message: "Numbers must be between 1 and 50" });
      }
      
      // Check for duplicates
      if (new Set(numbers).size !== 5) {
        return res.status(400).json({ message: "All numbers must be unique" });
      }

      const currentDraw = await storage.getCurrentDraw();
      if (!currentDraw) {
        return res.status(404).json({ message: "No active draw found" });
      }

      // Check wallet bet limit
      const walletBetCount = await storage.getWalletBetCount(betData.walletAddress, currentDraw.drawTick);
      const currentBets = walletBetCount?.betCount || 0;
      
      if (currentBets >= 5) {
        return res.status(400).json({ message: "Maximum 5 bets per wallet per draw reached" });
      }

      // Create the bet
      const bet = await storage.createBet({
        ...betData,
        drawTick: currentDraw.drawTick,
      });

      // Update wallet bet count
      await storage.updateWalletBetCount({
        walletAddress: betData.walletAddress,
        currentDrawTick: currentDraw.drawTick,
        betCount: currentBets + 1,
      });

      res.status(201).json({
        success: true,
        bet,
        newBetCount: currentBets + 1,
        remaining: 4 - currentBets,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid bet data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to place bet" });
    }
  });

  // Batch submit multiple bets
  app.post("/api/lottery/batch-bets", async (req, res) => {
    try {
      const { walletAddress, bets } = req.body;
      
      if (!Array.isArray(bets) || bets.length === 0) {
        return res.status(400).json({ message: "Bets array is required" });
      }

      if (bets.length > 5) {
        return res.status(400).json({ message: "Maximum 5 bets per batch" });
      }

      const currentDraw = await storage.getCurrentDraw();
      if (!currentDraw) {
        return res.status(404).json({ message: "No active draw found" });
      }

      // Check current wallet bet count
      const walletBetCount = await storage.getWalletBetCount(walletAddress, currentDraw.drawTick);
      const currentBets = walletBetCount?.betCount || 0;
      
      if (currentBets + bets.length > 5) {
        return res.status(400).json({ 
          message: `Cannot place ${bets.length} bets. Only ${5 - currentBets} bets remaining for this wallet.` 
        });
      }

      // Process all bets
      const createdBets = [];
      for (const betData of bets) {
        const bet = await storage.createBet({
          walletAddress,
          selectedNumbers: betData.selectedNumbers,
          amount: betData.amount || 10000,
          drawTick: currentDraw.drawTick,
        });
        createdBets.push(bet);
      }

      // Update wallet bet count
      await storage.updateWalletBetCount({
        walletAddress,
        currentDrawTick: currentDraw.drawTick,
        betCount: currentBets + bets.length,
      });

      res.status(201).json({
        success: true,
        bets: createdBets,
        totalBets: currentBets + bets.length,
        transactionHash: `0x${Date.now().toString(16)}`, // Simulated batch transaction hash
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to process batch bets" });
    }
  });

  // Get recent winners
  app.get("/api/lottery/recent-winners", async (req, res) => {
    try {
      const winners = await storage.getRecentWinners();
      res.json(winners);
    } catch (error) {
      res.status(500).json({ message: "Failed to get recent winners" });
    }
  });

  // Get current network stats
  app.get("/api/network/stats", async (req, res) => {
    try {
      const stats = {
        currentTick: 13847291,
        activeBets: 1247,
        totalPrizePool: 8200000, // 8.2M QUBIC
        nextDrawTime: new Date(Date.now() + 2 * 60 * 60 * 1000 + 15 * 60 * 1000), // 2h 15m from now
        computors: 676,
        quorumRequired: 451,
        tpsCapability: 15500000,
      };
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to get network stats" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
