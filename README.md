# Qubic Fortress-Class Lottery Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)
[![Qubic](https://img.shields.io/badge/Blockchain-Qubic-orange.svg)](https://qubic.org/)

> A revolutionary blockchain lottery engine designed for government charity initiatives, creating transparent and corruption-resistant funding for poverty alleviation, education, and healthcare. Built on Qubic's unmatched 15.5M TPS blockchain to demonstrate high-speed infrastructure for global-scale charitable impact.

## 🌟 Project Overview

The Qubic Lottery Engine is a fortress-class charitable fundraising platform that leverages cutting-edge blockchain technology for transformative ecosystem development and transparent fundraising. This project serves as both a functional lottery system and a demonstration of Qubic blockchain's exceptional performance capabilities.

### Key Features

- **⚡ Ultra-High Performance**: Leverages Qubic's 15.5M transactions per second capability
- **🛡️ Fortress-Class Security**: Wallet-based bet limitations and anti-exploit architecture
- **🎲 Provably Fair**: Integration with Qubic Random Number Smart Contract
- **🏛️ Government-Ready**: Designed for transparent charitable initiatives
- **💰 Revenue Distribution**: Automated sharing (5% Foundation, 4% Developer, 91% Franchisee)
- **📱 Modern UI**: Professional React/TypeScript interface with real-time updates

## 🚀 Live Demo

**[View Live Application](https://lotteryengine.replit.app/)**

Experience the interactive lottery engine with:
- Qubic wallet address integration
- Real-time number selection (5/50 format)
- Fortress-class betting restrictions
- Live jackpot display with cryptocurrency conversions

## 🏗️ Architecture

### Technology Stack

**Frontend**
- React 18 with TypeScript
- Shadcn/ui components on Radix UI
- Tailwind CSS with custom Qubic theming
- TanStack Query for state management
- Wouter for client-side routing

**Backend**
- Node.js with Express.js REST API
- PostgreSQL with Drizzle ORM
- Neon serverless database
- Session management with connect-pg-simple

**Blockchain Integration**
- C++ Smart Contract for Qubic blockchain
- Qubic Random Number Smart Contract integration
- Wallet address validation (56-character format)
- Anti-exploit protection with per-wallet bet limits

### System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Client  │────│  Express API    │────│ Qubic Blockchain│
│                 │    │                 │    │                 │
│ • Number Select │    │ • Bet Validation│    │ • Smart Contract│
│ • Wallet Input  │    │ • Wallet Limits │    │ • Random Numbers│
│ • Real-time UI  │    │ • Revenue Split │    │ • Draw Results  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📋 Prerequisites

- Node.js 20 or higher
- npm or yarn package manager
- PostgreSQL database (or use included Neon setup)
- Qubic wallet for testing (optional)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/qubic-lottery-engine.git
cd qubic-lottery-engine
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL="your-postgresql-connection-string"

# Development Settings
NODE_ENV=development
PORT=5000
```

### 4. Database Setup

```bash
# Run database migrations
npm run db:migrate

# Seed initial data (optional)
npm run db:seed
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 🎮 Usage Guide

### For Users

1. **Enter Wallet Address**: Input your 56-character Qubic wallet address
2. **Select Numbers**: Choose 5 unique numbers from 1-50
3. **Place Bets**: Submit individual bets or batch multiple selections
4. **Track Progress**: Monitor your bet count (max 5 per wallet per draw)
5. **View Results**: Check recent winners and blockchain history

### For Developers

```bash
# Development commands
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run test suite
npm run lint         # Code quality checks
npm run db:migrate   # Database migrations
```

## 🔧 Configuration

### Lottery Parameters

- **Bet Cost**: 10,000 QUBIC per ticket
- **Number Range**: 1-50 (select 5)
- **Wallet Limit**: 5 bets per wallet per draw
- **Revenue Split**: 
  - 60% Prize Pool
  - 31% Franchisee Share
  - 5% Qubic Foundation
  - 4% Developer

### Smart Contract Configuration

The C++ smart contract includes:
- Fortress-class security patterns
- Qubic Random Number integration
- Automatic revenue distribution
- Anti-exploit validation

## 📚 API Documentation

### Core Endpoints

- `GET /api/lottery/jackpot` - Current jackpot information
- `GET /api/lottery/wallet-bets/:address` - Wallet bet count
- `POST /api/lottery/place-bet` - Submit single bet
- `POST /api/lottery/batch-bets` - Submit multiple bets
- `GET /api/blockchain/draws` - Recent draw results

### Example API Usage

```javascript
// Place a single bet
const response = await fetch('/api/lottery/place-bet', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    walletAddress: 'YOUR_56_CHAR_QUBIC_ADDRESS',
    selectedNumbers: [7, 14, 21, 28, 35],
    amount: 10000
  })
});
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test suites
npm run test:unit       # Unit tests
npm run test:integration # Integration tests
npm run test:e2e        # End-to-end tests
```

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Environment Variables (Production)

```env
NODE_ENV=production
DATABASE_URL="your-production-database-url"
PORT=5000
```

## 🤝 Contributing

We welcome contributions to the Qubic Lottery Engine! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use conventional commit messages
- Add tests for new features
- Update documentation as needed
- Ensure code passes all linting checks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Project Team

**VPX Development Team**
- **Norlito Sepulvida** - Founder & Lead Blockchain Developer
  - President, Assessment and Research Center of the Philippines
  - Founder of VPX (The Alibaba of Southeast Asia)
  - Inventor of Starshades™ Nose Therapy Glasses
  - Contact: norlitouysepulvida@gmail.com | [@QubicEngine](https://x.com/QubicEngine)

- **Shalom Sepulvida** - Systems Architect
- **Elijohn Sepulvida** - Frontend Developer  
- **Jeson Sepulvida** - Project Coordinator

## 🌍 Mission & Impact

The Qubic Lottery Engine is designed to demonstrate technology for social good, following the ethical philosophy of Sergey Ivancheglo (Come-from-Beyond) and the Qubic Foundation. Our primary focus areas include:

- **Poverty Alleviation**: Transparent fundraising for economic development
- **Education Funding**: Supporting educational initiatives globally
- **Healthcare Access**: Funding medical programs in underserved areas
- **Technology Demonstration**: Showcasing Qubic's 15.5M TPS capabilities

## 📞 Support & Contact

- **Documentation**: [Project Wiki](https://github.com/your-username/qubic-lottery-engine/wiki)
- **Issues**: [GitHub Issues](https://github.com/your-username/qubic-lottery-engine/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/qubic-lottery-engine/discussions)
- **Email**: norlitouysepulvida@gmail.com

## 🔗 Links

- [Qubic Foundation](https://qubic.org/)
- [Live Demo](https://your-replit-url.replit.dev/)
- [Technical Documentation](./docs/)
- [Smart Contract Code](./docs/smart-contract.md)
- [API Reference](./docs/api.md)

---

**Built with ❤️ for global charitable impact on Qubic blockchain**
