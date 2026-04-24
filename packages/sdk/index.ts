export type ApprovalRequest = {
  actor: string
  action: string
  resource: string
}

export type Approval = ApprovalRequest & {
  id: string
  user: string
  timestamp: string
  approved: boolean
}

export type Proof = {
  approval: Approval
  signature: string
}

export class AT1C {
  private userId: string | null = null

  async identify(): Promise<string> {
    this.userId = "user_" + Math.random().toString(36).slice(2)
    return this.userId
  }

  async request(input: ApprovalRequest): Promise<Approval> {
    if (!this.userId) throw new Error("User not identified")

    return {
      ...input,
      id: "approval_" + Date.now(),
      user: this.userId,
      timestamp: new Date().toISOString(),
      approved: false
    }
  }

  async approve(approval: Approval): Promise<Approval> {
    approval.approved = true
    return approval
  }

  async getProof(import crypto from "crypto"): Promise<Proof> {
    if (!approval.approved) {
      throw new Error("Approval not granted")
    }

    return {
      approval,
      signature: "mock-signature-" + approval.id
    }
  }

  async verify(async verify(proof: Proof): Promise<boolean> {
  const payload = JSON.stringify(proof.approval)

  const expected = crypto
    .createHash("sha256")
    .update(payload)
    .digest("hex")

  return proof.signature === expected
}): Promise<boolean> {
    return proof.signature.startsWith("mock-signature")
  }
}

export const at1c = new AT1C()
