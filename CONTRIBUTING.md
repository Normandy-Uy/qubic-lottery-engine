# Contributing to Qubic Lottery Engine

Thank you for your interest in contributing to the Qubic Lottery Engine! This project aims to demonstrate blockchain technology for social good and charitable fundraising.

## 🌟 Ways to Contribute

- **Bug Reports**: Found an issue? Let us know!
- **Feature Requests**: Have ideas for improvements?
- **Code Contributions**: Submit pull requests for fixes or features
- **Documentation**: Help improve our docs and guides
- **Testing**: Help us test new features and find edge cases

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- TypeScript knowledge
- Git version control
- Understanding of React and Express.js

### Development Setup

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/qubic-lottery-engine.git
   cd qubic-lottery-engine
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## 📋 Development Guidelines

### Code Style

- **TypeScript**: Use strict TypeScript for all new code
- **ESLint**: Follow the project's ESLint configuration
- **Prettier**: Format code using Prettier
- **Naming**: Use camelCase for variables, PascalCase for components

### Commit Messages

Follow conventional commit format:

```
feat: add wallet address validation
fix: resolve jackpot calculation error
docs: update API documentation
style: format lottery simulator component
refactor: improve bet validation logic
test: add wallet integration tests
```

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write clean, documented code
   - Add tests for new functionality
   - Update documentation as needed

3. **Test Your Changes**
   ```bash
   npm run test
   npm run lint
   npm run build
   ```

4. **Submit Pull Request**
   - Clear title and description
   - Reference related issues
   - Include screenshots for UI changes

## 🧪 Testing

### Running Tests

```bash
# All tests
npm test

# Specific test suites
npm run test:unit
npm run test:integration
npm run test:e2e
```

### Writing Tests

- **Unit Tests**: Test individual functions and components
- **Integration Tests**: Test API endpoints and database interactions
- **E2E Tests**: Test complete user workflows

### Test Structure

```typescript
describe('Lottery Simulator', () => {
  it('should validate wallet addresses correctly', () => {
    // Test implementation
  });
  
  it('should enforce bet limits per wallet', () => {
    // Test implementation
  });
});
```

## 📚 Documentation

### Code Documentation

- Use JSDoc comments for functions and classes
- Include parameter types and return values
- Provide usage examples for complex functions

```typescript
/**
 * Validates a Qubic wallet address format
 * @param address - The wallet address to validate
 * @returns True if address is valid (56 uppercase letters)
 * @example
 * ```typescript
 * const isValid = validateWalletAddress('ABCD...XYZ');
 * ```
 */
function validateWalletAddress(address: string): boolean {
  return /^[A-Z]{56}$/.test(address);
}
```

### API Documentation

- Document all endpoints with examples
- Include request/response schemas
- Specify error codes and messages

## 🐛 Issue Reporting

### Bug Reports

Include the following information:

- **Environment**: OS, Node.js version, browser
- **Steps to Reproduce**: Clear step-by-step instructions
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable
- **Error Messages**: Full error logs

### Feature Requests

- **Use Case**: Why is this feature needed?
- **Proposal**: How should it work?
- **Alternatives**: Other solutions considered
- **Impact**: Who would benefit from this feature?

## 🔒 Security

### Reporting Security Issues

- **Do NOT** open public issues for security vulnerabilities
- Email security concerns to: norlitouysepulvida@gmail.com
- Include detailed reproduction steps
- Allow reasonable time for response before disclosure

### Security Best Practices

- Validate all user inputs
- Use parameterized queries for database operations
- Implement proper authentication and authorization
- Keep dependencies updated

## 🏗️ Architecture Guidelines

### Frontend (React/TypeScript)

- Use functional components with hooks
- Implement proper error boundaries
- Follow component composition patterns
- Use TanStack Query for data fetching

### Backend (Express/Node.js)

- Keep routes thin, logic in services
- Use proper error handling middleware
- Implement input validation with Zod
- Follow RESTful API conventions

### Database (PostgreSQL/Drizzle)

- Use migrations for schema changes
- Follow normalization principles
- Index frequently queried columns
- Use transactions for data consistency

## 🌍 Internationalization

We welcome translations and localization efforts:

- English (primary)
- Spanish
- French
- Portuguese
- Chinese (Simplified/Traditional)
- Japanese

## 📋 Project Roadmap

### Phase 1: Foundation (Q1 2025)
- Core lottery engine implementation
- Wallet integration
- Basic security features

### Phase 2: Testing & Certification (Q2 2025)
- Comprehensive testing suite
- Security audits
- GLI certification

### Phase 3: Deployment (Q3 2025)
- Testnet deployment
- Beta user testing
- Performance optimization

### Phase 4: Scaling (Q4 2025)
- Multi-region deployment
- Advanced features
- Partnership integrations

## 💬 Communication

### GitHub Discussions

Use GitHub Discussions for:
- General questions
- Feature discussions
- Show and tell
- Q&A

### Discord/Slack

Join our development community:
- Real-time collaboration
- Technical discussions
- Code reviews
- Pair programming sessions

## 🎯 Focus Areas

We especially welcome contributions in:

- **Security Enhancements**: Fortress-class protection improvements
- **Performance Optimization**: Speed and scalability improvements
- **User Experience**: Interface and accessibility improvements
- **Testing**: Comprehensive test coverage
- **Documentation**: Clear guides and examples
- **Internationalization**: Multi-language support

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same MIT License that covers the project.

## 🙏 Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Hall of fame section
- LinkedIn recommendations (upon request)

---

**Questions?** Feel free to reach out via GitHub issues or email: norlitouysepulvida@gmail.com

Thank you for helping make charitable fundraising more transparent and effective! 🌟