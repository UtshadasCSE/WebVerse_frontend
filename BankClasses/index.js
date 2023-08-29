const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const amountInput = document.getElementById("amount");
const balanceDiv = document.getElementById("balance");

class Bank {
  constructor(balance) {
    this.balance = balance;
  }
  withdraw(amount) {
    if (this.balance - amount <= 0) {
      console.log("❌ You cannot withdraw more than what you have!");
      console.log({ balance: this.balance });
      return;
    }
    this.balance -= amount;
    console.log("withdrew", `$${amount}`);
    console.log({ balance: this.balance });
  }
  deposit(amount) {
    this.balance += amount;
    console.log("deposited", `$${amount}`);
    console.log({ balance: this.balance });
  }
}

const utsha = new Bank(0);
depositButton.onclick = () => {
  const amount = Number(amountInput.value);
  utsha.deposit(amount);
  balanceDiv.innerText = `Balance: ${utsha.balance}`;
};

withdrawButton.onclick = () => {
  const amount = Number(amountInput.value);
  utsha.withdraw(amount);
  balanceDiv.innerText = `Balance: ${utsha.balance}`;
};
