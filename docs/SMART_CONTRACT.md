# Smart Contract Documentation

The Qubic Lottery Engine uses a fortress-class C++ smart contract deployed on the Qubic blockchain, providing provably fair lottery operations with anti-exploit protection.

## 🏗️ Contract Architecture

### Core Components

- **Betting System**: Handles bet placement with wallet-based limitations
- **Random Number Generation**: Integrates with Qubic Random Number Smart Contract
- **Revenue Distribution**: Automated splitting of proceeds
- **Draw Management**: Controls lottery rounds and winner selection
- **Anti-Exploit Protection**: Prevents gaming and ensures fairness

## 🔒 Security Features

### Fortress-Class Protection

- **Wallet Bet Limits**: Maximum 5 bets per wallet per draw
- **Draw Tick Validation**: Bets tied to specific draw cycles
- **Atomic Operations**: All-or-nothing transaction processing
- **Input Validation**: Comprehensive bounds checking
- **Oracle Security**: Nonce tracking for random number requests

### Anti-Exploit Mechanisms

```cpp
// Wallet betting limitation
if (getBetCount(walletAddress, currentDrawTick) >= MAX_BETS_PER_WALLET) {
    return false; // Reject bet
}

// Number validation
for (int i = 0; i < 5; i++) {
    if (selectedNumbers[i] < 1 || selectedNumbers[i] > 50) {
        return false; // Invalid number range
    }
}
```

## 🎲 Random Number Integration

### Qubic Random Number Smart Contract

The lottery uses Qubic's native Random Number Smart Contract for provably fair draws:

```cpp
// Request random numbers for draw
RandomNumberRequest request;
request.drawTick = currentDrawTick;
request.nonce = generateNonce();
request.count = 5; // Need 5 winning numbers

// Get random numbers from Qubic oracle
auto randomNumbers = requestRandomNumbers(request);
```

### Provable Fairness

- Random numbers generated using hardware entropy
- Cryptographic verification of randomness
- Transparent seed generation process
- Immutable draw results on blockchain

## 💰 Revenue Distribution

### Automatic Splitting

```cpp
// Revenue distribution (per 10,000 QUBIC bet)
const uint64_t PRIZE_POOL_PERCENT = 60;      // 6,000 QUBIC
const uint64_t FRANCHISEE_PERCENT = 31;      // 3,100 QUBIC  
const uint64_t FOUNDATION_PERCENT = 5;       // 500 QUBIC
const uint64_t DEVELOPER_PERCENT = 4;        // 400 QUBIC

void distributeBetRevenue(uint64_t betAmount) {
    uint64_t prizePool = (betAmount * PRIZE_POOL_PERCENT) / 100;
    uint64_t franchiseeFee = (betAmount * FRANCHISEE_PERCENT) / 100;
    uint64_t foundationFee = (betAmount * FOUNDATION_PERCENT) / 100;
    uint64_t developerFee = (betAmount * DEVELOPER_PERCENT) / 100;
    
    // Transfer funds atomically
    addToPrizePool(prizePool);
    transfer(FRANCHISEE_ADDRESS, franchiseeFee);
    transfer(FOUNDATION_ADDRESS, foundationFee);
    transfer(DEVELOPER_ADDRESS, developerFee);
}
```

## 🎯 Bet Placement Logic

### Single Bet Processing

```cpp
struct LotteryBet {
    char walletAddress[56];
    uint8_t selectedNumbers[5];
    uint64_t amount;
    uint64_t drawTick;
    uint64_t timestamp;
    char transactionHash[64];
};

bool placeBet(const char* walletAddress, 
              const uint8_t* numbers, 
              uint64_t amount,
              uint64_t drawTick) {
    
    // Validate wallet address format
    if (!isValidWalletAddress(walletAddress)) {
        return false;
    }
    
    // Check bet limit for wallet
    if (getBetCount(walletAddress, drawTick) >= MAX_BETS_PER_WALLET) {
        return false;
    }
    
    // Validate number selection
    if (!validateNumbers(numbers)) {
        return false;
    }
    
    // Verify sufficient balance
    if (getBalance(walletAddress) < amount) {
        return false;
    }
    
    // Create bet record
    LotteryBet bet;
    strcpy(bet.walletAddress, walletAddress);
    memcpy(bet.selectedNumbers, numbers, 5);
    bet.amount = amount;
    bet.drawTick = drawTick;
    bet.timestamp = getCurrentTime();
    generateTransactionHash(bet.transactionHash);
    
    // Process payment and store bet
    if (processPayment(walletAddress, amount)) {
        storeBet(bet);
        distributeBetRevenue(amount);
        return true;
    }
    
    return false;
}
```

### Batch Bet Processing

```cpp
bool placeBatchBets(const char* walletAddress,
                   const BatchBetData* bets,
                   uint32_t betCount) {
    
    // Validate total bet count doesn't exceed limit
    uint32_t currentBets = getBetCount(walletAddress, getCurrentDrawTick());
    if (currentBets + betCount > MAX_BETS_PER_WALLET) {
        return false;
    }
    
    // Calculate total amount
    uint64_t totalAmount = 0;
    for (uint32_t i = 0; i < betCount; i++) {
        totalAmount += bets[i].amount;
    }
    
    // Verify sufficient balance for all bets
    if (getBalance(walletAddress) < totalAmount) {
        return false;
    }
    
    // Process all bets atomically
    beginTransaction();
    
    for (uint32_t i = 0; i < betCount; i++) {
        if (!placeBet(walletAddress, 
                     bets[i].selectedNumbers, 
                     bets[i].amount,
                     getCurrentDrawTick())) {
            rollbackTransaction();
            return false;
        }
    }
    
    commitTransaction();
    return true;
}
```

## 🏆 Winner Selection & Payouts

### Draw Execution

```cpp
struct DrawResult {
    uint64_t drawTick;
    uint8_t winningNumbers[5];
    uint64_t prizePool;
    uint32_t winnerCount;
    uint64_t payoutPerWinner;
};

DrawResult executeDraw(uint64_t drawTick) {
    DrawResult result;
    result.drawTick = drawTick;
    
    // Get random winning numbers
    auto randomNumbers = getRandomNumbers(drawTick, 5);
    memcpy(result.winningNumbers, randomNumbers, 5);
    
    // Sort winning numbers
    sortNumbers(result.winningNumbers, 5);
    
    // Find all winning bets
    auto winners = findWinners(drawTick, result.winningNumbers);
    result.winnerCount = winners.size();
    
    // Calculate prize pool and payouts
    result.prizePool = getPrizePool(drawTick);
    
    if (result.winnerCount > 0) {
        result.payoutPerWinner = result.prizePool / result.winnerCount;
        
        // Pay winners
        for (auto& winner : winners) {
            transfer(winner.walletAddress, result.payoutPerWinner);
        }
    } else {
        // Roll over prize pool to next draw
        rollOverPrizePool(result.prizePool);
    }
    
    // Store draw result
    storeDrawResult(result);
    
    return result;
}
```

### Winner Detection

```cpp
bool isWinner(const uint8_t* betNumbers, const uint8_t* winningNumbers) {
    uint8_t matches = 0;
    
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            if (betNumbers[i] == winningNumbers[j]) {
                matches++;
                break;
            }
        }
    }
    
    // All 5 numbers must match to win
    return matches == 5;
}

std::vector<LotteryBet> findWinners(uint64_t drawTick, 
                                   const uint8_t* winningNumbers) {
    std::vector<LotteryBet> winners;
    auto bets = getBetsForDraw(drawTick);
    
    for (auto& bet : bets) {
        if (isWinner(bet.selectedNumbers, winningNumbers)) {
            winners.push_back(bet);
        }
    }
    
    return winners;
}
```

## 📊 Data Structures

### Wallet Bet Tracking

```cpp
struct WalletBetCount {
    char walletAddress[56];
    uint64_t drawTick;
    uint32_t betCount;
    uint64_t totalAmount;
};

// XOR-folded indexing for efficient lookups
uint32_t getWalletIndex(const char* walletAddress) {
    uint32_t index = 0;
    for (int i = 0; i < 56; i += 4) {
        index ^= *(uint32_t*)(walletAddress + i);
    }
    return index % WALLET_TABLE_SIZE;
}
```

### Draw History Storage

```cpp
// Circular buffer for last 100 draws
#define MAX_DRAW_HISTORY 100

struct DrawHistory {
    DrawResult draws[MAX_DRAW_HISTORY];
    uint32_t currentIndex;
    uint32_t totalDraws;
};

void storeDrawResult(const DrawResult& result) {
    drawHistory.draws[drawHistory.currentIndex] = result;
    drawHistory.currentIndex = (drawHistory.currentIndex + 1) % MAX_DRAW_HISTORY;
    drawHistory.totalDraws++;
}
```

## ⚡ Performance Optimizations

### Efficient Number Matching

```cpp
// Use bit manipulation for fast number comparison
uint64_t numbersToBitmap(const uint8_t* numbers) {
    uint64_t bitmap = 0;
    for (int i = 0; i < 5; i++) {
        bitmap |= (1ULL << numbers[i]);
    }
    return bitmap;
}

bool isWinnerFast(uint64_t betBitmap, uint64_t winningBitmap) {
    return __builtin_popcountll(betBitmap & winningBitmap) == 5;
}
```

### Memory Management

```cpp
// Pre-allocated pools for frequent operations
class BetPool {
private:
    LotteryBet pool[MAX_CONCURRENT_BETS];
    bool used[MAX_CONCURRENT_BETS];
    uint32_t nextFree;

public:
    LotteryBet* allocateBet() {
        for (uint32_t i = nextFree; i < MAX_CONCURRENT_BETS; i++) {
            if (!used[i]) {
                used[i] = true;
                nextFree = i + 1;
                return &pool[i];
            }
        }
        return nullptr; // Pool exhausted
    }
    
    void deallocateBet(LotteryBet* bet) {
        uint32_t index = bet - pool;
        used[index] = false;
        if (index < nextFree) {
            nextFree = index;
        }
    }
};
```

## 🔍 Contract Verification

### Deployment Verification

```cpp
// Contract initialization with verification
bool initializeContract() {
    // Verify contract constants
    static_assert(MAX_BETS_PER_WALLET == 5);
    static_assert(BET_AMOUNT == 10000);
    static_assert(PRIZE_POOL_PERCENT + FRANCHISEE_PERCENT + 
                  FOUNDATION_PERCENT + DEVELOPER_PERCENT == 100);
    
    // Initialize storage
    initializeWalletTable();
    initializeDrawHistory();
    initializePrizePool();
    
    return true;
}
```

### Runtime Verification

```cpp
// Continuous integrity checks
bool verifyContractState() {
    // Verify wallet bet counts
    for (auto& wallet : activeWallets) {
        if (wallet.betCount > MAX_BETS_PER_WALLET) {
            return false;
        }
    }
    
    // Verify prize pool integrity
    uint64_t calculatedPool = calculateExpectedPrizePool();
    if (abs(getCurrentPrizePool() - calculatedPool) > TOLERANCE) {
        return false;
    }
    
    return true;
}
```

## 🚀 Deployment Parameters

### Mainnet Configuration

```cpp
// Production parameters
const uint64_t BET_AMOUNT = 10000000000;  // 10,000 QUBIC
const uint32_t MAX_BETS_PER_WALLET = 5;
const uint32_t DRAW_INTERVAL_TICKS = 86400; // 24 hours
const char FRANCHISEE_ADDRESS[] = "FRANCHISEEADDRESSABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const char FOUNDATION_ADDRESS[] = "FOUNDATIONADDRESSABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const char DEVELOPER_ADDRESS[] = "DEVELOPERADDRESSABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890AB";
```

### Testnet Configuration

```cpp
// Testing parameters (faster draws, lower amounts)
const uint64_t BET_AMOUNT = 1000000;      // 1,000 QUBIC
const uint32_t DRAW_INTERVAL_TICKS = 3600; // 1 hour
```

---

**For technical questions about the smart contract, contact:** norlitouysepulvida@gmail.com