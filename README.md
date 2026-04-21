 🔐 AT1C Protocol

**User-controlled identity & AI action approval layer**

AT1C is a lightweight protocol that ensures **humans stay in control** when apps or AI agents attempt to act on their behalf.

---
 ⚡ Why AT1C?

Modern systems allow apps and AI to act silently.

AT1C flips that model:

* 🔐 Users explicitly approve actions
* 🤖 AI agents require permission before acting
* 🧾 Actions generate verifiable proof
* 🧑 Identity is controlled by the user — not platforms

---

 🚀 Quick Demo (30 seconds)

Clone and run:

```bash
git clone https://github.com/alwayshuman/at1c.git
cd at1c
npx ts-node --compiler-options '{"module":"CommonJS"}' examples/login-demo/index.ts
```

👉 Try approving and rejecting requests.

---

 🔘 Demo 1 — Sign in with AT1C

Simulates a login flow where:

* user is identified
* approval is requested
* access is granted only after consent

```bash
npx ts-node --compiler-options '{"module":"CommonJS"}' examples/login-demo/index.ts
```

---

 🤖 Demo 2 — AI Agent Approval

Simulates an AI attempting to act:

* AI requests permission
* user approves or denies
* action is controlled by the user

```bash
npx ts-node --compiler-options '{"module":"CommonJS"}' examples/ai-agent-demo/index.ts
```

---

 🧠 Core Concept

AT1C introduces a simple but powerful rule:

> **Nothing acts on behalf of a user without explicit approval**

---

 📦 Project Structure

```
at1c/
├── packages/
│   └── sdk/        # Core AT1C client
├── examples/
│   ├── login-demo/
│   └── ai-agent-demo/
├── docs/           # Protocol docs (coming soon)
```

---

 🔮 Vision

AT1C can become the standard layer for:

* AI safety & accountability
* secure identity flows
* permission-based automation
* verifiable digital actions

---

 🤝 Contributing

This project is early-stage and focused on building open, human-first infrastructure for AI systems.

Ideas, feedback, and collaboration are welcome.

---

 📜 License

MIT


