import { mockService } from "./mockService";

export async function callApi(endpoint: string) {
  return mockService(endpoint);
}
