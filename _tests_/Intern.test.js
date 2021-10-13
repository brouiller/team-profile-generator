const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, email, and school name", () => {
      const intern = new Intern.Intern(
        "John",
        12,
        "john@email.com",
        "Georgia Tech"
      );

      expect(intern).toEqual({
        name: "John",
        id: 12,
        email: "john@email.com",
        school: "Georgia Tech",
      });
    });
  });
});
