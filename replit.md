# Qubic Fortress-Class Lottery Engine

## Overview

This project demonstrates an innovative fortress-class charitable lottery engine built on the Qubic blockchain, designed primarily for government charity initiatives and aligned with the ethical philosophy of Sergey Ivancheglo (ComefromBehind) and the Qubic Foundation. The engine implements a 5/50 lottery game with fortress-class security architecture including wallet-based bet limitations, Qubic Random Number Smart Contract integration for provably fair draws, and both single bet and batch transaction optimization. Features a comprehensive franchisee management system with guaranteed minimum jackpot functionality. The primary purpose is to create transparent, corruption-resistant funding mechanisms for poverty alleviation, education, healthcare, and social welfare programs worldwide.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom Qubic-themed color palette
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js REST API
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development Storage**: In-memory storage implementation for demo purposes

### Data Storage Architecture
In production, all data is stored directly on the Qubic blockchain:
- **Smart Contract State**: Stores all bet data, wallet counts, and draw results on-chain
- **Blockchain Transactions**: Each bet is a permanent blockchain transaction
- **No External Database**: All persistence handled by Qubic's native storage
- **Demo Database**: Current implementation uses PostgreSQL for demonstration purposes only

## Key Components

### Fortress-Class Security Mechanisms
- **Wallet Bet Limiting**: Maximum 5 bets per wallet address per lottery draw
- **Draw Tick Validation**: Each bet is tied to a specific draw tick preventing cross-draw exploitation
- **Qubic Random Number Smart Contract**: Integration with Qubic's native random number generator for provably fair draws
- **Smart Contract Implementation**: Complete C++ smart contract logic for Qubic blockchain deployment
- **Franchisee Management System**: Separate administrative interface for government charity organizations
- **Guaranteed Minimum Jackpots**: Variable minimum jackpot amounts to ensure lottery attractiveness during launch phases

### Lottery Engine Logic
- **5/50 Format**: Players select 5 unique numbers from 1-50
- **Fixed Bet Amount**: 10,000 QUBIC per ticket
- **Real-time Jackpot**: Live jackpot display with cryptocurrency price conversions
- **Single & Batch Betting**: Users can place individual bets or batch multiple bets in a single transaction
- **Provably Fair Draws**: Uses Qubic Random Number Smart Contract for verifiable randomness

### User Interface Components
- **Live Demo**: Interactive lottery engine simulator with number selection
- **Jackpot Display**: Real-time jackpot with multi-currency conversion
- **Smart Contract Preview**: C++ code preview showing anti-exploit logic and Qubic Random Number Contract integration
- **Recent Winners**: Display of recent lottery winners
- **Technical Documentation**: White paper and mechanics explanations with Qubic Random Number Smart Contract details
- **Single & Batch Betting**: Support for both individual bet submission and batch processing

## Data Flow

1. **User Interaction**: Users select numbers and place single bets or add to batch through the React frontend
2. **API Communication**: TanStack Query manages API calls to Express backend
3. **Validation Layer**: Smart contract validates bet limits, number selections, and wallet constraints
4. **Blockchain Operations**: All data stored directly on Qubic blockchain (demo uses PostgreSQL)
5. **Real-time Updates**: Query invalidation ensures UI reflects latest blockchain state
6. **Anti-Exploit Checks**: Smart contract enforces 5-bet limit per wallet per draw on-chain
7. **Random Number Generation**: Qubic Random Number Smart Contract provides provably fair winning numbers

## External Dependencies

### Frontend Dependencies
- **UI Components**: Extensive Radix UI component library for accessible interfaces
- **State Management**: TanStack Query for server state synchronization
- **Form Handling**: React Hook Form with Zod validation
- **Date Utilities**: date-fns for time formatting
- **Icons**: Lucide React icon library

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Validation**: Zod for runtime type validation and schema generation
- **Session Storage**: connect-pg-simple for PostgreSQL-based sessions
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin and Replit-specific enhancements
- **Database Management**: Drizzle Kit for migrations and schema management
- **Type Checking**: TypeScript with strict configuration
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite development server with HMR support
- **Database**: Neon serverless PostgreSQL for development
- **Error Handling**: Replit-specific error overlays and debugging tools
- **Asset Management**: Vite handles static asset optimization

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Database**: Drizzle migrations ensure schema consistency
- **Environment**: Production NODE_ENV with environment variable configuration

### Qubic Blockchain Integration
The lottery engine is designed for deployment to Qubic blockchain:
- **Smart Contract**: C++ implementation with native anti-exploit logic and Qubic Random Number Smart Contract integration
- **High Performance**: Leverages Qubic's 15.5M TPS capability
- **Fee Efficiency**: Single and batch transactions reduce network costs
- **Native Integration**: Direct blockchain interaction without intermediate layers
- **Provably Fair**: Uses Qubic's native Random Number Smart Contract for verifiable randomness
- **Hardware-Based Entropy**: Utilizes Qubic's hardware random number generators

## Recent Changes

### January 2025 Updates
- **Terminology Update**: Changed all references from "lottery system" to "lottery engine" throughout the application
- **Qubic Random Number Integration**: Added comprehensive integration with Qubic Random Number Smart Contract
- **Single Bet Functionality**: Enabled individual bet submission alongside existing batch processing
- **Smart Contract Enhancement**: Updated C++ code to include random number generation and draw functionality
- **Documentation Updates**: Enhanced whitepaper with detailed Qubic Random Number Smart Contract technical specifications
- **Architecture Clarification**: Updated documentation to clarify that production uses blockchain as database, current demo uses PostgreSQL for demonstration purposes
- **Blockchain History Integration**: Added comprehensive blockchain data fetching to display historical draws, winners, and transaction history
- **Historical Data Display**: Created dedicated blockchain history component showing past lottery results fetched from on-chain data
- **Charitable Mission Integration**: Added comprehensive mission, vision, and goals sections emphasizing the lottery engine's purpose for government charity initiatives
- **Founder Philosophy Alignment**: Integrated references to Sergey Ivancheglo (Come-from-Beyond) and Qubic Foundation's ethical commitment to technology for social good
- **Social Impact Focus**: Updated all documentation to emphasize poverty alleviation, education, healthcare, and transparent charitable fundraising goals
- **Fortress-Class Terminology**: Updated from "Anti-Exploit" to "Fortress-Class" security architecture throughout the project
- **Franchisee Management System**: Added comprehensive franchisee interface documentation with guaranteed minimum jackpot functionality
- **Administrative Interface**: Documented separate franchisee management system for government charity organizations and licensed operators
- **Revenue Distribution System**: Added comprehensive wallet-based revenue sharing (5% Qubic Foundation, 4% Developer, 91% Franchisee)
- **Financial Risk Documentation**: Detailed franchisee financial risk model where franchisees cover minimum jackpot shortfalls and may incur losses during low-participation periods
- **Sergey Ivancheglo Integration**: Added "The Crypto Messiah" image and description on main page highlighting his vision of channeling energy wastage to AI
- **VPX Team About Page**: Created comprehensive About page featuring Norlito, Shalom, Elijohn, and Jeson Sepulvida with team roles and technology stack, including mention of their Alibaba-like e-commerce platform for Vietnam, Philippines, and Southeast Asia sourcing
- **Project Timeline**: Implemented detailed Timeline page with 5-phase development roadmap from testnet to global deployment (Jan-Dec 2025)
- **Project Proposal**: Created comprehensive grant proposal page following formal guidelines with 11 required sections (introduction, business need, model, features, components, architecture, user journey, scope/timeline, milestones, payment terms, team composition) under 2500 words
- **Qubic TPS Speed Demonstration**: Added extensive mentions throughout all pages that the lottery engine showcases Qubic's revolutionary 15.5M TPS speed to the world, positioning the project as a demonstration platform for Qubic's unmatched blockchain performance capabilities
- **C++ Smart Contract Production Hardening**: Implemented comprehensive security improvements including atomic transfer operations, proper bounds checking, oracle request validation with nonce tracking, XOR-folded wallet indexing, draw execution locks, and revenue distribution safety patterns - addressing all critical vulnerabilities identified in high-intelligence review
- **Enhanced Smart Contract Features from External Code Review**: Integrated transaction hash generation for bet tracking, result history storage (last 100 draws in circular buffer), structured BetOutput return types for better API design, and count-based array matching algorithm for more efficient winner detection
- **Competitive Analysis Integration**: Added comprehensive market analysis comparing Qubic's lottery engine to existing Ethereum-based solutions (particularly Quanta), highlighting Qubic's 15.5M TPS advantage over Ethereum's 15 TPS limitation, zero fees vs high gas costs, and instant finality benefits for global-scale charitable fundraising
- **Founder Profile Updates**: Updated About page to include Sepulvida family names and detailed founder credentials - Norlito as Founder of VPX (Alibaba of SE Asia), inventor of Starshades™ Nose Therapy Glasses, Founder of Universal Chess Ratings, and President of Assessment and Research Center of the Philippines
- **Timeline Enhancement**: Added GLI (Gaming Laboratories International) certification to Phase 2 testing requirements, ensuring comprehensive regulatory compliance alongside security audits
- **Smart Contract Navigation**: Created dedicated Smart Contract page and moved C++ implementation section from Live Demo page, added new navigation menu item next to Mechanics as requested
- **Full-Height Code Window**: Modified smart contract preview to display C++ code in full-height window (80vh) as requested, with features and metrics positioned below the code for better readability
- **Project Proposal Corrections**: Fixed business model section to clarify 91% is Franchisee share not charitable causes directly, updated "Charitable Causes / Franchisee Share" label for accuracy
- **Grants&Incubation Requirements Integration**: Added comprehensive compliance section covering all minimum requirements including 2500-word limit, SAFe principles for deliverables, QA process requirements, payment terms (no upfront, 20% max first payment, 30% min last payment), and USD/Qus conversion structure
- **Timeline Alignment and 2026 Update**: Synchronized Project Proposal timeline with main Timeline page, updated all dates from 2025 to 2026, included detailed security audit and GLI certification schedules, and enhanced deliverables section with specific quarterly milestones and compliance requirements

This architecture demonstrates advanced blockchain application development while maintaining compatibility with traditional web infrastructure during the development and demonstration phase.