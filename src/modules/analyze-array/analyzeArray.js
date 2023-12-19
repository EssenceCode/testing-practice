const findAvg = array => {
    const sum = array.reduce((a, b) => a + b,0);

    const divideResult = Math.floor(sum / array.length);

    return divideResult
};

export default class AnalyzeArray {
    constructor(array) {
        this.average = findAvg(array)
        this.min = Math.min(...array);
        this.max = Math.max(...array);
        this.length = array.length;
        
    };    
};

// export default function analyzeArray(array) {
//     const property = new Range();

 

//     calcAverage(array, property)

//     property.min = Math.mix(...array);

//     property.max = Math.max(...array);
    
//     return {property}
// };