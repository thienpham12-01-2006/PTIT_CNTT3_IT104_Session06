class Accouunt {
  acccountNumber: string;
  protected balance: number;
  protected history: string[];
  protected status: string;

  constructor(acccountNumber: string, balance: number = 0) {
    this.acccountNumber = acccountNumber;
    this.balance = balance;
    this.history = [];
    this.status = "active";
  }

  deposit(amount: number) {
    if (amount <= 0) {
      console.log("So tien phai nap lon hon 0");
      return;
    }
    this.balance += amount;
    this.history.push(`Nap: +${amount} | So du: ${this.balance}`);
  }

  withdarw(amount: number) {
    if (amount <= 0) {
      console.log("So tien phai nap lon hon 0");
      return;
    }
    if (amount > this.balance) {
      console.log("Khong du so du");
      return;
    }
    this.balance -= amount;
    this.history.push(`Rut: -${amount} | So du: ${this.balance}`);
  }

  showHistory() {
    console.log("lich su giao dich cua tai khoan" + this.acccountNumber);
    this.history.forEach((e, index) => {
      console.log(`${index + 1}. ${e}`);
    });
  }
}

class SavingAccount extends Accouunt {
  interestRate: number;

  constructor(acccountNumber: string, balance: number, interestRate: number) {
    super(acccountNumber, balance);
    this.interestRate = interestRate;
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("So tien phai nap lon hon 0");
      return;
    }
    if (amount > this.balance) {
      console.log("khong du tien de rut");
      return;
    }

    this.balance -= amount;
    if (this.balance < 0) {
      this.balance = 0;
    }
    this.history.push(`Rut: -${amount} | So du: ${this.balance}`);
  }
}

const mySaving = new SavingAccount("123456", 1000, 0.05);

mySaving.deposit(500);
mySaving.withdraw(300);
mySaving.withdraw(1500);
mySaving.withdraw(1200);

mySaving.showHistory();