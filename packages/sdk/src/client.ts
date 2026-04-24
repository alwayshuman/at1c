export class AT1C {
  constructor(config: { apiKey: string }) {
    this.apiKey = config.apiKey
  }

  private apiKey: string

  async identify() {
    return {
      userId: "user_" + Math.random().toString(36).substring(2, 8)
    }
  }

  async approve({ userId, action, actor }: any) {
    console.log(`\n🔔 Approval requested`)
    console.log(`User: ${userId}`)
    console.log(`Action: ${action}`)
    console.log(`Actor: ${actor}`)

    const readline = require("readline")

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    const answer: string = await new Promise((resolve) => {
      rl.question("\nApprove? (y/n): ", (input: string) => {
        rl.close()
        resolve(input)
      })
    })

    if (answer.toLowerCase() !== "y") {
      return { status: "denied" }
    }

    return {
      status: "approved",
      proof: "proof_" + Math.random().toString(36).substring(2),
      receiptId: "receipt_" + Date.now(),
      timestamp: Date.now()
    }
  }

  async withApproval(config: any, fn: Function) {
    const result = await this.approve(config)

    if (result.status !== "approved") {
      throw new Error("Approval denied")
    }

    return fn()
  }
}
