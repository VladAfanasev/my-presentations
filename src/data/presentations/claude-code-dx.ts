import { PresentationData } from '../../types/presentation';

export const claudeCodeDxPresentation: PresentationData = {
  meta: {
    title: {
      nl: 'Mijn AI Workflow met Claude Code',
      en: 'My AI Workflow with Claude Code',
    },
    author: 'Vlad Afanasev',
    date: '2025-01-15',
    description: {
      nl: 'Hoe ik mijn developer workflow heb getransformeerd met Claude Code op het Formbuilder project.',
      en: 'How I transformed my developer workflow with Claude Code on the Formbuilder project.',
    },
    tags: ['claude-code', 'ai', 'dx', 'agents', 'mcp', 'formbuilder'],
  },
  coverSlide: {
    type: 'title',
    title: {
      nl: 'Mijn AI Workflow met Claude Code',
      en: 'My AI Workflow with Claude Code',
    },
    content: {
      nl: 'Ervaringen van het Formbuilder project bij Logius',
      en: 'Experiences from the Formbuilder project at Logius',
    },
  },
  chapters: [
    // ===========================================
    // CHAPTER 1: WHY THIS PRESENTATION
    // ===========================================
    {
      id: 'why',
      title: { nl: 'Waarom', en: 'Why' },
      slides: [
        {
          type: 'title',
          title: {
            nl: 'Waarom deze presentatie?',
            en: 'Why this presentation?',
          },
          content: {
            nl: 'Mijn workflow delen',
            en: 'Sharing my workflow',
          },
        },
        {
          type: 'concept',
          title: {
            nl: 'Ik wil iets cools delen',
            en: 'I want to share something cool',
          },
          content: {
            nl: 'De afgelopen maanden werk ik aan de Formbuilder voor Logius. Ik heb een workflow ontwikkeld met Claude Code die mijn productiviteit flink heeft verbeterd. Vandaag deel ik hoe dat werkt.',
            en: "Over the past months I've been working on the Formbuilder for Logius. I've developed a workflow with Claude Code that significantly improved my productivity. Today I'm sharing how it works.",
          },
          visual: 'gif',
          giphyId: 'xT9IgzoKnwFNmISR8I', // excited/mind blown gif
        },
      ],
    },
    // ===========================================
    // CHAPTER 2: WHAT IS CLAUDE CODE
    // ===========================================
    {
      id: 'intro',
      title: { nl: 'Wat is Claude Code?', en: 'What is Claude Code?' },
      slides: [
        {
          type: 'title',
          title: {
            nl: 'Wat is Claude Code?',
            en: 'What is Claude Code?',
          },
          content: {
            nl: 'Meer dan een chatbot',
            en: 'More than a chatbot',
          },
        },
        {
          type: 'concept',
          title: {
            nl: 'Vraagje aan jullie',
            en: 'Quick question for you',
          },
          content: {
            nl: 'Wie van jullie werkt al met Claude Code of heeft het uitgeprobeerd?',
            en: 'Who of you is already working with Claude Code or has tried it?',
          },
          visual: 'gif',
          giphyId: '3o7TKTDn976rzVgky4', // raising hand gif
        },
        {
          type: 'concept',
          title: {
            nl: 'Claude Code in het kort',
            en: 'Claude Code in short',
          },
          content: {
            nl: 'Een AI coding assistant die in je terminal of IDE draait. Het kan code lezen, schrijven, en uitvoeren. Maar het echte krachtige: je kunt het uitbreiden.',
            en: 'An AI coding assistant that runs in your terminal or IDE. It can read, write, and execute code. But the real power: you can extend it.',
          },
          visual: 'diagram',
          svg: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg">
  <style>
    .box { fill: none; stroke: var(--accent-primary, #6366f1); stroke-width: 2; }
    .box-filled { fill: var(--accent-primary, #6366f1); opacity: 0.15; }
    .label { fill: var(--text-primary, #f8fafc); font-family: sans-serif; font-size: 13px; text-anchor: middle; font-weight: 600; }
    .sublabel { fill: var(--text-muted, #64748b); font-family: sans-serif; font-size: 10px; text-anchor: middle; }
    .arrow { stroke: var(--text-secondary, #94a3b8); stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
  </style>

  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="var(--text-secondary, #94a3b8)"/>
    </marker>
  </defs>

  <!-- You -->
  <circle cx="70" cy="140" r="35" class="box-filled"/>
  <circle cx="70" cy="140" r="35" class="box"/>
  <text x="70" y="135" class="label">Jij</text>
  <text x="70" y="150" class="sublabel">Developer</text>

  <!-- Arrow to Claude -->
  <path d="M 110 140 L 160 140" class="arrow"/>

  <!-- Claude Code center -->
  <rect x="170" y="90" width="160" height="100" rx="12" class="box-filled"/>
  <rect x="170" y="90" width="160" height="100" rx="12" class="box"/>
  <text x="250" y="130" class="label">Claude Code</text>
  <text x="250" y="150" class="sublabel">Leest • Schrijft • Voert uit</text>

  <!-- Arrow to codebase -->
  <path d="M 335 140 L 385 140" class="arrow"/>

  <!-- Codebase -->
  <rect x="395" y="100" width="80" height="80" rx="8" class="box-filled"/>
  <rect x="395" y="100" width="80" height="80" rx="8" class="box"/>
  <text x="435" y="145" class="label">Code</text>

  <!-- Extensions below -->
  <path d="M 250 195 L 250 225" class="arrow"/>

  <rect x="80" y="230" width="80" height="40" rx="6" class="box"/>
  <text x="120" y="255" class="sublabel">Agents</text>

  <rect x="170" y="230" width="80" height="40" rx="6" class="box"/>
  <text x="210" y="255" class="sublabel">Skills</text>

  <rect x="260" y="230" width="80" height="40" rx="6" class="box"/>
  <text x="300" y="255" class="sublabel">Commands</text>

  <rect x="350" y="230" width="80" height="40" rx="6" class="box"/>
  <text x="390" y="255" class="sublabel">MCP</text>
</svg>`,
        },
      ],
    },
    // ===========================================
    // CHAPTER 3: FEATURES - THE BUILDING BLOCKS
    // ===========================================
    {
      id: 'features',
      title: { nl: 'Building Blocks', en: 'Building Blocks' },
      slides: [
        {
          type: 'title',
          title: {
            nl: 'De Building Blocks',
            en: 'The Building Blocks',
          },
          content: {
            nl: 'Agents, Skills, Commands & MCP',
            en: 'Agents, Skills, Commands & MCP',
          },
        },
        {
          type: 'concept',
          title: {
            nl: 'Hoe werken ze samen?',
            en: 'How do they work together?',
          },
          content: {
            nl: 'Commands zijn je entry points, Skills zijn herbruikbare building blocks, Agents zijn gespecialiseerde rollen die Skills gebruiken, en MCP geeft toegang tot externe tools.',
            en: 'Commands are your entry points, Skills are reusable building blocks, Agents are specialized roles that use Skills, and MCP gives access to external tools.',
          },
          visual: 'diagram',
          svg: `<svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg">
  <style>
    .layer { fill: var(--accent-primary, #6366f1); opacity: 0.1; stroke: var(--accent-primary, #6366f1); stroke-width: 1; }
    .box { fill: var(--bg-secondary, #1e293b); stroke: var(--accent-primary, #6366f1); stroke-width: 2; }
    .label { fill: var(--text-primary, #f8fafc); font-family: sans-serif; font-size: 11px; text-anchor: middle; font-weight: 600; }
    .sublabel { fill: var(--text-muted, #64748b); font-family: sans-serif; font-size: 9px; text-anchor: middle; }
    .layer-label { fill: var(--text-secondary, #94a3b8); font-family: sans-serif; font-size: 10px; font-weight: 600; }
    .arrow { stroke: var(--accent-primary, #6366f1); stroke-width: 2; fill: none; marker-end: url(#arr2); }
  </style>

  <defs>
    <marker id="arr2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="var(--accent-primary, #6366f1)"/>
    </marker>
  </defs>

  <!-- Layer 1: Commands (top) -->
  <rect x="10" y="10" width="500" height="55" rx="8" class="layer"/>
  <text x="35" y="42" class="layer-label">COMMANDS</text>
  <rect x="100" y="22" width="85" height="32" rx="6" class="box"/>
  <text x="142" y="43" class="label">/feature</text>
  <rect x="195" y="22" width="85" height="32" rx="6" class="box"/>
  <text x="237" y="43" class="label">/review</text>
  <rect x="290" y="22" width="85" height="32" rx="6" class="box"/>
  <text x="332" y="43" class="label">/test</text>
  <rect x="385" y="22" width="85" height="32" rx="6" class="box"/>
  <text x="427" y="43" class="label">/deploy</text>

  <!-- Arrows down -->
  <path d="M 260 70 L 260 85" class="arrow"/>

  <!-- Layer 2: Agents -->
  <rect x="10" y="90" width="500" height="60" rx="8" class="layer"/>
  <text x="35" y="125" class="layer-label">AGENTS</text>
  <rect x="100" y="102" width="95" height="36" rx="6" class="box"/>
  <text x="147" y="117" class="label">PM Agent</text>
  <text x="147" y="130" class="sublabel">Specs</text>
  <rect x="205" y="102" width="95" height="36" rx="6" class="box"/>
  <text x="252" y="117" class="label">Frontend</text>
  <text x="252" y="130" class="sublabel">Code</text>
  <rect x="310" y="102" width="95" height="36" rx="6" class="box"/>
  <text x="357" y="117" class="label">Reviewer</text>
  <text x="357" y="130" class="sublabel">Quality</text>
  <rect x="415" y="102" width="85" height="36" rx="6" class="box"/>
  <text x="457" y="117" class="label">Security</text>
  <text x="457" y="130" class="sublabel">Scan</text>

  <!-- Arrows down -->
  <path d="M 260 155 L 260 170" class="arrow"/>

  <!-- Layer 3: Skills -->
  <rect x="10" y="175" width="500" height="45" rx="8" class="layer"/>
  <text x="35" y="202" class="layer-label">SKILLS</text>
  <rect x="100" y="185" width="80" height="26" rx="4" class="box"/>
  <text x="140" y="202" class="sublabel">write-tests</text>
  <rect x="190" y="185" width="80" height="26" rx="4" class="box"/>
  <text x="230" y="202" class="sublabel">check-a11y</text>
  <rect x="280" y="185" width="70" height="26" rx="4" class="box"/>
  <text x="315" y="202" class="sublabel">lint</text>
  <rect x="360" y="185" width="70" height="26" rx="4" class="box"/>
  <text x="395" y="202" class="sublabel">build</text>
  <rect x="440" y="185" width="60" height="26" rx="4" class="box"/>
  <text x="470" y="202" class="sublabel">git</text>

  <!-- Arrows down -->
  <path d="M 260 225 L 260 240" class="arrow"/>

  <!-- Layer 4: MCP -->
  <rect x="10" y="245" width="500" height="40" rx="8" class="layer"/>
  <text x="35" y="270" class="layer-label">MCP</text>
  <rect x="100" y="253" width="80" height="25" rx="4" class="box"/>
  <text x="140" y="270" class="sublabel">Context7</text>
  <rect x="190" y="253" width="80" height="25" rx="4" class="box"/>
  <text x="230" y="270" class="sublabel">GitHub</text>
  <rect x="280" y="253" width="80" height="25" rx="4" class="box"/>
  <text x="320" y="270" class="sublabel">Exa</text>
  <rect x="370" y="253" width="80" height="25" rx="4" class="box"/>
  <text x="410" y="270" class="sublabel">Playwright</text>
</svg>`,
        },
        {
          type: 'concept',
          title: {
            nl: 'Commands — Je entry points',
            en: 'Commands — Your entry points',
          },
          content: {
            nl: 'Slash commands starten workflows. Typ /feature en de hele pipeline begint: PM analyseert, Designer plant, Engineer bouwt, Reviewers checken.',
            en: 'Slash commands start workflows. Type /feature and the entire pipeline starts: PM analyzes, Designer plans, Engineer builds, Reviewers check.',
          },
          visual: 'diagram',
          svg: `<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg">
  <style>
    .cmd { fill: var(--accent-primary, #6366f1); opacity: 0.2; stroke: var(--accent-primary, #6366f1); stroke-width: 2; }
    .cmd-text { fill: var(--accent-primary, #6366f1); font-family: monospace; font-size: 16px; font-weight: bold; }
    .result { fill: var(--bg-secondary, #1e293b); stroke: var(--text-secondary, #94a3b8); stroke-width: 1.5; }
    .arrow { stroke: var(--text-secondary, #94a3b8); stroke-width: 2; fill: none; marker-end: url(#arr3); }
    .label { fill: var(--text-muted, #64748b); font-family: sans-serif; font-size: 10px; text-anchor: middle; }
  </style>
  <defs>
    <marker id="arr3" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="var(--text-secondary, #94a3b8)"/>
    </marker>
  </defs>

  <rect x="20" y="50" width="120" height="50" rx="8" class="cmd"/>
  <text x="80" y="82" class="cmd-text" text-anchor="middle">/feature</text>

  <path d="M 145 75 L 180 75" class="arrow"/>

  <rect x="185" y="55" width="70" height="40" rx="6" class="result"/>
  <text x="220" y="80" class="label">PM</text>

  <path d="M 260 75 L 280 75" class="arrow"/>

  <rect x="285" y="55" width="70" height="40" rx="6" class="result"/>
  <text x="320" y="80" class="label">Design</text>

  <path d="M 360 75 L 380 75" class="arrow"/>

  <rect x="385" y="55" width="70" height="40" rx="6" class="result"/>
  <text x="420" y="80" class="label">Build</text>

  <path d="M 420 100 L 420 125 L 320 125 L 320 115" class="arrow"/>

  <rect x="285" y="105" width="70" height="35" rx="6" class="result"/>
  <text x="320" y="127" class="label">Review</text>
</svg>`,
        },
        {
          type: 'concept',
          title: {
            nl: 'Skills — Herbruikbare building blocks',
            en: 'Skills — Reusable building blocks',
          },
          content: {
            nl: 'Skills zijn kleine, focused taken die agents kunnen aanroepen. Denk aan "write-tests", "check-accessibility", "generate-docs". Je definieert ze één keer, gebruikt ze overal.',
            en: 'Skills are small, focused tasks that agents can call. Think "write-tests", "check-accessibility", "generate-docs". Define once, use everywhere.',
          },
          visual: 'diagram',
          svg: `<svg viewBox="0 0 480 180" xmlns="http://www.w3.org/2000/svg">
  <style>
    .skill-box { fill: var(--bg-secondary, #1e293b); stroke: var(--accent-primary, #6366f1); stroke-width: 2; }
    .skill-label { fill: var(--text-primary, #f8fafc); font-family: monospace; font-size: 11px; text-anchor: middle; }
    .agent-box { fill: var(--accent-primary, #6366f1); opacity: 0.2; stroke: var(--accent-primary, #6366f1); stroke-width: 2; }
    .agent-label { fill: var(--text-primary, #f8fafc); font-family: sans-serif; font-size: 12px; text-anchor: middle; font-weight: 600; }
    .connector { stroke: var(--accent-primary, #6366f1); stroke-width: 1.5; stroke-dasharray: 4,2; }
  </style>

  <!-- Skills pool -->
  <rect x="20" y="15" width="100" height="35" rx="6" class="skill-box"/>
  <text x="70" y="38" class="skill-label">write-tests</text>

  <rect x="130" y="15" width="100" height="35" rx="6" class="skill-box"/>
  <text x="180" y="38" class="skill-label">check-a11y</text>

  <rect x="240" y="15" width="100" height="35" rx="6" class="skill-box"/>
  <text x="290" y="38" class="skill-label">lint-code</text>

  <rect x="350" y="15" width="100" height="35" rx="6" class="skill-box"/>
  <text x="400" y="38" class="skill-label">run-build</text>

  <!-- Connectors -->
  <line x1="70" y1="55" x2="130" y2="110" class="connector"/>
  <line x1="180" y1="55" x2="130" y2="110" class="connector"/>
  <line x1="180" y1="55" x2="320" y2="110" class="connector"/>
  <line x1="290" y1="55" x2="320" y2="110" class="connector"/>
  <line x1="400" y1="55" x2="320" y2="110" class="connector"/>

  <!-- Agents using skills -->
  <rect x="55" y="110" width="150" height="55" rx="8" class="agent-box"/>
  <text x="130" y="143" class="agent-label">Frontend Agent</text>

  <rect x="245" y="110" width="150" height="55" rx="8" class="agent-box"/>
  <text x="320" y="143" class="agent-label">Reviewer Agent</text>
</svg>`,
        },
        {
          type: 'concept',
          title: {
            nl: 'Agents — Gespecialiseerde rollen',
            en: 'Agents — Specialized roles',
          },
          content: {
            nl: 'Elke agent heeft een specifieke expertise en instructies. Ze focussen op één ding en doen dat goed. Samen vormen ze je AI team.',
            en: 'Each agent has specific expertise and instructions. They focus on one thing and do it well. Together they form your AI team.',
          },
          visual: 'diagram',
          svg: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">
  <style>
    .agent { fill: var(--bg-secondary, #1e293b); stroke: var(--accent-primary, #6366f1); stroke-width: 2; rx: 10; }
    .agent-label { fill: var(--text-primary, #f8fafc); font-family: sans-serif; font-size: 11px; text-anchor: middle; font-weight: 600; }
    .agent-desc { fill: var(--text-muted, #64748b); font-family: sans-serif; font-size: 9px; text-anchor: middle; }
    .agent-icon { font-size: 20px; }
  </style>

  <rect x="20" y="30" width="105" height="120" class="agent"/>
  <text x="72" y="65" class="agent-icon" text-anchor="middle">📋</text>
  <text x="72" y="95" class="agent-label">PM</text>
  <text x="72" y="110" class="agent-desc">Requirements</text>
  <text x="72" y="122" class="agent-desc">& specs</text>

  <rect x="140" y="30" width="105" height="120" class="agent"/>
  <text x="192" y="65" class="agent-icon" text-anchor="middle">👨‍💻</text>
  <text x="192" y="95" class="agent-label">Frontend</text>
  <text x="192" y="110" class="agent-desc">React &</text>
  <text x="192" y="122" class="agent-desc">TypeScript</text>

  <rect x="260" y="30" width="105" height="120" class="agent"/>
  <text x="312" y="65" class="agent-icon" text-anchor="middle">🔍</text>
  <text x="312" y="95" class="agent-label">Reviewer</text>
  <text x="312" y="110" class="agent-desc">Quality &</text>
  <text x="312" y="122" class="agent-desc">patterns</text>

  <rect x="380" y="30" width="105" height="120" class="agent"/>
  <text x="432" y="65" class="agent-icon" text-anchor="middle">🔒</text>
  <text x="432" y="95" class="agent-label">Security</text>
  <text x="432" y="110" class="agent-desc">XSS &</text>
  <text x="432" y="122" class="agent-desc">injection</text>
</svg>`,
        },
        {
          type: 'concept',
          title: {
            nl: 'MCP Servers — Externe tools',
            en: 'MCP Servers — External tools',
          },
          content: {
            nl: 'Model Context Protocol geeft Claude toegang tot externe databronnen. Geen hallucinaties over library APIs meer — Claude leest de echte docs.',
            en: 'Model Context Protocol gives Claude access to external data sources. No more hallucinations about library APIs — Claude reads the real docs.',
          },
          visual: 'diagram',
          svg: `<svg viewBox="0 0 450 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .center-box { fill: var(--accent-primary, #6366f1); opacity: 0.2; stroke: var(--accent-primary, #6366f1); stroke-width: 2; }
    .tool-box { fill: var(--bg-secondary, #1e293b); stroke: var(--text-secondary, #94a3b8); stroke-width: 1.5; }
    .label { fill: var(--text-primary, #f8fafc); font-family: sans-serif; font-size: 12px; text-anchor: middle; font-weight: 600; }
    .sublabel { fill: var(--text-muted, #64748b); font-family: sans-serif; font-size: 9px; text-anchor: middle; }
    .connector { stroke: var(--accent-primary, #6366f1); stroke-width: 2; stroke-dasharray: 4,2; }
  </style>

  <!-- Center: Claude -->
  <circle cx="225" cy="100" r="45" class="center-box"/>
  <text x="225" y="95" class="label">Claude</text>
  <text x="225" y="110" class="sublabel">Code</text>

  <!-- Connectors -->
  <line x1="180" y1="75" x2="100" y2="45" class="connector"/>
  <line x1="270" y1="75" x2="350" y2="45" class="connector"/>
  <line x1="180" y1="125" x2="100" y2="155" class="connector"/>
  <line x1="270" y1="125" x2="350" y2="155" class="connector"/>

  <!-- Tool boxes -->
  <rect x="25" y="20" width="85" height="45" rx="6" class="tool-box"/>
  <text x="67" y="40" class="label">Context7</text>
  <text x="67" y="54" class="sublabel">Live docs</text>

  <rect x="340" y="20" width="85" height="45" rx="6" class="tool-box"/>
  <text x="382" y="40" class="label">Exa</text>
  <text x="382" y="54" class="sublabel">Web search</text>

  <rect x="25" y="135" width="85" height="45" rx="6" class="tool-box"/>
  <text x="67" y="155" class="label">GitHub</text>
  <text x="67" y="169" class="sublabel">Issues & PRs</text>

  <rect x="340" y="135" width="85" height="45" rx="6" class="tool-box"/>
  <text x="382" y="155" class="label">Playwright</text>
  <text x="382" y="169" class="sublabel">E2E testing</text>
</svg>`,
        },
      ],
    },
    // ===========================================
    // CHAPTER 4: MY WORKFLOW ON FORMBUILDER
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
            nl: 'Hoe ik het gebruik bij de Formbuilder',
            en: 'How I use it on the Formbuilder',
          },
        },
        {
          type: 'concept',
          title: {
            nl: 'Over de Formbuilder',
            en: 'About the Formbuilder',
          },
          content: {
            nl: 'Een npm package voor Logius met Admin Panel en FormWizard componenten. Bouwt op het Rijksoverheid design system — styling en WCAG zijn al ingebouwd.',
            en: 'An npm package for Logius with Admin Panel and FormWizard components. Built on the Dutch government design system — styling and WCAG are built-in.',
          },
          visual: 'gif',
          giphyId: 'l0HlNQ03J5JxX6lva', // building/construction gif
        },
        {
          type: 'concept',
          title: {
            nl: 'Mijn /feature Pipeline',
            en: 'My /feature Pipeline',
          },
          content: {
            nl: 'Ik typ /feature "date picker voor form wizard" en de agents nemen het over.',
            en: 'I type /feature "date picker for form wizard" and the agents take over.',
          },
          visual: 'diagram',
          svg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
  <style>
    .phase-bg { fill: var(--accent-primary, #6366f1); opacity: 0.08; }
    .phase-label { fill: var(--text-secondary, #94a3b8); font-family: sans-serif; font-size: 10px; font-weight: 600; }
    .step-box { fill: var(--bg-secondary, #1e293b); stroke: var(--accent-primary, #6366f1); stroke-width: 2; }
    .step-active { fill: var(--accent-primary, #6366f1); opacity: 0.25; }
    .step-label { fill: var(--text-primary, #f8fafc); font-family: sans-serif; font-size: 11px; text-anchor: middle; font-weight: 600; }
    .step-desc { fill: var(--text-muted, #64748b); font-family: sans-serif; font-size: 9px; text-anchor: middle; }
    .arrow { stroke: var(--accent-primary, #6366f1); stroke-width: 2; fill: none; marker-end: url(#flow-arrow); }
    .num { fill: var(--accent-primary, #6366f1); font-family: sans-serif; font-size: 14px; font-weight: bold; }
  </style>

  <defs>
    <marker id="flow-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-primary, #6366f1)"/>
    </marker>
  </defs>

  <!-- Phase 1: Planning -->
  <rect x="15" y="15" width="280" height="70" rx="8" class="phase-bg"/>
  <text x="30" y="32" class="phase-label">PLANNING</text>

  <text x="50" y="62" class="num">1</text>
  <rect x="70" y="40" width="90" height="35" rx="6" class="step-box"/>
  <rect x="70" y="40" width="90" height="35" rx="6" class="step-active"/>
  <text x="115" y="55" class="step-label">/feature</text>
  <text x="115" y="67" class="step-desc">Mijn input</text>

  <path d="M 165 57 L 185 57" class="arrow"/>

  <text x="200" y="62" class="num">2</text>
  <rect x="220" y="40" width="90" height="35" rx="6" class="step-box"/>
  <text x="265" y="55" class="step-label">PM Agent</text>
  <text x="265" y="67" class="step-desc">Specs schrijven</text>

  <!-- Phase 2: Building -->
  <rect x="305" y="15" width="280" height="70" rx="8" class="phase-bg"/>
  <text x="320" y="32" class="phase-label">BUILDING</text>

  <path d="M 315 57 L 335 57" class="arrow"/>

  <text x="350" y="62" class="num">3</text>
  <rect x="370" y="40" width="90" height="35" rx="6" class="step-box"/>
  <text x="415" y="55" class="step-label">Frontend</text>
  <text x="415" y="67" class="step-desc">Code + tests</text>

  <path d="M 465 57 L 485 57" class="arrow"/>

  <text x="500" y="62" class="num">4</text>
  <rect x="520" y="40" width="65" height="35" rx="6" class="step-box"/>
  <text x="552" y="55" class="step-label">Skills</text>
  <text x="552" y="67" class="step-desc">a11y, lint</text>

  <!-- Arrow down -->
  <path d="M 552 80 L 552 105" class="arrow"/>

  <!-- Phase 3: Review -->
  <rect x="15" y="100" width="570" height="70" rx="8" class="phase-bg"/>
  <text x="30" y="117" class="phase-label">REVIEW (parallel)</text>

  <text x="50" y="147" class="num">5</text>
  <rect x="70" y="125" width="120" height="35" rx="6" class="step-box"/>
  <text x="130" y="140" class="step-label">Code Reviewer</text>
  <text x="130" y="152" class="step-desc">Quality & patterns</text>

  <rect x="210" y="125" width="120" height="35" rx="6" class="step-box"/>
  <text x="270" y="140" class="step-label">Security Agent</text>
  <text x="270" y="152" class="step-desc">XSS, injection</text>

  <rect x="350" y="125" width="120" height="35" rx="6" class="step-box"/>
  <text x="410" y="140" class="step-label">Perf Agent</text>
  <text x="410" y="152" class="step-desc">Bundle, re-renders</text>

  <!-- Done -->
  <path d="M 490 142 L 520 142" class="arrow"/>
  <rect x="530" y="125" width="50" height="35" rx="6" fill="var(--accent-primary, #6366f1)" opacity="0.3" stroke="var(--accent-primary, #6366f1)" stroke-width="2"/>
  <text x="555" y="147" class="step-label">Done</text>

  <!-- Phase 4: Result -->
  <rect x="15" y="185" width="570" height="75" rx="8" class="phase-bg"/>
  <text x="30" y="202" class="phase-label">RESULT</text>

  <text x="50" y="235" class="num">6</text>
  <rect x="70" y="210" width="150" height="40" rx="6" class="step-box"/>
  <text x="145" y="228" class="step-label">Component code</text>
  <text x="145" y="242" class="step-desc">DatePicker.tsx</text>

  <rect x="240" y="210" width="120" height="40" rx="6" class="step-box"/>
  <text x="300" y="228" class="step-label">Tests</text>
  <text x="300" y="242" class="step-desc">100% coverage</text>

  <rect x="380" y="210" width="120" height="40" rx="6" class="step-box"/>
  <text x="440" y="228" class="step-label">PR Ready</text>
  <text x="440" y="242" class="step-desc">Reviewed & approved</text>
</svg>`,
        },
        {
          type: 'concept',
          title: {
            nl: 'Live Demo',
            en: 'Live Demo',
          },
          content: {
            nl: 'Laat ik even laten zien hoe ik een feature start...',
            en: 'Let me show you how I start a feature...',
          },
          visual: 'video',
          // videoUrl will be added when you have the recording
        },
        {
          type: 'stats',
          title: {
            nl: 'De impact',
            en: 'The impact',
          },
          content: {
            nl: 'Wat dit oplevert:',
            en: 'What this delivers:',
          },
          stats: [
            {
              number: '~60%',
              label: {
                nl: 'minder tijd aan boilerplate',
                en: 'less time on boilerplate',
              },
            },
            {
              number: '4→1',
              label: {
                nl: 'review cycles door vroege checks',
                en: 'review cycles through early checks',
              },
            },
            {
              number: '100%',
              label: {
                nl: 'test coverage op nieuwe code',
                en: 'test coverage on new code',
              },
            },
          ],
        },
      ],
    },
    // ===========================================
    // CHAPTER 5: GETTING STARTED
    // ===========================================
    {
      id: 'getting-started',
      title: { nl: 'Aan de slag', en: 'Getting Started' },
      slides: [
        {
          type: 'title',
          title: {
            nl: 'Aan de slag',
            en: 'Getting Started',
          },
          content: {
            nl: 'Hoe je zelf kunt beginnen',
            en: 'How to get started yourself',
          },
        },
        {
          type: 'process',
          title: {
            nl: 'Start simpel',
            en: 'Start simple',
          },
          steps: [
            {
              title: { nl: 'Installeer Claude Code', en: 'Install Claude Code' },
              content: {
                nl: 'npm i -g @anthropic-ai/claude-code',
                en: 'npm i -g @anthropic-ai/claude-code',
              },
            },
            {
              title: { nl: 'Maak CLAUDE.md', en: 'Create CLAUDE.md' },
              content: {
                nl: 'Beschrijf je project, tech stack, conventies',
                en: 'Describe your project, tech stack, conventions',
              },
            },
            {
              title: { nl: 'Voeg 1 MCP server toe', en: 'Add 1 MCP server' },
              content: {
                nl: 'Start met Context7 voor documentatie',
                en: 'Start with Context7 for documentation',
              },
            },
            {
              title: { nl: 'Maak je eerste agent', en: 'Create your first agent' },
              content: {
                nl: 'Begin met een code reviewer',
                en: 'Start with a code reviewer',
              },
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
            nl: 'En nog iets...',
            en: 'And one more thing...',
          },
        },
        {
          type: 'concept',
          title: {
            nl: 'Oh, en deze presentatie?',
            en: 'Oh, and this presentation?',
          },
          content: {
            nl: 'Is gemaakt met Claude Code. Ik heb een presentation system gebouwd waar ik met agents slides genereer. Dezelfde workflow die ik net liet zien.',
            en: 'Was made with Claude Code. I built a presentation system where I generate slides with agents. The same workflow I just showed you.',
          },
          visual: 'gif',
          giphyId: 'xT0xeJpnrWC4XWblEk', // mind blown gif
        },
        {
          type: 'summary',
          title: {
            nl: 'Takeaways',
            en: 'Takeaways',
          },
          content: {
            nl: 'De belangrijkste punten:',
            en: 'The key points:',
          },
          points: [
            {
              nl: 'Claude Code is een uitbreidbaar platform met agents, skills, commands en MCP',
              en: 'Claude Code is an extensible platform with agents, skills, commands and MCP',
            },
            {
              nl: 'Commands starten workflows, Skills zijn building blocks, Agents zijn specialisten',
              en: 'Commands start workflows, Skills are building blocks, Agents are specialists',
            },
            {
              nl: 'Begin klein — 1 agent, 1 MCP server — en bouw uit wat werkt',
              en: 'Start small — 1 agent, 1 MCP server — and expand what works',
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
            nl: 'Bedankt! Ik hoor graag jullie ervaringen en ideeën.',
            en: 'Thanks! I would love to hear your experiences and ideas.',
          },
          visual: 'gif',
          giphyId: 'l4FGuhL4U2WyjdkaY', // questions/thinking gif
        },
      ],
    },
  ],
};
