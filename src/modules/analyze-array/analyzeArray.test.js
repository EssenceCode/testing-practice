import AnalyzeArray from "./analyzeArray";

const array = [1,8,3,4,2,6]

const obj = new AnalyzeArray(array);

test("check if it returns an object", () => {
   
    expect(typeof obj).toBe("object")
})

test("get the average number in the array", () => {
    expect(obj.average).toBe(4);
});

test("get the minimum number in the array", () => {
    expect(obj.min).toBe(1);
});

test("get the maximum number in the array", () => {
    expect(obj.max).toBe(8);
});

test("get the length of the array", () => {
    expect(obj.length).toBe(6);
});

test("check if the object returns the property", () => {
    const object = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
      };
    expect(obj).toEqual(object)
})



