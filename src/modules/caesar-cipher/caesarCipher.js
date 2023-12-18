const codeAt = (strInt) => {
    if(strInt >= 97 && strInt <= 122 ) return 97

    return 65
}

const caesarCipher = (str, shift = 0) => {
    let result = ""

    if(shift === 0) return str;

    for(let i = 0; i < str.length; i += 1) {
        let charCode = str[i].charCodeAt();
        
        if((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)) {
            const code = codeAt(charCode);

            charCode += shift;

            charCode -= code;

            charCode %= 26;

            charCode += code;

            const toString = String.fromCharCode(charCode)
           

            result += toString

        } else {
            const toString = String.fromCharCode(charCode)

            result += toString
        };
      
        
        
    };
    
    return result
}
module.exports = caesarCipher