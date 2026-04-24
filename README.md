🔐** AT1C Protocol**

Verifiable approval for human and AI actions

AT1C ensures that no system—human or AI—can act on behalf of a user without explicit, provable approval.

⚡ Quick Example
const user = await at1c.identify()

const approval = await at1c.request({
  actor: "ai_agent",
  action: "post_content",
  resource: "user://social_account"
})

await at1c.approve(approval)

const proof = await at1c.getProof(approval)

// Any system can verify this
await at1c.verify(proof)
🧠 The Problem

**Today’s systems act on implicit trust:**

Apps act on behalf of users silently
AI agents execute without oversight
Identity is fragmented and platform-controlled

**This leads to:**

Automation without accountability

⚡ The AT1C Solution

**AT1C introduces a new primitive:**

No action is valid unless backed by verifiable user approval

**It adds a simple control layer:**

🔐 User-controlled identity

✋ Explicit approval before any action

🧾 Verifiable proof of consent

🤖 AI agents gated by human intent

AT1C doesn’t replace existing systems—it wraps them with accountability.

🚀 Try It (30 seconds)

Clone and run:

git clone https://github.com/alwayshuman/at1c.git
cd at1c
npx ts-node --compiler-options '{"module":"CommonJS"}' examples/login-demo/index.ts

🔘 Demo 1 — Sign in with AT1C

User is identified
Approval is requested
Access granted only after consent
npx ts-node --compiler-options '{"module":"CommonJS"}' examples/login-demo/index.ts

🤖 Demo 2 — AI Agent Approval

AI requests permission
User approves or denies
Action is controlled by the user
npx ts-node --compiler-options '{"module":"CommonJS"}' examples/ai-agent-demo/index.ts

📚 Documentation

👉 https://github.com/alwayshuman/at1c/blob/main/docs/protocol.md

👉 https://github.com/alwayshuman/at1c/blob/main/docs/whitepaper.md

🧩 Core Concept

AT1C introduces a simple rule:

Nothing acts on behalf of a user without explicit approval

Upgraded with:

Every approval is verifiable

🌍 What This Enables
Safe AI agents (cannot act without permission)

Consent-based authentication (beyond passwords)

Auditable digital actions (who approved what, when)

Human-in-the-loop automation
🔮 Vision

AT1C can become the standard layer for:

AI safety & accountability

Secure identity flows

Permission-based automation

Verifiable digital actions

📦 Project Structure
at1c/
├── docs/          # Protocol + whitepaper
├── packages/      # SDK
├── examples/      # Demos
🤝 Contributing

Early-stage protocol. Open to ideas, feedback, and collaboration.

📜 License

MIT

