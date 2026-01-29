---
name: 'step-02-credentials'
description: 'Collect CAPES username and password from user'

nextStepFile: './step-03-test-connection.md'
---

# Step 2: Credential Collection

## STEP GOAL:

To collect the user's CAPES username and password with clear instructions, validate that both are provided, and confirm before proceeding to connection test.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read first
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a helpful credential setup assistant
- ✅ Professional and respectful about sensitive credentials
- ✅ Clear instructions for credential format
- ✅ Reassuring about security

### Step-Specific Rules:

- 🎯 Focus ONLY on collecting credentials
- 🚫 FORBIDDEN to test connection yet (that's step 03)
- 💬 Provide clear guidance about credential format
- ✅ Validate both username and password are provided
- 🔒 Handle credentials securely (never log or display password)

## EXECUTION PROTOCOLS:

- 🎯 Request username first, then password
- 💬 Explain what credentials to use
- ✅ Validate inputs are not empty
- 🔒 Confirm credentials without displaying password
- ➡️ Auto-proceed to connection test after confirmation

## CONTEXT BOUNDARIES:

- User has confirmed institution (from step 01)
- No connection tested yet
- Credentials will be stored after successful test (step 03)
- This is input collection only

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Explain Credential Requirements

"**CAPES Credential Collection**

I need your institutional CAPES credentials to test and save your library access.

**What credentials to use:**
- These are the same credentials you use to access your institution's library portal
- Typically your institutional username (not necessarily your email)
- Your institutional password

**Important:**
- Your password will NOT be displayed or logged
- Credentials are encrypted before storage
- You can update or remove credentials anytime by re-running this workflow"

### 2. Request Username

"**Please provide your CAPES username:**"

Wait for user input.

**If user provides input:**
Store username temporarily for validation.

**If user input is empty or just whitespace:**
"**Username cannot be empty. Please provide your CAPES username:**"

Wait again. Repeat until valid username provided.

### 3. Request Password

"**Please provide your CAPES password:**

(Note: Your password will not be displayed for security)"

Wait for user input.

**If user provides input:**
Store password temporarily for validation.

**If user input is empty or just whitespace:**
"**Password cannot be empty. Please provide your CAPES password:**"

Wait again. Repeat until valid password provided.

### 4. Validate Credentials Format

Check that both username and password:
- Are not empty strings
- Are not just whitespace
- Have reasonable length (username 3+ chars, password 4+ chars)

**If validation fails:**
"**Invalid credential format detected.**

Please ensure:
- Username is at least 3 characters
- Password is at least 4 characters

Let's try again."

Return to step 2 (Request Username).

### 5. Confirm Credentials (Without Displaying Password)

"**Credentials collected. Please confirm:**

**Username:** [display username]
**Password:** [display as asterisks: ********]

**Is this correct?**

[Y] Yes, test these credentials
[N] No, let me re-enter them"

Wait for user response.

**If Y (Yes):**
Proceed to step 6.

**If N (No):**
"**No problem. Let's collect your credentials again.**"

Return to step 2 (Request Username).

**If neither Y nor N:**
"**Please respond with Y (yes) or N (no).**"

Redisplay confirmation and wait.

### 6. Set Expectations for Connection Test

"**Testing connection...**

I'll now use your credentials to:
1. Connect to the CAPES portal
2. Verify access is working
3. Save your credentials securely if successful

This may take 10-20 seconds."

### 7. Auto-Proceed to Connection Test

**IMPORTANT:** Pass the username and password to step 03 for MCP testing.

Immediately load, read entire file, then execute {nextStepFile}

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Username collected and validated (not empty, reasonable length)
- Password collected and validated (not empty, reasonable length)
- Credentials confirmed by user
- Password never displayed in plain text
- User understands what happens next
- Credentials passed securely to step 03 for testing

### ❌ SYSTEM FAILURE:

- Accepting empty or whitespace-only credentials
- Displaying password in plain text
- Testing connection in this step (forbidden - belongs in step 03)
- Not confirming credentials before proceeding
- Not providing clear instructions about what credentials to use
- Proceeding without both username AND password

**Master Rule:** Collect, validate, and confirm credentials securely. Then pass to step 03 for MCP testing. Never display password in plain text.
