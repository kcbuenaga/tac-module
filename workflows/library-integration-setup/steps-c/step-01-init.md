---
name: 'step-01-init'
description: 'Welcome user and explain CAPES credential setup workflow'

nextStepFile: './step-02-credentials.md'
---

# Step 1: Welcome & Explain CAPES Setup

## STEP GOAL:

To welcome the user, explain the CAPES credential setup process, confirm their institution (defaults to USP), and set clear expectations for this quick configuration workflow.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without reading complete step file
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read first
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a helpful credential setup assistant
- ✅ Professional but friendly
- ✅ Clear, prescriptive instructions
- ✅ Respectful of user's time - this is a quick setup

### Step-Specific Rules:

- 🎯 Focus ONLY on welcoming and explaining
- 🚫 FORBIDDEN to collect credentials yet (that's step 02)
- 💬 Keep it concise - respect the user's time
- 🔍 Confirm institution with default to USP

## EXECUTION PROTOCOLS:

- 🎯 Explain what CAPES is and why setup is needed
- 💬 Confirm institution (default: USP)
- 📖 Set expectations for quick 2-3 minute setup
- ➡️ Auto-proceed to credential collection

## CONTEXT BOUNDARIES:

- This is step 1 - no prior context exists yet
- No credentials collected yet
- No connection tested yet
- Just explaining what we're about to do

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Welcome Message

"**Welcome to Library Integration Setup!**

I'm going to help you configure access to CAPES Portal de Periódicos, Brazil's premier academic database portal. This is a quick, one-time setup that will enable library database search across all your TAC (Thesis Advisory Companion) workflows.

**What this setup does:**
- Tests your CAPES credentials
- Saves them securely to your system
- Enables Patricia (your librarian) and Dr. Carla (your advisor) to search CAPES for academic sources

**Time required:** 2-3 minutes"

### 2. Explain CAPES Access

"**About CAPES Access:**

CAPES (Coordenação de Aperfeiçoamento de Pessoal de Nível Superior) provides access to thousands of academic journals, articles, and research databases. If you're affiliated with a Brazilian institution (university, research center, etc.), you likely have CAPES access through your institutional credentials."

### 3. Confirm Institution

"**Institution Confirmation:**

By default, I'll configure access for **USP (Universidade de São Paulo)**.

**Is this correct, or would you like to specify a different institution?**"

**Wait for user response.**

**Handle response:**

- **If USP is correct:** "Perfect! We'll use USP credentials."
- **If different institution:** "Got it! I'll configure for [institution name]. Please note that you'll need your institutional credentials for CAPES access."
- **If user is unsure:** "No problem. Most Brazilian institutions provide CAPES access. If you have institutional library credentials, we can test them and see if CAPES access is included."

**Store the institution name for reference (even though current implementation only supports one CAPES portal, this helps with future expansion).**

### 4. Privacy & Security Note

"**Privacy & Security:**

Your credentials will be:
- ✅ Saved locally on your machine at `~/.capes-credentials.json`
- ✅ Never transmitted beyond the CAPES portal authentication
- ✅ Used only for library database access in TAC workflows
- ✅ Stored securely by the CAPES MCP (Model Context Protocol) server"

### 5. Set Expectations

"**What happens next:**

1. **Step 2:** You'll provide your CAPES username and password
2. **Step 3:** I'll test the connection to verify access
3. **Step 4:** If successful, you're done! If not, I'll provide troubleshooting steps

Let's collect your credentials now."

### 6. Auto-Proceed to Credentials

Immediately load, read entire file, then execute {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- User understands what CAPES is and why setup is needed
- Institution confirmed (USP or alternative)
- User understands privacy/security of credential storage
- Clear expectations set for 3-step process
- Auto-proceeded to credential collection (step 02)

### ❌ SYSTEM FAILURE:

- Not explaining what CAPES is
- Not confirming institution
- Collecting credentials in this step (forbidden - belongs in step 02)
- Providing too much technical detail (keep it user-friendly)
- Not auto-proceeding to step 02

**Master Rule:** This is a welcoming init step with automatic progression to credential collection. No menu, no halt - just explain and proceed.
