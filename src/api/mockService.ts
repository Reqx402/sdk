export async function mockService(endpoint: string) {
  return {
    endpoint,
    data: "Hello from a paid API call",
    timestamp: Date.now()
  };
}
