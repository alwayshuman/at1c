# AT1C

**Prove you said yes.**

AT1C is a protocol that ensures every digital action—by apps or AI—is explicitly approved and provable by the user.

---

## Why AT1C

Today, digital systems act without clear user consent.

- AI can take actions without proof of approval  
- Platforms control identity and access  
- Users cannot verify what they authorised  
- Digital presence can be lost or restricted  

AT1C introduces a simple rule:

> Nothing acts without your approval—and every approval is provable.

---

## What AT1C Does

- Requires user approval before actions occur  
- Generates cryptographic proof of approval  
- Allows permissions to be revoked at any time  
- Provides a clear activity history  

---

## Example

```ts
const at1c = new AT1C({ apiKey: "demo_key" })

const user = await at1c.identify()

const result = await at1c.approve({
  userId: user.userId,
  action: "Sign in",
  actor: "demo-app.com"
})

---

## 🧱 Project Structure

- /docs → architecture & concepts  
- /spec → protocol & cryptography  
- /sdk → developer tools  
- /examples → working demos  

---

## 📄 Documentation

Start here:
- docs/architecture.md
- docs/authorization-model.md

---

## 🚧 Status

Early-stage protocol design.  
Contributions and feedback welcome.

---

## 📜 License

MIT


It ensures that every autonomous action can be:

* Authenticated
* Authorized
* Auditable

---

## 🔍 What Problem It Solves

AI agents today can act — but cannot prove:

* who authorized them
* what they are allowed to do
* whether an action is legitimate

AT1C introduces a structured authorization model to solve this.

---

## ⚙️ Core Idea

User → Signs Policy → Agent → Executes → Receipt

Every action is backed by:

* cryptographic identity
* explicit policy
* verifiable execution record

---

## 🧱 Project Structure

* `/docs` → architecture & concepts
* `/spec` → protocol & cryptography
* `/sdk` → developer tools
* `/examples` → working demos

---

## 📄 Documentation

Start here:

* docs/architecture.md
* docs/authorization-model.md

---

## 🚧 Status

Early-stage protocol design.
Contributions and feedback welcome.

---

## 📜 License

MIT

git add README.md
git commit -m "Update README"
git push
x


