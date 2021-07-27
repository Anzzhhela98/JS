function extend() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let inheritToString = super.toString().slice(0, -1);
            return inheritToString + `, subject: ${this.subject})`
        }
    };

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            let inheritToString = super.toString().slice(0, -1);
            return inheritToString + `, course: ${this.course})`
        }
    };

    return { Person, Teacher, Student };
}

let person = new Person('Anzhela', '123dz@gmail.com');
let teacher = new Teacher('Dilqna', '9898jh@gmail.com', 'Math');
let student = new Student('Ivana', '6363jh@gmail.com', 'IV');

console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());