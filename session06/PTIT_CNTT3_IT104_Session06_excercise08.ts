class Account {
  public accountNumber: string;
  protected balance: number;
  protected history: string[];
  protected status: string;

  constructor(accountNumber: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.history = [];
    this.status = "active";
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Số tiền nạp phải lớn hơn 0");
      return;
    }
    this.balance += amount;
    this.history.push(`Nạp: +${amount} | Số dư: ${this.balance}`);
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Số tiền rút phải lớn hơn 0");
      return;
    }
    if (amount > this.balance) {
      console.log("Không đủ số dư");
      return;
    }
    this.balance -= amount;
    this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
  }

  public showHistory(): void {
    console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
    this.history.forEach((entry, index) => {
      console.log(`${index + 1}. ${entry}`);
    });
  }
}

class SavingAccount extends Account {
  private interestRate: number;

  constructor(
    accountNumber: string,
    initialBalance: number,
    interestRate: number
  ) {
    super(accountNumber, initialBalance);
    this.interestRate = interestRate;
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Số tiền rút phải lớn hơn 0");
      return;
    }
    if (amount > this.balance) {
      console.log("Không đủ số dư để rút");
      return;
    }
    this.balance -= amount;
    if (this.balance < 0) {
      this.balance = 0;
    }
    this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
  }
}

class CheckingAccount extends Account {
  private overdraftLimit: number;

  constructor(
    accountNumber: string,
    initialBalance: number,
    overdraftLimit: number
  ) {
    super(accountNumber, initialBalance);
    this.overdraftLimit = overdraftLimit;
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Số tiền rút phải lớn hơn 0");
      return;
    }
    if (this.balance - amount < -this.overdraftLimit) {
      console.log("Vượt quá hạn mức thấu chi");
      return;
    }
    this.balance -= amount;
    this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
  }
}

const myChecking = new CheckingAccount("987654", 1000, 500);

myChecking.deposit(300);
myChecking.withdraw(1100);
myChecking.withdraw(600);
myChecking.withdraw(200);

myChecking.showHistory();