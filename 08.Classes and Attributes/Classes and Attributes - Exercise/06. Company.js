class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        let isValidData = [username, position, department]
            .map((el) => Boolean(el))
            .includes(false) || salary <= 0
            ? false
            : true
        if (isValidData) {
            if (this.departments[department]) {
                this.departments[department].push({ username, position, salary })
            } else {
                this.departments[department] = [{ username, position, salary }];
            }
            return `New employee is hired. Name: ${username}. Position: ${position}`;
        } else {
            throw new TypeError('Invalid input!');
        }
    };

    bestDepartment() {
        let bestDepartment = { average: 0 };
        for (const department in this.departments) {

            const currSalary = this.departments[department]
                .reduce((acc, value) => acc += (value.salary), 0);
            const currAverage = currSalary / this.departments[department].length;

            if (currAverage > bestDepartment.average) {
                bestDepartment.average = currAverage;
                bestDepartment.department = department;
            }
        }


        const sortedEmployee = this.departments[bestDepartment.department]
            .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));

        const employeeToPrint = [];
        for (const employee of sortedEmployee) {
            employeeToPrint.push(`${employee.username} ${employee.salary} ${employee.position}`);
        }

        return `Best Department is: ${bestDepartment.department}\nAverage salary: ${bestDepartment.average.toFixed(2)}\n${employeeToPrint.join('\n')}`
    };
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());