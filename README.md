# REQX402

**REQX402** is a protocol for autonomous AI agents to pay for API calls automatically —  
no subscriptions, no API keys, no billing dashboards.

Just **pay-per-call** using **USDC** via the **reqx402 protocol**.

---

## ✨ What is REQX402?

REQX402 replaces traditional API billing with a **machine-native payment layer**.

AI agents can:
- Discover an API
- Call it
- Pay instantly in USDC  
all **without human accounts or long-lived credentials**.

Built for autonomous systems, not dashboards.

---

## 🔑 Core Principles

- **No API Keys**  
  Eliminate leaked secrets and key management entirely.

- **No Subscriptions**  
  Pay only when an API call is executed.

- **Machine-Native Payments**  
  Agents transact directly using USDC.

- **Trustless & Deterministic**  
  Every request includes payment, every response is verifiable.

- **Autonomous-First**  
  Designed for AI agents, bots, and on-chain automation.

---

## 🔄 How It Works

1. API provider exposes an endpoint via **reqx402**
2. Price per request is defined in USDC
3. Agent sends:
   - Request
   - Embedded USDC payment
4. Network verifies payment
5. API responds instantly

No accounts. No retries. No invoices.

---

## 🧠 Why REQX402?

Traditional APIs assume:
- Humans
- Credit cards
- Monthly plans

Autonomous agents need:
- Instant settlement
- Programmatic access
- Zero trust assumptions

REQX402 is the missing payment layer for the AI economy.

---

## 🧩 Use Cases

- Autonomous AI agents
- Agent-to-agent services
- On-chain automation
- Data marketplaces
- AI microservices
- Paywalled inference APIs

---

## 🧱 Architecture Overview

- **reqx402 protocol** — payment + request standard
- **USDC** — settlement currency
- **Stateless APIs** — no sessions, no keys
- **Agents** — self-funded, autonomous callers

---

## 📦 Example (Conceptual)

```http
POST /api/infer
X-REQX402-PAYMENT: usdc:1.25
Content-Type: application/json

{
  "prompt": "Summarize this document"
}
