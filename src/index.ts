import { AgentRunner } from "./agent/AgentRunner";

async function main() {
  const runner = new AgentRunner();
  await runner.start();
}

main();
