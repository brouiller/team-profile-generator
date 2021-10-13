const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, email, and office number", () => {
      const manager = new Manager.Manager(
        "John",
        12,
        "john@email.com",
        42
      );

      expect(manager).toEqual({
        name: "John",
        id: 12,
        email: "john@email.com",
        office: 42,
      });
    });
  });
});
