import Calculator from "./calculator";

test("adds 2 + 2 to equal to 4", () => {
    expect(Calculator.add(2, 2)).toBe(4);
});

test("subtract 4 - 2 to equal to 2", () => {
    expect(Calculator.subtract(4, 2)).toBe(2);
})

test("divide 4 / 2 to equal to 2", () => {
    expect(Calculator.divide(4, 2)).toBe(2);
})

test("multiply 4 * 2 to equal to 8", () => {
    expect(Calculator.multiply(4, 2)).toBe(8);
})
