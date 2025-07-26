# Qubic Anti-Exploit Lottery Engine

## Overview

This project demonstrates an innovative lottery engine built on the Qubic blockchain, designed to prevent common exploitation vulnerabilities while maintaining exceptional user experience. The engine implements a 5/50 lottery game with advanced anti-exploit mechanisms including wallet-based bet limitations, Qubic Random Number Smart Contract integration for provably fair draws, and both single bet and batch transaction optimization.

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

### Anti-Exploit Mechanisms
- **Wallet Bet Limiting**: Maximum 5 bets per wallet address per lottery draw
- **Draw Tick Validation**: Each bet is tied to a specific draw tick preventing cross-draw exploitation
- **Qubic Random Number Smart Contract**: Integration with Qubic's native random number generator for provably fair draws
- **Smart Contract Implementation**: Complete C++ smart contract logic for Qubic blockchain deployment

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

This architecture demonstrates advanced blockchain application development while maintaining compatibility with traditional web infrastructure during the development and demonstration phase.