const crypto = require("crypto")
const fs = require("fs")
const { generateKeyPair } = require("@at1c/sdk")

function createAgent(ownerUserId) {
  const agentId = "agent_" + crypto.randomBytes(4).toString("hex")

  const keypair = generateKeyPair()
  const publicKey = keypair.publicKey
  const privateKey = keypair.secretKey

  const agent = {
    agentId,
    ownerUserId,
    permissions: ["Sign in"],
    publicKey,
    privateKey,
    createdAt: Date.now()
  }

  let agents = []

  if (fs.existsSync("agents.json")) {
    agents = JSON.parse(fs.readFileSync("agents.json"))
  }

  agents.push(agent)

  fs.writeFileSync(
    "agents.json",
    JSON.stringify(agents, null, 2)
  )

  console.log("✅ Agent created")
  console.log(agent)

  return agent
}

module.exports = { createAgent }
