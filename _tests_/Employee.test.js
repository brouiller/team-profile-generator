const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it('should create an object with name, id, and email', () => {
            const employee = new Employee("John", 12, "john@email.com");

            expect(employee).toEqual({ name: "John", id: 12, email: "john@email.com" });
        });

        //
    });
});