const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, email, and github username", () => {
      const engineer = new Engineer.Engineer("John", 12, "john@email.com", "Testjohn");

      expect(engineer).toEqual({
        name: "John",
        id: 12,
        email: "john@email.com",
        github: "Testjohn",
      });
    });
  });
});
