//build a base class for employees
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

//export class
module.exports = Employee;