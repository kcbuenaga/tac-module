---
name: 'step-03-test-connection'
description: 'Test CAPES connection using MCP tool and route based on result'

successStepFile: './step-04-success.md'
failureStepFile: './step-03b-troubleshoot.md'
---

# Step 3: Test Connection

## STEP GOAL:

To test the provided CAPES credentials using the capes_test_connection MCP tool, save credentials if successful, and route to either success confirmation or troubleshooting based on the result.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without testing connection first
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read first
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are a helpful credential setup assistant
- ✅ Professional handling of success and failure scenarios
- ✅ Clear communication about what's happening
- ✅ Supportive during errors

### Step-Specific Rules:

- 🎯 Focus ONLY on testing connection via MCP
- 🚫 FORBIDDEN to manually test or simulate connection
- 💬 MUST use capes_test_connection MCP tool
- ✅ Route based on actual MCP result, not assumptions
- 🔀 This is a branching step - routes to success OR troubleshoot

## EXECUTION PROTOCOLS:

- 🎯 Use capes_test_connection MCP tool with exact parameters
- 💾 MCP will save credentials if successful
- ✅ Check MCP result for success/failure
- 🔀 Route to appropriate next step based on result
- 🚫 FORBIDDEN to proceed without valid MCP result

## CONTEXT BOUNDARIES:

- Credentials collected in step 02
- MCP tool available and configured
- This is the critical test moment
- Success leads to completion, failure leads to troubleshooting

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Prepare for Connection Test

Display:

"**Testing CAPES Connection...**

I'm connecting to the CAPES portal with your credentials. This may take 10-20 seconds."

### 2. Execute MCP Tool Call

**CRITICAL: Use the capes_test_connection MCP tool with these EXACT parameters:**

```
Tool: mcp__capes-connector__capes_test_connection
Parameters:
{
  "username": [username from step 02],
  "password": [password from step 02],
  "saveCredentials": true
}
```

**Wait for MCP tool to return result.**

### 3. Handle MCP Tool Error (Tool Call Failed)

**If the MCP tool call itself fails (tool not found, MCP server not responding, etc.):**

"**MCP Connection Error**

I couldn't connect to the CAPES MCP tool. This is a configuration issue, not a credential issue.

**Possible causes:**
- CAPES MCP server not running
- MCP configuration issue in Claude Code
- Tool not properly installed

**What to do:**
1. Verify CAPES MCP is configured in Claude Code settings
2. Restart Claude Code to reload MCP servers
3. Re-run this workflow

**Error details:** [display error message from tool call]"

**STOP - Do not proceed further. User needs to fix MCP configuration.**

### 4. Parse MCP Tool Result

**If MCP tool returns successfully, check the result object:**

Expected result structure:
```json
{
  "success": boolean,
  "message": string,
  "credentialsSaved": boolean (if success is true)
}
```

### 5. Handle Success Result

**If result.success === true:**

Display:

"**✅ Connection Successful!**

Your CAPES credentials have been verified and saved securely."

**Immediately load, read entire file, then execute {successStepFile}**

### 6. Handle Failure Result

**If result.success === false:**

Display:

"**❌ Connection Failed**

The CAPES portal did not accept these credentials.

**Error from CAPES:** [display result.message]

Let me help you troubleshoot this issue."

**Immediately load, read entire file, then execute {failureStepFile}**

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- MCP tool called with correct parameters (username, password, saveCredentials: true)
- MCP tool result received and parsed correctly
- Routed to success step if result.success === true
- Routed to troubleshoot step if result.success === false
- Clear communication about connection status
- No manual testing or credential validation (MCP handles this)

### ❌ SYSTEM FAILURE:

- Not using the MCP tool (trying to manually test credentials)
- Using wrong MCP tool parameters
- Not waiting for MCP result before routing
- Assuming success without checking result.success
- Not handling MCP tool call errors
- Displaying raw credentials in error messages
- Not routing to appropriate next step based on result

**Master Rule:** This step ONLY calls the MCP tool and routes based on result. No manual testing, no assumptions. Let the MCP tool do its job, then react to the result.
