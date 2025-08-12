var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(accountNumber, initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }
    Account.prototype.deposit = function (amount) {
        if (amount <= 0) {
            console.log("Số tiền nạp phải lớn hơn 0");
            return;
        }
        this.balance += amount;
        this.history.push("N\u1EA1p: +".concat(amount, " | S\u1ED1 d\u01B0: ").concat(this.balance));
    };
    Account.prototype.withdraw = function (amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Không đủ số dư");
            return;
        }
        this.balance -= amount;
        this.history.push("R\u00FAt: -".concat(amount, " | S\u1ED1 d\u01B0: ").concat(this.balance));
    };
    Account.prototype.showHistory = function () {
        console.log("L\u1ECBch s\u1EED giao d\u1ECBch c\u1EE7a t\u00E0i kho\u1EA3n ".concat(this.accountNumber, ":"));
        this.history.forEach(function (entry, index) {
            console.log("".concat(index + 1, ". ").concat(entry));
        });
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, initialBalance, interestRate) {
        var _this = _super.call(this, accountNumber, initialBalance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.withdraw = function (amount) {
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
        this.history.push("R\u00FAt: -".concat(amount, " | S\u1ED1 d\u01B0: ").concat(this.balance));
    };
    return SavingAccount;
}(Account));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountNumber, initialBalance, overdraftLimit) {
        var _this = _super.call(this, accountNumber, initialBalance) || this;
        _this.overdraftLimit = overdraftLimit;
        return _this;
    }
    CheckingAccount.prototype.withdraw = function (amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        if (this.balance - amount < -this.overdraftLimit) {
            console.log("Vượt quá hạn mức thấu chi");
            return;
        }
        this.balance -= amount;
        this.history.push("R\u00FAt: -".concat(amount, " | S\u1ED1 d\u01B0: ").concat(this.balance));
    };
    return CheckingAccount;
}(Account));
var myChecking = new CheckingAccount("987654", 1000, 500);
myChecking.deposit(300);
myChecking.withdraw(1100);
myChecking.withdraw(600);
myChecking.withdraw(200);
myChecking.showHistory();
