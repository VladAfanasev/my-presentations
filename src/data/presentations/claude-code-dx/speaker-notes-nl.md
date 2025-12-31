# Full-Cycle AI Development met Claude Code — Sprekernotities

**Duur**: 15-20 minuten
**Doelgroep**: Gemengd (developers, marketing, HR, office management)
**Kernboodschap**: Transformeer je DX met AI agents — ga verder dan chat naar autonome workflows

---

## Hoofdstuk 1: Introductie (2-3 min)

### Slide 1: Titel Slide

**Duur**: 30 seconden

**Opening**:
"Hoi allemaal! Vandaag wil ik jullie iets laten zien dat mijn manier van werken aan het Formbuilder project volledig heeft veranderd. Jullie kennen allemaal Windsurf en de chat functie — maar ik wil jullie een stap verder meenemen."

**Overgang**: "Laat ik beginnen met een vraag..."

---

### Slide 2: Jullie kennen Windsurf chat...

**Duur**: 45 seconden

**Kernpunt**: Erken hun huidige ervaring, pivot dan naar wat mogelijk is.

**Spreekpunten**:
1. "Je hebt waarschijnlijk de chat gebruikt om vragen te stellen, snippets te genereren, code uit te leggen"
2. "Dat is prima — maar het is alsof je een enkele assistent hebt die alles vergeet tussen gesprekken"
3. "Wat als je een heel team van specialisten had, elk met hun eigen expertise?"

**Overgang**: "Laat me het verschil tonen..."

---

### Slide 3: Chat vs. Agents

**Duur**: 1 minuut

**Kernpunt**: Maak de vergelijking tastbaar.

**Spreekpunten**:
1. **Windsurf Chat**: "Vraag erin, antwoord eruit. Je geeft elke keer handmatig context. Eén taak tegelijk."
2. **Claude Code Agents**: "Autonome workflows. Een Product Manager agent die je requirements kent. Een Frontend Engineer die je codebase patterns kent. Ze onthouden, ze specialiseren, ze werken samen."
3. "En de magie? CLAUDE.md — een bestand dat Claude permanente project context geeft."

**Engagement**: "Wie hier heeft wel eens gewenst dat hun AI je project conventies onthield?"

---

## Hoofdstuk 2: Aan de slag (3-4 min)

### Slide 4: Titel - Aan de slag

**Duur**: 15 seconden

**Overgang**: "Laat me tonen hoe simpel het is om dit op te zetten."

---

### Slide 5: Installatie

**Duur**: 1 minuut

**Kernpunt**: Het is gewoon npm — dat kennen ze.

**Spreekpunten**:
1. "Eén npm install. Dat is alles."
2. "Run `claude` in je project folder, of gebruik de Windsurf/VSCode extension"
3. "Voor onze Java devs: zie het als een Maven plugin toevoegen die je AI superpowers geeft"

**Demo moment**: Als je live doet, toon het installatie commando.

---

### Slide 6: De .claude/ folder

**Duur**: 1.5 minuten

**Kernpunt**: Hier leeft de magie.

**Spreekpunten**:
1. **agents/**: "Je AI teamleden. Elk bestand definieert een specialist — hun rol, hun tools, hun instructies."
2. **commands/**: "Custom slash commands. Zoals `/feature-pipeline` die meerdere agents aan elkaar koppelt."
3. **skills/**: "Herbruikbare workflows die automatisch getriggerd kunnen worden."
4. **CLAUDE.md**: "Het brein. Project regels, tech stack, conventies. Claude leest dit bij elke sessie."

**Analogie voor non-devs**: "Zie het als een onboarding document — maar voor je AI. Het vertelt Claude: 'Zo doen wij dingen hier.'"

---

## Hoofdstuk 3: MCP Servers (3-4 min)

### Slide 7: Titel - MCP Servers

**Duur**: 15 seconden

**Overgang**: "Nu, Claude is slim — maar weet niet alles. Daar komen MCP servers om de hoek."

---

### Slide 8: Wat zijn MCP Servers?

**Duur**: 1.5 minuten

**Kernpunt**: Externe superkrachten voor Claude.

**Spreekpunten**:
1. "Model Context Protocol — een standaard manier om Claude te verbinden met externe tools en data."
2. "Zonder MCP: Claude kan een API hallucineren die niet bestaat, of verouderde React syntax geven."
3. "Met MCP: Claude haalt echte, actuele documentatie op voordat het antwoordt."

**Loop door het diagram**:
- "Claude praat met de MCP protocol laag"
- "MCP routeert verzoeken naar gespecialiseerde servers"
- "Elke server heeft een specifieke capability: docs, web search, GitHub..."

---

### Slide 9: Mijn MCP Setup

**Duur**: 1.5 minuten

**Kernpunt**: Praktische voorbeelden die ze kunnen kopiëren.

**Spreekpunten**:
1. **Context7**: "Dit is mijn favoriet. Als ik Claude vraag over React Hook Form of Zod, haalt het de echte actuele docs op. Geen 'die method was 2 versies geleden deprecated' meer."
2. **Exa**: "AI-powered web search. Geweldig voor code voorbeelden vinden op GitHub of de laatste best practices."
3. **GitHub**: "Issues lezen, PRs browsen, begrijpen waar mijn team aan werkt."
4. **Playwright**: "Browser automation. Claude kan de UI die het bouwt echt testen."

**Voor non-devs**: "Stel je voor dat je je AI toegang geeft tot het internet, documentatie, je project management tools — allemaal tegelijk."

---

## Hoofdstuk 4: Mijn Workflow (5-6 min) — Hoofdgebeurtenis

### Slide 10: Titel - Mijn Workflow

**Duur**: 15 seconden

**Overgang**: "Nu gaan we zien hoe dit allemaal samenkomt in een echt project."

---

### Slide 11: De Formbuilder

**Duur**: 45 seconden

**Kernpunt**: Zet context voor de demo.

**Spreekpunten**:
1. "De Formbuilder is een npm package die ik bouw voor Logius"
2. "Twee hoofd componenten: Admin Panel voor formulieren configureren, FormWizard voor ze tonen"
3. "Gebouwd op het Rijksoverheid design system — dus styling en WCAG accessibility zijn al geregeld"
4. "Elk team bij Logius kan dit gebruiken zonder zorgen over design consistentie"

---

### Slide 12: Mijn AI Team

**Duur**: 1.5 minuten

**Kernpunt**: Dit is het kernoncept. Neem hier de tijd.

**Spreekpunten**:
Loop stap voor stap door het diagram:

1. **Fase 1 - Planning**: "Product Manager valideert de feature request. Stelt verduidelijkende vragen. Schrijft requirements."
2. **Fase 2 - Design**: "UX/UI Designer maakt component structuur, definieert props, plant accessibility."
3. **Fase 3 - Build**: "Frontend Engineer implementeert de echte code, volgens de design spec."
4. **Fase 4 - Review**: "Drie reviewers draaien parallel: security, performance, code kwaliteit."

"Elke agent heeft isolated context — ze vervuilen elkaar niet. En ze produceren artifacts: documenten, specs, echte code bestanden."

**Engagement**: "Stel je voor dat code review automatisch gebeurt voordat je zelfs een PR opent."

---

### Slide 13: De Flow

**Duur**: 1 minuut

**Kernpunt**: Maak het concreet met een proces.

**Spreekpunten**:
1. "Ik begin met beschrijven wat ik wil in natuurlijke taal. 'Voeg conditional field visibility toe aan het formulier.'"
2. "Product Manager vraagt: 'Welke velden moeten visibility triggeren? Wat met edge cases?'"
3. "Designer maakt: component structuur, state management aanpak, accessibility requirements"
4. "Engineer bouwt: echte React componenten met tests"
5. "Reviewers checken: XSS vulnerabilities, bundle size, code patterns"

---

### Slide 14: Agent Voorbeeld

**Duur**: 1 minuut

**Kernpunt**: Demystificeer het agent bestand.

**Spreekpunten**:
1. "Een agent is gewoon een markdown bestand met een header en instructies"
2. **Header**: name, description, welke tools ze kunnen gebruiken (Read, Write, Bash...)
3. **Body**: Natuurlijke taal instructies. Wie ze zijn, hoe ze werken.
4. "Dit is een echt bestand uit mijn project — je kunt later in mijn .claude/ folder kijken"

**Voor Java devs**: "Zie het als een Spring configuratie, maar voor AI gedrag."

---

## Hoofdstuk 5: Tips & Tricks (2-3 min)

### Slide 15: Titel - Tips & Tricks

**Duur**: 15 seconden

**Overgang**: "Laat me delen wat ik op de harde manier heb geleerd."

---

### Slide 16: Best Practices

**Duur**: 1 minuut

**Kernpunt**: Bruikbaar advies.

**Spreekpunten** (rapid fire):
1. **CLAUDE.md**: "Dit is je belangrijkste bestand. Besteed er tijd aan. Project regels, naming conventions, tech stack."
2. **Isolated context**: "Subagents onthouden je hoofdgesprek niet. Dat is een feature, geen bug."
3. **/rewind**: "Fout gemaakt? Rol terug naar een checkpoint. Zoals git, maar voor je AI sessie."
4. **"think harder"**: "Magische woorden. Triggert dieper redeneren voor architectuur beslissingen."
5. **Chain, don't bloat**: "Meerdere kleine agents > één massive prompt."

---

### Slide 17: Leren & Resources

**Duur**: 1 minuut

**Kernpunt**: Geef ze volgende stappen.

**Spreekpunten**:
1. **YouTube**: "IndyDevDan en AI Jason hebben geweldige praktische tutorials"
2. **Medium/Dev.to**: "Zoek op 'Claude Code agents' — de community is actief"
3. **GitHub**: "VoltAgent heeft een awesome collectie van agent templates"
4. **Official docs**: "docs.anthropic.com heeft alles"
5. "Maar eerlijk? Gewoon experimenteren. Installeer het, voeg één MCP server toe, maak één agent."

---

## Hoofdstuk 6: Afsluiting (1-2 min)

### Slide 18: Titel - Afsluiting

**Duur**: 15 seconden

**Bouw spanning op**: "Voordat we afsluiten, heb ik nog één ding om te laten zien..."

---

### Slide 19: Oh, en deze presentatie?

**Duur**: 45 seconden

**Kernpunt**: De meta-onthulling.

**Spreekpunten**:
1. "Dus... deze presentatie die jullie kijken?"
2. "Ik heb een presentatie systeem gebouwd met React. En ik genereer slides met... Claude Code agents."
3. "Dezelfde workflow die ik net liet zien — discovery, design, content generation, visual creation."
4. "It's agents all the way down."

**Laat het landen**: Geef ze een moment om de meta-heid te waarderen.

---

### Slide 20: Start Vandaag

**Duur**: 45 seconden

**Kernpunt**: Duidelijke call to action.

**Spreekpunten** (ga door de lijst):
1. "Installeer Claude Code — letterlijk één npm commando"
2. "Maak een CLAUDE.md in je project — begin simpel, voeg toe over tijd"
3. "Voeg één MCP server toe — ik raad Context7 als eerste aan"
4. "Maak je eerste custom agent — misschien een code reviewer voor jouw stack"
5. "En deel wat je leert! Kom naar me toe, deel in Slack, laat je team zien."

---

### Slide 21: Vragen?

**Duur**: Resterende tijd

**Afsluiting**:
"Bedankt voor jullie aandacht! Ik duik graag dieper in elk onderdeel. En als je mijn echte .claude/ folder of de Formbuilder agents wilt zien, kom me na afloop vinden."

**Bereid voor op veelgestelde vragen**:
- "Hoeveel kost het?" — API gebruik, ongeveer zoals ChatGPT Pro
- "Kan ik dit voor Java gebruiken?" — Absoluut, agents zijn language-agnostic
- "Wordt onze code naar Anthropic gestuurd?" — Ja, maar met enterprise controls beschikbaar
- "Wat als de agent fouten maakt?" — Checkpoints, code review agents, menselijk toezicht

---

## Algemene Tips voor Presenteren

1. **Energie**: Begin sterk met de "magical DX" hook
2. **Tempo**: Het workflow hoofdstuk is de main event — vertraag daar
3. **Engagement**: Stel retorische vragen, maak oogcontact bij het vragen wie wat gebruikt
4. **Demo flexibiliteit**: Als tijd het toelaat, toon live terminal. Zo niet, de slides vertellen het verhaal.
5. **Meta moment**: Laat de presentatie-onthulling landen — pauzeer voor effect
6. **Inclusiviteit**: Leg technische concepten uit voor non-devs, maar over-explain niet voor devs

---

*Totaal geschatte tijd: 18 minuten + Q&A*
