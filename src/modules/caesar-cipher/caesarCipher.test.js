// const caesarCipher = require("./caesarCipher");

const caesarCipher = require("./caesarCipher");

test("returns empty string if there's no given string as argument", () => {
    expect(caesarCipher("", 1)).toBe("");
});

test("returns the string if there's no shift value given", () => {
    expect(caesarCipher("abc")).toBe("abc");
});

test("works with smaller case", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd")
});

test("wraps smaller case from z to a", () => {
    expect(caesarCipher("xyz", 1)).toBe("yza")
});

test("works with special characters", () => {
    expect(caesarCipher("@abc", 1)).toBe("@bcd")
});

test("works with punctuation and smaller case", () => {
    expect(caesarCipher("xyz!", 1)).toBe("yza!")
});

test("works with capital letters", () => {
    expect(caesarCipher("ABC", 1)).toBe("BCD")
});

test("wraps upper case from Z to A", () => {
    expect(caesarCipher("XYZ", 1)).toBe("YZA")
});

test("works with punctuation and upper case", () => {
    expect(caesarCipher("XYZ!", 1)).toBe("YZA!")
});

