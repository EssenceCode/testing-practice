const isLowerCase = string => {
    if(string === string.toLowerCase()) return true;

    return false;
}

function caesarCipher(string, key) {
    let result = ""
    const regex = /\p{P}/gu;

    const smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const capitalLetters = smallLetters.map((letter) => letter.toUpperCase())
    const punctuations = ["!", "?", ".", ";", ":", "'"]

    for (let i = 0; i < string.length; i += 1) {
        if(isLowerCase(string[i]) || regex.test(string[i])) {
            if(smallLetters.includes(string[i])) {
                let code = smallLetters.indexOf(string[i]);
                code += key;

                let index = code;
                index %= 26;

                result += smallLetters[index]
            };

            
        };

        if(isLowerCase(string[i]) === false) {
            if(capitalLetters.includes(string[i])) {
                let code = capitalLetters.indexOf(string[i]);
                code += key;

                let index = code;
                index %= 26;
                result += capitalLetters[index]

            };
        };

        if(regex.test(string[i])) {
            if(punctuations.includes(string[i]))

            result += string[i]
        }

        
    };

    return result
};

module.exports = caesarCipher