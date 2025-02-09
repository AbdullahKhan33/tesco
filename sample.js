class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Position: ${this.position}`;
    }

    promote(newPosition) {
        this.position = newPosition;
    }
}

module.exports = Employee;