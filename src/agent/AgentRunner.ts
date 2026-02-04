import { AutonomousAgent } from "./AutonomousAgent";
import { log } from "../utils/logger";

export class AgentRunner {
  async start() {
    const agent = new AutonomousAgent();
    const response = await agent.execute("mock://price-feed");
    log("Agent received:", response);
  }
}
