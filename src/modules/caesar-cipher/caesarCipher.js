const caesarCipher = (str, shift = 0) => {
    let result = ""

    if(shift === 0) return str;

    for(let i = 0; i < str.length; i += 1) {
        let charCode = str[i].charCodeAt();
        
        if((charCode >= 97 && charCode <= 122)) {
            charCode += shift

            charCode -= 97;

            charCode %= 26;

            charCode += 97;

            const toString = String.fromCharCode(charCode)
           

            result += toString

        };
      
        if((charCode >= 65 && charCode <= 90)) {
       
            charCode += shift
            charCode -= 65;

            charCode %= 26;

            charCode += 65;

            const toString = String.fromCharCode(charCode)
          

            result += toString

        };
        
        if(charCode < 97 && charCode < 65) {
          
            result += str[i];
        };
        
    };
    
    return result
}
module.exports = caesarCipher