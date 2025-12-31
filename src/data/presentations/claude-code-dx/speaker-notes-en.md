# Full-Cycle AI Development with Claude Code — Speaker Notes

**Duration**: 15-20 minutes
**Audience**: Mixed (developers, marketing, HR, office management)
**Key Message**: Transform your DX with AI agents — go beyond chat to autonomous workflows

---

## Chapter 1: Introduction (2-3 min)

### Slide 1: Title Slide

**Duration**: 30 seconds

**Opening**:
"Hi everyone! Today I want to show you something that has completely changed how I work on the Formbuilder project. You all know Windsurf and its chat function — but I want to take you a step further."

**Transition**: "Let me start with a question..."

---

### Slide 2: You know Windsurf chat...

**Duration**: 45 seconds

**Key Point**: Acknowledge their current experience, then pivot to what's possible.

**Speaking Points**:
1. "You've probably used the chat to ask questions, generate snippets, explain code"
2. "That's great — but it's like having a single assistant who forgets everything between conversations"
3. "What if you had a whole team of specialists, each with their own expertise?"

**Transition**: "Let me show you the difference..."

---

### Slide 3: Chat vs. Agents

**Duration**: 1 minute

**Key Point**: Make the comparison tangible.

**Speaking Points**:
1. **Windsurf Chat**: "Question in, answer out. You provide context manually every time. One task at a time."
2. **Claude Code Agents**: "Autonomous workflows. A Product Manager agent that knows your requirements. A Frontend Engineer that knows your codebase patterns. They remember, they specialize, they collaborate."
3. "And the magic? CLAUDE.md — a file that gives Claude permanent project context."

**Engagement**: "Who here has wished their AI remembered your project conventions?"

---

## Chapter 2: Getting Started (3-4 min)

### Slide 4: Title - Getting Started

**Duration**: 15 seconds

**Transition**: "Let me show you how simple it is to set this up."

---

### Slide 5: Installation

**Duration**: 1 minute

**Key Point**: It's just npm — they know this.

**Speaking Points**:
1. "One npm install. That's it."
2. "Run `claude` in your project folder, or use the Windsurf/VSCode extension"
3. "For our Java devs: think of it like adding a Maven plugin that gives you AI superpowers"

**Demo moment**: If doing live, show the installation command.

---

### Slide 6: The .claude/ folder

**Duration**: 1.5 minutes

**Key Point**: This is where the magic lives.

**Speaking Points**:
1. **agents/**: "Your AI team members. Each file defines a specialist — their role, their tools, their instructions."
2. **commands/**: "Custom slash commands. Like `/feature-pipeline` that chains multiple agents together."
3. **skills/**: "Reusable workflows that can be triggered automatically."
4. **CLAUDE.md**: "The brain. Project rules, tech stack, conventions. Claude reads this on every session."

**Analogy for non-devs**: "Think of it like an onboarding document — but for your AI. It tells Claude: 'This is how we do things here.'"

---

## Chapter 3: MCP Servers (3-4 min)

### Slide 7: Title - MCP Servers

**Duration**: 15 seconds

**Transition**: "Now, Claude is smart — but it doesn't know everything. That's where MCP servers come in."

---

### Slide 8: What are MCP Servers?

**Duration**: 1.5 minutes

**Key Point**: External superpowers for Claude.

**Speaking Points**:
1. "Model Context Protocol — a standard way to connect Claude to external tools and data."
2. "Without MCP: Claude might hallucinate an API that doesn't exist, or give you outdated React syntax."
3. "With MCP: Claude fetches real, current documentation before answering."

**Walk through the diagram**:
- "Claude talks to the MCP protocol layer"
- "MCP routes requests to specialized servers"
- "Each server has a specific capability: docs, web search, GitHub..."

---

### Slide 9: My MCP Setup

**Duration**: 1.5 minutes

**Key Point**: Practical examples they can copy.

**Speaking Points**:
1. **Context7**: "This is my favorite. When I ask Claude about React Hook Form or Zod, it fetches the actual current docs. No more 'that method was deprecated 2 versions ago.'"
2. **Exa**: "AI-powered web search. Great for finding code examples on GitHub or the latest best practices."
3. **GitHub**: "Read issues, browse PRs, understand what my team is working on."
4. **Playwright**: "Browser automation. Claude can actually test the UI it builds."

**For non-devs**: "Imagine giving your AI access to the internet, to documentation, to your project management tools — all at once."

---

## Chapter 4: My Workflow (5-6 min) — Main Event

### Slide 10: Title - My Workflow

**Duration**: 15 seconds

**Transition**: "Now let's see how this all comes together on a real project."

---

### Slide 11: The Formbuilder

**Duration**: 45 seconds

**Key Point**: Set context for the demo.

**Speaking Points**:
1. "The Formbuilder is an npm package I'm building for Logius"
2. "Two main components: Admin Panel for configuring forms, FormWizard for displaying them"
3. "Built on the Dutch government design system — so styling and WCAG accessibility are already handled"
4. "Any team at Logius can use this without worrying about design consistency"

---

### Slide 12: My AI Team

**Duration**: 1.5 minutes

**Key Point**: This is the core concept. Take time here.

**Speaking Points**:
Walk through the diagram step by step:

1. **Phase 1 - Planning**: "Product Manager validates the feature request. Asks clarifying questions. Writes requirements."
2. **Phase 2 - Design**: "UX/UI Designer creates component structure, defines props, plans accessibility."
3. **Phase 3 - Build**: "Frontend Engineer implements the actual code, following the design spec."
4. **Phase 4 - Review**: "Three reviewers run in parallel: security, performance, code quality."

"Each agent has isolated context — they don't pollute each other. And they produce artifacts: documents, specs, actual code files."

**Engagement**: "Imagine having code review happen automatically before you even open a PR."

---

### Slide 13: The Flow

**Duration**: 1 minute

**Key Point**: Make it concrete with a process.

**Speaking Points**:
1. "I start by describing what I want in natural language. 'Add conditional field visibility to the form.'"
2. "Product Manager asks: 'What fields should trigger visibility? What about edge cases?'"
3. "Designer creates: component structure, state management approach, accessibility requirements"
4. "Engineer builds: actual React components with tests"
5. "Reviewers check: XSS vulnerabilities, bundle size, code patterns"

---

### Slide 14: Agent Example

**Duration**: 1 minute

**Key Point**: Demystify the agent file.

**Speaking Points**:
1. "An agent is just a markdown file with a header and instructions"
2. **Header**: name, description, which tools they can use (Read, Write, Bash...)
3. **Body**: Natural language instructions. Who they are, how they work.
4. "This is a real file from my project — you can peek at my .claude/ folder later"

**For Java devs**: "Think of it like a Spring configuration, but for AI behavior."

---

## Chapter 5: Tips & Tricks (2-3 min)

### Slide 15: Title - Tips & Tricks

**Duration**: 15 seconds

**Transition**: "Let me share what I've learned the hard way."

---

### Slide 16: Best Practices

**Duration**: 1 minute

**Key Point**: Actionable advice.

**Speaking Points** (rapid fire):
1. **CLAUDE.md**: "This is your most important file. Spend time on it. Project rules, naming conventions, tech stack."
2. **Isolated context**: "Subagents don't remember your main conversation. That's a feature, not a bug."
3. **/rewind**: "Made a mistake? Roll back to a checkpoint. Like git, but for your AI session."
4. **"think harder"**: "Magic words. Triggers deeper reasoning for architecture decisions."
5. **Chain, don't bloat**: "Multiple small agents > one massive prompt."

---

### Slide 17: Learning & Resources

**Duration**: 1 minute

**Key Point**: Give them next steps.

**Speaking Points**:
1. **YouTube**: "IndyDevDan and AI Jason have great practical tutorials"
2. **Medium/Dev.to**: "Search for 'Claude Code agents' — the community is active"
3. **GitHub**: "VoltAgent has an awesome collection of agent templates"
4. **Official docs**: "docs.anthropic.com has everything"
5. "But honestly? Just experiment. Install it, add one MCP server, make one agent."

---

## Chapter 6: Wrap-up (1-2 min)

### Slide 18: Title - Wrap-up

**Duration**: 15 seconds

**Build anticipation**: "Before we wrap up, I have one more thing to show you..."

---

### Slide 19: Oh, and this presentation?

**Duration**: 45 seconds

**Key Point**: The meta-reveal.

**Speaking Points**:
1. "So... this presentation you're watching?"
2. "I built a presentation system with React. And I generate slides using... Claude Code agents."
3. "The same workflow I just showed you — discovery, design, content generation, visual creation."
4. "It's agents all the way down."

**Let it land**: Give them a moment to appreciate the meta-ness.

---

### Slide 20: Start Today

**Duration**: 45 seconds

**Key Point**: Clear call to action.

**Speaking Points** (go through the list):
1. "Install Claude Code — literally one npm command"
2. "Create a CLAUDE.md in your project — start simple, add over time"
3. "Add one MCP server — I recommend Context7 first"
4. "Make one custom agent — maybe a code reviewer for your stack"
5. "And share what you learn! Come talk to me, share in Slack, show your team."

---

### Slide 21: Questions?

**Duration**: Remaining time

**Closing**:
"Thanks for your attention! I'm happy to dive deeper into any of this. And if you want to see my actual .claude/ folder or the Formbuilder agents, come find me after."

**Prepare for common questions**:
- "How much does it cost?" — API usage, roughly like ChatGPT Pro
- "Can I use this for Java?" — Absolutely, agents are language-agnostic
- "Is our code sent to Anthropic?" — Yes, but with enterprise controls available
- "What if the agent makes mistakes?" — Checkpoints, code review agents, human oversight

---

## General Tips for Delivery

1. **Energy**: Start strong with the "magical DX" hook
2. **Pacing**: The workflow chapter is the main event — slow down there
3. **Engagement**: Ask rhetorical questions, make eye contact when asking who uses what
4. **Demo flexibility**: If time allows, show live terminal. If not, the slides tell the story.
5. **Meta moment**: Let the presentation-reveal land — pause for effect
6. **Inclusivity**: Explain technical concepts for non-devs, but don't over-explain for devs

---

*Total estimated time: 18 minutes + Q&A*
