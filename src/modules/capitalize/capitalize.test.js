import capitalize from "./capitalize";

test("takes a string and returns it with the first character capitalized", () => {
    expect(capitalize("ryan")).toBe("Ryan");
  });