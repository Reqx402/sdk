import { payPerCall } from "../payments/payPerCall";
import { callApi } from "../api/callApi";

export class AutonomousAgent {
  async execute(endpoint: string) {
    await payPerCall(endpoint);
    const result = await callApi(endpoint);
    return result;
  }
}
