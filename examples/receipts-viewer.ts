const fs = require("fs")
const path = require("path")

const receiptsFile = path.join(process.cwd(), "receipts.json")

function loadReceipts() {
  try {
    if (!fs.existsSync(receiptsFile)) {
      console.log("📭 No receipts found yet.")
      return []
    }

    const data = fs.readFileSync(receiptsFile, "utf-8")
    return JSON.parse(data)
  } catch (err) {
    console.error("❌ Failed to load receipts:", err)
    return []
  }
}

function main() {
  const receipts = loadReceipts()

  console.log("\n🧾 AT1C Receipts")
  console.log("====================\n")

  if (receipts.length === 0) {
    console.log("No receipts recorded yet.")
    return
  }

  receipts.forEach((r: any, i: number) => {
    console.log(`Receipt #${i + 1}`)
    console.log(`ID: ${r.receiptId}`)
    console.log(`User: ${r.userId}`)
    console.log(`Action: ${r.action}`)
    console.log(`Actor: ${r.actor}`)
    console.log(`Status: ${r.status}`)
    console.log(`Time: ${new Date(r.timestamp).toLocaleString()}`)
    console.log("----------------------")
  })
}

main()
