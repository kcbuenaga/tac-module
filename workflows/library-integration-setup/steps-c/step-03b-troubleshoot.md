---
name: 'step-03b-troubleshoot'
description: 'Provide troubleshooting guidance for failed CAPES connection'

retryStepFile: './step-02-credentials.md'
---

# Step 3b: Troubleshooting

## STEP GOAL:

To provide clear, actionable troubleshooting guidance when CAPES connection fails, help the user diagnose the issue, and offer options to retry or exit the workflow.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without user decision
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading retry step, ensure entire file is read first
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a helpful credential setup assistant
- ✅ Supportive and patient during troubleshooting
- ✅ Provide specific, actionable guidance
- ✅ Respectful of user's time and frustration

### Step-Specific Rules:

- 🎯 Focus ONLY on troubleshooting guidance
- 🚫 FORBIDDEN to retry automatically - user must decide
- 💬 Provide comprehensive but organized troubleshooting steps
- 🔍 Use File I/O if needed to check credential file location
- 📋 Present clear menu: Retry or Exit

## EXECUTION PROTOCOLS:

- 🎯 Display comprehensive troubleshooting guide
- 💬 Organize by most common causes first
- ✅ Offer retry option (returns to credential collection)
- 🚪 Offer exit option (ends workflow)
- 🛑 MUST wait for user decision before proceeding

## CONTEXT BOUNDARIES:

- Connection test failed in step 03
- Error message from MCP available
- User may be frustrated - be supportive
- Credentials may be incorrect OR there may be access issues

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Acknowledge Failure Supportively

"**Connection Unsuccessful**

The CAPES portal did not accept the credentials provided. This is a common issue with several possible causes. Let's troubleshoot together."

### 2. Display Error Message from MCP

Display the error message returned from the MCP tool:

"**Error from CAPES:**
[display error message from step 03]"

### 3. Provide Troubleshooting Guide

Display comprehensive troubleshooting organized by likelihood:

"**Common Causes & Solutions:**

**1. Incorrect Credentials** (Most Common)
   - ✅ Double-check username spelling and capitalization
   - ✅ Verify password is correct (try logging into CAPES portal manually to confirm)
   - ✅ Some institutions use email as username, others use a separate ID
   - ✅ Passwords may have special characters that need careful entry

**2. No Institutional CAPES Access**
   - ✅ Verify your institution provides CAPES access (most Brazilian universities do)
   - ✅ Check if you need to be on campus network or connected via VPN
   - ✅ Confirm your institutional library account is active
   - ✅ Some institutions require separate registration for CAPES access

**3. Network/VPN Issues**
   - ✅ If you're off-campus, connect to your institution's VPN first
   - ✅ Check your internet connection is stable
   - ✅ Try disabling any browser extensions or proxy settings that might interfere

**4. CAPES Portal Status**
   - ✅ The CAPES portal may be temporarily down for maintenance
   - ✅ Try accessing https://www-periodicos-capes-gov-br.ezl.periodicos.capes.gov.br/ manually
   - ✅ If the portal is down, wait and retry this workflow later

**5. Credential File Location Issues** (Rare)
   - ✅ If MCP was installed in wrong location, credential file may not save properly
   - ✅ Expected location: `~/.capes-credentials.json`"

### 4. Offer to Check Credential File Location (Optional)

"**Would you like me to check if the credential file location is accessible?**

[Y] Yes, check credential file location
[N] No, I'll try other solutions first"

Wait for user response.

**If Y (Yes):**

Use File I/O to check if `~/.capes-credentials.json` is accessible:

```
Read tool:
file_path: [resolve ~ to user home]/.capes-credentials.json
```

**If file exists and is readable:**
"**Credential file location is accessible.**

The issue is likely with credentials or network access, not file location."

**If file does not exist or is not accessible:**
"**Potential Issue: Credential file location not accessible.**

Expected location: `~/.capes-credentials.json`

This could indicate:
- MCP server installed in wrong user directory
- File permission issues
- Home directory path resolution issue

**Recommended:**
1. Restart Claude Code to reload MCP server
2. Verify CAPES MCP configuration in Claude Code settings
3. Try this workflow again"

**If N (No):**
"**No problem. Let's proceed with retry or exit options.**"

### 5. Present Menu Options

Display:

"**What would you like to do?**

[R] **Retry** - Re-enter credentials and test again
[E] **Exit** - Exit this workflow for now

**Note:** You can re-run this workflow anytime to configure CAPES access."

### 6. Wait for User Decision

**CRITICAL:** Halt and wait for user to select R or E.

### 7. Handle Menu Selection

**If R (Retry):**

"**Retrying credential setup...**

Let's collect your credentials again. Make sure to double-check spelling and capitalization."

Immediately load, read entire file, then execute {retryStepFile}

**If E (Exit):**

"**Exiting Library Integration Setup**

No problem. When you're ready to configure CAPES access again, just re-run this workflow.

**To re-run:**
- If using Patricia: Ask for \"Library Integration Setup\"
- If using another agent: Say \"I need to configure CAPES access\"

**Workflow ended.**"

**STOP - Workflow complete (unsuccessful).**

**If neither R nor E:**

"**Please select [R] to Retry or [E] to Exit.**"

Redisplay menu options from step 5 and wait.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Error acknowledged supportively
- Error message from MCP displayed clearly
- Comprehensive troubleshooting guide provided
- Troubleshooting organized by likelihood (most common first)
- Optional file location check offered
- Clear menu presented: Retry or Exit
- User decision respected (retry routes to step 02, exit ends workflow)

### ❌ SYSTEM FAILURE:

- Automatically retrying without user decision
- Not displaying error message from MCP
- Providing vague troubleshooting guidance
- Not offering file location check option
- Proceeding without clear menu
- Being dismissive or impatient about failure
- Not explaining how to re-run workflow if exiting

**Master Rule:** Be supportive, provide actionable guidance, and respect user's decision to retry or exit. This is error handling, not error shaming.
