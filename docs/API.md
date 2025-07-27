# API Documentation

The Qubic Lottery Engine provides a RESTful API for managing lottery operations, wallet interactions, and blockchain data.

## 🔗 Base URL

```
Production: https://your-domain.com/api
Development: http://localhost:5000/api
```

## 🔐 Authentication

Currently, the API operates without authentication for demonstration purposes. In production, implement:
- JWT tokens for user sessions
- API keys for service access
- Rate limiting per wallet address

## 📋 Endpoints Overview

### Lottery Operations
- `GET /lottery/jackpot` - Current jackpot information
- `GET /lottery/current-draw` - Active draw details
- `GET /lottery/wallet-bets/:address` - Wallet bet count
- `POST /lottery/place-bet` - Submit single bet
- `POST /lottery/batch-bets` - Submit multiple bets
- `GET /lottery/recent-winners` - Recent winner list

### Blockchain Data
- `GET /blockchain/draws` - Historical draw results
- `GET /blockchain/transactions` - Transaction history

---

## 🎰 Lottery Endpoints

### Get Current Jackpot

Retrieves the current jackpot amount with multi-currency conversions.

```http
GET /api/lottery/jackpot
```

**Response:**
```json
{
  "qubic": 1500000000000,
  "usd": 3302999.999,
  "btc": 0.034406,
  "eth": 1.032813,
  "sol": 16.112195
}
```

**Response Fields:**
- `qubic` (number): Jackpot amount in QUBIC units
- `usd` (number): USD equivalent value
- `btc` (number): Bitcoin equivalent value
- `eth` (number): Ethereum equivalent value
- `sol` (number): Solana equivalent value

### Get Current Draw

Returns information about the active lottery draw.

```http
GET /api/lottery/current-draw
```

**Response:**
```json
{
  "id": "draw_001",
  "drawTick": 1234567,
  "isActive": true,
  "startTime": "2025-01-27T09:00:00Z",
  "endTime": "2025-01-27T21:00:00Z",
  "prizePool": 1500000000000,
  "totalBets": 142
}
```

### Get Wallet Bet Count

Checks how many bets a wallet has placed in the current draw.

```http
GET /api/lottery/wallet-bets/{walletAddress}
```

**Parameters:**
- `walletAddress` (string): 56-character Qubic wallet address

**Response:**
```json
{
  "betCount": 3,
  "maxBets": 5,
  "remaining": 2
}
```

**Error Responses:**
- `400 Bad Request`: Invalid wallet address format
- `404 Not Found`: No active draw found

### Place Single Bet

Submits a single lottery bet for the current draw.

```http
POST /api/lottery/place-bet
```

**Request Body:**
```json
{
  "walletAddress": "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ1234",
  "selectedNumbers": [7, 14, 21, 28, 35],
  "amount": 10000
}
```

**Request Fields:**
- `walletAddress` (string): Valid 56-character Qubic address
- `selectedNumbers` (array): 5 unique numbers between 1-50
- `amount` (number): Bet amount in QUBIC (default: 10000)

**Response:**
```json
{
  "success": true,
  "betId": "bet_abc123",
  "transactionHash": "0x1a2b3c4d5e6f...",
  "drawTick": 1234567,
  "timestamp": "2025-01-27T10:30:00Z"
}
```

**Error Responses:**
- `400 Bad Request`: Invalid input data
- `409 Conflict`: Bet limit exceeded for wallet
- `422 Unprocessable Entity`: Invalid number selection

### Batch Bet Submission

Submits multiple bets in a single transaction for gas efficiency.

```http
POST /api/lottery/batch-bets
```

**Request Body:**
```json
{
  "walletAddress": "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ1234",
  "bets": [
    {
      "selectedNumbers": [1, 2, 3, 4, 5],
      "amount": 10000
    },
    {
      "selectedNumbers": [10, 20, 30, 40, 50],
      "amount": 10000
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "bets": [
    {
      "betId": "bet_def456",
      "selectedNumbers": [1, 2, 3, 4, 5]
    },
    {
      "betId": "bet_ghi789",
      "selectedNumbers": [10, 20, 30, 40, 50]
    }
  ],
  "totalBets": 2,
  "transactionHash": "0x2b3c4d5e6f7a..."
}
```

### Get Recent Winners

Returns a list of recent lottery winners with their details.

```http
GET /api/lottery/recent-winners
```

**Response:**
```json
[
  {
    "id": "winner_001",
    "walletAddress": "WINNER1ADDRESSABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890ABC",
    "winningNumbers": [7, 14, 21, 28, 35],
    "prizeAmount": 750000000000,
    "drawTick": 1234560,
    "timestamp": "2025-01-26T21:00:00Z",
    "matchCount": 5
  }
]
```

---

## ⛓️ Blockchain Endpoints

### Get Draw History

Retrieves historical lottery draw results from the blockchain.

```http
GET /api/blockchain/draws
```

**Query Parameters:**
- `limit` (number, optional): Maximum results (default: 10)
- `offset` (number, optional): Pagination offset (default: 0)

**Response:**
```json
[
  {
    "id": "draw_001",
    "drawTick": 1234567,
    "winningNumbers": [7, 14, 21, 28, 35],
    "prizePool": 1500000000000,
    "winners": 1,
    "totalBets": 142,
    "timestamp": "2025-01-27T21:00:00Z"
  }
]
```

### Get Transaction History

Returns blockchain transaction history for the lottery contract.

```http
GET /api/blockchain/transactions
```

**Response:**
```json
[
  {
    "id": "tx_001",
    "transactionHash": "0x1a2b3c4d5e6f...",
    "type": "bet_placement",
    "walletAddress": "PLAYER1ADDRESSABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890ABC",
    "amount": 10000,
    "drawTick": 1234567,
    "timestamp": "2025-01-27T10:30:00Z",
    "status": "confirmed"
  }
]
```

---

## 🚫 Error Handling

All endpoints return consistent error responses:

```json
{
  "error": true,
  "message": "Descriptive error message",
  "code": "ERROR_CODE",
  "details": {
    "field": "specific error details"
  }
}
```

### Common Error Codes

- `INVALID_WALLET_ADDRESS`: Wallet address format is incorrect
- `BET_LIMIT_EXCEEDED`: Maximum 5 bets per wallet reached
- `INVALID_NUMBERS`: Number selection doesn't meet requirements
- `DRAW_NOT_ACTIVE`: No active draw available
- `INSUFFICIENT_BALANCE`: Not enough QUBIC for bet
- `DUPLICATE_BET`: Identical bet already placed

### HTTP Status Codes

- `200 OK`: Successful request
- `201 Created`: Resource created successfully
- `400 Bad Request`: Invalid request data
- `404 Not Found`: Resource not found
- `409 Conflict`: Resource conflict (e.g., bet limit)
- `422 Unprocessable Entity`: Valid format but unprocessable
- `500 Internal Server Error`: Server error

---

## 🔄 Rate Limiting

To ensure fair usage and prevent abuse:

- **General API**: 100 requests per minute per IP
- **Bet Placement**: 10 requests per minute per wallet
- **Batch Operations**: 5 requests per minute per wallet

Rate limit headers included in responses:
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1643723400
```

---

## 🧪 Testing Examples

### JavaScript/Fetch

```javascript
// Place a single bet
const placeBet = async () => {
  const response = await fetch('/api/lottery/place-bet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      walletAddress: 'YOURTESTWALLETADDRESSABCDEFGHIJKLMNOPQRSTUVWXYZ123456',
      selectedNumbers: [7, 14, 21, 28, 35],
      amount: 10000
    })
  });
  
  const result = await response.json();
  console.log('Bet placed:', result);
};
```

### cURL

```bash
# Get current jackpot
curl -X GET "https://your-domain.com/api/lottery/jackpot"

# Place a bet
curl -X POST "https://your-domain.com/api/lottery/place-bet" \
  -H "Content-Type: application/json" \
  -d '{
    "walletAddress": "YOURTESTWALLETADDRESSABCDEFGHIJKLMNOPQRSTUVWXYZ123456",
    "selectedNumbers": [1, 2, 3, 4, 5],
    "amount": 10000
  }'

# Check wallet bet count
curl -X GET "https://your-domain.com/api/lottery/wallet-bets/YOURTESTWALLETADDRESSABCDEFGHIJKLMNOPQRSTUVWXYZ123456"
```

### Python

```python
import requests

# Get jackpot information
response = requests.get('https://your-domain.com/api/lottery/jackpot')
jackpot = response.json()
print(f"Current jackpot: {jackpot['qubic']} QUBIC")

# Place a bet
bet_data = {
    'walletAddress': 'YOURTESTWALLETADDRESSABCDEFGHIJKLMNOPQRSTUVWXYZ123456',
    'selectedNumbers': [7, 14, 21, 28, 35],
    'amount': 10000
}

response = requests.post('https://your-domain.com/api/lottery/place-bet', json=bet_data)
result = response.json()
print(f"Bet result: {result}")
```

---

## 🔒 Security Considerations

### Input Validation
- All wallet addresses validated with regex: `/^[A-Z]{56}$/`
- Number selections checked for range (1-50) and uniqueness
- Bet amounts validated against minimum/maximum limits

### Anti-Exploit Protection
- Maximum 5 bets per wallet per draw enforced at contract level
- Duplicate bet detection prevents gaming the system
- Rate limiting prevents automated abuse

### Data Sanitization
- All user inputs sanitized to prevent injection attacks
- Database queries use parameterized statements
- Error messages don't expose sensitive information

---

## 📊 Monitoring & Analytics

### Health Check Endpoint

```http
GET /api/health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-01-27T10:30:00Z",
  "database": "connected",
  "blockchain": "synced",
  "version": "1.0.0"
}
```

### Metrics Endpoint

```http
GET /api/metrics
```

Returns Prometheus-style metrics for monitoring:
- Request counts by endpoint
- Response times
- Error rates
- Active connections

---

**Questions?** Contact the development team at norlitouysepulvida@gmail.com