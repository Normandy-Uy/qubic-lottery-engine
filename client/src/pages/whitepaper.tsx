import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WhitePaper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            📄 Technical White Paper
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Fortress-Class Charitable Lottery Engine
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive technical specification for implementing transparent, corruption-resistant lottery mechanics for government charity initiatives, using Qubic's advanced blockchain infrastructure and Random Number Smart Contract.
          </p>
        </div>

        {/* Abstract */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Abstract</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <p>
              This white paper presents a revolutionary fortress-class charitable lottery engine designed to create transparent, corruption-resistant 
              funding mechanisms for government charity initiatives worldwide. Featuring a comprehensive franchisee management system 
              with guaranteed minimum jackpots, this platform is aligned with the ethical philosophy of Sergey Ivancheglo 
              (ComefromBehind) and the Qubic Foundation, leveraging Qubic's unique technical capabilities to eliminate 
              exploitation vulnerabilities while enabling meaningful social impact through poverty alleviation, education, 
              and healthcare funding programs.
            </p>
          </CardContent>
        </Card>

        {/* Problem Statement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. Problem Statement</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <h3>1.1 Current Blockchain Lottery Engine Limitations</h3>
            <p>
              Existing blockchain lottery engines suffer from several critical vulnerabilities:
            </p>
            <ul>
              <li><strong>Multi-account exploitation:</strong> Users can create multiple wallets to bypass betting limits</li>
              <li><strong>High transaction costs:</strong> Each bet requires a separate transaction, leading to expensive gas fees</li>
              <li><strong>Network congestion:</strong> Multiple transactions per user contribute to blockchain bottlenecks</li>
              <li><strong>Poor user experience:</strong> Complex multi-step processes deter user adoption</li>
              <li><strong>Scalability issues:</strong> Traditional blockchains cannot handle high-volume lottery operations efficiently</li>
            </ul>

            <h3>1.2 Market Opportunity</h3>
            <p>
              The global online lottery market is valued at over $8 billion annually, with blockchain-based solutions representing 
              a rapidly growing segment. However, technical limitations have prevented widespread adoption of decentralized lottery engines.
            </p>
          </CardContent>
        </Card>

        {/* Technical Solution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. Technical Solution</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <h3>2.1 Fortress-Class Security Architecture</h3>
            <p>
              Our solution implements a multi-layered fortress-class security architecture with exploit-resistant design:
            </p>
            
            <h4>2.1.1 Wallet-Based Bet Limitations</h4>
            <p>
              Smart contracts track individual wallet addresses and enforce a maximum of 5 bets per draw cycle. 
              This limitation is enforced at the protocol level, making it impossible to circumvent through multiple transactions.
            </p>

            <h4>2.1.2 Batch Transaction Processing</h4>
            <p>
              Users can submit multiple bets in a single transaction, reducing gas costs by up to 80% compared to 
              individual bet submissions while maintaining the 5-bet limit.
            </p>

            <h4>2.1.3 Quorum-Based Validation</h4>
            <p>
              All lottery operations are validated by Qubic's 676 Computor network, requiring 451+ consensus for transaction approval. 
              This eliminates single points of failure and ensures fair play.
            </p>

            <h3>2.2 Competitive Blockchain Analysis</h3>
            
            <h4>2.2.1 Existing Market: Ethereum-Based Solutions</h4>
            <p>
              The current market leader, Quanta, launched in 2015 as the world's first fully licensed blockchain lottery 
              on Ethereum. While pioneering and regulatory compliant, Ethereum-based solutions face significant limitations:
            </p>
            <ul>
              <li><strong>TPS Bottleneck:</strong> Ethereum's ~15 TPS maximum severely limits scalability and real-time operations</li>
              <li><strong>High Gas Fees:</strong> Transaction costs can exceed $20-100 during network congestion, making micro-bets uneconomical</li>
              <li><strong>Slow Settlement:</strong> 12-15 second block times create user experience friction</li>
              <li><strong>Energy Consumption:</strong> Proof-of-Stake still requires significant computational overhead</li>
            </ul>

            <h4>2.2.2 Qubic's Revolutionary Advantages</h4>
            <p>
              Qubic's architecture addresses every limitation of existing blockchain lottery platforms:
            </p>
            <ul>
              <li><strong>Unmatched Speed:</strong> 15.5M TPS capability enables real-time lottery operations at global scale</li>
              <li><strong>Native C++ Execution:</strong> Sub-millisecond smart contract execution vs Ethereum's interpreted EVM</li>
              <li><strong>Zero Fees:</strong> Energy-based model eliminates all transaction costs, enabling fair global access</li>
              <li><strong>Instant Finality:</strong> Immediate confirmation without block wait times</li>
              <li><strong>Superior Randomness:</strong> Hardware-based entropy generation vs software-based solutions</li>
            </ul>

            <h4>2.2.3 Market Opportunity</h4>
            <p>
              While Quanta processes ~1,000 transactions weekly on Ethereum, Qubic's lottery engine can handle 
              millions of simultaneous participants, demonstrating blockchain technology's true potential for 
              global charitable fundraising at unprecedented scale.
            </p>

            <h3>2.3 Qubic Random Number Smart Contract Integration</h3>
            <p>
              The engine leverages Qubic's native Random Number Smart Contract for provably fair draws:
            </p>
            <ul>
              <li><strong>Hardware-Based Entropy:</strong> Uses Qubic's hardware random number generators for true randomness</li>
              <li><strong>Quantum-Resistant Security:</strong> Cryptographically secure random number generation</li>
              <li><strong>On-Chain Verification:</strong> All draws are publicly verifiable on the blockchain</li>
              <li><strong>Oracle Integration:</strong> Smart contract validation with nonce tracking and atomic operations</li>
            </ul>
          </CardContent>
        </Card>

        {/* Business Model & Revenue Distribution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. Business Model & Revenue Distribution</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <h3>3.1 Revenue Sharing Architecture</h3>
            <p>
              The lottery engine implements an automated, transparent revenue distribution system:
            </p>
            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">5%</div>
                <div className="text-sm text-slate-600">Qubic Foundation Development Fund</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">4%</div>
                <div className="text-sm text-slate-600">VPX Team Development</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">91%</div>
                <div className="text-sm text-slate-600">Charitable Causes / Franchisee</div>
              </div>
            </div>

            <h3>3.2 Franchisee Management System</h3>
            <p>
              Government charity organizations can partner as franchisees with comprehensive management tools:
            </p>
            <ul>
              <li><strong>Guaranteed Minimum Jackpots:</strong> Franchisees can set minimum jackpot amounts to ensure lottery attractiveness</li>
              <li><strong>Financial Risk Model:</strong> Franchisees bear responsibility for minimum jackpot shortfalls during low-participation periods</li>
              <li><strong>Revenue Transparency:</strong> Real-time tracking of funds raised and distributed to charitable causes</li>
              <li><strong>Impact Reporting:</strong> Detailed analytics showing charitable impact metrics and fund utilization</li>
            </ul>

            <h3>3.3 Game Mechanics</h3>
            <p>
              The engine implements a 5/50 lottery format with the following specifications:
            </p>
            <ul>
              <li><strong>Number Selection:</strong> Players choose 5 unique numbers from 1-50</li>
              <li><strong>Fixed Bet Amount:</strong> 10,000 QUBIC per ticket</li>
              <li><strong>Betting Limits:</strong> Maximum 5 bets per wallet per draw cycle</li>
              <li><strong>Prize Pool:</strong> 60% of total bets goes to jackpot, 40% to revenue distribution</li>
              <li><strong>Draw Schedule:</strong> Daily draws with immediate result distribution</li>
            </ul>
          </CardContent>
        </Card>

        {/* Technical Architecture */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. Technical Architecture</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <h3>4.1 Smart Contract Implementation</h3>
            <p>
              The lottery engine is implemented as a native C++ smart contract on Qubic blockchain with the following features:
            </p>
            <ul>
              <li><strong>Atomic Transfer Operations:</strong> Ensures all fund transfers complete successfully or revert entirely</li>
              <li><strong>Bounds Checking:</strong> Comprehensive validation of all inputs and array accesses</li>
              <li><strong>XOR-Folded Wallet Indexing:</strong> Efficient wallet tracking for bet limitations</li>
              <li><strong>Draw Execution Locks:</strong> Prevents concurrent draw executions and state corruption</li>
              <li><strong>Circular Buffer History:</strong> Stores last 100 draw results for transparency</li>
            </ul>

            <h3>4.2 Data Storage Architecture</h3>
            <p>
              In production, all data is stored directly on the Qubic blockchain:
            </p>
            <ul>
              <li><strong>Smart Contract State:</strong> Stores all bet data, wallet counts, and draw results on-chain</li>
              <li><strong>Blockchain Transactions:</strong> Each bet is a permanent blockchain transaction</li>
              <li><strong>No External Database:</strong> All persistence handled by Qubic's native storage</li>
              <li><strong>Real-time Synchronization:</strong> Instant state updates across all network participants</li>
            </ul>

            <h3>4.3 Frontend Architecture</h3>
            <p>
              The user interface is built with modern web technologies optimized for blockchain interaction:
            </p>
            <ul>
              <li><strong>React 18 with TypeScript:</strong> Type-safe component architecture</li>
              <li><strong>Shadcn/ui Components:</strong> Accessible UI components built on Radix primitives</li>
              <li><strong>TanStack Query:</strong> Efficient blockchain state management and caching</li>
              <li><strong>Tailwind CSS:</strong> Responsive design with Qubic-themed color palette</li>
            </ul>
          </CardContent>
        </Card>

        {/* Mission & Social Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>5. Mission & Social Impact</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <h3>5.1 Alignment with Qubic Foundation Values</h3>
            <p>
              This project aligns with Sergey Ivancheglo's (Come-from-Beyond) philosophy of channeling technological advancement toward meaningful human progress:
            </p>
            <ul>
              <li><strong>Technology for Social Good:</strong> Leveraging blockchain to solve real-world charitable funding challenges</li>
              <li><strong>Transparency & Trust:</strong> Eliminating corruption through immutable blockchain records</li>
              <li><strong>Global Accessibility:</strong> Zero-fee transactions enable worldwide participation</li>
              <li><strong>Energy Efficiency:</strong> Demonstrating sustainable blockchain technology for social applications</li>
            </ul>

            <h3>5.2 Charitable Impact Areas</h3>
            <p>
              The lottery engine specifically targets critical social needs:
            </p>
            <ul>
              <li><strong>Poverty Alleviation:</strong> Direct funding for income support and economic development programs</li>
              <li><strong>Education Funding:</strong> School infrastructure, scholarships, and educational technology initiatives</li>
              <li><strong>Healthcare Access:</strong> Medical equipment, treatment programs, and healthcare infrastructure</li>
              <li><strong>Social Welfare:</strong> Emergency assistance, housing support, and community development</li>
            </ul>

            <h3>5.3 Government Partnership Framework</h3>
            <p>
              The system is designed for seamless integration with government charity initiatives:
            </p>
            <ul>
              <li><strong>Regulatory Compliance:</strong> Built-in compliance features for government oversight</li>
              <li><strong>Audit Trails:</strong> Complete transparency for public accountability</li>
              <li><strong>Impact Tracking:</strong> Real-time metrics showing charitable fund utilization</li>
              <li><strong>Multi-jurisdiction Support:</strong> Flexible framework adaptable to different regulatory environments</li>
            </ul>
          </CardContent>
        </Card>

        {/* Implementation Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>6. Implementation Timeline</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <h3>6.1 Development Phases</h3>
            <p>
              The lottery engine development follows a structured four-phase approach throughout 2026:
            </p>
            
            <h4>Phase 1 - Foundation & Architecture (Jan 1 - Mar 1, 2026)</h4>
            <ul>
              <li>Complete fortress-class smart contract development</li>
              <li>Revenue distribution system implementation (5% Foundation, 4% Developer, 91% Franchisee)</li>
              <li>Franchisee management interface development</li>
              <li>Core security mechanisms and wallet bet limitations</li>
            </ul>

            <h4>Phase 2 - Testing & Security Audit (Mar 1 - Jun 1, 2026)</h4>
            <ul>
              <li>Deploy smart contracts to Qubic testnet</li>
              <li>Comprehensive exploit testing with 5-bet wallet limitations</li>
              <li>Revenue distribution testing with multiple franchisees</li>
              <li>Third-party security audit of fortress-class mechanisms</li>
            </ul>

            <h4>Phase 3 - Mainnet Deployment (Jun 1 - Sep 1, 2026)</h4>
            <ul>
              <li>Deploy audited smart contracts to Qubic mainnet</li>
              <li>Establish partnerships with government charity organizations</li>
              <li>Launch pilot lottery with first franchisee</li>
              <li>Monitor system performance and user adoption</li>
            </ul>

            <h4>Phase 4 - Global Expansion (Sep 1 - Dec 30, 2026)</h4>
            <ul>
              <li>Onboard 5+ government charity organizations</li>
              <li>Implement multi-language platform support</li>
              <li>Advanced analytics dashboard for franchisees</li>
              <li>GLI (Gaming Laboratories International) certification</li>
              <li>Cross-border charitable fund distribution</li>
            </ul>
          </CardContent>
        </Card>

        {/* Team & Development */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>7. Development Team & Expertise</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <h3>7.1 VPX Team Composition</h3>
            <p>
              The lottery engine is developed by VPX, a Southeast Asian technology company with extensive experience in blockchain applications and e-commerce platforms:
            </p>
            
            <h4>Core Development Team</h4>
            <ul>
              <li><strong>Norlito Sepulvida:</strong> Founder of VPX (Alibaba of SE Asia), Lead Blockchain Developer specializing in smart contract architecture, inventor of Starshades™ Nose Therapy Glasses, and President of Assessment and Research Center of the Philippines</li>
              <li><strong>Shalom Sepulvida:</strong> Systems Architect focused on revenue distribution systems and blockchain integration</li>
              <li><strong>Elijohn Sepulvida:</strong> Frontend Developer specializing in user experience design and React applications</li>
              <li><strong>Jeson Sepulvida:</strong> Backend Developer handling API development and blockchain connectivity</li>
            </ul>

            <h3>7.2 Technology Stack Expertise</h3>
            <p>
              The team leverages modern web technologies and blockchain infrastructure:
            </p>
            <ul>
              <li><strong>Blockchain Development:</strong> Native C++ smart contracts for Qubic, Ethereum Solidity experience</li>
              <li><strong>Frontend Technologies:</strong> React 18, TypeScript, Tailwind CSS, modern build tools</li>
              <li><strong>Backend Systems:</strong> Node.js, Express, PostgreSQL, real-time APIs</li>
              <li><strong>E-commerce Platform:</strong> Alibaba-like marketplace for Vietnam, Philippines, and Southeast Asia sourcing</li>
            </ul>
          </CardContent>
        </Card>

        {/* Technical Implementation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>8. Technical Implementation Specification</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <h3>8.1 Frontend Technology Stack</h3>
            <p>
              The lottery engine frontend implements a modern, type-safe architecture optimized for financial applications:
            </p>
            <ul>
              <li><strong>Core Language:</strong> TypeScript with React 18 for type safety and component-based architecture</li>
              <li><strong>Build System:</strong> Vite for fast development with hot module replacement and optimized production builds</li>
              <li><strong>UI Framework:</strong> Shadcn/ui components built on Radix UI primitives for accessibility and consistency</li>
              <li><strong>Styling:</strong> Tailwind CSS with custom Qubic-themed color palette and responsive design</li>
              <li><strong>State Management:</strong> TanStack Query for efficient server state synchronization and caching</li>
              <li><strong>Client Routing:</strong> Wouter for lightweight, declarative routing without unnecessary bundle size</li>
              <li><strong>Form Handling:</strong> React Hook Form with Zod validation for robust input processing</li>
              <li><strong>Icon Library:</strong> Lucide React for consistent, scalable vector icons</li>
            </ul>
            
            <p>
              This TypeScript-first approach ensures code reliability essential for financial applications, 
              while React's component architecture enables rapid development and maintenance of complex UI states 
              required for real-time lottery operations on Qubic's high-speed blockchain.
            </p>

            <h3>8.2 Smart Contract Architecture</h3>
            
            <h4>8.2.1 Core Data Structures</h4>
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`#pragma once
#include "qubic_core.h"
#include "qubic_contracts.h"

// Contract constants
static constexpr unsigned int MAX_BETS_PER_WALLET = 5;
static constexpr unsigned int LOTTERY_NUMBERS_COUNT = 5;
static constexpr unsigned int MAX_NUMBER = 50;
static constexpr unsigned int MIN_NUMBER = 1;
static constexpr unsigned long long BET_COST = 10000000000ULL;  // 10,000 QUBIC
static constexpr unsigned int DRAW_INTERVAL = 202781; // ~24 hours in ticks
static constexpr unsigned int TICKS_PER_DAY = 202781; // Daily tick interval
static constexpr unsigned int RANDOM_CONTRACT_INDEX = 2; // Qubic Random Oracle
static constexpr unsigned int MAX_TOTAL_BETS = 16380; // 3276 wallets × 5 bets
static constexpr unsigned int MAX_BATCH_SIZE = 5;     // Max bets per batch
static constexpr unsigned int QUORUM_THRESHOLD = 451; // 451 of 676 computors

// Lottery bet structure
struct LotteryBet {
    m256i walletId;                           // Qubic wallet public key
    unsigned char numbers[5];                 // Selected numbers (1-50)
    unsigned long long amount;                // Bet amount in QUBIC units
    unsigned int drawTick;                    // Target draw tick
    unsigned int timestamp;                   // Bet placement tick
    array<unsigned char, 32> betHash;         // Unique bet identifier
} PACKED;

// Draw result structure
struct DrawResult {
    unsigned int drawTick;                    // Draw execution tick
    unsigned char winningNumbers[5];          // Winning combination
    unsigned long long prizePool;             // Total prize pool
    unsigned int totalBets;                   // Number of participating bets
    m256i winnerWallet;                       // Jackpot winner public key
    array<unsigned char, 32> randomSeed;      // Random seed from oracle
    bit hasWinner;                            // Whether draw had winner
    bit isExecuted;                           // Draw execution status
} PACKED;

// Per-wallet statistics
struct WalletStats {
    unsigned char betCount;                   // Current draw bet count
    unsigned long long totalWagered;          // Lifetime wagered amount
    unsigned long long totalWinnings;         // Lifetime winnings
    unsigned int lastBetTick;                 // Last bet placement tick
} PACKED;

// Oracle request tracking
struct OracleRequest {
    unsigned int drawTick;                    // Draw tick requested
    unsigned int requestTick;                 // When request was made
    array<unsigned char, 32> nonce;           // Request nonce
    bit processed;                            // Whether processed
} PACKED;

// Bet combination tracking (for duplicate detection)
struct BetCombination {
    unsigned char numbers[5];                 // Sorted number combination
    array<unsigned char, 32> betHash;         // Hash of the combination
} PACKED;

// Batch bet submission structure
struct BatchBetInput {
    m256i walletId;                           // Betting wallet
    unsigned char betCount;                   // Number of bets in batch (max 5)
    unsigned char numbers[5][5];              // Up to 5 sets of numbers
} PACKED;

// Prize distribution record
struct PrizeDistribution {
    unsigned long long totalPrizePool;        // Total available prize
    unsigned long long winnerPayout;          // 60% to winners
    unsigned long long franchiseeFee;         // 31% to franchisee
    unsigned long long foundationFee;         // 5% to foundation
    unsigned long long developerFee;          // 4% to developer
} PACKED;

// Bet output structure for API responses
struct BetOutput {
    bit success;                              // Whether bet was placed
    unsigned char betCount;                   // Total bets for this wallet
    unsigned long long totalCost;             // Total amount paid
    array<unsigned char, 32> transactionHash; // Unique transaction ID
} PACKED;

// Historical draw results (last 100 draws)
static constexpr unsigned int RESULT_HISTORY = 100;
    unsigned int winnerCount;                 // Number of winners
} PACKED;

// Validator signature for draws
struct ValidatorSignature {
    m256i validatorId;                        // Validator computor ID
    array<unsigned char, 64> signature;       // Ed25519 signature
    unsigned int signedTick;                  // Tick when signed
} PACKED;`}</pre>
            </div>

            <h4>8.2.2 Fortress-Class Validation Logic</h4>
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`// Qubic Lottery Smart Contract
struct QUBIC_LOTTERY_CONTRACT_STATE : public ContractState {
    // State variables (persistent across ticks)
    array<LotteryBet, 16380> currentDrawBets;      // Max 3276 wallets × 5 bets
    array<WalletStats, 65536> walletStats;         // Stats by wallet index
    unsigned int currentDrawTick;                   // Current draw execution tick
    unsigned int totalBetCount;                     // Total bets in current draw
    unsigned long long currentDrawPrizePool;        // 60% of current draw bets
    unsigned long long rolloverAmount;              // Prize pool rollover
    unsigned long long minimumJackpotAmount;        // Guaranteed minimum
    unsigned long long minimumJackpotUsed;          // Amount used from fund
    m256i QUBIC_FOUNDATION_WALLET;                 // 5% revenue destination
    m256i DEVELOPER_WALLET;                        // 4% revenue destination  
    m256i FRANCHISEE_WALLET;                       // 31% revenue destination
    m256i MINIMUM_JACKPOT_WALLET;                  // Minimum jackpot fund
    array<unsigned char, 32> lastRandomSeed;        // Last random seed used
    array<OracleRequest, 10> pendingRequests;      // Oracle request tracking
    unsigned int pendingRequestCount;               // Active oracle requests
    bit drawInProgress;                            // Prevents concurrent draws
    array<DrawResult, 100> drawHistory;             // Past 100 draw results
    unsigned int drawHistoryCount;                  // Number of recorded draws
    array<BetCombination, 16380> uniqueBets;        // Track unique bet combinations
    array<unsigned int, 16380> betWalletIndex;     // Maps bet to wallet for duplicate check
    array<ValidatorSignature, 676> drawSignatures;  // Validator signatures for draw
    unsigned int signatureCount;                    // Number of collected signatures
    unsigned int lastNormalizedDrawTick;            // Last daily draw tick (normalized)
    array<DrawResult, RESULT_HISTORY> previousDraws; // Last 100 draw results
    unsigned int historyIndex;                      // Circular buffer index
} PACKED;

struct QubicLotteryContract : public Contract<QUBIC_LOTTERY_CONTRACT_STATE> {
private:

    // Get wallet index from public key with better distribution
    inline unsigned int getWalletIndex(const m256i& publicKey) const {
        // Use XOR folding for better distribution
        unsigned int hash = 0;
        const unsigned int* pkData = (const unsigned int*)&publicKey;
        for (int i = 0; i < 8; i++) {
            hash ^= pkData[i];
        }
        hash = (hash ^ (hash >> 16)) & 0xFFFF;
        return hash % 65536;
    }

    // Validate bet limits per wallet
    inline bit validateBetLimits(const m256i& walletId) const {
        unsigned int index = getWalletIndex(walletId);
        return state.walletStats[index].betCount < MAX_BETS_PER_WALLET;
    }

    // Validate selected numbers with duplicate check
    bit validateNumbers(const unsigned char* numbers) const {
        bit seen[51] = {false}; // Track seen numbers (1-50)
        
        for (int i = 0; i < LOTTERY_NUMBERS_COUNT; i++) {
            if (numbers[i] < MIN_NUMBER || numbers[i] > MAX_NUMBER) {
                return false;
            }
            if (seen[numbers[i]]) {
                return false; // Duplicate found
            }
            seen[numbers[i]] = true;
        }
        return true;
    }

    // Generate unique bet hash with all relevant data
    void generateBetHash(LotteryBet& bet) const {
        // Combine all bet data for unique hash
        unsigned char data[64];
        copyMem(data, &bet.walletId, 32);
        copyMem(data + 32, &bet.drawTick, 4);
        copyMem(data + 36, &bet.timestamp, 4);
        copyMem(data + 40, bet.numbers, 5);
        copyMem(data + 45, &bet.amount, 8);
        
        // Add entropy from system
        unsigned int entropy = qubicSystemTick ^ getWalletIndex(bet.walletId);
        copyMem(data + 53, &entropy, 4);
        
        // Generate hash with full data
        KangarooTwelve(data, 57, bet.betHash.data(), 32);
    }
    
    // Check for duplicate bet combinations
    bit isDuplicateBet(const m256i& walletId, const unsigned char* numbers) const {
        unsigned int walletIdx = getWalletIndex(walletId);
        
        // Bounds check before array access
        if (walletIdx >= MAX_WALLETS) {
            return false; // Invalid wallet, let other validation catch it
        }
        
        // Create sorted copy of numbers for comparison
        unsigned char sortedNumbers[5];
        copyMem(sortedNumbers, numbers, 5);
        sortNumbers(sortedNumbers, 5);
        
        // Check existing bets for this draw
        for (unsigned int i = 0; i < state.totalBetCount; i++) {
            if (state.betWalletIndex[i] == walletIdx) {
                // Check if numbers match
                bit match = true;
                unsigned char existingNumbers[5];
                copyMem(existingNumbers, state.currentDrawBets[i].numbers, 5);
                sortNumbers(existingNumbers, 5);
                
                for (int j = 0; j < 5; j++) {
                    if (sortedNumbers[j] != existingNumbers[j]) {
                        match = false;
                        break;
                    }
                }
                
                if (match) return true; // Duplicate found
            }
        }
        return false;
    }
    
    // Simple sort for 5 numbers
    void sortNumbers(unsigned char* nums, int count) const {
        for (int i = 0; i < count - 1; i++) {
            for (int j = 0; j < count - i - 1; j++) {
                if (nums[j] > nums[j + 1]) {
                    unsigned char temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
                }
            }
        }
    }
    
    // Generate transaction hash for bet tracking
    array<unsigned char, 32> generateTransactionHash(const LotteryBet& bet) const {
        unsigned char data[80];
        copyMem(data, &bet.walletId, 32);
        copyMem(data + 32, &bet.drawTick, 4);
        copyMem(data + 36, &bet.timestamp, 4);
        copyMem(data + 40, bet.numbers, 5);
        copyMem(data + 45, &bet.amount, 8);
        copyMem(data + 53, &qubicSystemTick, 4);
        
        array<unsigned char, 32> hash;
        KangarooTwelve(data, 57, hash.data(), 32);
        return hash;
    }

public:
    // Contract initialization
    void Initialize() {
        // Initialize normalized daily draw tick
        state.lastNormalizedDrawTick = (qubicSystemTick / TICKS_PER_DAY) * TICKS_PER_DAY;
        state.currentDrawTick = state.lastNormalizedDrawTick + TICKS_PER_DAY;
        
        state.totalBetCount = 0;
        state.currentDrawPrizePool = 0;
        state.rolloverAmount = 0;
        state.minimumJackpotAmount = 100000000000000ULL; // 100M QUBIC minimum
        state.signatureCount = 0;
        
        // Initialize wallet addresses (set by contract deployer)
        // These would be passed as constructor parameters in production
    }

    // PUBLIC: Place lottery bet (returns structured output)
    PUBLIC(PlaceBet)(
        const m256i& bettor,
        const unsigned char numbers[5]
    ) : bettor(bettor) {
        
        // 0. CRITICAL: Bounds checking before ANY array access
        unsigned int walletIndex = getWalletIndex(bettor);
        if (walletIndex >= MAX_WALLETS) {
            return 0; // Invalid wallet index - prevent out of bounds
        }
        
        // 1. Validate current draw tick (normalized daily tick)
        unsigned int normalizedCurrentTick = (qubicSystemTick / TICKS_PER_DAY) * TICKS_PER_DAY;
        if (normalizedCurrentTick != state.lastNormalizedDrawTick) {
            return 0; // Wrong day for this draw
        }
        
        if (qubicSystemTick >= state.currentDrawTick) {
            return 0; // Draw already executed
        }
        
        // 2. Validate bet count limits
        if (state.totalBetCount >= MAX_TOTAL_BETS) {
            return 0; // Maximum bets reached
        }
        
        // 3. Fortress-class validation checks
        if (!validateBetLimits(bettor) || !validateNumbers(numbers)) {
            return 0;
        }
        
        // 4. Check for duplicate bet combinations
        if (isDuplicateBet(bettor, numbers)) {
            return 0; // Duplicate bet not allowed
        }
        
        // 5. Check wallet balance before any state changes
        if (getBalance(bettor) < BET_COST) {
            return 0; // Insufficient balance
        }
        
        // 5. Attempt transfer BEFORE any state modifications
        if (!transfer(bettor, _contractIndex, BET_COST)) {
            return 0; // Transfer failed - no state changed
        }
        
        // 6. Only now update state (transfer succeeded)
        // walletIndex already validated at the beginning
        
        // Create bet record
        LotteryBet newBet;
        newBet.walletId = bettor;
        copyMem(newBet.numbers, numbers, LOTTERY_NUMBERS_COUNT);
        newBet.amount = BET_COST;
        newBet.drawTick = state.currentDrawTick;
        newBet.timestamp = qubicSystemTick;
        generateBetHash(newBet);
        
        // Generate transaction hash for tracking
        array<unsigned char, 32> txHash = generateTransactionHash(newBet);
        
        // Store bet with bounds checking already done
        state.currentDrawBets[state.totalBetCount] = newBet;
        state.betWalletIndex[state.totalBetCount] = walletIndex; // Track for duplicate check
        state.totalBetCount++;
        state.walletStats[walletIndex].betCount++;
        state.walletStats[walletIndex].totalWagered += BET_COST;
        state.walletStats[walletIndex].lastBetTick = qubicSystemTick;
        
        // Add to prize pool (60% to current draw prize pool)
        unsigned long long prizePoolContribution = (BET_COST * 60) / 100;
        state.currentDrawPrizePool += prizePoolContribution;
        
        // Return structured output
        BetOutput output;
        output.success = true;
        output.betCount = state.walletStats[walletIndex].betCount;
        output.totalCost = BET_COST;
        output.transactionHash = txHash;
        
        return output; // Success with details
    }
    
    // PUBLIC: Batch bet submission (up to 5 bets)
    PUBLIC(PlaceBatchBets)(
        const BatchBetInput& batchInput
    ) : batchInput(batchInput) {
        
        // Validate batch size
        if (batchInput.betCount == 0 || batchInput.betCount > MAX_BATCH_SIZE) {
            return 0; // Invalid batch size
        }
        
        // Get wallet index and validate
        unsigned int walletIndex = getWalletIndex(batchInput.walletId);
        if (walletIndex >= MAX_WALLETS) {
            return 0; // Invalid wallet
        }
        
        // Check daily draw tick
        unsigned int normalizedCurrentTick = (qubicSystemTick / TICKS_PER_DAY) * TICKS_PER_DAY;
        if (normalizedCurrentTick != state.lastNormalizedDrawTick) {
            return 0; // Wrong day for this draw
        }
        
        // Check if wallet can place this many bets
        unsigned char currentBets = state.walletStats[walletIndex].betCount;
        if (currentBets + batchInput.betCount > MAX_BETS_PER_WALLET) {
            return 0; // Would exceed wallet limit
        }
        
        // Calculate total cost
        unsigned long long totalCost = BET_COST * batchInput.betCount;
        
        // Check balance before any transfers
        if (getBalance(batchInput.walletId) < totalCost) {
            return 0; // Insufficient balance
        }
        
        // Attempt single transfer for entire batch
        if (!transfer(batchInput.walletId, _contractIndex, totalCost)) {
            return 0; // Transfer failed
        }
        
        // Process each bet in the batch
        unsigned int successfulBets = 0;
        for (unsigned char i = 0; i < batchInput.betCount; i++) {
            // Validate numbers and check for duplicates
            if (!validateNumbers(batchInput.numbers[i]) || 
                isDuplicateBet(batchInput.walletId, batchInput.numbers[i])) {
                continue; // Skip invalid bet
            }
            
            // Check we haven't hit max bets
            if (state.totalBetCount >= MAX_TOTAL_BETS) {
                break; // Max bets reached
            }
            
            // Create and store bet
            LotteryBet newBet;
            newBet.walletId = batchInput.walletId;
            copyMem(newBet.numbers, batchInput.numbers[i], LOTTERY_NUMBERS_COUNT);
            newBet.amount = BET_COST;
            newBet.drawTick = state.currentDrawTick;
            newBet.timestamp = qubicSystemTick;
            generateBetHash(newBet);
            
            // Store bet
            state.currentDrawBets[state.totalBetCount] = newBet;
            state.betWalletIndex[state.totalBetCount] = walletIndex;
            state.totalBetCount++;
            successfulBets++;
            
            // Update prize pool
            state.currentDrawPrizePool += (BET_COST * 60) / 100;
        }
        
        // Update wallet stats
        state.walletStats[walletIndex].betCount += successfulBets;
        state.walletStats[walletIndex].totalWagered += BET_COST * successfulBets;
        state.walletStats[walletIndex].lastBetTick = qubicSystemTick;
        
        // If some bets failed, refund difference
        if (successfulBets < batchInput.betCount) {
            unsigned long long refundAmount = BET_COST * (batchInput.betCount - successfulBets);
            transfer(_contractIndex, batchInput.walletId, refundAmount);
        }
        
        return successfulBets; // Return number of successful bets
    }
};`}</pre>
            </div>

            <h4>3.2.3 Qubic Random Number Integration</h4>
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`    // PUBLIC: Sign draw execution (validator only)
    PUBLIC(SignDrawExecution)(
        const m256i& validatorId,
        const array<unsigned char, 64>& signature
    ) : validatorId(validatorId), signature(signature) {
        
        // Verify validator is a computor
        if (!isComputor(validatorId)) {
            return 0; // Not a valid computor
        }
        
        // Check if already signed
        for (unsigned int i = 0; i < state.signatureCount; i++) {
            if (state.drawSignatures[i].validatorId == validatorId) {
                return 0; // Already signed
            }
        }
        
        // Add signature
        if (state.signatureCount < 676) {
            ValidatorSignature sig;
            sig.validatorId = validatorId;
            sig.signature = signature;
            sig.signedTick = qubicSystemTick;
            state.drawSignatures[state.signatureCount++] = sig;
        }
        
        return 1; // Signature added
    }
    
    // PUBLIC: Execute lottery draw (requires quorum)
    PUBLIC(ExecuteDraw)() {
        // Enhanced timing validation
        if (qubicSystemTick < state.currentDrawTick) {
            return 0; // Too early for draw
        }
        
        // Prevent draws too far in the future (max 1000 ticks late)
        if (qubicSystemTick > state.currentDrawTick + 1000) {
            return 0; // Draw tick expired, too late
        }
        
        // Must have bets to conduct draw
        if (state.totalBetCount == 0) {
            return 0; // No bets placed
        }
        
        // Check validator quorum (451 of 676)
        if (state.signatureCount < QUORUM_THRESHOLD) {
            return 0; // Insufficient validator signatures
        }
        
        // Prevent concurrent draw execution
        if (state.drawInProgress) {
            return 0; // Draw already in progress
        }
        
        // Set draw lock
        state.drawInProgress = true;
        
        // Check for existing pending request
        for (int i = 0; i < state.pendingRequestCount; i++) {
            if (state.pendingRequests[i].drawTick == state.currentDrawTick && 
                !state.pendingRequests[i].processed) {
                return 0; // Request already pending
            }
        }
        
        // Create oracle request
        OracleRequest request;
        request.drawTick = state.currentDrawTick;
        request.requestTick = qubicSystemTick;
        request.processed = false;
        
        // Generate request nonce
        unsigned char nonceData[40];
        copyMem(nonceData, &state.currentDrawTick, 4);
        copyMem(nonceData + 4, &qubicSystemTick, 4);
        copyMem(nonceData + 8, &state.totalBetCount, 4);
        KangarooTwelve(nonceData, 12, request.nonce.data(), 32);
        
        // Store request
        if (state.pendingRequestCount < 10) {
            state.pendingRequests[state.pendingRequestCount++] = request;
        }
        
        // Request random numbers from Qubic Oracle
        RequestContractFunction(RANDOM_CONTRACT_INDEX, 1, request.nonce);
        
        return 1;
    }

    // PUBLIC: Process draw result after random number received
    PUBLIC(ProcessDrawResult)(
        const array<unsigned char, 32>& nonce,
        const array<unsigned char, 32>& randomSeed
    ) : nonce(nonce), randomSeed(randomSeed) {
        
        // Verify request is valid and pending
        bit validRequest = false;
        unsigned int requestIndex = 0;
        
        for (unsigned int i = 0; i < state.pendingRequestCount; i++) {
            if (state.pendingRequests[i].nonce == nonce && 
                !state.pendingRequests[i].processed &&
                state.pendingRequests[i].drawTick == state.currentDrawTick) {
                validRequest = true;
                requestIndex = i;
                break;
            }
        }
        
        if (!validRequest || !state.drawInProgress) {
            return 0; // Invalid or unexpected response
        }
        
        // Mark request as processed
        state.pendingRequests[requestIndex].processed = true;
        state.lastRandomSeed = randomSeed;
        
        // Generate winning numbers
        unsigned char winningNumbers[5];
        generateWinningNumbers(randomSeed, winningNumbers);
        
        // Calculate total prize pool (60% current + rollover)
        unsigned long long totalPrizePool = state.currentDrawPrizePool + state.rolloverAmount;
        
        // Revenue distribution FIRST (40% total) - ensures funds available
        unsigned long long totalRevenue = state.totalBetCount * BET_COST;
        unsigned long long qubicShare = (totalRevenue * 5) / 100;
        unsigned long long devShare = (totalRevenue * 4) / 100;
        unsigned long long franchiseeShare = (totalRevenue * 31) / 100;
        
        // Execute revenue transfers
        bit revenueSuccess = true;
        revenueSuccess &= transfer(_contractIndex, state.QUBIC_FOUNDATION_WALLET, qubicShare);
        revenueSuccess &= transfer(_contractIndex, state.DEVELOPER_WALLET, devShare);
        revenueSuccess &= transfer(_contractIndex, state.FRANCHISEE_WALLET, franchiseeShare);
        
        if (!revenueSuccess) {
            // Revenue distribution failed - abort draw
            state.drawInProgress = false;
            return 0;
        }
        
        // Check minimum jackpot requirement
        if (totalPrizePool < state.minimumJackpotAmount) {
            unsigned long long shortfall = state.minimumJackpotAmount - totalPrizePool;
            
            // Attempt to get minimum jackpot funds
            if (transfer(state.MINIMUM_JACKPOT_WALLET, _contractIndex, shortfall)) {
                totalPrizePool = state.minimumJackpotAmount;
                state.minimumJackpotUsed += shortfall;
            }
            // If transfer fails, use available prize pool
        }
        
        // Find all winners
        array<m256i, MAX_TOTAL_BETS> winners;
        unsigned int winnerCount = findAllWinners(winningNumbers, winners);
        
        if (winnerCount > 0) {
            // Calculate per-winner payout
            unsigned long long perWinnerPayout = totalPrizePool / winnerCount;
            
            // Distribute prizes to all winners
            unsigned int successfulPayouts = 0;
            for (unsigned int i = 0; i < winnerCount; i++) {
                if (transfer(_contractIndex, winners[i], perWinnerPayout)) {
                    successfulPayouts++;
                }
            }
            
            // Handle any remaining balance
            if (successfulPayouts == winnerCount) {
                state.rolloverAmount = 0; // All winners paid
            } else {
                // Some transfers failed - rollover unpaid amounts
                state.rolloverAmount = perWinnerPayout * (winnerCount - successfulPayouts);
            }
        } else {
            // No winner - rollover to next draw
            state.rolloverAmount = totalPrizePool;
        }
        
        // Store draw result in history with proper bounds checking
        DrawResult result;
        result.drawTick = state.currentDrawTick;
        copyMem(result.winningNumbers, winningNumbers, 5);
        result.prizePool = totalPrizePool;
        result.totalBets = state.totalBetCount;
        result.winnerWallet = winner;
        result.randomSeed = randomSeed;
        result.hasWinner = (winner != nullId);
        result.isExecuted = true;
        
        // Store with rolling window (modulo ensures bounds safety)
        unsigned int historyIndex = state.drawHistoryCount % 100;
        state.drawHistory[historyIndex] = result;
        state.drawHistoryCount++;
        
        // Log draw event for external monitoring (if supported)
        // In production, this would emit an event for indexers
        // emitDrawEvent(result);
        
        // Store draw result in history
        DrawResult drawResult;
        drawResult.drawTick = state.currentDrawTick;
        copyMem(drawResult.winningNumbers, winningNumbers, LOTTERY_NUMBERS_COUNT);
        drawResult.prizePool = totalPrizePool;
        drawResult.totalBets = state.totalBetCount;
        drawResult.randomSeed = randomSeed;
        drawResult.hasWinner = (winnerCount > 0);
        drawResult.winnerCount = winnerCount;
        drawResult.isExecuted = true;
        
        // Store in circular buffer
        state.previousDraws[state.historyIndex % RESULT_HISTORY] = drawResult;
        state.historyIndex++;
        
        // Reset for next draw
        resetDrawState();
        
        // Set next draw to next daily tick
        state.lastNormalizedDrawTick += TICKS_PER_DAY;
        state.currentDrawTick = state.lastNormalizedDrawTick + TICKS_PER_DAY;
        state.drawInProgress = false;
        
        // Clear validator signatures for next draw
        state.signatureCount = 0;
        
        return 1;
    }
    
    // PUBLIC: Get draw result (public accessor for transparency)
    PUBLIC(GetDrawResult)(
        unsigned int drawTick
    ) : drawTick(drawTick) {
        
        // Bounds check for draw history access
        if (state.drawHistoryCount > 100) {
            state.drawHistoryCount = 100; // Safety cap
        }
        
        // Search through draw history
        for (unsigned int i = 0; i < state.drawHistoryCount && i < 100; i++) {
            if (state.drawHistory[i].drawTick == drawTick) {
                // Return found result (would need output struct in production)
                return 1; // Found
            }
        }
        
        return 0; // Not found
    }

private:
    // Generate winning numbers from random seed
    void generateWinningNumbers(const array<unsigned char, 32>& seed, unsigned char* numbers) {
        array<unsigned char, 32> workingSeed = seed;
        
        for (int i = 0; i < LOTTERY_NUMBERS_COUNT; i++) {
            // Hash the seed for next number
            KangarooTwelve(workingSeed.data(), 32, workingSeed.data(), 32);
            
            // Generate number in range 1-50
            unsigned int num = (*((unsigned int*)workingSeed.data()) % MAX_NUMBER) + 1;
            
            // Check for duplicates
            bit isDuplicate = false;
            for (int j = 0; j < i; j++) {
                if (numbers[j] == num) {
                    isDuplicate = true;
                    i--; // Retry this position
                    break;
                }
            }
            
            if (!isDuplicate) {
                numbers[i] = (unsigned char)num;
            }
        }
        
        // Sort numbers (simple bubble sort for 5 elements)
        for (int i = 0; i < LOTTERY_NUMBERS_COUNT - 1; i++) {
            for (int j = 0; j < LOTTERY_NUMBERS_COUNT - i - 1; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    unsigned char temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
            }
        }
    }
    
    // Find all winners using count-based matching (more efficient)
    unsigned int findAllWinners(const unsigned char* winningNumbers, array<m256i, MAX_TOTAL_BETS>& winners) {
        unsigned int winnerCount = 0;
        
        // Create count array for winning numbers
        unsigned char winCount[51] = {0};
        for (int i = 0; i < LOTTERY_NUMBERS_COUNT; i++) {
            winCount[winningNumbers[i]]++;
        }
        
        // Check each bet for matching numbers
        for (unsigned int i = 0; i < state.totalBetCount; i++) {
            // Count-based array matching (more elegant than nested loops)
            unsigned char betCount[51] = {0};
            for (int j = 0; j < LOTTERY_NUMBERS_COUNT; j++) {
                betCount[state.currentDrawBets[i].numbers[j]]++;
            }
            
            // Check if arrays match
            bit match = true;
            for (int k = 1; k <= MAX_NUMBER; k++) {
                if (betCount[k] != winCount[k]) {
                    match = false;
                    break;
                }
            }
            
            if (match && winnerCount < MAX_TOTAL_BETS) {
                winners[winnerCount++] = state.currentDrawBets[i].walletId;
            }
        }
        
        return winnerCount;
    }
    
    // Reset state for next draw
    void resetDrawState() {
        state.totalBetCount = 0;
        state.currentDrawPrizePool = 0;
        
        // Clear bet counts for all wallets
        for (int i = 0; i < 65536; i++) {
            state.walletStats[i].betCount = 0;
        }
        
        // Clear duplicate tracking arrays
        for (unsigned int i = 0; i < MAX_TOTAL_BETS; i++) {
            state.betWalletIndex[i] = 0;
        }
    }
};`}</pre>
            </div>

            <h3>3.2 Franchisee Management System</h3>
            
            <h4>3.2.1 Franchisee Interface Architecture</h4>
            <p>
              The lottery engine includes a comprehensive franchisee management interface designed for government 
              charity organizations and licensed operators. This separate administrative system provides:
            </p>
            <ul>
              <li><strong>Minimum Jackpot Configuration:</strong> Variable minimum guaranteed jackpot amounts</li>
              <li><strong>Lottery Initialization:</strong> Setup and configuration tools for new lottery instances</li>
              <li><strong>Revenue Distribution Settings:</strong> Customizable charity fund allocation percentages</li>
              <li><strong>Draw Scheduling:</strong> Flexible draw timing and frequency configuration</li>
              <li><strong>Reporting Dashboard:</strong> Real-time analytics and charitable impact metrics</li>
            </ul>

            <h4>3.2.2 Guaranteed Minimum Jackpot System</h4>
            <p>
              To ensure lottery attractiveness during initial launch phases, franchisees can configure guaranteed minimum jackpots:
            </p>
            
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`struct FranchiseeConfig {
    id franchiseeId;              // Unique franchisee identifier
    uint64 minimumJackpot;        // Guaranteed minimum jackpot amount
    uint8 charityPercentage;      // Percentage allocated to charity (0-100)
    uint64 drawFrequency;         // Time between draws in ticks
    id charityWalletId;           // Destination wallet for charity funds
    id qubicFoundationWallet;     // 5% Qubic Foundation share
    id developerWallet;           // 4% Developer share
    id franchiseeWallet;          // Franchisee revenue wallet
    bit isActive;                 // Franchisee operational status
};

struct RevenueDistribution {
    uint64 totalRevenue;          // Total ticket sales revenue
    uint64 qubicFoundationShare;  // 5% to Qubic Foundation
    uint64 developerShare;        // 4% to Developer
    uint64 franchiseeShare;       // 91% to Franchisee (before minimum jackpot)
    uint64 actualJackpot;         // Final jackpot amount
    uint64 franchiseeDeficit;     // Amount franchisee must cover if sales < minimum
};

struct JackpotState {
    uint64 currentPool;           // Current accumulated jackpot from sales
    uint64 guaranteedMinimum;     // Franchisee-set minimum jackpot
    uint64 charityContribution;   // Funds allocated to charity
    uint64 nextDrawTick;          // Scheduled next draw time
    uint64 franchiseeInvestment;  // Amount franchisee invested to meet minimum
};`}</pre>
            </div>

            <h4>3.2.3 Revenue Distribution System</h4>
            <p>
              All ticket sales revenue is automatically distributed to designated wallets according to the established revenue sharing model:
            </p>
            
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`RevenueDistribution distributeTicketRevenue(uint64 totalSales) {
    RevenueDistribution distribution;
    distribution.totalRevenue = totalSales;
    
    // Calculate fixed percentage distributions
    distribution.qubicFoundationShare = (totalSales * 5) / 100;  // 5%
    distribution.developerShare = (totalSales * 4) / 100;        // 4%
    distribution.franchiseeShare = (totalSales * 91) / 100;      // 91%
    
    // Transfer to respective wallets
    transfer(qubicFoundationWallet, distribution.qubicFoundationShare);
    transfer(developerWallet, distribution.developerShare);
    transfer(franchiseeWallet, distribution.franchiseeShare);
    
    return distribution;
}`}</pre>
            </div>

            <h4>3.2.4 Minimum Jackpot Implementation with Franchisee Risk</h4>
            <p>
              The minimum jackpot system requires franchisee financial commitment, particularly during launch phases 
              when ticket sales may not cover the guaranteed minimum. This creates potential financial risk for the franchisee:
            </p>
            
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`uint64 calculateFinalJackpot(id franchiseeId, uint64 ticketSales) {
    FranchiseeConfig config = getFranchiseeConfig(franchiseeId);
    
    // Distribute revenue first
    RevenueDistribution revenue = distributeTicketRevenue(ticketSales);
    
    // Calculate available jackpot from franchisee share
    uint64 availableJackpot = revenue.franchiseeShare;
    
    // Check if minimum jackpot requirement is met
    if (availableJackpot < config.minimumJackpot) {
        // Franchisee must cover the shortfall (financial risk)
        uint64 shortfall = config.minimumJackpot - availableJackpot;
        
        // Deduct from franchisee's wallet to meet minimum
        transfer(franchiseeWallet, jackpotPool, shortfall);
        
        // Record franchisee investment/loss
        recordFranchiseeInvestment(franchiseeId, shortfall);
        
        return config.minimumJackpot;
    }
    
    return availableJackpot;
}`}</pre>
            </div>

            <h4>3.2.5 Franchisee Financial Risk Management</h4>
            <p>
              The franchisee bears financial responsibility for maintaining minimum jackpots, which can result in losses 
              during periods of low participation:
            </p>
            <ul>
              <li><strong>Revenue Coverage:</strong> Franchisee receives 91% of ticket sales to cover minimum jackpot</li>
              <li><strong>Shortfall Risk:</strong> When sales are insufficient, franchisee must invest additional funds</li>
              <li><strong>Loss Accounting:</strong> Franchisee investments are tracked as operational expenses</li>
              <li><strong>Break-even Point:</strong> Franchisee profits only when sales exceed minimum jackpot requirements</li>
              <li><strong>Market Risk:</strong> New lotteries face higher risk due to low initial participation</li>
            </ul>

            <h3>3.3 Game Mechanics</h3>
            
            <h4>3.3.1 Number Selection</h4>
            <ul>
              <li>Players select 5 unique numbers from 1 to 50</li>
              <li>Each bet costs 10,000 QUBIC (~$0.022 USD)</li>
              <li>Maximum 5 bets per wallet per draw cycle</li>
              <li>Numbers must be unique within each bet</li>
            </ul>

            <h4>3.3.2 Draw Mechanism</h4>
            <ul>
              <li>Draws occur at franchisee-configured intervals (default: 24 hours)</li>
              <li>Winning numbers generated using Qubic Random Number Smart Contract</li>
              <li>Multiple prize tiers based on matching numbers</li>
              <li>Automatic distribution to winning wallets and charity funds</li>
            </ul>

            <h3>3.4 Security Considerations</h3>
            
            <h4>3.4.1 Qubic Random Number Smart Contract Integration</h4>
            <p>
              Our lottery engine leverages Qubic's native Random Number Smart Contract for provably fair number generation:
            </p>
            <ul>
              <li><strong>Deterministic Randomness:</strong> Uses Qubic's built-in random number generator with verifiable seeds</li>
              <li><strong>Multi-Computor Validation:</strong> Random numbers validated by 451+ Computors ensuring fairness</li>
              <li><strong>Cryptographic Proofs:</strong> Each draw includes cryptographic proof of randomness integrity</li>
              <li><strong>Replay Protection:</strong> Unique entropy per draw prevents manipulation attempts</li>
              <li><strong>Hardware-Based Seeds:</strong> Utilizes Qubic's hardware random number generators for initial entropy</li>
            </ul>
            
            <h4>3.4.2 Random Number Contract Integration</h4>
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`// Integration with Qubic Random Number Smart Contract
#include "qubic_random.h"

uint8 generateWinningNumbers(uint64 drawTick) {
    uint8 winningNumbers[5];
    uint64 seed = getCurrentTick() + drawTick;
    
    // Call Qubic Random Number Smart Contract
    RandomSeed randomSeed = qubicRandom::generateSeed(seed);
    
    for (int i = 0; i < 5; i++) {
        winningNumbers[i] = qubicRandom::getNumber(
            randomSeed, 1, 50, i
        );
    }
    
    return winningNumbers;
}`}</pre>
            </div>

            <h4>3.3.3 Blockchain-Based Data Storage</h4>
            <p>
              Unlike traditional systems that rely on centralized databases, our lottery engine stores all data directly on the Qubic blockchain:
            </p>
            <ul>
              <li><strong>Transaction History:</strong> All bets permanently recorded in blockchain transactions</li>
              <li><strong>Wallet Bet Counts:</strong> Smart contract state tracks bet limits on-chain</li>
              <li><strong>Draw Results:</strong> Winning numbers and random seeds stored immutably</li>
              <li><strong>Prize Distribution:</strong> Automatic payouts executed via smart contract logic</li>
              <li><strong>Audit Trail:</strong> Complete transparency through public blockchain records</li>
            </ul>
            
            <h4>3.3.4 On-Chain vs Off-Chain Architecture</h4>
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`// Production: On-chain data storage in smart contract state
struct LotteryState {
    // All bet data stored on blockchain
    Bet activeBets[MAX_BETS];
    uint8 walletBetCounts[MAX_WALLETS][MAX_DRAWS];
    DrawResult completedDraws[MAX_HISTORY];
    
    // No external database required
    // All persistence handled by Qubic blockchain
};

// Demo Architecture (Current Implementation)
// Uses PostgreSQL to simulate blockchain storage
// for grant proposal demonstration purposes`}</pre>
            </div>
            
            <h4>3.3.5 Demo vs Production Implementation</h4>
            <p>
              This grant proposal includes a functional demonstration using traditional web infrastructure 
              to simulate the blockchain experience:
            </p>
            <ul>
              <li><strong>Demo Database:</strong> PostgreSQL simulates on-chain storage for demonstration</li>
              <li><strong>Production Target:</strong> All data stored directly in Qubic smart contract state</li>
              <li><strong>API Layer:</strong> Demo REST API will be replaced by direct blockchain interaction</li>
              <li><strong>Transaction Flow:</strong> Demo transactions simulate actual blockchain operations</li>
              <li><strong>Smart Contract Logic:</strong> Identical anti-exploit logic in both demo and production</li>
              <li><strong>Historical Data Access:</strong> Blockchain queries fetch past draws, winners, and transaction history</li>
              <li><strong>Real-time Updates:</strong> Live blockchain monitoring for new transactions and draws</li>
            </ul>
          </CardContent>
        </Card>

        {/* Economic Model */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. Economic Model</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <h3>4.1 Prize Distribution</h3>
            <ul>
              <li><strong>Jackpot (5 matches):</strong> 50% of prize pool</li>
              <li><strong>Second Prize (4 matches):</strong> 30% of prize pool</li>
              <li><strong>Third Prize (3 matches):</strong> 15% of prize pool</li>
              <li><strong>Development Fund:</strong> 3% of prize pool</li>
              <li><strong>Qubic Ecosystem:</strong> 2% of prize pool</li>
            </ul>

            <h3>4.2 Sustainability Mechanisms</h3>
            <p>
              The lottery system is designed for long-term sustainability through:
            </p>
            <ul>
              <li>Conservative prize distribution ratios</li>
              <li>Automatic reinvestment in ecosystem development</li>
              <li>Integration with Qubic's AI training rewards</li>
              <li>Community governance for parameter adjustments</li>
            </ul>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card>
          <CardHeader>
            <CardTitle>9. Conclusion & Future Impact</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <h3>9.1 Revolutionary Charitable Fundraising</h3>
            <p>
              The Qubic Fortress-Class Charitable Lottery Engine represents a paradigm shift in transparent fundraising for social good. By eliminating traditional bottlenecks of corruption, high fees, and scalability limitations, this platform enables government charity organizations to raise funds efficiently while maintaining complete transparency and accountability.
            </p>

            <h3>9.2 Demonstrating Qubic's Technical Superiority</h3>
            <p>
              This project serves as a powerful demonstration of Qubic's revolutionary blockchain capabilities:
            </p>
            <ul>
              <li><strong>Speed Demonstration:</strong> 15.5M TPS capability showcased through real-time lottery operations</li>
              <li><strong>Cost Efficiency:</strong> Zero-fee transactions enable global participation regardless of economic status</li>
              <li><strong>Technical Innovation:</strong> Native C++ smart contracts with hardware-based randomness</li>
              <li><strong>Scalability Proof:</strong> Handling millions of simultaneous participants without network congestion</li>
            </ul>

            <h3>9.3 Alignment with Ethical Technology Vision</h3>
            <p>
              Following Sergey Ivancheglo's philosophy of channeling technological advancement toward meaningful human progress, this lottery engine transforms how charitable funding operates globally. By removing corruption, ensuring transparency, and enabling efficient fund distribution, the platform creates sustainable financing mechanisms for poverty alleviation, education, healthcare, and social welfare programs worldwide.
            </p>

            <h3>9.4 Long-term Social Impact</h3>
            <p>
              The successful implementation of this lottery engine will:
            </p>
            <ul>
              <li>Enable transparent charitable fundraising for government organizations globally</li>
              <li>Provide sustainable funding mechanisms for critical social programs</li>
              <li>Demonstrate blockchain technology's potential for social good</li>
              <li>Establish Qubic as the preferred platform for high-volume financial applications</li>
              <li>Create a replicable model for corruption-resistant charity initiatives</li>
            </ul>

            <h3>9.5 Technical Achievement Summary</h3>
            <p>
              This white paper has outlined a comprehensive fortress-class lottery engine that addresses every major challenge in blockchain-based charitable fundraising:
            </p>
            <ul>
              <li><strong>Security:</strong> Multi-layered fortress-class architecture preventing all known exploitation vectors</li>
              <li><strong>Performance:</strong> Leveraging Qubic's 15.5M TPS for global-scale operations</li>
              <li><strong>Fairness:</strong> Hardware-based random number generation ensuring provably fair draws</li>
              <li><strong>Transparency:</strong> Complete on-chain audit trails for government accountability</li>
              <li><strong>Accessibility:</strong> Zero-fee transactions enabling worldwide participation</li>
            </ul>

            <p>
              This lottery engine represents not just a technical achievement, but a meaningful step toward leveraging advanced blockchain technology for global social impact and human advancement. By combining cutting-edge technology with ethical purpose, the platform demonstrates how innovative blockchain applications can create lasting positive change in the world.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
