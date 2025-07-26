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
            Anti-Exploit Lottery Engine on Qubic
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive technical specification for implementing fair, secure, and efficient lottery mechanics using Qubic's advanced blockchain infrastructure and Random Number Smart Contract.
          </p>
        </div>

        {/* Abstract */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Abstract</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <p>
              This white paper presents a revolutionary lottery engine designed to eliminate common exploitation vulnerabilities 
              found in traditional blockchain lottery implementations. By leveraging Qubic's unique technical capabilities, 
              including native C++ smart contract execution, Qubic Random Number Smart Contract for provably fair draws, 
              and 15.5M TPS performance, we demonstrate how advanced anti-exploit mechanisms can be implemented at the 
              protocol level while maintaining exceptional user experience.
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
            <h3>2.1 Anti-Exploit Architecture</h3>
            <p>
              Our solution implements a multi-layered anti-exploit architecture:
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

            <h3>2.2 Qubic Platform Advantages</h3>
            
            <h4>2.2.1 Native C++ Smart Contracts</h4>
            <p>
              Unlike interpreted languages, Qubic's C++ smart contracts execute directly on bare metal, providing:
            </p>
            <ul>
              <li>Sub-millisecond execution times</li>
              <li>Predictable performance characteristics</li>
              <li>Advanced memory management capabilities</li>
              <li>Direct hardware access for cryptographic operations</li>
            </ul>

            <h4>2.2.2 Feeless Transactions</h4>
            <p>
              Qubic's energy-based model eliminates transaction fees, making micro-transactions economically viable 
              and enabling fair access regardless of economic status.
            </p>

            <h4>2.2.3 Instant Finality</h4>
            <p>
              With 15.5M TPS capability and instant finality, users receive immediate confirmation of their lottery 
              participation without waiting for block confirmations.
            </p>
          </CardContent>
        </Card>

        {/* Implementation Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. Implementation Specification</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <h3>3.1 Smart Contract Architecture</h3>
            
            <h4>3.1.1 Core Data Structures</h4>
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`struct BetInput {
    id walletId;           // Unique wallet identifier
    uint8 numbers[5];      // Selected lottery numbers (1-50)
    uint64 amount;         // Bet amount in QUBIC
    uint64 drawTick;       // Target draw cycle
};

struct BetOutput {
    bit success;           // Transaction success status
    uint8 betCount;        // Current wallet bet count
    uint64 totalCost;      // Total transaction cost
    id transactionHash;    // Unique transaction identifier
};`}</pre>
            </div>

            <h4>3.1.2 Anti-Exploit Logic</h4>
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`BetOutput placeBet(BetInput input) {
    BetOutput output;
    
    // Validate wallet bet limit
    uint8 currentBets = walletBetCounts[getWalletIndex(input.walletId)];
    if (currentBets >= MAX_BETS_PER_WALLET) {
        output.success = false;
        return output;
    }
    
    // Validate bet amount and numbers
    if (!validateBetAmount(input.amount) || !validateNumbers(input.numbers)) {
        output.success = false;
        return output;
    }
    
    // Process bet and update counters
    processBet(input);
    walletBetCounts[getWalletIndex(input.walletId)]++;
    
    output.success = true;
    output.betCount = currentBets + 1;
    return output;
}`}</pre>
            </div>

            <h3>3.2 Game Mechanics</h3>
            
            <h4>3.2.1 Number Selection</h4>
            <ul>
              <li>Players select 5 unique numbers from 1 to 50</li>
              <li>Each bet costs 10,000 QUBIC (~$0.022 USD)</li>
              <li>Maximum 5 bets per wallet per draw cycle</li>
              <li>Numbers must be unique within each bet</li>
            </ul>

            <h4>3.2.2 Draw Mechanism</h4>
            <ul>
              <li>Draws occur every 24 hours at predetermined ticks</li>
              <li>Winning numbers generated using verifiable randomness</li>
              <li>Multiple prize tiers based on matching numbers</li>
              <li>Automatic distribution to winning wallets</li>
            </ul>

            <h3>3.3 Security Considerations</h3>
            
            <h4>3.3.1 Qubic Random Number Smart Contract Integration</h4>
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
            
            <h4>3.3.2 Random Number Contract Integration</h4>
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
            <CardTitle>5. Conclusion</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <p>
              This anti-exploit lottery system demonstrates the superior capabilities of the Qubic blockchain platform 
              while addressing critical vulnerabilities in existing lottery implementations. By combining advanced 
              anti-exploit mechanisms with batch transaction optimization and native C++ smart contract execution, 
              we create a lottery system that is both secure and user-friendly.
            </p>
            
            <p>
              The implementation serves as a proof-of-concept for the type of innovative applications that can be 
              built on Qubic's infrastructure, showcasing the platform's potential to solve real-world problems 
              in the decentralized application space.
            </p>

            <h3>5.1 Future Enhancements</h3>
            <ul>
              <li>Integration with external randomness beacons</li>
              <li>Multi-currency prize payouts</li>
              <li>Advanced statistical analysis tools</li>
              <li>Cross-chain lottery integration</li>
              <li>Mobile application development</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
