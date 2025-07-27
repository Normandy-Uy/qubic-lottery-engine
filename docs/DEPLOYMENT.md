# Deployment Guide

This guide covers deploying the Qubic Lottery Engine to various platforms and environments.

## 🚀 Quick Deploy Options

### Replit (Development/Demo)
Current deployment platform with automatic setup:
- Fork the Replit project
- Environment variables auto-configured
- Instant deployment with live preview
- Perfect for demos and development

### Vercel (Production Frontend)
```bash
npm install -g vercel
vercel
```

### Railway (Full Stack)
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

### Docker (Any Platform)
```bash
docker build -t qubic-lottery-engine .
docker run -p 5000:5000 qubic-lottery-engine
```

## 📋 Prerequisites

- Node.js 20+
- PostgreSQL database
- Environment variables configured
- SSL certificate (production)

## 🛠️ Production Setup

### 1. Environment Configuration

Create production `.env`:
```env
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://user:pass@host:5432/db
SESSION_SECRET=your-session-secret
CORS_ORIGIN=https://yourdomain.com
```

### 2. Build Application

```bash
# Install dependencies
npm ci --only=production

# Build frontend and backend
npm run build

# Start production server
npm start
```

### 3. Database Setup

```bash
# Run migrations
npm run db:migrate

# Seed initial data
npm run db:seed
```

## 🔒 Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] Database connection encrypted
- [ ] Session secrets configured
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Input validation active
- [ ] Error handling configured

## 📊 Monitoring & Logging

### Application Monitoring
- Health check endpoint: `/health`
- Metrics endpoint: `/metrics`
- Performance monitoring setup
- Error tracking integration

### Log Management
```bash
# Production logs
npm run logs

# Error logs
npm run logs:error

# Access logs
npm run logs:access
```

## 🔄 CI/CD Pipeline

### GitHub Actions
```yaml
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm test
      - name: Deploy
        run: ./deploy.sh
```

## 🌐 Domain & SSL

### DNS Configuration
```
A     lottery.yourdomain.com    -> server-ip
CNAME www.lottery.yourdomain.com -> lottery.yourdomain.com
```

### SSL Certificate
```bash
# Let's Encrypt
sudo certbot --nginx -d lottery.yourdomain.com
```

## 📈 Scaling Considerations

### Horizontal Scaling
- Load balancer configuration
- Multiple server instances
- Session store (Redis)
- Database read replicas

### Performance Optimization
- CDN for static assets
- Database indexing
- Caching strategies
- Image optimization

## 🔧 Troubleshooting

### Common Issues

**Port Binding Error**
```bash
# Check port usage
lsof -i :5000
# Kill process if needed
kill -9 <PID>
```

**Database Connection**
```bash
# Test connection
npm run db:test
# Reset if needed
npm run db:reset
```

**Build Failures**
```bash
# Clear cache
npm run clean
# Rebuild
npm run build
```

## 📱 Mobile Optimization

- Responsive design verified
- Touch-friendly interfaces
- Offline capabilities
- Progressive Web App features

## 🌍 Multi-Region Deployment

### Global Distribution
- CDN configuration
- Regional databases
- Latency optimization
- Failover strategies

### Load Balancing
```nginx
upstream lottery_backend {
    server 10.0.1.1:5000;
    server 10.0.1.2:5000;
    server 10.0.1.3:5000;
}

server {
    listen 80;
    server_name lottery.yourdomain.com;
    
    location / {
        proxy_pass http://lottery_backend;
    }
}
```

## 🔄 Backup & Recovery

### Database Backups
```bash
# Automated daily backups
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Restore from backup
psql $DATABASE_URL < backup-20250127.sql
```

### Application Backups
- Code repository (Git)
- Configuration files
- SSL certificates
- Environment variables

## 📊 Performance Metrics

### Key Metrics to Monitor
- Response time
- Error rate
- Database query performance
- Memory usage
- CPU utilization
- Concurrent users

### Alerting Thresholds
- Response time > 2 seconds
- Error rate > 1%
- Memory usage > 80%
- Database connections > 80%

## 🎯 Post-Deployment Tasks

1. **Verify Functionality**
   - Test wallet address validation
   - Check number selection
   - Confirm bet placement
   - Validate jackpot display

2. **Performance Testing**
   - Load testing with concurrent users
   - Database performance under load
   - API response times

3. **Security Verification**
   - SSL certificate validation
   - Security headers check
   - Vulnerability scanning

4. **Monitoring Setup**
   - Application performance monitoring
   - Error tracking
   - Log aggregation
   - Uptime monitoring

---

**Need Help?** Contact the development team at norlitouysepulvida@gmail.com