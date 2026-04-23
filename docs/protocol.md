AT1C Protocol (v0.1)
Overview

AT1C defines a simple rule:

No action is valid unless backed by verifiable user approval.

AT1C introduces a standard way to:

Request approval for an action
Capture user consent
Generate a verifiable proof
Allow any system to independently verify that approval

AT1C is implementation-agnostic and can operate:

off-chain (local / server verification)
on-chain (anchored proofs)
or hybrid
1. Core Concepts
1.1 Actors
User
The human who controls approval authority
Actor
The entity requesting to act (app, API, AI agent)
Verifier
Any system validating that an action was approved
1.2 Action

An action is any operation performed on behalf of a user.

Examples:

login
post_content
transfer_funds
execute_ai_task
1.3 Approval

An approval is a user-authorized grant for a specific action.

1.4 Proof

A proof is a verifiable record that an approval occurred.

2. Approval Object

The Approval Object is the core primitive of AT1C.

{
  "id": "uuid",
  "user": "user_id_or_did",
  "actor": "actor_id",
  "action": "string",
  "resource": "string",
  "timestamp": "ISO8601",
  "expires_at": "ISO8601 | null",
  "nonce": "random_string",
  "signature": "user_signature"
}
Field Definitions
id → unique approval identifier
user → identity of approving user
actor → requesting entity
action → operation being approved
resource → target of action
timestamp → time of approval
expires_at → optional expiry
nonce → prevents replay attacks
signature → cryptographic proof of approval
3. Approval Flow
Step 1 — Request

Actor requests approval:

{
  "actor": "ai_agent_1",
  "action": "post_content",
  "resource": "user://social_account"
}
Step 2 — User Decision

User explicitly:

approves
or denies
Step 3 — Approval Creation

If approved, system generates an Approval Object and signs it.

Step 4 — Proof Generation

Proof = Approval Object + valid signature

Step 5 — Action Execution

Actor executes action only if proof is present

Step 6 — Verification

Verifier checks proof before accepting action.

4. Verification Rules

A proof is valid if:

4.1 Signature Validity
Signature matches user
Signature covers full approval payload
4.2 Integrity
No fields altered after signing
4.3 Expiry Check
expires_at not passed (if present)
4.4 Nonce Uniqueness
Prevent replay of approvals
4.5 Context Match
actor, action, and resource match actual execution
5. Security Properties

AT1C guarantees:

Explicit Consent

No action is valid without user approval

Verifiability

Any third party can validate approval independently

Replay Protection

Nonces prevent reuse of approvals

Auditability

Approvals can be stored and inspected

6. Optional Extensions (Future)

These are not required for v0, but supported by design:

6.1 Identity Layer
DID-based identities
Portable user identity
6.2 Advanced Proofs
Selective disclosure
Zero-Knowledge Proof
6.3 Multi-Signature Approval
Family / validator attestations
Threshold-based approval policies
6.4 Delegation
Users grant scoped permissions to agents
6.5 Lifecycle & Inheritance
Transfer approval authority under defined conditions
6.6 Blockchain Anchoring
Store approval hashes on-chain
Support multiple chains (e.g. Nervos CKB, others)
7. Design Principles

AT1C implementations must follow:

Minimalism

Keep core protocol small and composable

Verifiability First

Every approval must be independently verifiable

User Control

Users retain authority at all times

Implementation Agnostic

Protocol must not depend on a specific platform or chain

8. Non-Goals (v0)

AT1C does NOT define:

UI/UX design
Specific blockchain implementations
Key storage mechanisms
Identity verification providers
9. Summary

AT1C introduces a universal primitive:

Verifiable human approval for digital actions

It enables:

accountable AI systems
consent-based authentication
auditable digital behavior

Without requiring changes to existing infrastructure.
