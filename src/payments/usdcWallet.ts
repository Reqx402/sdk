export class USDCWallet {
  balance = 10;

  pay(amount: number) {
    if (this.balance < amount) {
      throw new Error("Insufficient USDC");
    }
    this.balance -= amount;
  }
}
