import { AT1C } from "../../packages/sdk/src/client"

async function run() {
  const at1c = new AT1C({ apiKey: "demo_key" })

  console.clear()

  console.log("===================================")
  console.log("🌐 demo-app.com")
  console.log("===================================\n")

  console.log("🔘 [ Sign in with AT1C ]\n")

  // simulate button click
  await new Promise(res => setTimeout(res, 1000))

  console.log("👉 User clicked 'Sign in with AT1C'\n")

  // Step 1 — identify
  const user = await at1c.identify()
  console.log("🧑 Identified:", user.userId)

  // Step 2 — approval request
  console.log("\n📲 Sending approval request to user...\n")

  const result = await at1c.approve({
    userId: user.userId,
    action: "Sign in",
    actor: "demo-app.com"
  })

  // Step 3 — result
  if (result.status === "approved") {
    console.log("\n✅ Access Granted")
    console.log("🔐 Proof:", result.proof)

    console.log("\n🎉 Welcome back!")
  } else {
    console.log("\n❌ Access Denied")
    console.log("🚫 User rejected the request")
  }

  console.log("\n===================================")
}

run()
