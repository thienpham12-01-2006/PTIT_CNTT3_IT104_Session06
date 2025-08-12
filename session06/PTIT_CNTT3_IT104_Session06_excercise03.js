//Abstract method: khi muốn định nghĩa chung cho tất cả các lớp con, nhưng không biết mô tả cụ thể nó làm gì.
//Method: khi biết rõ phương thức đó làm gì và có thể viết code thực hiện ngay.
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
var Job = /** @class */ (function () {
    function Job(type) {
        this.type = type;
    }
    //method
    Job.prototype.printType = function () {
        console.log("loai cong viec: ", this.type);
    };
    return Job;
}());
var PartimeJob = /** @class */ (function (_super) {
    __extends(PartimeJob, _super);
    function PartimeJob(workingHour) {
        var _this = _super.call(this, "PartTime") || this;
        _this.workingHour = workingHour;
        return _this;
    }
    //ghi đề lên abstract
    PartimeJob.prototype.calculateSalary = function () {
        console.log(30000 * this.workingHour);
    };
    return PartimeJob;
}(Job));
