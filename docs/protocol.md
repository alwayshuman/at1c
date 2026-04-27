 🔐 AT1C Protocol Specification (v0.1)

---

 1. Overview

The AT1C Protocol defines a standard for **verifiable human approval of digital actions**.

> **No system—human or AI—may act on behalf of a user without explicit approval, and that approval must be provable.**

The protocol is **implementation-agnostic** and can operate across different infrastructures.

---

 2. Core Principle

All actions performed on behalf of a user MUST satisfy:

1. **Explicit Approval** — granted by the user
2. **Bound Context** — tied to a specific action and scope
3. **Verifiable Proof** — independently checkable by any party

---

 3. Core Flow

```text
Request → Approve → Proof → Verify
```

 3.1 Request

A system or agent submits a request to perform an action.

 3.2 Approve / Deny

The user explicitly approves or denies the request.

 3.3 Proof Generation

If approved, a proof is generated binding:

* user
* action
* context
* timestamp

 3.4 Verification

Any system may verify the proof before executing or accepting the action.

---

 4. Entities

 4.1 User (Human Principal)

A user represents the root authority.

* Owns identity
* Grants approvals
* May delegate permissions

---

 4.2 Agent

An agent is any system acting on behalf of a user.

Types include:

* AI agents
* applications
* services

All agents MUST:

* operate within an authorization scope
* require approval for actions outside pre-approved scope

---

 4.3 Verifier

A verifier is any system that:

* checks proof validity
* enforces protocol rules before accepting an action

---

 5. Data Structures

 5.1 ApprovalRequest

```json
{
  "actor": "string",
  "action": "string",
  "resource": "string",
  "context": "optional metadata"
}
```

---

 5.2 Approval

```json
{
  "id": "string",
  "user": "string",
  "actor": "string",
  "action": "string",
  "resource": "string",
  "timestamp": "ISO8601",
  "approved": true | false
}
```

---

 5.3 Proof

```json
{
  "approval": { ...Approval },
  "signature": "string"
}
```

---

 6. Protocol Rules

 Rule 1 — No Implicit Authority

No action may be executed without explicit approval unless pre-authorized within defined scope.

---

 Rule 2 — Context Binding

Approval MUST be bound to a specific:

* action
* actor
* resource

Reuse of approval outside its context is invalid.

---

 Rule 3 — Proof Integrity

Proofs MUST be:

* tamper-evident
* reproducible
* verifiable without trust in the issuer

---

 Rule 4 — Verification Before Execution

Any system receiving a request MUST verify proof before executing the action.

---

 Rule 5 — Revocation

Users MUST be able to revoke:

* agent permissions
* prior approvals (where applicable)

---

 7. Authorization Scope

Agents may operate under predefined scopes:

Examples:

* read-only access
* limited actions
* time-bound permissions

Actions outside scope MUST trigger a new approval request.

---

 8. Identity Model

AT1C Defines:

* user identity is self-controlled
* identity may be represented across different systems

The protocol does NOT enforce a specific identity implementation.

---

 9. Cryptographic Requirements

Implementations MUST provide:

* secure signature mechanism
* collision-resistant hashing
* timestamp integrity

Optional enhancements:

* zero-knowledge proofs
* post-quantum signatures
* hardware-backed keys

---

 10. Agent Accountability

All agent actions MUST be:

* attributable to a user
* traceable through proof
* verifiable independently

> **Unattributed agents are non-compliant with the protocol.**

---

 11. Inheritance & Lifecycle (Optional Extension)

Implementations MAY support identity lifecycle features:

* inactivity detection
* multi-party attestation
* transfer of control

Example model:

* time-lock (inactivity)
* attestation (trusted confirmation)

Both conditions required for transfer.

---

 12. Implementation Agnosticism

The AT1C Protocol:

* is not tied to any blockchain
* is not tied to any identity provider
* is not tied to any execution environment

It MAY be implemented using:

* UTXO-based systems
* account-based systems
* off-chain systems

---

 13. Compliance

A system is AT1C-compliant if:

* all actions require valid approval or scoped authorization
* all approvals produce verifiable proof
* all proofs are verified before execution

---

 14. Summary

AT1C defines a minimal rule:

> **Actions require approval. Approval produces proof. Proof enables verification.**

This establishes a foundation for:

* accountable automation
* user-controlled identity
* verifiable digital interactions

---

**Protocol Specification (v0.1)**

A.Human
