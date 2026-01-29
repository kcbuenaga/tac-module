# Library Integration Setup - Workflow Flow

```
┌─────────────────────────────────────────────────────────────┐
│                  LIBRARY INTEGRATION SETUP                  │
│            Configure CAPES Credentials Workflow             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  STEP 01: INIT                                              │
│  ├─ Welcome user                                            │
│  ├─ Explain CAPES credential setup                          │
│  ├─ Confirm institution (default: USP)                      │
│  └─ AUTO-PROCEED ─────────────────────────┐                 │
└───────────────────────────────────────────┼─────────────────┘
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 02: CREDENTIALS                                       │
│  ├─ Prompt: "Enter CAPES username:"                         │
│  ├─ Prompt: "Enter CAPES password:"                         │
│  ├─ Confirm credentials (password masked)                   │
│  └─ AUTO-PROCEED ─────────────────────────┐                 │
└───────────────────────────────────────────┼─────────────────┘
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 03: TEST CONNECTION                                   │
│  ├─ Use MCP: capes_test_connection()                        │
│  │   - username: [from step 02]                             │
│  │   - password: [from step 02]                             │
│  │   - saveCredentials: true                                │
│  ├─ Display: "Testing connection..."                        │
│  └─ ROUTING DECISION                                        │
│      ├─ IF success: true  ────────────────┐                 │
│      └─ IF success: false ────────────┐   │                 │
└───────────────────────────────────────┼───┼─────────────────┘
                                        │   │
                                        │   │
                  ┌─────────────────────┘   └─────────────────┐
                  │                                            │
                  ▼ FAILURE                                    ▼ SUCCESS
┌─────────────────────────────────────┐  ┌─────────────────────────────────────┐
│  STEP 03B: TROUBLESHOOT             │  │  STEP 04: SUCCESS                   │
│  ├─ Display error message           │  │  ├─ Display: "Success!"             │
│  ├─ Show troubleshooting guide:     │  │  ├─ Confirm credentials saved:      │
│  │   • Incorrect credentials        │  │  │   ~/.capes-credentials.json      │
│  │   • No institutional access      │  │  ├─ Explain: Library access ready   │
│  │   • Network/VPN issues           │  │  ├─ Note: TAC workflows can now     │
│  │   • CAPES portal down            │  │  │   use CAPES search               │
│  │   • File location (use File I/O) │  │  └─ WORKFLOW COMPLETE               │
│  ├─ MENU:                           │  └─────────────────────────────────────┘
│  │   [R] Retry (→ Step 02)          │                   │
│  │   [E] Exit workflow              │                   │
│  └─────────────────────────────────┘                   │
       │         │                                        │
       │         └────────────── EXIT ──────────────────┐│
       │                                                 ││
       └─ RETRY → Back to STEP 02                       ││
                                                         ││
                                                         ▼▼
                                                    ┌─────────┐
                                                    │   END   │
                                                    └─────────┘
```

## Flow Summary

**Linear Path (Success):**
1. Init → Credentials → Test → Success → END

**Error Path (Failure):**
1. Init → Credentials → Test → Troubleshoot → [Retry OR Exit]
   - Retry: Return to Credentials
   - Exit: END

## Key Decision Points

1. **Step 03: Test Connection** - Automatic routing based on MCP result
   - Success → Step 04 (Success)
   - Failure → Step 03b (Troubleshoot)

2. **Step 03b: Troubleshoot Menu** - User choice
   - [R] Retry → Return to Step 02 (Credentials)
   - [E] Exit → END workflow

## MCP Integration

**Tool:** capes_test_connection
**When:** Step 03
**Parameters:**
- username: User input from Step 02
- password: User input from Step 02
- saveCredentials: true

**Output:**
- success: boolean
- message: string
- credentialsSaved: boolean (if success)

## File I/O Usage

**When:** Step 03b (Troubleshooting) - if credential file location is issue
**Action:** Locate ~/.capes-credentials.json and guide user to relocate if MCP installed in wrong user library

## Estimated Time

**Success Path:** 2-3 minutes
**With Troubleshooting:** 5-10 minutes (depends on issue resolution)
