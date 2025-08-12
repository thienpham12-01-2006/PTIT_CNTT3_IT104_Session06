var AllStudents = [];
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
        AllStudents.push(this);
    }
    Object.defineProperty(Student.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var Classroom = /** @class */ (function () {
    function Classroom() {
        this.students = [];
    }
    Classroom.prototype.showStudents = function () {
        console.log("Danh sach sinh vien:");
        this.students.forEach(function (e) {
            return console.log("ID: ".concat(e.getId, " - NAME: ").concat(e.getName));
        });
    };
    Classroom.prototype.addStudents = function (student) {
        this.students.push(student);
    };
    Classroom.prototype.filterStudent = function (id) {
        var student = this.students.find(function (e) { return e.getId == id; });
        if (student) {
            console.log("Id: ".concat(student.getId, "\nName: ").concat(student.getName));
        }
        else {
            console.log("Không tìm thấy sinh viên");
        }
    };
    Classroom.prototype.addStudentInClass = function (id) {
        var index = AllStudents.findIndex(function (s) { return s.getId === id; });
        if (index !== -1) {
            this.students.push(AllStudents[index]);
            AllStudents.splice(index, 1);
        }
        else {
            console.log("khong tim thay sinh vien nao trung voi id");
        }
    };
    return Classroom;
}());
new Student(1, "Nam");
new Student(2, "Hoa");
new Student(3, "Minh");
new Student(4, "Lan");
new Student(5, "Hùng");
new Student(6, "Mai");
var class1 = new Classroom();
var class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
