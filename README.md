# TAC: Thesis Advisory Companion
## Companheiro de Desenvolvimento de Tese Acadêmica

🇧🇷 **[Instruções em Português](#português)** | 🇺🇸 **[English Instructions](#english)**

---

<a name="português"></a>
# 🇧🇷 Português

## O que é TAC?

TAC (Thesis Advisory Companion) é um **motor de momentum** para escritores de tese de MBA. Ele quebra a paralisia fornecendo estrutura quando você está travado, valida tópicos antes de comprometer meses de trabalho, e atua como um companheiro ao longo de toda a jornada da tese — desde a confusão da página em branco até a defesa confiante.

Ao invés de ferramentas genéricas de IA ou fluxos de trabalho fragmentados que exigem 100 abas de navegador e 4 LLMs diferentes, TAC fornece uma experiência coesa e integrada em uma única janela com agentes especializados trabalhando juntos como um grupo de estudo amigável.

**Usuários Alvo:** Estudantes de MBA (particularmente da USP), falantes bilíngues Português/Inglês, retornando à academia após tempo afastado, precisando de estrutura e encorajamento.

---

## 🚀 Instalação Rápida

### Instalação em Um Comando (Recomendado)

**TAC instala BMAD automaticamente se necessário:**

```bash
git clone https://github.com/kcbuenaga/bmad.git
cd bmad/tac
./install-tac.sh
```

O instalador vai:
1. ✅ Verificar se BMAD está instalado (instala automaticamente se não)
2. ✅ Registrar o módulo TAC
3. ✅ Verificar que tudo está funcionando

**Tempo:** 2-3 minutos
**Pronto!** Você pode pular para "Verificar Instalação" abaixo.

---

### Instalação Manual (Alternativa)

Se preferir instalar manualmente ou já tiver BMAD:

**1. Clone o repositório BMAD (se ainda não tiver):**
```bash
git clone https://github.com/kcbuenaga/bmad.git
cd bmad
```

**2. Instale BMAD (se ainda não tiver):**
```bash
/install-bmad
```

**3. Verifique BMAD:**
```bash
bmad --version
```

**4. Instale TAC:**
```bash
cd tac
bmad install tac
```

### Verificar Instalação

Execute o painel de progresso para confirmar que tudo está funcionando:

```bash
cd ~/thesis-artifacts  # ou sua pasta de tese
/tac:progress-dashboard
```

Se funcionar, TAC está instalado corretamente! 🎉

---

### Configurar Acesso à Biblioteca (Opcional mas Recomendado)

Se você tem acesso ao Portal de Periódicos CAPES através da sua instituição:

```bash
/tac:patricia:library-integration-setup
```

Siga as instruções para configurar suas credenciais CAPES. Isso permite que TAC busque artigos de acesso restrito e textos completos.

---

## 📚 Início Rápido

### Jornada Recomendada da Tese

1. **Configurar acesso à biblioteca** → `/tac:patricia:library-integration-setup`
2. **Descobrir seu tópico** → `/tac:dr-carla:topic-discovery` (O FLUXO DE TRABALHO ESSENCIAL)
3. **Refinar questão de pesquisa** → `/tac:dr-carla:research-question`
4. **Construir revisão de literatura** → `/tac:patricia:literature-review`
5. **Estruturar sua tese** → `/tac:joao:thesis-structure`
6. **Planejar linha do tempo** → `/tac:dr-carla:timeline`
7. **Sessões de escrita** → `/tac:joao:writing-session`
8. **Preparar defesa** → `/tac:lara:defense-prep`

### Fluxos de Trabalho Úteis a Qualquer Momento

- **Verificar progresso** → `/tac:progress-dashboard`
- **Ver próximo passo** → `/tac:workflow-status`
- **Capturar ideia rápida** → `/tac:quick-idea-capture`
- **Exportar para Word/PDF** → `/tac:export`
- **Explicar fonte em inglês** → `/tac:patricia:source-explainer`
- **Formatar citação** → `/tac:patricia:citation-helper`

---

## 👥 Agentes Especializados

TAC inclui 4 agentes especializados trabalhando como um grupo de estudo amigável:

### 🎓 Dr. Carla — Orientadora Acadêmica
- Descoberta e validação de tópico
- Design de questões de pesquisa
- Planejamento de linha do tempo da tese
- Rastreamento de evolução do tópico (sidecar)

### 📚 Patricia — Bibliotecária de Pesquisa
- Busca e descoberta de fontes
- Integração com biblioteca (Portal CAPES)
- Explicador de fontes (EN → PT-BR)
- Ajudante de citações (formato ABNT)
- Histórico de busca de fontes (sidecar)

### ✍️ João — Coach de Escrita
- Estrutura e esboço da tese
- Sessões de escrita guiadas
- Superar bloqueios de escrita
- Padrões de escrita e progresso (sidecar)

### 🎯 Lara — Coach de Preparação para Defesa
- Preparação abrangente para defesa
- Prática de apresentação
- 5 sub-agentes de comitê simulado (crítico rigoroso mas justo)
- Rastreamento de desempenho de defesa (sidecar)

**Todos os agentes têm memória** (sidecar) para lembrar seu progresso e padrões ao longo do tempo.

---

## 🔧 Fluxos de Trabalho Disponíveis

### Core (4 fluxos de trabalho essenciais)
1. **topic-discovery-validation** — Ajuda a escolher tópico viável com validação de fontes
2. **literature-review-builder** — Buscar biblioteca, organizar fontes
3. **thesis-structure-outline** — Criar esboço e capítulos da tese
4. **research-question-designer** — Refinar tópico em questões de pesquisa

### Feature (6 fluxos de trabalho especializados)
5. **source-explainer** — Explicar fontes em inglês em português
6. **writing-session-guide** — Sessões de escrita estruturadas para superar bloqueios
7. **citation-helper** — Formatar citações no padrão brasileiro (ABNT)
8. **defense-preparation** — Praticar defesa e apresentação
9. **library-integration-setup** — Configurar acesso à biblioteca
10. **thesis-timeline-planner** — Definir prazos e marcos (planejamento reverso)

### Utility (4 utilitários compartilhados)
11. **workflow-status** — Verificar progresso da tese e próximo passo
12. **export** — Exportar trabalho para Word/PDF/Notion
13. **quick-idea-capture** — Capturar ideias rapidamente
14. **progress-dashboard** — Ver progresso geral com métricas visuais

---

## 🎯 Características Especiais

- **Suporte bilíngue** — Português e Inglês perfeitamente integrados
- **Integração CAPES** — Acesso a artigos de acesso restrito através do Portal de Periódicos CAPES
- **Memória persistente** — Agentes lembram seu progresso através de sidecars
- **Planejamento reverso** — Trabalhar de trás para frente do prazo de defesa para marcos semanais
- **Combate à procrastinação** — Transforma prazos distantes em ações semanais
- **Explicação de fontes** — Explicar artigos acadêmicos em inglês em português
- **Formato ABNT** — Citações formatadas no padrão brasileiro
- **Prática de defesa** — 5 membros de comitê simulado com feedback rigoroso
- **Rastreamento de progresso visual** — Veja seu progresso com métricas e barras de progresso

---

## 📖 Documentação

Para guias detalhados de usuário e documentação, consulte a pasta **[docs/](docs/)**:
- [Começando](docs/getting-started.md)
- [Referência de Agentes](docs/agents.md)
- [Referência de Fluxos de Trabalho](docs/workflows.md)
- [Exemplos](docs/examples.md)

---

## 🆘 Solução de Problemas

### Problema: "Módulo TAC não encontrado"
**Solução:** Execute `bmad install tac` novamente para reinstalar

### Problema: "Não é possível acessar o Portal CAPES"
**Solução:**
1. Verifique se você tem credenciais institucionais da USP
2. Execute `/tac:patricia:library-integration-setup` novamente
3. Teste a conexão durante a configuração

### Problema: "Pandoc não encontrado" ao exportar
**Solução:** Instale Pandoc:
- Windows: `choco install pandoc` ou baixe de pandoc.org
- Mac: `brew install pandoc`
- Linux: `sudo apt-get install pandoc`

### Problema: "Pasta thesis_artifacts não encontrada"
**Solução:** A pasta é criada automaticamente na primeira execução. Se estiver faltando, execute qualquer fluxo de trabalho TAC e será criada.

---

## 🤝 Suporte

Para problemas, perguntas ou feedback:
- Abra uma issue no repositório GitHub
- Consulte a documentação em docs/
- Entre em contato com o autor do módulo

---

## 📝 Status de Desenvolvimento

✅ **COMPLETO** — Pronto para uso!

- ✅ 4 agentes especializados (Dr. Carla, Patricia, João, Lara)
- ✅ 14 fluxos de trabalho (4 core + 6 feature + 4 utility)
- ✅ Integração com Portal CAPES via MCP
- ✅ Suporte bilíngue (PT-BR / EN)
- ✅ Sistema de memória com sidecars
- ✅ Exportar para Word/PDF/Notion

---

<a name="english"></a>
# 🇺🇸 English

## What is TAC?

TAC (Thesis Advisory Companion) is a **momentum engine** for MBA thesis writers. It breaks paralysis by providing structure when frozen, validates topics before committing months of work, and acts as a companion throughout the entire thesis journey — from blank page confusion to confident defense.

Unlike generic AI tools or fragmented workflows requiring 100 browser tabs and 4 different LLMs, TAC provides a cohesive, integrated one-window experience with specialized agents working together as a friendly study group.

**Target Users:** MBA students (particularly at USP), bilingual Portuguese/English speakers, returning to academia after time away, needing structure and encouragement.

---

## 🚀 Quick Installation

### One-Command Installation (Recommended)

**TAC automatically installs BMAD if needed:**

```bash
git clone https://github.com/kcbuenaga/bmad.git
cd bmad/tac
./install-tac.sh
```

The installer will:
1. ✅ Check if BMAD is installed (automatically installs if not)
2. ✅ Register the TAC module
3. ✅ Verify everything is working

**Time:** 2-3 minutes
**Done!** You can skip to "Verify Installation" below.

---

### Manual Installation (Alternative)

If you prefer to install manually or already have BMAD:

**1. Clone BMAD repository (if you don't have it):**
```bash
git clone https://github.com/kcbuenaga/bmad.git
cd bmad
```

**2. Install BMAD (if you don't have it):**
```bash
/install-bmad
```

**3. Verify BMAD:**
```bash
bmad --version
```

**4. Install TAC:**
```bash
cd tac
bmad install tac
```

### Verify Installation

Run the progress dashboard to confirm everything works:

```bash
cd ~/thesis-artifacts  # or your thesis folder
/tac:progress-dashboard
```

If it works, TAC is correctly installed! 🎉

---

### Configure Library Access (Optional but Recommended)

If you have access to CAPES Portal through your institution:

```bash
/tac:patricia:library-integration-setup
```

Follow instructions to configure your CAPES credentials. This allows TAC to fetch gated articles and full-texts.

---

## 📚 Quick Start

### Recommended Thesis Journey

1. **Set up library access** → `/tac:patricia:library-integration-setup`
2. **Discover your topic** → `/tac:dr-carla:topic-discovery` (THE BREAKTHROUGH WORKFLOW)
3. **Refine research question** → `/tac:dr-carla:research-question`
4. **Build literature review** → `/tac:patricia:literature-review`
5. **Structure your thesis** → `/tac:joao:thesis-structure`
6. **Plan timeline** → `/tac:dr-carla:timeline`
7. **Writing sessions** → `/tac:joao:writing-session`
8. **Prepare defense** → `/tac:lara:defense-prep`

### Useful Workflows Anytime

- **Check progress** → `/tac:progress-dashboard`
- **See next step** → `/tac:workflow-status`
- **Capture quick idea** → `/tac:quick-idea-capture`
- **Export to Word/PDF** → `/tac:export`
- **Explain English source** → `/tac:patricia:source-explainer`
- **Format citation** → `/tac:patricia:citation-helper`

---

## 👥 Specialized Agents

TAC includes 4 specialized agents working as a friendly study group:

### 🎓 Dr. Carla — Academic Advisor
- Topic discovery and validation
- Research question design
- Thesis timeline planning
- Topic evolution tracking (sidecar)

### 📚 Patricia — Research Librarian
- Source search and discovery
- Library integration (CAPES Portal)
- Source explainer (EN → PT-BR)
- Citation helper (ABNT format)
- Source search history (sidecar)

### ✍️ João — Writing Coach
- Thesis structure and outline
- Guided writing sessions
- Overcome writing blocks
- Writing patterns and progress (sidecar)

### 🎯 Lara — Defense Prep Coach
- Comprehensive defense preparation
- Presentation practice
- 5 simulated committee sub-agents (harsh but fair critic)
- Defense performance tracking (sidecar)

**All agents have memory** (sidecar) to remember your progress and patterns over time.

---

## 🔧 Available Workflows

### Core (4 essential workflows)
1. **topic-discovery-validation** — Help pick viable topic with source validation
2. **literature-review-builder** — Search library, organize sources
3. **thesis-structure-outline** — Create thesis outline and chapters
4. **research-question-designer** — Refine topic into research questions

### Feature (6 specialized workflows)
5. **source-explainer** — Explain English sources in Portuguese
6. **writing-session-guide** — Structured writing sessions to overcome blocks
7. **citation-helper** — Format citations in Brazilian standard (ABNT)
8. **defense-preparation** — Practice defense and presentation
9. **library-integration-setup** — Configure library access
10. **thesis-timeline-planner** — Set deadlines and milestones (backward planning)

### Utility (4 shared utilities)
11. **workflow-status** — Check thesis progress and next step
12. **export** — Export work to Word/PDF/Notion
13. **quick-idea-capture** — Capture ideas quickly
14. **progress-dashboard** — View overall progress with visual metrics

---

## 🎯 Special Features

- **Bilingual support** — Portuguese and English seamlessly integrated
- **CAPES integration** — Access gated articles through CAPES Portal
- **Persistent memory** — Agents remember your progress through sidecars
- **Backward planning** — Work backwards from defense deadline to weekly milestones
- **Anti-procrastination** — Transform distant deadlines into weekly actions
- **Source explanation** — Explain English academic papers in Portuguese
- **ABNT formatting** — Citations formatted in Brazilian standard
- **Defense practice** — 5 simulated committee members with rigorous feedback
- **Visual progress tracking** — See your progress with metrics and progress bars

---

## 📖 Documentation

For detailed user guides and documentation, see the **[docs/](docs/)** folder:
- [Getting Started](docs/getting-started.md)
- [Agents Reference](docs/agents.md)
- [Workflows Reference](docs/workflows.md)
- [Examples](docs/examples.md)

---

## 🆘 Troubleshooting

### Issue: "TAC module not found"
**Solution:** Run `bmad install tac` again to reinstall

### Issue: "Cannot access CAPES Portal"
**Solution:**
1. Verify you have institutional USP credentials
2. Run `/tac:patricia:library-integration-setup` again
3. Test connection during setup

### Issue: "Pandoc not found" when exporting
**Solution:** Install Pandoc:
- Windows: `choco install pandoc` or download from pandoc.org
- Mac: `brew install pandoc`
- Linux: `sudo apt-get install pandoc`

### Issue: "thesis_artifacts folder not found"
**Solution:** Folder is created automatically on first run. If missing, run any TAC workflow and it will be created.

---

## 🤝 Support

For issues, questions, or feedback:
- Open an issue on the GitHub repository
- Consult documentation in docs/
- Contact module author

---

## 📝 Development Status

✅ **COMPLETE** — Ready to use!

- ✅ 4 specialized agents (Dr. Carla, Patricia, João, Lara)
- ✅ 14 workflows (4 core + 6 feature + 4 utility)
- ✅ CAPES Portal integration via MCP
- ✅ Bilingual support (PT-BR / EN)
- ✅ Memory system with sidecars
- ✅ Export to Word/PDF/Notion

---

## 📄 License

Part of the BMAD framework.

---

## 👨‍💻 Author

Created via BMAD Module workflow on 2026-01-24
Completed: 2026-01-29

**For students, by developers who understand the thesis struggle.** 🎓
