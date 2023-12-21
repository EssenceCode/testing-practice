const codeAt = (charVal) => {
    if(charVal >= 97 && charVal <= 122 ) return 97

    return 65
};

const mod = (charVal) => ((charVal % 26) + 26) % 26;

const shiftChar = (str, shift) => {
    const charCode = str.charCodeAt();
    
    if(shift === 0) return str;

    if((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)) {
        const code = codeAt(charCode);

        return String.fromCharCode(mod((charCode + shift) - code) + code);
    };

    return str;
}; 

 
export default function caesarCipher(string, shift = 0) {
    const encrypt = string.split("").map((str) => shiftChar(str, shift)).join("");

    return encrypt;
};
