const caesarCipher = require("./caesarCipher");

test("can shift from a to z ", () => {
    expect(caesarCipher("a", 1)).toBe("b");
});

test("can shift from z to a ", () => {
    expect(caesarCipher("z", 1)).toBe("a");
});

test("works with capital letters", () => {
    expect(caesarCipher("Z", 1)).toBe("A");
});

test("works if string includes punctuation", () => {
    expect(caesarCipher("Z.", 1)).toBe("A.");
});

test("works if string includes punctuation", () => {
    expect(caesarCipher("Z!", 1)).toBe("A!");
});
