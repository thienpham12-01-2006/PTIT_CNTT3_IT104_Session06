//Abstract method: khi muốn định nghĩa chung cho tất cả các lớp con, nhưng không biết mô tả cụ thể nó làm gì.
//Method: khi biết rõ phương thức đó làm gì và có thể viết code thực hiện ngay.

abstract class Job {
  // abstract method
  abstract calculateSalary(): void;
  constructor(public type: string) {}

  //method
  printType() {
    console.log(`loai cong viec: `, this.type);
  }
}

class PartimeJob extends Job {
  workingHour: number;
  constructor(workingHour: number) {
    super("PartTime");
    this.workingHour = workingHour;
  }

  //ghi đề lên abstract
  calculateSalary(): void {
    console.log(30000 * this.workingHour);
  }
}