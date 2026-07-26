---
title: "Training Workshop"
description: "Complete 3-hour workshop materials: introduction, core skills, advanced patterns, and hands-on exercises."
category: "Claude Code Enterprise Toolkit"
order: 13
---

# Claude Code Enterprise Training

## Workshop Overview
**Duration:** 3 hours
**Format:** Interactive workshop with live demos and hands-on practice
**Target Audience:** Software developers and engineering teams

---

## Agenda

### Part 1: Introduction (30 minutes)
- What is Claude Code?
- Why AI-assisted development?
- Key capabilities and use cases
- Your questions answered

### Part 2: Getting Started (30 minutes)
- Installation and setup
- First interactions
- Understanding the interface
- Basic workflows

### Part 3: Core Skills (60 minutes)
- Effective prompting techniques
- Code generation and modification
- Debugging and troubleshooting
- Working with large codebases
- Testing and documentation

### Part 4: Advanced Patterns (45 minutes)
- Complex refactoring
- Architecture discussions
- Security and best practices
- Integration with your workflow
- Git operations

### Part 5: Best Practices & Q&A (15 minutes)
- Do's and Don'ts
- Common pitfalls
- Getting help
- Open Q&A

---

# Part 1: Introduction

## Slide: What is Claude Code?

**Claude Code** is an AI-powered coding assistant that works alongside you in your terminal, IDE, or command line.

**Key Features:**
- **Agentic:** Can autonomously perform multi-step tasks
- **Full codebase access:** Reads and understands your entire project
- **Tool use:** Can run commands, edit files, search code
- **Context-aware:** Remembers your conversation and project structure
- **Multi-modal:** Can view images and diagrams

**It's like pair programming with an expert who:**
- Never gets tired
- Has read millions of codebases
- Can work at any scale
- Helps you learn as you go

---

## Slide: Why AI-Assisted Development?

### The Reality of Modern Development

**Developers spend time on:**
- 35% Writing new code
- 25% Reading and understanding code
- 20% Debugging and fixing issues
- 15% Writing tests and documentation
- 5% Other (meetings, research, etc.)

**Claude Code helps with ALL of these activities.**

### Measured Benefits

**From organizations using Claude Code:**
- 30-50% faster feature development
- 40% reduction in debugging time
- 60% less time on boilerplate code
- 50% faster onboarding for new developers
- 25% improvement in test coverage

**But also:**
- More enjoyable work (focus on creative problem-solving)
- Better code quality (consistent patterns, better tests)
- Faster learning (understand unfamiliar code faster)

---

## Slide: Key Capabilities

### 1. Code Generation
- Write new features from descriptions
- Generate boilerplate and scaffolding
- Create tests automatically
- Write documentation

### 2. Code Understanding
- Explain complex code
- Summarize large files
- Trace execution flows
- Find relevant code sections

### 3. Code Modification
- Refactor existing code
- Fix bugs and issues
- Update deprecated APIs
- Improve performance

### 4. Development Workflows
- Run tests and interpret results
- Execute build commands
- Perform git operations
- Search and navigate codebases

---

## Slide: Common Use Cases

### For All Developers
- Understanding unfamiliar code
- Writing unit tests
- Debugging errors
- Updating documentation
- Implementing well-defined features

### For Senior Developers
- Code reviews and suggestions
- Architecture discussions
- Refactoring large sections
- Mentoring (explaining to junior devs)
- API design

### For Teams
- Enforcing coding standards
- Migrating between frameworks
- Updating dependencies
- Documenting legacy systems
- Knowledge transfer

---

# Part 2: Getting Started

## Slide: Installation & Setup

### Requirements
- **OS:** macOS or Linux (Windows support coming)
- **API Access:** Anthropic API key
- **Terminal:** Any modern terminal or IDE

### Installation Options

**Option 1: Command Line (npx)**
```bash
npx @anthropic-ai/claude-code
```

**Option 2: VS Code Extension**
- Install from VS Code marketplace
- Configure API key in settings

**Option 3: Cursor IDE**
- Built-in support for Claude
- Configure in preferences

### API Key Setup
1. Go to console.anthropic.com
2. Create an API key
3. Set environment variable or configure in tool
4. Set usage limits and billing alerts

---

## Slide: First Interaction

### Starting a Session

**Command Line:**
```bash
npx @anthropic-ai/claude-code
```

**In IDE:**
- Open command palette (Cmd/Ctrl + Shift + P)
- Select "Claude: Start New Session"

### Your First Prompt

**Good first prompts:**
- "What's the structure of this codebase?"
- "Explain what the main.py file does"
- "Help me add a new API endpoint for user registration"
- "Write tests for the UserService class"

**What happens:**
- Claude reads relevant files
- Analyzes the context
- Provides a thoughtful response
- Can take actions with your permission

---

## Slide: Understanding the Interface

### Conversation Flow
```
You: [Your prompt/request]
     ↓
Claude: [Understanding] "Let me read the relevant files..."
     ↓
Claude: [Action] Uses tools (Read, Edit, Bash, etc.)
     ↓
Claude: [Response] Explains what was done
     ↓
You: [Follow-up or new request]
```

### Tool Usage

**Claude can use these tools:**
- **Read:** View file contents
- **Write:** Create new files
- **Edit:** Modify existing files
- **Bash:** Run commands
- **Grep/Glob:** Search code
- **Task:** Launch specialized agents

**You'll see:** Tool usage in the conversation, so you understand what's happening

---

## Slide: Basic Workflows

### Workflow 1: Understanding Code
```
You: "Explain how authentication works in this app"

Claude:
1. Searches for auth-related files
2. Reads the relevant files
3. Explains the flow
4. Shows you key functions
```

### Workflow 2: Making Changes
```
You: "Add logging to all API endpoints"

Claude:
1. Finds all endpoint definitions
2. Shows you the plan
3. Makes the changes
4. Runs tests to verify
```

### Workflow 3: Debugging
```
You: "The user search is returning empty results"

Claude:
1. Reads the search implementation
2. Identifies potential issues
3. Suggests fixes
4. Implements and tests the fix
```

---

# Part 3: Core Skills

## Slide: Effective Prompting

### The Prompting Mindset

**Think of Claude as a smart colleague who needs context:**
- Be conversational and natural
- Provide relevant context
- Be specific about what you want
- Iterate based on responses

### Prompt Structure

**Good prompt format:**
```
[Context] + [Task] + [Constraints]
```

**Examples:**

❌ **Vague:**
"Fix the bug"

✅ **Better:**
"The user registration endpoint is returning a 500 error when the email field is missing. Can you add validation and return a proper 400 error with a clear message?"

❌ **Vague:**
"Add a feature"

✅ **Better:**
"Add a feature to export user data to CSV. It should include name, email, and signup date. Add a button in the admin dashboard and create an API endpoint. Follow the existing export patterns in the codebase."

---

## Slide: Prompting Patterns

### Pattern 1: Exploration
**When:** You don't know the codebase well

**Prompt:**
- "What files are related to [feature]?"
- "Where is [functionality] implemented?"
- "Show me examples of [pattern] in this codebase"

### Pattern 2: Specification
**When:** You know what you want

**Prompt:**
- "Add [feature] to [file/component]"
- "Refactor [function] to use [pattern]"
- "Update [test] to cover [scenario]"

### Pattern 3: Collaboration
**When:** You want to think through a problem

**Prompt:**
- "What's the best way to implement [feature]?"
- "What are the tradeoffs between [approach A] and [approach B]?"
- "Review this approach and suggest improvements"

### Pattern 4: Debugging
**When:** Something isn't working

**Prompt:**
- "I'm getting [error], can you help?"
- "Why is [function] returning [unexpected result]?"
- "Debug [failing test]"

---

## Slide: Code Generation Best Practices

### Start with Clear Requirements

**Provide:**
- What the code should do
- Expected inputs and outputs
- Error handling requirements
- Performance considerations
- Existing patterns to follow

**Example:**
```
"Create a function to validate email addresses:
- Input: string
- Output: boolean
- Should handle common edge cases (empty, null, malformed)
- Use the regex pattern already used in the User model
- Add unit tests covering happy path and edge cases"
```

### Review Before Accepting

**Always:**
- Read the generated code
- Understand the logic
- Check for security issues
- Verify it follows your standards
- Run tests

**Remember:** You're still the developer. Claude is your assistant.

---

## Slide: Code Modification Strategies

### Small, Focused Changes

✅ **Good:**
"Add error logging to the database connection function"

❌ **Too broad:**
"Improve error handling across the entire application"

### Specify the Scope

✅ **Good:**
"Refactor the UserController to use async/await instead of promises"

❌ **Unclear:**
"Make the code more modern"

### Test After Changes

**Always ask:**
- "Run the tests to make sure nothing broke"
- "Verify that the linter passes"
- "Check that the build succeeds"

---

## Slide: Working with Large Codebases

### Challenge: Context Limits

**Even though Claude has a large context window, it's better to be focused.**

### Strategy 1: Start Specific
```
❌ "Explain this entire codebase"
✅ "Explain the authentication module"
✅ "Show me how the payment processing works"
```

### Strategy 2: Navigate Hierarchically
```
1. "What's the high-level structure?"
2. "Tell me more about the services layer"
3. "Explain the UserService in detail"
```

### Strategy 3: Use Search
```
"Find all files that use the Payment API"
"Where is the email validation function defined?"
```

---

## Slide: Debugging Techniques

### Share the Full Error

**Include:**
- Complete error message
- Stack trace
- Relevant logs
- What you were trying to do

**Example:**
```
"I'm getting this error when trying to create a new user:

TypeError: Cannot read property 'email' of undefined
  at UserService.create (services/user.js:45)
  at UserController.register (controllers/user.js:23)

This happens when I POST to /api/users with:
{ "name": "John", "email": "john@example.com" }
```

### Systematic Debugging

**Claude can help with:**
1. Understanding the error
2. Identifying the root cause
3. Suggesting fixes
4. Implementing and testing fixes
5. Adding safeguards to prevent recurrence

---

## Slide: Testing with Claude

### Generate Tests

**Prompt patterns:**
- "Write unit tests for [function/class]"
- "Add test cases for edge cases in [function]"
- "Create integration tests for [feature]"

**Example:**
```
"Write comprehensive unit tests for the UserService.create() method:
- Test successful creation
- Test duplicate email error
- Test invalid email format
- Test missing required fields
- Test database connection errors
Use Jest and follow the existing test patterns"
```

### Fix Failing Tests

**When tests fail:**
```
"The test 'should handle duplicate emails' is failing with this error:
[error message]

Can you fix the test or the implementation?"
```

### Improve Test Coverage

```
"What parts of the PaymentService aren't covered by tests?"
"Add tests to improve coverage of the authentication module"
```

---

## Slide: Documentation

### Generate Documentation

**What Claude can document:**
- Function/method descriptions
- API endpoints
- Configuration options
- Architecture overviews
- Onboarding guides

**Example prompt:**
```
"Add JSDoc comments to all public methods in the UserService class"
```

### Update Existing Docs

```
"The README still mentions version 1.0 authentication.
Update it to reflect the new OAuth2 implementation"
```

### Create Architecture Docs

```
"Create a document explaining the data flow from
API request to database and back"
```

---

# Part 4: Advanced Patterns

## Slide: Complex Refactoring

### When to Refactor with Claude

**Good use cases:**
- Renaming functions/classes across files
- Extracting repeated code into utilities
- Converting callbacks to async/await
- Migrating from old to new APIs
- Applying consistent patterns

### Refactoring Process

**1. Start with a plan:**
```
"I want to refactor the error handling to use a centralized
ErrorHandler class instead of try/catch in every controller.
Can you create a plan for this?"
```

**2. Review the plan together**

**3. Execute in phases:**
```
"Let's start with the UserController"
```

**4. Test after each phase:**
```
"Run the tests to make sure nothing broke"
```

---

## Slide: Refactoring Example

### Before: Scattered Error Handling
```javascript
// UserController.js
try {
  const user = await UserService.create(data);
  res.json(user);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal error' });
}

// ProductController.js
try {
  const product = await ProductService.create(data);
  res.json(product);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal error' });
}
```

### After: Centralized Error Handler
```javascript
// ErrorHandler.js
class ErrorHandler {
  handle(error, res) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ error: error.message });
    }
    logger.error(error);
    return res.status(500).json({ error: 'Internal error' });
  }
}

// UserController.js
const user = await UserService.create(data);
res.json(user);
// Errors handled by middleware
```

---

## Slide: Architecture Discussions

### Use Claude as a Sounding Board

**Ask for feedback:**
```
"I'm designing a caching layer for our API. Here's my approach:
[explain your design]

What do you think? Any concerns or suggestions?"
```

### Explore Alternatives

```
"What are the pros and cons of:
1. Adding a Redis cache
2. Using in-memory caching with Node-cache
3. Using HTTP caching headers

Consider our use case: [describe your scenario]"
```

### Review Before Implementation

```
"Before I implement the new authentication system,
can you review this design doc and look for potential issues?"
```

---

## Slide: Security and Best Practices

### Security Review

**Ask Claude to check for:**
- SQL injection vulnerabilities
- XSS vulnerabilities
- Authentication/authorization issues
- Data exposure risks
- Common OWASP Top 10 issues

**Example:**
```
"Review the UserController for security vulnerabilities"
```

### Apply Best Practices

```
"Refactor this code to follow SOLID principles"
"Make sure all API endpoints have rate limiting"
"Add input validation to all user-facing endpoints"
```

### Stay Updated

```
"Are we using any deprecated packages?
What are the recommended alternatives?"
```

---

## Slide: Git Workflow Integration

### Creating Commits

**Claude can:**
- Stage relevant files
- Generate descriptive commit messages
- Follow your commit conventions

**Prompt:**
```
"Commit these changes with a descriptive message"
```

**Result:**
```bash
git add src/services/user.js tests/user.test.js
git commit -m "feat: add email validation to user creation

- Add regex-based email validation
- Add unit tests for edge cases
- Return 400 error for invalid emails"
```

### Creating Pull Requests

```
"Create a pull request for this feature"
```

**Claude will:**
- Push the branch
- Generate PR title and description
- Include test plan
- Add the session URL for context

### Working with Branches

```
"Create a new branch called feature/email-validation"
"Switch to the develop branch and pull latest changes"
```

---

## Slide: Integration with Your Workflow

### CI/CD Integration

**Pre-commit hooks:**
```
"Run the linter and formatter before committing"
"Make sure all tests pass before pushing"
```

**In CI/CD:**
- Claude can help debug CI failures
- Interpret test results
- Suggest fixes for pipeline issues

### Code Review

**Use Claude to:**
```
"Review this diff and look for potential issues"
"Explain what changed in this pull request"
"Check if this change follows our coding standards"
```

### Pair Programming

**During development:**
- Explain complex logic as you work
- Get immediate feedback
- Explore edge cases together
- Learn new patterns

---

# Part 5: Best Practices & Q&A

## Slide: Do's and Don'ts

### ✅ DO

**Be Conversational**
- Ask questions naturally
- Provide context
- Iterate on responses

**Stay Engaged**
- Review all generated code
- Understand the changes
- Verify correctness

**Test Frequently**
- Run tests after changes
- Check for regressions
- Verify builds

**Provide Feedback**
- Tell Claude if something isn't right
- Ask for clarification
- Request changes

**Learn as You Go**
- Ask "why" questions
- Request explanations
- Explore new patterns

---

## Slide: Do's and Don'ts (cont.)

### ❌ DON'T

**Blindly Accept Code**
- Always review generated code
- Understand before merging
- Check for security issues

**Over-rely**
- You're still the developer
- Make final decisions
- Trust your expertise

**Skip Testing**
- Always run tests
- Verify changes work
- Check for side effects

**Share Sensitive Data**
- Be mindful of proprietary code
- Don't include secrets/keys
- Follow your security policies

**Expect Perfection**
- Claude can make mistakes
- First attempt may need refinement
- Iteration is normal

---

## Slide: Common Pitfalls

### Pitfall 1: Vague Prompts
**Problem:** "Make the code better"
**Solution:** "Refactor the UserService to separate database logic from business logic"

### Pitfall 2: Scope Creep
**Problem:** Trying to change too much at once
**Solution:** Break into smaller, focused tasks

### Pitfall 3: Skipping Context
**Problem:** "Fix this" without explaining the issue
**Solution:** Provide full error messages and expected behavior

### Pitfall 4: Not Testing
**Problem:** Assuming generated code works
**Solution:** Always run tests and verify changes

### Pitfall 5: Fighting the Tool
**Problem:** Getting frustrated when it doesn't understand
**Solution:** Rephrase, provide more context, break down the task

---

## Slide: Getting Better Results

### Provide Examples

**Instead of:**
"Write a validation function"

**Try:**
"Write a validation function similar to the one in models/product.js, but for user emails"

### Specify Constraints

**Include:**
- Performance requirements
- Compatibility needs
- Existing patterns to follow
- Standards to adhere to

### Iterate Freely

**It's okay to:**
- Ask for changes
- Try different approaches
- Request explanations
- Start over if needed

---

## Slide: When to Use (and Not Use) Claude

### ✅ Great Use Cases

- Writing boilerplate code
- Understanding unfamiliar code
- Writing tests
- Debugging errors
- Refactoring existing code
- Generating documentation
- Exploring architecture options
- Learning new patterns

### ⚠️ Be Careful With

- Highly sensitive code
- Complex business logic without verification
- Performance-critical code (verify benchmarks)
- Security-critical implementations (expert review needed)

### ❌ Not Suitable For

- Decisions requiring business context
- Choosing business requirements
- Replacing human code review
- Substituting security audits

---

## Slide: Measuring Success

### Individual Metrics

**Track your own experience:**
- Time saved on routine tasks
- Speed of debugging
- Learning curve on new codebases
- Confidence in unfamiliar areas
- Enjoyment of work

### Team Metrics

**Measure at the team level:**
- Feature delivery speed
- Bug resolution time
- Test coverage increase
- Documentation completeness
- Onboarding time for new developers
- Code review cycle time

### Continuous Improvement

**Regular retrospectives:**
- What's working well?
- What could be better?
- New use cases discovered?
- Tips to share with team?

---

## Slide: Getting Help

### Within Your Organization

**Internal Resources:**
- Champion network
- Best practices wiki
- Example prompts library
- Internal Slack/Teams channel

### External Resources

**Anthropic:**
- Documentation: docs.anthropic.com
- API reference
- Release notes

**Community:**
- Best practices sharing
- Example repositories
- Industry-specific guides

---

## Slide: Continuous Learning

### Stay Updated

**Claude Code is evolving:**
- New features regularly
- Improved capabilities
- Better models

**Keep learning:**
- Attend refresher sessions
- Share discoveries with team
- Experiment with new use cases

### Share Knowledge

**Help others succeed:**
- Document your best practices
- Share effective prompts
- Mentor colleagues
- Contribute to internal wiki

---

## Slide: Your Feedback Matters

### Help Us Improve This Training

**Tell us:**
- What was most valuable?
- What needs more coverage?
- What examples would help?
- How can we support you better?

### Report Issues

**If you encounter:**
- Technical problems
- Policy questions
- Training needs
- Feature requests

**Contact:** [internal support channel]

---

## Slide: Practice Session

### Hands-On Exercise (30 minutes)

**Everyone will:**
1. Open Claude Code in your environment
2. Complete 3 guided exercises:
   - Exercise 1: Understand an unfamiliar file
   - Exercise 2: Add a feature with tests
   - Exercise 3: Debug a failing test
3. Share one insight with the group

**Facilitators will be available to help!**

---

## Slide: Q&A

### Open Discussion

**Common questions we'll address:**
- Technical setup and configuration
- Policy and acceptable use
- Integration with your tools
- Specific use cases for your projects
- Advanced techniques

**Your questions?**

---

## Slide: Next Steps

### Immediate Actions (This Week)

1. **Get set up** - Install and configure Claude Code
2. **Start small** - Try one task per day
3. **Join the community** - Internal Slack/Teams channel
4. **Share feedback** - What's working, what's not

### Building Momentum (This Month)

1. **Establish habits** - Use for routine tasks
2. **Expand use cases** - Try new types of tasks
3. **Help others** - Share tips with teammates
4. **Track impact** - Note time saved and quality improvements

### Ongoing (This Quarter)

1. **Become a champion** - Help onboard others
2. **Contribute examples** - Add to internal wiki
3. **Attend office hours** - Weekly Q&A sessions
4. **Share success stories** - Help build momentum

---

## Slide: Thank You!

### Contact Information

**Training Team:**
- Email: [training-contact]
- Slack: #claude-code-help
- Office Hours: [schedule]

**Resources:**
- Internal wiki: [url]
- Best practices: [url]
- Example prompts: [url]

### Let's Build Great Software Together!

---

# Appendix: Quick Reference

## Common Prompts Cheat Sheet

### Understanding Code
```
"Explain what [file/function] does"
"What's the flow for [feature]?"
"Where is [functionality] implemented?"
"Show me examples of [pattern]"
```

### Making Changes
```
"Add [feature] to [location]"
"Refactor [code] to use [pattern]"
"Fix [bug/error]"
"Update [code] to [new approach]"
```

### Testing
```
"Write tests for [code]"
"Fix this failing test: [test name]"
"What's not covered by tests?"
"Add test for edge case: [scenario]"
```

### Documentation
```
"Document this [code]"
"Update README with [info]"
"Explain the architecture of [module]"
"Add comments to [complex code]"
```

### Git Operations
```
"Commit these changes"
"Create a pull request"
"Create a branch for [feature]"
"What changed in the last commit?"
```

---

# Facilitator Notes

## Workshop Preparation

### Before the Session
- [ ] Test all demo environments
- [ ] Prepare backup code examples
- [ ] Have API keys ready (sandbox accounts)
- [ ] Test screen sharing/presentation setup
- [ ] Have troubleshooting guide ready

### Materials Needed
- Presentation slides
- Demo codebase (preferably your actual code)
- Exercise instructions
- Handouts/quick reference cards
- Feedback forms

### Room Setup
- Tables for laptops
- Power outlets accessible
- Good wifi/network
- Comfortable seating
- Whiteboard/flip charts

## Timing Guide

**0:00-0:30** - Introduction & Overview
- Icebreaker activity (2 min)
- Learning objectives (3 min)
- Claude Code demo (15 min)
- Q&A (10 min)

**0:30-1:00** - Getting Started
- Live installation walkthrough (15 min)
- First interaction demo (10 min)
- Participants try it (5 min)

**1:00-2:00** - Core Skills
- Prompting techniques (20 min)
- Code generation demo (15 min)
- Debugging demo (15 min)
- Testing demo (10 min)

**2:00-2:45** - Advanced Patterns
- Refactoring demo (20 min)
- Git workflow demo (15 min)
- Best practices discussion (10 min)

**2:45-3:00** - Wrap-up
- Key takeaways (5 min)
- Resources and next steps (5 min)
- Final Q&A (5 min)

## Demo Scripts

### Demo 1: First Interaction
```
1. Open Claude Code
2. Prompt: "What's the structure of this codebase?"
3. Show how Claude explores
4. Prompt: "Explain the [main entry point]"
5. Show detailed explanation
6. Ask a follow-up question
```

### Demo 2: Code Generation
```
1. Prompt: "Add a function to validate phone numbers"
2. Show Claude generate code
3. Prompt: "Add tests for this function"
4. Run the tests
5. Prompt: "Add a case for international numbers"
6. Show iteration
```

### Demo 3: Debugging
```
1. Show a failing test
2. Prompt: "This test is failing: [test name]"
3. Show Claude's analysis
4. Show suggested fix
5. Implement and verify
```

## Common Questions & Answers

**Q: Is our code sent to Anthropic?**
A: Yes, code in your prompts and files Claude reads is sent to Anthropic's API. Follow your organization's data handling policies.

**Q: Can it work offline?**
A: No, it requires an internet connection to access Claude's API.

**Q: What if it makes a mistake?**
A: Always review code before accepting. You can ask Claude to fix or revise.

**Q: How much does it cost?**
A: Pricing is per-token via Anthropic API. Your organization has a billing account set up.

**Q: Can it access our databases?**
A: Only if it has credentials and you explicitly grant permission. Be careful with production access.

**Q: Will it replace developers?**
A: No, it's a tool to augment developers, not replace them. You're still in control.

## Troubleshooting

### Issue: Can't install on Windows
**Solution:** Windows support coming soon. Use WSL or wait for official support.

### Issue: API key errors
**Solution:** Verify key is correct, check billing account is active, ensure network access.

### Issue: Slow responses
**Solution:** Check internet connection, try smaller prompts, check API status page.

### Issue: Unexpected code changes
**Solution:** Always review before accepting. Ask Claude to explain changes.

## Post-Workshop Follow-up

**Within 24 hours:**
- Send thank you email
- Share presentation and resources
- Send feedback survey

**Within 1 week:**
- Share survey results summary
- Schedule office hours
- Post FAQs from session

**Ongoing:**
- Weekly office hours
- Monthly tips email
- Quarterly refresher sessions
