# AT1C Protocol

**Cryptographic Human Consent for AI Agent Actions**

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![npm](https://img.shields.io/npm/v/@at1c/sdk)](https://www.npmjs.com/package/@at1c/sdk) [![Registry](https://img.shields.io/badge/registry-live-green)](https://registry.at1c.com/health)

---

## 🔐 Post-Quantum Ready — ML-DSA-65 (FIPS 203)

AT1C uses **ML-DSA-65**, a NIST-approved post-quantum digital signature scheme (FIPS 203). Ed25519 has been retired. Every receipt, certificate, and verification is now quantum-resistant.

**SDK v1.0.3 — 12/12 tests passing — published to npm.**

While others are planning quantum resistance, AT1C has shipped it.

---

AT1C gives you a cryptographically signed, independently verifiable proof that a human approved a specific AI agent action before that action executes.

**No approval, no valid action. No exceptions.**

Built for developers. Required for EU AI Act compliance (enforcement: August 2026).

## Try it in 30 seconds

```bash
git clone https://github.com/at1c-protocol/at1c-protocol-official.git
cd at1c-protocol-official
npm install
npm run demo
```

Or install the SDK directly:

```bash
npm install @at1c/sdk
```

## Key Documents

- 📄 **Whitepaper** — EU AI Act compliance, sector analysis, Algorand x402 payment architecture
- 📜 **Manifesto** — AT1C founding principles: sovereign identity, humans first
- 📚 **All docs** — protocol spec, receipts, verification, SDK reference

## Live Registry

```bash
curl https://registry.at1c.com/health
```

## How it works

1. **Request** — an AI agent asks permission to perform a specific action
2. **Approve** — a human explicitly grants or denies it
3. **Proof** — an ML-DSA-65 (FIPS 203) post-quantum signed receipt is generated, binding the user, action, timestamp, and nonce
4. **Verify** — any system independently verifies the receipt before execution — no trust required

Every receipt is single-use (nonce-based replay protection). Approval is scoped to the exact action requested — not transferable to any other action.## AT1C vs. The Others

The agentic AI space has several overlapping projects. Here is where AT1C differs from the closest ones:

**vs. autonomous agent runtimes (Theseus, etc.)** — those systems remove humans from the loop by design. AT1C keeps a human in the loop by design. These are not competing approaches — they target different buyers. Autonomous runtimes suit DeFi/crypto use cases where fully autonomous execution is the goal. AT1C suits regulated sectors where human oversight is legally required.

**vs. data redaction gateways (TrustLayer, etc.)** — those systems control what data AI sees. AT1C controls what actions AI is permitted to take. A developer could use both without conflict.

**vs. payment authorization protocols (ATXP, etc.)** — those systems authorize agent payments. AT1C authorizes any agent action, with cryptographic proof of human approval, across any domain — not scoped to payments.

The field is converging on a shared framing: treat autonomous agents as instruments acting under a person's authority, with scoped, revocable, auditable chains of responsibility. AT1C implements this today, with a working SDK and live registry.

## Why it matters right now

The EU AI Act begins enforcement in August
## Known Limitations & Roadmap

- **Agent key custody** — ✅ done (v1.1) non-custodial by design. Agents generate their own keypairs locally, the registry only ever receives and signs over the public key.

- **Live registry** — ✅ done (v1.2) — authenticated agent verification live at `registry.at1c.com` over HTTPS. Registry private key held in environment variables only, never on the filesystem.

- **Open web registration** — ✅ done (v1.3) any user can register a personal or entity owned agent via `at1c.com/users/register-agent.php`. No CLI required for registration.

- **Browser-side keypair generation** — ✅ done (v1.4) keypair generated in the browser. Private key downloads automatically, never touches the server. Permissions selected via checkboxes. No terminal required — accessible to non-technical users.

- **Quantum resistance** — ✅ done (v1.0.3) AT1C uses ML-DSA-65 (FIPS 203), a NIST-approved post-quantum digital signature scheme. Ed25519 has been retired. SDK v1.0.3 — 12/12 tests passing — published to npm.

- **End-user passkey onboarding** (planned
