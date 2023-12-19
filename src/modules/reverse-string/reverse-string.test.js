import reverseString from "./reverse-string";

test("takes a string and reverse it", () => {
    expect(reverseString("car")).toBe("rac");
});

test("reverse orange to egnaro", () => {
    expect(reverseString("orange")).toBe("egnaro");
});