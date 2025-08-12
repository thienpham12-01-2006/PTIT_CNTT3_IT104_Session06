let AllStudents: Student[] = [];

class Student {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;

    AllStudents.push(this);
  }

  get getId(): number {
    return this.id;
  }

  get getName(): string {
    return this.name;
  }
}

class Classroom {
  students: Student[] = [];

  showStudents() {
    console.log("Danh sach sinh vien:");
    this.students.forEach((e) =>
      console.log(`ID: ${e.getId} - NAME: ${e.getName}`)
    );
  }

  addStudents(student: Student) {
    this.students.push(student);
  }

  filterStudent(id: number) {
    let student = this.students.find((e) => e.getId == id);
    if (student) {
      console.log(`Id: ${student.getId}
Name: ${student.getName}`);
    } else {
      console.log("Không tìm thấy sinh viên");
    }
  }

  addStudentInClass(id: number) {
    const index = AllStudents.findIndex((s) => s.getId === id);
    if (index !== -1) {
      this.students.push(AllStudents[index]!);
      AllStudents.splice(index, 1);
    } else {
      console.log("khong tim thay sinh vien nao trung voi id");
    }
  }
}

new Student(1, "Nam");
new Student(2, "Hoa");
new Student(3, "Minh");
new Student(4, "Lan");
new Student(5, "Hùng");
new Student(6, "Mai");

const class1 = new Classroom();
const class2 = new Classroom();

class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);

class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);