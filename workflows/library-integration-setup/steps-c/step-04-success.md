---
name: 'step-04-success'
description: 'Confirm successful CAPES setup and explain next steps'
---

# Step 4: Success Confirmation

## STEP GOAL:

To confirm that CAPES credentials have been successfully tested and saved, explain what library access is now enabled, and guide the user on what to do next.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 This is the final step - workflow ends after this
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a helpful credential setup assistant
- ✅ Professional and celebratory about success
- ✅ Clear explanation of what's now enabled
- ✅ Helpful guidance for next steps

### Step-Specific Rules:

- 🎯 Focus ONLY on confirmation and next steps
- 🚫 FORBIDDEN to test credentials again (already verified)
- 💬 Explain what TAC workflows can now do
- ✅ Make user feel confident about library access

## EXECUTION PROTOCOLS:

- 🎯 Confirm credentials are saved and working
- 💬 Explain what's now enabled in TAC
- ✅ Provide clear next steps
- 🎉 Celebrate the successful setup
- 🏁 End workflow after confirmation

## CONTEXT BOUNDARIES:

- Credentials tested successfully in step 03
- Credentials saved to ~/.capes-credentials.json
- CAPES access is now enabled
- This is the final step - no more steps after this

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Success Confirmation

"**✅ Library Integration Setup Complete!**

Your CAPES credentials have been successfully verified and saved. Library database access is now enabled across all your TAC workflows."

### 2. Explain What's Saved

"**What happened:**
- ✅ Your credentials were tested against the CAPES portal
- ✅ Access verified successfully
- ✅ Credentials saved securely to: `~/.capes-credentials.json`
- ✅ CAPES search is now available in TAC workflows"

### 3. Explain What's Now Enabled

"**What you can now do:**

**Patricia (Your Librarian) can:**
- Search CAPES Portal de Periódicos for academic papers
- Access thousands of journals and research databases
- Retrieve full-text articles from supported publishers (like SciELO)
- Help you find sources for your literature review

**Dr. Carla (Your Advisor) can:**
- Validate thesis topic angles with real source counts
- Check if your research questions have adequate academic support
- Guide you toward topics with strong research foundations

**Workflows that now have library access:**
- Topic Discovery & Validation (searches CAPES to validate topic angles)
- Literature Review Builder (finds and organizes academic sources)
- Research Question Designer (validates research questions with sources)
- Source Explainer (can fetch full-text articles for analysis)"

### 4. Explain Security & Management

"**Credential Management:**

Your credentials are:
- ✅ Stored locally on your machine only
- ✅ Encrypted before storage
- ✅ Never transmitted beyond CAPES authentication
- ✅ Used only by the CAPES MCP tool for library access

**To update or remove credentials:**
- Simply re-run this workflow (Library Integration Setup)
- New credentials will replace old ones
- Or manually delete `~/.capes-credentials.json` to remove access"

### 5. Provide Next Steps Guidance

"**What's next:**

You can now use any TAC workflow that requires library access.

**Recommended next steps:**
1. **If you're starting your thesis:** Try \"Topic Discovery & Validation\" with Dr. Carla
2. **If you have a topic:** Try \"Literature Review Builder\" with Patricia
3. **If you need to understand a source:** Try \"Source Explainer\" with Patricia

**To access TAC agents:**
- Dr. Carla: Type `@dr-carla` or ask for Dr. Carla
- Patricia: Type `@patricia` or ask for Patricia
- João (Writing Coach): Type `@joao` or ask for João
- Lara (Defense Coach): Type `@lara` or ask for Lara"

### 6. Final Confirmation

"**Setup complete!**

Library integration is ready. You can now access CAPES Portal de Periódicos through your TAC workflows.

**Workflow ended successfully.**"

**STOP - Workflow complete (successful).**

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Success clearly confirmed with visual indicator (✅)
- User understands credentials are saved and where
- User understands what's now enabled (which agents, which workflows)
- Security explained (local storage, encryption, no external transmission)
- Next steps guidance provided (recommended workflows to try)
- Clear instructions on how to access TAC agents
- Credential management explained (how to update/remove)
- Workflow ended with clear "complete" message

### ❌ SYSTEM FAILURE:

- Not confirming credentials are saved
- Not explaining what's now enabled
- Not providing next steps guidance
- Being vague about which workflows have library access
- Not explaining how to access TAC agents
- Not explaining credential management
- Not clearly ending workflow

**Master Rule:** This is a celebration step. User successfully configured library access - make them feel confident about what they can now do and guide them to the next helpful workflow.
