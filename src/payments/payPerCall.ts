import { reqx402 } from "../protocol/reqx402";
import { USDCWallet } from "./usdcWallet";

const wallet = new USDCWallet();

export async function payPerCall(endpoint: string) {
  const invoice = await reqx402(endpoint);
  wallet.pay(invoice.price);
}
