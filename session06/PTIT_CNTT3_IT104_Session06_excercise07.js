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
var Accouunt = /** @class */ (function () {
    function Accouunt(acccountNumber, balance) {
        if (balance === void 0) { balance = 0; }
        this.acccountNumber = acccountNumber;
        this.balance = balance;
        this.history = [];
        this.status = "active";
    }
    Accouunt.prototype.deposit = function (amount) {
        if (amount <= 0) {
            console.log("So tien phai nap lon hon 0");
            return;
        }
        this.balance += amount;
        this.history.push("Nap: +".concat(amount, " | So du: ").concat(this.balance));
    };
    Accouunt.prototype.withdarw = function (amount) {
        if (amount <= 0) {
            console.log("So tien phai nap lon hon 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Khong du so du");
            return;
        }
        this.balance -= amount;
        this.history.push("Rut: -".concat(amount, " | So du: ").concat(this.balance));
    };
    Accouunt.prototype.showHistory = function () {
        console.log("lich su giao dich cua tai khoan" + this.acccountNumber);
        this.history.forEach(function (e, index) {
            console.log("".concat(index + 1, ". ").concat(e));
        });
    };
    return Accouunt;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(acccountNumber, balance, interestRate) {
        var _this = _super.call(this, acccountNumber, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.withdraw = function (amount) {
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
        this.history.push("Rut: -".concat(amount, " | So du: ").concat(this.balance));
    };
    return SavingAccount;
}(Accouunt));
var mySaving = new SavingAccount("123456", 1000, 0.05);
mySaving.deposit(500);
mySaving.withdraw(300);
mySaving.withdraw(1500);
mySaving.withdraw(1200);
mySaving.showHistory();
