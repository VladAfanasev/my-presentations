import { PresentationData } from '../../types/presentation';

export const claudeCodeDxPresentation: PresentationData = {
  meta: {
    title: {
      nl: 'Full-Cycle AI Development met Claude Code',
      en: 'Full-Cycle AI Development with Claude Code',
    },
    author: 'Vlad Afanasev',
    date: '2025-01-15',
    description: {
      nl: 'Ontdek hoe je met AI agents, skills en commands je developer experience magisch maakt.',
      en: 'Discover how to make your developer experience magical with AI agents, skills, and commands.',
    },
    tags: ['claude-code', 'ai', 'dx', 'agents', 'mcp'],
  },
  coverSlide: {
    type: 'title',
    title: {
      nl: 'Full-Cycle AI Development met Claude Code',
      en: 'Full-Cycle AI Development with Claude Code',
    },
    content: {
      nl: 'Hoe ik mijn DX magisch maak met AI agents',
      en: 'How I make my DX magical with AI agents',
    },
  },
  chapters: [
    // ===========================================
    // CHAPTER 1: INTRODUCTION
    // ===========================================
    {
      id: 'intro',
      title: { nl: 'Introductie', en: 'Introduction' },
      slides: [
        {
          type: 'concept',
          title: {
            nl: 'Jullie kennen Windsurf chat...',
            en: 'You know Windsurf chat...',
          },
          content: {
            nl: 'Maar er is zoveel meer mogelijk! Vandaag laat ik zien hoe ik werk aan de Formbuilder voor Logius — met een team van AI agents.',
            en: "But there's so much more possible! Today I'll show you how I work on the Formbuilder for Logius — with a team of AI agents.",
          },
          visual: 'icon',
          icon: '💬',
        },
        {
          type: 'comparison',
          title: {
            nl: 'Chat vs. Agents',
            en: 'Chat vs. Agents',
          },
          items: [
            {
              title: { nl: 'Windsurf Chat', en: 'Windsurf Chat' },
              content: {
                nl: 'Vraag-antwoord, 1 taak per keer, handmatige context',
                en: 'Question-answer, 1 task at a time, manual context',
              },
            },
            {
              title: { nl: 'Claude Code Agents', en: 'Claude Code Agents' },
              content: {
                nl: 'Autonome workflows, gespecialiseerde rollen, project context via CLAUDE.md',
                en: 'Autonomous workflows, specialized roles, project context via CLAUDE.md',
              },
            },
          ],
        },
      ],
    },
    // ===========================================
    // CHAPTER 2: GETTING STARTED
    // ===========================================
    {
      id: 'setup',
      title: { nl: 'Aan de slag', en: 'Getting Started' },
      slides: [
        {
          type: 'title',
          title: {
            nl: 'Aan de slag',
            en: 'Getting Started',
          },
          content: {
            nl: 'Je Claude Code omgeving opzetten',
            en: 'Setting up your Claude Code environment',
          },
        },
        {
          type: 'code',
          title: {
            nl: 'Installatie',
            en: 'Installation',
          },
          content: {
            nl: 'Eenvoudig installeren via npm:',
            en: 'Easy installation via npm:',
          },
          code: `# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Start in je project
cd my-project
claude

# Of met Windsurf/VSCode extension
# Klik op de Claude Code button`,
          language: 'bash',
          explanation: {
            nl: 'Claude Code werkt standalone in terminal of via de IDE extension.',
            en: 'Claude Code works standalone in terminal or via the IDE extension.',
          },
        },
        {
          type: 'concept',
          title: {
            nl: 'De .claude/ folder',
            en: 'The .claude/ folder',
          },
          content: {
            nl: 'Hier leeft je AI configuratie: agents, commands, skills en settings.',
            en: 'This is where your AI configuration lives: agents, commands, skills, and settings.',
          },
          visual: 'diagram',
          svg: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
  <style>
    .folder { fill: var(--accent-primary, #6366f1); }
    .file { fill: var(--text-secondary, #94a3b8); }
    .label { fill: var(--text-primary, #f8fafc); font-family: monospace; font-size: 12px; }
    .desc { fill: var(--text-muted, #64748b); font-family: sans-serif; font-size: 10px; }
  </style>

  <!-- Root folder -->
  <rect x="20" y="10" width="16" height="14" rx="2" class="folder"/>
  <text x="42" y="22" class="label">.claude/</text>

  <!-- Agents -->
  <rect x="40" y="45" width="16" height="14" rx="2" class="folder"/>
  <text x="62" y="57" class="label">agents/</text>
  <text x="140" y="57" class="desc">Gespecialiseerde AI rollen</text>

  <rect x="60" y="70" width="12" height="12" rx="1" class="file"/>
  <text x="78" y="80" class="label">product-manager.md</text>

  <rect x="60" y="90" width="12" height="12" rx="1" class="file"/>
  <text x="78" y="100" class="label">frontend-engineer.md</text>

  <rect x="60" y="110" width="12" height="12" rx="1" class="file"/>
  <text x="78" y="120" class="label">code-reviewer.md</text>

  <!-- Commands -->
  <rect x="40" y="140" width="16" height="14" rx="2" class="folder"/>
  <text x="62" y="152" class="label">commands/</text>
  <text x="150" y="152" class="desc">Slash commands</text>

  <rect x="60" y="165" width="12" height="12" rx="1" class="file"/>
  <text x="78" y="175" class="label">feature-pipeline.md</text>

  <!-- Skills -->
  <rect x="40" y="195" width="16" height="14" rx="2" class="folder"/>
  <text x="62" y="207" class="label">skills/</text>
  <text x="120" y="207" class="desc">Herbruikbare workflows</text>

  <!-- CLAUDE.md -->
  <rect x="40" y="235" width="12" height="12" rx="1" class="file"/>
  <text x="58" y="245" class="label">CLAUDE.md</text>
  <text x="145" y="245" class="desc">Project context & regels</text>
</svg>`,
        },
      ],
    },
    // ===========================================
    // CHAPTER 3: MCP SERVERS
    // ===========================================
    {
      id: 'mcp-servers',
      title: { nl: 'MCP Servers', en: 'MCP Servers' },
      slides: [
        {
          type: 'title',
          title: {
            nl: 'MCP Servers',
            en: 'MCP Servers',
          },
          content: {
            nl: 'Externe tools voor Claude',
            en: 'External tools for Claude',
          },
        },
        {
          type: 'concept',
          title: {
            nl: 'Wat zijn MCP Servers?',
            en: 'What are MCP Servers?',
          },
          content: {
            nl: 'Model Context Protocol servers geven Claude toegang tot externe databronnen en tools — denk aan web search, documentatie, GitHub, en meer.',
            en: 'Model Context Protocol servers give Claude access to external data sources and tools — think web search, documentation, GitHub, and more.',
          },
          visual: 'diagram',
          svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .box { fill: none; stroke: var(--accent-primary, #6366f1); stroke-width: 2; rx: 8; }
    .claude-box { fill: var(--accent-primary, #6366f1); opacity: 0.2; }
    .mcp-box { fill: var(--accent-secondary, #818cf8); opacity: 0.15; }
    .label { fill: var(--text-primary, #f8fafc); font-family: sans-serif; font-size: 12px; text-anchor: middle; }
    .sublabel { fill: var(--text-muted, #64748b); font-family: sans-serif; font-size: 9px; text-anchor: middle; }
    .arrow { stroke: var(--text-secondary, #94a3b8); stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
  </style>

  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="var(--text-secondary, #94a3b8)"/>
    </marker>
  </defs>

  <!-- Claude -->
  <rect x="30" y="60" width="100" height="80" class="claude-box" rx="8"/>
  <rect x="30" y="60" width="100" height="80" class="box"/>
  <text x="80" y="95" class="label">Claude</text>
  <text x="80" y="115" class="sublabel">Code</text>

  <!-- Arrows -->
  <path d="M 135 100 L 175 100" class="arrow"/>

  <!-- MCP Hub -->
  <rect x="180" y="40" width="80" height="120" class="mcp-box" rx="8"/>
  <rect x="180" y="40" width="80" height="120" class="box"/>
  <text x="220" y="70" class="label">MCP</text>
  <text x="220" y="90" class="sublabel">Protocol</text>

  <!-- Arrows to servers -->
  <path d="M 265 70 L 310 50" class="arrow"/>
  <path d="M 265 100 L 310 100" class="arrow"/>
  <path d="M 265 130 L 310 150" class="arrow"/>

  <!-- Server boxes -->
  <rect x="315" y="25" width="90" height="40" class="box"/>
  <text x="360" y="42" class="label">Context7</text>
  <text x="360" y="56" class="sublabel">Docs API</text>

  <rect x="315" y="80" width="90" height="40" class="box"/>
  <text x="360" y="97" class="label">Exa</text>
  <text x="360" y="111" class="sublabel">Web Search</text>

  <rect x="315" y="135" width="90" height="40" class="box"/>
  <text x="360" y="152" class="label">GitHub</text>
  <text x="360" y="166" class="sublabel">Issues & PRs</text>
</svg>`,
        },
        {
          type: 'checklist',
          title: {
            nl: 'Mijn MCP Setup',
            en: 'My MCP Setup',
          },
          content: {
            nl: 'De servers die ik dagelijks gebruik:',
            en: 'The servers I use daily:',
          },
          items: [
            {
              nl: 'Context7 — Up-to-date library documentatie (geen hallucinaties!)',
              en: 'Context7 — Up-to-date library documentation (no hallucinations!)',
            },
            {
              nl: 'Exa — AI-powered web search & code voorbeelden',
              en: 'Exa — AI-powered web search & code examples',
            },
            {
              nl: 'GitHub — Issues lezen, PRs maken, code browsen',
              en: 'GitHub — Read issues, create PRs, browse code',
            },
            {
              nl: 'Playwright — Browser automation voor testing',
              en: 'Playwright — Browser automation for testing',
            },
          ],
        },
      ],
    },
    // ===========================================
    // CHAPTER 4: MY WORKFLOW
    // ===========================================
    {
      id: 'workflow',
      title: { nl: 'Mijn Workflow', en: 'My Workflow' },
      slides: [
        {
          type: 'title',
          title: {
            nl: 'Mijn Workflow',
            en: 'My Workflow',
          },
          content: {
            nl: 'Feature development met AI agents',
            en: 'Feature development with AI agents',
          },
        },
        {
          type: 'concept',
          title: {
            nl: 'De Formbuilder',
            en: 'The Formbuilder',
          },
          content: {
            nl: 'Een npm package voor Logius met Admin Panel en FormWizard componenten. Bouwt op het Rijksoverheid design system — styling en WCAG zijn ingebouwd.',
            en: 'An npm package for Logius with Admin Panel and FormWizard components. Built on the Dutch government design system — styling and WCAG are built-in.',
          },
          visual: 'icon',
          icon: '📦',
        },
        {
          type: 'concept',
          title: {
            nl: 'Mijn AI Team',
            en: 'My AI Team',
          },
          content: {
            nl: 'Elke agent heeft een specifieke rol en expertise. Ze werken samen via een gestructureerde pipeline.',
            en: 'Each agent has a specific role and expertise. They collaborate through a structured pipeline.',
          },
          visual: 'diagram',
          svg: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
  <style>
    .agent-box { fill: var(--bg-secondary, #1e293b); stroke: var(--accent-primary, #6366f1); stroke-width: 2; rx: 8; }
    .agent-active { fill: var(--accent-primary, #6366f1); opacity: 0.2; }
    .agent-label { fill: var(--text-primary, #f8fafc); font-family: sans-serif; font-size: 11px; text-anchor: middle; font-weight: bold; }
    .agent-desc { fill: var(--text-muted, #64748b); font-family: sans-serif; font-size: 9px; text-anchor: middle; }
    .arrow { stroke: var(--accent-primary, #6366f1); stroke-width: 2; fill: none; marker-end: url(#arrow2); }
    .parallel-arrow { stroke: var(--text-secondary, #94a3b8); stroke-width: 1.5; stroke-dasharray: 4,2; fill: none; }
    .phase-label { fill: var(--text-secondary, #94a3b8); font-family: sans-serif; font-size: 10px; }
    .phase-num { fill: var(--accent-primary, #6366f1); font-family: sans-serif; font-size: 14px; font-weight: bold; }
  </style>

  <defs>
    <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-primary, #6366f1)"/>
    </marker>
  </defs>

  <!-- Phase labels -->
  <text x="100" y="25" class="phase-num">1</text>
  <text x="120" y="25" class="phase-label">Planning</text>

  <text x="260" y="25" class="phase-num">2</text>
  <text x="280" y="25" class="phase-label">Design</text>

  <text x="420" y="25" class="phase-num">3</text>
  <text x="440" y="25" class="phase-label">Build</text>

  <text x="420" y="195" class="phase-num">4</text>
  <text x="440" y="195" class="phase-label">Review</text>

  <!-- Row 1: Main pipeline -->
  <rect x="30" y="45" width="120" height="60" class="agent-box"/>
  <rect x="30" y="45" width="120" height="60" class="agent-active"/>
  <text x="90" y="72" class="agent-label">Product Manager</text>
  <text x="90" y="88" class="agent-desc">Requirements & specs</text>

  <path d="M 155 75 L 195 75" class="arrow"/>

  <rect x="200" y="45" width="120" height="60" class="agent-box"/>
  <text x="260" y="72" class="agent-label">UX/UI Designer</text>
  <text x="260" y="88" class="agent-desc">Component design</text>

  <path d="M 325 75 L 365 75" class="arrow"/>

  <rect x="370" y="45" width="130" height="60" class="agent-box"/>
  <text x="435" y="72" class="agent-label">Frontend Engineer</text>
  <text x="435" y="88" class="agent-desc">Implementation</text>

  <!-- Arrow down to reviews -->
  <path d="M 435 110 L 435 140 L 435 210" class="arrow"/>

  <!-- Row 2: Parallel review agents -->
  <rect x="30" y="220" width="130" height="55" class="agent-box"/>
  <text x="95" y="245" class="agent-label">Security Analyst</text>
  <text x="95" y="260" class="agent-desc">XSS, injection checks</text>

  <rect x="180" y="220" width="130" height="55" class="agent-box"/>
  <text x="245" y="245" class="agent-label">Perf Optimizer</text>
  <text x="245" y="260" class="agent-desc">Bundle & re-renders</text>

  <rect x="330" y="220" width="130" height="55" class="agent-box"/>
  <text x="395" y="245" class="agent-label">Code Reviewer</text>
  <text x="395" y="260" class="agent-desc">Quality & patterns</text>

  <!-- Parallel indicators -->
  <path d="M 370 240 L 320 240" class="parallel-arrow"/>
  <path d="M 170 240 L 320 240" class="parallel-arrow"/>

  <!-- Done indicator -->
  <rect x="480" y="220" width="80" height="55" rx="8" fill="var(--accent-primary, #6366f1)" opacity="0.3" stroke="var(--accent-primary, #6366f1)" stroke-width="2"/>
  <text x="520" y="252" class="agent-label" fill="var(--accent-primary, #f8fafc)">Done!</text>
</svg>`,
        },
        {
          type: 'process',
          title: {
            nl: 'De Flow',
            en: 'The Flow',
          },
          steps: [
            {
              title: { nl: 'Feature Request', en: 'Feature Request' },
              content: {
                nl: 'Ik beschrijf wat ik wil bouwen in natuurlijke taal',
                en: 'I describe what I want to build in natural language',
              },
            },
            {
              title: { nl: 'PM Validatie', en: 'PM Validation' },
              content: {
                nl: 'Product Manager analyseert, stelt vragen, schrijft specs',
                en: 'Product Manager analyzes, asks questions, writes specs',
              },
            },
            {
              title: { nl: 'Design Specs', en: 'Design Specs' },
              content: {
                nl: 'UX/UI Designer maakt component structuur en accessibility plan',
                en: 'UX/UI Designer creates component structure and accessibility plan',
              },
            },
            {
              title: { nl: 'Implementatie', en: 'Implementation' },
              content: {
                nl: 'Frontend Engineer bouwt de code met tests',
                en: 'Frontend Engineer builds the code with tests',
              },
            },
          ],
        },
        {
          type: 'code',
          title: {
            nl: 'Agent Voorbeeld',
            en: 'Agent Example',
          },
          content: {
            nl: 'Zo ziet een agent definitie eruit:',
            en: 'This is what an agent definition looks like:',
          },
          code: `<!-- .claude/agents/frontend-engineer.md -->
---
name: frontend-engineer
description: Implements React components
tools: Read, Write, Edit, Bash, Glob, Grep
---

You are a senior frontend engineer specializing in:
- React 19 with TypeScript
- Accessibility (WCAG 2.1 AA)
- Government design system (NL-DS)

When implementing features:
1. Follow existing patterns in the codebase
2. Write unit tests for all components
3. Ensure keyboard navigation works
4. Use semantic HTML elements`,
          language: 'markdown',
          explanation: {
            nl: 'Agents hebben toegang tot specifieke tools en volgen instructies in hun definitie.',
            en: 'Agents have access to specific tools and follow instructions in their definition.',
          },
        },
      ],
    },
    // ===========================================
    // CHAPTER 5: TIPS & TRICKS
    // ===========================================
    {
      id: 'tips',
      title: { nl: 'Tips & Tricks', en: 'Tips & Tricks' },
      slides: [
        {
          type: 'title',
          title: {
            nl: 'Tips & Tricks',
            en: 'Tips & Tricks',
          },
          content: {
            nl: 'Hoe je zelf kunt beginnen',
            en: 'How to get started yourself',
          },
        },
        {
          type: 'checklist',
          title: {
            nl: 'Best Practices',
            en: 'Best Practices',
          },
          content: {
            nl: 'Lessen uit mijn dagelijkse gebruik:',
            en: 'Lessons from my daily use:',
          },
          items: [
            {
              nl: 'CLAUDE.md is je belangrijkste bestand — project context, conventies, regels',
              en: 'CLAUDE.md is your most important file — project context, conventions, rules',
            },
            {
              nl: 'Subagents hebben isolated context — ze vervuilen je hoofdgesprek niet',
              en: "Subagents have isolated context — they don't pollute your main conversation",
            },
            {
              nl: 'Gebruik /rewind voor checkpoints — rol terug als een agent verkeerd gaat',
              en: 'Use /rewind for checkpoints — roll back when an agent goes wrong',
            },
            {
              nl: '"think harder" triggert dieper redeneren — gebruik voor complexe architectuur',
              en: '"think harder" triggers deeper reasoning — use for complex architecture',
            },
            {
              nl: 'Chain agents, bloat geen enkele prompt — betere resultaten, meer controle',
              en: "Chain agents, don't bloat a single prompt — better results, more control",
            },
          ],
        },
        {
          type: 'checklist',
          title: {
            nl: 'Leren & Resources',
            en: 'Learning & Resources',
          },
          content: {
            nl: 'Waar ik mijn kennis vandaan haal:',
            en: 'Where I get my knowledge from:',
          },
          items: [
            {
              nl: 'YouTube: IndyDevDan, AI Jason — praktische tutorials',
              en: 'YouTube: IndyDevDan, AI Jason — practical tutorials',
            },
            {
              nl: 'Medium/Dev.to: Zoek op "Claude Code agents" of "MCP servers"',
              en: 'Medium/Dev.to: Search for "Claude Code agents" or "MCP servers"',
            },
            {
              nl: 'GitHub: VoltAgent/awesome-claude-code-subagents',
              en: 'GitHub: VoltAgent/awesome-claude-code-subagents',
            },
            {
              nl: 'Anthropic Docs: docs.anthropic.com/claude-code',
              en: 'Anthropic Docs: docs.anthropic.com/claude-code',
            },
            {
              nl: 'Experimenteer! Begin klein met 1 MCP server, 1 custom agent',
              en: 'Experiment! Start small with 1 MCP server, 1 custom agent',
            },
          ],
        },
      ],
    },
    // ===========================================
    // CHAPTER 6: WRAP-UP
    // ===========================================
    {
      id: 'wrapup',
      title: { nl: 'Afsluiting', en: 'Wrap-up' },
      slides: [
        {
          type: 'title',
          title: {
            nl: 'Afsluiting',
            en: 'Wrap-up',
          },
          content: {
            nl: 'En nog een verrassing...',
            en: 'And one more surprise...',
          },
        },
        {
          type: 'concept',
          title: {
            nl: 'Oh, en deze presentatie?',
            en: 'Oh, and this presentation?',
          },
          content: {
            nl: 'Deze is gegenereerd met Claude Code! Ik heb een presentation system gebouwd waar ik met agents slides kan maken. Dezelfde workflow die ik net liet zien.',
            en: "This was generated with Claude Code! I built a presentation system where I can create slides with agents. The same workflow I just showed you.",
          },
          visual: 'icon',
          icon: '🤯',
        },
        {
          type: 'summary',
          title: {
            nl: 'Start Vandaag',
            en: 'Start Today',
          },
          content: {
            nl: 'Kleine stappen, grote impact:',
            en: 'Small steps, big impact:',
          },
          points: [
            {
              nl: 'Installeer Claude Code: npm i -g @anthropic-ai/claude-code',
              en: 'Install Claude Code: npm i -g @anthropic-ai/claude-code',
            },
            {
              nl: 'Maak een CLAUDE.md in je project',
              en: 'Create a CLAUDE.md in your project',
            },
            {
              nl: 'Voeg 1 MCP server toe (start met Context7)',
              en: 'Add 1 MCP server (start with Context7)',
            },
            {
              nl: 'Maak je eerste custom agent',
              en: 'Create your first custom agent',
            },
            {
              nl: 'Deel je ervaringen met het team!',
              en: 'Share your experiences with the team!',
            },
          ],
        },
        {
          type: 'concept',
          title: {
            nl: 'Vragen?',
            en: 'Questions?',
          },
          content: {
            nl: 'Bedankt voor jullie aandacht! Laten we samen de toekomst van development ontdekken.',
            en: "Thanks for your attention! Let's discover the future of development together.",
          },
          visual: 'icon',
          icon: '🙋',
        },
      ],
    },
  ],
};
