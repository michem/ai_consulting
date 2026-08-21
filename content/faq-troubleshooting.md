---
title: "FAQ & Troubleshooting"
description: "Answers to common questions on setup, usage, security, billing, and performance."
category: "Claude Code Enterprise Toolkit"
order: 15
---

# Claude Code Enterprise FAQ & Troubleshooting

## Table of Contents

Answers are grouped into seven areas, each broken into focused slides:

1. General Questions
2. Technical Setup
3. Usage Questions
4. Security & Compliance
5. Billing & Costs
6. Troubleshooting
7. Performance & Optimization

---

## General Questions

The basics: what Claude Code is, how it compares, and what it takes to get productive.

## What is Claude Code?

Claude Code is an AI-powered coding assistant from Anthropic that helps developers write, understand, debug, and improve code. It's agentic (can perform multi-step tasks autonomously), has access to your entire codebase, and can use tools like reading files, editing code, running commands, and more.

**Key capabilities:**
- Understanding and explaining code
- Writing new code and features
- Debugging and fixing issues
- Refactoring existing code
- Writing tests and documentation
- Running commands and git operations

## How is Claude Code different from GitHub Copilot or ChatGPT?

**vs GitHub Copilot:**
- **Copilot:** Inline completions, suggests code as you type
- **Claude Code:** Conversational, agentic (multi-step tasks), full codebase context, can run commands

**vs ChatGPT:**
- **ChatGPT:** General-purpose conversational AI, limited code context
- **Claude Code:** Specialized for development, reads your actual codebase, uses development tools, understands project structure

**Think of it as:** Claude Code is like pair programming with an expert who can see your entire codebase and take actions.

## What programming languages does Claude Code support?

Claude Code works with all major programming languages:
- JavaScript/TypeScript
- Python
- Java
- C/C++
- Go
- Rust
- Ruby
- PHP
- Swift
- Kotlin
- And many more

It adapts to whatever language and framework your project uses.

## Do I need to be connected to the internet?

Yes, Claude Code requires an internet connection to access Anthropic's API. It's a cloud-based service.

## Will Claude Code replace developers?

No — it augments them. See "Managing Resistance" in the [Implementation Guide](/articles/implementation-guide) for the full case and how to talk your team through this concern.

## What's the learning curve?

Most developers can use Claude Code productively within:
- **15 minutes:** Basic usage (explain code, simple changes)
- **1 day:** Comfortable with common tasks
- **1 week:** Proficient with most features
- **1 month:** Advanced workflows, significant productivity gains

It's much easier than learning a new programming language or framework.

---

## Technical Setup

What it takes to get Claude Code installed, licensed, and reachable from behind a corporate network.

## What are the system requirements?

**Operating System:**
- ✅ macOS (Apple Silicon and Intel)
- ✅ Linux (Ubuntu, Debian, Fedora, etc.)
- ✅ Windows: native support (Windows 10 1809+ or Windows Server 2019+); WSL2 also works and is required for sandboxed command execution

**Other requirements:**
- Internet connection
- Anthropic API key
- Terminal or compatible IDE (VS Code, Cursor, or JetBrains via plugin)

## How do I install Claude Code?

**Option 1: Command Line (npx)**
```bash
npx @anthropic-ai/claude-code
```

**Option 2: VS Code Extension**
1. Open VS Code
2. Go to Extensions marketplace
3. Search for "Claude Code"
4. Install and configure API key

**Option 3: Cursor IDE**
- Built-in support
- Configure in preferences

**Option 4: JetBrains IDEs**
- Install the dedicated Claude Code plugin (IntelliJ IDEA, PyCharm, WebStorm, PhpStorm, GoLand, Android Studio, and more)
- Configure API key in plugin settings

## How do I get an API key?

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy and store securely
6. Configure in Claude Code

**Security tip:** Never commit API keys to git. Use environment variables or secure secret management.

## My company is on Windows. Can we still use Claude Code?

**Yes — native Windows support shipped in late 2025.**

**Option 1: Native Windows (recommended for most teams)**
- Install directly from PowerShell or CMD, no WSL required
- Requires Windows 10 1809+ or Windows Server 2019+
- Sandboxed command execution isn't available natively — use WSL2 if you need that

**Option 2: WSL2 (Windows Subsystem for Linux)**
- Use Claude Code within a WSL2 environment
- Required if you need sandboxed execution or a Linux-native toolchain

**Option 3: Cloud development environments**
- Use GitHub Codespaces
- Use AWS Cloud9
- Use other cloud IDEs

## How do I configure Claude Code for my company's proxy?

**Set proxy environment variables:**

```bash
# HTTP proxy
export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=http://proxy.company.com:8080

# With authentication
export HTTP_PROXY=http://username:password@proxy.company.com:8080
export HTTPS_PROXY=http://username:password@proxy.company.com:8080

# No proxy for certain domains
export NO_PROXY=localhost,127.0.0.1,.company.local
```

**Or in ~/.claude/config:**
```json
{
  "proxy": "http://proxy.company.com:8080"
}
```

## Can Claude Code work in air-gapped environments?

No, Claude Code requires internet access to Anthropic's API. It's a cloud-based service and cannot work offline or in air-gapped environments.

**Alternatives for air-gapped:**
- Consider on-premise LLM solutions
- Use Claude Code for non-sensitive development
- Separate development environments

---

## Usage Questions

Day-to-day questions teams ask once they're actually working with Claude Code.

## How do I get the best results from Claude Code?

**Follow the 3 C's:**

1. **Context:** Provide relevant background
2. **Clarity:** Be specific about what you want
3. **Constraints:** Specify requirements and limitations

**Example:**
```
❌ "Fix this"
✅ "The user login endpoint returns 500 when password is wrong.
   It should return 401 with error message. Fix the error handling
   in src/auth/login.js"
```

## Can Claude Code access my entire codebase?

Yes, Claude Code can read files in your project directory. However:
- It only reads files relevant to your request
- You can see which files it reads
- You can configure exclusions (.gitignore is respected)
- It cannot access files outside the project directory

## Can Claude Code make mistakes?

Yes, like any AI system, Claude can make mistakes:
- Generate incorrect code
- Misunderstand requirements
- Miss edge cases
- Introduce bugs

**Always:**
- Review all generated code
- Run tests
- Verify correctness
- Use your judgment

You're still the developer in charge.

## How do I undo changes Claude Code makes?

**If using git:**
```bash
# See what changed
git diff

# Undo specific file
git checkout -- filename

# Undo all changes
git reset --hard HEAD
```

**If not using git:**
- Use your IDE's undo feature (Cmd/Ctrl+Z)
- Restore from backup
- Ask Claude to revert: "Undo the last change"

**Best practice:** Always commit working code before major Claude Code sessions.

## Can Claude Code commit code automatically?

Claude Code can create commits, but:
- You'll be asked for permission
- You should review changes first
- You maintain control

**Best practice:** Review all changes before committing.

## Does Claude Code remember previous conversations?

Within a session, yes. Claude remembers:
- Previous messages in the conversation
- Files already read
- Changes made
- Context built up

Starting a new session creates a fresh context.

## Can multiple developers share Claude Code sessions?

No, sessions are individual. However:
- Teams can share prompts and patterns
- Success stories can be documented
- Knowledge can be shared via wiki

---

## Security & Compliance

The questions security and legal teams ask before signing off on rollout.

## Is it safe to send my code to Claude?

**Security measures:**
- All data encrypted in transit (TLS 1.2+)
- Anthropic is SOC 2 Type II certified
- Not used for training by default
- Covered by Anthropic's privacy policy

**You should:**
- Follow your company's acceptable use policy
- Don't send credentials or secrets
- Don't send customer PII
- Review security requirements with your team

## What data does Anthropic keep?

**By default:**
- API requests logged for debugging (30 days)
- Not used for model training

**You can:**
- Opt into data retention for model improvement
- Request data deletion
- Review Anthropic's data processing agreement

## Is Claude Code GDPR compliant?

Yes, Anthropic is GDPR compliant:
- Data processing agreement available
- EU region option available
- Right to deletion supported
- Transparent data practices

## Can we use Claude Code for HIPAA-covered code?

**For healthcare organizations:**
- Anthropic offers BAA (Business Associate Agreement) for enterprise
- Don't send PHI without BAA in place
- Can use for infrastructure and non-PHI code
- Review with compliance team

## How do we audit Claude Code usage?

**API-level:**
- Anthropic Console shows API usage
- Request logs available
- Usage by API key tracked

**Organization-level:**
- Monitor API key usage
- Collect user feedback
- Track adoption metrics
- Regular reviews with security team

## What if an employee accidentally sends sensitive data?

**Immediate actions:**
1. Stop using that API key
2. Rotate the API key immediately
3. Contact Anthropic support to request data deletion
4. Follow your incident response procedure
5. Review and reinforce training

**Prevention:**
- Clear acceptable use policy
- Regular training
- Sanitization guidelines
- Pre-commit hooks for secrets

---

## Billing & Costs

What Claude Code actually costs, and how to keep it predictable.

## How much does Claude Code cost?

**API pricing (as of Feb 2026):**
- Charged per token (input and output)
- Varies by model (Sonnet, Opus, Haiku)
- Volume discounts available for enterprise

**Typical costs:**
- Average: €30-50 per developer per month
- Light users: €15-25/month
- Heavy users: €60-100/month

**Compare to:**
- GitHub Copilot: moved from flat-rate to usage-based [AI Credits billing in June 2026](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/) — confirm current plan pricing directly with GitHub before quoting a number
- Developer salary: €4,000-8,000/month
- ROI typically 7-40x (the [flagship case study](/articles/service-offerings) landed at ~7.6x; a single developer with heavy usage can see 30x+)

## How do we control costs?

**Strategies:**

1. **Set usage limits:**
   - Billing alerts in Anthropic Console
   - Soft limits per API key
   - Monitor usage regularly

2. **Optimize usage:**
   - Be specific in prompts (reduces tokens)
   - Use search before full file reads
   - Clear, focused requests

3. **Educate team:**
   - Efficient prompting techniques
   - When to use (and not use) Claude
   - Cost awareness

4. **Monitor and adjust:**
   - Weekly usage reviews
   - Identify high-usage patterns
   - Optimize workflows

## Can we get a fixed-price plan?

Contact Anthropic for enterprise pricing options, which may include:
- Volume discounts
- Reserved capacity
- Predictable billing
- Custom arrangements

## What happens if we hit our usage limit?

**Soft limit:**
- You'll receive alerts
- Can increase limit
- Usage continues

**Hard limit:**
- API requests will fail
- Developers get error message
- Need to increase limit or wait for reset

**Best practice:** Set alerts well before limits.

## Is there a free tier?

Anthropic offers:
- Free trial credits for new accounts
- Generous initial credits
- Pay-as-you-go after that

Check [console.anthropic.com](https://console.anthropic.com) for current offers.

---

## Troubleshooting

The specific errors teams hit most often, grouped by where they show up: install, API, day-to-day usage, git, and performance.

## Installation Issues

Problems that show up before Claude Code ever runs.

## Issue: "Command not found: npx"

**Problem:** Node.js not installed or not in PATH

**Solution:**
```bash
# Install Node.js (macOS with Homebrew)
brew install node

# Install Node.js (Linux)
# Ubuntu/Debian
sudo apt update && sudo apt install nodejs npm

# Fedora
sudo dnf install nodejs npm

# Verify
node --version
npm --version
```

## Issue: "Permission denied" when installing

**Problem:** Insufficient permissions

**Solution:**
```bash
# Don't use sudo with npx
# If needed, fix npm permissions:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

## Issue: VS Code extension not working

**Problem:** Extension not properly configured

**Solution:**
1. Check API key is set in settings
2. Reload VS Code window (Cmd/Ctrl+R)
3. Check output panel for errors
4. Reinstall extension if needed

## API & Connection Issues

Problems reaching Anthropic's API once Claude Code is installed.

## Issue: "API key not found"

**Problem:** API key not configured

**Solution:**
```bash
# Set environment variable
export ANTHROPIC_API_KEY="sk-ant-api03-..."

# Add to shell profile for persistence
echo 'export ANTHROPIC_API_KEY="sk-ant-..."' >> ~/.bashrc
source ~/.bashrc

# Or configure in tool settings
```

## Issue: "Invalid API key"

**Problem:** API key is wrong or expired

**Solution:**
1. Verify API key in Anthropic Console
2. Check for extra spaces or quotes
3. Regenerate API key if needed
4. Update configuration

## Issue: "Connection timeout" or "Network error"

**Problem:** Cannot reach Anthropic API

**Solution:**
```bash
# Test connectivity
curl -I https://api.anthropic.com

# If behind proxy, configure:
export HTTPS_PROXY=http://proxy.company.com:8080

# Check firewall rules
# Ensure api.anthropic.com is accessible on port 443
```

## Issue: "Rate limit exceeded"

**Problem:** Too many requests too quickly

**Solution:**
- Wait a few moments and retry
- Reduce request frequency
- Check if multiple processes using same key
- Consider upgrading limits if frequent

## Usage Issues

Problems that show up mid-session, once Claude is actually working in your codebase.

## Issue: Claude doesn't understand my codebase

**Problem:** Insufficient context provided

**Solution:**
```
❌ "Fix the bug"

✅ "In src/services/payment.js, the processPayment function
   is throwing an error when amount is zero. It should return
   early with an error message instead."
```

**Tips:**
- Be more specific
- Mention file paths
- Provide error messages
- Describe expected behavior

## Issue: Generated code doesn't work

**Problem:** Claude made a mistake or misunderstood

**Solution:**
1. Review the code carefully
2. Check error messages
3. Ask Claude to fix:
   ```
   "This code has an error: [error message]
   Please fix it."
   ```
4. Provide more context
5. Try a different approach

## Issue: Claude is changing the wrong files

**Problem:** Ambiguous request or wrong context

**Solution:**
- Be explicit about file paths
- Say "Only modify X, don't change Y"
- Review changes before accepting
- Undo and try again with clearer prompt

## Issue: Responses are too slow

**Problem:** Large context or complex request

**Solution:**
- Break into smaller requests
- Be more specific (reduces files to read)
- Use faster model (Haiku) for simple tasks
- Check internet connection

## Git Integration Issues

Problems that surface when Claude Code touches branches, commits, or merges.

## Issue: Claude commits to wrong branch

**Problem:** Not on intended branch

**Solution:**
```bash
# Always check current branch first
git branch

# Switch to correct branch before asking Claude to commit
git checkout feature-branch

# Then ask Claude to commit
```

## Issue: Commit messages are not following our convention

**Problem:** Claude not aware of convention

**Solution:**
```
"Commit these changes using our conventional commits format:
- feat: for features
- fix: for bug fixes
- refactor: for refactoring

Include ticket number in format: [PROJ-123]"
```

**Or configure in .claude/config:**
```json
{
  "gitCommitTemplate": "feat: {{message}}\n\n[PROJ-{{ticket}}]"
}
```

## Issue: Claude created a merge conflict

**Problem:** Changes conflict with other work

**Solution:**
```bash
# Review conflict
git status
git diff

# Resolve manually or ask Claude
"There's a merge conflict in [file].
Help me resolve it. I want to keep [describe desired resolution]."
```

## Performance Issues

Problems that show up as cost or speed complaints rather than broken behavior.

## Issue: High API costs

**Problem:** Inefficient usage patterns

**Solution:**
1. Review usage in Anthropic Console
2. Identify high-usage patterns:
   - Reading very large files?
   - Repetitive requests?
   - Unclear prompts causing retries?
3. Optimize:
   - Be more specific
   - Use file search before reading
   - Break down large files
4. Set usage alerts

## Issue: Tests are failing after Claude changes

**Problem:** Generated code has issues

**Solution:**
```bash
# Always run tests after changes
npm test

# If failing, ask Claude to fix
"These tests are failing: [test names]
Here are the errors: [error messages]
Please fix the code to make them pass."
```

**Prevention:**
- Include "run tests" in your requests
- Review changes before accepting
- Use TDD approach

---

## Performance & Optimization

Making Claude Code faster and cheaper, and knowing where it earns its keep.

## How can I make Claude Code faster?

**Tips for faster responses:**

1. **Be specific:**
   - Reduces files Claude needs to read
   - Faster processing

2. **Use focused requests:**
   - Break large tasks into smaller steps
   - Work on one thing at a time

3. **Choose appropriate model:**
   - Haiku: Fast, simple tasks
   - Sonnet: Balanced (default)
   - Opus: Complex reasoning (slower)

4. **Good internet connection:**
   - Faster upload/download
   - Reduces latency

## How can I reduce API costs?

**Cost optimization strategies:**

1. **Efficient prompting:**
   ```
   ❌ "Read all files and find the bug"
   ✅ "Search for 'processPayment' function, then read that file"
   ```

2. **Use model selection:**
   - Haiku for simple tasks (cheaper)
   - Sonnet for most tasks
   - Opus only when needed

3. **Clear requests:**
   - Reduces back-and-forth
   - Gets it right first time

4. **Batch similar tasks:**
   - "Add tests for all functions in UserService"
   - vs. separate requests for each

5. **Monitor and adjust:**
   - Review usage patterns
   - Educate high-usage team members
   - Share best practices

## What are the best use cases for Claude Code?

**High value (most ROI):**
- ✅ Writing tests
- ✅ Debugging errors
- ✅ Understanding unfamiliar code
- ✅ Writing boilerplate
- ✅ Updating documentation
- ✅ Refactoring
- ✅ Code review assistance

**Medium value:**
- ⚠️ Implementing well-defined features
- ⚠️ Database queries
- ⚠️ API integration
- ⚠️ Configuration

**Use with caution (needs careful review):**
- ⚠️ Security-sensitive code
- ⚠️ Performance-critical code
- ⚠️ Complex business logic
- ⚠️ Architecture decisions

**Not recommended:**
- ❌ Replacing human code review
- ❌ Production database operations
- ❌ Security audits
- ❌ Deciding business requirements

---

## Getting More Help

Where to go when this page doesn't cover it.

## Where can I find documentation?

**Official resources:**
- Anthropic Documentation: [docs.anthropic.com](https://docs.anthropic.com)
- API Reference: [docs.anthropic.com/api](https://docs.anthropic.com/api)
- Claude Code Docs: [docs.anthropic.com/claude-code](https://docs.anthropic.com/claude-code)

**Community:**
- Anthropic Discord
- GitHub discussions
- Stack Overflow (tag: claude-ai)

## How do I report a bug or issue?

**For Claude Code bugs:**
- GitHub: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)
- Support: support@anthropic.com

**For API issues:**
- Anthropic Console support chat
- Status page: status.anthropic.com

## How do I request a new feature?

- GitHub issues (feature request)
- Anthropic Discord feedback channel
- Through your enterprise account manager

## Can I get custom training for my team?

Yes! Contact us for:
- Custom training sessions
- Team-specific workshops
- Ongoing support
- Consulting services

See [Service Offerings](/articles/service-offerings) for details.

## Who do I contact for enterprise support?

**For enterprise customers:**
- Your account manager
- Enterprise support: enterprise@anthropic.com
- Priority support queue

**For consulting services:**
- [Your consulting contact info]

---

## Quick Reference

A cheat sheet for the errors and commands you'll come back to most.

## Common Error Messages

| Error | Meaning | Solution |
|-------|---------|----------|
| "API key not found" | No API key configured | Set ANTHROPIC_API_KEY |
| "Invalid API key" | Key is wrong/expired | Verify in Console |
| "Rate limit exceeded" | Too many requests | Wait and retry |
| "Connection timeout" | Network issue | Check connectivity |
| "Context length exceeded" | Request too large | Break into smaller requests |
| "Model overloaded" | Service busy | Retry in a moment |

## Useful Commands

```bash
# Check Claude Code version
npx @anthropic-ai/claude-code --version

# Start Claude Code
npx @anthropic-ai/claude-code

# With specific API key
ANTHROPIC_API_KEY=sk-ant-... npx @anthropic-ai/claude-code

# Check API connectivity
curl https://api.anthropic.com -I

# View API usage
# Go to console.anthropic.com → Usage

# Clear Claude Code cache (if issues)
rm -rf ~/.claude/cache
```

## Getting Started Checklist

For new users:
- [ ] Node.js installed
- [ ] API key obtained from console.anthropic.com
- [ ] API key configured (environment variable)
- [ ] Claude Code installed (npx or extension)
- [ ] First interaction successful
- [ ] Read acceptable use policy
- [ ] Joined support channel
- [ ] Completed training

## Keyboard Shortcuts

**VS Code Extension:**
- `Cmd/Ctrl + Shift + P` → Command palette
- `Cmd/Ctrl + K` → Inline code generation
- `Cmd/Ctrl + I` → Open Claude panel

**Command Line:**
- `Ctrl + C` → Cancel operation
- `Ctrl + D` → Exit session
- Type normally to chat

---

**Have a question not answered here?** Contact [support channel] or refer to [internal wiki].

> **Where to go next:** for setup and rollout questions, revisit the [Implementation Guide](/articles/implementation-guide); for team usage standards, see [Enterprise Best Practices](/articles/best-practices). If you're stepping back from a specific issue to ask whether AI is the right call at all, start from [Team-First AI](/articles/team-first-ai).
