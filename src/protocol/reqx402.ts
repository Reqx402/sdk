import { getPrice } from "./pricing";

export async function reqx402(endpoint: string) {
  return {
    endpoint,
    price: getPrice(endpoint),
    currency: "USDC"
  };
}
