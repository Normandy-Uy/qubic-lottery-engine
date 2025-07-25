# Qubic Anti-Exploit Lottery System

## Overview

This project demonstrates an innovative lottery system built on the Qubic blockchain, designed to prevent common exploitation vulnerabilities while maintaining exceptional user experience. The system implements a 5/50 lottery game with advanced anti-exploit mechanisms including wallet-based bet limitations and batch transaction optimization.

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

### Database Schema
The system uses four main tables:
- `users`: Basic user authentication (username/password)
- `lottery_bets`: Individual lottery tickets with wallet address, selected numbers, and draw tick
- `lottery_draws`: Draw information including winning numbers and jackpot amounts
- `wallet_bet_counts`: Anti-exploit tracking limiting 5 bets per wallet per draw

## Key Components

### Anti-Exploit Mechanisms
- **Wallet Bet Limiting**: Maximum 5 bets per wallet address per lottery draw
- **Draw Tick Validation**: Each bet is tied to a specific draw tick preventing cross-draw exploitation
- **Smart Contract Simulation**: Preview of C++ smart contract logic for Qubic blockchain deployment

### Lottery Game Logic
- **5/50 Format**: Players select 5 unique numbers from 1-50
- **Fixed Bet Amount**: 10,000 QUBIC per ticket
- **Real-time Jackpot**: Live jackpot display with cryptocurrency price conversions
- **Batch Betting**: Users can place multiple bets in a single transaction

### User Interface Components
- **Live Demo**: Interactive lottery simulator with number selection
- **Jackpot Display**: Real-time jackpot with multi-currency conversion
- **Smart Contract Preview**: Code preview showing anti-exploit logic
- **Recent Winners**: Display of recent lottery winners
- **Technical Documentation**: White paper and mechanics explanations

## Data Flow

1. **User Interaction**: Users select numbers and place bets through the React frontend
2. **API Communication**: TanStack Query manages API calls to Express backend
3. **Validation Layer**: Server validates bet limits, number selections, and wallet constraints
4. **Database Operations**: Drizzle ORM performs type-safe database transactions
5. **Real-time Updates**: Query invalidation ensures UI reflects latest state
6. **Anti-Exploit Checks**: System enforces 5-bet limit per wallet per draw

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
The system is designed for future deployment to Qubic blockchain:
- **Smart Contract**: C++ implementation with native anti-exploit logic
- **High Performance**: Leverages Qubic's 15.5M TPS capability
- **Fee Efficiency**: Batch transactions reduce network costs
- **Native Integration**: Direct blockchain interaction without intermediate layers

This architecture demonstrates advanced blockchain application development while maintaining compatibility with traditional web infrastructure during the development and demonstration phase.