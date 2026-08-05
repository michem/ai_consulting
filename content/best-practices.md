---
title: "Enterprise Best Practices"
description: "Security, code quality, prompting, and team collaboration practices for Claude Code at scale."
category: "Claude Code Enterprise Toolkit"
order: 14
---

# Claude Code Enterprise Best Practices

## Table of Contents

This guide covers five areas of enterprise practice, each broken into focused slides:

1. Security and Compliance
2. Code Quality
3. Prompting Excellence
4. Workflow Integration
5. Team Collaboration

---

## Security and Compliance

Claude Code is only as safe as what you feed it. This section covers what to share, how to sanitize it, how to manage API keys, and what compliance regimes to map it against.

## What's Safe to Share with Claude

Draw this line before your team has to guess where it is.

✅ **Safe to share:**
- Public repositories and open source code
- Internal code (non-sensitive business logic)
- Error messages (sanitized of PII/secrets)
- Architecture discussions
- Technical documentation
- Code patterns and examples
- Test data (non-production)

⚠️ **Share with caution:**
- Business logic (review output carefully)
- API designs (ensure no sensitive endpoints exposed)
- Database schemas (mask sensitive table/field names)
- Configuration templates (remove actual values)

## What Claude Should Never See

❌ **Never share:**
- Production credentials or API keys
- Database passwords or connection strings
- Customer PII (names, emails, addresses, etc.)
- Payment information
- Authentication tokens
- Security vulnerability details (pre-patch)
- NDA-covered third-party code
- Export-controlled code

## Sanitizing Error Logs

**Before sharing error logs:**
```python
# ❌ BAD
"Failed to connect to db.prod.company.com with user admin_prod"

# ✅ GOOD
"Failed to connect to database server with credentials"
```

## Sanitizing Configuration Files

**Before sharing configuration:**
```yaml
# ❌ BAD
database:
  host: prod-db-1.internal.company.com
  password: "SuperSecret123!"

# ✅ GOOD
database:
  host: <database-host>
  password: <database-password>
```

## Sanitizing Code with Customer Data

**Before sharing code with customer data:**
```javascript
// ❌ BAD
const user = {
  name: "John Smith",
  email: "john.smith@example.com",
  ssn: "123-45-6789"
};

// ✅ GOOD
const user = {
  name: "Sample User",
  email: "user@example.com",
  // customer PII fields removed for this example
};
```

## API Keys: Individual Setup

**Individual Key Setup (Recommended) — Benefits:**
- Individual accountability
- Usage tracking per developer
- Easy revocation
- Personal usage limits

**Setup Process:**
```bash
# Each developer creates their own key at console.anthropic.com
# Store securely (never commit to git)

# Option 1: Environment variable
export ANTHROPIC_API_KEY="sk-ant-api03-..."

# Option 2: Secure secret manager
# - 1Password
# - LastPass
# - OS keychain
```

## API Key Rotation Policy

```
✓ Rotate every 90 days
✓ Immediately on employee departure
✓ Immediately if compromised
✓ After any security incident
```

## Preventing Committed Secrets

```bash
# Add to .gitignore
.env
.env.local
*.key
secrets/
*.pem

# Use pre-commit hooks
# .git/hooks/pre-commit
#!/bin/bash
if git diff --cached | grep -i "sk-ant-"; then
  echo "Error: Anthropic API key detected in commit"
  exit 1
fi
```

## Secret Scanning Tools

- GitHub secret scanning (enabled by default)
- GitGuardian
- TruffleHog
- git-secrets

## GDPR Compliance

**Data Processing:**
- Code sent to Anthropic API is processed in US or EU (configurable)
- Not used for model training by default
- Can be deleted upon request
- Covered by Anthropic's DPA

**Your Responsibilities:**
- Don't send customer PII to Claude
- Maintain audit logs of usage
- Ensure legal basis for processing
- Document in your DPIA if needed

## SOC 2 / ISO 27001

**Anthropic's Certifications:**
- SOC 2 Type II certified
- Regular security audits
- Industry-standard encryption

**Your Responsibilities:**
- Include Claude Code in vendor assessment
- Document in risk register
- Include in security awareness training
- Audit usage logs

## Industry-Specific Compliance

**HIPAA (Healthcare):**
- Anthropic offers BAA for enterprise
- Don't send PHI without BAA
- Use only for non-PHI code/infrastructure

**PCI-DSS (Payment processing):**
- Never send cardholder data
- Don't use for payment processing code without review
- Sanitize examples and test data

**Financial Services:**
- Review code for regulatory compliance
- Maintain audit trails
- Follow change management procedures
- Document AI tool usage in compliance reports

## Input Validation Checklist

**Always validate Claude's code for:**
- SQL injection vulnerabilities
- XSS vulnerabilities
- Command injection risks
- Path traversal issues
- Authentication/authorization bypasses
- Insecure deserialization
- Unvalidated redirects

**Example security review prompt:**
```
"Review this authentication code for security vulnerabilities,
specifically looking for:
- Password handling
- Session management
- Input validation
- Error message information disclosure
- SQL injection risks"
```

## Security Review: Auth & Input

```markdown
Before accepting security-sensitive code:

Authentication/Authorization:
- [ ] Passwords properly hashed (not plaintext)
- [ ] Secure session management
- [ ] Proper authorization checks
- [ ] No hardcoded credentials

Input Validation:
- [ ] All user input validated
- [ ] SQL queries parameterized
- [ ] HTML output escaped
- [ ] File paths validated
```

## Security Review: Data & Dependencies

```markdown
Data Protection:
- [ ] Sensitive data encrypted at rest
- [ ] TLS for data in transit
- [ ] No sensitive data in logs
- [ ] Proper error handling (no info leakage)

Dependencies:
- [ ] No known vulnerable packages
- [ ] Dependencies up to date
- [ ] License compliance checked
```

---

## Code Quality

AI-generated code still needs a human review discipline — treat it like output from a capable but unproven teammate.

## Review All AI-Generated Code

**Treat Claude like a junior developer:**
- Review all code before committing
- Understand the logic
- Verify it meets standards
- Check for edge cases
- Ensure proper error handling

## Code Review: Functionality & Quality

```markdown
Functionality:
- [ ] Does it solve the stated problem?
- [ ] Handles edge cases correctly?
- [ ] Error handling appropriate?
- [ ] Returns expected output?

Code Quality:
- [ ] Follows project coding standards?
- [ ] Consistent with existing patterns?
- [ ] Properly named variables/functions?
- [ ] Appropriate comments (not excessive)?
- [ ] No code smells (duplicated code, long functions, etc.)?
```

## Code Review: Testing & Performance

```markdown
Testing:
- [ ] Unit tests included?
- [ ] Tests cover happy path?
- [ ] Tests cover edge cases?
- [ ] All tests passing?

Performance:
- [ ] No obvious performance issues?
- [ ] Appropriate data structures?
- [ ] Efficient algorithms?
- [ ] No unnecessary operations?
```

## Code Review: Security & Documentation

```markdown
Security:
- [ ] No security vulnerabilities?
- [ ] Input properly validated?
- [ ] No sensitive data exposed?

Documentation:
- [ ] Public APIs documented?
- [ ] Complex logic explained?
- [ ] README updated if needed?
```

## Always Include Tests

**Prompt pattern:**
```
"Add a function to validate email addresses.
Include comprehensive unit tests covering:
- Valid email formats
- Invalid formats
- Edge cases (empty, null, special characters)
- International domains
Use Jest and follow existing test patterns."
```

**Result:** Function + complete test suite

## TDD Pattern 1: Tests First

```
You: "Write tests for a function that calculates shipping cost
     based on weight and destination"

Claude: [Generates comprehensive tests]

You: "Now implement the function to make these tests pass"

Claude: [Implements function]
```

## TDD Pattern 2: Tests with Implementation

```
You: "Implement calculateShippingCost() with tests"

Claude: [Generates both]

You: "Add test for international shipping"

Claude: [Adds test and updates implementation]
```

## Test Coverage

**Monitor coverage:**
```bash
# Run tests with coverage
npm test -- --coverage

# Review coverage report
# Target: >80% coverage for new code
```

**Improve coverage with Claude:**
```
"Our UserService test coverage is only 65%.
What's not covered? Add tests to get to 85%."
```

## Configure Claude for Your Standards

**Inform Claude about your setup:**
```
"We use:
- ESLint with Airbnb config
- Prettier for formatting
- TypeScript strict mode
- React functional components with hooks

Please follow these standards in all code."
```

**Or share your config:**
```
"Here's our .eslintrc.json: [paste config]
Follow these rules."
```

## Linting and Formatting

**Always run post-generation:**
```bash
# Fix formatting
npm run format

# Fix linting issues
npm run lint -- --fix

# Or ask Claude to do it
"Run the linter and fix any issues"
```

**Include in prompts:**
```
"Refactor this function. Make sure to run ESLint and
Prettier before finishing."
```

## Architecture Patterns

**Enforce patterns:**
```
"Add a new service for product recommendations.
Follow the existing service pattern in src/services/
- Dependency injection
- Interface-based
- Unit testable
- Error handling with custom errors"
```

**Example-driven:**
```
"Create a new API endpoint similar to
src/routes/users.js but for products"
```

---

## Prompting Excellence

The gap between a mediocre and a great result from Claude is almost always the prompt, not the model. Here's the anatomy of prompts that work, a pattern library to reuse, and the mistakes to avoid.

## The Anatomy of Great Prompts

Great prompts aren't longer — they're structured. Three ingredients, every time:

```
[Context about codebase/situation]
+
[Specific task to accomplish]
+
[Constraints/requirements/standards]
```

## Vague vs. Excellent — The Vague Prompt

❌ **Vague:**
```
"Add validation"
```

## Vague vs. Excellent — The Excellent Prompt

✅ **Excellent:**
```
Context: We have a user registration endpoint that currently
         doesn't validate input.

Task: Add validation for the registration request body
      (name, email, password fields).

Constraints:
- Use the Joi library (already in package.json)
- Follow the pattern in src/validators/productValidator.js
- Return 400 with clear error messages
- Add unit tests
- Must validate:
  - Name: 2-50 chars, letters and spaces only
  - Email: valid format, unique in DB
  - Password: min 8 chars, must have uppercase, lowercase, number
```

## Pattern: Code Explanation — Template

**When:** Understanding unfamiliar code

**Template:**
```
"Explain [file/function/section] focusing on:
- What it does
- How it works
- Key design decisions
- Potential issues or improvements"
```

## Pattern: Code Explanation — Example

```
"Explain src/services/paymentService.js focusing on:
- How the retry logic works
- Why it uses exponential backoff
- What happens on final failure"
```

## Pattern: Feature Implementation — Template

**When:** Building new functionality

**Template:**
```
"Implement [feature] that [behavior]

Requirements:
- [Requirement 1]
- [Requirement 2]
- [...]

Follow:
- [Existing pattern to match]
- [Standards to apply]

Include:
- Unit tests
- Documentation
- Error handling"
```

## Pattern: Feature Implementation — Example

```
"Implement a product search feature that allows filtering by category and price range

Requirements:
- GET /api/products/search endpoint
- Query params: category, minPrice, maxPrice
- Return paginated results (20 per page)
- Sort by relevance (name match), then price

Follow:
- Existing API pattern in src/routes/
- Use ProductService for business logic
- Sequelize for database queries

Include:
- Input validation
- Unit tests for controller and service
- API documentation in OpenAPI format
- Error handling for invalid inputs"
```

## Pattern: Debugging — Template

**When:** Something isn't working

**Template:**
```
"I'm experiencing [problem/error].

Error message:
[Full error with stack trace]

Expected behavior:
[What should happen]

Context:
[Relevant code or steps to reproduce]

Please:
1. Identify the root cause
2. Suggest a fix
3. Implement the fix
4. Add test to prevent regression"
```

## Pattern: Debugging — Example

```
"I'm getting a 500 error when updating user profiles.

Error message:
TypeError: Cannot read property 'id' of undefined
  at UserService.update (src/services/user.js:67)
  at UserController.updateProfile (src/controllers/user.js:45)

Expected behavior:
Should update user profile and return 200 with updated user

Context:
- Happens only when updating without changing email
- Works fine when email is changed
- Started after recent refactoring

Please:
1. Identify the root cause
2. Suggest a fix
3. Implement the fix
4. Add test to prevent regression"
```

## Pattern: Refactoring — Template

**When:** Improving existing code

**Template:**
```
"Refactor [code location] to [improvement goal]

Current issues:
- [Issue 1]
- [Issue 2]

Desired outcome:
- [Outcome 1]
- [Outcome 2]

Constraints:
- Maintain backward compatibility
- Keep tests passing
- Follow [pattern/principle]"
```

## Pattern: Refactoring — Example

```
"Refactor src/controllers/orderController.js to improve testability

Current issues:
- Direct database calls make testing hard
- Tightly coupled to Express request/response
- Business logic mixed with HTTP concerns

Desired outcome:
- Business logic in OrderService
- Controller only handles HTTP
- Easy to unit test both layers

Constraints:
- Maintain exact same API contract
- Keep all existing tests passing
- Follow the pattern in UserController/UserService"
```

## Pattern: Testing — Template

**When:** Writing or improving tests

**Template:**
```
"[Create/Improve] tests for [code location]

Test scenarios:
- [Scenario 1]
- [Scenario 2]
- [...]

Use:
- [Test framework]
- [Test patterns]
- [Mocking approach]

Coverage goal: [X]%"
```

## Pattern: Testing — Example

```
"Create comprehensive tests for PaymentService.processPayment()

Test scenarios:
- Successful payment
- Insufficient funds
- Invalid card
- Network timeout
- Duplicate transaction
- Partial refund
- Full refund

Use:
- Jest
- Mock external payment gateway
- Follow AAA pattern (Arrange, Act, Assert)

Coverage goal: 100% of processPayment() function"
```

## Iterative Refinement

**Start broad, then refine:**

```
Iteration 1: "Add user authentication to the app"

Claude: [Shows high-level approach options]

Iteration 2: "Use JWT with refresh tokens, following the pattern
             in our mobile app backend"

Claude: [More specific implementation]

Iteration 3: "Store refresh tokens in Redis with 7-day expiry"

Claude: [Final implementation details]
```

## Constraint-Based Prompting

**Specify what NOT to do:**

```
"Refactor this function to use async/await instead of callbacks.

Do NOT:
- Change the function signature
- Modify the database schema
- Add new dependencies
- Break existing tests

DO:
- Maintain exact same behavior
- Improve error handling
- Add JSDoc comments"
```

## Example-Driven Prompting

**Show what you want:**

```
"Create a notification service similar to the existing EmailService.

Like EmailService:
- Singleton pattern
- Configurable provider
- Retry logic on failure
- Logging all operations

But for:
- Push notifications
- SMS
- In-app notifications"
```

## Socratic Prompting

**Ask for options, then decide:**

```
You: "I need to implement caching for our API. What are the
     pros and cons of Redis vs. in-memory caching?"

Claude: [Detailed comparison]

You: "Given that we're running on Kubernetes with multiple
     pods, which would you recommend?"

Claude: [Recommendation with reasoning]

You: "Let's go with Redis. Implement it following the
     repository pattern."

Claude: [Implementation]
```

## Common Prompting Mistakes

❌ "Make it better" / "Fix this" / "Add a feature"
✅ "Refactor this function to reduce cognitive complexity from 15 to under 10"
✅ "Fix the race condition in the order processing queue"
✅ "Add pagination to the product list API with cursor-based pagination"

❌ "Write a login function" (no context)
✅ "Write a login function for our Express API that uses JWT tokens,
   validates against PostgreSQL, and follows our AuthController pattern"

❌ "Improve the performance" (unclear success criteria)
✅ "Reduce the response time of /api/products from 800ms to under 200ms
   by adding database indexes and caching"

❌ "Refactor the entire authentication system to use OAuth2 instead of
   JWT, migrate the database schema, update all API endpoints, add
   comprehensive tests, and update the documentation" (too much at once)

✅ "Let's migrate to OAuth2 in phases. First, can you create a plan
   outlining the steps and what order makes sense?"

[Then work through each phase]

---

## Workflow Integration

Claude Code earns its keep by fitting into the workflow your team already has — git, CI/CD, the IDE, and code review — not by replacing it.

## Commit Messages

**Let Claude generate meaningful commits:**

```
You: "Commit these changes with a good message"

Claude: [Analyzes changes]
git add src/services/auth.js tests/auth.test.js
git commit -m "feat: add JWT refresh token support

- Implement refresh token generation and validation
- Add Redis storage for refresh tokens
- Add tests for token refresh flow
- Update auth middleware to accept refresh tokens

Closes #123"
```

## Conventional Commits Format

**Follow conventional commits:**
```
Configure Claude:
"Use conventional commits format:
- feat: new features
- fix: bug fixes
- refactor: code changes that neither fix bugs nor add features
- test: adding or updating tests
- docs: documentation changes"
```

## Branch Strategy

**Let Claude handle branching:**

```
"Create a feature branch for adding product reviews"

Result:
git checkout -b feature/product-reviews
```

**Following naming conventions:**
```
"Create a branch following our naming convention:
{type}/{ticket-number}-{description}
for implementing user avatars (ticket DEV-456)"

Result:
git checkout -b feature/DEV-456-user-avatars
```

## Pull Requests

**Generate comprehensive PR descriptions:**

```
You: "Create a pull request for this feature"

Claude: [Pushes branch and creates PR with:]

Title: "Add product review functionality"
```

## Pull Requests — Generated Body

```
Body:
## Summary
Implements product reviews allowing customers to rate and comment on products.

## Changes
- Added Review model and migration
- Created review API endpoints (CRUD)
- Added review UI components
- Implemented rating aggregation
- Added moderation workflow

## Testing
- Unit tests for Review model
- Integration tests for API
- E2E tests for review submission
- Tested moderation workflow

## Screenshots
[If applicable]

## Checklist
- [x] Tests passing
- [x] Linter passing
- [x] Documentation updated
- [x] Reviewed my own code
```

## Pre-commit Hooks

**Use Claude to pass checks:**

```
You: "I'm ready to commit"

Claude: [Runs checks]
- Running linter... ✓ Passed
- Running tests... ✓ All 247 tests passing
- Running type check... ✗ Failed

Found 3 type errors:
[errors]

Shall I fix them?

You: "Yes"

Claude: [Fixes errors, reruns checks, commits]
```

## Failing CI Pipelines

**Debug CI failures with Claude:**

```
You: "CI is failing with this error:
[paste error logs]"

Claude:
The error shows that the integration tests are failing because
the database seed data is missing...

[Explains root cause]

Let me fix this by:
1. Adding seed data to test setup
2. Updating test environment config

[Implements fix]

Now run the tests again:
npm run test:integration
```

## VS Code Extension

**Features:**
- Inline code generation
- Refactoring suggestions
- Test generation
- Documentation generation
- Conversational interface

**Keyboard shortcuts:**
- `Cmd/Ctrl + Shift + P` → "Claude: Start Session"
- `Cmd/Ctrl + K` → Inline generation
- `Cmd/Ctrl + I` → Open Claude panel

## Cursor IDE

**Built-in Claude integration:**
- Tab completion with AI
- Chat interface
- Codebase-aware responses
- Native experience

**Best practices:**
- Use for inline completions
- Chat for complex reasoning
- Reference files with @ mentions

## Using Claude for Code Review

**Review before submitting PR:**

```
"Review this diff and check for:
- Logic errors
- Security issues
- Performance problems
- Missed edge cases
- Code style violations
- Missing tests

[paste diff or reference files]"
```

**Explain PR changes:**

```
"Explain what changed in this PR and why:
[paste diff]"
```

## Responding to Review Comments

**Address feedback efficiently:**

```
PR Comment: "This function is too complex and hard to test"

You to Claude: "Refactor the handleCheckout() function to reduce
                complexity and improve testability per the review
                comment"

Claude: [Refactors with explanation]
```

---

## Team Collaboration

Individual productivity gains don't compound until the team shares what works. This section covers building that shared knowledge.

## Structuring Your Internal Wiki

**Structure:**
```
Company Wiki / Claude Code
├── Quick Start Guide
├── Common Prompts Library
│   ├── By Task Type
│   │   ├── Debugging
│   │   ├── Testing
│   │   ├── Refactoring
│   │   └── Documentation
│   └── By Technology
│       ├── React
│       ├── Node.js
│       ├── Python
│       └── Database
├── Success Stories
├── Tips and Tricks
└── Troubleshooting
```

## Prompt Library Example — Pattern

**One entry from the "Debugging" category, as it would appear in the wiki:**

```markdown
## Debugging API Errors

### Pattern
"I'm getting a [status code] error from [endpoint].

Error response:
[paste error]

Request:
[paste request]

Expected:
[describe expected behavior]

Please debug and fix."
```

## Prompt Library Example — Real Example

```markdown
### Real Example
"I'm getting a 422 error from POST /api/orders.

Error response:
{"error": "Validation failed", "details": ["Invalid product ID"]}

Request:
{
  "products": [123, 456],
  "address": {...},
  "payment": {...}
}

Expected: Should create order successfully

Please debug and fix."
```

## Prompt Library Example — Tips

```markdown
### Tips
- Include full error response
- Show the request payload
- Mention any recent changes
- Note if it worked before
```

## Team Slack Channel

**Use for:**
- Quick tips and discoveries
- Asking for help
- Sharing success stories
- Announcing new patterns
- Office hours schedule

**Example messages:**
```
💡 Tip: When refactoring, ask Claude to "create a plan first"
   then review the plan before implementation. Saves time!

🎉 Win: Used Claude to add comprehensive tests to legacy auth code.
   Went from 20% to 85% coverage in 2 hours!

❓ Question: Has anyone successfully used Claude for database
   migrations? Any gotchas?

📅 Reminder: Office hours tomorrow at 2pm in #claude-office-hours
```

## Human + Claude Pairing

**Pattern 1: Driver-Navigator**
```
Human: Navigator (high-level direction)
Claude: Driver (implementation details)
```

**Pattern 2: Reviewer-Implementer**
```
Claude: Implementer (writes the first draft)
Human: Reviewer (checks correctness, judges tradeoffs, approves)
```

Rotate patterns by task: use Driver-Navigator when the human knows the domain better than the codebase, Reviewer-Implementer when the reverse is true.

> **Where to go next:** these practices support the operating model in [The AI Architect's Perspective](/articles/ai-architect-perspective); for common issues, see [FAQ & Troubleshooting](/articles/faq-troubleshooting).
